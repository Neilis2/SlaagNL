// ══════════════════════════════════════
// SLAAGNL — Tema: Grammatica (25 Reglas)
// ══════════════════════════════════════

const GRAMMATICA_RULES = [
  {
    id: 1,
    title: { es: 'El Verbo en Posición 2', en: 'Verb in Position 2', ar: 'الفعل في الموقع الثاني' },
    explanation: {
      es: 'En holandés, el verbo conjugado es siempre la <strong>segunda pieza</strong> de la oración. No importa qué tan larga sea la primera parte — el verbo siempre ocupa el puesto 2.\n\n📌 Estructura: [Sujeto] + [VERBO] + [Resto]\n\n✅ <em>Ik leer Nederlands.</em> (Yo aprendo holandés)\n✅ <em>Neilis werkt elke dag.</em> (Neilis trabaja todos los días)',
      en: 'In Dutch, the conjugated verb is always the <strong>second piece</strong> of the sentence. No matter how long the first part is — the verb always takes position 2.\n\n📌 Structure: [Subject] + [VERB] + [Rest]\n\n✅ <em>Ik leer Nederlands.</em> (I learn Dutch)\n✅ <em>Neilis werkt elke dag.</em> (Neilis works every day)',
      ar: 'في اللغة الهولندية، الفعل المصرّف هو دائماً <strong>القطعة الثانية</strong> في الجملة. بغض النظر عن طول الجزء الأول — الفعل يحتل دائماً الموقع الثاني.\n\n📌 البنية: [الفاعل] + [الفعل] + [الباقي]\n\n✅ <em>Ik leer Nederlands.</em> (أنا أتعلم الهولندية)'
    },
    tip: {
      es: 'El verbo es como un <strong>ancla</strong> — no se mueve del puesto 2. En español podemos decir "Hoy yo como" o "Yo hoy como". En holandés el verbo siempre va segundo: <em>Ik eet vandaag</em> ✅ — nunca <em>Ik vandaag eet</em> ❌',
      en: 'The verb is like an <strong>anchor</strong> — it never moves from position 2. The verb always comes second: <em>Ik eet vandaag</em> ✅ — never <em>Ik vandaag eet</em> ❌',
      ar: 'الفعل مثل <strong>المرساة</strong> — لا يتحرك من الموقع الثاني أبداً.'
    },
    exercise: {
      words: ['Neilis', 'leert', 'Nederlands'],
      answer: ['Neilis', 'leert', 'Nederlands'],
      translation: { es: 'Neilis aprende holandés', en: 'Neilis learns Dutch', ar: 'نيليس تتعلم الهولندية' }
    },
    challenge: {
      question: { es: '¿Cuál de estas frases es correcta?', en: 'Which sentence is correct?', ar: 'أي جملة صحيحة؟' },
      options: ['Ik elke dag sport.', 'Ik sport elke dag.', 'Sport ik elke dag.'],
      answer: 1,
      explanation: { es: '<strong>Ik sport elke dag</strong> ✅ — El verbo "sport" está en posición 2, después del sujeto "Ik". La opción A pone el verbo al final ❌ y la C solo es válida para preguntas.', en: '<strong>Ik sport elke dag</strong> ✅ — The verb "sport" is in position 2. Option A puts the verb at the end ❌ and C is only valid for questions.', ar: '<strong>Ik sport elke dag</strong> ✅ — الفعل في الموقع الثاني.' }
    }
  },
  {
    id: 2,
    title: { es: 'Tiempo e Inversión (La T de STOMP)', en: 'Time & Inversion (T of STOMP)', ar: 'الزمن والقلب (T في STOMP)' },
    explanation: {
      es: 'Si pones el <strong>tiempo</strong> (hoy, mañana, siempre) al principio, el sujeto salta al puesto 3 — pero el verbo ¡sigue en el puesto 2!\n\n✅ Normal: <em>Ik drink sap.</em> (Yo bebo zumo)\n✅ Invertido: <em>Vandaag drink ik sap.</em> (Hoy bebo yo zumo)',
      en: 'If you put the <strong>time</strong> (today, tomorrow, always) at the start, the subject jumps to position 3 — but the verb stays in position 2!\n\n✅ Normal: <em>Ik drink sap.</em>\n✅ Inverted: <em>Vandaag drink ik sap.</em>',
      ar: 'إذا وضعت <strong>الزمن</strong> في البداية، ينتقل الفاعل إلى الموقع الثالث — لكن الفعل يبقى في الموقع الثاني!'
    },
    tip: {
      es: 'Recuerda: <strong>el verbo es el ancla</strong>. Si el tiempo ocupa el puesto 1, el sujeto se mueve al 3 para dejarle el puesto 2 al verbo. Esto se llama <em>inversión</em>.',
      en: 'Remember: <strong>the verb is the anchor</strong>. If time takes position 1, the subject moves to 3 to leave position 2 for the verb. This is called <em>inversion</em>.',
      ar: 'الفعل هو المرساة دائماً — إذا شغل الزمن الموقع الأول، ينتقل الفاعل للثالث.'
    },
    exercise: {
      words: ['Vandaag', 'drinkt', 'ik', 'sap'],
      answer: ['Vandaag', 'drinkt', 'ik', 'sap'],
      translation: { es: 'Hoy bebo yo zumo', en: 'Today I drink juice', ar: 'اليوم أشرب العصير' }
    },
    challenge: {
      question: { es: '¿Cuál frase es INCORRECTA?', en: 'Which sentence is INCORRECT?', ar: 'أي جملة خاطئة؟' },
      options: ['Neilis kookt vandaag.', 'Vandaag Neilis kookt.', 'Vandaag kookt Neilis.'],
      answer: 1,
      explanation: { es: '<strong>Vandaag Neilis kookt</strong> ❌ — El verbo "kookt" está en posición 3, no en la 2. Si empiezas por el tiempo, el verbo debe ir inmediatamente después.', en: '<strong>Vandaag Neilis kookt</strong> ❌ — "kookt" is in position 3, not 2. After a time word, the verb must come immediately.', ar: '<strong>Vandaag Neilis kookt</strong> ❌ — الفعل في الموقع الثالث، وهذا خطأ.' }
    }
  },
  {
    id: 3,
    title: { es: 'El Objeto (La O de STOMP)', en: 'The Object (O of STOMP)', ar: 'المفعول به (O في STOMP)' },
    explanation: {
      es: 'El <strong>objeto</strong> es la "cosa" que recibe la acción. En el mapa STOMP va después del tiempo.\n\n📌 Mapa: [Sujeto] + [VERBO] + [Tiempo] + [Objeto]\n\n✅ <em>Neilis leert vandaag Nederlands.</em>\n(Neilis aprende holandés hoy)',
      en: 'The <strong>object</strong> is the "thing" that receives the action. In the STOMP map it goes after the time.\n\n📌 Map: [Subject] + [VERB] + [Time] + [Object]\n\n✅ <em>Neilis leert vandaag Nederlands.</em>',
      ar: 'المفعول به هو "الشيء" الذي يتلقى الفعل. في خريطة STOMP يأتي بعد الزمن.'
    },
    tip: {
      es: 'Si hay Tiempo y Objeto, el <strong>tiempo gana</strong> y va primero. Incluso con inversión el objeto se queda al final: <em>Altijd eet Neilis appels.</em> ✅',
      en: 'If there\'s Time and Object, <strong>time wins</strong> and goes first. Even with inversion the object stays at the end.',
      ar: 'إذا كان هناك زمن ومفعول به، <strong>الزمن يأتي أولاً</strong> دائماً.'
    },
    exercise: {
      words: ['ik', 'eet', 'morgen', 'een appel'],
      answer: ['ik', 'eet', 'morgen', 'een appel'],
      translation: { es: 'Yo como una manzana mañana', en: 'I eat an apple tomorrow', ar: 'أنا آكل تفاحة غداً' }
    },
    challenge: {
      question: { es: '"Hoy bebe Neilis agua." ¿Cuál es la correcta empezando por Vandaag?', en: '"Today Neilis drinks water." Which is correct starting with Vandaag?', ar: 'أي جملة صحيحة تبدأ بـ Vandaag؟' },
      options: ['Vandaag Neilis drinkt water.', 'Vandaag drinkt water Neilis.', 'Vandaag drinkt Neilis water.'],
      answer: 2,
      explanation: { es: '<strong>Vandaag drinkt Neilis water</strong> ✅ — Tiempo (1) + Verbo (2) + Sujeto (3) + Objeto (4). El objeto "water" siempre va al final.', en: '<strong>Vandaag drinkt Neilis water</strong> ✅ — Time (1) + Verb (2) + Subject (3) + Object (4).', ar: '<strong>Vandaag drinkt Neilis water</strong> ✅ — الزمن أولاً، ثم الفعل، ثم الفاعل، ثم المفعول.' }
    }
  },
  {
    id: 4,
    title: { es: 'La Manera — Graag (La M de STOMP)', en: 'Manner — Graag (M of STOMP)', ar: 'الطريقة — Graag (M في STOMP)' },
    explanation: {
      es: 'La <strong>manera</strong> describe cómo haces algo. La palabra más importante es <em>graag</em> (con gusto / me gusta). Va después del objeto.\n\n✅ <em>Ik zwem graag.</em> (Me gusta nadar)\n✅ <em>Ik eet graag appels.</em> (Me gusta comer manzanas)',
      en: 'The <strong>manner</strong> describes how you do something. The most important word is <em>graag</em> (gladly / I like). It goes after the object.\n\n✅ <em>Ik zwem graag.</em>\n✅ <em>Ik eet graag appels.</em>',
      ar: 'الطريقة تصف كيف تفعل شيئاً. الكلمة الأهم هي <em>graag</em> (بكل سرور). تأتي بعد المفعول به.'
    },
    tip: {
      es: '<em>Graag</em> nunca va al principio de la frase y nunca va justo después del sujeto. Siempre sigue a los verbos o al final: <em>Ik lees graag boeken</em> ✅ — nunca <em>Ik graag lees</em> ❌',
      en: '<em>Graag</em> never goes at the start and never right after the subject. It always follows verbs or goes at the end.',
      ar: '<em>Graag</em> لا تأتي في البداية ولا بعد الفاعل مباشرة — تأتي بعد الأفعال أو في النهاية.'
    },
    exercise: {
      words: ['Ik', 'zwem', 'graag'],
      answer: ['Ik', 'zwem', 'graag'],
      translation: { es: 'Me gusta nadar', en: 'I like swimming', ar: 'أحب السباحة' }
    },
    challenge: {
      question: { es: '¿Cómo se dice "Me gusta leer libros"?', en: 'How do you say "I like reading books"?', ar: 'كيف تقول "أحب قراءة الكتب"؟' },
      options: ['Ik graag lees boeken.', 'Ik lees graag boeken.', 'Graag ik lees boeken.'],
      answer: 1,
      explanation: { es: '<strong>Ik lees graag boeken</strong> ✅ — Sujeto + Verbo + Graag + Objeto. <em>Graag</em> sigue al verbo principal.', en: '<strong>Ik lees graag boeken</strong> ✅ — Subject + Verb + Graag + Object.', ar: '<strong>Ik lees graag boeken</strong> ✅ — الفاعل + الفعل + graag + المفعول.' }
    }
  },
  {
    id: 5,
    title: { es: 'El Lugar (La P de STOMP)', en: 'Place (P of STOMP)', ar: 'المكان (P في STOMP)' },
    explanation: {
      es: 'El <strong>lugar</strong> cierra la frase. Si hay tiempo y lugar, el tiempo va primero.\n\n📌 Mapa completo: [S] + [V] + [Tiempo] + [Objeto] + [Manera] + [Lugar]\n\n✅ <em>Ik werk vandaag in de tuin.</em>\n(Yo trabajo hoy en el jardín)',
      en: 'The <strong>place</strong> closes the sentence. If there\'s time and place, time goes first.\n\n📌 Full map: [S] + [V] + [Time] + [Object] + [Manner] + [Place]\n\n✅ <em>Ik werk vandaag in de tuin.</em>',
      ar: 'المكان يغلق الجملة. إذا كان هناك زمن ومكان، الزمن يأتي أولاً دائماً.'
    },
    tip: {
      es: 'Regla de oro: <strong>Tiempo antes que Lugar</strong>. <em>Ik werk vandaag thuis</em> ✅ — nunca <em>Ik werk thuis vandaag</em> ❌',
      en: 'Golden rule: <strong>Time before Place</strong>. <em>Ik werk vandaag thuis</em> ✅ — never <em>Ik werk thuis vandaag</em> ❌',
      ar: 'القاعدة الذهبية: <strong>الزمن قبل المكان</strong>.'
    },
    exercise: {
      words: ['ik', 'werk', 'vandaag', 'in de tuin'],
      answer: ['ik', 'werk', 'vandaag', 'in de tuin'],
      translation: { es: 'Yo trabajo hoy en el jardín', en: 'I work today in the garden', ar: 'أنا أعمل اليوم في الحديقة' }
    },
    challenge: {
      question: { es: '¿Cuál es el orden correcto?', en: 'What is the correct order?', ar: 'ما الترتيب الصحيح؟' },
      options: ['Ik woon thuis morgen.', 'Ik woon morgen thuis.', 'Morgen thuis woon ik.'],
      answer: 1,
      explanation: { es: '<strong>Ik woon morgen thuis</strong> ✅ — El tiempo (morgen) va antes que el lugar (thuis). Siempre: Tiempo → Lugar.', en: '<strong>Ik woon morgen thuis</strong> ✅ — Time (morgen) comes before place (thuis).', ar: '<strong>Ik woon morgen thuis</strong> ✅ — الزمن قبل المكان.' }
    }
  },
  {
    id: 6,
    title: { es: 'Artículos De y Het', en: 'Articles De and Het', ar: 'أدوات التعريف De و Het' },
    explanation: {
      es: 'En holandés hay dos artículos definidos: <strong>de</strong> y <strong>het</strong>. No hay regla fija — hay que memorizarlos. Pero hay trucos:\n\n• Los <strong>plurales</strong> siempre usan <em>de</em>\n• Los <strong>diminutivos</strong> siempre usan <em>het</em>\n• El 80% de las palabras usan <em>de</em>\n\n✅ <em>de man</em> (el hombre) — <em>het kind</em> (el niño)',
      en: 'In Dutch there are two definite articles: <strong>de</strong> and <strong>het</strong>. There\'s no fixed rule — you must memorize them. But there are tricks:\n\n• <strong>Plurals</strong> always use <em>de</em>\n• <strong>Diminutives</strong> always use <em>het</em>\n• 80% of words use <em>de</em>',
      ar: 'في الهولندية أداتا تعريف: <strong>de</strong> و<strong>het</strong>. لا توجد قاعدة ثابتة — يجب الحفظ. لكن: الجمع دائماً <em>de</em>، والتصغير دائماً <em>het</em>.'
    },
    tip: {
      es: 'Truco práctico: cuando dudes, usa <em>de</em> — acertarás el 80% de las veces. Para el examen, las palabras más importantes ya las conocerás de memoria.',
      en: 'Practical trick: when in doubt, use <em>de</em> — you\'ll be right 80% of the time.',
      ar: 'عند الشك استخدم <em>de</em> — ستكون صحيحاً 80% من الوقت.'
    },
    exercise: {
      words: ['het', 'kind'],
      answer: ['het', 'kind'],
      translation: { es: 'el niño (het kind)', en: 'the child (het kind)', ar: 'الطفل (het kind)' }
    },
    challenge: {
      question: { es: '¿Cuál es el artículo correcto para "huis" (casa)?', en: 'Which is the correct article for "huis" (house)?', ar: 'ما أداة التعريف الصحيحة لـ "huis"؟' },
      options: ['De huis', 'Het huis', 'Een huis'],
      answer: 1,
      explanation: { es: '<strong>Het huis</strong> ✅ — "huis" es una palabra het-woord. Una forma fácil de recordarlo: <em>het huisje</em> (el diminutivo) confirma que es het.', en: '<strong>Het huis</strong> ✅ — "huis" is a het-word. Easy way to remember: <em>het huisje</em> confirms it.', ar: '<strong>Het huis</strong> ✅ — "huis" كلمة من نوع het.' }
    }
  },
  {
    id: 7,
    title: { es: 'Diminutivos (-je)', en: 'Diminutives (-je)', ar: 'التصغير (-je)' },
    explanation: {
      es: 'Los diminutivos hacen las cosas "pequeñas" o "lindas". Se forma añadiendo <strong>-je</strong> al final.\n\n✅ <em>huis → huisje</em> (casita)\n✅ <em>kind → kindje</em> (niñito)\n\n⚠️ Los diminutivos <strong>siempre</strong> usan el artículo <em>het</em>.',
      en: 'Diminutives make things "small" or "cute". Formed by adding <strong>-je</strong> to the end.\n\n✅ <em>huis → huisje</em>\n✅ <em>kind → kindje</em>\n\n⚠️ Diminutives <strong>always</strong> use the article <em>het</em>.',
      ar: 'التصغير يجعل الأشياء "صغيرة" أو "لطيفة". يتكون بإضافة <strong>-je</strong>. التصغير دائماً مع <em>het</em>.'
    },
    tip: {
      es: 'En el plural de diminutivos, el artículo cambia a <em>de</em>: <em>het huisje → de huisjes</em>. Es la única excepción a la regla de que los diminutivos usan het.',
      en: 'In the plural of diminutives, the article changes to <em>de</em>: <em>het huisje → de huisjes</em>.',
      ar: 'في جمع التصغير تتحول الأداة إلى <em>de</em>: <em>het huisje → de huisjes</em>.'
    },
    exercise: {
      words: ['het', 'huisje'],
      answer: ['het', 'huisje'],
      translation: { es: 'la casita', en: 'the little house', ar: 'البيت الصغير' }
    },
    challenge: {
      question: { es: '¿Cuál es el diminutivo correcto de "boek" (libro)?', en: 'Which is the correct diminutive of "boek" (book)?', ar: 'ما التصغير الصحيح لـ "boek"؟' },
      options: ['De boekje', 'Het boekje', 'Het boeks'],
      answer: 1,
      explanation: { es: '<strong>Het boekje</strong> ✅ — Todo diminutivo usa <em>het</em>, sin excepciones. El diminutivo de "boek" es "boekje".', en: '<strong>Het boekje</strong> ✅ — All diminutives use <em>het</em>, no exceptions.', ar: '<strong>Het boekje</strong> ✅ — كل تصغير يستخدم <em>het</em>.' }
    }
  },
  {
    id: 8,
    title: { es: 'Plurales: -en o -s', en: 'Plurals: -en or -s', ar: 'الجمع: -en أو -s' },
    explanation: {
      es: 'La mayoría de palabras forma el plural con <strong>-en</strong>. Las que terminan en vocal suelen añadir <strong>-s</strong>.\n\n✅ <em>boek → boeken</em>\n✅ <em>auto → auto\'s</em>\n\n⚠️ Todos los plurales usan el artículo <em>de</em>.',
      en: 'Most words form the plural with <strong>-en</strong>. Words ending in a vowel usually add <strong>-s</strong>.\n\n✅ <em>boek → boeken</em>\n✅ <em>auto → auto\'s</em>\n\n⚠️ All plurals use <em>de</em>.',
      ar: 'معظم الكلمات تجمع بإضافة <strong>-en</strong>. الكلمات المنتهية بحرف متحرك تأخذ <strong>-s</strong>. كل الجموع مع <em>de</em>.'
    },
    tip: {
      es: '¡Cuidado! Algunas palabras cambian la vocal al hacer el plural: <em>stad → steden</em>, <em>dag → dagen</em>. No entres en pánico — en el examen las palabras más comunes son las que practicarás.',
      en: 'Watch out! Some words change their vowel in the plural: <em>stad → steden</em>, <em>dag → dagen</em>.',
      ar: 'انتبه! بعض الكلمات تغير حرف العلة في الجمع: <em>stad → steden</em>.'
    },
    exercise: {
      words: ['de', 'boeken'],
      answer: ['de', 'boeken'],
      translation: { es: 'los libros', en: 'the books', ar: 'الكتب' }
    },
    challenge: {
      question: { es: '¿Cuál es el plural correcto de "kind" (niño)?', en: 'What is the correct plural of "kind" (child)?', ar: 'ما جمع "kind" الصحيح؟' },
      options: ['De kinds', 'De kinderen', 'Het kinderen'],
      answer: 1,
      explanation: { es: '<strong>De kinderen</strong> ✅ — "kind" tiene un plural irregular: kinderen. Y como todos los plurales, usa el artículo <em>de</em>.', en: '<strong>De kinderen</strong> ✅ — "kind" has an irregular plural: kinderen. All plurals use <em>de</em>.', ar: '<strong>De kinderen</strong> ✅ — "kind" لها جمع شاذ: kinderen.' }
    }
  },
  {
    id: 9,
    title: { es: 'Negación con GEEN', en: 'Negation with GEEN', ar: 'النفي بـ GEEN' },
    explanation: {
      es: 'Usa <strong>geen</strong> para negar sustantivos que van con <em>een</em> (un/una) o sin artículo.\n\n✅ <em>Ik heb een auto → Ik heb geen auto.</em>\n(Yo tengo un coche → Yo no tengo coche)\n\n✅ <em>Ik drink koffie → Ik drink geen koffie.</em>',
      en: 'Use <strong>geen</strong> to negate nouns that go with <em>een</em> or without an article.\n\n✅ <em>Ik heb een auto → Ik heb geen auto.</em>\n✅ <em>Ik drink koffie → Ik drink geen koffie.</em>',
      ar: 'استخدم <strong>geen</strong> لنفي الأسماء التي تأتي مع <em>een</em> أو بدون أداة.\n\n✅ <em>Ik heb geen auto.</em>'
    },
    tip: {
      es: '<em>Geen</em> es como decir "cero unidades de...". Si puedes reemplazar la negación por "ningún/ninguna", usa <em>geen</em>.',
      en: '<em>Geen</em> is like saying "zero units of...". If you can replace the negation with "no/none", use <em>geen</em>.',
      ar: '<em>Geen</em> مثل قول "صفر وحدات من...". إذا يمكن استبدال النفي بـ "لا أحد/لا شيء"، استخدم <em>geen</em>.'
    },
    exercise: {
      words: ['Ik', 'heb', 'geen', 'auto'],
      answer: ['Ik', 'heb', 'geen', 'auto'],
      translation: { es: 'Yo no tengo coche', en: 'I don\'t have a car', ar: 'ليس لدي سيارة' }
    },
    challenge: {
      question: { es: '¿Cómo niegas "Ik eet een appel"?', en: 'How do you negate "Ik eet een appel"?', ar: 'كيف تنفي "Ik eet een appel"؟' },
      options: ['Ik eet niet een appel.', 'Ik eet geen appel.', 'Ik geen eet appel.'],
      answer: 1,
      explanation: { es: '<strong>Ik eet geen appel</strong> ✅ — Usamos <em>geen</em> porque negamos un sustantivo con "een". Desaparece el "een" y entra "geen".', en: '<strong>Ik eet geen appel</strong> ✅ — We use <em>geen</em> because we negate a noun with "een".', ar: '<strong>Ik eet geen appel</strong> ✅ — نستخدم <em>geen</em> لنفي الاسم مع "een".' }
    }
  },
  {
    id: 10,
    title: { es: 'Negación con NIET', en: 'Negation with NIET', ar: 'النفي بـ NIET' },
    explanation: {
      es: 'Usa <strong>niet</strong> para negar verbos, adjetivos o frases completas.\n\n✅ <em>Het water is koud → Het water is niet koud.</em>\n(El agua está fría → El agua no está fría)\n\n✅ <em>Ik werk niet.</em> (Yo no trabajo)',
      en: 'Use <strong>niet</strong> to negate verbs, adjectives or whole sentences.\n\n✅ <em>Het water is niet koud.</em>\n✅ <em>Ik werk niet.</em>',
      ar: 'استخدم <strong>niet</strong> لنفي الأفعال والصفات والجمل الكاملة.\n\n✅ <em>Het water is niet koud.</em>'
    },
    tip: {
      es: 'Regla simple: si no puedes usar <em>geen</em>, entonces usa <em>niet</em>. <em>Niet</em> suele ir al final o justo antes del adjetivo/adverbio que niega.',
      en: 'Simple rule: if you can\'t use <em>geen</em>, use <em>niet</em>. <em>Niet</em> usually goes at the end or just before the adjective it negates.',
      ar: 'قاعدة بسيطة: إذا لم تستطع استخدام <em>geen</em>، استخدم <em>niet</em>.'
    },
    exercise: {
      words: ['Het', 'water', 'is', 'niet', 'koud'],
      answer: ['Het', 'water', 'is', 'niet', 'koud'],
      translation: { es: 'El agua no está fría', en: 'The water is not cold', ar: 'الماء ليس بارداً' }
    },
    challenge: {
      question: { es: '¿Cuál negación es correcta para "Ik ben moe" (estoy cansado)?', en: 'Which negation is correct for "Ik ben moe"?', ar: 'ما النفي الصحيح لـ "Ik ben moe"؟' },
      options: ['Ik ben geen moe.', 'Ik ben niet moe.', 'Ik niet ben moe.'],
      answer: 1,
      explanation: { es: '<strong>Ik ben niet moe</strong> ✅ — Negamos un adjetivo (moe), así que usamos <em>niet</em>, no geen.', en: '<strong>Ik ben niet moe</strong> ✅ — We\'re negating an adjective (moe), so we use <em>niet</em>.', ar: '<strong>Ik ben niet moe</strong> ✅ — ننفي صفة (moe)، لذا نستخدم <em>niet</em>.' }
    }
  },
  {
    id: 11,
    title: { es: 'Preguntas de Sí/No', en: 'Yes/No Questions', ar: 'أسئلة نعم/لا' },
    explanation: {
      es: 'Para hacer preguntas de sí/no, el verbo salta a la <strong>posición 1</strong>.\n\n✅ <em>Je spreekt Nederlands. → Spreek je Nederlands?</em>\n\n⚠️ Si el sujeto es <em>jij/je</em>, el verbo pierde la <strong>-t</strong> final: <em>spreekt → spreek</em>',
      en: 'For yes/no questions, the verb jumps to <strong>position 1</strong>.\n\n✅ <em>Je spreekt Nederlands. → Spreek je Nederlands?</em>\n\n⚠️ If the subject is <em>jij/je</em>, the verb drops the final <strong>-t</strong>.',
      ar: 'لأسئلة نعم/لا، الفعل يقفز إلى <strong>الموقع الأول</strong>.\n\n⚠️ إذا كان الفاعل <em>jij/je</em>، يسقط حرف <strong>-t</strong> من نهاية الفعل.'
    },
    tip: {
      es: 'Solo <em>jij/je</em> pierde la -t. Con <em>hij, zij, het, u</em> el verbo no cambia: <em>Werkt hij?</em> ✅ — <em>Werk jij?</em> ✅',
      en: 'Only <em>jij/je</em> drops the -t. With <em>hij, zij, het, u</em> the verb doesn\'t change: <em>Werkt hij?</em> ✅',
      ar: 'فقط <em>jij/je</em> يسقط الـ-t. مع <em>hij, zij, het, u</em> الفعل لا يتغير.'
    },
    exercise: {
      words: ['Spreek', 'je', 'Nederlands?'],
      answer: ['Spreek', 'je', 'Nederlands?'],
      translation: { es: '¿Hablas holandés?', en: 'Do you speak Dutch?', ar: 'هل تتحدث الهولندية؟' }
    },
    challenge: {
      question: { es: '¿Cómo conviertes "Hij werkt vandaag" en pregunta?', en: 'How do you turn "Hij werkt vandaag" into a question?', ar: 'كيف تحول "Hij werkt vandaag" إلى سؤال؟' },
      options: ['Werkt hij vandaag?', 'Werk hij vandaag?', 'Hij werkt vandaag?'],
      answer: 0,
      explanation: { es: '<strong>Werkt hij vandaag?</strong> ✅ — El verbo va primero. Con <em>hij</em> no se pierde la -t (solo se pierde con jij/je).', en: '<strong>Werkt hij vandaag?</strong> ✅ — Verb goes first. With <em>hij</em> the -t stays (only drops with jij/je).', ar: '<strong>Werkt hij vandaag?</strong> ✅ — الفعل أولاً. مع <em>hij</em> لا يسقط حرف -t.' }
    }
  },
  {
    id: 12,
    title: { es: 'Preguntas con Wie, Wat, Waar, Hoe', en: 'Questions with Wie, Wat, Waar, Hoe', ar: 'أسئلة بـ Wie, Wat, Waar, Hoe' },
    explanation: {
      es: 'Las palabras interrogativas van en <strong>posición 1</strong>, el verbo en <strong>posición 2</strong>.\n\n✅ <em>Waar woon jij?</em> (¿Dónde vives?)\n✅ <em>Wat eet jij?</em> (¿Qué comes?)\n✅ <em>Wie ben jij?</em> (¿Quién eres?)',
      en: 'Question words go in <strong>position 1</strong>, verb in <strong>position 2</strong>.\n\n✅ <em>Waar woon jij?</em>\n✅ <em>Wat eet jij?</em>\n✅ <em>Wie ben jij?</em>',
      ar: 'كلمات الاستفهام في <strong>الموقع الأول</strong>، الفعل في <strong>الموقع الثاني</strong>.'
    },
    tip: {
      es: '<em>Hoe laat</em> (¿a qué hora?) cuenta como una sola pieza en posición 1: <em>Hoe laat begin jij?</em> ✅',
      en: '<em>Hoe laat</em> (at what time?) counts as one piece in position 1: <em>Hoe laat begin jij?</em> ✅',
      ar: '<em>Hoe laat</em> (في أي وقت؟) تُعدّ قطعة واحدة في الموقع الأول.'
    },
    exercise: {
      words: ['Waar', 'woon', 'jij?'],
      answer: ['Waar', 'woon', 'jij?'],
      translation: { es: '¿Dónde vives?', en: 'Where do you live?', ar: 'أين تسكن؟' }
    },
    challenge: {
      question: { es: '¿Cómo se pregunta "¿Qué comes?"?', en: 'How do you ask "What do you eat?"?', ar: 'كيف تسأل "ماذا تأكل؟"؟' },
      options: ['Jij eet wat?', 'Wat jij eet?', 'Wat eet jij?'],
      answer: 2,
      explanation: { es: '<strong>Wat eet jij?</strong> ✅ — Interrogativa (1) + Verbo (2) + Sujeto (3). La palabra interrogativa abre, el verbo sigue.', en: '<strong>Wat eet jij?</strong> ✅ — Question word (1) + Verb (2) + Subject (3).', ar: '<strong>Wat eet jij?</strong> ✅ — كلمة الاستفهام (1) + الفعل (2) + الفاعل (3).' }
    }
  },
  {
    id: 13,
    title: { es: 'Verbos Separables', en: 'Separable Verbs', ar: 'الأفعال المنفصلة' },
    explanation: {
      es: 'Algunos verbos tienen un prefijo que se separa y va <strong>al final</strong> de la frase.\n\n✅ <em>opbellen (llamar): Ik bel mijn moeder op.</em>\n✅ <em>aandoen (poner/encender): Ik doe de tv aan.</em>',
      en: 'Some verbs have a prefix that separates and goes to the <strong>end</strong> of the sentence.\n\n✅ <em>opbellen: Ik bel mijn moeder op.</em>\n✅ <em>aandoen: Ik doe de tv aan.</em>',
      ar: 'بعض الأفعال لها بادئة تنفصل وتذهب إلى <strong>نهاية</strong> الجملة.'
    },
    tip: {
      es: 'El prefijo es lo último que se dice. Si hay lugar también al final, el prefijo va justo antes del lugar: <em>Ik bel jou morgen thuis op.</em>',
      en: 'The prefix is always the last thing said. If there\'s also a place at the end, the prefix goes just before it.',
      ar: 'البادئة هي آخر شيء يُقال في الجملة دائماً.'
    },
    exercise: {
      words: ['Ik', 'bel', 'mijn moeder', 'op'],
      answer: ['Ik', 'bel', 'mijn moeder', 'op'],
      translation: { es: 'Yo llamo a mi madre', en: 'I call my mother', ar: 'أنا أتصل بأمي' }
    },
    challenge: {
      question: { es: '¿Cómo usas "aandoen" (encender) para "Yo enciendo la luz"?', en: 'How do you use "aandoen" for "I turn on the light"?', ar: 'كيف تستخدم "aandoen" لـ "أنا أضيء النور"؟' },
      options: ['Ik aandoe het licht.', 'Ik doe het licht aan.', 'Ik doe aan het licht.'],
      answer: 1,
      explanation: { es: '<strong>Ik doe het licht aan</strong> ✅ — El verbo "doe" va en posición 2 y el prefijo "aan" va al final de la frase.', en: '<strong>Ik doe het licht aan</strong> ✅ — "doe" in position 2, prefix "aan" at the end.', ar: '<strong>Ik doe het licht aan</strong> ✅ — الفعل في الموقع الثاني والبادئة في النهاية.' }
    }
  },
  {
    id: 14,
    title: { es: 'Dos Verbos en la Frase', en: 'Two Verbs in a Sentence', ar: 'فعلان في الجملة' },
    explanation: {
      es: 'Con verbos modales (querer, poder, deber), el verbo conjugado va en posición 2 y el infinitivo va <strong>al final</strong>.\n\n✅ <em>Ik wil een appel eten.</em> (Quiero comer una manzana)\n✅ <em>Ik kan Nederlands spreken.</em> (Puedo hablar holandés)',
      en: 'With modal verbs (want, can, must), the conjugated verb goes in position 2 and the infinitive goes to the <strong>end</strong>.\n\n✅ <em>Ik wil een appel eten.</em>\n✅ <em>Ik kan Nederlands spreken.</em>',
      ar: 'مع الأفعال المساعدة (أريد، أستطيع، يجب)، الفعل المصرّف في الموقع الثاني والمصدر في <strong>النهاية</strong>.'
    },
    tip: {
      es: 'Verbos que envían al compañero al final: <em>willen</em> (querer), <em>kunnen</em> (poder), <em>moeten</em> (deber), <em>mogen</em> (poder/tener permiso), <em>zullen</em> (futuro formal).',
      en: 'Verbs that send their partner to the end: <em>willen, kunnen, moeten, mogen, zullen</em>.',
      ar: 'الأفعال التي ترسل رفيقها إلى النهاية: <em>willen, kunnen, moeten, mogen</em>.'
    },
    exercise: {
      words: ['Ik', 'wil', 'een appel', 'eten'],
      answer: ['Ik', 'wil', 'een appel', 'eten'],
      translation: { es: 'Yo quiero comer una manzana', en: 'I want to eat an apple', ar: 'أريد أكل تفاحة' }
    },
    challenge: {
      question: { es: '¿Cómo dices "Yo puedo trabajar hoy"?', en: 'How do you say "I can work today"?', ar: 'كيف تقول "أستطيع العمل اليوم"؟' },
      options: ['Ik kan vandaag werken.', 'Ik vandaag kan werken.', 'Ik kan werken vandaag.'],
      answer: 0,
      explanation: { es: '<strong>Ik kan vandaag werken</strong> ✅ — Modal en pos. 2 + Tiempo + Infinitivo al final. El infinitivo siempre cierra la frase.', en: '<strong>Ik kan vandaag werken</strong> ✅ — Modal in pos. 2 + Time + Infinitive at the end.', ar: '<strong>Ik kan vandaag werken</strong> ✅ — الفعل المساعد في الموقع الثاني والمصدر في النهاية.' }
    }
  },
  {
    id: 15,
    title: { es: 'Pasado Perfecto: Hebben y Zijn', en: 'Present Perfect: Hebben and Zijn', ar: 'الماضي التام: Hebben و Zijn' },
    explanation: {
      es: 'Para hablar del pasado usamos: auxiliar (hebben o zijn) en posición 2 + participio al <strong>final</strong>.\n\n✅ <em>Ik heb gewerkt.</em> (Yo he trabajado)\n✅ <em>Ik ben gegaan.</em> (Yo he ido)\n\nFormación del participio: <em>ge- + raíz + d/t</em>',
      en: 'To talk about the past: auxiliary (hebben or zijn) in position 2 + participle at the <strong>end</strong>.\n\n✅ <em>Ik heb gewerkt.</em>\n✅ <em>Ik ben gegaan.</em>',
      ar: 'للحديث عن الماضي: المساعد (hebben أو zijn) في الموقع الثاني + المصدر في <strong>النهاية</strong>.'
    },
    tip: {
      es: 'La mayoría usa <em>hebben</em>. Usa <em>zijn</em> con verbos de movimiento o cambio de estado: gaan (ir), komen (venir), worden (volverse), zijn (ser/estar).',
      en: 'Most verbs use <em>hebben</em>. Use <em>zijn</em> with movement verbs or change of state: gaan, komen, worden, zijn.',
      ar: 'معظم الأفعال تستخدم <em>hebben</em>. استخدم <em>zijn</em> مع أفعال الحركة أو التغيير.'
    },
    exercise: {
      words: ['Ik', 'heb', 'gewerkt'],
      answer: ['Ik', 'heb', 'gewerkt'],
      translation: { es: 'Yo he trabajado', en: 'I have worked', ar: 'لقد عملت' }
    },
    challenge: {
      question: { es: '¿Cuál auxiliar usas para "Yo he ido al trabajo"?', en: 'Which auxiliary for "I have gone to work"?', ar: 'ما المساعد لـ "لقد ذهبت إلى العمل"؟' },
      options: ['Ik heb naar het werk gegaan.', 'Ik ben naar het werk gegaan.', 'Ik ben naar het werk gaan.'],
      answer: 1,
      explanation: { es: '<strong>Ik ben naar het werk gegaan</strong> ✅ — "gaan" es verbo de movimiento, siempre usa <em>zijn</em>. Y el participio "gegaan" va al final.', en: '<strong>Ik ben naar het werk gegaan</strong> ✅ — "gaan" is a movement verb, always uses <em>zijn</em>.', ar: '<strong>Ik ben naar het werk gegaan</strong> ✅ — "gaan" فعل حركة، دائماً مع <em>zijn</em>.' }
    }
  },
  {
    id: 16,
    title: { es: 'La Regla del \'t Soft Kofschip', en: 'The \'t Soft Kofschip Rule', ar: 'قاعدة \'t Soft Kofschip' },
    explanation: {
      es: 'Para el participio del pasado, necesitas saber si la raíz termina en -t o -d. La frase <strong>\'t soft kofschip</strong> contiene las letras que indican -t final.\n\n📌 Letras del kofschip: <strong>t, s, f, k, ch, p</strong>\n\n✅ <em>werken → werk</em> → "k" está en kofschip → <em>gewerkt</em>\n✅ <em>leven → leef</em> → "f" está → <em>geleefd</em>... ¡espera! "f" → -t: <em>geleefd</em> no, <em>geleefd</em> sí.',
      en: 'To form the past participle, you need to know if the stem ends in -t or -d. The phrase <strong>\'t soft kofschip</strong> contains the letters that indicate a -t ending.\n\n📌 Kofschip letters: <strong>t, s, f, k, ch, p</strong>',
      ar: 'لتكوين المصدر الماضي، تحتاج لمعرفة إذا كانت الجذر ينتهي بـ -t أو -d. العبارة <strong>\'t soft kofschip</strong> تحتوي على الحروف التي تشير إلى النهاية -t.'
    },
    tip: {
      es: 'Truco: si la última letra de la raíz aparece en "\'t soft kofschip" → el pasado termina en -<strong>t</strong>. Si no aparece → termina en -<strong>d</strong>. Ejemplo: <em>werken</em> → raíz <em>werk</em> → k está en kofschip → <em>gewerkt</em> ✅',
      en: 'Trick: if the last letter of the stem appears in "\'t soft kofschip" → past ends in -t. If not → ends in -d.',
      ar: 'إذا كان الحرف الأخير من الجذر موجوداً في "\'t soft kofschip" → الماضي ينتهي بـ -t. وإلا → ينتهي بـ -d.'
    },
    exercise: {
      words: ['ge', 'werkt'],
      answer: ['ge', 'werkt'],
      translation: { es: 'trabajado (gewerkt)', en: 'worked (gewerkt)', ar: 'عمل (gewerkt)' }
    },
    challenge: {
      question: { es: '¿Cuál es el participio correcto de "leven" (vivir)?', en: 'What is the correct participle of "leven" (to live)?', ar: 'ما المصدر الصحيح لـ "leven"؟' },
      options: ['Geleeft', 'Geleefd', 'Gelevt'],
      answer: 1,
      explanation: { es: '<strong>Geleefd</strong> ✅ — La raíz de "leven" es "leef". La letra "f" SÍ está en kofschip... ¡pero cuidado! En el original "leef" termina en f → gewerkt usa -t. Aquí: leef → f en kofschip → geleefd usa -d. Recuerda: la letra de la RAÍZ, no del infinitivo.', en: '<strong>Geleefd</strong> ✅ — The stem of "leven" is "leef". The "f" IS in kofschip → participle ends in -d. Wait — actually: stem = leef, f is in kofschip → gewerkt rule applies → geleefd. Check the stem carefully.', ar: '<strong>Geleefd</strong> ✅ — جذر "leven" هو "leef". حرف "f" موجود في kofschip → المصدر ينتهي بـ -d.' }
    }
  },
  {
    id: 17,
    title: { es: 'El Futuro con GAAN', en: 'Future with GAAN', ar: 'المستقبل مع GAAN' },
    explanation: {
      es: 'Para hablar del futuro usamos <strong>gaan</strong> + infinitivo al final.\n\n📌 Estructura: [Sujeto] + [gaan conjugado] + [Resto] + [Infinitivo]\n\n✅ <em>Ik ga slapen.</em> (Voy a dormir)\n✅ <em>Zij gaat morgen werken.</em> (Ella va a trabajar mañana)',
      en: 'To talk about the future use <strong>gaan</strong> + infinitive at the end.\n\n✅ <em>Ik ga slapen.</em>\n✅ <em>Zij gaat morgen werken.</em>',
      ar: 'للحديث عن المستقبل نستخدم <strong>gaan</strong> + المصدر في النهاية.\n\n✅ <em>Ik ga slapen.</em>'
    },
    tip: {
      es: 'Es exactamente como el español "voy a..." — lo más fácil para el futuro. No necesitas aprender conjugaciones nuevas.',
      en: 'It\'s exactly like English "going to..." — the easiest way to talk about the future.',
      ar: 'تماماً مثل "سأذهب لـ..." — أسهل طريقة للتحدث عن المستقبل.'
    },
    exercise: {
      words: ['Ik', 'ga', 'slapen'],
      answer: ['Ik', 'ga', 'slapen'],
      translation: { es: 'Voy a dormir', en: 'I\'m going to sleep', ar: 'سأنام' }
    },
    challenge: {
      question: { es: '¿Cómo dices "Ella va a comer mañana"?', en: 'How do you say "She is going to eat tomorrow"?', ar: 'كيف تقول "هي ستأكل غداً"؟' },
      options: ['Zij gaat morgen eten.', 'Zij morgen gaat eten.', 'Zij gaat eten morgen.'],
      answer: 0,
      explanation: { es: '<strong>Zij gaat morgen eten</strong> ✅ — gaan conjugado (gaat) en pos. 2, tiempo (morgen) en medio, infinitivo (eten) al final.', en: '<strong>Zij gaat morgen eten</strong> ✅ — gaan conjugated (gaat) in pos. 2, time (morgen) in middle, infinitive at the end.', ar: '<strong>Zij gaat morgen eten</strong> ✅ — gaan في الموقع الثاني، الزمن في المنتصف، المصدر في النهاية.' }
    }
  },
  {
    id: 18,
    title: { es: 'Adjetivos con -e', en: 'Adjectives with -e', ar: 'الصفات مع -e' },
    explanation: {
      es: 'Casi siempre añadimos <strong>-e</strong> al adjetivo. Pero hay una excepción importante:\n\n⚠️ Con <em>een</em> + sustantivo <em>het</em> (neutro) → <strong>NO</strong> se añade -e.\n\n✅ <em>De grote man</em> (el hombre grande)\n✅ <em>Het grote huis</em> (la gran casa — con "het" definido → sí lleva -e)\n✅ <em>Een groot huis</em> (una gran casa — con "een" + het → NO lleva -e)',
      en: 'We almost always add <strong>-e</strong> to adjectives. But there\'s one important exception:\n\n⚠️ With <em>een</em> + <em>het</em> noun (neuter) → do <strong>NOT</strong> add -e.\n\n✅ <em>De grote man</em> ✅ <em>Een groot huis</em> (no -e!)',
      ar: 'نضيف دائماً تقريباً <strong>-e</strong> للصفة. لكن هناك استثناء مهم:\n⚠️ مع <em>een</em> + اسم <em>het</em> → لا نضيف -e.'
    },
    tip: {
      es: 'Memoriza la excepción: <em>een + het-woord</em> sin artículo definido = sin -e. Ejemplos: <em>een groot huis, een mooi kind, een klein meisje</em>.',
      en: 'Memorize the exception: <em>een + het-word</em> without definite article = no -e. Examples: <em>een groot huis, een mooi kind</em>.',
      ar: 'احفظ الاستثناء: <em>een + het-woord</em> بدون أداة تعريف = بدون -e.'
    },
    exercise: {
      words: ['De', 'grote', 'man'],
      answer: ['De', 'grote', 'man'],
      translation: { es: 'El hombre grande', en: 'The big man', ar: 'الرجل الكبير' }
    },
    challenge: {
      question: { es: '¿Cuál es correcta? (huis = het-woord)', en: 'Which is correct? (huis = het-word)', ar: 'أي صحيحة؟ (huis = het-woord)' },
      options: ['Ik heb een grote huis.', 'Ik heb een groot huis.', 'Ik heb het groot huis.'],
      answer: 1,
      explanation: { es: '<strong>Ik heb een groot huis</strong> ✅ — "huis" es het-woord + usamos "een" → no se añade -e al adjetivo. Con "het huis" sí llevaría -e: "het grote huis".', en: '<strong>Ik heb een groot huis</strong> ✅ — "huis" is a het-word + we use "een" → no -e on the adjective.', ar: '<strong>Ik heb een groot huis</strong> ✅ — "huis" كلمة het + نستخدم "een" → لا -e على الصفة.' }
    }
  },
  {
    id: 19,
    title: { es: 'Posesivos: Mijn, Jouw, Zijn, Haar', en: 'Possessives: Mijn, Jouw, Zijn, Haar', ar: 'الملكية: Mijn, Jouw, Zijn, Haar' },
    explanation: {
      es: 'Los posesivos indican de quién es algo:\n\n• <em>mijn</em> = mi/mis\n• <em>jouw / je</em> = tu/tus\n• <em>zijn</em> = su (de él)\n• <em>haar</em> = su (de ella)\n• <em>ons/onze</em> = nuestro\n\n✅ <em>Haar auto is rood.</em> (Su coche [de ella] es rojo)',
      en: 'Possessives indicate who owns something:\n\n• <em>mijn</em> = my\n• <em>jouw / je</em> = your\n• <em>zijn</em> = his\n• <em>haar</em> = her\n• <em>ons/onze</em> = our',
      ar: 'الملكية تشير إلى من يملك شيئاً:\n• <em>mijn</em> = لي\n• <em>jouw/je</em> = لك\n• <em>zijn</em> = له\n• <em>haar</em> = لها'
    },
    tip: {
      es: '<em>Jouw</em> es para énfasis o contraste: "Mijn boek, niet jouw boek." En el habla diaria se usa más <em>je</em>: "Is dat je boek?"',
      en: '<em>Jouw</em> is for emphasis or contrast. In daily speech <em>je</em> is more common: "Is dat je boek?"',
      ar: '<em>Jouw</em> للتأكيد أو التناقض. في الكلام اليومي <em>je</em> أكثر شيوعاً.'
    },
    exercise: {
      words: ['Haar', 'auto', 'is', 'rood'],
      answer: ['Haar', 'auto', 'is', 'rood'],
      translation: { es: 'Su coche (de ella) es rojo', en: 'Her car is red', ar: 'سيارتها حمراء' }
    },
    challenge: {
      question: { es: '¿Cómo dices "Su (de él) libro es grande"?', en: 'How do you say "His book is big"?', ar: 'كيف تقول "كتابه كبير"؟' },
      options: ['Haar boek is groot.', 'Zijn boek is groot.', 'Jouw boek is groot.'],
      answer: 1,
      explanation: { es: '<strong>Zijn boek is groot</strong> ✅ — <em>Zijn</em> = su (de él). <em>Haar</em> sería "su (de ella)". No confundas zijn (posesivo) con zijn (verbo ser/estar).', en: '<strong>Zijn boek is groot</strong> ✅ — <em>Zijn</em> = his. Don\'t confuse zijn (possessive) with zijn (to be).', ar: '<strong>Zijn boek is groot</strong> ✅ — <em>Zijn</em> = له. لا تخلط بين zijn الملكية و zijn فعل الكينونة.' }
    }
  },
  {
    id: 20,
    title: { es: 'Pronombres de Objeto', en: 'Object Pronouns', ar: 'ضمائر المفعول به' },
    explanation: {
      es: 'Se usan para reemplazar un sustantivo como objeto:\n\n• <em>me</em> = me\n• <em>je</em> = te\n• <em>hem</em> = lo (para de-woorden masculinos)\n• <em>haar</em> = la (para de-woorden femeninos)\n• <em>het</em> = lo (para het-woorden)\n\n✅ <em>Ik bel jou op.</em> (Yo te llamo)',
      en: 'Used to replace a noun as the object:\n\n• <em>me</em> = me\n• <em>je</em> = you\n• <em>hem</em> = him\n• <em>haar</em> = her\n• <em>het</em> = it\n\n✅ <em>Ik bel jou op.</em>',
      ar: 'تُستخدم لاستبدال اسم كمفعول به:\n• <em>me</em> = ي\n• <em>je</em> = ك\n• <em>hem</em> = ه\n• <em>haar</em> = ها'
    },
    tip: {
      es: 'Los pronombres de objeto van siempre después del verbo principal. Con verbos separables, el pronombre va antes del prefijo: <em>Ik bel je op</em> — no <em>Ik bel op je</em>.',
      en: 'Object pronouns always go after the main verb. With separable verbs, the pronoun goes before the prefix: <em>Ik bel je op</em>.',
      ar: 'ضمائر المفعول تأتي دائماً بعد الفعل الرئيسي. مع الأفعال المنفصلة، الضمير يأتي قبل البادئة.'
    },
    exercise: {
      words: ['Ik', 'bel', 'jou', 'op'],
      answer: ['Ik', 'bel', 'jou', 'op'],
      translation: { es: 'Yo te llamo', en: 'I call you', ar: 'أنا أتصل بك' }
    },
    challenge: {
      question: { es: '¿Cómo dices "Yo lo veo" (refiriéndote a un hombre)?', en: 'How do you say "I see him"?', ar: 'كيف تقول "أنا أراه"؟' },
      options: ['Ik zie haar.', 'Ik zie hij.', 'Ik zie hem.'],
      answer: 2,
      explanation: { es: '<strong>Ik zie hem</strong> ✅ — Para "él" como objeto usamos <em>hem</em>, no "hij" (que es el pronombre sujeto).', en: '<strong>Ik zie hem</strong> ✅ — For "him" as object we use <em>hem</em>, not "hij" (which is the subject pronoun).', ar: '<strong>Ik zie hem</strong> ✅ — لـ "هو" كمفعول به نستخدم <em>hem</em>، ليس "hij".' }
    }
  },
  {
    id: 21,
    title: { es: 'El Conector OMDAT (Porque)', en: 'Connector OMDAT (Because)', ar: 'الرابط OMDAT (لأن)' },
    explanation: {
      es: '⚠️ <strong>¡Regla más importante del examen!</strong>\n\nCon <em>omdat</em>, todos los verbos van al <strong>final</strong> de la frase.\n\n✅ <em>Ik werk niet omdat ik ziek ben.</em>\n(No trabajo porque estoy enfermo)\n\nFíjate: "ben" va al final, no después de "ik".',
      en: '⚠️ <strong>Most important exam rule!</strong>\n\nWith <em>omdat</em>, all verbs go to the <strong>end</strong>.\n\n✅ <em>Ik werk niet omdat ik ziek ben.</em>\n(I don\'t work because I\'m sick)',
      ar: '⚠️ <strong>أهم قاعدة في الامتحان!</strong>\n\nمع <em>omdat</em>، كل الأفعال تذهب إلى <strong>النهاية</strong>.\n\n✅ <em>Ik werk niet omdat ik ziek ben.</em>'
    },
    tip: {
      es: 'Memoriza como mantra: <strong>OMDAT = Verbo al Final</strong>. Es la regla que más falla en el examen. Práctica: convierte siempre la razón en una frase con omdat.',
      en: 'Memorize as a mantra: <strong>OMDAT = Verb at the End</strong>. This is the most failed rule in the exam.',
      ar: 'احفظ كشعار: <strong>OMDAT = الفعل في النهاية</strong>. هذه أكثر قاعدة يخطئ فيها في الامتحان.'
    },
    exercise: {
      words: ['omdat', 'ik', 'ziek', 'ben'],
      answer: ['omdat', 'ik', 'ziek', 'ben'],
      translation: { es: 'porque estoy enfermo', en: 'because I am sick', ar: 'لأنني مريض' }
    },
    challenge: {
      question: { es: '¿Cuál es correcta para "No como porque no tengo hambre"?', en: 'Which is correct for "I don\'t eat because I\'m not hungry"?', ar: 'أي جملة صحيحة لـ "لا آكل لأنني لست جائعاً"؟' },
      options: ['Ik eet niet omdat ik ben niet hongerig.', 'Ik eet niet omdat ik niet hongerig ben.', 'Ik eet niet omdat ik niet ben hongerig.'],
      answer: 1,
      explanation: { es: '<strong>Ik eet niet omdat ik niet hongerig ben</strong> ✅ — Con omdat, el verbo "ben" va al final. El adjetivo "hongerig" va antes del verbo.', en: '<strong>Ik eet niet omdat ik niet hongerig ben</strong> ✅ — With omdat, verb "ben" goes to the end.', ar: '<strong>Ik eet niet omdat ik niet hongerig ben</strong> ✅ — مع omdat، الفعل "ben" في النهاية.' }
    }
  },
  {
    id: 22,
    title: { es: 'Conectores: En, Maar, Want, Of', en: 'Connectors: En, Maar, Want, Of', ar: 'الروابط: En, Maar, Want, Of' },
    explanation: {
      es: 'Estos conectores <strong>NO</strong> cambian el orden de la frase — la Regla 1 sigue intacta.\n\n• <em>en</em> = y\n• <em>maar</em> = pero\n• <em>want</em> = porque (con orden normal)\n• <em>of</em> = o\n\n✅ <em>Ik eet en ik drink.</em>\n✅ <em>Ik werk maar ik ben moe.</em>',
      en: 'These connectors do <strong>NOT</strong> change word order — Rule 1 stays intact.\n\n• <em>en</em> = and\n• <em>maar</em> = but\n• <em>want</em> = because (normal order)\n• <em>of</em> = or',
      ar: 'هذه الروابط <strong>لا</strong> تغير الترتيب — القاعدة الأولى تبقى سليمة.\n• <em>en</em> = و • <em>maar</em> = لكن • <em>want</em> = لأن (بترتيب عادي) • <em>of</em> = أو'
    },
    tip: {
      es: 'La diferencia clave: <em>want</em> mantiene el orden normal, <em>omdat</em> envía el verbo al final. ¡No los confundas en el examen!',
      en: 'Key difference: <em>want</em> keeps normal order, <em>omdat</em> sends the verb to the end. Don\'t confuse them in the exam!',
      ar: 'الفرق الرئيسي: <em>want</em> يحتفظ بالترتيب العادي، <em>omdat</em> يرسل الفعل للنهاية. لا تخلط بينهما!'
    },
    exercise: {
      words: ['Ik', 'eet', 'maar', 'ik', 'drink', 'niet'],
      answer: ['Ik', 'eet', 'maar', 'ik', 'drink', 'niet'],
      translation: { es: 'Yo como pero no bebo', en: 'I eat but I don\'t drink', ar: 'أنا آكل لكن لا أشرب' }
    },
    challenge: {
      question: { es: '¿Cuál usa el orden correcto con "want"?', en: 'Which uses correct order with "want"?', ar: 'أي جملة تستخدم الترتيب الصحيح مع "want"؟' },
      options: ['Ik eet niet want ik ziek ben.', 'Ik eet niet want ik ben ziek.', 'Ik eet niet want ben ik ziek.'],
      answer: 1,
      explanation: { es: '<strong>Ik eet niet want ik ben ziek</strong> ✅ — Con <em>want</em> el orden es normal: sujeto + verbo. A diferencia de <em>omdat</em> donde el verbo va al final.', en: '<strong>Ik eet niet want ik ben ziek</strong> ✅ — With <em>want</em> the order is normal: subject + verb.', ar: '<strong>Ik eet niet want ik ben ziek</strong> ✅ — مع <em>want</em> الترتيب عادي: فاعل + فعل.' }
    }
  },
  {
    id: 23,
    title: { es: 'Uso de ER', en: 'Using ER', ar: 'استخدام ER' },
    explanation: {
      es: '<em>Er</em> es una palabra comodín con varios usos:\n\n1️⃣ Para decir que algo <strong>existe</strong>: <em>Er zijn 2 kinderen.</em> (Hay 2 niños)\n2️⃣ Como referencia de lugar: <em>Ik woon er al 5 jaar.</em> (Vivo ahí 5 años ya)\n3️⃣ Con cantidades: <em>Er zijn veel mensen.</em> (Hay mucha gente)',
      en: '<em>Er</em> is a versatile word with several uses:\n\n1️⃣ To say something <strong>exists</strong>: <em>Er zijn 2 kinderen.</em>\n2️⃣ As a place reference: <em>Ik woon er al 5 jaar.</em>\n3️⃣ With quantities: <em>Er zijn veel mensen.</em>',
      ar: '<em>Er</em> كلمة متعددة الاستخدامات:\n1️⃣ للقول بأن شيئاً <strong>موجود</strong>: <em>Er zijn 2 kinderen.</em>\n2️⃣ كإشارة مكانية\n3️⃣ مع الكميات'
    },
    tip: {
      es: 'Para el examen A1, lo más importante es <em>er zijn / er is</em> para decir "hay": <em>Er is een probleem</em> (hay un problema), <em>Er zijn veel mensen</em> (hay mucha gente).',
      en: 'For the A1 exam, the most important is <em>er zijn / er is</em> for "there is/are": <em>Er is een probleem</em>, <em>Er zijn veel mensen</em>.',
      ar: 'للامتحان A1، الأهم هو <em>er zijn / er is</em> لقول "يوجد": <em>Er is een probleem</em>.'
    },
    exercise: {
      words: ['Er', 'zijn', '2', 'kinderen'],
      answer: ['Er', 'zijn', '2', 'kinderen'],
      translation: { es: 'Hay 2 niños', en: 'There are 2 children', ar: 'يوجد طفلان' }
    },
    challenge: {
      question: { es: '¿Cómo dices "Hay un problema"?', en: 'How do you say "There is a problem"?', ar: 'كيف تقول "يوجد مشكلة"؟' },
      options: ['Het is een probleem.', 'Er zijn een probleem.', 'Er is een probleem.'],
      answer: 2,
      explanation: { es: '<strong>Er is een probleem</strong> ✅ — Con singular usamos <em>er is</em>. Con plural usamos <em>er zijn</em>. Nunca "het is" para existencia.', en: '<strong>Er is een probleem</strong> ✅ — Singular: <em>er is</em>. Plural: <em>er zijn</em>.', ar: '<strong>Er is een probleem</strong> ✅ — مفرد: <em>er is</em>. جمع: <em>er zijn</em>.' }
    }
  },
  {
    id: 24,
    title: { es: 'Verbos con Preposición Fija', en: 'Verbs with Fixed Prepositions', ar: 'أفعال مع حروف جر ثابتة' },
    explanation: {
      es: 'Algunos verbos siempre van con una preposición específica. ¡No intentes traducir del español!\n\n• <em>wachten op</em> = esperar a\n• <em>houden van</em> = querer / gustar\n• <em>denken aan</em> = pensar en\n• <em>praten over</em> = hablar de\n\n✅ <em>Ik wacht op de bus.</em>',
      en: 'Some verbs always come with a specific preposition. Don\'t try to translate from your language!\n\n• <em>wachten op</em> = to wait for\n• <em>houden van</em> = to love\n• <em>denken aan</em> = to think about\n\n✅ <em>Ik wacht op de bus.</em>',
      ar: 'بعض الأفعال دائماً مع حرف جر محدد. لا تحاول الترجمة الحرفية!\n• <em>wachten op</em> = ينتظر\n• <em>houden van</em> = يحب\n• <em>denken aan</em> = يفكر في'
    },
    tip: {
      es: 'Aprende el verbo Y la preposición juntos como una sola unidad. <em>Wachten op, houden van, denken aan</em> — son parejas inseparables.',
      en: 'Learn the verb AND the preposition together as one unit. They\'re inseparable pairs.',
      ar: 'تعلّم الفعل وحرف الجر معاً كوحدة واحدة. إنها أزواج لا تنفصل.'
    },
    exercise: {
      words: ['Ik', 'wacht', 'op', 'de bus'],
      answer: ['Ik', 'wacht', 'op', 'de bus'],
      translation: { es: 'Yo espero el autobús', en: 'I wait for the bus', ar: 'أنا أنتظر الحافلة' }
    },
    challenge: {
      question: { es: '¿Cómo dices "Yo pienso en mi familia"?', en: 'How do you say "I think about my family"?', ar: 'كيف تقول "أنا أفكر في عائلتي"؟' },
      options: ['Ik denk over mijn familie.', 'Ik denk mijn familie aan.', 'Ik denk aan mijn familie.'],
      answer: 2,
      explanation: { es: '<strong>Ik denk aan mijn familie</strong> ✅ — "denken" siempre va con "aan". No "over" (eso es praten over = hablar de).', en: '<strong>Ik denk aan mijn familie</strong> ✅ — "denken" always goes with "aan". Not "over" (that\'s praten over = to talk about).', ar: '<strong>Ik denk aan mijn familie</strong> ✅ — "denken" دائماً مع "aan".' }
    }
  },
  {
    id: 25,
    title: { es: 'Repaso Final: La Frase STOMP Completa', en: 'Final Review: The Complete STOMP Sentence', ar: 'المراجعة النهائية: جملة STOMP الكاملة' },
    explanation: {
      es: '¡Has llegado al final! Ahora usamos todo junto:\n\n📌 [Sujeto] + [Verbo] + [Tiempo] + [Objeto] + [Manera] + [Lugar]\n\n✅ <em>Ik ga morgen met de bus naar Amsterdam.</em>\n(Voy mañana en autobús a Ámsterdam)\n\nS=Ik · V=ga · T=morgen · M=met de bus · P=naar Amsterdam',
      en: 'You\'ve reached the end! Now we use everything together:\n\n📌 [Subject] + [Verb] + [Time] + [Object] + [Manner] + [Place]\n\n✅ <em>Ik ga morgen met de bus naar Amsterdam.</em>',
      ar: 'لقد وصلت إلى النهاية! الآن نستخدم كل شيء معاً:\n\n📌 [فاعل] + [فعل] + [زمن] + [مفعول] + [طريقة] + [مكان]\n\n✅ <em>Ik ga morgen met de bus naar Amsterdam.</em>'
    },
    tip: {
      es: '🎉 Si dominas la estructura STOMP, ya tienes el A1 en el bolsillo. Recuerda: el verbo es el ancla (posición 2), el tiempo va antes que el lugar, y con omdat el verbo va al final.',
      en: '🎉 If you master the STOMP structure, you\'ve got A1 in the bag. Remember: verb is the anchor (position 2), time before place, and with omdat the verb goes to the end.',
      ar: '🎉 إذا أتقنت بنية STOMP، فقد حصلت على A1 بالفعل!'
    },
    exercise: {
      words: ['Ik', 'ga', 'morgen', 'met de bus', 'naar Amsterdam'],
      answer: ['Ik', 'ga', 'morgen', 'met de bus', 'naar Amsterdam'],
      translation: { es: 'Voy mañana en autobús a Ámsterdam', en: 'I go tomorrow by bus to Amsterdam', ar: 'أذهب غداً بالحافلة إلى أمستردام' }
    },
    challenge: {
      question: { es: '¿Cuál es el orden correcto?', en: 'Which is the correct order?', ar: 'ما الترتيب الصحيح؟' },
      options: ['Ik werk elke dag graag thuis.', 'Elke dag ik werk graag thuis.', 'Thuis werk ik elke dag graag.'],
      answer: 0,
      explanation: { es: '<strong>Ik werk elke dag graag thuis</strong> ✅ — S(Ik) + V(werk) + T(elke dag) + M(graag) + P(thuis). ¡STOMP perfecto! Bien hecho — has completado las 25 reglas 🎉', en: '<strong>Ik werk elke dag graag thuis</strong> ✅ — S(Ik) + V(werk) + T(elke dag) + M(graag) + P(thuis). Perfect STOMP! Well done — you\'ve completed all 25 rules 🎉', ar: '<strong>Ik werk elke dag graag thuis</strong> ✅ — STOMP مثالي! أحسنت — لقد أكملت 25 قاعدة 🎉' }
    }
  }
];

window.GRAMMATICA_RULES = GRAMMATICA_RULES;
