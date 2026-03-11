// ══════════════════════════════════════
// SLAAGNL — Firebase (compat mode)
// ══════════════════════════════════════

function showDebug(msg) {
  const el = document.getElementById('su-debug');
  if (el) { el.style.display = 'block'; el.textContent = msg; }
  console.error('SLAAGNL DEBUG:', msg);
}

const firebaseConfig = {
  apiKey:            "AIzaSyBmK87GK96aAju66-FwxxtAX3u4jLNvTk8",
  authDomain:        "slaagnl.firebaseapp.com",
  projectId:         "slaagnl",
  storageBucket:     "slaagnl.firebasestorage.app",
  messagingSenderId: "421592574232",
  appId:             "1:421592574232:web:848ac9425cd5b71336566d"
};

try {
  firebase.initializeApp(firebaseConfig);
  showDebug('✅ Firebase iniciado');
} catch(e) {
  showDebug('❌ Error iniciando Firebase: ' + e.message);
}

const auth = firebase.auth();
const db   = firebase.firestore();

// Auth state listener
auth.onAuthStateChanged(async (user) => {
  if (user) {
    if (!user.emailVerified) {
      showScreen('screen-verify');
      const el = document.getElementById('ve-email');
      if (el) el.textContent = user.email;
    } else {
      try {
        const snap = await db.collection('users').doc(user.uid).get();
        if (snap.exists) {
          state.user = { uid: user.uid, ...snap.data() };
          showScreen('screen-dashboard');
        }
      } catch(e) { showDebug('Profile error: ' + e.message); }
    }
  }
});

// Sign up
async function firebaseSignup(name, age, email, password, country, examDate, examType) {
  try {
    showDebug('Intentando crear usuario: ' + email);
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    showDebug('✅ Usuario creado: ' + cred.user.uid);
    const user = cred.user;
    
    try {
      await user.sendEmailVerification();
      showDebug('✅ Email de verificación enviado');
    } catch(e) {
      showDebug('⚠️ Error enviando email: ' + e.message);
    }

    try {
      await db.collection('users').doc(user.uid).set({
        name, age: parseInt(age), email, country,
        examDate: examDate || null, examType,
        lang: state.lang, level: 'A1',
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        mastery: { grammatica:0, gezondheid:0, burgerschap:0, onderwijs:0, politiek:0, geschiedenis:0 },
        streak: 0, lastStudied: null, premiumDaysLeft: 1,
      });
      showDebug('✅ Perfil guardado en Firestore');
    } catch(e) {
      showDebug('⚠️ Error guardando perfil: ' + e.message);
    }

    const el = document.getElementById('ve-email');
    if (el) el.textContent = email;
    showScreen('screen-verify');
    return null;

  } catch (err) {
    showDebug('❌ Error registro: ' + err.code + ' — ' + err.message);
    return handleAuthError(err);
  }
}

// Log in
async function firebaseLogin(email, password) {
  try {
    const cred = await auth.signInWithEmailAndPassword(email, password);
    const user = cred.user;
    if (!user.emailVerified) {
      const el = document.getElementById('ve-email');
      if (el) el.textContent = user.email;
      showScreen('screen-verify');
      return null;
    }
    const snap = await db.collection('users').doc(user.uid).get();
    if (snap.exists) {
      state.user = { uid: user.uid, ...snap.data() };
      showScreen('screen-dashboard');
    }
    return null;
  } catch (err) {
    return handleAuthError(err);
  }
}

// Resend verification
async function firebaseResendVerification() {
  const user = auth.currentUser;
  if (user) {
    try { await user.sendEmailVerification(); alert('Correo enviado'); }
    catch (err) { alert('Error: ' + err.message); }
  } else {
    alert('No hay sesión activa');
  }
}

// Forgot password
async function firebaseForgotPassword(email) {
  try {
    await auth.sendPasswordResetEmail(email);
    alert('Correo de recuperación enviado a ' + email);
  } catch (err) { return handleAuthError(err); }
}

// Sign out
async function firebaseSignOut() {
  await auth.signOut();
  state.user = null;
  showScreen('screen-welcome');
}

// Update mastery
async function updateMastery(topic, correct) {
  const user = auth.currentUser;
  if (!user) return;
  const change  = correct ? 3 : -5;
  const current = state.user?.mastery?.[topic] ?? 0;
  const newVal  = Math.min(100, Math.max(0, current + change));
  if (state.user?.mastery) state.user.mastery[topic] = newVal;
  try {
    await db.collection('users').doc(user.uid).update({
      [`mastery.${topic}`]: newVal,
      lastStudied: firebase.firestore.FieldValue.serverTimestamp(),
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

window.FB = { signup: firebaseSignup, login: firebaseLogin, resendVerification: firebaseResendVerification, forgotPassword: firebaseForgotPassword, signOut: firebaseSignOut, updateMastery };
