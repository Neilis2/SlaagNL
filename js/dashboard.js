// ══════════════════════════════════════
// SLAAGNL — Dashboard Logic
// ══════════════════════════════════════

const TOPICS = {
  mvv: [
    {
      block: 'El Idioma',
      topics: [
        { id: 'grammatica',   nl: 'Grammatica',   tr: { es: 'Gramática',    en: 'Grammar',      ar: 'قواعد اللغة'  }, emoji: '📝', ready: false },
        { id: 'getallen',     nl: 'Getallen',     tr: { es: 'Números',      en: 'Numbers',      ar: 'الأرقام'      }, emoji: '🔢', ready: false },
        { id: 'adjectieven',  nl: 'Adjectieven',  tr: { es: 'Adjetivos',    en: 'Adjectives',   ar: 'الصفات'       }, emoji: '🎨', ready: false },
        { id: 'emoties',      nl: 'Emoties',      tr: { es: 'Emociones',    en: 'Emotions',     ar: 'المشاعر'      }, emoji: '💬', ready: false },
        { id: 'vocabulaire',  nl: 'Vocabulaire',  tr: { es: 'Vocabulario',  en: 'Vocabulary',   ar: 'المفردات'     }, emoji: '📖', ready: false },
        { id: 'artikelen',    nl: 'Artikelen',    tr: { es: 'Artículos',    en: 'Articles',     ar: 'أدوات التعريف'}, emoji: '📌', ready: false },
        { id: 'werkwoorden',  nl: 'Werkwoorden',  tr: { es: 'Verbos',       en: 'Verbs',        ar: 'الأفعال'      }, emoji: '🔄', ready: false },
      ]
    },
    {
      block: 'La Sociedad',
      topics: [
        { id: 'zorg',         nl: 'Zorg',         tr: { es: 'Salud',        en: 'Healthcare',   ar: 'الرعاية'      }, emoji: '🏥', ready: false },
        { id: 'wonen',        nl: 'Wonen',        tr: { es: 'Vivienda',     en: 'Housing',      ar: 'السكن'        }, emoji: '🏠', ready: false },
        { id: 'werk',         nl: 'Werk',         tr: { es: 'Empleo',       en: 'Work',         ar: 'العمل'        }, emoji: '💼', ready: false },
        { id: 'onderwijs',    nl: 'Onderwijs',    tr: { es: 'Educación',    en: 'Education',    ar: 'التعليم'      }, emoji: '🏫', ready: false },
        { id: 'rechten',      nl: 'Rechten',      tr: { es: 'Derechos',     en: 'Rights',       ar: 'الحقوق'       }, emoji: '⚖️', ready: false },
        { id: 'geschiedenis', nl: 'Geschiedenis', tr: { es: 'Historia',     en: 'History',      ar: 'التاريخ'      }, emoji: '👑', ready: false },
        { id: 'politiek',     nl: 'Politiek',     tr: { es: 'Política',     en: 'Politics',     ar: 'السياسة'      }, emoji: '🏛️', ready: false },
        { id: 'geografie',    nl: 'Geografie',    tr: { es: 'Geografía',    en: 'Geography',    ar: 'الجغرافيا'    }, emoji: '🗺️', ready: false },
      ]
    },
    {
      block: 'El Examen',
      topics: [
        { id: 'kns',          nl: 'KNS',          tr: { es: '70 preguntas', en: '70 questions', ar: '70 سؤال'      }, emoji: '📋', ready: false, soon: true },
        { id: 'spreken',      nl: 'Spreken',      tr: { es: 'Hablar',       en: 'Speaking',     ar: 'التحدث'       }, emoji: '🗣️', ready: false, soon: true },
        { id: 'lezen',        nl: 'Lezen',        tr: { es: 'Leer',         en: 'Reading',      ar: 'القراءة'      }, emoji: '📗', ready: false, soon: true },
      ]
    }
  ]
};

// ── Greeting rotation ──────────────────
let greetingState = 'name'; // 'name' | 'logo'
let greetingTimer = null;

function startGreetingRotation(name) {
  const el = document.getElementById('dash-greeting');
  if (!el) return;

  function render() {
    el.style.opacity = '0';
    setTimeout(() => {
      if (greetingState === 'name') {
        const hour = new Date().getHours();
        let saludo = hour < 12 ? '☀️ Buenos días' : hour < 19 ? '👋 ¡Buenas' : '🌙 Buenas noches';
        if (hour >= 12 && hour < 19) saludo += `, <strong>${name}</strong>!`;
        else saludo += `, <strong>${name}</strong>`;
        el.innerHTML = saludo;
      } else {
        el.innerHTML = '<span class="logo-text">Slaag<span class="logo-nl">NL</span></span>';
      }
      el.style.opacity = '1';
      greetingState = greetingState === 'name' ? 'logo' : 'name';
    }, 300);
  }

  render();
  if (greetingTimer) clearInterval(greetingTimer);
  greetingTimer = setInterval(render, 5000);
}

// ── Days to exam ───────────────────────
function calcDaysToExam(dateStr) {
  if (!dateStr) return null;
  const exam = new Date(dateStr);
  const now  = new Date();
  now.setHours(0,0,0,0); exam.setHours(0,0,0,0);
  const diff = Math.ceil((exam - now) / 86400000);
  return diff > 0 ? diff : 0;
}

// ── Avg mastery ────────────────────────
function avgMastery(mastery) {
  const vals = Object.values(mastery || {});
  if (!vals.length) return 0;
  return Math.round(vals.reduce((a,b) => a+b, 0) / vals.length);
}

// ── Render dashboard ───────────────────
function renderDashboard() {
  const user    = window.state.user;
  if (!user) return;

  const lang    = window.state.lang || 'es';
  const mastery = user.mastery || {};
  const avg     = avgMastery(mastery);
  const days    = calcDaysToExam(user.examDate);

  // Greeting rotation
  startGreetingRotation(user.name || 'tú');

  // Streak
  const streakEl = document.getElementById('dash-streak');
  if (streakEl) streakEl.textContent = '🔥 ' + (user.streak || 0);

  // Days to exam
  const daysEl = document.getElementById('dash-days');
  if (daysEl) daysEl.textContent = days !== null ? days : '—';

  // Dominio bar
  const pctEl = document.getElementById('dash-pct');
  const barEl = document.getElementById('dash-bar');
  const barMsgEl = document.getElementById('dash-bar-msg');
  if (pctEl) pctEl.textContent = avg + '%';
  if (barEl) barEl.style.width = avg + '%';
  if (barMsgEl) {
    const daysText = days !== null
      ? (lang === 'es' ? `Examen en <strong>${days} días</strong>` : lang === 'ar' ? `<strong>${days}</strong> يوماً للامتحان` : `Exam in <strong>${days} days</strong>`)
      : '';
    const feeling = avg >= 60 ? '💪' : avg >= 35 ? '📈' : '🎯';
    barMsgEl.innerHTML = daysText + (daysText ? ` · ${feeling}` : feeling);
  }

  // Premium gift
  const giftEl = document.getElementById('dash-gift');
  if (giftEl) {
    if (user.premiumDaysLeft > 0) {
      giftEl.style.display = 'flex';
    } else {
      giftEl.style.display = 'none';
    }
  }

  // Simulacro button
  updateSimBtn(mastery);

  // Render topics
  renderTopics(lang, mastery);
}

// ── Simulacro button ───────────────────
function updateSimBtn(mastery) {
  const btn = document.getElementById('sim-btn');
  if (!btn) return;
  const vals = Object.values(mastery || {});
  const unlocked = vals.length > 0 && vals.every(v => v >= 35);
  btn.className = 'sim-btn ' + (unlocked ? 'unlocked' : 'locked');
  btn.innerHTML = unlocked ? '🎓 Simulacro' : '🔒 Simulacro';
}

function simBtnClick() {
  const user    = window.state.user;
  const mastery = user?.mastery || {};
  const vals    = Object.values(mastery);
  const unlocked = vals.length > 0 && vals.every(v => v >= 35);
  if (!unlocked) {
    showToast('Necesitas 35% en cada tema para desbloquear el simulacro 🎯');
  } else {
    showToast('¡Simulacro próximamente! 🚀');
  }
}

// ── Render topics ──────────────────────
function renderTopics(lang, mastery) {
  const container = document.getElementById('dash-topics');
  if (!container) return;
  const blocks = TOPICS.mvv;
  let html = '';

  blocks.forEach(block => {
    html += `<div class="topic-block">
      <div class="block-title">${block.block}</div>
      <div class="topics-grid">`;

    block.topics.forEach(topic => {
      const pct   = mastery[topic.id] ?? 0;
      const trans = topic.tr[lang] || topic.tr['es'];
      const soon  = topic.soon;
      const barClass = pct >= 60 ? 'bar-strong' : pct >= 35 ? 'bar-mid' : pct > 0 ? 'bar-weak' : 'bar-zero';

      html += `
        <div class="topic-oval ${soon ? 'topic-soon' : ''}" onclick="${soon ? 'showToast(\'Próximamente 🚀\')' : `openTopic('${topic.id}')`}">
          <div class="topic-emoji">${topic.emoji}</div>
          <div class="topic-name">${topic.nl}</div>
          <div class="topic-trans">${soon ? '🚀 Próx.' : trans}</div>
          <div class="oval-bar-wrap">
            <div class="oval-bar-fill ${barClass}" style="width:${Math.max(pct,2)}%"></div>
          </div>
          <div class="oval-pct">${soon ? '' : pct + '%'}</div>
        </div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

// ── Open topic ─────────────────────────
function openTopic(topicId) {
  // Save current topic to localStorage
  localStorage.setItem('slaagnl_topic', topicId);
  showToast('Contenido de ' + topicId + ' próximamente 🚀');
  // TODO: showScreen('screen-topic'); renderTopicScreen(topicId);
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

// ── Profile drawer ─────────────────────
function openDrawer() {
  const user = window.state.user;
  if (user) {
    const nameEl = document.getElementById('drawer-name');
    const emailEl = document.getElementById('drawer-email');
    if (nameEl) nameEl.textContent = user.name || '';
    if (emailEl) emailEl.textContent = user.email || '';
  }
  document.getElementById('profile-drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
}
function closeDrawer() {
  document.getElementById('profile-drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
}

// ── Change language ────────────────────
function openLangModal() {
  closeDrawer();
  setTimeout(() => document.getElementById('lang-modal').classList.add('open'), 280);
}
function closeLangModal() {
  document.getElementById('lang-modal').classList.remove('open');
}
function changeLang(lang) {
  if (typeof applyLang === 'function') applyLang(lang);
  closeLangModal();
  renderDashboard();
}

// ── Progress modal ─────────────────────
function openProgressModal() {
  closeDrawer();
  setTimeout(() => {
    renderProgressModal();
    document.getElementById('progress-modal').classList.add('open');
  }, 280);
}
function closeProgressModal() {
  document.getElementById('progress-modal').classList.remove('open');
}
function renderProgressModal() {
  const mastery = window.state.user?.mastery || {};
  const lang    = window.state.lang || 'es';
  const blocks  = TOPICS.mvv;
  const allTopics = blocks.flatMap(b => b.topics).filter(t => !t.soon);
  const el = document.getElementById('progress-list');
  if (!el) return;

  const top3 = allTopics.slice(0, 3);
  const rest = allTopics.slice(3);

  let html = '';
  top3.forEach(t => {
    const pct = mastery[t.id] ?? 0;
    const barColor = pct >= 60 ? 'var(--green)' : pct >= 35 ? 'var(--yellow)' : 'var(--orange)';
    html += `<div class="progress-topic-row">
      <div class="pt-icon">${t.emoji}</div>
      <div class="pt-info">
        <div class="pt-name">${t.nl}</div>
        <div class="pt-bar-wrap"><div class="pt-bar" style="width:${pct}%;background:${barColor}"></div></div>
      </div>
      <div class="pt-pct">${pct}%</div>
    </div>`;
  });

  let restHtml = '';
  rest.forEach(t => {
    const pct = mastery[t.id] ?? 0;
    restHtml += `<div class="progress-topic-row">
      <div class="pt-icon">${t.emoji}</div>
      <div class="pt-info">
        <div class="pt-name">${t.nl}</div>
        <div class="pt-bar-wrap"><div class="pt-bar" style="width:${pct}%"></div></div>
      </div>
      <div class="pt-pct">${pct}%</div>
    </div>`;
  });

  html += `<div class="blurred-row">${restHtml}</div>
    <div class="premium-lock">
      <p>${lang === 'es' ? 'Ver todos los temas con Premium' : 'See all topics with Premium'}</p>
      <button onclick="closeProgressModal()">Ver Premium →</button>
    </div>`;

  el.innerHTML = html;
}

// ── Reset confirm ──────────────────────
function openResetConfirm() {
  closeDrawer();
  setTimeout(() => document.getElementById('reset-modal').classList.add('open'), 280);
}
function closeResetConfirm() {
  document.getElementById('reset-modal').classList.remove('open');
}
async function confirmReset() {
  const user = window.state.user;
  if (!user) return;
  const emptyMastery = {};
  TOPICS.mvv.flatMap(b => b.topics).forEach(t => { emptyMastery[t.id] = 0; });
  if (window.FB) {
    // Reset in Firestore
    try {
      const { getFirestore, doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js');
    } catch(e) {}
  }
  window.state.user.mastery = emptyMastery;
  window.state.user.streak = 0;
  closeResetConfirm();
  renderDashboard();
  showToast('Progreso reiniciado ✅');
}

// ── Sign out ───────────────────────────
function handleSignOut() {
  if (greetingTimer) clearInterval(greetingTimer);
  if (window.FB) window.FB.signOut();
  else showScreen('screen-welcome');
}
