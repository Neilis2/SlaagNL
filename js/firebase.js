// ══════════════════════════════════════
// SLAAGNL — Firebase Integration
// Auth: Email/Password + Email Verification
// DB: Firestore (user profiles + progress)
// ══════════════════════════════════════

// ── Firebase SDK (via CDN) ──────────────
// Loaded in index.html before this file

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ── Config ─────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyBmK87GK96aAju66-FwxxtAX3u4jLNvTk8",
  authDomain:        "slaagnl.firebaseapp.com",
  projectId:         "slaagnl",
  storageBucket:     "slaagnl.firebasestorage.app",
  messagingSenderId: "421592574232",
  appId:             "1:421592574232:web:848ac9425cd5b71336566d"
};

// ── Init ───────────────────────────────
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// ══════════════════════════════════════
// AUTH STATE LISTENER
// Runs on every page load — checks if user is logged in
// ══════════════════════════════════════
onAuthStateChanged(auth, async (user) => {
  if (user) {
    if (!user.emailVerified) {
      // Logged in but not verified — show verify screen
      showScreen('screen-verify');
      document.getElementById('ve-email').textContent = user.email;
    } else {
      // Fully logged in — load dashboard
      const profile = await getUserProfile(user.uid);
      if (profile) {
        state.user = { uid: user.uid, ...profile };
        showScreen('screen-dashboard');
      }
    }
  }
  // If no user: stay on welcome screen (default)
});

// ══════════════════════════════════════
// SIGN UP
// ══════════════════════════════════════
async function firebaseSignup(name, age, email, password, country, examDate, examType) {
  try {
    // 1. Create auth user
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;

    // 2. Send verification email
    await sendEmailVerification(user);

    // 3. Save profile to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      name,
      age:      parseInt(age),
      email,
      country,
      examDate: examDate || null,
      examType,
      lang:     state.lang,
      level:    'A1',
      createdAt: serverTimestamp(),
      // Initial topic mastery (all start at 0%)
      mastery: {
        grammatica:   0,
        gezondheid:   0,
        burgerschap:  0,
        onderwijs:    0,
        werk:         0,
        wonen:        0,
        geschiedenis: 0,
        cultuur:      0,
      },
      streak:      0,
      lastStudied: null,
      premiumDaysLeft: 1,  // 1 free premium day
    });

    // 4. Show verify screen
    document.getElementById('ve-email').textContent = email;
    showScreen('screen-verify');

  } catch (err) {
    return handleAuthError(err);
  }
}

// ══════════════════════════════════════
// LOG IN
// ══════════════════════════════════════
async function firebaseLogin(email, password) {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const user = cred.user;

    if (!user.emailVerified) {
      showScreen('screen-verify');
      document.getElementById('ve-email').textContent = user.email;
      return;
    }

    const profile = await getUserProfile(user.uid);
    if (profile) {
      state.user = { uid: user.uid, ...profile };
      showScreen('screen-dashboard');
    }

  } catch (err) {
    return handleAuthError(err);
  }
}

// ══════════════════════════════════════
// RESEND VERIFICATION EMAIL
// ══════════════════════════════════════
async function firebaseResendVerification() {
  const user = auth.currentUser;
  if (user) {
    try {
      await sendEmailVerification(user);
      alert('Email sent!');
    } catch (err) {
      console.error(err);
    }
  }
}

// ══════════════════════════════════════
// FORGOT PASSWORD
// ══════════════════════════════════════
async function firebaseForgotPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset email sent to ' + email);
  } catch (err) {
    return handleAuthError(err);
  }
}

// ══════════════════════════════════════
// SIGN OUT
// ══════════════════════════════════════
async function firebaseSignOut() {
  await signOut(auth);
  state.user = null;
  showScreen('screen-welcome');
}

// ══════════════════════════════════════
// FIRESTORE — USER PROFILE
// ══════════════════════════════════════
async function getUserProfile(uid) {
  try {
    const snap = await getDoc(doc(db, 'users', uid));
    if (snap.exists()) return snap.data();
    return null;
  } catch (err) {
    console.error('Error loading profile:', err);
    return null;
  }
}

async function updateMastery(topic, correct) {
  const user = auth.currentUser;
  if (!user) return;

  const change = correct ? 3 : -5;
  const current = state.user?.mastery?.[topic] ?? 0;
  const newVal = Math.min(100, Math.max(0, current + change));

  // Update local state
  if (state.user?.mastery) state.user.mastery[topic] = newVal;

  // Update Firestore
  try {
    await updateDoc(doc(db, 'users', user.uid), {
      [`mastery.${topic}`]: newVal,
      lastStudied: serverTimestamp(),
    });
  } catch (err) {
    console.error('Error updating mastery:', err);
  }
}

// ══════════════════════════════════════
// ERROR HANDLER
// ══════════════════════════════════════
function handleAuthError(err) {
  const t = T[state.lang];
  const messages = {
    'auth/email-already-in-use':   t.errEmailInUse  || 'This email is already registered.',
    'auth/invalid-email':          t.errEmail,
    'auth/weak-password':          t.errPass,
    'auth/user-not-found':         t.errNoUser      || 'No account found with this email.',
    'auth/wrong-password':         t.errWrongPass   || 'Incorrect password.',
    'auth/too-many-requests':      t.errTooMany     || 'Too many attempts. Try again later.',
    'auth/network-request-failed': t.errNetwork     || 'Connection error. Check your internet.',
  };
  return messages[err.code] || err.message;
}

// ══════════════════════════════════════
// EXPORTS (used by app.js)
// ══════════════════════════════════════
window.FB = {
  signup:           firebaseSignup,
  login:            firebaseLogin,
  resendVerification: firebaseResendVerification,
  forgotPassword:   firebaseForgotPassword,
  signOut:          firebaseSignOut,
  updateMastery,
};
