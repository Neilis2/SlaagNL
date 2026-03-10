# SlaagNL 🇳🇱

**Pass your Dutch inburgering exam with adaptive learning.**  
Prepara tu examen de inburgering con aprendizaje adaptativo.

---

## Project Structure

```
slaagnl/
├── index.html           ← Main entry point (all screens)
├── css/
│   └── styles.css       ← All styles (navy/orange theme, RTL support)
├── js/
│   ├── i18n.js          ← Translations: English · Spanish · Arabic
│   ├── questions.js     ← A1 level test questions (Dutch + multilingual explanations)
│   └── app.js           ← App logic: navigation, test, results, signup, login
└── README.md
```

---

## Screens (Phase 1 — Complete)

| Screen | Description |
|--------|-------------|
| Welcome | Language selector (EN/ES/AR), before/after stats, CTA |
| Level Test | 10 A1 questions: multiple choice, fill-in-the-blank, true/false |
| Results | Score ring, topic breakdown, 1 free Premium day offer |
| Sign Up | Registration with name, age, email, country, exam date |
| Verify Email | Post-registration confirmation screen |
| Log In | Login form with forgot password link |

---

## Question Types

- **mc** — Multiple choice (4 options)
- **fill** — Fill in the blank (text input, accepts variants)
- **tf** — True or False (Waar / Niet waar)

Questions are always in **Dutch**.  
Explanations and rules adapt to the **user's language** (ES / EN / AR).

---

## Exam Levels

| Level | Exam | Status |
|-------|------|--------|
| A1 | MVV (embassy exam) | ✅ Phase 1 |
| A2 | Naturalization | 🔜 Phase 2 |

---

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder `/`
4. Live at: `https://yourusername.github.io/slaagnl`

---

## Roadmap

### Phase 2 — Dashboard & Practice
- [ ] Firebase Authentication (email verification, password reset)
- [ ] User dashboard with topic map and mastery %
- [ ] Daily practice module (free: 10 exercises/day)
- [ ] Progress system: mastery goes up and down based on answers

### Phase 3 — Exam Simulator
- [ ] Full KNS exam simulator (30 min, real format)
- [ ] Results analysis with weak topic detection

### Phase 4 — Monetization
- [ ] Stripe integration for Premium subscriptions (~€7.99/month)
- [ ] Premium: unlimited exercises, full simulator, offline mode

### Phase 5 — Scale
- [ ] Turkish language support
- [ ] A2 level content for naturalization exam
- [ ] Mobile app (React Native)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML · CSS · Vanilla JS |
| Fonts | Playfair Display · DM Sans · Noto Sans Arabic |
| Auth (Phase 2) | Firebase Authentication |
| Database (Phase 2) | Firebase Firestore |
| Payments (Phase 4) | Stripe |
