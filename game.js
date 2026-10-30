// ============================================================================
// JUEGOS PROFÉTICOS - DANIEL CAPÍTULO 1 Y DANIEL CAPÍTULO 2
// - Daniel 1: "Joyas del Libro de Daniel: Fidelidad en la Corte de Babilonia"
// - Daniel 2: "La Gran Cadena Profética - Estudio #1: El Fundamento de la
//              Cadena Profética" (Pastor Esteban Bohr | SecretsUnsealed.org)
// ============================================================================

const LADDER_LEVELS = [
  { level: 1,  title: "Buscador de la Verdad",            gem: "100 pts",   milestone: false },
  { level: 2,  title: "Guardián de la Memoria",           gem: "200 pts",   milestone: false },
  { level: 3,  title: "Estudiante de la Profecía",        gem: "300 pts",   milestone: false },
  { level: 4,  title: "Defensor de su Identidad",         gem: "500 pts",   milestone: false },
  { level: 5,  title: "Fiel en la Prueba (Nivel Seguro)", gem: "1,000 pts", milestone: true  },
  { level: 6,  title: "Propósito de Corazón",             gem: "2,000 pts", milestone: false },
  { level: 7,  title: "Intérprete de los Símbolos",       gem: "4,000 pts", milestone: false },
  { level: 8,  title: "Mente Lúcida y Pura",              gem: "8,000 pts", milestone: false },
  { level: 9,  title: "Hijo del Dios Vivo",               gem: "16,000 pts", milestone: false },
  { level: 10, title: "Sabio de Judá (Nivel Seguro)",     gem: "32,000 pts", milestone: true  },
  { level: 11, title: "Guardián del Sábado",              gem: "64,000 pts", milestone: false },
  { level: 12, title: "Columna de la Verdad",             gem: "125,000 pts", milestone: false },
  { level: 13, title: "Luz ante los Reyes",               gem: "250,000 pts", milestone: false },
  { level: 14, title: "Testigo del Tiempo del Fin",       gem: "500,000 pts", milestone: false },
  { level: 15, title: "10 Veces Mejor • Roca Eterna",     gem: "1,000,000", milestone: true }
];

// ============================================================================
// BASE DE DATOS CAPÍTULO 1: 16 PREGUNTAS (Múltiplo de 4: 4 Rondas de 4)
// ============================================================================
const QUESTIONS_DAN1 = [
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
    reference: "Daniel 1 • Contexto Histórico (606 a.C.)",
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
    category: "Estrategia Babilónica",
    question: "Además de enseñarles «Sabiduría Caldea» y «Borrar su Identidad», ¿con qué propósito político usaba Babilonia a estos jóvenes cautivos de linaje real?",
    options: [
      "Como rehenes políticos para garantizar la lealtad de las naciones conquistadas",
      "Como soldados de infantería en las fronteras con Egipto",
      "Como constructores de los ladrillos de la Torre de Babel",
      "Como comerciantes marítimos en el mar Mediterráneo"
    ],
    correct: 0,
    prophetHint: "Pista Profética: En la diapositiva 'El Centro Educacional del Mundo', el tercer pilar con icono de corona se titula 'Rehenes Políticos'.",
    reference: "El Centro Educacional del Mundo • Rehenes Políticos",
    explanation: "Los jóvenes de linaje real eran retenidos como rehenes políticos en la corte para garantizar la lealtad y sumisión de las naciones conquistadas."
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
// BASE DE DATOS CAPÍTULO 2: 16 PREGUNTAS (Múltiplo de 4: 4 Rondas de 4)
// Documento: "La Gran Cadena Profética - Estudio #1: El Fundamento de la
//             Cadena Profética" (Pastor Esteban Bohr, págs. 3 a 11)
// ============================================================================
const QUESTIONS_DAN2 = [
  {
    category: "La Trama de Daniel 2",
    question: "Según Daniel 2:1 y 2:29, ¿en qué año de su reinado tuvo Nabucodonosor el sueño y en qué estaba pensando al acostarse?",
    options: [
      "En el primer año, pensando en construir los jardines colgantes",
      "En el segundo año de su reinado, pensando en lo que había de ser en el porvenir (el futuro de su reino)",
      "En el séptimo año, pensando en invadir Egipto",
      "En el décimo año, pensando en levantar una estatua en Dura"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Daniel 2:1 menciona el año exacto del reinado y Daniel 2:29 dice: «te vinieron pensamientos por saber lo que había de ser en lo por venir».",
    reference: "Estudio #1 (pág. 3) • Daniel 2:1, 29",
    explanation: "En el segundo año de su reinado, cuando Nabucodonosor se acostó pensando en el futuro de su reino, Dios leyó sus pensamientos y le dio un sueño profético."
  },
  {
    category: "Propósito Divino",
    question: "Según el estudio del Pastor Esteban Bohr, ¿qué propósito tenía Dios al hacerle olvidar el sueño al rey Nabucodonosor?",
    options: [
      "Castigar la falta de memoria del rey babilónico",
      "Desenmascarar a los sabios, magos, astrólogos y adivinos de la religión falsa de Babilonia",
      "Dar tiempo al ejército medo-persa para acercarse a la ciudad",
      "Obligar al rey a escribir un libro de astronomía caldea"
    ],
    correct: 1,
    prophetHint: "Pista Profética: En la página 3 se afirma: «Dios tenía un propósito en velarle el sueño al rey Nabucodonosor: Dios desenmascaró a los de la religión falsa de Babilonia».",
    reference: "Estudio #1 (pág. 3) • Daniel 2:2, 3",
    explanation: "Al hacerle olvidar el sueño, Dios desenmascaró el fraude de los magos, astrólogos, encantadores y caldeos de la religión falsa de Babilonia."
  },
  {
    category: "Dioses Paganos vs. el Dios Vivo",
    question: "En Daniel 2:11 los caldeos dijeron que los dioses «no moran con la carne». ¿Qué texto bíblico cita el estudio para demostrar que el Dios verdadero SÍ se revela y habitó con la carne?",
    options: [
      "Juan 1:14 («Aquel Verbo llegó a ser carne y habitó entre nosotros»)",
      "Éxodo 15:1 («Cantaré yo a Jehová porque se ha magnificado»)",
      "Salmo 23:1 («Jehová es mi pastor, nada me faltará»)",
      "Proverbios 3:5 («Fíate de Jehová de todo tu corazón»)"
    ],
    correct: 0,
    prophetHint: "Pista Profética: Es el famoso versículo del capítulo 1 del Evangelio de Juan sobre la encarnación del Verbo.",
    reference: "Estudio #1 (pág. 4) • Daniel 2:11 y Juan 1:14",
    explanation: "Mientras los dioses paganos guardan secretos y no moran con la carne (Daniel 2:11), el Dios de la Biblia no se oculta, sino que el Verbo se hizo carne y habitó entre nosotros (Juan 1:14)."
  },
  {
    category: "Oración y Revelación",
    question: "Cuando el rey mandó matar a todos los sabios (Daniel 2:12-13), ¿qué hizo Daniel con Ananías, Misael y Azarías y qué texto declara que Dios revela Su secreto a los profetas?",
    options: [
      "Consultaron los astros caldeos y citaron Ezequiel 1:1",
      "Oraron pidiendo misericordias del Dios del cielo (Daniel 2:17-18), cumpliéndose Amós 3:7",
      "Huyeron al desierto de Judea y citaron Isaías 40:3",
      "Pidieron ayuda al ejército real y citaron 1 Reyes 18"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Daniel no empleó astrología ni bola de cristal; oró con sus tres amigos, y Amós 3:7 afirma que Jehová revela Su secreto a sus siervos los profetas.",
    reference: "Estudio #1 (pág. 4) • Daniel 2:17-18 y Amós 3:7",
    explanation: "Satanás quiso destruirlos mediante el decreto de muerte, pero Daniel y sus amigos oraron al Dios del cielo que conoce el fin desde el principio y revela Su secreto a sus siervos los profetas (Amós 3:7)."
  },
  {
    category: "Método de Interpretación Profética",
    question: "La gran imagen presenta una secuencia continua de reinos sin paréntesis ni interrupción hasta la Segunda Venida. ¿Cómo se llama este método de interpretación profética predilecto de la Iglesia Adventista?",
    options: [
      "Futurismo dispensacionalista",
      "Preterismo alegórico",
      "Historicismo",
      "Idealismo filosófico"
    ],
    correct: 2,
    prophetHint: "Pista Profética: En la página 5 se destaca entre comillas simples el nombre de este método basado en la historia continua.",
    reference: "Estudio #1 (pág. 5) • El Sueño y el Historicismo",
    explanation: "El documento subraya: «No hay paréntesis ni interrupción en la secuencia. Este método de interpretar las profecías se conoce como ‘historicismo’ y es el método predilecto de la iglesia Adventista»."
  },
  {
    category: "La Cabeza de Oro y el Pecho de Plata",
    question: "Según el panorama histórico de Daniel 2 (págs. 6 y 9), ¿qué imperios y fechas exactas representan la Cabeza de Oro y el Pecho y Brazos de Plata?",
    options: [
      "Cabeza de Oro: Asiria (722-605 AC) • Pecho de Plata: Egipto (605-525 AC)",
      "Cabeza de Oro: Babilonia (605-539 AC) • Pecho y Brazos de Plata: Medo Persia (539-331 AC)",
      "Cabeza de Oro: Babilonia (606-500 AC) • Pecho de Plata: Grecia (500-200 AC)",
      "Cabeza de Oro: Medo Persia (539-331 AC) • Pecho de Plata: Roma (331-168 AC)"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Babilonia cayó ante Ciro en el 539 AC, y Medo Persia gobernó hasta el 331 AC.",
    reference: "Estudio #1 (págs. 6 y 9) • Daniel 2:37-39",
    explanation: "La cabeza de oro representa a Babilonia (605-539 AC) y el pecho y brazos de plata representan a Medo Persia (539-331 AC)."
  },
  {
    category: "El Vientre de Bronce y las Piernas de Hierro",
    question: "Según el panorama de Daniel 2 (págs. 6 y 9), ¿qué imperios y fechas corresponden al Vientre y Muslos de Bronce y a las Piernas de Hierro?",
    options: [
      "Bronce: Grecia (331-168 AC) • Piernas de Hierro: Imperio Romano (168 AC – 476 DC)",
      "Bronce: Siria (300-100 AC) • Piernas de Hierro: Imperio Otomano (100 AC – 500 DC)",
      "Bronce: Macedonia (400-200 AC) • Piernas de Hierro: Imperio Franco (200 AC – 800 DC)",
      "Bronce: Grecia (539-331 AC) • Piernas de Hierro: Roma Papal (538 – 1798 DC)"
    ],
    correct: 0,
    prophetHint: "Pista Profética: Grecia venció en 331 AC hasta 168 AC, cuando el Imperio Romano de hierro dominó hasta la caída del último emperador occidental en 476 DC.",
    reference: "Estudio #1 (págs. 6 y 9) • Daniel 2:39, 40",
    explanation: "El vientre de bronce representa a Grecia (331-168 AC) y las piernas de hierro al Imperio Romano (168 AC – 476 DC)."
  },
  {
    category: "Los Diez Dedos y el Barro Añadido",
    question: "En la cronología del Panorama de Daniel 2 (pág. 9), ¿en qué año se ubica la división del Imperio Romano (Diez Dedos) y en qué año se añade el Barro al Hierro (Roma Papal)?",
    options: [
      "Diez Dedos: 330 DC • Se añade el Barro al Hierro: 476 DC",
      "Diez Dedos: 476 DC (División de Roma) • Se añade el Barro al Hierro: 538 DC (Roma Papal)",
      "Diez Dedos: 168 AC • Se añade el Barro al Hierro: 313 DC",
      "Diez Dedos: 538 DC • Se añade el Barro al Hierro: 1798 DC"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Revisa la lista 'El Panorama de Daniel 2' en la página 9 del documento.",
    reference: "Estudio #1 (pág. 9) • El Panorama de Daniel 2",
    explanation: "Los Diez Dedos corresponden a la división del Imperio Romano (476 DC) y el Barro añadido al Hierro representa el ascenso de Roma Papal (538 DC)."
  },
  {
    category: "Los Pies de Hierro y Barro",
    question: "Según la página 6 del estudio, ¿qué significa el hecho de que el hierro ya existía en las piernas antes de aparecer mezclado con barro cocido de alfarero en los pies (Daniel 2:41)?",
    options: [
      "Que Babilonia volvería a reconstruirse literalmente en Irak",
      "Que Roma continúa existiendo en los pies, pero es una Roma amalgamada que mezcla dos elementos que no deben ir juntos",
      "Que el Imperio Griego seguiría gobernando en secreto",
      "Que la metalurgia antigua había perdido pureza técnica"
    ],
    correct: 1,
    prophetHint: "Pista Profética: El hierro y el barro son útiles por separado; el problema es cuando se mezclan en una Roma amalgamada.",
    reference: "Estudio #1 (pág. 6) • Daniel 2:41",
    explanation: "El hierro en los pies muestra que Roma continúa existiendo hasta el fin, pero como una Roma distinta y amalgamada que mezcla el poder civil con el religioso."
  },
  {
    category: "El Barro según Elena G. de White",
    question: "Según la cita de Elena G. de White en el Comentario Bíblico Adventista (tomo 7A, p. 178), ¿qué representa la mezcla del barro con el hierro en los pies de la imagen?",
    options: [
      "La alianza comercial entre las naciones de Oriente y Occidente",
      "La mezcla de los asuntos de la Iglesia [el barro] con los del Estado [el hierro], debilitando el poder de las iglesias y apoyando el falso día de reposo",
      "La construcción de templos con materiales modernos",
      "La división geográfica de los continentes"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Lee el párrafo subrayado en la página 7: «La mezcla de los asuntos de la Iglesia [el barro] con las del Estado [el hierro] se representa con el hierro y el barro».",
    reference: "Estudio #1 (pág. 7) • CBA, tomo 7A, p. 178",
    explanation: "Elena G. de White explica que el barro representa a la iglesia y el hierro al Estado; cuando la iglesia busca el poder político del Estado y se une con el papado para exaltar el falso día de reposo sobre el Sábado, se corrompe."
  },
  {
    category: "Perspectiva de Jeremías y Génesis",
    question: "¿Qué textos bíblicos del Antiguo y Nuevo Testamento cita el estudio (págs. 7 y 8) para demostrar que el barro de alfarero simboliza al pueblo de Dios / la iglesia como cuerpo de Cristo?",
    options: [
      "Jeremías 18:1-6 (casa del alfarero = Israel), Génesis 2:7 / Isaías 64:8 (formados del barro) y Colosenses 1:18 / 1 Corintios 12:12-13 (la iglesia es el cuerpo de Cristo)",
      "Levítico 11, Números 14 y Deuteronomio 28",
      "Proverbios 8, Eclesiastés 12 y Cantares 2",
      "Josué 6, Jueces 7 y 1 Samuel 17"
    ],
    correct: 0,
    prophetHint: "Pista Profética: En las páginas 7 y 8 se analizan 'La Perspectiva de Jeremías', 'La Perspectiva de Génesis 2:7' y 'La Perspectiva de Ezequiel 37'.",
    reference: "Estudio #1 (págs. 7 y 8) • Jeremías 18:1-6; Isaías 64:8; Colosenses 1:18",
    explanation: "En Jeremías 18:1-6 e Isaías 64:8 el barro de alfarero representa a Israel, y en el Nuevo Testamento (Colosenses 1:18; Hechos 2; 1 Corintios 12) el cuerpo formado del barro y vivificado por el Espíritu representa a la iglesia de Cristo."
  },
  {
    category: "La Perspectiva de Apocalipsis 17",
    question: "Según la página 9 del documento, ¿cómo presenta Apocalipsis 17:1, 2 la misma mezcla ilícita del hierro con el barro usando otros símbolos?",
    options: [
      "Como siete trompetas tocando sobre el mar Mediterráneo",
      "Como la gran ramera [la iglesia apóstata] fornicando con los reyes de la tierra [unión con los poderes civiles]",
      "Como dos testigos predicando vestidos de cilicio",
      "Como un caballo blanco saliendo a vencer"
    ],
    correct: 1,
    prophetHint: "Pista Profética: La iglesia es la esposa de Cristo; cuando apela al poder del Estado en vez de Cristo, comete fornicación espiritual con los reyes de la tierra.",
    reference: "Estudio #1 (pág. 9) • Apocalipsis 17:1, 2",
    explanation: "En Apocalipsis 17:1, 2 la misma unión de iglesia y Estado (barro y hierro) se describe como la gran ramera (la iglesia apóstata) fornicando con los reyes de la tierra (los poderes civiles)."
  },
  {
    category: "El Significado de la Piedra",
    question: "En Daniel 2:45 una piedra fue cortada del monte «no con mano» y desmenuzó la imagen. Según 1 Pedro 2:6, Hebreos 9:11 y Marcos 14:58, ¿quién es la Piedra y qué significa «no con mano»?",
    options: [
      "La piedra es un meteorito literal y «no con mano» significa que cae del espacio",
      "La piedra es Jesús (la principal piedra del ángulo) y «no con mano» significa de origen divino/sobrenatural, sin intervención humana",
      "La piedra es el imperio de Alejandro Magno y «no con mano» significa conquista veloz",
      "La piedra es la democracia moderna creada por los parlamentos humanos"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Revisa las páginas 9 y 10: 1 Pedro 2:6 identifica a Jesús como la piedra, y Hebreos 9:11 / Marcos 14:58 explican la frase «no hecho de manos».",
    reference: "Estudio #1 (págs. 9 y 10) • Daniel 2:45; 1 Pedro 2:6; Hebreos 9:11",
    explanation: "Jesús es la Piedra principal del ángulo (1 Pedro 2:6), y la expresión «no con manos» (Hebreos 9:11; Marcos 14:58) indica que el hombre no tuvo nada que ver en su construcción: es obra exclusiva de Dios."
  },
  {
    category: "La Montaña Eterna",
    question: "Según Daniel 2:34, 35 y 44 (pág. 10), ¿en qué se convirtió la piedra después de golpear a la imagen en los pies y qué representa?",
    options: [
      "Se convirtió en un río caudaloso que representa el comercio mundial",
      "Se convirtió en un gran monte (montaña) que llenó toda la tierra, representando el reino eterno de Cristo que jamás será destruido",
      "Se convirtió en una nube pasajera que subió al cielo",
      "Se convirtió en una quinta estatua de oro puro"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Daniel 2:35 dice que la piedra «fue hecha un gran monte que llenó toda la tierra», explicado en Daniel 2:44.",
    reference: "Estudio #1 (pág. 10) • Daniel 2:34, 35, 44",
    explanation: "Después de desmenuzar a la imagen, la piedra se convirtió en un gran monte que llenó toda la tierra, simbolizando el reino eterno que el Dios del cielo levantará y que permanecerá para siempre (Daniel 2:44)."
  },
  {
    category: "Una Decisión Personal • La Roca",
    question: "En Mateo 21:44 Jesús hizo una aplicación personal de la Roca: «Y el que cayere sobre esta piedra será quebrantado; y sobre quien ella cayere, le desmenuzará». ¿Qué significa esto según la página 10?",
    options: [
      "Que debemos evitar acercarnos a las montañas rocosas de Judea",
      "Que podemos caer ahora sobre la Roca (Cristo) para que rompa nuestro corazón egoísta, o si no lo hacemos ahora, la Roca caerá sobre nosotros y nos desmenuzará cuando Jesús venga",
      "Que solo los constructores de templos pueden entender las profecías",
      "Que la piedra solo cayó sobre el imperio babilónico antiguo"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Lee la sección 'Una Decisión Personal' al final de la página 10.",
    reference: "Estudio #1 (pág. 10) • Mateo 21:44",
    explanation: "Podemos entregarnos hoy y caer sobre la Roca (Cristo) para que quebrante nuestro orgullo y egoísmo para salvación; de lo contrario, cuando Jesús regrese, la Roca caerá en juicio y desmenuzará a los rebeldes."
  },
  {
    category: "El Fuego, la Espada y el Nuevo Nacimiento",
    question: "Al concluir el Estudio #1 (págs. 10 y 11) con Mateo 3:11-12, Hebreos 4:12 y Juan 3:3-5, ¿cuál es el llamado espiritual final para entrar al reino eterno de Dios?",
    options: [
      "Confiar únicamente en el linaje terrenal y las reformas políticas del Estado",
      "Permitir que el fuego del Espíritu Santo consuma hoy nuestro pecado, que la espada del Espíritu limpie nuestra vida y nacer de nuevo del agua y del Espíritu",
      "Esperar hasta la segunda venida para comenzar a estudiar la Biblia",
      "Unir el hierro con el barro para fortalecer a las naciones"
    ],
    correct: 1,
    prophetHint: "Pista Profética: Revisa la página 11: el fuego del Espíritu (Mateo 3:11-12), la espada del Espíritu (Hebreos 4:12) y el nuevo nacimiento (Juan 3:3, 5).",
    reference: "Estudio #1 (págs. 10 y 11) • Mateo 3:11-12; Hebreos 4:12; Juan 3:3, 5",
    explanation: "Si permitimos ahora que el fuego del Espíritu Santo consuma el pecado en nosotros y que la espada de la Palabra limpie nuestra vida mediante el nuevo nacimiento (Juan 3:3, 5), no seremos destruidos en el juicio final y entraremos al reino eterno de Dios."
  }
];

// Mapa de capítulos disponibles
const CHAPTERS_CONFIG = {
  dan1: {
    key: 'dan1',
    badge: 'JOYAS DEL LIBRO DE DANIEL • CAPÍTULO 1',
    title: 'Daniel 1: Fidelidad en la Corte de Babilonia',
    allQuestions: QUESTIONS_DAN1,
    soloQuestions: QUESTIONS_DAN1.filter((_, idx) => idx !== 4), // 15 preguntas para la escalera
    victoryQuote: '«Así como Dios llamó a Daniel para que testificase por él en Babilonia, nos llama hoy a nosotros para que seamos sus testigos en el mundo.» — Elena G. de White, Profetas y Reyes, p. 358'
  },
  dan2: {
    key: 'dan2',
    badge: 'LA GRAN CADENA PROFÉTICA • DANIEL CAPÍTULO 2',
    title: 'Daniel 2: El Fundamento de la Cadena Profética',
    allQuestions: QUESTIONS_DAN2,
    soloQuestions: QUESTIONS_DAN2.filter((_, idx) => idx !== 7), // 15 preguntas para la escalera
    victoryQuote: '«Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido... permanecerá para siempre.» — Daniel 2:44 (Estudio #1, Pastor Esteban Bohr)'
  }
};

let activeChapterKey = 'dan1';

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
    this.playTone(220, 'sine', 0.45, 0, 0.1);
    this.playTone(329.63, 'triangle', 0.55, 0.08, 0.08);
    this.playTone(440, 'sine', 0.65, 0.16, 0.09);
  }

  playCorrect() {
    this.playTone(440, 'triangle', 0.18, 0, 0.14);
    this.playTone(554.37, 'triangle', 0.18, 0.12, 0.14);
    this.playTone(659.25, 'triangle', 0.22, 0.24, 0.15);
    this.playTone(880, 'sine', 0.5, 0.36, 0.18);
  }

  playWrong() {
    this.playTone(196, 'sawtooth', 0.3, 0, 0.1);
    this.playTone(185, 'sawtooth', 0.55, 0.22, 0.12);
  }

  playTick() {
    this.playTone(800, 'sine', 0.06, 0, 0.06);
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
// NAVEGACIÓN ENTRE VISTAS
// ============================================================================
function hideAllViews() {
  const views = [
    'portal-view',
    'game-view',
    'result-view',
    'groups-setup-view',
    'groups-game-view',
    'groups-result-view'
  ];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
}

function showPortal() {
  stopGroupTimer();
  hideAllViews();
  document.getElementById('portal-view').classList.add('active');
}

function toggleSound() {
  const active = sound.toggle();
  const btn = document.getElementById('btn-sound');
  btn.textContent = active ? '🔊 Sonido: ON' : '🔇 Sonido: OFF';
}

// ============================================================================
// MODO 1: INDIVIDUAL ¿QUIÉN QUIERE SER MILLONARIO? (15 PREGUNTAS)
// Soporta Daniel 1 ('dan1') y Daniel 2 ('dan2')
// ============================================================================
let currentQuestionIndex = 0;
let isAnswered = false;
let lifelinesUsed = {
  fiftyFifty: false,
  prophet: false,
  wiseMen: false
};

function getSoloQuestions() {
  return CHAPTERS_CONFIG[activeChapterKey].soloQuestions;
}

function startGame(chapterKey = 'dan1') {
  stopGroupTimer();
  activeChapterKey = chapterKey;
  currentQuestionIndex = 0;
  isAnswered = false;
  lifelinesUsed = { fiftyFifty: false, prophet: false, wiseMen: false };

  document.getElementById('btn-5050').disabled = false;
  document.getElementById('btn-prophet').disabled = false;
  document.getElementById('btn-wisemen').disabled = false;

  const chConfig = CHAPTERS_CONFIG[activeChapterKey];
  document.getElementById('solo-chapter-label').textContent = chConfig.badge;

  hideAllViews();
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
  const soloQuestions = getSoloQuestions();
  const qData = soloQuestions[currentQuestionIndex];
  const levelInfo = LADDER_LEVELS[currentQuestionIndex];

  sound.playQuestionStart();
  renderLadder();

  document.getElementById('question-counter').textContent =
    `Pregunta ${currentQuestionIndex + 1} de ${soloQuestions.length} • ${levelInfo.title}`;
  document.getElementById('question-category').textContent = qData.category;
  document.getElementById('question-text').textContent = qData.question;

  document.getElementById('prophet-hint-box').classList.remove('visible');
  document.getElementById('explanation-box').classList.remove('visible');

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

  const soloQuestions = getSoloQuestions();
  const qData = soloQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === qData.correct;

  qData.options.forEach((_, idx) => {
    const btn = document.getElementById(`opt-btn-${idx}`);
    btn.disabled = true;
    if (idx === qData.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const expBox = document.getElementById('explanation-box');
  const statusEl = document.getElementById('explanation-status');
  const refEl = document.getElementById('explanation-ref');
  const textEl = document.getElementById('explanation-text');
  const nextBtn = document.getElementById('btn-next-question');

  refEl.textContent = qData.reference;
  textEl.textContent = qData.explanation;

  if (isCorrect) {
    sound.playCorrect();
    statusEl.textContent = '¡RESPUESTA CORRECTA! • Verdad Profética Confirmada';
    statusEl.className = 'explanation-status status-ok';

    if (currentQuestionIndex === soloQuestions.length - 1) {
      nextBtn.textContent = '🏆 Ver Coronación Final';
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

function useFiftyFifty() {
  if (isAnswered || lifelinesUsed.fiftyFifty) return;
  lifelinesUsed.fiftyFifty = true;
  document.getElementById('btn-5050').disabled = true;
  sound.playLifeline();

  const soloQuestions = getSoloQuestions();
  const qData = soloQuestions[currentQuestionIndex];
  const wrongIndices = [0, 1, 2, 3].filter(i => i !== qData.correct);
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

  const soloQuestions = getSoloQuestions();
  const qData = soloQuestions[currentQuestionIndex];
  const hintBox = document.getElementById('prophet-hint-box');
  document.getElementById('prophet-hint-title').textContent = '📜 ROLLO DEL PROFETA / CITA DEL ESTUDIO';
  document.getElementById('prophet-hint-text').textContent = qData.prophetHint;
  hintBox.classList.add('visible');
}

function useWiseMen() {
  if (isAnswered || lifelinesUsed.wiseMen) return;
  lifelinesUsed.wiseMen = true;
  document.getElementById('btn-wisemen').disabled = true;
  sound.playLifeline();

  const soloQuestions = getSoloQuestions();
  const qData = soloQuestions[currentQuestionIndex];
  const letters = ['A', 'B', 'C', 'D'];
  const correctLetter = letters[qData.correct];

  const hintBox = document.getElementById('prophet-hint-box');
  document.getElementById('prophet-hint-title').textContent = '👥 Consejo de Ananías, Misael y Azarías';
  document.getElementById('prophet-hint-text').textContent =
    `«Hermano Daniel, hemos orado y estudiado las Escrituras juntos: el 88% de la asamblea confirma que la respuesta correcta es la opción ${correctLetter}.»`;
  hintBox.classList.add('visible');
}

function finishGame(wonAll) {
  hideAllViews();
  document.getElementById('result-view').classList.add('active');

  const chConfig = CHAPTERS_CONFIG[activeChapterKey];
  const iconEl = document.getElementById('result-icon');
  const titleEl = document.getElementById('result-title');
  const subtitleEl = document.getElementById('result-subtitle');
  const quoteEl = document.getElementById('result-quote');
  const retryBtn = document.getElementById('btn-retry-solo');

  retryBtn.onclick = () => startGame(activeChapterKey);

  if (wonAll) {
    sound.playVictory();
    iconEl.textContent = '👑💎';
    titleEl.textContent = `¡VICTORIA TOTAL! • ${chConfig.title.toUpperCase()}`;
    subtitleEl.textContent = `Has respondido correctamente las 15 preguntas del modo Millonario (${chConfig.title}).`;
    quoteEl.textContent = chConfig.victoryQuote;
  } else {
    let safeLevel = "Buscador en Judá (0 pts)";
    if (currentQuestionIndex >= 10) {
      safeLevel = "Sabio de Judá (32,000 pts asegurados)";
    } else if (currentQuestionIndex >= 5) {
      safeLevel = "Fiel en la Prueba (1,000 pts asegurados)";
    }

    iconEl.textContent = '📜🕯️';
    titleEl.textContent = `Llegaste hasta la pregunta ${currentQuestionIndex + 1} de 15`;
    subtitleEl.textContent = `${chConfig.title} • Nivel seguro alcanzado: ${safeLevel}`;
    quoteEl.textContent = chConfig.victoryQuote;
  }
}

// ============================================================================
// MODO 2: BATALLA DE LOS 4 GRUPOS (GRUPOS A, B, C y D) - 16 PREGUNTAS
// Soporta Daniel 1 ('dan1') y Daniel 2 ('dan2')
// Reglas:
// - Empieza preguntándole al Grupo A con 1 minuto (60 s) para contestar.
// - Pasado el minuto, la respuesta se considera errónea.
// - Solo pasa al siguiente grupo (A → B → C → D → A) si:
//     1) La respuesta es errónea o se agota el minuto (pasa en REBOTE al siguiente grupo).
//     2) O si responde 4 seguidas bien (+200 pts extra y pasa el turno al siguiente grupo).
// - Total: 16 preguntas (4 Rondas de 4 preguntas).
// ============================================================================
let groupsData = [
  { id: 'A', name: 'Grupo A', score: 0, streak: 0, correctCount: 0 },
  { id: 'B', name: 'Grupo B', score: 0, streak: 0, correctCount: 0 },
  { id: 'C', name: 'Grupo C', score: 0, streak: 0, correctCount: 0 },
  { id: 'D', name: 'Grupo D', score: 0, streak: 0, correctCount: 0 }
];

let activeGroupIdx = 0; // 0=A, 1=B, 2=C, 3=D
let groupQuestionIdx = 0; // 0..15 (16 preguntas)
let groupTimerInterval = null;
let groupSecondsLeft = 60;
let groupTimerPaused = false;
let groupWaitingTransition = false;
let failedGroupsForCurrentQ = 0;
let disabledOptionsForCurrentQ = [];

function getGroupQuestions() {
  return CHAPTERS_CONFIG[activeChapterKey].allQuestions;
}

function openGroupsSetup(chapterKey = 'dan1') {
  stopGroupTimer();
  activeChapterKey = chapterKey;
  const chConfig = CHAPTERS_CONFIG[activeChapterKey];

  document.getElementById('groups-setup-badge').textContent =
    `${chConfig.badge} • MODO 4 GRUPOS`;
  document.getElementById('groups-setup-title').textContent =
    `Batalla de 4 Grupos (A, B, C y D) — ${chConfig.title}`;

  hideAllViews();
  document.getElementById('groups-setup-view').classList.add('active');
}

function startGroupsGame() {
  const nameA = document.getElementById('input-group-a').value.trim() || 'Grupo A';
  const nameB = document.getElementById('input-group-b').value.trim() || 'Grupo B';
  const nameC = document.getElementById('input-group-c').value.trim() || 'Grupo C';
  const nameD = document.getElementById('input-group-d').value.trim() || 'Grupo D';

  groupsData = [
    { id: 'A', name: nameA, score: 0, streak: 0, correctCount: 0 },
    { id: 'B', name: nameB, score: 0, streak: 0, correctCount: 0 },
    { id: 'C', name: nameC, score: 0, streak: 0, correctCount: 0 },
    { id: 'D', name: nameD, score: 0, streak: 0, correctCount: 0 }
  ];

  activeGroupIdx = 0; // Empieza preguntándole al Grupo A
  groupQuestionIdx = 0;

  hideAllViews();
  document.getElementById('groups-game-view').classList.add('active');

  loadGroupQuestion(false);
}

function renderGroupsScoreboard() {
  const board = document.getElementById('groups-scoreboard');
  board.innerHTML = '';

  groupsData.forEach((grp, idx) => {
    const isTurn = idx === activeGroupIdx;
    const card = document.createElement('div');
    card.className = `group-card ${isTurn ? 'active-turn' : ''}`;

    let dotsHtml = '';
    for (let i = 1; i <= 4; i++) {
      dotsHtml += `<span class="streak-dot ${i <= grp.streak ? 'filled' : ''}"></span>`;
    }

    card.innerHTML = `
      <span class="group-turn-badge">⚡ TURNO ACTUAL</span>
      <div class="group-header">
        <span class="group-name">${grp.name}</span>
        <span class="group-score">${grp.score} pts</span>
      </div>
      <div class="group-streak">
        <span>Racha seguidas (${grp.streak}/4):</span>
        <div class="streak-dots">${dotsHtml}</div>
      </div>
    `;
    board.appendChild(card);
  });
}

function loadGroupQuestion(isRebound = false) {
  groupWaitingTransition = false;
  if (!isRebound) {
    failedGroupsForCurrentQ = 0;
    disabledOptionsForCurrentQ = [];
  }

  const chConfig = CHAPTERS_CONFIG[activeChapterKey];
  const groupQuestions = getGroupQuestions();
  const qData = groupQuestions[groupQuestionIdx];
  const currentRound = Math.floor(groupQuestionIdx / 4) + 1;
  const currentGroup = groupsData[activeGroupIdx];

  sound.playQuestionStart();
  renderGroupsScoreboard();

  document.getElementById('group-round-label').textContent =
    `${chConfig.title.toUpperCase()} • RONDA ${currentRound} DE 4 (16 PREGUNTAS)`;
  document.getElementById('group-question-counter').textContent =
    `Pregunta ${groupQuestionIdx + 1} de ${groupQuestions.length}`;

  const bannerEl = document.getElementById('active-group-banner');
  if (isRebound) {
    bannerEl.innerHTML = `🔄 <strong>REBOTE PARA: ${currentGroup.name.toUpperCase()}</strong> (Racha: ${currentGroup.streak}/4)`;
  } else {
    bannerEl.innerHTML = `🎯 <strong>PREGUNTA PARA: ${currentGroup.name.toUpperCase()}</strong> (Racha: ${currentGroup.streak}/4)`;
  }

  document.getElementById('group-question-category').textContent = qData.category;
  document.getElementById('group-question-text').textContent = qData.question;

  document.getElementById('group-explanation-box').classList.remove('visible');

  const letters = ['A', 'B', 'C', 'D'];
  const optionsGrid = document.getElementById('group-options-grid');
  optionsGrid.innerHTML = '';

  qData.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `grp-opt-btn-${idx}`;

    if (disabledOptionsForCurrentQ.includes(idx)) {
      btn.classList.add('wrong');
      btn.disabled = true;
    } else {
      btn.onclick = () => handleGroupAnswer(idx);
    }

    btn.innerHTML = `
      <span class="option-letter">${letters[idx]}:</span>
      <span class="option-text">${optText}</span>
    `;
    optionsGrid.appendChild(btn);
  });

  startGroupTimer();
}

function startGroupTimer() {
  stopGroupTimer();
  groupSecondsLeft = 60; // 1 minuto exacto
  groupTimerPaused = false;

  const pauseBtn = document.getElementById('btn-pause-timer');
  if (pauseBtn) pauseBtn.textContent = '⏸️ Pausar Reloj';

  updateTimerUI();

  groupTimerInterval = setInterval(() => {
    if (groupTimerPaused || groupWaitingTransition) return;

    groupSecondsLeft--;
    if (groupSecondsLeft <= 10 && groupSecondsLeft > 0) {
      sound.playTick();
    }
    updateTimerUI();

    if (groupSecondsLeft <= 0) {
      stopGroupTimer();
      handleGroupTimeout();
    }
  }, 1000);
}

function stopGroupTimer() {
  if (groupTimerInterval) {
    clearInterval(groupTimerInterval);
    groupTimerInterval = null;
  }
}

function togglePauseGroupTimer() {
  if (groupWaitingTransition) return;
  groupTimerPaused = !groupTimerPaused;
  const pauseBtn = document.getElementById('btn-pause-timer');
  pauseBtn.textContent = groupTimerPaused ? '▶️ Reanudar Reloj' : '⏸️ Pausar Reloj';
}

function updateTimerUI() {
  const clockEl = document.getElementById('group-timer-clock');
  const fillEl = document.getElementById('group-timer-fill');

  const mins = Math.floor(groupSecondsLeft / 60);
  const secs = groupSecondsLeft % 60;
  clockEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  clockEl.classList.remove('warning', 'danger');
  fillEl.classList.remove('danger');

  if (groupSecondsLeft <= 10) {
    clockEl.classList.add('danger');
    fillEl.classList.add('danger');
  } else if (groupSecondsLeft <= 25) {
    clockEl.classList.add('warning');
  }

  const pct = Math.max(0, (groupSecondsLeft / 60) * 100);
  fillEl.style.width = `${pct}%`;
}

function disableAllGroupOptionButtons() {
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`grp-opt-btn-${i}`);
    if (btn) btn.disabled = true;
  }
}

function handleGroupTimeout() {
  if (groupWaitingTransition) return;
  groupWaitingTransition = true;
  sound.playWrong();
  disableAllGroupOptionButtons();

  const failingGroup = groupsData[activeGroupIdx];
  failingGroup.streak = 0;
  failedGroupsForCurrentQ++;

  const nextGroupIdx = (activeGroupIdx + 1) % 4;
  const nextGroup = groupsData[nextGroupIdx];

  const expBox = document.getElementById('group-explanation-box');
  const statusEl = document.getElementById('group-explanation-status');
  const refEl = document.getElementById('group-explanation-ref');
  const textEl = document.getElementById('group-explanation-text');
  const nextBtn = document.getElementById('btn-group-next');

  const groupQuestions = getGroupQuestions();
  const qData = groupQuestions[groupQuestionIdx];

  if (failedGroupsForCurrentQ < 4) {
    statusEl.textContent = `⏰ ¡TIEMPO AGOTADO (1:00)! Respuesta errónea para ${failingGroup.name}`;
    statusEl.className = 'explanation-status status-rebound';
    refEl.textContent = `Turno pasa a ${nextGroup.name}`;
    textEl.textContent = `Se cumplió el minuto sin respuesta válida. La racha de ${failingGroup.name} vuelve a 0 y el turno pasa inmediatamente a ${nextGroup.name} con 1 minuto para responder.`;

    nextBtn.textContent = `👉 Pasar turno a ${nextGroup.name} (Iniciar 1:00) →`;
    nextBtn.onclick = () => {
      activeGroupIdx = nextGroupIdx;
      loadGroupQuestion(true);
    };
  } else {
    const correctBtn = document.getElementById(`grp-opt-btn-${qData.correct}`);
    if (correctBtn) correctBtn.classList.add('correct');

    statusEl.textContent = `⏰ ¡TIEMPO AGOTADO! Ningún grupo acertó esta pregunta`;
    statusEl.className = 'explanation-status status-fail';
    refEl.textContent = qData.reference;
    textEl.textContent = qData.explanation;

    setupAdvanceToNextGroupQuestion(nextGroupIdx, nextBtn);
  }

  renderGroupsScoreboard();
  expBox.classList.add('visible');
}

function handleGroupAnswer(selectedIndex) {
  if (groupWaitingTransition) return;
  groupWaitingTransition = true;
  stopGroupTimer();
  disableAllGroupOptionButtons();

  const groupQuestions = getGroupQuestions();
  const qData = groupQuestions[groupQuestionIdx];
  const currentGroup = groupsData[activeGroupIdx];
  const isCorrect = selectedIndex === qData.correct;

  const expBox = document.getElementById('group-explanation-box');
  const statusEl = document.getElementById('group-explanation-status');
  const refEl = document.getElementById('group-explanation-ref');
  const textEl = document.getElementById('group-explanation-text');
  const nextBtn = document.getElementById('btn-group-next');

  if (isCorrect) {
    sound.playCorrect();
    const selectedBtn = document.getElementById(`grp-opt-btn-${selectedIndex}`);
    if (selectedBtn) selectedBtn.classList.add('correct');

    currentGroup.score += 100;
    currentGroup.correctCount += 1;
    currentGroup.streak += 1;

    refEl.textContent = qData.reference;

    if (currentGroup.streak >= 4) {
      sound.playVictory();
      currentGroup.score += 200;
      currentGroup.streak = 0;
      const nextGroupIdx = (activeGroupIdx + 1) % 4;
      const nextGroup = groupsData[nextGroupIdx];

      statusEl.textContent = `🔥 ¡4 SEGUIDAS BIEN DE ${currentGroup.name.toUpperCase()}! (+100 pts + 200 pts Bono) • Turno pasa a ${nextGroup.name}`;
      statusEl.className = 'explanation-status status-ok';
      textEl.textContent = `${qData.explanation} — ¡${currentGroup.name} respondió 4 preguntas seguidas correctamente! Por regla del juego, ahora el turno pasa a ${nextGroup.name}.`;

      setupAdvanceToNextGroupQuestion(nextGroupIdx, nextBtn);
    } else {
      statusEl.textContent = `✅ ¡CORRECTO ${currentGroup.name.toUpperCase()}! (+100 pts) • Racha: ${currentGroup.streak}/4 seguidas (Conserva el turno)`;
      statusEl.className = 'explanation-status status-ok';
      textEl.textContent = qData.explanation;

      setupAdvanceToNextGroupQuestion(activeGroupIdx, nextBtn);
    }
  } else {
    sound.playWrong();
    const wrongBtn = document.getElementById(`grp-opt-btn-${selectedIndex}`);
    if (wrongBtn) wrongBtn.classList.add('wrong');

    disabledOptionsForCurrentQ.push(selectedIndex);
    currentGroup.streak = 0;
    failedGroupsForCurrentQ++;

    const nextGroupIdx = (activeGroupIdx + 1) % 4;
    const nextGroup = groupsData[nextGroupIdx];

    if (failedGroupsForCurrentQ < 4) {
      statusEl.textContent = `❌ RESPUESTA ERRÓNEA DE ${currentGroup.name.toUpperCase()} • El turno pasa a ${nextGroup.name}`;
      statusEl.className = 'explanation-status status-rebound';
      refEl.textContent = `Rebote para ${nextGroup.name}`;
      textEl.textContent = `${currentGroup.name} ha fallado y pierde su racha. El turno pasa a ${nextGroup.name} con 1 minuto (60 s) para responder esta pregunta.`;

      nextBtn.textContent = `👉 Pasar turno a ${nextGroup.name} (Iniciar 1:00) →`;
      nextBtn.onclick = () => {
        activeGroupIdx = nextGroupIdx;
        loadGroupQuestion(true);
      };
    } else {
      const correctBtn = document.getElementById(`grp-opt-btn-${qData.correct}`);
      if (correctBtn) correctBtn.classList.add('correct');

      statusEl.textContent = `❌ Los 4 grupos fallaron esta pregunta`;
      statusEl.className = 'explanation-status status-fail';
      refEl.textContent = qData.reference;
      textEl.textContent = qData.explanation;

      setupAdvanceToNextGroupQuestion(nextGroupIdx, nextBtn);
    }
  }

  renderGroupsScoreboard();
  expBox.classList.add('visible');
}

function setupAdvanceToNextGroupQuestion(nextTurnGroupIdx, nextBtn) {
  const groupQuestions = getGroupQuestions();
  if (groupQuestionIdx >= groupQuestions.length - 1) {
    nextBtn.textContent = '🏆 Ver Podio Final de los 4 Grupos';
    nextBtn.onclick = () => finishGroupsGame();
  } else {
    const nextGroupName = groupsData[nextTurnGroupIdx].name;
    nextBtn.textContent = `Siguiente Pregunta (${groupQuestionIdx + 2}/${groupQuestions.length} • Turno: ${nextGroupName}) →`;
    nextBtn.onclick = () => {
      activeGroupIdx = nextTurnGroupIdx;
      groupQuestionIdx++;
      loadGroupQuestion(false);
    };
  }
}

function finishGroupsGame() {
  stopGroupTimer();
  hideAllViews();
  document.getElementById('groups-result-view').classList.add('active');
  sound.playVictory();

  const chConfig = CHAPTERS_CONFIG[activeChapterKey];
  const sorted = [...groupsData].sort((a, b) => b.score - a.score || b.correctCount - a.correctCount);
  const winner = sorted[0];

  document.getElementById('groups-winner-title').textContent =
    `🏆 ¡Ganador: ${winner.name} con ${winner.score} pts!`;
  document.getElementById('groups-winner-subtitle').textContent =
    `Clasificación final tras las 4 Rondas (16 preguntas de ${chConfig.title}):`;
  document.getElementById('groups-winner-quote').textContent = chConfig.victoryQuote;

  const retryBtn = document.getElementById('btn-retry-groups');
  retryBtn.onclick = () => openGroupsSetup(activeChapterKey);

  const podiumEl = document.getElementById('groups-podium-list');
  podiumEl.innerHTML = '';

  const medals = ['🥇 1.° Lugar', '🥈 2.° Lugar', '🥉 3.° Lugar', '🎖️ 4.° Lugar'];
  sorted.forEach((grp, idx) => {
    const item = document.createElement('div');
    item.className = `podium-item ${idx === 0 ? 'first-place' : ''}`;
    item.innerHTML = `
      <span>${medals[idx]} — <strong>${grp.name}</strong> (${grp.correctCount} aciertos)</span>
      <span style="color: var(--gold-primary); font-weight: 900;">${grp.score} pts</span>
    `;
    podiumEl.appendChild(item);
  });
}
