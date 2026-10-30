// ============================================================================
// JUEGOS PROFÉTICOS - JOYAS DEL LIBRO DE DANIEL (CAPÍTULO 1)
// Basado fielmente en la presentación: "Estudio Profético • Un Ancla Inmutable"
// ============================================================================

const LADDER_LEVELS = [
  { level: 1,  title: "Cautivo en marcha",         gem: "100 pts",   milestone: false },
  { level: 2,  title: "Guardián de la Memoria",    gem: "200 pts",   milestone: false },
  { level: 3,  title: "Estudiante en Babilonia",   gem: "300 pts",   milestone: false },
  { level: 4,  title: "Defensor de su Identidad",  gem: "500 pts",   milestone: false },
  { level: 5,  title: "Fiel en la Prueba (10 Días)", gem: "1,000 pts", milestone: true  },
  { level: 6,  title: "Propósito de Corazón",      gem: "2,000 pts", milestone: false },
  { level: 7,  title: "Vencedor del Banquete",     gem: "4,000 pts", milestone: false },
  { level: 8,  title: "Mente Lúcida y Pura",       gem: "8,000 pts", milestone: false },
  { level: 9,  title: "Hijo del Dios Vivo",        gem: "16,000 pts", milestone: false },
  { level: 10, title: "Sabio de Judá",             gem: "32,000 pts", milestone: true  },
  { level: 11, title: "Guardián del Sábado",       gem: "64,000 pts", milestone: false },
  { level: 12, title: "Dominio Propio",            gem: "125,000 pts", milestone: false },
  { level: 13, title: "Luz ante los Reyes",        gem: "250,000 pts", milestone: false },
  { level: 14, title: "Testigo del Tiempo del Fin", gem: "500,000 pts", milestone: false },
  { level: 15, title: "10 Veces Mejor • Ancla Inmutable", gem: "1,000,000", milestone: true }
];

const QUESTIONS_DB = [
  {
    category: "Contexto Histórico",
    question: "Según la presentación sobre el Asedio de Jerusalén, ¿en qué año ocurrió este suceso histórico permitido por Dios?",
    options: [
      "En el año 722 a.C.",
      "En el año 606 a.C.",
      "En el año 538 a.C.",
      "En el año 457 a.C."
    ],
    correct: 1,
    prophetHint: "Pista Profética: Fue a finales del siglo VII a.C., marcando el inicio del cautiverio de Daniel y sus compañeros (606 a.C.).",
    reference: "Contexto Histórico (606 a.C.)",
    explanation: "En el año 606 a.C., Nabucodonosor sitió Jerusalén. Dios permitió su éxito debido a que Judá ignoró las constantes advertencias proféticas."
  },
  {
    category: "El Asedio de Jerusalén",
    question: "¿A qué dos profetas desoyó Judá antes de que Dios permitiera el éxito de Nabucodonosor?",
    options: [
      "A Ezequiel y Oseas",
      "A Elías y Eliseo",
      "A Jeremías e Isaías",
      "A Samuel y Natán"
    ],
    correct: 2,
    prophetHint: "Pista Profética: La diapositiva 'Advertencias ignoradas' menciona explícitamente a los dos grandes profetas mayores previos al exilio.",
    reference: "El Asedio de Jerusalén • Advertencias Ignoradas",
    explanation: "Judá desoyó las solemnes amonestaciones de Jeremías e Isaías, lo que llevó a la entrega divina ante el rey de Babilonia."
  },
  {
    category: "Tesoro Profanado",
    question: "Cuando Nabucodonosor tomó parte de los utensilios de la casa de Dios en Jerusalén, ¿al templo de qué dios babilónico los llevó?",
    options: [
      "Al dios Marduk",
      "Al dios Dagón",
      "Al dios Moloc",
      "Al dios Ra"
    ],
    correct: 0,
    prophetHint: "Pista Profética: Era la deidad patrona principal de la ciudad de Babilonia (también conocido como Bel-Marduk).",
    reference: "Contexto Histórico • Tesoro Profanado",
    explanation: "Los utensilios sagrados del templo de Jerusalén fueron llevados como trofeo al templo del dios Marduk en Babilonia."
  },
  {
    category: "El Centro Educacional del Mundo",
    question: "¿Cuántos años duraba el programa babilónico de inmersión cultural, astronómica, matemática y de lenguas para asimilar a los jóvenes?",
    options: [
      "1 año de preparación",
      "3 años de inmersión intensiva",
      "7 años de servicio real",
      "10 años de sabiduría caldea"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Daniel 1:5 señala el tiempo exacto que el rey señaló para que fuesen educados antes de presentarse delante de él.",
    reference: "El Centro Educacional del Mundo • Daniel 1:5",
    explanation: "La estrategia babilónica consistía en asimilar a la juventud de linaje real mediante 3 años de inmersión cultural, astronómica y científica en la sabiduría caldea."
  },
  {
    category: "Guerra Espiritual por la Identidad",
    question: "El nombre hebreo «Daniel» honraba al Dios vivo. ¿Cuál es su significado exacto según la tabla del estudio?",
    options: [
      "«El Señor es bueno»",
      "«El que es como Dios»",
      "«Dios es mi juez»",
      "«El Señor ayuda»"
    ],
    correct: 2,
    prophetHint: "Pista Profética: Termina en '-el' (Dios) y hace referencia al juicio divino.",
    reference: "Guerra Espiritual por la Identidad",
    explanation: "Daniel significa «Dios es mi juez», mientras que el nombre babilónico impuesto, Beltsasar, significaba «Bel protege al rey»."
  },
  {
    category: "Guerra Espiritual por la Identidad",
    question: "A Ananías («El Señor es bueno») se le cambió el nombre por «Sadrac». ¿Qué significaba Sadrac en la idolatría babilónica?",
    options: [
      "«Inspiración del dios sol»",
      "«Bel protege al rey»",
      "«¿Quién es como Aku?»",
      "«Siervo del fuego ardiente»"
    ],
    correct: 0,
    prophetHint: "Pista Profética: Hacía alusión directa al astro solar adorado por los caldeos.",
    reference: "Tabla de Nombres • Identidad",
    explanation: "El cambio de nombre buscaba borrar su identidad espiritual: Ananías («El Señor es bueno») fue llamado Sadrac («Inspiración del dios sol»)."
  },
  {
    category: "Guerra Espiritual por la Identidad",
    question: "¿Cómo se relacionan correctamente los nombres hebreos Misael y Azarías con sus nuevos nombres babilónicos y significados?",
    options: [
      "Misael → Abednego («Bel protege al rey») y Azarías → Mesac («Dios es mi juez»)",
      "Misael → Mesac («¿Quién es como Aku?») y Azarías → Abednego («Siervo del fuego ardiente»)",
      "Misael → Sadrac («Siervo de Marduk») y Azarías → Beltsasar («Hijo de la luna»)",
      "Misael → Mesac («Siervo del sol») y Azarías → Abednego («¿Quién es como Bel?»)"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Misael significa «El que es como Dios», y los caldeos lo torcieron a una pregunta sobre el dios Aku; Azarías («El Señor ayuda») pasó a ser Abednego.",
    reference: "Guerra Espiritual por la Identidad",
    explanation: "Misael («El que es como Dios») fue cambiado a Mesac («¿Quién es como Aku?»), y Azarías («El Señor ayuda») a Abednego («Siervo del fuego ardiente»)."
  },
  {
    category: "Decisión Firme",
    question: "¿Qué versículo clave declara: «Y Daniel propuso en su corazón no contaminarse con la comida ni con el vino del rey»?",
    options: [
      "Daniel 1:8",
      "Daniel 2:20",
      "Daniel 3:17",
      "Daniel 6:10"
    ],
    correct: 0,
    prophetHint: "Pista Profética: Se encuentra en el primer capítulo de Daniel, versículo ocho.",
    reference: "Daniel 1:8",
    explanation: "Daniel 1:8 es el ancla del capítulo 1: la victoria comienza cuando el creyente propone firmemente en su corazón ser fiel a Dios antes de que llegue la tentación."
  },
  {
    category: "La Ración del Rey",
    question: "Según la presentación, ¿cuál de las siguientes NO es una de las 5 razones por las que rechazaron el banquete real?",
    options: [
      "Carnes inmundas prohibidas en Levítico 11 y animales no sacrificados según la ley mosaica",
      "Viandas consagradas previamente a dioses falsos (idolatría)",
      "Vino intoxicante que destruye el intelecto y lujo que enerva la salud mental",
      "Porque los alimentos reales provenían de Egipto y tenían altos impuestos"
    ],
    correct: 3,
    prophetHint: "Pista Profética: Las 5 razones del estudio son: 1) Carnes inmundas (Lev. 11), 2) Sacrificios ilícitos, 3) Idolatría, 4) Vino intoxicante y 5) Salud mental.",
    reference: "La Ración del Rey • 5 Razones",
    explanation: "Daniel y sus compañeros rechazaron la mesa real por principios de santidad y salud: carnes inmundas (Levítico 11), sacrificios ilícitos, consagración a ídolos, vino intoxicante y preservación de la salud mental."
  },
  {
    category: "La Prueba de los Diez Días",
    question: "¿Qué elementos componían la dieta solicitada por Daniel en la Prueba de los Diez Días y cuál era la función del agua pura?",
    options: [
      "Pan sin levadura, miel silvestre y leche de cabra para fortalecer los huesos",
      "Legumbres (semillas, granos, frutas y verduras) y agua pura para limpiar los tejidos",
      "Pescado limpio del Éufrates y jugo de granada real",
      "Solo ayuno total de sólidos durante los diez días de prueba"
    ],
    correct: 1,
    prophetHint: "Pista Profética: En la diapositiva 'La Prueba de los Diez Días' se detalla qué incluye el término bíblico 'legumbres' y el diseño original del Creador.",
    reference: "La Prueba de los Diez Días • Daniel 1:12",
    explanation: "Pidieron legumbres (dieta vegetal compuesta por semillas, granos, frutas y verduras) y agua pura, el diseño original del Creador para limpiar los tejidos, obteniendo vigor total y rostros lúcidos."
  },
  {
    category: "La Intervención Divina",
    question: "Al unir el esfuerzo humano con el poder divino, ¿cuál fue el resultado final al ser examinados por el rey frente a todos los magos y astrólogos?",
    options: [
      "Fueron hallados dos veces más sabios que los caldeos",
      "Fueron hallados siete veces mejores en astronomía",
      "Fueron hallados diez veces mejores (10x) en todo asunto de sabiduría e inteligencia",
      "Fueron nombrados inmediatamente gobernadores de Judá"
    ],
    correct: 2,
    prophetHint: "Pista Profética: La diapositiva destaca en grande el multiplicador «10x».",
    reference: "La Intervención Divina • Daniel 1:20",
    explanation: "¡10 veces mejores (10x)! El esfuerzo humano unido al poder divino hizo que superaran absolutamente a todos los sabios, magos y astrólogos de todo el imperio babilónico."
  },
  {
    category: "El Pilar del Sábado",
    question: "Según la cita de «El Deseado de Todas las Gentes» (p. 20), ¿por qué razón «no pocos perdieron la vida» y Dios puso a sus siervos frente a reyes?",
    options: [
      "Por negarse a pagar tributo militar al imperio asirio",
      "Por negarse a violar el sábado y a observar las fiestas paganas, para que reyes y pueblos recibiesen la luz",
      "Por intentar reconstruir los muros de Jerusalén sin permiso real",
      "Por ocultar los rollos del templo en cuevas del desierto"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Revisa el recuadro 'EL PILAR DEL SÁBADO - Fidelidad en la Idolatría' de la última diapositiva de contenido.",
    reference: "Elena G. de White • El Deseado de Todas las Gentes, p. 20",
    explanation: "«No pocos perdieron la vida por negarse a violar el sábado y a observar las fiestas paganas. Al levantarse los idólatras para aplastar la verdad, el Señor puso a sus siervos frente a frente con reyes y gobernantes, a fin de que éstos y sus pueblos pudiesen recibir la luz.»"
  },
  {
    category: "Reforma Pro Salud • Dominio del Apetito",
    question: "Completa la cita de «Profetas y Reyes» (p. 359): «El cuerpo debe ser puesto en sujeción a las facultades superiores del ser. Las pasiones deben ser controladas por...»",
    options: [
      "«...la sabiduría de los filósofos antiguos.»",
      "«...el temor al castigo de los gobernantes.»",
      "«...la voluntad, que debe estar a su vez bajo el control de Dios.»",
      "«...las leyes civiles del imperio babilónico.»"
    ],
    correct: 2,
    prophetHint: "Pista Profética: La voluntad humana sometida al poder divino es la clave del dominio propio.",
    reference: "Elena G. de White • Profetas y Reyes, p. 359",
    explanation: "«El cuerpo debe ser puesto en sujeción a las facultades superiores del ser. Las pasiones deben ser controladas por la voluntad, que debe estar a su vez bajo el control de Dios.»"
  },
  {
    category: "Consejos sobre el Régimen Alimenticio",
    question: "Según «Consejos sobre el Régimen Alimenticio» (p. 32), ¿qué deben observar quienes quieran preservar sus facultades intactas para el servicio de Dios?",
    options: [
      "Una estricta temperancia y abstenerse completamente de toda complacencia perjudicial",
      "Un retiro monástico lejos de las ciudades del mundo",
      "Solamente las fiestas anuales ceremoniales",
      "El estudio exclusivo de las lenguas caldeas y arameas"
    ],
    correct: 0,
    prophetHint: "Pista Profética: La palabra clave es «estricta temperancia».",
    reference: "Elena G. de White • Consejos sobre el Régimen Alimenticio, p. 32",
    explanation: "«Los que quieran preservar sus facultades intactas para el servicio de Dios, deben observar una estricta temperancia... abstenerse completamente de toda complacencia perjudicial.»"
  },
  {
    category: "Testigos en el Tiempo del Fin",
    question: "Según «Profetas y Reyes» (p. 358), así como Dios llamó a Daniel en Babilonia, ¿a qué nos llama hoy a nosotros en la Babilonia moderna?",
    options: [
      "A demostrar superioridad política en las cortes terrenales",
      "A ser sus testigos en el mundo, revelando los principios de su reino tanto en los asuntos menores como en los mayores",
      "A esperar pasivamente sin relacionarnos con la sociedad",
      "A guardar silencio sobre nuestros principios de salud y adoración"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Lee la sección 'Testigos en el Tiempo del Fin': tanto en los asuntos menores como en los mayores.",
    reference: "Elena G. de White • Profetas y Reyes, p. 358",
    explanation: "«Así como Dios llamó a Daniel para que testificase por él en Babilonia, nos llama hoy a nosotros para que seamos sus testigos en el mundo. Tanto en los asuntos menores como en los mayores... desea que revelemos a los hombres los principios de su reino.»"
  }
];

// ============================================================================
// MOTOR DE SONIDO SINTETIZADO (Web Audio API - Sin archivos externos)
// ============================================================================
class SoundEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playTone(freq, type, duration, delay = 0, gainVal = 0.12) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(gainVal, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  playQuestionStart() {
    // Acorde solemne estilo estudio profético / millonario
    this.playTone(220, 'sine', 0.45, 0, 0.1);
    this.playTone(329.63, 'triangle', 0.55, 0.08, 0.08);
    this.playTone(440, 'sine', 0.65, 0.16, 0.09);
  }

  playCorrect() {
    // Fanfarria dorada ascendente
    this.playTone(440, 'triangle', 0.18, 0, 0.14);
    this.playTone(554.37, 'triangle', 0.18, 0.12, 0.14);
    this.playTone(659.25, 'triangle', 0.22, 0.24, 0.15);
    this.playTone(880, 'sine', 0.5, 0.36, 0.18);
  }

  playWrong() {
    // Acorde grave de fallo
    this.playTone(196, 'sawtooth', 0.3, 0, 0.1);
    this.playTone(185, 'sawtooth', 0.55, 0.22, 0.12);
  }

  playLifeline() {
    this.playTone(587.33, 'sine', 0.2, 0, 0.12);
    this.playTone(880, 'sine', 0.35, 0.12, 0.12);
  }

  playVictory() {
    const notes = [440, 554.37, 659.25, 880, 659.25, 880];
    const delays = [0, 0.14, 0.28, 0.42, 0.62, 0.78];
    notes.forEach((n, i) => {
      this.playTone(n, 'triangle', i === notes.length - 1 ? 0.7 : 0.2, delays[i], 0.16);
    });
  }
}

const sound = new SoundEngine();

// ============================================================================
// ESTADO DEL JUEGO
// ============================================================================
let currentQuestionIndex = 0;
let isAnswered = false;
let lifelinesUsed = {
  fiftyFifty: false,
  prophet: false,
  wiseMen: false
};

// ============================================================================
// FUNCIONES DE NAVEGACIÓN Y RENDERIZADO
// ============================================================================
function showPortal() {
  document.getElementById('portal-view').classList.add('active');
  document.getElementById('game-view').classList.remove('active');
  document.getElementById('result-view').classList.remove('active');
}

function startGame() {
  currentQuestionIndex = 0;
  isAnswered = false;
  lifelinesUsed = { fiftyFifty: false, prophet: false, wiseMen: false };

  document.getElementById('btn-5050').disabled = false;
  document.getElementById('btn-prophet').disabled = false;
  document.getElementById('btn-wisemen').disabled = false;

  document.getElementById('portal-view').classList.remove('active');
  document.getElementById('result-view').classList.remove('active');
  document.getElementById('game-view').classList.add('active');

  renderLadder();
  loadQuestion();
}

function renderLadder() {
  const listEl = document.getElementById('ladder-list');
  listEl.innerHTML = '';

  LADDER_LEVELS.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'ladder-item';
    if (item.milestone) li.classList.add('milestone');
    if (idx === currentQuestionIndex) li.classList.add('current');
    if (idx < currentQuestionIndex) li.classList.add('passed');

    li.innerHTML = `
      <span class="ladder-num">${item.level}</span>
      <span class="ladder-name">${item.title}</span>
      <span class="ladder-gem">${item.milestone ? '💎 ' : ''}${item.gem}</span>
    `;
    listEl.appendChild(li);
  });
}

function loadQuestion() {
  isAnswered = false;
  const qData = QUESTIONS_DB[currentQuestionIndex];
  const levelInfo = LADDER_LEVELS[currentQuestionIndex];

  sound.playQuestionStart();
  renderLadder();

  document.getElementById('question-counter').textContent =
    `Pregunta ${currentQuestionIndex + 1} de ${QUESTIONS_DB.length} • ${levelInfo.title}`;
  document.getElementById('question-category').textContent = qData.category;
  document.getElementById('question-text').textContent = qData.question;

  // Ocultar cajas de pista y explicación
  const hintBox = document.getElementById('prophet-hint-box');
  hintBox.classList.remove('visible');

  const expBox = document.getElementById('explanation-box');
  expBox.classList.remove('visible');

  // Renderizar opciones A, B, C, D
  const letters = ['A', 'B', 'C', 'D'];
  const optionsGrid = document.getElementById('options-grid');
  optionsGrid.innerHTML = '';

  qData.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `opt-btn-${idx}`;
    btn.onclick = () => selectAnswer(idx);
    btn.innerHTML = `
      <span class="option-letter">${letters[idx]}:</span>
      <span class="option-text">${optText}</span>
    `;
    optionsGrid.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  if (isAnswered) return;
  isAnswered = true;

  const qData = QUESTIONS_DB[currentQuestionIndex];
  const isCorrect = selectedIndex === qData.correct;

  // Deshabilitar botones y mostrar estado visual
  qData.options.forEach((_, idx) => {
    const btn = document.getElementById(`opt-btn-${idx}`);
    btn.disabled = true;
    if (idx === qData.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Mostrar explicación bíblica / profética
  const expBox = document.getElementById('explanation-box');
  const statusEl = document.getElementById('explanation-status');
  const refEl = document.getElementById('explanation-ref');
  const textEl = document.getElementById('explanation-text');
  const nextBtn = document.getElementById('btn-next-question');

  refEl.textContent = qData.reference;
  textEl.textContent = qData.explanation;

  if (isCorrect) {
    sound.playCorrect();
    statusEl.textContent = '¡RESPUESTA CORRECTA! • Fidelidad Confirmada';
    statusEl.className = 'explanation-status status-ok';

    if (currentQuestionIndex === QUESTIONS_DB.length - 1) {
      nextBtn.textContent = '🏆 Ver Coronación Final (10 Veces Mejor)';
      nextBtn.onclick = () => finishGame(true);
    } else {
      nextBtn.textContent = 'Siguiente Pregunta →';
      nextBtn.onclick = () => {
        currentQuestionIndex++;
        loadQuestion();
      };
    }
  } else {
    sound.playWrong();
    statusEl.textContent = 'RESPUESTA INCORRECTA • Fin de la partida';
    statusEl.className = 'explanation-status status-fail';
    nextBtn.textContent = 'Ver Resultado Alcanzado';
    nextBtn.onclick = () => finishGame(false);
  }

  expBox.classList.add('visible');
}

// ============================================================================
// COMODINES (LIFELINES)
// ============================================================================
function useFiftyFifty() {
  if (isAnswered || lifelinesUsed.fiftyFifty) return;
  lifelinesUsed.fiftyFifty = true;
  document.getElementById('btn-5050').disabled = true;
  sound.playLifeline();

  const qData = QUESTIONS_DB[currentQuestionIndex];
  const wrongIndices = [0, 1, 2, 3].filter(i => i !== qData.correct);

  // Mezclar y ocultar 2 incorrectas
  wrongIndices.sort(() => Math.random() - 0.5);
  const toHide = wrongIndices.slice(0, 2);

  toHide.forEach(idx => {
    const btn = document.getElementById(`opt-btn-${idx}`);
    if (btn) {
      btn.classList.add('hidden-5050');
      btn.disabled = true;
    }
  });
}

function useProphetHint() {
  if (isAnswered || lifelinesUsed.prophet) return;
  lifelinesUsed.prophet = true;
  document.getElementById('btn-prophet').disabled = true;
  sound.playLifeline();

  const qData = QUESTIONS_DB[currentQuestionIndex];
  const hintBox = document.getElementById('prophet-hint-box');
  document.getElementById('prophet-hint-title').textContent = '📜 rollo del profeta / cita inspirada';
  document.getElementById('prophet-hint-text').textContent = qData.prophetHint;
  hintBox.classList.add('visible');
}

function useWiseMen() {
  if (isAnswered || lifelinesUsed.wiseMen) return;
  lifelinesUsed.wiseMen = true;
  document.getElementById('btn-wisemen').disabled = true;
  sound.playLifeline();

  const qData = QUESTIONS_DB[currentQuestionIndex];
  const letters = ['A', 'B', 'C', 'D'];
  const correctLetter = letters[qData.correct];

  const hintBox = document.getElementById('prophet-hint-box');
  document.getElementById('prophet-hint-title').textContent = '👥 Consejo de Ananías, Misael y Azarías';
  document.getElementById('prophet-hint-text').textContent =
    `«Hermano Daniel, hemos estudiado juntos las Escrituras y la presentación: el 88% de la asamblea coincide en que la respuesta correcta es la opción ${correctLetter}.»`;
  hintBox.classList.add('visible');
}

// ============================================================================
// PANTALLA DE RESULTADO FINAL
// ============================================================================
function finishGame(wonAll) {
  document.getElementById('game-view').classList.remove('active');
  document.getElementById('result-view').classList.add('active');

  const iconEl = document.getElementById('result-icon');
  const titleEl = document.getElementById('result-title');
  const subtitleEl = document.getElementById('result-subtitle');
  const quoteEl = document.getElementById('result-quote');

  if (wonAll) {
    sound.playVictory();
    iconEl.textContent = '👑💎';
    titleEl.textContent = '¡10 VECES MEJOR! • ANCLA INMUTABLE';
    subtitleEl.textContent = 'Has respondido correctamente las 15 preguntas sobre las Joyas del Libro de Daniel (Capítulo 1).';
    quoteEl.textContent = '«Así como Dios llamó a Daniel para que testificase por él en Babilonia, nos llama hoy a nosotros para que seamos sus testigos en el mundo. Tanto en los asuntos menores como en los mayores... desea que revelemos a los hombres los principios de su reino.» — Elena G. de White, Profetas y Reyes, p. 358';
  } else {
    // Calcular nivel seguro alcanzado
    let safeLevel = "Aprendiz en Judá (0 pts)";
    if (currentQuestionIndex >= 10) {
      safeLevel = "Sabio de Judá (32,000 pts asegurados)";
    } else if (currentQuestionIndex >= 5) {
      safeLevel = "Fiel en la Prueba de los 10 Días (1,000 pts asegurados)";
    }

    iconEl.textContent = '📜🕯️';
    titleEl.textContent = `Llegaste hasta la pregunta ${currentQuestionIndex + 1} de 15`;
    subtitleEl.textContent = `Nivel seguro alcanzado: ${safeLevel}`;
    quoteEl.textContent = '«Y Daniel propuso en su corazón no contaminarse con la comida ni con el vino del rey.» — Daniel 1:8. ¡Vuelve a intentarlo para alcanzar el nivel 10 Veces Mejor!';
  }
}

function toggleSound() {
  const active = sound.toggle();
  const btn = document.getElementById('btn-sound');
  btn.textContent = active ? '🔊 Sonido: ON' : '🔇 Sonido: OFF';
}
