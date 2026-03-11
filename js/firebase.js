// ══════════════════════════════════════
// SLAAGNL — Firebase v12 (ES Modules)
// ══════════════════════════════════════

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBmK87GK96aAju66-FwxxtAX3u4jLNvTk8",
  authDomain:        "slaagnl.firebaseapp.com",
  projectId:         "slaagnl",
  storageBucket:     "slaagnl.firebasestorage.app",
  messagingSenderId: "421592574232",
  appId:             "1:421592574232:web:848ac9425cd5b71336566d"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

console.log("✅ Firebase inicializado");

// Auth state listener
onAuthStateChanged(auth, async (user) => {
  if (user) {
    if (!user.emailVerified) {
      showScreen('screen-verify');
      const el = document.getElementById('ve-email');
      if (el) el.textContent = user.email;
    } else {
      try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
          window.state.user = { uid: user.uid, ...snap.data() };
          showScreen('screen-dashboard');
        }
      } catch(e) { console.error('Profile error:', e); }
    }
  }
});

// Sign up
async function firebaseSignup(name, age, email, password, country, examDate, examType) {
  try {
    console.log("Creando usuario:", email);
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    console.log("✅ Usuario creado:", user.uid);

    await sendEmailVerification(user, {
      url: 'https://neilis2.github.io/SlaagNL/',
      handleCodeInApp: false,
    });
    console.log("✅ Email de verificación enviado");

    await setDoc(doc(db, 'users', user.uid), {
      name, age: parseInt(age), email, country,
      examDate: examDate || null, examType,
      lang: window.state.lang, level: 'A1',
      createdAt: serverTimestamp(),
      mastery: { grammatica:0, gezondheid:0, burgerschap:0, onderwijs:0, politiek:0, geschiedenis:0 },
      streak: 0, lastStudied: null, premiumDaysLeft: 1,
    });
    console.log("✅ Perfil guardado en Firestore");

    const el = document.getElementById('ve-email');
    if (el) el.textContent = email;
    showScreen('screen-verify');
    return null;

  } catch (err) {
    console.error("❌ Error signup:", err.code, err.message);
    return handleAuthError(err);
  }
}

// Log in
async function firebaseLogin(email, password) {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    if (!user.emailVerified) {
      const el = document.getElementById('ve-email');
      if (el) el.textContent = user.email;
      showScreen('screen-verify');
      return null;
    }
    const snap = await getDoc(doc(db, 'users', user.uid));
    if (snap.exists()) {
      window.state.user = { uid: user.uid, ...snap.data() };
      showScreen('screen-dashboard');
    }
    return null;
  } catch (err) {
    console.error("❌ Error login:", err.code, err.message);
    return handleAuthError(err);
  }
}

// Resend verification
async function firebaseResendVerification() {
  const user = auth.currentUser;
  if (user) {
    try { await sendEmailVerification(user); alert('✅ Correo enviado'); }
    catch (err) { alert('Error: ' + err.message); }
  } else { alert('No hay sesión activa'); }
}

// Forgot password
async function firebaseForgotPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('✅ Correo enviado a ' + email);
  } catch (err) { alert(handleAuthError(err)); }
}

// Sign out
async function firebaseSignOut() {
  await signOut(auth);
  window.state.user = null;
  showScreen('screen-welcome');
}

// Update mastery
async function updateMastery(topic, correct) {
  const user = auth.currentUser;
  if (!user) return;
  const change  = correct ? 3 : -5;
  const current = window.state.user?.mastery?.[topic] ?? 0;
  const newVal  = Math.min(100, Math.max(0, current + change));
  if (window.state.user?.mastery) window.state.user.mastery[topic] = newVal;
  try {
    await updateDoc(doc(db, 'users', user.uid), {
      [`mastery.${topic}`]: newVal,
      lastStudied: serverTimestamp(),
    });
  } catch (err) { console.error('Mastery error:', err); }
}

// Error messages
function handleAuthError(err) {
  const map = {
    'auth/email-already-in-use':  'Este correo ya está registrado.',
    'auth/weak-password':         'La contraseña debe tener al menos 8 caracteres.',
    'auth/user-not-found':        'No existe cuenta con este correo.',
    'auth/wrong-password':        'Contraseña incorrecta.',
    'auth/invalid-credential':    'Correo o contraseña incorrectos.',
    'auth/too-many-requests':     'Demasiados intentos. Espera un momento.',
    'auth/network-request-failed':'Error de conexión. Revisa tu internet.',
  };
  return map[err.code] || err.message;
}

// Expose to app.js via window
window.FB = { signup: firebaseSignup, login: firebaseLogin, resendVerification: firebaseResendVerification, forgotPassword: firebaseForgotPassword, signOut: firebaseSignOut, updateMastery };
