import { EMAIL_SECUNDARIO, TELEFONO_SECUNDARIO } from "@/lib/contact";

export const FISIOTERAPIA_LOCATION =
  "Calle Rafael de Riego, 11, Arganzuela, Madrid";

export const borjaProfile = {
  name: "Borja Estarellas Botín",
  role: "Fisioterapeuta",
  image: "/borja.png",
  heroImageAlt: "Borja Estarellas Botín, fisioterapeuta en Arganzuela, Madrid",
  cardImageAlt: "Borja Estarellas Botín, fisioterapeuta de Bivalente Salud",
  recipientEmail: EMAIL_SECUNDARIO,
  phone: TELEFONO_SECUNDARIO,
  location: FISIOTERAPIA_LOCATION,
  credentials: [
    "Grado en Fisioterapia - Universidad Antonio de Nebrija (2020)",
    "Máster en Fisioterapia Manual Avanzada y Ejercicio Terapéutico - UCM",
    "Máster Experto en ecografía, anatomía palpatoria e investigación del cuerpo humano en vivo - UCM",
  ],
  chips: ["Arganzuela", "Deportiva", "Ecografía"],
};

// Conservamos los slugs existentes. El nombre clínico y el lenguaje del paciente
// se combinan en títulos, descripciones y preguntas visibles, no en meta keywords.
// metaTitle no incluye la marca: la página o getTreatmentMetadata la añade una vez.
const consultationFaq = {
  question: "¿Dónde está la consulta de fisioterapia en Arganzuela?",
  answer:
    "Borja atiende con cita previa en la calle Rafael de Riego, 11, en Arganzuela, Madrid. Puedes explicar tu caso antes de reservar para orientar la primera consulta.",
};

const sessionsFaq = {
  question: "¿Cuántas sesiones de fisioterapia voy a necesitar?",
  answer:
    "Depende del problema, del tiempo de evolución y de los objetivos que quieras recuperar. Tras la valoración se propone un plan y se revisa según los cambios en dolor, movilidad y capacidad para realizar tus actividades.",
};

export const tratamientosSeo = {
  "fisioterapia-domicilio": {
    slug: "fisioterapia-domicilio",
    path: "/fisioterapia/fisioterapia-domicilio",
    navLabel: "Fisioterapia a domicilio",
    cardTitle: "Fisioterapia a domicilio en Madrid",
    cardDescription:
      "Valoración, terapia manual y ejercicio terapéutico en casa para dolor musculoesquelético y recuperación de la movilidad.",
    metaTitle: "Fisioterapia a domicilio en Madrid",
    metaDescription:
      "Fisioterapia a domicilio en Madrid con Borja Estarellas. Valoración, terapia manual y ejercicio para dolor y lesiones. Primera sesión: 50 €.",
    heroTitle: "Fisioterapia a domicilio en Madrid",
    heroSubtitle:
      "Atención en casa para dolor muscular y articular, lesiones y recuperación funcional. Borja adapta la valoración, el tratamiento y los ejercicios a tu situación. Primera sesión: 50 €.",
    heroBadges: ["Madrid", "Atención en casa", "Recuperación funcional"],
    introTitle: "Tratamiento en casa cuando desplazarte resulta difícil",
    introBody:
      "El dolor, una lesión o las dificultades de movilidad pueden complicar acudir a consulta. La fisioterapia a domicilio permite valorar tus limitaciones y trabajar la recuperación en tu propio entorno, con objetivos y ejercicios ajustados a las actividades que necesitas realizar.",
    introPoints: [
      "Dolor de cuello, espalda o articulaciones que limita tu rutina.",
      "Dificultad para desplazarte tras una lesión o por problemas de movilidad.",
      "Necesidad de recuperar autonomía y aprender ejercicios adaptados para casa.",
    ],
    symptoms: [
      "Dolor cervical o lumbar y dificultad para moverte con comodidad.",
      "Rigidez, sobrecarga muscular o limitación articular.",
      "Dolor tendinoso al cargar, caminar o realizar esfuerzos.",
      "Molestias al apoyar el pie o tras un esguince.",
      "Pérdida de fuerza o de confianza al retomar actividades.",
      "Necesidad de pautas de ejercicio y seguimiento individualizados.",
    ],
    approach: [
      {
        title: "Valoración del dolor y la capacidad funcional",
        description:
          "Se revisan tus antecedentes, movilidad, fuerza y actividades cotidianas para acordar los objetivos de la recuperación.",
      },
      {
        title: "Terapia manual y ejercicio en tu entorno",
        description:
          "El tratamiento manual, cuando está indicado, se combina con ejercicios y pautas adaptados al espacio y a los recursos de tu domicilio.",
      },
      {
        title: "Seguimiento y recuperación de autonomía",
        description:
          "Se revisa cómo evolucionas y se ajusta la dificultad de los ejercicios para recuperar las tareas que ahora te cuestan.",
      },
    ],
    modality: {
      presencial:
        "Sesiones a domicilio en Madrid, previa confirmación de cobertura y disponibilidad para tu dirección.",
      online:
        "El seguimiento permite revisar ejercicios y pautas entre visitas. Cuando encaja con tu caso, puede complementarse con una revisión online.",
    },
    professionalBlurb:
      "Borja realiza fisioterapia a domicilio con valoración funcional, terapia manual y ejercicio terapéutico adaptados a cada persona.",
    professionalHighlights: [
      "El plan se ajusta a tus síntomas, tu autonomía y las actividades que necesitas recuperar en casa.",
      "La valoración con ecógrafo está disponible en la consulta de Arganzuela cuando puede aportar información útil.",
    ],
    faqs: [
      {
        question: "¿Qué incluye una sesión de fisioterapia a domicilio?",
        answer:
          "Incluye entrevista y exploración, tratamiento según los hallazgos y ejercicios o pautas para continuar la recuperación. La terapia manual se utiliza cuando encaja con tu caso.",
      },
      {
        question: "¿Cuánto cuesta y cuánto dura la primera sesión?",
        answer:
          "La primera sesión tiene un precio de 50 € y suele durar alrededor de una hora. Confirma al reservar la cobertura para tu dirección y las condiciones de la cita.",
      },
      {
        question: "¿En qué zonas de Madrid se ofrece atención a domicilio?",
        answer:
          "Se atiende en distintas zonas de Madrid. Indica tu dirección o barrio al consultar para confirmar la cobertura y organizar el desplazamiento.",
      },
      {
        question: "¿Necesito preparar material en casa?",
        answer:
          "Normalmente basta con un espacio cómodo para la valoración y el tratamiento. Si necesitas preparar algo concreto, Borja te lo indicará antes de la visita.",
      },
      {
        question: "¿La ecografía también se realiza a domicilio?",
        answer:
          "La valoración con ecógrafo se ofrece en la consulta de Arganzuela. Si puede aportar información para tu caso, se organiza una cita allí.",
      },
    ],
    relatedTreatments: [
      { label: "Cervicalgia y dolor de cuello", href: "/fisioterapia/dolor-cervical" },
      { label: "Lumbalgia y ciática", href: "/fisioterapia/dolor-lumbar" },
      { label: "Esguinces", href: "/fisioterapia/esguinces" },
      { label: "Fascitis plantar", href: "/fisioterapia/fascitis-plantar" },
      { label: "Ecografía en consulta", href: "/fisioterapia/ecografia-musculoesqueletica" },
    ],
  },
  "dolor-cervical": {
    slug: "dolor-cervical",
    path: "/fisioterapia/dolor-cervical",
    navLabel: "Cervicalgia",
    cardTitle: "Cervicalgia y dolor de cuello",
    cardDescription:
      "Tratamiento del dolor cervical, la rigidez y las molestias de cuello y trapecios con terapia manual y ejercicio terapéutico.",
    metaTitle: "Fisioterapia para cervicalgia en Arganzuela, Madrid",
    metaDescription:
      "Tratamiento del dolor de cuello y la cervicalgia en Arganzuela, Madrid. Borja Estarellas: valoración, terapia manual y ejercicio terapéutico.",
    heroTitle: "Fisioterapia para cervicalgia en Arganzuela",
    heroSubtitle:
      "Valoración y tratamiento del dolor de cuello, la rigidez cervical y las molestias de trapecios. Un plan para recuperar movilidad y tolerar mejor el trabajo, el descanso y el ejercicio.",
    heroBadges: ["Consulta en Arganzuela", "Dolor de cuello", "Ejercicio terapéutico"],
    introTitle: "Cervicalgia: entender el dolor de cuello y recuperar movimiento",
    introBody:
      "Cervicalgia significa dolor en la región del cuello. Puede acompañarse de rigidez y molestias hacia los hombros. La valoración tiene en cuenta tus síntomas, la movilidad y factores como las demandas del trabajo, el descanso o los cambios de actividad para plantear un tratamiento individualizado.",
    introPoints: [
      "Dolor al girar la cabeza, conducir o mirar una pantalla.",
      "Rigidez de cuello o molestias recurrentes en la zona cervical y los trapecios.",
      "Dificultad para retomar ejercicio o mantener tus tareas habituales.",
    ],
    symptoms: [
      "Dolor localizado en cuello y región cervical.",
      "Limitación para girar, inclinar o extender la cabeza.",
      "Sensación de tensión en trapecios y cintura escapular.",
      "Molestias tras periodos prolongados en una misma posición.",
      "Interferencia del dolor con el trabajo o el descanso.",
      "Episodios que se repiten y dificultan mantener la actividad.",
    ],
    approach: [
      {
        title: "Exploración cervical y funcional",
        description:
          "Se revisan el movimiento del cuello, la fuerza y los síntomas. Si hay dolor hacia el brazo u hormigueo, se valora su posible origen y la necesidad de otras exploraciones.",
      },
      {
        title: "Terapia manual y ejercicio cervical",
        description:
          "El tratamiento combina las técnicas manuales que puedan ayudarte con movilidad y ejercicios de fuerza y control adaptados a tu tolerancia.",
      },
      {
        title: "Adaptación de tareas y recuperación de actividad",
        description:
          "Se pautan cambios de actividad, pausas y progresiones de ejercicio para que puedas recuperar tus tareas con más confianza.",
      },
    ],
    modality: {
      presencial:
        "Valoración y tratamiento presencial del dolor cervical en la consulta de la calle Rafael de Riego, 11, Arganzuela, Madrid.",
      online:
        "Revisión de ejercicios, movilidad y tolerancia a tus tareas para ajustar el trabajo activo según la evolución.",
    },
    professionalBlurb:
      "Borja aborda la cervicalgia con exploración clínica, terapia manual y ejercicio terapéutico, teniendo en cuenta las actividades que quieres recuperar.",
    faqs: [
      {
        question: "¿Cervicalgia y dolor de cuello significan lo mismo?",
        answer:
          "Cervicalgia es el término clínico para el dolor en la región cervical. Describe la zona que duele, pero la exploración es necesaria para entender sus características y decidir el tratamiento.",
      },
      {
        question: "¿Se puede tratar el dolor de cuello relacionado con el trabajo?",
        answer:
          "Sí. Se valora cómo respondes a tus tareas y se combinan ejercicios, variación de posturas y tratamiento cuando está indicado. El objetivo es mejorar tu capacidad para trabajar, sin atribuir todo el dolor a una única postura.",
      },
      {
        question: "¿Necesito una ecografía para tratar el dolor cervical?",
        answer:
          "No de forma habitual. La entrevista y la exploración orientan la valoración. El ecógrafo puede aportar información sobre algunos tejidos blandos, pero no es la prueba para estudiar los discos cervicales o la médula.",
      },
      consultationFaq,
      sessionsFaq,
    ],
    relatedTreatments: [
      { label: "Dolor miofascial y contracturas", href: "/fisioterapia/contracturas" },
      { label: "Lumbalgia y ciática", href: "/fisioterapia/dolor-lumbar" },
      { label: "Fisioterapia deportiva", href: "/fisioterapia/lesiones-deportivas" },
    ],
  },
  "dolor-lumbar": {
    slug: "dolor-lumbar",
    path: "/fisioterapia/dolor-lumbar",
    navLabel: "Lumbalgia y ciática",
    cardTitle: "Lumbalgia, dolor lumbar y ciática",
    cardDescription:
      "Valoración del dolor de la zona baja de la espalda y de los síntomas hacia la pierna, con ejercicio y recuperación progresiva de la actividad.",
    metaTitle: "Fisioterapia para lumbalgia y ciática en Arganzuela",
    metaDescription:
      "Fisioterapia para dolor lumbar, lumbalgia y ciática en Arganzuela, Madrid. Valoración con Borja Estarellas y ejercicio adaptado a tu caso.",
    heroTitle: "Fisioterapia para lumbalgia y ciática en Arganzuela",
    heroSubtitle:
      "Tratamiento del dolor lumbar y valoración de las molestias que se extienden hacia la pierna. Recupera movimiento y fuerza con educación, ejercicio terapéutico y un plan progresivo.",
    heroBadges: ["Consulta en Arganzuela", "Dolor lumbar", "Recuperación activa"],
    introTitle: "Lumbalgia y dolor irradiado: una valoración adaptada a tus síntomas",
    introBody:
      "La lumbalgia es el dolor de la parte baja de la espalda. Puede aparecer en un episodio reciente o mantenerse en el tiempo. Si se acompaña de dolor hacia la pierna, hormigueo o debilidad, se exploran también esos síntomas: no todo dolor de pierna es ciática ni requiere el mismo abordaje.",
    introPoints: [
      "Dolor lumbar al agacharte, caminar, cargar peso o permanecer sentado.",
      "Episodios de lumbalgia que se repiten o dificultan tu rutina.",
      "Dolor hacia la pierna que necesita una valoración específica.",
    ],
    symptoms: [
      "Dolor o rigidez en la región lumbar.",
      "Dificultad para agacharte, incorporarte o levantar objetos.",
      "Molestias al estar sentado, caminar o mantener una posición.",
      "Dolor que se extiende hacia glúteo o pierna.",
      "Limitación para entrenar o realizar tareas cotidianas.",
      "Inseguridad al moverte tras episodios repetidos de dolor.",
    ],
    approach: [
      {
        title: "Valoración lumbar y de los síntomas hacia la pierna",
        description:
          "Se revisan antecedentes, movimientos, fuerza y limitaciones. Los síntomas neurológicos se exploran para orientar el tratamiento o una derivación si es necesaria.",
      },
      {
        title: "Ejercicio terapéutico y recuperación del movimiento",
        description:
          "Se establece una progresión de movilidad, fuerza y actividad ajustada a tu tolerancia. La terapia manual puede utilizarse como complemento.",
      },
      {
        title: "Vuelta a tus tareas y gestión de los episodios",
        description:
          "Se trabajan las actividades que necesitas recuperar y pautas para manejar los cambios en los síntomas sin depender de un reposo prolongado.",
      },
    ],
    modality: {
      presencial:
        "Fisioterapia para dolor lumbar en la consulta de Arganzuela, Madrid. Si desplazarte resulta difícil, puedes consultar la atención a domicilio.",
      online:
        "Seguimiento del ejercicio y de la tolerancia al esfuerzo para ajustar el plan según la respuesta de tu espalda.",
    },
    professionalBlurb:
      "Borja combina valoración clínica, educación y ejercicio terapéutico para recuperar actividad en personas con dolor lumbar.",
    faqs: [
      {
        question: "¿Se trata la lumbalgia aunque lleve meses con dolor?",
        answer:
          "Sí. Se valoran tus limitaciones actuales y los factores que influyen en la actividad para proponer un plan de ejercicio y recuperación funcional. Los objetivos se ajustan a tu situación y a la evolución.",
      },
      {
        question: "¿La ciática es lo mismo que el dolor lumbar?",
        answer:
          "No. La ciática se refiere a síntomas relacionados con la irritación de raíces nerviosas que pueden producir dolor hacia la pierna. Puede acompañarse de dolor lumbar, pero requiere una exploración específica.",
      },
      {
        question: "¿El ecógrafo permite ver una hernia discal lumbar?",
        answer:
          "La ecografía musculoesquelética no es la prueba indicada para estudiar los discos lumbares o confirmar una hernia. En muchos casos la valoración es clínica; si se necesita otra prueba de imagen, se orienta la consulta médica correspondiente.",
      },
      consultationFaq,
      sessionsFaq,
    ],
    relatedTreatments: [
      { label: "Dolor miofascial y contracturas", href: "/fisioterapia/contracturas" },
      { label: "Fisioterapia deportiva y readaptación", href: "/fisioterapia/lesiones-deportivas" },
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
    ],
  },
  tendinopatias: {
    slug: "tendinopatias",
    path: "/fisioterapia/tendinopatias",
    navLabel: "Tendinopatías",
    cardTitle: "Tendinopatías y tendinitis",
    cardDescription:
      "Tratamiento del dolor de tendón en hombro, codo, rodilla o Aquiles. Valoración clínica, ecografía cuando está indicada y ejercicio progresivo.",
    metaTitle: "Tendinopatías y tendinitis en Arganzuela, Madrid",
    metaDescription:
      "Fisioterapia para tendinitis y tendinopatías en Arganzuela. Hombro, codo, rodilla y Aquiles: valoración, ecografía si procede y ejercicio progresivo.",
    heroTitle: "Tratamiento de tendinopatías y tendinitis en Arganzuela",
    heroSubtitle:
      "Dolor en el tendón de Aquiles, el tendón rotuliano, el hombro o el codo. Valoración funcional y ecografía musculoesquelética cuando aporta información para orientar tu recuperación.",
    heroBadges: ["Consulta en Arganzuela", "Ecografía si está indicada", "Carga progresiva"],
    introTitle: "Dolor de tendón: de la valoración a recuperar la capacidad de carga",
    introBody:
      "Muchas personas consultan por una tendinitis. El término tendinopatía describe un problema del tendón con dolor y pérdida de función, sin asumir que todo se debe a inflamación. Se valora qué actividades te molestan, cuánta carga toleras y cómo organizar el ejercicio para recuperar capacidad.",
    introPoints: [
      "Dolor en el hombro al levantar el brazo o trabajar por encima de la cabeza.",
      "Molestias de codo al agarrar, cargar o hacer deporte, como en la epicondilalgia o codo de tenista.",
      "Dolor del tendón rotuliano o del tendón de Aquiles al correr, saltar o subir escaleras.",
    ],
    symptoms: [
      "Dolor localizado en una región tendinosa durante el esfuerzo.",
      "Rigidez al empezar a moverte o después de descansar.",
      "Molestias al agarrar objetos, empujar o levantar el brazo.",
      "Dolor al correr, saltar o aumentar la intensidad del entrenamiento.",
      "Pérdida de fuerza o de tolerancia a cargas habituales.",
      "Síntomas que reaparecen al retomar la actividad demasiado deprisa.",
    ],
    approach: [
      {
        title: "Valoración clínica y ecografía del tendón cuando procede",
        description:
          "Se exploran fuerza, dolor y tolerancia a la carga. El ecógrafo puede ayudar a observar el tendón y tejidos próximos; los hallazgos se relacionan con tus síntomas y la exploración.",
      },
      {
        title: "Ejercicio terapéutico y dosificación de cargas",
        description:
          "Se pauta un programa de fuerza adaptado al tendón y a la respuesta al esfuerzo. El tratamiento manual puede complementar el trabajo activo cuando es útil.",
      },
      {
        title: "Progresión hacia tu actividad y tu deporte",
        description:
          "La recuperación se revisa según lo que puedes hacer y tolerar. Se ajustan volumen, intensidad y tareas para volver progresivamente al trabajo o al entrenamiento.",
      },
    ],
    modality: {
      presencial:
        "Tratamiento de tendinopatías en Arganzuela, con ecógrafo disponible en consulta cuando la valoración lo requiere.",
      online:
        "Seguimiento de ejercicios, respuesta al esfuerzo y progresión de cargas para adaptar el plan a tu evolución.",
    },
    professionalBlurb:
      "Borja combina valoración funcional, formación en ecografía y ejercicio terapéutico para orientar la recuperación del dolor tendinoso.",
    faqs: [
      {
        question: "¿Tendinitis y tendinopatía son lo mismo?",
        answer:
          "Tendinitis es una denominación habitual que hace referencia a inflamación. Tendinopatía es un término más amplio para el dolor y la alteración de la función del tendón. La exploración permite adaptar el tratamiento sin depender solo del nombre del diagnóstico.",
      },
      {
        question: "¿Qué aporta la ecografía en una lesión de tendón?",
        answer:
          "Permite observar la estructura del tendón y algunos tejidos próximos, también durante ciertos movimientos. Aporta información complementaria: una imagen por sí sola no explica todo el dolor ni decide cuánto ejercicio puedes hacer.",
      },
      {
        question: "¿Tratáis el codo de tenista, el Aquiles y el tendón rotuliano?",
        answer:
          "Se valoran las tendinopatías de codo, Aquiles y tendón rotuliano, además de las del hombro. Cada localización necesita ejercicios y una progresión de carga adaptados a sus demandas.",
      },
      {
        question: "¿Tengo que dejar de entrenar si tengo una tendinitis?",
        answer:
          "Depende de tus síntomas y del tipo de actividad. Con frecuencia se puede ajustar la carga y mantener parte del entrenamiento, mientras se pauta ejercicio específico. Tras una lesión repentina, primero se valora qué ha ocurrido.",
      },
      sessionsFaq,
    ],
    relatedTreatments: [
      { label: "Ecografía musculoesquelética", href: "/fisioterapia/ecografia-musculoesqueletica" },
      { label: "Fisioterapia deportiva y readaptación", href: "/fisioterapia/lesiones-deportivas" },
      { label: "Fasciopatía plantar y dolor de talón", href: "/fisioterapia/fascitis-plantar" },
    ],
  },
  contracturas: {
    slug: "contracturas",
    path: "/fisioterapia/contracturas",
    navLabel: "Contracturas",
    cardTitle: "Dolor miofascial y contracturas musculares",
    cardDescription:
      "Abordaje de contracturas, sobrecargas y dolor muscular con valoración del movimiento, terapia manual y ejercicio adaptado.",
    metaTitle: "Fisioterapia para contracturas en Arganzuela, Madrid",
    metaDescription:
      "Tratamiento de contracturas, sobrecargas y dolor miofascial en Arganzuela, Madrid. Borja Estarellas: terapia manual y ejercicio terapéutico.",
    heroTitle: "Fisioterapia para contracturas y dolor miofascial en Arganzuela",
    heroSubtitle:
      "Valoración del dolor muscular, la sensación de tensión y las sobrecargas que limitan tu movimiento. Tratamiento manual y ejercicio para recuperar las actividades que ahora te molestan.",
    heroBadges: ["Consulta en Arganzuela", "Dolor muscular", "Terapia manual y ejercicio"],
    introTitle: "Contracturas y sobrecarga: valorar el dolor muscular en su contexto",
    introBody:
      "La sensación de nudo o tensión muscular puede aparecer después del esfuerzo o junto a periodos de menor actividad, estrés o cambios de rutina. La valoración ayuda a diferenciar el dolor muscular de otros problemas y a plantear un tratamiento que combine alivio y recuperación de la capacidad de movimiento.",
    introPoints: [
      "Tensión o dolor recurrente en trapecios, espalda u otras zonas musculares.",
      "Molestias después de entrenar o de mantener tareas exigentes.",
      "Necesidad de recuperar movilidad y ajustar la actividad que agrava los síntomas.",
    ],
    symptoms: [
      "Dolor muscular localizado o sensación de tensión.",
      "Rigidez o tirantez al mover una zona.",
      "Sensibilidad a la presión en la musculatura.",
      "Molestias que se perciben también en zonas próximas.",
      "Sobrecarga después de entrenamientos o tareas repetidas.",
      "Limitación para descansar o realizar tus actividades habituales.",
    ],
    approach: [
      {
        title: "Valoración del dolor muscular y del movimiento",
        description:
          "Se exploran movilidad, fuerza, sensibilidad y contexto de aparición de los síntomas para orientar el abordaje de la sobrecarga y el dolor miofascial.",
      },
      {
        title: "Terapia manual y trabajo activo",
        description:
          "Las técnicas manuales que puedan aliviar tus síntomas se combinan con movilidad y ejercicios de fuerza ajustados a tu tolerancia.",
      },
      {
        title: "Adaptación de cargas y seguimiento",
        description:
          "Se revisan entrenamiento, pausas y tareas repetidas para ajustar la exposición al esfuerzo y recuperar capacidad de forma progresiva.",
      },
    ],
    modality: {
      presencial:
        "Atención presencial para contracturas y dolor muscular en Arganzuela, con posibilidad de consultar la modalidad a domicilio.",
      online:
        "Revisión de movilidad, ejercicios y respuesta a las tareas para ajustar el trabajo entre sesiones.",
    },
    professionalBlurb:
      "Borja aborda el dolor miofascial y las sobrecargas con valoración del movimiento, terapia manual y ejercicio terapéutico.",
    faqs: [
      {
        question: "¿El tratamiento de una contractura es solo un masaje?",
        answer:
          "Las técnicas manuales pueden ayudar a aliviar síntomas, pero el plan también puede incluir ejercicios y cambios en la dosificación del esfuerzo. Se decide según la exploración y las actividades que quieres recuperar.",
      },
      {
        question: "¿Por qué se me carga siempre la misma zona?",
        answer:
          "Pueden influir las demandas de tus tareas, el descanso, el entrenamiento o la capacidad actual de la zona. La valoración permite revisar esos factores y proponer ajustes individualizados.",
      },
      {
        question: "¿Necesito ecografía si noto una contractura?",
        answer:
          "No necesariamente. La exploración clínica suele orientar el abordaje. Si la historia y los síntomas hacen pensar en una lesión muscular concreta, Borja valorará si el ecógrafo puede aportar información.",
      },
      consultationFaq,
      sessionsFaq,
    ],
    relatedTreatments: [
      { label: "Cervicalgia y dolor de cuello", href: "/fisioterapia/dolor-cervical" },
      { label: "Lumbalgia y ciática", href: "/fisioterapia/dolor-lumbar" },
      { label: "Fisioterapia deportiva", href: "/fisioterapia/lesiones-deportivas" },
    ],
  },
  esguinces: {
    slug: "esguinces",
    path: "/fisioterapia/esguinces",
    navLabel: "Esguinces",
    cardTitle: "Esguinces y lesiones ligamentosas",
    cardDescription:
      "Recuperación de movilidad, fuerza y estabilidad tras un esguince, especialmente de tobillo. Ecografía como apoyo cuando está indicada.",
    metaTitle: "Fisioterapia para esguinces en Arganzuela, Madrid",
    metaDescription:
      "Fisioterapia para esguinces, especialmente de tobillo, en Arganzuela. Valoración, ecografía si procede y ejercicio para recuperar fuerza y estabilidad.",
    heroTitle: "Fisioterapia para esguinces en Arganzuela",
    heroSubtitle:
      "Recuperación funcional tras lesiones ligamentosas, con especial atención al esguince de tobillo. Un plan para volver a apoyar, caminar y practicar deporte según tu evolución.",
    heroBadges: ["Consulta en Arganzuela", "Esguince de tobillo", "Fuerza y estabilidad"],
    introTitle: "Después de un esguince: recuperar apoyo, movilidad y confianza",
    introBody:
      "Un esguince es una lesión de los ligamentos de una articulación. Tras la fase inicial pueden persistir dolor, rigidez o sensación de inestabilidad. La fisioterapia revisa estas limitaciones y pauta una recuperación progresiva del movimiento, la fuerza y el control de la articulación.",
    introPoints: [
      "Dolor o rigidez al caminar después de un esguince de tobillo.",
      "Sensación de inseguridad o esguinces que se repiten.",
      "Dificultad para volver a correr, saltar o cambiar de dirección.",
    ],
    symptoms: [
      "Dolor al apoyar o mover la articulación lesionada.",
      "Hinchazón o sensibilidad que persisten tras el esguince.",
      "Pérdida de movilidad, especialmente al cargar peso.",
      "Disminución de fuerza y control del apoyo.",
      "Sensación de que el tobillo falla o se vuelve a torcer.",
      "Limitación para caminar deprisa, correr o retomar el deporte.",
    ],
    approach: [
      {
        title: "Exploración de la lesión y ecografía si aporta información",
        description:
          "Se revisan el mecanismo de lesión, el apoyo, la movilidad y la estabilidad. La ecografía puede complementar la valoración de ligamentos accesibles, sin sustituir otras pruebas cuando son necesarias.",
      },
      {
        title: "Movilidad, fuerza y control del apoyo",
        description:
          "El ejercicio se adapta a la fase de recuperación e incluye progresiones de carga, equilibrio y control de la articulación.",
      },
      {
        title: "Vuelta a caminar, correr y cambiar de dirección",
        description:
          "Se introducen tareas funcionales y deportivas según la respuesta al esfuerzo, para valorar qué puedes retomar y qué necesita más trabajo.",
      },
    ],
    modality: {
      presencial:
        "Valoración y recuperación de esguinces en la consulta de Arganzuela. El ecógrafo está disponible cuando puede complementar la exploración.",
      online:
        "Seguimiento de ejercicios, tolerancia al apoyo y progresión de tareas para ajustar la recuperación entre sesiones.",
    },
    professionalBlurb:
      "Borja trabaja la recuperación de esguinces con valoración funcional y progresiones de movilidad, fuerza y control articular.",
    faqs: [
      {
        question: "¿Cuándo puedo empezar fisioterapia tras un esguince?",
        answer:
          "La valoración puede orientar los primeros pasos y adaptar el trabajo a la fase de lesión. Si tras el traumatismo no puedes apoyar, hay deformidad o dolor óseo importante, primero se necesita valoración médica para descartar otras lesiones.",
      },
      {
        question: "¿La ecografía sirve para valorar un esguince de tobillo?",
        answer:
          "Puede ayudar a observar algunos ligamentos y tejidos superficiales. Su utilidad depende de qué se necesite explorar; no sustituye una radiografía cuando hay sospecha de fractura ni permite valorar todas las estructuras.",
      },
      {
        question: "¿Por qué me sigo torciendo el tobillo después de recuperarme?",
        answer:
          "Puede persistir pérdida de fuerza, movilidad o control del apoyo. Se valoran estas capacidades y las demandas de tu actividad para orientar el trabajo de recuperación y estabilidad.",
      },
      consultationFaq,
      sessionsFaq,
    ],
    relatedTreatments: [
      { label: "Fisioterapia deportiva y readaptación", href: "/fisioterapia/lesiones-deportivas" },
      { label: "Ecografía musculoesquelética", href: "/fisioterapia/ecografia-musculoesqueletica" },
      { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
    ],
  },
  "lesiones-deportivas": {
    slug: "lesiones-deportivas",
    path: "/fisioterapia/lesiones-deportivas",
    navLabel: "Fisioterapia deportiva",
    cardTitle: "Fisioterapia deportiva y readaptación",
    cardDescription:
      "Recuperación de lesiones musculares, tendinosas y articulares con valoración funcional, ecografía si procede y vuelta progresiva al deporte.",
    metaTitle: "Fisioterapia deportiva en Arganzuela, Madrid",
    metaDescription:
      "Fisioterapia deportiva en Arganzuela con Borja Estarellas. Lesiones, ecografía si está indicada, ejercicio y readaptación para volver a entrenar.",
    heroTitle: "Fisioterapia deportiva y readaptación en Arganzuela",
    heroSubtitle:
      "Tratamiento de lesiones deportivas y recuperación de fuerza, movilidad y tolerancia al esfuerzo. Valoración clínica y ecografía cuando aporta información para planificar la vuelta al entrenamiento.",
    heroBadges: ["Consulta en Arganzuela", "Lesiones musculares y tendinosas", "Readaptación deportiva"],
    introTitle: "De la lesión a las demandas reales de tu deporte",
    introBody:
      "El objetivo de la fisioterapia deportiva es ayudarte a recuperar las capacidades que necesitas para entrenar. El plan tiene en cuenta tu lesión, el nivel de actividad previo y las demandas de tu deporte, tanto si practicas pádel, corres o entrenas fuerza como si realizas otras actividades.",
    introPoints: [
      "Molestias musculares, articulares o tendinosas que limitan el entrenamiento.",
      "Recuperación después de una lesión o de un periodo de inactividad.",
      "Necesidad de planificar la vuelta al deporte y ajustar las cargas.",
    ],
    symptoms: [
      "Dolor durante el entrenamiento o después del esfuerzo.",
      "Pérdida de fuerza, movilidad o capacidad para repetir gestos.",
      "Molestias que reaparecen al aumentar volumen o intensidad.",
      "Limitación tras una lesión muscular, tendinosa o ligamentosa.",
      "Inseguridad para correr, saltar, golpear o cambiar de dirección.",
      "Dificultad para pasar de los ejercicios de recuperación al entrenamiento habitual.",
    ],
    approach: [
      {
        title: "Valoración de la lesión y de las demandas deportivas",
        description:
          "Se exploran movimiento, fuerza y tareas relevantes para tu deporte. La ecografía puede complementar la valoración de lesiones musculares o tendinosas cuando está indicada.",
      },
      {
        title: "Tratamiento y recuperación de capacidades",
        description:
          "El ejercicio terapéutico es parte del plan para recuperar fuerza y tolerancia al esfuerzo. La terapia manual se integra cuando puede ayudar a manejar los síntomas.",
      },
      {
        title: "Readaptación y vuelta progresiva al entrenamiento",
        description:
          "Se progresan las tareas hacia las demandas de tu deporte y se revisan los cambios de carga según tu respuesta y tus objetivos.",
      },
    ],
    modality: {
      presencial:
        "Fisioterapia deportiva en Arganzuela, Madrid, con ecógrafo en consulta para complementar la valoración cuando está indicado.",
      online:
        "Revisión de ejercicios, cargas y tolerancia al entrenamiento para ajustar las progresiones durante la readaptación.",
    },
    professionalBlurb:
      "Borja integra fisioterapia musculoesquelética, ejercicio terapéutico y valoración con ecografía cuando procede para orientar la recuperación deportiva.",
    faqs: [
      {
        question: "¿La fisioterapia deportiva es solo para deportistas profesionales?",
        answer:
          "No. Se adapta a cualquier nivel de actividad. Lo relevante es qué necesitas recuperar para tu deporte y qué limita ahora tu entrenamiento.",
      },
      {
        question: "¿Qué aporta el ecógrafo si sospecho una lesión muscular?",
        answer:
          "Puede ayudar a observar músculos y tendones accesibles y complementar la exploración. La indicación y el momento de uso dependen de la lesión; las imágenes se valoran junto con la función y los síntomas.",
      },
      {
        question: "¿Cuál es la diferencia entre tratamiento y readaptación deportiva?",
        answer:
          "El tratamiento aborda los síntomas y las limitaciones actuales. La readaptación progresa hacia las exigencias de tu deporte, como fuerza, carrera, saltos o cambios de dirección. Ambas partes pueden solaparse durante la recuperación.",
      },
      {
        question: "¿Cómo se decide cuándo volver a entrenar?",
        answer:
          "Se revisan síntomas, fuerza y tolerancia a tareas de tu deporte. El plan se ajusta a la evolución y, cuando procede, a las indicaciones de otros profesionales que participan en tu recuperación.",
      },
      consultationFaq,
    ],
    relatedTreatments: [
      { label: "Tendinopatías y tendinitis", href: "/fisioterapia/tendinopatias" },
      { label: "Esguinces y lesiones ligamentosas", href: "/fisioterapia/esguinces" },
      { label: "Ecografía musculoesquelética", href: "/fisioterapia/ecografia-musculoesqueletica" },
      { label: "Fascitis plantar", href: "/fisioterapia/fascitis-plantar" },
    ],
  },
  "fascitis-plantar": {
    slug: "fascitis-plantar",
    path: "/fisioterapia/fascitis-plantar",
    navLabel: "Fascitis plantar",
    cardTitle: "Fasciopatía plantar y dolor de talón",
    cardDescription:
      "Tratamiento de la fascitis plantar con valoración del apoyo, ecografía cuando está indicada y ejercicio para recuperar tolerancia al caminar y correr.",
    metaTitle: "Fisioterapia para fascitis plantar en Arganzuela",
    metaDescription:
      "Tratamiento de fascitis plantar y dolor de talón en Arganzuela, Madrid. Valoración, ecografía si procede y ejercicios con Borja Estarellas.",
    heroTitle: "Fisioterapia para fascitis plantar en Arganzuela",
    heroSubtitle:
      "Tratamiento de la fasciopatía plantar y del dolor de talón que aparece al apoyar. Valoración clínica, ecografía cuando aporta información y ejercicio adaptado para volver a caminar o correr.",
    heroBadges: ["Consulta en Arganzuela", "Dolor de talón", "Ecografía si está indicada"],
    introTitle: "Fascitis o fasciopatía plantar: valorar el dolor al apoyar",
    introBody:
      "La fascitis plantar, también denominada fasciopatía plantar, suele producir dolor en la planta del talón, especialmente en los primeros pasos o tras periodos de descanso. No todo dolor de talón tiene este origen: se exploran el pie, la movilidad del tobillo y la tolerancia a las cargas para orientar el tratamiento.",
    introPoints: [
      "Dolor bajo el talón al levantarte o al empezar a caminar.",
      "Molestias al estar mucho tiempo de pie o aumentar las caminatas.",
      "Dificultad para correr, entrenar o recuperar el apoyo con comodidad.",
    ],
    symptoms: [
      "Dolor en la planta del talón o hacia el arco del pie.",
      "Molestias en los primeros pasos después de descansar.",
      "Sensibilidad al apoyar o al presionar la zona dolorosa.",
      "Dolor relacionado con periodos prolongados de pie.",
      "Limitación para correr, caminar deprisa o aumentar distancias.",
      "Cambios en tu actividad por temor a que vuelva a doler el pie.",
    ],
    approach: [
      {
        title: "Valoración del pie y ecografía de la fascia si procede",
        description:
          "Se revisan la localización del dolor, el apoyo, la movilidad y la fuerza. La ecografía puede aportar información sobre la fascia plantar y tejidos próximos, siempre relacionada con la exploración.",
      },
      {
        title: "Ejercicio y adaptación de las cargas del pie",
        description:
          "Se pautan ejercicios y ajustes en la actividad para mejorar progresivamente la tolerancia del pie al apoyo y al esfuerzo.",
      },
      {
        title: "Vuelta a caminar y correr según tu evolución",
        description:
          "Se revisan la respuesta a las caminatas y al entrenamiento para adaptar volumen e intensidad a las capacidades que vas recuperando.",
      },
    ],
    modality: {
      presencial:
        "Tratamiento de fascitis plantar en Arganzuela, Madrid, con ecógrafo disponible en consulta cuando puede ayudar a completar la valoración.",
      online:
        "Seguimiento de ejercicios y de la tolerancia al apoyo para ajustar la actividad y las progresiones.",
    },
    professionalBlurb:
      "Borja combina exploración funcional, ecografía cuando está indicada y ejercicio terapéutico para abordar el dolor plantar.",
    faqs: [
      {
        question: "¿Fascitis plantar y fasciopatía plantar se refieren al mismo problema?",
        answer:
          "Son denominaciones utilizadas para el cuadro de dolor relacionado con la fascia plantar. Fasciopatía es un término más amplio, que no atribuye todos los casos exclusivamente a inflamación. La valoración permite distinguirlo de otras causas de dolor de talón.",
      },
      {
        question: "¿Es útil la ecografía para la fascitis plantar?",
        answer:
          "Puede ayudar a observar la fascia y los tejidos próximos cuando la valoración lo requiere. Los cambios en la imagen se interpretan junto con el dolor y la capacidad para apoyar; no determinan por sí solos la gravedad o el tratamiento.",
      },
      {
        question: "¿El dolor de talón significa que tengo un espolón?",
        answer:
          "No necesariamente. Puede haber dolor sin espolón y espolones que no producen síntomas. Se valora el conjunto del cuadro para orientar el tratamiento, en lugar de atribuir el dolor solo a una imagen.",
      },
      {
        question: "¿Puedo seguir caminando o corriendo con fascitis plantar?",
        answer:
          "La actividad se ajusta a tus síntomas y a la respuesta al esfuerzo. Puede ser necesario reducir temporalmente distancias o intensidad y combinarlo con ejercicio específico para recuperar tolerancia.",
      },
      sessionsFaq,
    ],
    relatedTreatments: [
      { label: "Ecografía musculoesquelética", href: "/fisioterapia/ecografia-musculoesqueletica" },
      { label: "Tendinopatías y tendinitis", href: "/fisioterapia/tendinopatias" },
      { label: "Fisioterapia deportiva", href: "/fisioterapia/lesiones-deportivas" },
    ],
  },
  "ecografia-musculoesqueletica": {
    slug: "ecografia-musculoesqueletica",
    path: "/fisioterapia/ecografia-musculoesqueletica",
    navLabel: "Ecografía musculoesquelética",
    cardTitle: "Ecografía musculoesquelética",
    cardDescription:
      "Valoración con ecógrafo de músculos, tendones y otros tejidos blandos para complementar la exploración clínica y orientar la fisioterapia.",
    metaTitle: "Ecografía musculoesquelética en Arganzuela, Madrid",
    metaDescription:
      "Ecografía musculoesquelética en Arganzuela con Borja Estarellas. Valoración de músculos y tendones como apoyo a la exploración y al plan de fisioterapia.",
    heroTitle: "Ecografía musculoesquelética en Arganzuela",
    heroSubtitle:
      "Borja dispone de ecógrafo en consulta para observar músculos, tendones y otros tejidos blandos en tiempo real. Una herramienta que complementa la valoración clínica cuando puede aportar información útil para tu lesión.",
    heroBadges: ["Ecógrafo en consulta", "Valoración dinámica", "Sin radiación ionizante"],
    introTitle: "Qué aporta el ecógrafo a tu consulta de fisioterapia",
    introBody:
      "La ecografía musculoesquelética utiliza ondas sonoras para obtener imágenes de tejidos blandos, también durante algunos movimientos. Puede ayudar a valorar determinadas lesiones musculares, tendinosas o ligamentosas. Su utilidad depende de la zona y de la pregunta clínica: los hallazgos se relacionan con tus síntomas, la exploración y las tareas que necesitas recuperar.",
    introPoints: [
      "Valoración de músculos y tendones accesibles cuando hay sospecha de lesión.",
      "Observación de algunos ligamentos superficiales, bursas y fascia plantar según la zona y la indicación.",
      "Información complementaria para orientar el tratamiento y, cuando procede, revisar la evolución junto con la función.",
    ],
    symptoms: [
      "Dolor tendinoso en hombro, codo, rodilla o tendón de Aquiles.",
      "Dolor muscular localizado tras un esfuerzo o una lesión deportiva.",
      "Molestias persistentes tras ciertos esguinces.",
      "Dolor plantar o de talón que requiere completar la valoración.",
      "Limitación de movimiento que necesita relacionarse con la exploración de los tejidos.",
      "Necesidad de valorar si una imagen puede aportar información al plan de recuperación.",
    ],
    approach: [
      {
        title: "Entrevista y exploración antes de decidir la prueba",
        description:
          "Se revisan el inicio de los síntomas, los antecedentes y la función para decidir si una exploración ecográfica puede responder a una pregunta útil para tu caso.",
      },
      {
        title: "Exploración ecográfica dirigida",
        description:
          "Se observan los tejidos accesibles de la zona de interés y, cuando es útil, su comportamiento durante el movimiento. La exploración se adapta a la estructura que se quiere valorar.",
      },
      {
        title: "Integrar las imágenes en el plan de fisioterapia",
        description:
          "Borja explica qué información aportan las imágenes y la relaciona con tus síntomas y capacidad funcional para orientar el tratamiento o recomendar otra valoración cuando es necesaria.",
      },
    ],
    modality: {
      presencial:
        "Valoración con ecógrafo en la consulta de la calle Rafael de Riego, 11, Arganzuela, Madrid, con cita previa.",
      online:
        "La evolución se revisa también mediante síntomas, movilidad, fuerza y tolerancia a la actividad. Repetir una ecografía depende de si puede aportar información relevante.",
    },
    professionalBlurb:
      "Borja cuenta con formación de máster en ecografía y dispone de ecógrafo en consulta para complementar la valoración en fisioterapia musculoesquelética.",
    professionalHighlights: [
      "La ecografía se utiliza cuando puede aportar información útil, junto con la entrevista, la exploración y las pruebas funcionales.",
      "El plan de recuperación se ajusta a tu evolución clínica y a tus objetivos, integrando las imágenes en el conjunto de la valoración.",
    ],
    faqs: [
      {
        question: "¿Qué se puede ver con una ecografía musculoesquelética?",
        answer:
          "Permite observar músculos, tendones y otros tejidos blandos, como algunas bursas, ligamentos superficiales o la fascia plantar. La visibilidad depende de la estructura, su profundidad y la zona explorada.",
      },
      {
        question: "¿Necesito ecografía en todas las sesiones de fisioterapia?",
        answer:
          "No. Se utiliza si la exploración sugiere que puede aportar información relevante. El seguimiento también se apoya en tus síntomas, movilidad, fuerza y capacidad para realizar actividades.",
      },
      {
        question: "¿La ecografía sustituye a una resonancia o una radiografía?",
        answer:
          "No. Cada prueba permite estudiar estructuras diferentes. La ecografía tiene límites para tejidos profundos y estructuras situadas detrás del hueso; si necesitas otra prueba o una valoración médica, se orientará ese paso.",
      },
      {
        question: "¿El ecógrafo utiliza radiación o duele?",
        answer:
          "Utiliza ondas sonoras, no radiación ionizante. La exploración se realiza con gel y una sonda sobre la piel. Puede resultar molesta la presión sobre una zona dolorosa, por lo que se adapta a tu tolerancia.",
      },
      {
        question: "¿La ecografía sirve para tratar la lesión por sí sola?",
        answer:
          "El ecógrafo obtiene imágenes para valorar los tejidos. El tratamiento se decide con el conjunto de la exploración y puede incluir ejercicio terapéutico, educación y técnicas manuales cuando están indicadas.",
      },
      {
        question: "¿La valoración con ecografía tiene un precio específico?",
        answer:
          "Consulta las condiciones al reservar e indica que te interesa una valoración con ecografía. Borja te orientará sobre su indicación y las condiciones de la cita.",
      },
      consultationFaq,
    ],
    relatedTreatments: [
      { label: "Tendinopatías y tendinitis", href: "/fisioterapia/tendinopatias" },
      { label: "Fisioterapia deportiva y readaptación", href: "/fisioterapia/lesiones-deportivas" },
      { label: "Esguinces y lesiones ligamentosas", href: "/fisioterapia/esguinces" },
      { label: "Fascitis plantar y dolor de talón", href: "/fisioterapia/fascitis-plantar" },
    ],
  },
};

// Catálogo para listados y menús: consulta y ecografía primero; domicilio al final.
export const tratamientosList = [
  "lesiones-deportivas",
  "ecografia-musculoesqueletica",
  "dolor-cervical",
  "dolor-lumbar",
  "tendinopatias",
  "contracturas",
  "esguinces",
  "fascitis-plantar",
  "fisioterapia-domicilio",
].map((slug) => tratamientosSeo[slug]);

export function getTreatment(slug) {
  return Object.hasOwn(tratamientosSeo, slug) ? tratamientosSeo[slug] : undefined;
}

export function getTreatmentMetadata(slug) {
  const treatment = getTreatment(slug);

  if (!treatment) {
    return {
      title: "Fisioterapia en Arganzuela, Madrid | Bivalente Salud",
      description:
        "Fisioterapia musculoesquelética y deportiva en Arganzuela con Borja Estarellas. Ejercicio terapéutico y ecografía cuando está indicada.",
    };
  }

  return {
    title: `${treatment.metaTitle} | Bivalente Salud`,
    description: treatment.metaDescription,
    alternates: { canonical: treatment.path },
  };
}
