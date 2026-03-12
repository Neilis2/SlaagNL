// ══════════════════════════════════════
// SLAAGNL — Topic Engine (Grammatica)
// ══════════════════════════════════════

let currentRuleIndex = 0;
let exerciseState    = { placed: [], done: false };
let challengeDone    = false;

// ── Open topic ─────────────────────────
function openTopicGrammatica() {
  currentRuleIndex = 0;
  showScreen('screen-topic');
  renderRule(0);
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ── Render rule ─────────────────────────
function renderRule(idx) {
  const rules = window.GRAMMATICA_RULES;
  if (!rules || idx >= rules.length) { showTopicComplete(); return; }

  const rule = rules[idx];
  const lang = window.state?.lang || 'es';
  exerciseState = { placed: [], done: false };
  challengeDone = false;

  const screen = document.getElementById('screen-topic');
  screen.innerHTML = buildRuleHTML(rule, lang, idx, rules.length);
  bindExercise(rule);
}

// ── Build HTML ──────────────────────────
function buildRuleHTML(rule, lang, idx, total) {
  const t = window.DT?.[lang] || window.DT?.['es'];
  const progressPct = Math.round((idx / total) * 100);

  return `
  <div class="topic-screen">
    <!-- Header -->
    <div class="topic-header">
      <button class="topic-back" onclick="showScreen('screen-dashboard'); renderDashboard()">‹</button>
      <div class="topic-header-info">
        <div class="topic-title-small">Grammatica</div>
        <div class="topic-rule-title">${rule.title[lang] || rule.title.es}</div>
      </div>
      <div class="topic-rule-count">${idx+1}/${total}</div>
    </div>

    <!-- Progress bar -->
    <div class="topic-progress-wrap">
      <div class="topic-progress-fill" style="width:${progressPct}%"></div>
    </div>

    <!-- Explanation -->
    <div class="topic-card explanation-card">
      <div class="card-body" id="explanation-text">
        ${(rule.explanation[lang] || rule.explanation.es).replace(/\n/g,'<br>')}
      </div>
      <!-- Tip bombilla -->
      <div class="tip-toggle" onclick="toggleTip(this)">
        <span class="tip-icon">💡</span>
        <span class="tip-label">${lang==='ar'?'نصيحة':lang==='en'?'Pro tip':'¿Por qué?'}</span>
        <span class="tip-arrow">›</span>
      </div>
      <div class="tip-content" style="display:none">
        ${(rule.tip[lang] || rule.tip.es).replace(/\n/g,'<br>')}
      </div>
    </div>

    <!-- Exercise: tap words in order -->
    <div class="topic-card exercise-card">
      <div class="exercise-label">${lang==='ar'?'✏️ رتّب الكلمات':lang==='en'?'✏️ Tap words in order':'✏️ Toca las palabras en orden'}</div>
      <div class="exercise-translation">${rule.exercise.translation[lang] || rule.exercise.translation.es}</div>
      <div class="answer-slots" id="answer-slots"></div>
      <div class="word-bank" id="word-bank"></div>
      <div class="exercise-feedback" id="exercise-feedback" style="display:none"></div>
    </div>

    <!-- Challenge: multiple choice -->
    <div class="topic-card challenge-card" id="challenge-card">
      <div class="challenge-label">🎯 ${lang==='ar'?'التحدي':lang==='en'?'Challenge':'Reto'}</div>
      <div class="challenge-question">${rule.challenge.question[lang] || rule.challenge.question.es}</div>
      <div class="challenge-options" id="challenge-options">
        ${rule.challenge.options.map((opt, i) =>
          `<button class="challenge-opt" onclick="checkChallenge(${i}, this)">${opt}</button>`
        ).join('')}
      </div>
      <div class="challenge-feedback" id="challenge-feedback" style="display:none"></div>
    </div>

    <!-- Next button (hidden until challenge done) -->
    <div class="topic-next-wrap" id="next-wrap" style="display:none">
      <button class="btn-next-rule" onclick="nextRule()">
        ${idx+1 < total
          ? (lang==='ar'?'التالي ›':lang==='en'?'Next rule ›':'Siguiente regla ›')
          : (lang==='ar'?'إنهاء 🎉':lang==='en'?'Finish 🎉':'Terminar 🎉')}
      </button>
    </div>
  </div>`;
}

// ── Tip toggle ──────────────────────────
function toggleTip(el) {
  const content = el.nextElementSibling;
  const arrow   = el.querySelector('.tip-arrow');
  const open    = content.style.display !== 'none';
  content.style.display = open ? 'none' : 'block';
  arrow.textContent = open ? '›' : '↓';
}

// ── Exercise: tap words ─────────────────
function bindExercise(rule) {
  const words   = [...rule.exercise.words];
  const answer  = rule.exercise.answer;
  const slotsEl = document.getElementById('answer-slots');
  const bankEl  = document.getElementById('word-bank');
  if (!slotsEl || !bankEl) return;

  // Shuffle words
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  exerciseState.placed = [];
  exerciseState.answer = answer;
  exerciseState.done   = false;

  // Empty slots
  slotsEl.innerHTML = answer.map((_, i) =>
    `<div class="answer-slot" id="slot-${i}"></div>`
  ).join('');

  // Word buttons
  bankEl.innerHTML = shuffled.map((w, i) =>
    `<button class="word-chip" id="chip-${i}" data-word="${w}" onclick="tapWord(this)">${w}</button>`
  ).join('');
}

function tapWord(btn) {
  if (exerciseState.done) return;
  const word    = btn.dataset.word;
  const placed  = exerciseState.placed;
  const answer  = exerciseState.answer;
  const slotIdx = placed.length;

  if (slotIdx >= answer.length) return;

  // Place word in slot
  placed.push(word);
  btn.disabled = true;
  btn.classList.add('used');

  const slot = document.getElementById(`slot-${slotIdx}`);
  if (slot) {
    slot.textContent = word;
    slot.classList.add('filled');
  }

  // Check if all slots filled
  if (placed.length === answer.length) {
    checkExercise(placed, answer);
  }
}

function checkExercise(placed, answer) {
  exerciseState.done = true;
  const correct = placed.every((w, i) => w === answer[i]);
  const feedbackEl = document.getElementById('exercise-feedback');
  const slots = document.querySelectorAll('.answer-slot');

  slots.forEach((slot, i) => {
    slot.classList.add(placed[i] === answer[i] ? 'slot-correct' : 'slot-wrong');
  });

  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    if (correct) {
      feedbackEl.className = 'exercise-feedback feedback-correct';
      feedbackEl.innerHTML = '✅ ¡Correcto!';
    } else {
      feedbackEl.className = 'exercise-feedback feedback-wrong';
      feedbackEl.innerHTML = `❌ La respuesta correcta: <strong>${answer.join(' ')}</strong>`;
    }
  }
}

// ── Challenge ───────────────────────────
function checkChallenge(idx, btn) {
  if (challengeDone) return;
  challengeDone = true;

  const rules  = window.GRAMMATICA_RULES;
  const rule   = rules[currentRuleIndex];
  const lang   = window.state?.lang || 'es';
  const correct = idx === rule.challenge.answer;

  // Disable all options
  document.querySelectorAll('.challenge-opt').forEach((b, i) => {
    b.disabled = true;
    if (i === rule.challenge.answer) b.classList.add('opt-correct');
    else if (i === idx && !correct)  b.classList.add('opt-wrong');
  });

  const feedbackEl = document.getElementById('challenge-feedback');
  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    const explanation = rule.challenge.explanation[lang] || rule.challenge.explanation.es;
    feedbackEl.className = `challenge-feedback ${correct ? 'feedback-correct' : 'feedback-wrong'}`;
    feedbackEl.innerHTML = (correct ? '✅ ' : '❌ ') + explanation;
  }

  // Show next button
  const nextWrap = document.getElementById('next-wrap');
  if (nextWrap) nextWrap.style.display = 'flex';

  // Update mastery
  if (correct) updateMastery('grammatica', 4);
}

// ── Next rule ───────────────────────────
function nextRule() {
  currentRuleIndex++;
  renderRule(currentRuleIndex);
  // Scroll to top
  const screen = document.getElementById('screen-topic');
  if (screen) screen.scrollTop = 0;
  window.scrollTo(0, 0);
}

// ── Topic complete ──────────────────────
function showTopicComplete() {
  const lang   = window.state?.lang || 'es';
  const screen = document.getElementById('screen-topic');
  screen.innerHTML = `
  <div class="topic-complete">
    <div class="complete-emoji">🎉</div>
    <div class="complete-title">${lang==='ar'?'أحسنت!':lang==='en'?'Well done!':'¡Enhorabuena!'}</div>
    <div class="complete-sub">${lang==='ar'?'أكملت 25 قاعدة في القواعد':lang==='en'?'You completed all 25 Grammar rules':'Completaste las 25 reglas de Grammatica'}</div>
    <button class="btn-primary" onclick="showScreen('screen-dashboard'); renderDashboard()" style="margin-top:32px;padding:16px 32px">
      ${lang==='ar'?'← لوحة التحكم':lang==='en'?'← Dashboard':'← Volver al inicio'}
    </button>
  </div>`;
}

// ── Mastery update ──────────────────────
function updateMastery(topicId, points) {
  if (!window.state?.user) return;
  const mastery = window.state.user.mastery || {};
  mastery[topicId] = Math.min(100, (mastery[topicId] || 0) + points);
  window.state.user.mastery = mastery;
  if (window.FB?.updateMastery) window.FB.updateMastery(topicId, mastery[topicId]);
}

window.openTopicGrammatica = openTopicGrammatica;

// Override openTopic from dashboard.js
window.openTopic = function(topicId) {
  if (topicId === 'grammatica') {
    openTopicGrammatica();
  } else {
    if (window.showToast) showToast(window.DT?.[window.state?.lang||'es']?.toastSoon || '¡Próximamente!');
  }
};
