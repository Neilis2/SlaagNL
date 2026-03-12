// ══════════════════════════════════════
// SLAAGNL — Dashboard Logic v3
// ══════════════════════════════════════

// ── Plans ─────────────────────────────
const PLANS = {
  libre:    { name: { es: 'Libre',     en: 'Free',      ar: 'مجاني'    }, price: '€0',      exercises: 10, topics: 3,  simCount: 0,  unlimited: false },
  enfocado: { name: { es: 'Enfocado',  en: 'Focused',   ar: 'مركّز'    }, price: '€4.99',   exercises: 30, topics: 8,  simCount: 2,  unlimited: false },
  completo: { name: { es: 'Completo',  en: 'Complete',  ar: 'كامل'     }, price: '€7.99',   exercises: -1, topics: -1, simCount: -1, unlimited: true  },
};

// ── Topics ─────────────────────────────
const TOPICS = {
  mvv: [
    {
      block: { es: 'El Idioma', en: 'The Language', ar: 'اللغة' },
      topics: [
        { id: 'grammatica',   nl: 'Grammatica',   tr: { es: 'Gramática',   en: 'Grammar',     ar: 'قواعد اللغة'   }, emoji: '📝', ready: false },
        { id: 'getallen',     nl: 'Getallen',     tr: { es: 'Números',     en: 'Numbers',     ar: 'الأرقام'       }, emoji: '🔢', ready: false },
        { id: 'adjectieven',  nl: 'Adjectieven',  tr: { es: 'Adjetivos',   en: 'Adjectives',  ar: 'الصفات'        }, emoji: '🎨', ready: false },
        { id: 'emoties',      nl: 'Emoties',      tr: { es: 'Emociones',   en: 'Emotions',    ar: 'المشاعر'       }, emoji: '💬', ready: false },
        { id: 'vocabulaire',  nl: 'Vocabulaire',  tr: { es: 'Vocabulario', en: 'Vocabulary',  ar: 'المفردات'      }, emoji: '📖', ready: false },
        { id: 'artikelen',    nl: 'Artikelen',    tr: { es: 'Artículos',   en: 'Articles',    ar: 'أدوات التعريف' }, emoji: '📌', ready: false },
        { id: 'werkwoorden',  nl: 'Werkwoorden',  tr: { es: 'Verbos',      en: 'Verbs',       ar: 'الأفعال'       }, emoji: '🔄', ready: false },
      ]
    },
    {
      block: { es: 'La Sociedad', en: 'Society', ar: 'المجتمع' },
      topics: [
        { id: 'zorg',         nl: 'Zorg',         tr: { es: 'Salud',       en: 'Healthcare',  ar: 'الرعاية'       }, emoji: '🏥', ready: false },
        { id: 'wonen',        nl: 'Wonen',        tr: { es: 'Vivienda',    en: 'Housing',     ar: 'السكن'         }, emoji: '🏠', ready: false },
        { id: 'werk',         nl: 'Werk',         tr: { es: 'Empleo',      en: 'Work',        ar: 'العمل'         }, emoji: '💼', ready: false },
        { id: 'onderwijs',    nl: 'Onderwijs',    tr: { es: 'Educación',   en: 'Education',   ar: 'التعليم'       }, emoji: '🏫', ready: false },
        { id: 'rechten',      nl: 'Rechten',      tr: { es: 'Derechos',    en: 'Rights',      ar: 'الحقوق'        }, emoji: '⚖️', ready: false },
        { id: 'geschiedenis', nl: 'Geschiedenis', tr: { es: 'Historia',    en: 'History',     ar: 'التاريخ'       }, emoji: '👑', ready: false },
        { id: 'politiek',     nl: 'Politiek',     tr: { es: 'Política',    en: 'Politics',    ar: 'السياسة'       }, emoji: '🏛️', ready: false },
        { id: 'geografie',    nl: 'Geografie',    tr: { es: 'Geografía',   en: 'Geography',   ar: 'الجغرافيا'     }, emoji: '🗺️', ready: false },
      ]
    },
    {
      block: { es: 'El Examen', en: 'The Exam', ar: 'الامتحان' },
      topics: [
        { id: 'kns',     nl: 'KNS',     tr: { es: '70 preguntas', en: '70 questions', ar: '70 سؤال'  }, emoji: '📋', ready: false, soon: true },
        { id: 'spreken', nl: 'Spreken', tr: { es: 'Hablar',       en: 'Speaking',     ar: 'التحدث'   }, emoji: '🗣️', ready: false, soon: true },
        { id: 'lezen',   nl: 'Lezen',   tr: { es: 'Leer',         en: 'Reading',      ar: 'القراءة'  }, emoji: '📗', ready: false, soon: true },
      ]
    }
  ]
};

// ── i18n dashboard strings ─────────────
const DT = {
  es: {
    greetMorning: 'Buenos días', greetDay: '¡Buenas', greetNight: 'Buenas noches',
    dominio: 'DOMINIO GENERAL',
    examIn: 'Examen en', days: 'días',
    giftTitle: '¡1 día Premium gratis!', giftSub: 'Sin límite de ejercicios hoy',
    giftBtn: 'Activar',
    testBtn: 'Test Final',
    toastLocked: 'Necesitas 35% en cada tema para el Test Final',
    toastSoon: '¡Próximamente!',
    blockLabels: ['El Idioma', 'La Sociedad', 'El Examen'],
    soon: 'Próx.',
    // Profile
    myProgress: 'Mi progreso', editProfile: 'Editar perfil',
    settings: 'Configuración', contact: 'Contacto',
    planLabel: 'Plan actual',
    // Settings subpanel
    appLang: 'Idioma de la app', resetProgress: 'Reiniciar progreso',
    logout: 'Cerrar sesión', deleteAccount: 'Eliminar cuenta',
    // Edit subpanel
    editName: 'Nombre', editCountry: 'País', editExamDate: 'Fecha del examen',
    saveChanges: 'Guardar cambios',
    // Plans
    planTitle: 'Elige tu plan',
    planFree: 'Libre', planFocused: 'Enfocado', planComplete: 'Completo',
    perMonth: '/mes', current: 'Plan actual', select: 'Seleccionar',
    // Confirmations
    confirmLogout: '¿Cerrar sesión?', confirmLogoutSub: 'Podrás volver a entrar cuando quieras.',
    confirmReset: '¿Reiniciar todo?', confirmResetSub: 'Tu progreso vuelve a 0. Tu cuenta se mantiene.',
    confirmDelete: '¿Eliminar cuenta?', confirmDeleteSub: 'Esta acción es permanente. Escribe tu contraseña para confirmar.',
    confirm: 'Confirmar', cancel: 'Cancelar', yes: 'Sí', no: 'No',
    // Contact
    contactTitle: 'Contacto', contactSub: 'Estamos aquí para ayudarte',
    contactEmail: 'Escríbenos a',
    // Progress
    progressTitle: 'Mi progreso',
    progressSub: 'Evolución por tema',
    premiumBlur: 'Ver todos los temas con el plan Completo',
    upgradePlan: 'Ver planes →',
    close: 'Cerrar',
  },
  en: {
    greetMorning: 'Good morning', greetDay: 'Hey', greetNight: 'Good evening',
    dominio: 'OVERALL MASTERY',
    examIn: 'Exam in', days: 'days',
    giftTitle: '1 free Premium day!', giftSub: 'Unlimited exercises today',
    giftBtn: 'Activate',
    testBtn: 'Final Test',
    toastLocked: 'You need 35% on each topic to unlock the Final Test',
    toastSoon: 'Coming soon!',
    blockLabels: ['The Language', 'Society', 'The Exam'],
    soon: 'Soon',
    myProgress: 'My progress', editProfile: 'Edit profile',
    settings: 'Settings', contact: 'Contact',
    planLabel: 'Current plan',
    appLang: 'App language', resetProgress: 'Reset progress',
    logout: 'Log out', deleteAccount: 'Delete account',
    editName: 'Name', editCountry: 'Country', editExamDate: 'Exam date',
    saveChanges: 'Save changes',
    planTitle: 'Choose your plan',
    planFree: 'Free', planFocused: 'Focused', planComplete: 'Complete',
    perMonth: '/mo', current: 'Current plan', select: 'Select',
    confirmLogout: 'Log out?', confirmLogoutSub: 'You can log back in anytime.',
    confirmReset: 'Reset everything?', confirmResetSub: 'Your progress goes to 0. Your account stays.',
    confirmDelete: 'Delete account?', confirmDeleteSub: 'This is permanent. Enter your password to confirm.',
    confirm: 'Confirm', cancel: 'Cancel', yes: 'Yes', no: 'No',
    contactTitle: 'Contact', contactSub: 'We\'re here to help',
    contactEmail: 'Email us at',
    progressTitle: 'My progress', progressSub: 'Topic evolution',
    premiumBlur: 'See all topics with the Complete plan',
    upgradePlan: 'See plans →',
    close: 'Close',
  },
  ar: {
    greetMorning: 'صباح الخير', greetDay: 'أهلاً', greetNight: 'مساء الخير',
    dominio: 'الإتقان العام',
    examIn: 'الامتحان في', days: 'يوماً',
    giftTitle: 'يوم بريميوم مجاني!', giftSub: 'تمارين غير محدودة اليوم',
    giftBtn: 'تفعيل',
    testBtn: 'الاختبار النهائي',
    toastLocked: 'تحتاج 35% في كل موضوع لفتح الاختبار',
    toastSoon: 'قريباً!',
    blockLabels: ['اللغة', 'المجتمع', 'الامتحان'],
    soon: 'قريباً',
    myProgress: 'تقدمي', editProfile: 'تعديل الملف',
    settings: 'الإعدادات', contact: 'تواصل معنا',
    planLabel: 'الخطة الحالية',
    appLang: 'لغة التطبيق', resetProgress: 'إعادة ضبط التقدم',
    logout: 'تسجيل الخروج', deleteAccount: 'حذف الحساب',
    editName: 'الاسم', editCountry: 'البلد', editExamDate: 'تاريخ الامتحان',
    saveChanges: 'حفظ التغييرات',
    planTitle: 'اختر خطتك',
    planFree: 'مجاني', planFocused: 'مركّز', planComplete: 'كامل',
    perMonth: '/شهر', current: 'خطتك الحالية', select: 'اختر',
    confirmLogout: 'تسجيل الخروج؟', confirmLogoutSub: 'يمكنك العودة في أي وقت.',
    confirmReset: 'إعادة ضبط كل شيء؟', confirmResetSub: 'يعود تقدمك إلى 0. يبقى حسابك.',
    confirmDelete: 'حذف الحساب؟', confirmDeleteSub: 'هذا الإجراء دائم. أدخل كلمة المرور للتأكيد.',
    confirm: 'تأكيد', cancel: 'إلغاء', yes: 'نعم', no: 'لا',
    contactTitle: 'تواصل معنا', contactSub: 'نحن هنا للمساعدة',
    contactEmail: 'راسلنا على',
    progressTitle: 'تقدمي', progressSub: 'التطور حسب الموضوع',
    premiumBlur: 'شاهد جميع المواضيع مع الخطة الكاملة',
    upgradePlan: 'شاهد الخطط ←',
    close: 'إغلاق',
  }
};

function dt() { return DT[window.state?.lang || 'es']; }

// ── Greeting rotation ──────────────────
let greetingState = 'name';
let greetingTimer = null;

function startGreetingRotation(name) {
  const el = document.getElementById('dash-greeting');
  if (!el) return;

  function render() {
    el.style.opacity = '0';
    setTimeout(() => {
      const t = dt();
      if (greetingState === 'name') {
        const hour = new Date().getHours();
        let saludo = hour < 12 ? t.greetMorning : hour < 19 ? t.greetDay : t.greetNight;
        el.innerHTML = `${saludo}, <strong>${name}</strong>`;
      } else {
        el.innerHTML = '<span class="logo-text">Slaag<span class="logo-nl">NL</span></span>';
      }
      el.style.opacity = '1';
      greetingState = greetingState === 'name' ? 'logo' : 'name';
    }, 300);
  }

  render();
  if (greetingTimer) clearInterval(greetingTimer);
  greetingTimer = setInterval(render, 15000);
}

// ── Helpers ────────────────────────────
function calcDaysToExam(dateStr) {
  if (!dateStr) return null;
  const exam = new Date(dateStr);
  const now  = new Date();
  now.setHours(0,0,0,0); exam.setHours(0,0,0,0);
  const diff = Math.ceil((exam - now) / 86400000);
  return diff > 0 ? diff : 0;
}

function avgMastery(mastery) {
  const vals = Object.values(mastery || {});
  if (!vals.length) return 0;
  return Math.round(vals.reduce((a,b) => a+b, 0) / vals.length);
}

function isPremiumActive() {
  const user = window.state.user;
  if (!user) return false;
  if (user.plan === 'completo' || user.plan === 'enfocado') return true;
  if (user.premiumExpiry) {
    return new Date() < new Date(user.premiumExpiry);
  }
  return false;
}

// ── Render dashboard ───────────────────
function renderDashboard() {
  const user = window.state.user;
  if (!user) return;

  const t      = dt();
  const lang   = window.state.lang || 'es';
  const mastery = user.mastery || {};
  const avg    = avgMastery(mastery);
  const days   = calcDaysToExam(user.examDate);

  startGreetingRotation(user.name || '');

  // Streak
  const streakEl = document.getElementById('dash-streak');
  if (streakEl) streakEl.textContent = '🔥 ' + (user.streak || 0);

  // Dominio
  const pctEl    = document.getElementById('dash-pct');
  const barEl    = document.getElementById('dash-bar');
  const barMsgEl = document.getElementById('dash-bar-msg');
  const domLblEl = document.getElementById('dash-dominio-label');
  if (pctEl)    pctEl.textContent = avg + '%';
  if (barEl)    barEl.style.width = avg + '%';
  if (domLblEl) domLblEl.textContent = t.dominio;
  if (barMsgEl && days !== null) {
    barMsgEl.innerHTML = `${t.examIn} <strong>${days} ${t.days}</strong>`;
  }

  // Premium gift
  const giftEl = document.getElementById('dash-gift');
  if (giftEl) {
    const show = user.premiumDaysLeft > 0 && !user.premiumExpiry;
    giftEl.style.display = show ? 'flex' : 'none';
    const titleEl = document.getElementById('gift-title');
    const subEl   = document.getElementById('gift-sub');
    const btnEl   = document.getElementById('gift-btn');
    if (titleEl) titleEl.textContent = t.giftTitle;
    if (subEl)   subEl.textContent   = t.giftSub;
    if (btnEl)   btnEl.textContent   = t.giftBtn;
  }

  // Test Final button
  const simBtn = document.getElementById('sim-btn');
  if (simBtn) simBtn.textContent = (isPremiumActive() ? '🎓 ' : '🔒 ') + t.testBtn;

  updateSimBtn(mastery);
  renderTopics(lang, mastery);
}

// ── Premium gift activation ────────────
function activatePremiumDay() {
  const user = window.state.user;
  if (!user) return;
  const expiry = new Date();
  expiry.setHours(expiry.getHours() + 24);
  user.premiumExpiry = expiry.toISOString();
  user.premiumDaysLeft = 0;

  // Save to Firestore via FB
  if (window.FB && window.FB.updatePremiumExpiry) {
    window.FB.updatePremiumExpiry(expiry.toISOString());
  }

  const giftEl = document.getElementById('dash-gift');
  if (giftEl) giftEl.style.display = 'none';
  showToast(dt().toastSoon.replace('!', '') + ' — Premium activo por 24h ✅');
  updateSimBtn(window.state.user?.mastery || {});
}

// ── Simulacro ──────────────────────────
function updateSimBtn(mastery) {
  const btn = document.getElementById('sim-btn');
  if (!btn) return;
  const t = dt();
  const premium = isPremiumActive();
  const vals = Object.values(mastery || {});
  const masteryOk = vals.length > 0 && vals.every(v => v >= 35);
  const unlocked = premium && masteryOk;
  btn.className = 'sim-btn ' + (unlocked ? 'unlocked' : 'locked');
  btn.textContent = (unlocked ? '🎓 ' : '🔒 ') + t.testBtn;
}

function simBtnClick() {
  const mastery  = window.state.user?.mastery || {};
  const vals     = Object.values(mastery);
  const masteryOk = vals.length > 0 && vals.every(v => v >= 35);
  const premium  = isPremiumActive();
  if (!premium || !masteryOk) {
    showToast(dt().toastLocked);
  } else {
    showToast(dt().toastSoon);
  }
}

// ── Topics ─────────────────────────────
function renderTopics(lang, mastery) {
  const container = document.getElementById('dash-topics');
  if (!container) return;
  let html = '';

  TOPICS.mvv.forEach((block, bi) => {
    const blockLabel = block.block[lang] || block.block['es'];
    html += `<div class="topic-block"><div class="block-title">${blockLabel}</div><div class="topics-grid">`;

    block.topics.forEach(topic => {
      const pct      = mastery[topic.id] ?? 0;
      const trans    = topic.tr[lang] || topic.tr['es'];
      const soon     = topic.soon;
      const barClass = pct >= 60 ? 'bar-strong' : pct >= 35 ? 'bar-mid' : pct > 0 ? 'bar-weak' : 'bar-zero';
      const onclick  = soon ? `showToast('${dt().toastSoon}')` : `openTopic('${topic.id}')`;

      html += `<div class="topic-oval${soon ? ' topic-soon' : ''}" onclick="${onclick}">
        <div class="topic-emoji">${topic.emoji}</div>
        <div class="topic-name">${topic.nl}</div>
        <div class="topic-trans">${soon ? dt().soon : trans}</div>
        <div class="oval-bar-wrap"><div class="oval-bar-fill ${barClass}" style="width:${Math.max(pct,2)}%"></div></div>
        <div class="oval-pct">${soon ? '' : pct + '%'}</div>
      </div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

function openTopic(topicId) {
  localStorage.setItem('slaagnl_topic', topicId);
  showToast(dt().toastSoon);
}

// ── Toast ──────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

// ══════════════════════════════════════
// PROFILE DRAWER SYSTEM
// ══════════════════════════════════════

function openDrawer() {
  const user = window.state.user;
  const t    = dt();
  if (user) {
    const nameEl  = document.getElementById('drawer-name');
    const emailEl = document.getElementById('drawer-email');
    const planEl  = document.getElementById('drawer-plan-label');
    if (nameEl)  nameEl.textContent  = user.name  || '';
    if (emailEl) emailEl.textContent = user.email || '';
    if (planEl) {
      const plan = PLANS[user.plan || 'libre'];
      planEl.textContent = (t.planLabel || 'Plan') + ': ' + (plan?.name[window.state.lang || 'es'] || 'Libre');
    }
  }
  // Update menu labels
  setDrawerLabels();
  document.getElementById('profile-drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
}

function setDrawerLabels() {
  const t = dt();
  const ids = {
    'drawer-lbl-progress': t.myProgress,
    'drawer-lbl-edit':     t.editProfile,
    'drawer-lbl-settings': t.settings,
    'drawer-lbl-contact':  t.contact,
  };
  Object.entries(ids).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}

function closeDrawer() {
  document.getElementById('profile-drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
  closeAllSubpanels();
}

// ── Subpanel system ────────────────────
function openSubpanel(id) {
  closeAllSubpanels();
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeAllSubpanels() {
  document.querySelectorAll('.subpanel').forEach(p => p.classList.remove('open'));
}

// ── Progress subpanel ──────────────────
function openProgressPanel() {
  const t       = dt();
  const mastery = window.state.user?.mastery || {};
  const lang    = window.state.lang || 'es';
  const allTopics = TOPICS.mvv.flatMap(b => b.topics).filter(tp => !tp.soon);

  const titleEl = document.getElementById('progress-panel-title');
  const subEl   = document.getElementById('progress-panel-sub');
  if (titleEl) titleEl.textContent = t.progressTitle;
  if (subEl)   subEl.textContent   = t.progressSub;

  const listEl = document.getElementById('progress-list');
  if (!listEl) return;

  const top3 = allTopics.slice(0, 3);
  const rest  = allTopics.slice(3);
  let html = '';

  top3.forEach(tp => {
    const pct = mastery[tp.id] ?? 0;
    const barColor = pct >= 60 ? 'var(--green)' : pct >= 35 ? 'var(--yellow)' : 'var(--orange)';
    html += progressRow(tp, pct, barColor);
  });

  let restHtml = '';
  rest.forEach(tp => {
    const pct = mastery[tp.id] ?? 0;
    restHtml += progressRow(tp, pct, '#2ecc8a');
  });

  html += `<div class="blurred-row">${restHtml}</div>
    <div class="premium-lock">
      <p>${t.premiumBlur}</p>
      <button onclick="openPlansPanel()">${t.upgradePlan}</button>
    </div>`;

  listEl.innerHTML = html;
  openSubpanel('subpanel-progress');
}

function progressRow(tp, pct, color) {
  return `<div class="progress-topic-row">
    <div class="pt-icon">${tp.emoji}</div>
    <div class="pt-info">
      <div class="pt-name">${tp.nl}</div>
      <div class="pt-bar-wrap"><div class="pt-bar" style="width:${pct}%;background:${color}"></div></div>
    </div>
    <div class="pt-pct">${pct}%</div>
  </div>`;
}

// ── Edit profile subpanel ──────────────
function openEditPanel() {
  const t    = dt();
  const user = window.state.user || {};
  const nameEl  = document.getElementById('edit-name-label');
  const countryEl = document.getElementById('edit-country-label');
  const dateEl  = document.getElementById('edit-date-label');
  const btnEl   = document.getElementById('edit-save-btn');
  if (nameEl)    nameEl.textContent    = t.editName;
  if (countryEl) countryEl.textContent = t.editCountry;
  if (dateEl)    dateEl.textContent    = t.editExamDate;
  if (btnEl)     btnEl.textContent     = t.saveChanges;

  const nameInput = document.getElementById('edit-name-input');
  const dateInput = document.getElementById('edit-date-input');
  if (nameInput) nameInput.value = user.name || '';
  if (dateInput) dateInput.value = user.examDate || '';

  openSubpanel('subpanel-edit');
}

function saveEditProfile() {
  const nameInput = document.getElementById('edit-name-input');
  const dateInput = document.getElementById('edit-date-input');
  const name = nameInput?.value.trim();
  const date = dateInput?.value;
  if (name) window.state.user.name = name;
  if (date) window.state.user.examDate = date;
  if (window.FB?.updateProfile) window.FB.updateProfile({ name, examDate: date });
  closeAllSubpanels();
  renderDashboard();
  showToast('✅ Guardado');
}

// ── Settings subpanel ──────────────────
function openSettingsPanel() {
  const t = dt();
  const ids = {
    'settings-lang-label':   t.appLang,
    'settings-reset-label':  t.resetProgress,
    'settings-logout-label': t.logout,
    'settings-delete-label': t.deleteAccount,
  };
  Object.entries(ids).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
  openSubpanel('subpanel-settings');
}

// ── Contact subpanel ───────────────────
function openContactPanel() {
  const t = dt();
  const titleEl = document.getElementById('contact-title');
  const subEl   = document.getElementById('contact-sub');
  const emailEl = document.getElementById('contact-email-label');
  if (titleEl) titleEl.textContent = t.contactTitle;
  if (subEl)   subEl.textContent   = t.contactSub;
  if (emailEl) emailEl.textContent = t.contactEmail;
  openSubpanel('subpanel-contact');
}

// ── Plans subpanel ─────────────────────
function openPlansPanel() {
  const t    = dt();
  const lang = window.state.lang || 'es';
  const user = window.state.user || {};
  const current = user.plan || 'libre';

  const titleEl = document.getElementById('plans-title');
  if (titleEl) titleEl.textContent = t.planTitle;

  const el = document.getElementById('plans-list');
  if (!el) return;

  const planDefs = [
    {
      id: 'libre',
      name: t.planFree, price: '€0',
      features: {
        es: ['10 ejercicios/día', '3 temas activos', 'Sin Test Final'],
        en: ['10 exercises/day', '3 active topics', 'No Final Test'],
        ar: ['10 تمارين/يوم', '3 مواضيع نشطة', 'بدون اختبار نهائي'],
      }
    },
    {
      id: 'enfocado',
      name: t.planFocused, price: '€4.99',
      features: {
        es: ['30 ejercicios/día', '8 temas activos', '2 Test Finales/semana'],
        en: ['30 exercises/day', '8 active topics', '2 Final Tests/week'],
        ar: ['30 تمريناً/يوم', '8 مواضيع نشطة', 'اختباران/أسبوع'],
      }
    },
    {
      id: 'completo',
      name: t.planComplete, price: '€7.99',
      features: {
        es: ['Ejercicios ilimitados', 'Todos los temas', 'Test Final ilimitado', 'Estadísticas completas', 'Soporte prioritario'],
        en: ['Unlimited exercises', 'All topics', 'Unlimited Final Tests', 'Full statistics', 'Priority support'],
        ar: ['تمارين غير محدودة', 'جميع المواضيع', 'اختبارات غير محدودة', 'إحصائيات كاملة', 'دعم أولوي'],
      }
    },
  ];

  el.innerHTML = planDefs.map(plan => {
    const isCurrent = plan.id === current;
    const feats = plan.features[lang] || plan.features['es'];
    return `<div class="plan-card${isCurrent ? ' plan-current' : ''}${plan.id === 'completo' ? ' plan-featured' : ''}">
      ${plan.id === 'completo' ? '<div class="plan-badge">⭐ Popular</div>' : ''}
      <div class="plan-name">${plan.name}</div>
      <div class="plan-price">${plan.price}${plan.price !== '€0' ? '<span>' + t.perMonth + '</span>' : ''}</div>
      <ul class="plan-features">${feats.map(f => `<li>${f}</li>`).join('')}</ul>
      <button class="plan-btn${isCurrent ? ' plan-btn-current' : ''}" onclick="selectPlan('${plan.id}')" ${isCurrent ? 'disabled' : ''}>
        ${isCurrent ? t.current : t.select}
      </button>
    </div>`;
  }).join('');

  openSubpanel('subpanel-plans');
}

function selectPlan(planId) {
  if (planId === 'libre') {
    window.state.user.plan = 'libre';
    if (window.FB?.updatePlan) window.FB.updatePlan('libre');
    closeAllSubpanels();
    renderDashboard();
    showToast('Plan Libre activado');
  } else {
    showToast('Pagos próximamente — Stripe 🚀');
  }
}

// ── Language change ────────────────────
function openLangPanel() {
  openSubpanel('subpanel-lang');
}
function changeLang(lang) {
  if (typeof applyLang === 'function') applyLang(lang);
  closeAllSubpanels();
  renderDashboard();
  if (window.FB?.updateLang) window.FB.updateLang(lang);
}

// ── Logout ─────────────────────────────
function confirmLogout() {
  const t = dt();
  const el = document.getElementById('confirm-modal');
  if (!el) return;
  document.getElementById('confirm-title').textContent = t.confirmLogout;
  document.getElementById('confirm-sub').textContent   = t.confirmLogoutSub;
  document.getElementById('confirm-yes').textContent   = t.logout;
  document.getElementById('confirm-yes').onclick       = () => { closeConfirm(); doLogout(); };
  document.getElementById('confirm-no').textContent    = t.cancel;
  el.classList.add('open');
}
function doLogout() {
  if (greetingTimer) clearInterval(greetingTimer);
  if (window.FB) window.FB.signOut();
  else showScreen('screen-welcome');
}

// ── Reset progress ─────────────────────
function confirmResetProgress() {
  const t = dt();
  const el = document.getElementById('confirm-modal');
  if (!el) return;
  document.getElementById('confirm-title').textContent = t.confirmReset;
  document.getElementById('confirm-sub').textContent   = t.confirmResetSub;
  document.getElementById('confirm-yes').textContent   = t.yes;
  document.getElementById('confirm-yes').onclick       = () => { closeConfirm(); doReset(); };
  document.getElementById('confirm-no').textContent    = t.cancel;
  el.classList.add('open');
}
function doReset() {
  const emptyMastery = {};
  TOPICS.mvv.flatMap(b => b.topics).forEach(tp => { emptyMastery[tp.id] = 0; });
  window.state.user.mastery = emptyMastery;
  window.state.user.streak  = 0;
  if (window.FB?.resetProgress) window.FB.resetProgress(emptyMastery);
  renderDashboard();
  showToast('Progreso reiniciado ✅');
}

// ── Delete account ─────────────────────
function confirmDeleteAccount() {
  const t  = dt();
  const el = document.getElementById('delete-modal');
  if (!el) return;
  document.getElementById('delete-title').textContent = t.confirmDelete;
  document.getElementById('delete-sub').textContent   = t.confirmDeleteSub;
  document.getElementById('delete-confirm-btn').textContent = t.confirm;
  document.getElementById('delete-cancel-btn').textContent  = t.cancel;
  el.classList.add('open');
}
function closeDeleteModal() {
  document.getElementById('delete-modal').classList.remove('open');
}
async function doDeleteAccount() {
  const pass = document.getElementById('delete-pass-input')?.value;
  if (!pass) { showToast('Escribe tu contraseña'); return; }
  closeDeleteModal();
  if (window.FB?.deleteAccount) await window.FB.deleteAccount(pass);
}

// ── Confirm modal ──────────────────────
function closeConfirm() {
  document.getElementById('confirm-modal').classList.remove('open');
}
