// ══════════════════════════════════════
// SLAAGNL v2 — App Logic
// ══════════════════════════════════════

// ── State ──────────────────────────────
const state = {
  lang: 'en',
  currentQ: 0,
  answers: [],   // { topic, topicIcon, correct }
  answered: false,
};

// ── Init ───────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('slaagnl_lang') || 'en';
  applyLang(saved);
});

// ══════════════════════════════════════
// LANGUAGE
// ══════════════════════════════════════
function setLang(lang) {
  applyLang(lang);
}

function applyLang(lang) {
  state.lang = lang;
  localStorage.setItem('slaagnl_lang', lang);

  // RTL for Arabic
  document.body.classList.toggle('rtl', lang === 'ar');
  document.documentElement.lang = lang;

  const t = T[lang];

  // Select button
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('selected'));
  const btn = document.getElementById('btn-' + lang);
  if (btn) btn.classList.add('selected');

  // Welcome
  setHTML('w-headline', t.headline.replace('\n', '<br>'));
  setHTML('w-sub',      t.sub.replace('\n', '<br>'));
  set('w-before',   t.before);
  // w-after uses logo HTML styling, not plain text
  set('w-s1',       t.s1);
  set('w-s2',       t.s2);
  set('w-s3',       t.s3);
  set('w-s4',       t.s4);
  set('w-lang-label', t.langLabel);
  set('w-cta',      t.cta);
  set('w-note',     t.ctaNote);
  set('w-skip',     t.skip);
  set('w-login',    t.loginLink + ' ');
  // login span
  const loginSpan = document.querySelector('#w-login span');
  if (loginSpan) loginSpan.textContent = t.loginLinkBtn;

  // Exam type screen
  set('et-back',      t.etBack);
  set('et-title',     t.etTitle);
  set('et-sub',       t.etSub);
  set('et-mvv-name',  t.etMvvName);
  set('et-mvv-level', t.etMvvLevel);
  set('et-mvv-desc',  t.etMvvDesc);
  set('et-nat-name',  t.etNatName);
  set('et-nat-level', t.etNatLevel);
  set('et-nat-desc',  t.etNatDesc);

  // Test header back button
  set('test-back', t.backTest);

  // Signup
  set('signup-back',  t.suBack);
  set('su-title',     t.suTitle);
  set('su-sub',       t.suSub);
  set('su-lbl-name',  t.suName);
  set('su-lbl-age',   t.suAge);
  set('su-lbl-email', t.suEmail);
  set('su-lbl-pass',  t.suPass);
  set('su-hint-pass', t.suHintPass);
  set('su-lbl-country', t.suCountry);
  set('su-lbl-date',  t.suDate);
  set('su-hint-date', t.suHintDate);
  set('su-lbl-type',  t.suType);
  set('su-opt-emb',   t.suOptEmb);
  set('su-opt-nl',    t.suOptNL);
  set('su-btn',       t.suBtn);
  set('su-footer-text', t.suFooter);
  set('su-link-login',  t.suLogin);
  set('su-terms',     t.suTerms);

  // Login
  set('login-back',   t.liBack);
  set('li-title',     t.liTitle);
  set('li-sub',       t.liSub);
  set('li-lbl-email', t.liEmail);
  set('li-lbl-pass',  t.liPass);
  set('li-forgot',    t.liForgot);
  set('li-btn',       t.liBtn);
  set('li-footer-text', t.liFooter);
  set('li-link-signup', t.liSignup);

  // Verify
  set('ve-title',   t.veTitle);
  set('ve-sub',     t.veSub);
  set('ve-note',    t.veNote);
  set('ve-resend',  t.veResend);
  set('ve-spam',    t.veSpam);

  // Placeholders
  ph('su-name',  lang === 'ar' ? 'أحمد علي' : 'Ana García');
  ph('su-email', 'ana@email.com');
  ph('su-pass',  lang === 'ar' ? '٨ أحرف على الأقل' : lang === 'es' ? 'Mín. 8 caracteres' : 'Min. 8 characters');
  ph('li-email', 'ana@email.com');
  ph('li-pass',  '••••••••');
}

function set(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function ph(id, text) {
  const el = document.getElementById(id);
  if (el) el.placeholder = text;
}

// ══════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); }
}

function goToTest() {
  showScreen('screen-exam-type');
}

function selectExamType(type) {
  if (type === 'nat') {
    // Coming soon — do nothing
    return;
  }
  state.examType = type;
  state.currentQ = 0;
  state.answers  = [];
  showScreen('screen-test');
  renderQuestion();
}

// ══════════════════════════════════════
// TEST
// ══════════════════════════════════════
function renderQuestion() {
  const q     = QUESTIONS[state.currentQ];
  const total = QUESTIONS.length;
  const t     = T[state.lang];
  const isLast = state.currentQ === total - 1;

  // Progress bar & counter
  document.getElementById('test-progress').style.width =
    ((state.currentQ / total) * 100) + '%';
  document.getElementById('test-counter').textContent =
    `${state.currentQ + 1}/${total}`;

  state.answered = false;

  // Build question HTML
  let optionsHTML = '';

  if (q.type === 'mc') {
    optionsHTML = `
      <div class="q-options">
        ${q.options.map((opt, i) => `
          <button class="q-option" onclick="answerMC(${i})" id="opt-${i}">
            <span class="opt-letter">${String.fromCharCode(65+i)}</span>
            ${opt}
          </button>
        `).join('')}
      </div>`;

  } else if (q.type === 'tf') {
    optionsHTML = `
      <div class="q-options">
        ${q.options.map((opt, i) => `
          <button class="q-option" onclick="answerMC(${i})" id="opt-${i}">
            <span class="opt-letter">${i === 0 ? '✓' : '✗'}</span>
            ${opt}
          </button>
        `).join('')}
      </div>`;

  } else if (q.type === 'fill') {
    optionsHTML = `
      <div class="fill-wrap">
        <input class="fill-input" type="text" id="fill-input"
          placeholder="..."
          onkeydown="if(event.key==='Enter') checkFill()">
        <button class="btn-check" onclick="checkFill()" id="btn-check">
          ${t.checkBtn}
        </button>
      </div>`;
  }

  const typeLabelMap = { mc: t.typeMC, fill: t.typeFill, tf: t.typeTF };

  document.getElementById('test-body').innerHTML = `
    <div style="margin-bottom:4px">
      <span class="q-type-badge">${typeLabelMap[q.type]}</span>
      <span class="q-topic-badge">${q.topicIcon} ${q.topic}</span>
    </div>
    <div class="q-text">${q.question}</div>
    ${optionsHTML}
  `;

  // Focus fill input
  if (q.type === 'fill') {
    setTimeout(() => {
      const inp = document.getElementById('fill-input');
      if (inp) inp.focus();
    }, 100);
  }
}

// Multiple choice / True-False answer
function answerMC(index) {
  if (state.answered) return;
  state.answered = true;

  const q       = QUESTIONS[state.currentQ];
  const correct = index === q.correct;
  const total   = QUESTIONS.length;
  const isLast  = state.currentQ === total - 1;

  state.answers.push({ topic: q.topic, topicIcon: q.topicIcon, correct });

  // Style options
  document.querySelectorAll('.q-option').forEach((btn, i) => {
    if (i === q.correct) btn.classList.add('correct');
    else if (i === index && !correct) btn.classList.add('wrong');
    else btn.classList.add('disabled');
    btn.onclick = null;
  });

  showOverlay(correct, q, isLast);
}

// Fill-in answer
function checkFill() {
  if (state.answered) return;

  const q     = QUESTIONS[state.currentQ];
  const input = document.getElementById('fill-input');
  if (!input) return;

  const userVal = input.value.trim().toLowerCase();
  const correct = q.accept.some(a => a.toLowerCase() === userVal);
  const total   = QUESTIONS.length;
  const isLast  = state.currentQ === total - 1;

  state.answered = true;
  state.answers.push({ topic: q.topic, topicIcon: q.topicIcon, correct });

  // Style input
  input.classList.add(correct ? 'correct' : 'wrong');
  input.disabled = true;

  // Disable check button
  const checkBtn = document.getElementById('btn-check');
  if (checkBtn) checkBtn.disabled = true;

  // Show correct answer if wrong
  if (!correct) {
    const hint = document.createElement('div');
    hint.style.cssText = 'margin-top:8px;font-size:13px;color:#1a5e3a;font-weight:600;';
    hint.textContent = '→ ' + q.answer;
    input.parentNode.insertBefore(hint, checkBtn);
  }

  showOverlay(correct, q, isLast);
}

// Show answer overlay
function showOverlay(correct, q, isLast) {
  const t    = T[state.lang];
  const lang = state.lang;

  document.getElementById('overlay-result').textContent =
    correct ? t.correct : t.wrong;

  document.getElementById('overlay-rule').textContent =
    t.whyRule + ': ' + (q.rule ? q.rule[lang] : '');

  document.getElementById('overlay-exp').textContent =
    q.explanation[lang] || q.explanation['en'];

  document.getElementById('overlay-next').textContent =
    isLast ? t.lastBtn : t.nextBtn;

  document.getElementById('answer-overlay').classList.add('show');
}

function nextQuestion() {
  document.getElementById('answer-overlay').classList.remove('show');
  state.currentQ++;

  if (state.currentQ >= QUESTIONS.length) {
    showResults();
  } else {
    renderQuestion();
    document.getElementById('test-progress').style.width =
      ((state.currentQ / QUESTIONS.length) * 100) + '%';
    document.getElementById('test-counter').textContent =
      `${state.currentQ + 1}/${QUESTIONS.length}`;
  }
}

// ══════════════════════════════════════
// RESULTS
// ══════════════════════════════════════
function showResults() {
  const t      = T[state.lang];
  const lang   = state.lang;
  const total  = state.answers.length;
  const correct= state.answers.filter(a => a.correct).length;
  const pct    = Math.round((correct / total) * 100);

  const level  = pct >= 70 ? 'high' : pct >= 40 ? 'mid' : 'low';
  const color  = level === 'high' ? '#2ecc8a' : level === 'mid' ? '#f4c842' : '#f47c3a';

  const circ   = 2 * Math.PI * 54;
  const offset = circ * (1 - pct / 100);

  // Topic breakdown
  const topicMap = {};
  state.answers.forEach(a => {
    if (!topicMap[a.topic])
      topicMap[a.topic] = { icon: a.topicIcon, correct: 0, total: 0 };
    topicMap[a.topic].total++;
    if (a.correct) topicMap[a.topic].correct++;
  });

  const breakdownRows = Object.entries(topicMap).map(([topic, d]) => {
    const p = Math.round(d.correct / d.total * 100);
    const cls = p >= 70 ? 'pill-good' : p >= 40 ? 'pill-mid' : 'pill-weak';
    const lbl = p >= 70 ? t.good      : p >= 40 ? t.mid      : t.weak;
    return `
      <div class="breakdown-row">
        <span class="breakdown-topic">${d.icon} ${topic}</span>
        <span class="status-pill ${cls}">${lbl}</span>
      </div>`;
  }).join('');

  showScreen('screen-results');

  document.getElementById('results-wrap').innerHTML = `
    <div class="results-logo">Slaag<em>NL</em></div>

    <div class="score-ring-wrap">
      <svg width="148" height="148" viewBox="0 0 148 148">
        <circle cx="74" cy="74" r="54"
          fill="none" stroke="rgba(255,255,255,.07)" stroke-width="13"/>
        <circle cx="74" cy="74" r="54"
          fill="none" stroke="${color}" stroke-width="13"
          stroke-linecap="round"
          stroke-dasharray="${circ}"
          stroke-dashoffset="${offset}"
          style="transition:stroke-dashoffset 1s ease"/>
      </svg>
      <div class="score-center">
        <div class="score-pct">${pct}%</div>
        <div class="score-sub">${correct}/${total}</div>
      </div>
    </div>

    <h2 class="results-title">${t['title_' + level]}</h2>
    <p class="results-sub">${t['rsub_' + level]}</p>

    <div class="breakdown">
      <div class="breakdown-title">${t.breakdown}</div>
      ${breakdownRows}
    </div>

    <div class="upgrade-card">
      <div class="upgrade-flag">🇳🇱</div>
      <div class="premium-badge">${t.premiumBadge}</div>
      <div class="upgrade-title">${t.upgradeTitle}</div>
      <p class="upgrade-sub">${t.upgradeSub}</p>
      <ul class="upgrade-features">
        <li>${t.f1}</li>
        <li>${t.f2}</li>
        <li>${t.f3}</li>
        <li>${t.f4}</li>
        <li>${t.f5}</li>
      </ul>
      <button class="btn-primary" onclick="showScreen('screen-signup')">${t.upgradeBtn}</button>
    </div>

    <button class="btn-back" style="margin-top:20px" onclick="goToTest()">
      ${t.backResults}
    </button>
  `;
}

// ══════════════════════════════════════
// SIGNUP
// ══════════════════════════════════════
function handleSignup() {
  const t    = T[state.lang];
  const name = document.getElementById('su-name').value.trim();
  const age  = parseInt(document.getElementById('su-age').value);
  const email= document.getElementById('su-email').value.trim();
  const pass = document.getElementById('su-pass').value;

  clearErrors();

  if (!name)                  { showErr('su-name', t.errName);  return; }
  if (!age || age < 16 || age > 99) { showErr('su-age', t.errAge);   return; }
  if (!validEmail(email))     { showErr('su-email', t.errEmail); return; }
  if (pass.length < 8)        { showErr('su-pass', t.errPass);  return; }

  const user = {
    name, age, email,
    country:  document.getElementById('su-country').value,
    examDate: document.getElementById('su-date').value,
    examType: document.getElementById('su-type').value,
    lang:     state.lang,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem('slaagnl_user', JSON.stringify(user));
  document.getElementById('ve-email').textContent = email;
  showScreen('screen-verify');

  // TODO: connect Firebase Auth
  console.log('New user:', user);
}

// ══════════════════════════════════════
// LOGIN
// ══════════════════════════════════════
function handleLogin() {
  const t     = T[state.lang];
  const email = document.getElementById('li-email').value.trim();
  const pass  = document.getElementById('li-pass').value;

  clearErrors();

  if (!validEmail(email)) { showErr('li-email', t.errLiEmail); return; }
  if (!pass)              { showErr('li-pass',  t.errLiPass);  return; }

  // TODO: connect Firebase Auth
  console.log('Login:', email);
}

function resendEmail() {
  // TODO: Firebase resend
  console.log('Resend verification');
}

// ══════════════════════════════════════
// FORM HELPERS
// ══════════════════════════════════════
function showErr(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = 'var(--red)';
  el.style.boxShadow   = '0 0 0 4px rgba(232,69,90,.15)';
  const div = document.createElement('div');
  div.className = 'form-error';
  div.textContent = msg;
  el.parentNode.appendChild(div);
  el.focus();
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach(e => e.remove());
  document.querySelectorAll('.form-input').forEach(el => {
    el.style.borderColor = '';
    el.style.boxShadow   = '';
  });
}

function validEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('selected'));
  const btn = document.getElementById('btn-' + lang);
  if (btn) btn.classList.add('selected');

  // Welcome
  setHTML('w-headline', t.headline.replace('\n', '<br>'));
  setHTML('w-sub',      t.sub.replace('\n', '<br>'));
  set('w-before',   t.before);
  // w-after uses logo HTML styling, not plain text
  set('w-s1',       t.s1);
  set('w-s2',       t.s2);
  set('w-s3',       t.s3);
  set('w-s4',       t.s4);
  set('w-lang-label', t.langLabel);
  set('w-cta',      t.cta);
  set('w-note',     t.ctaNote);

  // Exam type screen
  set('et-back',      t.etBack);
  set('et-title',     t.etTitle);
  set('et-sub',       t.etSub);
  set('et-mvv-name',  t.etMvvName);
  set('et-mvv-level', t.etMvvLevel);
  set('et-mvv-desc',  t.etMvvDesc);
  set('et-nat-name',  t.etNatName);
  set('et-nat-level', t.etNatLevel);
  set('et-nat-desc',  t.etNatDesc);

  // Test header back button
  set('test-back', t.backTest);

  // Signup
  set('signup-back',  t.suBack);
  set('su-title',     t.suTitle);
  set('su-sub',       t.suSub);
  set('su-lbl-name',  t.suName);
  set('su-lbl-age',   t.suAge);
  set('su-lbl-email', t.suEmail);
  set('su-lbl-pass',  t.suPass);
  set('su-hint-pass', t.suHintPass);
  set('su-lbl-country', t.suCountry);
  set('su-lbl-date',  t.suDate);
  set('su-hint-date', t.suHintDate);
  set('su-lbl-type',  t.suType);
  set('su-opt-emb',   t.suOptEmb);
  set('su-opt-nl',    t.suOptNL);
  set('su-btn',       t.suBtn);
  set('su-footer-text', t.suFooter);
  set('su-link-login',  t.suLogin);
  set('su-terms',     t.suTerms);

  // Login
  set('login-back',   t.liBack);
  set('li-title',     t.liTitle);
  set('li-sub',       t.liSub);
  set('li-lbl-email', t.liEmail);
  set('li-lbl-pass',  t.liPass);
  set('li-forgot',    t.liForgot);
  set('li-btn',       t.liBtn);
  set('li-footer-text', t.liFooter);
  set('li-link-signup', t.liSignup);

  // Verify
  set('ve-title',   t.veTitle);
  set('ve-sub',     t.veSub);
  set('ve-note',    t.veNote);
  set('ve-resend',  t.veResend);
  set('ve-spam',    t.veSpam);

  // Placeholders
  ph('su-name',  lang === 'ar' ? 'أحمد علي' : 'Ana García');
  ph('su-email', 'ana@email.com');
  ph('su-pass',  lang === 'ar' ? '٨ أحرف على الأقل' : lang === 'es' ? 'Mín. 8 caracteres' : 'Min. 8 characters');
  ph('li-email', 'ana@email.com');
  ph('li-pass',  '••••••••');
}

function set(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function ph(id, text) {
  const el = document.getElementById(id);
  if (el) el.placeholder = text;
}

// ══════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); }
}

function goToTest() {
  showScreen('screen-exam-type');
}

function selectExamType(type) {
  if (type === 'nat') {
    // Coming soon — do nothing
    return;
  }
  state.examType = type;
  state.currentQ = 0;
  state.answers  = [];
  showScreen('screen-test');
  renderQuestion();
}

// ══════════════════════════════════════
// TEST
// ══════════════════════════════════════
function renderQuestion() {
  const q     = QUESTIONS[state.currentQ];
  const total = QUESTIONS.length;
  const t     = T[state.lang];
  const isLast = state.currentQ === total - 1;

  // Progress bar & counter
  document.getElementById('test-progress').style.width =
    ((state.currentQ / total) * 100) + '%';
  document.getElementById('test-counter').textContent =
    `${state.currentQ + 1}/${total}`;

  state.answered = false;

  // Build question HTML
  let optionsHTML = '';

  if (q.type === 'mc') {
    optionsHTML = `
      <div class="q-options">
        ${q.options.map((opt, i) => `
          <button class="q-option" onclick="answerMC(${i})" id="opt-${i}">
            <span class="opt-letter">${String.fromCharCode(65+i)}</span>
            ${opt}
          </button>
        `).join('')}
      </div>`;

  } else if (q.type === 'tf') {
    optionsHTML = `
      <div class="q-options">
        ${q.options.map((opt, i) => `
          <button class="q-option" onclick="answerMC(${i})" id="opt-${i}">
            <span class="opt-letter">${i === 0 ? '✓' : '✗'}</span>
            ${opt}
          </button>
        `).join('')}
      </div>`;

  } else if (q.type === 'fill') {
    optionsHTML = `
      <div class="fill-wrap">
        <input class="fill-input" type="text" id="fill-input"
          placeholder="..."
          onkeydown="if(event.key==='Enter') checkFill()">
        <button class="btn-check" onclick="checkFill()" id="btn-check">
          ${t.checkBtn}
        </button>
      </div>`;
  }

  const typeLabelMap = { mc: t.typeMC, fill: t.typeFill, tf: t.typeTF };

  document.getElementById('test-body').innerHTML = `
    <div style="margin-bottom:4px">
      <span class="q-type-badge">${typeLabelMap[q.type]}</span>
      <span class="q-topic-badge">${q.topicIcon} ${q.topic}</span>
    </div>
    <div class="q-text">${q.question}</div>
    ${optionsHTML}
  `;

  // Focus fill input
  if (q.type === 'fill') {
    setTimeout(() => {
      const inp = document.getElementById('fill-input');
      if (inp) inp.focus();
    }, 100);
  }
}

// Multiple choice / True-False answer
function answerMC(index) {
  if (state.answered) return;
  state.answered = true;

  const q       = QUESTIONS[state.currentQ];
  const correct = index === q.correct;
  const total   = QUESTIONS.length;
  const isLast  = state.currentQ === total - 1;

  state.answers.push({ topic: q.topic, topicIcon: q.topicIcon, correct });

  // Style options
  document.querySelectorAll('.q-option').forEach((btn, i) => {
    if (i === q.correct) btn.classList.add('correct');
    else if (i === index && !correct) btn.classList.add('wrong');
    else btn.classList.add('disabled');
    btn.onclick = null;
  });

  showOverlay(correct, q, isLast);
}

// Fill-in answer
function checkFill() {
  if (state.answered) return;

  const q     = QUESTIONS[state.currentQ];
  const input = document.getElementById('fill-input');
  if (!input) return;

  const userVal = input.value.trim().toLowerCase();
  const correct = q.accept.some(a => a.toLowerCase() === userVal);
  const total   = QUESTIONS.length;
  const isLast  = state.currentQ === total - 1;

  state.answered = true;
  state.answers.push({ topic: q.topic, topicIcon: q.topicIcon, correct });

  // Style input
  input.classList.add(correct ? 'correct' : 'wrong');
  input.disabled = true;

  // Disable check button
  const checkBtn = document.getElementById('btn-check');
  if (checkBtn) checkBtn.disabled = true;

  // Show correct answer if wrong
  if (!correct) {
    const hint = document.createElement('div');
    hint.style.cssText = 'margin-top:8px;font-size:13px;color:#1a5e3a;font-weight:600;';
    hint.textContent = '→ ' + q.answer;
    input.parentNode.insertBefore(hint, checkBtn);
  }

  showOverlay(correct, q, isLast);
}

// Show answer overlay
function showOverlay(correct, q, isLast) {
  const t    = T[state.lang];
  const lang = state.lang;

  document.getElementById('overlay-result').textContent =
    correct ? t.correct : t.wrong;

  document.getElementById('overlay-rule').textContent =
    t.whyRule + ': ' + (q.rule ? q.rule[lang] : '');

  document.getElementById('overlay-exp').textContent =
    q.explanation[lang] || q.explanation['en'];

  document.getElementById('overlay-next').textContent =
    isLast ? t.lastBtn : t.nextBtn;

  document.getElementById('answer-overlay').classList.add('show');
}

function nextQuestion() {
  document.getElementById('answer-overlay').classList.remove('show');
  state.currentQ++;

  if (state.currentQ >= QUESTIONS.length) {
    showResults();
  } else {
    renderQuestion();
    document.getElementById('test-progress').style.width =
      ((state.currentQ / QUESTIONS.length) * 100) + '%';
    document.getElementById('test-counter').textContent =
      `${state.currentQ + 1}/${QUESTIONS.length}`;
  }
}

// ══════════════════════════════════════
// RESULTS
// ══════════════════════════════════════
function showResults() {
  const t      = T[state.lang];
  const lang   = state.lang;
  const total  = state.answers.length;
  const correct= state.answers.filter(a => a.correct).length;
  const pct    = Math.round((correct / total) * 100);

  const level  = pct >= 70 ? 'high' : pct >= 40 ? 'mid' : 'low';
  const color  = level === 'high' ? '#2ecc8a' : level === 'mid' ? '#f4c842' : '#f47c3a';

  const circ   = 2 * Math.PI * 54;
  const offset = circ * (1 - pct / 100);

  // Topic breakdown
  const topicMap = {};
  state.answers.forEach(a => {
    if (!topicMap[a.topic])
      topicMap[a.topic] = { icon: a.topicIcon, correct: 0, total: 0 };
    topicMap[a.topic].total++;
    if (a.correct) topicMap[a.topic].correct++;
  });

  const breakdownRows = Object.entries(topicMap).map(([topic, d]) => {
    const p = Math.round(d.correct / d.total * 100);
    const cls = p >= 70 ? 'pill-good' : p >= 40 ? 'pill-mid' : 'pill-weak';
    const lbl = p >= 70 ? t.good      : p >= 40 ? t.mid      : t.weak;
    return `
      <div class="breakdown-row">
        <span class="breakdown-topic">${d.icon} ${topic}</span>
        <span class="status-pill ${cls}">${lbl}</span>
      </div>`;
  }).join('');

  showScreen('screen-results');

  document.getElementById('results-wrap').innerHTML = `
    <div class="results-logo">Slaag<em>NL</em></div>

    <div class="score-ring-wrap">
      <svg width="148" height="148" viewBox="0 0 148 148">
        <circle cx="74" cy="74" r="54"
          fill="none" stroke="rgba(255,255,255,.07)" stroke-width="13"/>
        <circle cx="74" cy="74" r="54"
          fill="none" stroke="${color}" stroke-width="13"
          stroke-linecap="round"
          stroke-dasharray="${circ}"
          stroke-dashoffset="${offset}"
          style="transition:stroke-dashoffset 1s ease"/>
      </svg>
      <div class="score-center">
        <div class="score-pct">${pct}%</div>
        <div class="score-sub">${correct}/${total}</div>
      </div>
    </div>

    <h2 class="results-title">${t['title_' + level]}</h2>
    <p class="results-sub">${t['rsub_' + level]}</p>

    <div class="breakdown">
      <div class="breakdown-title">${t.breakdown}</div>
      ${breakdownRows}
    </div>

    <div class="upgrade-card">
      <div class="upgrade-flag">🇳🇱</div>
      <div class="premium-badge">${t.premiumBadge}</div>
      <div class="upgrade-title">${t.upgradeTitle}</div>
      <p class="upgrade-sub">${t.upgradeSub}</p>
      <ul class="upgrade-features">
        <li>${t.f1}</li>
        <li>${t.f2}</li>
        <li>${t.f3}</li>
        <li>${t.f4}</li>
        <li>${t.f5}</li>
      </ul>
      <button class="btn-primary" onclick="showScreen('screen-signup')">${t.upgradeBtn}</button>
    </div>

    <button class="btn-back" style="margin-top:20px" onclick="goToTest()">
      ${t.backResults}
    </button>
  `;
}

// ══════════════════════════════════════
// SIGNUP
// ══════════════════════════════════════
function handleSignup() {
  const t    = T[state.lang];
  const name = document.getElementById('su-name').value.trim();
  const age  = parseInt(document.getElementById('su-age').value);
  const email= document.getElementById('su-email').value.trim();
  const pass = document.getElementById('su-pass').value;

  clearErrors();

  if (!name)                  { showErr('su-name', t.errName);  return; }
  if (!age || age < 16 || age > 99) { showErr('su-age', t.errAge);   return; }
  if (!validEmail(email))     { showErr('su-email', t.errEmail); return; }
  if (pass.length < 8)        { showErr('su-pass', t.errPass);  return; }

  const user = {
    name, age, email,
    country:  document.getElementById('su-country').value,
    examDate: document.getElementById('su-date').value,
    examType: document.getElementById('su-type').value,
    lang:     state.lang,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem('slaagnl_user', JSON.stringify(user));
  document.getElementById('ve-email').textContent = email;
  showScreen('screen-verify');

  // TODO: connect Firebase Auth
  console.log('New user:', user);
}

// ══════════════════════════════════════
// LOGIN
// ══════════════════════════════════════
function handleLogin() {
  const t     = T[state.lang];
  const email = document.getElementById('li-email').value.trim();
  const pass  = document.getElementById('li-pass').value;

  clearErrors();

  if (!validEmail(email)) { showErr('li-email', t.errLiEmail); return; }
  if (!pass)              { showErr('li-pass',  t.errLiPass);  return; }

  // TODO: connect Firebase Auth
  console.log('Login:', email);
}

function resendEmail() {
  // TODO: Firebase resend
  console.log('Resend verification');
}

// ══════════════════════════════════════
// FORM HELPERS
// ══════════════════════════════════════
function showErr(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = 'var(--red)';
  el.style.boxShadow   = '0 0 0 4px rgba(232,69,90,.15)';
  const div = document.createElement('div');
  div.className = 'form-error';
  div.textContent = msg;
  el.parentNode.appendChild(div);
  el.focus();
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach(e => e.remove());
  document.querySelectorAll('.form-input').forEach(el => {
    el.style.borderColor = '';
    el.style.boxShadow   = '';
  });
}

function validEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
