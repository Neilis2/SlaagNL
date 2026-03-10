// ══════════════════════════════════════
// SLAAGNL v2 — Level Test Questions (A1)
// Questions & answers: Dutch
// Explanations: per user language (es/en/ar)
// Types: mc (multiple choice), fill (text input), tf (true/false)
// ══════════════════════════════════════

const QUESTIONS = [
  {
    id: 1,
    type: "fill",
    topic: "Grammatica",
    topicIcon: "📝",
    question: "Ik ___ gisteren naar de dokter gegaan.",
    answer: "ben",           // canonical correct answer
    accept: ["ben"],         // all accepted variants (lowercase)
    explanation: {
      en: "In Dutch, movement verbs in the past perfect use 'zijn' as auxiliary. 'Ben' is the conjugated form of 'zijn' for 'ik' (I). Verbs like gaan (go), komen (come), rijden (ride) use zijn, not hebben.",
      es: "En holandés, los verbos de movimiento en el pasado perfecto usan 'zijn' como auxiliar. 'Ben' es la conjugación de 'zijn' para 'ik' (yo). Verbos como gaan, komen, rijden usan zijn, no hebben.",
      ar: "في الهولندية، الأفعال التي تدل على الحركة في الماضي التام تستخدم 'zijn' مساعداً. 'Ben' هو تصريف 'zijn' مع ضمير 'ik' (أنا).",
    },
    rule: {
      en: "Movement verbs → zijn (not hebben)",
      es: "Verbos de movimiento → zijn (no hebben)",
      ar: "أفعال الحركة → zijn (ليس hebben)",
    }
  },
  {
    id: 2,
    type: "mc",
    topic: "Aardrijkskunde",
    topicIcon: "🗺️",
    question: "Wat is de hoofdstad van Nederland?",
    options: ["Rotterdam", "Den Haag", "Amsterdam", "Utrecht"],
    correct: 2,
    explanation: {
      en: "Amsterdam is the official capital of the Netherlands. However, the government and parliament are located in Den Haag (The Hague). This is a common distinction tested in KNS.",
      es: "Ámsterdam es la capital oficial de los Países Bajos. Sin embargo, el gobierno y el parlamento están en Den Haag (La Haya). Esta distinción es común en el examen KNS.",
      ar: "أمستردام هي العاصمة الرسمية لهولندا. لكن الحكومة والبرلمان يقعان في لاهاي (Den Haag). هذا الفرق يُختبر كثيراً في امتحان KNS.",
    },
    rule: {
      en: "Capital = Amsterdam · Government = Den Haag",
      es: "Capital = Ámsterdam · Gobierno = Den Haag",
      ar: "العاصمة = أمستردام · الحكومة = لاهاي",
    }
  },
  {
    id: 3,
    type: "mc",
    topic: "Grammatica",
    topicIcon: "📝",
    question: "Welke zin is correct?",
    options: [
      "Ik woon in een huis groot",
      "Ik woon in een groot huis",
      "Groot huis ik woon in een",
      "Ik in een groot huis woon"
    ],
    correct: 1,
    explanation: {
      en: "In Dutch, adjectives always come before the noun they describe, just like in English. 'groot huis' (big house) is correct. The adjective precedes the noun in all cases.",
      es: "En holandés, los adjetivos siempre van antes del sustantivo que describen, igual que en inglés. 'groot huis' (casa grande) es lo correcto. El adjetivo precede al sustantivo en todos los casos.",
      ar: "في الهولندية، الصفات تأتي دائماً قبل الاسم الذي تصفه، تماماً كالإنجليزية. 'groot huis' (بيت كبير) هو الصحيح.",
    },
    rule: {
      en: "Adjective + Noun order (not reversed like Spanish)",
      es: "Orden: Adjetivo + Sustantivo (no al revés como en español)",
      ar: "الترتيب: صفة + اسم",
    }
  },
  {
    id: 4,
    type: "mc",
    topic: "Burgerschap",
    topicIcon: "🗳️",
    question: "Hoe oud moet je zijn om te mogen stemmen in Nederland?",
    options: ["16 jaar", "21 jaar", "18 jaar", "17 jaar"],
    correct: 2,
    explanation: {
      en: "In the Netherlands, the minimum voting age is 18 years old for national and local elections. Some municipalities allow 16-year-olds to vote in local referendums, but 18 is the standard.",
      es: "En los Países Bajos, la edad mínima para votar es 18 años en elecciones nacionales y locales. Algunos municipios permiten votar a los de 16 en referéndums locales, pero 18 es el estándar.",
      ar: "في هولندا، الحد الأدنى لسن التصويت هو 18 عاماً في الانتخابات الوطنية والمحلية.",
    },
    rule: {
      en: "Voting age in the Netherlands = 18",
      es: "Edad para votar en Holanda = 18 años",
      ar: "سن التصويت في هولندا = 18 عاماً",
    }
  },
  {
    id: 5,
    type: "fill",
    topic: "Gezondheid",
    topicIcon: "🏥",
    question: "Ahmed is ziek. Hij gaat naar ___.",
    answer: "de huisarts",
    accept: ["de huisarts", "huisarts", "de dokter", "dokter"],
    explanation: {
      en: "In the Netherlands, the first step for non-emergency medical care is always the huisarts (general practitioner / GP). You cannot go directly to a specialist without a referral (verwijzing) from your huisarts.",
      es: "En Holanda, el primer paso para atención médica no urgente es siempre el huisarts (médico de cabecera). No puedes ir directamente al especialista sin una derivación (verwijzing) de tu huisarts.",
      ar: "في هولندا، الخطوة الأولى للرعاية الطبية غير الطارئة هي دائماً طبيب الأسرة (huisarts). لا يمكنك الذهاب مباشرة إلى الأخصائي بدون إحالة منه.",
    },
    rule: {
      en: "First step for health = huisarts (not hospital)",
      es: "Primer paso de salud = huisarts (no el hospital)",
      ar: "أول خطوة صحية = طبيب الأسرة (huisarts)",
    }
  },
  {
    id: 6,
    type: "fill",
    topic: "Grammatica",
    topicIcon: "📝",
    question: "Het is koud buiten. De kinderen doen hun jas ___.",
    answer: "aan",
    accept: ["aan"],
    explanation: {
      en: "'Aandoen' is a separable verb meaning 'to put on' (clothing). In a main clause, the prefix 'aan' separates and moves to the end of the sentence. This is a key grammar rule for separable verbs (scheidbare werkwoorden).",
      es: "'Aandoen' es un verbo separable que significa 'ponerse' (ropa). En una oración principal, el prefijo 'aan' se separa y va al final de la frase. Esta es una regla clave para los verbos separables (scheidbare werkwoorden).",
      ar: "'Aandoen' فعل منفصل يعني 'ارتداء' (الملابس). في الجملة الرئيسية، البادئة 'aan' تنفصل وتذهب إلى نهاية الجملة.",
    },
    rule: {
      en: "Separable verbs: prefix goes to end → aandoen → doet … aan",
      es: "Verbos separables: el prefijo va al final → aandoen → doet … aan",
      ar: "الأفعال المنفصلة: البادئة تذهب للنهاية → aandoen → doet … aan",
    }
  },
  {
    id: 7,
    type: "fill",
    topic: "Grammatica",
    topicIcon: "📝",
    question: "Fatima wil Nederlands leren omdat zij in Nederland ___ ___.",
    answer: "wil wonen",
    accept: ["wil wonen", "wonen wil"],
    explanation: {
      en: "After subordinating conjunctions like 'omdat' (because), 'dat' (that), 'als' (if/when), the verb moves to the END of the clause. This is the verb-final rule for subordinate clauses. 'wil wonen' (not 'wil in Nederland wonen' — the subject is already stated).",
      es: "Después de conjunciones subordinadas como 'omdat' (porque), 'dat' (que), 'als' (si/cuando), el verbo va al FINAL de la frase. Esta es la regla del verbo final en oraciones subordinadas. 'wil wonen' — el verbo va al final.",
      ar: "بعد الأدوات الرابطة مثل 'omdat' (لأن)، يذهب الفعل إلى نهاية الجملة. هذه قاعدة الفعل في النهاية للجمل الفرعية.",
    },
    rule: {
      en: "omdat / dat / als → verb goes to END of clause",
      es: "omdat / dat / als → el verbo va al FINAL de la frase",
      ar: "omdat / dat / als → الفعل يذهب لنهاية الجملة",
    }
  },
  {
    id: 8,
    type: "tf",
    topic: "Burgerschap",
    topicIcon: "⚖️",
    question: "In Nederland is discriminatie toegestaan.",
    options: ["Waar", "Niet waar"],
    correct: 1,
    explanation: {
      en: "False. Discrimination is prohibited by law in the Netherlands. Article 1 of the Dutch Constitution (Grondwet) states that all people in the Netherlands are treated equally and that discrimination based on religion, belief, political opinion, race, sex, or any other ground is not permitted.",
      es: "Falso. La discriminación está prohibida por ley en los Países Bajos. El Artículo 1 de la Constitución holandesa (Grondwet) establece que todas las personas en Holanda son tratadas igual y que la discriminación por religión, raza, sexo u otro motivo no está permitida.",
      ar: "خطأ. التمييز محظور بموجب القانون في هولندا. المادة الأولى من الدستور الهولندي تنص على المساواة بين جميع الناس وعدم السماح بالتمييز.",
    },
    rule: {
      en: "Article 1 Grondwet: discrimination is prohibited",
      es: "Artículo 1 Grondwet: la discriminación está prohibida",
      ar: "المادة الأولى من الدستور: التمييز محظور",
    }
  },
  {
    id: 9,
    type: "tf",
    topic: "Politiek",
    topicIcon: "🏛️",
    question: "De Tweede Kamer heeft 150 leden.",
    options: ["Waar", "Niet waar"],
    correct: 0,
    explanation: {
      en: "True. The Tweede Kamer (House of Representatives, the lower house of the Dutch parliament) has exactly 150 members, elected by Dutch citizens every 4 years through proportional representation.",
      es: "Verdadero. La Tweede Kamer (Cámara de Representantes, la cámara baja del parlamento holandés) tiene exactamente 150 miembros, elegidos por los ciudadanos holandeses cada 4 años mediante representación proporcional.",
      ar: "صحيح. مجلس النواب الهولندي (Tweede Kamer) يضم 150 عضواً بالضبط، يُنتخبون كل 4 سنوات.",
    },
    rule: {
      en: "Tweede Kamer = 150 members · Eerste Kamer = 75 members",
      es: "Tweede Kamer = 150 miembros · Eerste Kamer = 75 miembros",
      ar: "Tweede Kamer = 150 عضو · Eerste Kamer = 75 عضو",
    }
  },
  {
    id: 10,
    type: "tf",
    topic: "Onderwijs",
    topicIcon: "🏫",
    question: "In Nederland gaan kinderen verplicht naar school vanaf vier jaar.",
    options: ["Waar", "Niet waar"],
    correct: 1,
    explanation: {
      en: "False. Children may start school voluntarily at age 4, but compulsory education (leerplicht) begins at age 5. At 4 years old, attending school is optional (vrijwillig). Mandatory schooling runs from age 5 to 16.",
      es: "Falso. Los niños pueden empezar la escuela voluntariamente a los 4 años, pero la educación obligatoria (leerplicht) comienza a los 5 años. A los 4 años la asistencia es opcional (vrijwillig). La escolarización obligatoria va de los 5 a los 16 años.",
      ar: "خطأ. يمكن للأطفال البدء في المدرسة طوعاً في سن الرابعة، لكن التعليم الإلزامي (leerplicht) يبدأ من سن الخامسة. التعليم الإلزامي من 5 إلى 16 عاماً.",
    },
    rule: {
      en: "Voluntary from age 4 · Compulsory (leerplicht) from age 5",
      es: "Voluntario desde los 4 · Obligatorio (leerplicht) desde los 5",
      ar: "اختياري من 4 سنوات · إلزامي من 5 سنوات",
    }
  },
];
