import type { Treatment } from "@/types/content";

type CatalogInput = {
  slug: string;
  name: string;
  categorySlug?: string;
  indexable?: boolean;
  clinicalReviewPending?: boolean;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  recognition?: string;
  introSectionTitle?: string;
  whatIs: string;
  patientSectionsHeading?: string;
  patientSectionsIntro?: string;
  patientSections?: Treatment["patientSections"];
  clinicalAdvisory?: Treatment["clinicalAdvisory"];
  evidenceSources?: Treatment["evidenceSources"];
  whenUsed: string;
  limitations: string;
  symptoms: string[];
  plan: Treatment["plan"];
  faq: Treatment["faq"];
  relatedSlugs: string[];
  relatedPathologySlugs: string[];
  clinicOnly?: boolean;
  techniqueSlugs?: string[];
  contactMessage?: string;
};

// Las variantes semánticas son hipótesis de contenido, no métricas de volumen de búsqueda.
const keywordTargets: Record<string, { primary: string; secondary: string[] }> = {
  "terapia-manual": { primary: "terapia manual Madrid", secondary: ["terapia manual Chamberí","fisioterapia manual Almagro"] },
  "ejercicio-terapeutico": { primary: "ejercicio terapéutico Madrid", secondary: ["ejercicio terapéutico Chamberí", "rehabilitación activa Madrid", "readaptación de lesiones Madrid", "ejercicios de rehabilitación"] },
  "fisioterapia-invasiva-ecoguiada": { primary: "fisioterapia invasiva ecoguiada Madrid", secondary: ["técnicas ecoguiadas fisioterapia","fisioterapia invasiva Chamberí"] },
  "masoterapia": { primary: "masaje terapéutico Madrid", secondary: ["masaje descontracturante Madrid", "masaje descontracturante Chamberí", "masaje terapéutico Chamberí", "masoterapia Madrid", "masaje muscular de espalda y cuello"] },
  "estiramientos-asistidos": { primary: "estiramientos asistidos fisioterapia", secondary: ["estiramientos pasivos fisioterapeuta","estiramientos asistidos Madrid"] },
  "movilizaciones-articulares": { primary: "movilización articular fisioterapia", secondary: ["terapia manual articular","movilizaciones articulares Madrid"] },
  "kinesiotape": { primary: "kinesiotape Madrid", secondary: ["vendaje neuromuscular Madrid","kinesiotaping fisioterapia"] },
  "vendaje-funcional": { primary: "vendaje funcional Madrid", secondary: ["vendaje funcional tobillo","vendaje deportivo fisioterapia"] },
  "presion-isquemica": { primary: "presión isquémica puntos gatillo", secondary: ["tratamiento puntos gatillo musculares","presión isquémica fisioterapia"] },
  "drenaje-linfatico-manual": { primary: "drenaje linfático manual Madrid", secondary: ["drenaje linfático Chamberí", "fisioterapia drenaje linfático Madrid", "drenaje linfático y linfedema", "edema y fisioterapia Chamberí", "terapia descongestiva compleja"] },
  "vendaje-multicapa": { primary: "vendaje multicapa fisioterapia", secondary: ["vendaje multicapa Madrid", "vendaje compresivo linfedema", "vendaje compresivo multicapa", "terapia compresiva edema", "compresión para linfedema Madrid"] },
  "fisioterapia-atm": { primary: "fisioterapia ATM Madrid", secondary: ["fisioterapia dolor mandibular","articulación temporomandibular Chamberí"] },
  "ejercicios-estiramiento": { primary: "ejercicios de estiramiento terapéutico", secondary: ["estiramientos activos fisioterapia","ejercicios de flexibilidad"] },
  "ejercicios-control-motor": { primary: "ejercicios de control motor fisioterapia", secondary: ["control motor lumbar","control de movimiento fisioterapia"] },
  "ejercicios-propiocepcion": { primary: "ejercicios de propiocepción", secondary: ["propiocepción tobillo","entrenamiento del equilibrio fisioterapia"] },
  "ejercicios-carga-progresiva": { primary: "carga progresiva fisioterapia", secondary: ["ejercicios para tendinopatías","readaptación de fuerza"] },
  "ejercicios-movilidad": { primary: "ejercicios de movilidad articular", secondary: ["movilidad activa fisioterapia","ejercicios de movilidad funcional"] },
  "puncion-seca": { primary: "punción seca Madrid", secondary: ["punción seca Chamberí", "punción seca puntos gatillo", "fisioterapia punción seca Madrid", "punción seca ecoguiada", "punción seca dolor muscular"] },
  "electrolisis-percutanea-ecoguiada": { primary: "electrólisis percutánea ecoguiada Madrid", secondary: ["EPI fisioterapia Madrid","electrólisis tendinopatías"] },
  "neuromodulacion-percutanea-ecoguiada": { primary: "neuromodulación percutánea Madrid", secondary: ["neuromodulación ecoguiada Chamberí","neuromodulación invasiva fisioterapia"] },
};

// Criterios de valoración específicos: evitan repetir una explicación genérica en todas las páginas.
const assessmentBySlug: Record<string, string> = {
  "terapia-manual": "La elección de una técnica manual depende de la exploración, de cómo se comportan tus síntomas con el movimiento y de tus objetivos. Se revisa su utilidad junto al ejercicio y a las pautas de actividad.",
  "ejercicio-terapeutico": "Se exploran fuerza, movilidad, equilibrio, tolerancia al esfuerzo y actividades concretas para seleccionar ejercicios y una progresión que puedas seguir y revisar.",
  "fisioterapia-invasiva-ecoguiada": "Antes de plantear un procedimiento se revisan historia clínica, exploración, precauciones, alternativas y consentimiento. La ecografía puede complementar la valoración cuando aporta información relevante.",
  "masoterapia": "Se identifican las tareas y cargas relacionadas con la molestia, se explora la región afectada y se acuerda si el masaje puede ser útil como apoyo, además de valorar medidas activas.",
  "estiramientos-asistidos": "Se valora el rango de movimiento y su relación con tus actividades, diferenciando rigidez, dolor y limitaciones que puedan necesitar trabajo activo más que estiramiento pasivo.",
  "movilizaciones-articulares": "Se exploran movilidad activa y pasiva, síntomas y tolerancia articular antes de decidir si las movilizaciones tienen sentido y cómo continuar con ejercicios.",
  "kinesiotape": "Se revisan la piel, el objetivo del vendaje y la respuesta durante la actividad. El vendaje se propone solo si aporta una ayuda temporal y con instrucciones de uso y retirada.",
  "vendaje-funcional": "Se valora la lesión, la estabilidad, la necesidad de soporte y la actividad prevista. El vendaje se combina con recuperación progresiva y no sustituye la exploración de posibles lesiones relevantes.",
  "presion-isquemica": "Se analiza si la sensibilidad muscular localizada guarda relación con el motivo de consulta y si una técnica de presión es apropiada, evitando tratar un punto doloroso sin valorar el conjunto.",
  "drenaje-linfatico-manual": "Es importante conocer el origen del edema y los antecedentes médicos antes de elegir drenaje, compresión u otras medidas; ante una hinchazón sin explicación debe priorizarse la valoración adecuada.",
  "vendaje-multicapa": "Antes de valorar una compresión multicapa deben aclararse la causa del edema, el estado de la piel y las posibles contraindicaciones. La indicación y el seguimiento se individualizan.",
  "fisioterapia-atm": "La exploración considera apertura y desplazamientos mandibulares, dolor al masticar, musculatura, hábitos y repercusión en la función. Si procede, se propone valoración odontológica coordinada.",
  "ejercicios-estiramiento": "Se comprueba qué movimientos resultan limitados y qué objetivos funcionales persigues para seleccionar estiramientos activos adecuados, sin asumir que mayor flexibilidad sea siempre necesaria.",
  "ejercicios-control-motor": "Se observa una tarea concreta que cuesta realizar, se analizan coordinación y tolerancia y se ajustan instrucciones y dificultad para transferir la mejora a actividades habituales.",
  "ejercicios-propiocepcion": "Se exploran equilibrio, control de apoyos y seguridad en movimientos relevantes para decidir si entrenar propiocepción y cómo incrementar gradualmente la dificultad.",
  "ejercicios-carga-progresiva": "Se establece el punto de partida con pruebas funcionales y tolerancia a cargas, y se ajustan intensidad, volumen y recuperación según los objetivos y la respuesta.",
  "ejercicios-movilidad": "Se distingue entre limitación del recorrido, dolor y dificultad para usar el movimiento en tareas reales, antes de seleccionar ejercicios de movilidad activa.",
  "puncion-seca": "Se revisan los síntomas, la exploración muscular, los antecedentes, las precauciones y otras opciones antes de considerar una técnica invasiva. Su indicación no depende únicamente de encontrar una zona sensible.",
  "electrolisis-percutanea-ecoguiada": "Se valora la situación clínica y funcional, especialmente la respuesta a la carga y las alternativas conservadoras. La decisión de usar electrólisis nunca debe basarse solo en una imagen ecográfica.",
  "neuromodulacion-percutanea-ecoguiada": "Se consideran exploración clínica, objetivos funcionales, contraindicaciones, alternativas y consentimiento. La precisión anatómica de la guía ecográfica no implica una respuesta terapéutica garantizada.",
};

function catalogTreatment(input: CatalogInput): Treatment {
  return {
    slug: input.slug,
    name: input.name,
    kind: input.techniqueSlugs ? "category" : "technique",
    categorySlug: input.categorySlug,
    indexable: input.indexable ?? true,
    clinicalReviewPending: input.clinicalReviewPending,
    cardDescription: input.description,
    updatedAt: "2026-11-08",
    seo: {
      title: input.title,
      description: input.description,
      primaryKeyword: keywordTargets[input.slug]?.primary ?? input.title.toLocaleLowerCase("es-ES"),
      secondaryKeywords: keywordTargets[input.slug]?.secondary ?? [],
    },
    hero: { eyebrow: input.eyebrow, h1: input.title, intro: input.intro },
    recognition: input.recognition ?? input.description,
    introSectionTitle: input.introSectionTitle,
    whatIs: input.whatIs,
    patientSectionsHeading: input.patientSectionsHeading,
    patientSectionsIntro: input.patientSectionsIntro,
    patientSections: input.patientSections,
    clinicalAdvisory: input.clinicalAdvisory,
    evidenceSources: input.evidenceSources,
    whenUsed: input.whenUsed,
    limitations: input.limitations,
    symptoms: input.symptoms,
    assessment: assessmentBySlug[input.slug] ?? "La valoración individual orienta la elección de técnicas y ejercicios según los síntomas y objetivos.",
    plan: input.plan,
    homeTreatment: input.clinicOnly ? "Esta valoración o procedimiento se plantea en consulta presencial. La idoneidad, la técnica y la disponibilidad se revisan antes de reservar." : "La modalidad se decide según el caso, la técnica necesaria y la disponibilidad. Puedes consultar si la atención a domicilio en Madrid encaja contigo.",
    clinicTreatment: "Atención presencial con cita previa en la consulta independiente de Borja dentro de Meraki Salud Chamberí, en Almagro.",
    clinicOnly: input.clinicOnly,
    faq: input.faq,
    relatedSlugs: input.relatedSlugs,
    relatedPathologySlugs: input.relatedPathologySlugs,
    techniqueSlugs: input.techniqueSlugs,
    contactMessage: input.contactMessage ?? `Me gustaría solicitar una valoración para saber qué enfoque de fisioterapia puede encajar con mi caso relacionado con ${input.name.toLowerCase()}.`,
  };
}

const manualTechniques = ["masoterapia", "estiramientos-asistidos", "movilizaciones-articulares", "kinesiotape", "vendaje-funcional", "presion-isquemica", "drenaje-linfatico-manual", "vendaje-multicapa", "fisioterapia-atm"];
const exerciseTechniques = ["ejercicios-estiramiento", "ejercicios-control-motor", "ejercicios-propiocepcion", "ejercicios-carga-progresiva", "ejercicios-movilidad"];
const invasiveTechniques = ["ecografia-musculoesqueletica", "puncion-seca", "electrolisis-percutanea-ecoguiada", "neuromodulacion-percutanea-ecoguiada"];

export const treatmentCategories: Treatment[] = [
  catalogTreatment({
    slug: "terapia-manual", name: "Terapia manual", title: "Terapia manual en Madrid", description: "Fisioterapia manual integrada en una valoración y un plan individual para dolor, movilidad y función.", eyebrow: "Terapia manual · Madrid", intro: "Técnicas manuales integradas con valoración, ejercicio y pautas claras para tu recuperación.",
    whatIs: "La terapia manual reúne técnicas realizadas por el fisioterapeuta sobre músculos, articulaciones y tejidos blandos. Puede utilizarse para modular síntomas, facilitar movimiento o preparar el trabajo activo cuando aporta valor al caso.",
    whenUsed: "Puede considerarse ante rigidez, dolor muscular, limitación de movilidad o como parte de la recuperación tras una lesión. La indicación depende de la exploración y de tus objetivos funcionales.",
    limitations: "No sustituye el ejercicio, la educación ni la valoración médica cuando son necesarios. La técnica se adapta a tu tolerancia y no se aplica de forma automática.",
    symptoms: ["Molestias musculares o sensación de rigidez", "Movilidad articular limitada", "Dolor relacionado con carga o actividad", "Necesidad de combinar tratamiento manual y ejercicio"],
    plan: [{ title: "Valorar", body: "Exploración de movilidad, síntomas y actividades que quieres recuperar." }, { title: "Intervenir", body: "Selección de técnicas manuales cuando pueden ser útiles y bien toleradas." }, { title: "Consolidar", body: "Ejercicio y pautas para mantener los cambios en tu día a día." }],
    faq: [{ question: "¿La terapia manual consiste solo en masaje?", answer: "No. Puede incluir diferentes técnicas y se integra con valoración, ejercicio y educación según el caso." }, { question: "¿Tiene que doler?", answer: "No es un objetivo. La intensidad se adapta a tu tolerancia y se revisa durante la sesión." }, { question: "¿Puede hacerse a domicilio?", answer: "Depende de la técnica, el caso y la zona de Madrid. Confirma la modalidad antes de reservar." }],
    relatedSlugs: ["ejercicio-terapeutico", "dolor-cervical", "dolor-lumbar"], relatedPathologySlugs: ["dolor-cervical", "dolor-lumbar", "contracturas", "esguinces", "tendinopatias"], techniqueSlugs: manualTechniques,
  }),
  catalogTreatment({
    slug: "ejercicio-terapeutico",
    name: "Ejercicio terapéutico",
    title: "Ejercicio terapéutico en Madrid",
    description: "Ejercicio terapéutico en Chamberí, Madrid: valoración funcional, fuerza, movilidad y readaptación tras lesiones. Consulta tu caso con Borja Estarellas.",
    eyebrow: "Ejercicio terapéutico · Chamberí, Madrid",
    intro: "Recupera movimiento y capacidad con un programa adaptado a tu lesión, dolor o actividad. Valoramos qué te cuesta hacer, seleccionamos ejercicios y ajustamos el trabajo según tu evolución.",
    recognition: "Cuando una lesión, el dolor o un periodo de inactividad hacen que evites movimientos o hayas perdido capacidad, el trabajo activo ayuda a recuperar tareas concretas. El objetivo no es repetir una tabla: es encontrar ejercicios que puedas realizar, medir los avances y progresar cuando estés preparado.",
    clinicalReviewPending: true,
    whatIs: "El ejercicio terapéutico es una intervención de fisioterapia que utiliza movimientos, ejercicios y cargas seleccionados con un objetivo clínico o funcional. No es una tabla genérica ni exige empezar en buena forma: el punto de partida y la dificultad se adaptan a la valoración, el problema y las actividades que quieres recuperar.",
    whenUsed: "Puede formar parte de la recuperación tras un esguince, una lesión deportiva o una cirugía; también del tratamiento conservador de algunas tendinopatías, del dolor lumbar o cervical y de la pérdida de fuerza, equilibrio o confianza al moverse. La elección depende del diagnóstico, la exploración y la fase de recuperación.",
    limitations: "No existe una rutina universal ni una progresión que sirva para todas las lesiones. Una molestia puntual durante el ejercicio no siempre obliga a detenerlo, pero tampoco debe ignorarse un empeoramiento significativo o mantenido. La dosificación, las precauciones y la necesidad de derivación se revisan individualmente; el ejercicio no reemplaza una valoración sanitaria cuando corresponde.",
    symptoms: [
      "Dolor lumbar o cervical que dificulta actividades habituales",
      "Recuperación de fuerza y movilidad después de una lesión",
      "Tendinopatías y molestias relacionadas con el esfuerzo",
      "Inseguridad al apoyar el pie después de un esguince",
      "Dificultad para volver a caminar, entrenar o practicar deporte",
      "Pérdida de capacidad física tras un periodo de inactividad",
    ],
    patientSectionsHeading: "Movilidad, fuerza y readaptación: un programa, distintas herramientas",
    patientSectionsIntro: "Los ejercicios de movilidad, los estiramientos, el control motor, la propiocepción y la fuerza no son tratamientos intercambiables. Se combinan según la función que necesites recuperar.",
    patientSections: [
      {
        title: "Ejercicios de movilidad y estiramientos",
        description: "La movilidad activa ayuda a utilizar un recorrido articular que necesitas para una tarea. Los estiramientos pueden incorporarse cuando existe una limitación relevante, pero no son imprescindibles para todas las lesiones ni sustituyen el trabajo de fuerza.",
        points: [
          "Por ejemplo: recuperar el movimiento de tobillo necesario para bajar escaleras o realizar una sentadilla.",
          "La progresión busca un movimiento útil y tolerable, no una amplitud ideal igual para todo el mundo.",
        ],
      },
      {
        title: "Control motor y coordinación",
        description: "Se entrenan tareas en las que importa coordinar y adaptar el movimiento. Puede ser útil trabajar un gesto concreto antes de aumentar su velocidad, complejidad o carga. No consiste en imponer una postura perfecta ni en mantener siempre los músculos contraídos.",
        points: [
          "Por ejemplo: recuperar confianza al agacharse, levantar un objeto o mover el cuello.",
          "Los ejercicios evolucionan hacia actividades reales, sin depender indefinidamente de movimientos básicos.",
        ],
      },
      {
        title: "Propiocepción, equilibrio y estabilidad",
        description: "Se trabajan la percepción de la posición corporal y la respuesta ante cambios de apoyo o dirección. Tras un esguince, el objetivo no es únicamente mantener el equilibrio sobre una superficie inestable, sino recuperar seguridad para caminar, girar o practicar deporte.",
        points: [
          "El nivel de dificultad parte de cómo te encuentras y de lo que exige tu actividad.",
          "Los cambios de dirección, los apoyos y los gestos deportivos se incorporan cuando la evolución lo permite.",
        ],
      },
      {
        title: "Fuerza y carga progresiva",
        description: "La readaptación puede necesitar recuperar la capacidad de tolerar peso, repeticiones, velocidad o esfuerzo. La carga se ajusta a la lesión, el nivel de partida y la respuesta en las horas y días siguientes, en lugar de aumentar automáticamente cada semana.",
        points: [
          "Por ejemplo: avanzar desde tareas básicas hasta subir escaleras, correr o entrenar, según el objetivo.",
          "En determinadas tendinopatías, el ejercicio con carga constituye una intervención de primera línea; el protocolo concreto depende del tendón y del diagnóstico.",
        ],
      },
    ],
    clinicalAdvisory: {
      title: "¿Se puede empezar a hacer ejercicios sin valoración?",
      description: "Mantener una actividad física adaptada suele ser positivo, pero una lesión aguda importante, una cirugía reciente o síntomas que empeoran necesitan un plan individual. Si hay pérdida progresiva de fuerza o sensibilidad, fiebre asociada al dolor, dolor intenso tras un traumatismo u otras señales de alarma, solicita una valoración médica. La página no sustituye una exploración ni proporciona una rutina universal.",
    },
    plan: [
      {
        title: "Valoración funcional",
        body: "Identificamos qué actividades te cuestan y exploramos movilidad, fuerza, equilibrio y tolerancia al esfuerzo según el caso. Definimos objetivos concretos que puedas reconocer en tu día a día.",
      },
      {
        title: "Programa y dosis adaptados",
        body: "Seleccionamos los movimientos adecuados y explicamos cómo ajustar su dificultad, frecuencia y recuperación. El ejercicio en consulta puede complementarse con pautas para casa cuando aporten valor.",
      },
      {
        title: "Progresión y vuelta a tu actividad",
        body: "Revisamos tu respuesta, las actividades que vas recuperando y las cargas que puedes tolerar. El plan evoluciona hacia el trabajo, la vida cotidiana o el deporte, sin fijar plazos universales.",
      },
    ],
    faq: [
      {
        question: "¿Qué es el ejercicio terapéutico en fisioterapia?",
        answer: "Es ejercicio seleccionado y adaptado con un objetivo de recuperación o mejora funcional. La elección, la intensidad y la progresión dependen de la valoración y de las actividades que quieres volver a realizar.",
      },
      {
        question: "¿Es lo mismo que ir al gimnasio o hacer una tabla de internet?",
        answer: "No necesariamente. Un programa terapéutico responde a una valoración, unos objetivos funcionales y una evolución clínica. Puede utilizar ejercicios conocidos del gimnasio, pero su dosis y progresión se individualizan.",
      },
      {
        question: "¿Puedo hacer ejercicio si tengo dolor lumbar?",
        answer: "En muchos cuadros de dolor lumbar se recomienda mantenerse activo y valorar un programa de ejercicios adaptado. No todos los tipos de dolor tienen la misma indicación, por lo que primero se revisan los síntomas y posibles señales de alarma.",
      },
      {
        question: "¿El ejercicio terapéutico sirve para tendinopatías?",
        answer: "Puede ser una parte fundamental del tratamiento. En algunas tendinopatías, como la porción media del tendón de Aquiles, existen guías que recomiendan el ejercicio con carga como primera opción, siempre ajustado a la respuesta y al contexto clínico.",
      },
      {
        question: "¿Qué diferencia hay entre ejercicios de movilidad y estiramientos?",
        answer: "La movilidad se centra en utilizar de forma activa un recorrido útil; los estiramientos buscan modificar la tolerancia o el recorrido en posiciones específicas. Se escogen según el objetivo, no por rutina.",
      },
      {
        question: "¿Qué es la propiocepción y cuándo se trabaja?",
        answer: "Es la capacidad de percibir y responder a la posición y movimiento corporal. Su entrenamiento puede integrarse, por ejemplo, en la recuperación funcional tras un esguince, junto a fuerza y exposición progresiva a las actividades.",
      },
      {
        question: "¿Hay que hacer ejercicios con dolor?",
        answer: "Depende de la lesión y de la respuesta. En determinados procesos puede aceptarse alguna molestia controlada, pero no significa que haya que forzar ni ignorar un empeoramiento persistente. Borja ajustará la actividad en función de la valoración.",
      },
      {
        question: "¿Me darán ejercicios para hacer en casa?",
        answer: "Cuando tengan sentido, se pueden indicar tareas sencillas para practicar entre sesiones. La frecuencia y la dificultad deben adaptarse a tu situación; no se entrega una tabla idéntica a todo el mundo.",
      },
      {
        question: "¿Se puede hacer ejercicio terapéutico a domicilio en Madrid?",
        answer: "Depende del objetivo, el espacio, el material necesario y la zona de cobertura. Puedes consultar si el trabajo indicado para tu caso se puede realizar en casa o requiere acudir a la consulta de Chamberí.",
      },
      {
        question: "¿Cuántas sesiones de rehabilitación o readaptación necesito?",
        answer: "Depende del punto de partida, la lesión, las exigencias de la actividad y cómo evoluciones. La valoración permite definir objetivos y revisar el progreso sin garantizar plazos fijos.",
      },
    ],
    evidenceSources: [
      {
        title: "NICE NG59 — Dolor lumbar y ciática: recomendaciones de actividad y ejercicio",
        url: "https://www.nice.org.uk/guidance/ng59/chapter/recommendations",
      },
      {
        title: "JOSPT (2024) — Guía clínica de tendinopatía de la porción media del Aquiles",
        url: "https://doi.org/10.2519/jospt.2024.0302",
      },
    ],
    relatedSlugs: [
      "ejercicios-carga-progresiva",
      "ejercicios-propiocepcion",
      "ejercicios-control-motor",
      "tendinopatias",
      "lesiones-deportivas",
    ],
    relatedPathologySlugs: [
      "dolor-lumbar",
      "dolor-cervical",
      "tendinopatias",
      "lesiones-deportivas",
      "esguinces",
      "rehabilitacion-postoperatoria",
    ],
    techniqueSlugs: exerciseTechniques,
    contactMessage: "Quiero solicitar una valoración sobre ejercicio terapéutico o readaptación. Me gustaría saber qué modalidad encaja mejor con mi caso.",
  }),
  catalogTreatment({
    slug: "fisioterapia-invasiva-ecoguiada", name: "Ecografía y técnicas invasivas", title: "Fisioterapia invasiva ecoguiada en Madrid", description: "Valoración presencial de ecografía musculoesquelética y técnicas invasivas cuando pueden estar indicadas.", eyebrow: "Ecografía y técnicas invasivas", intro: "Exploración y procedimientos que requieren valoración previa, indicación individual y atención presencial.",
    indexable: false, clinicalReviewPending: true,
    whatIs: "La ecografía musculoesquelética puede complementar la exploración clínica al observar determinados tejidos. Las técnicas invasivas son procedimientos terapéuticos que solo se consideran tras una valoración individual y con sus precauciones específicas.",
    whenUsed: "Pueden valorarse en algunos cuadros musculoesqueléticos cuando la exploración clínica y los objetivos funcionales lo justifican. No son el primer paso ni son necesarias para todos los casos.",
    limitations: "La ecografía no sustituye una valoración completa. Ninguna técnica invasiva garantiza resultados ni reemplaza el trabajo activo, la progresión de carga o la derivación médica cuando procede.",
    symptoms: ["Dudas sobre una valoración musculoesquelética", "Molestias persistentes que requieren exploración individual", "Necesidad de conocer opciones dentro de un plan de fisioterapia", "Consulta presencial con valoración previa"],
    plan: [{ title: "Explorar", body: "Historia, exploración física y, cuando aporta información, ecografía musculoesquelética." }, { title: "Decidir", body: "Explicación de opciones, indicaciones, límites y precauciones antes de cualquier procedimiento." }, { title: "Integrar", body: "Seguimiento con ejercicio terapéutico y objetivos funcionales, no solo con una técnica." }],
    faq: [{ question: "¿La ecografía es una prueba de radiación?", answer: "No. Utiliza ondas sonoras y puede complementar la exploración de determinados tejidos." }, { question: "¿Toda lesión necesita una técnica invasiva?", answer: "No. La indicación se valora de forma individual y muchas situaciones se abordan sin ella." }, { question: "¿Se realiza a domicilio?", answer: "No. Esta valoración y estos procedimientos se plantean únicamente en consulta presencial." }],
    relatedSlugs: ["ecografia-musculoesqueletica", "tendinopatias", "ejercicio-terapeutico"], relatedPathologySlugs: ["tendinopatias", "contracturas", "lesiones-deportivas"], techniqueSlugs: invasiveTechniques, clinicOnly: true,
  }),
];

export const newTechniqueTreatments: Treatment[] = [
  catalogTreatment({
    slug: "masoterapia",
    name: "Masoterapia",
    categorySlug: "terapia-manual",
    // Contenido documentado con fuentes clínicas; revisión por Borja pendiente.
    clinicalReviewPending: true,
    title: "Masaje terapéutico y descontracturante en Madrid",
    description: "Masaje terapéutico y descontracturante en Chamberí, Madrid. Valoración y tratamiento de fisioterapia adaptado a tu caso con Borja Estarellas.",
    eyebrow: "Masoterapia · Fisioterapia en Chamberí",
    intro: "¿Notas sobrecarga en la espalda, el cuello o los hombros? En la consulta de Chamberí valoramos tus molestias antes de decidir si el masaje terapéutico puede ayudarte dentro de un plan de fisioterapia.",
    introSectionTitle: "¿Cuándo valorar un masaje terapéutico?",
    recognition: "La sensación de tensión muscular no siempre tiene una causa única. Puede relacionarse con cambios en la actividad, esfuerzo, descanso u otros factores. La primera decisión no es cuánto apretar, sino comprender qué movimiento o actividad te limita y si el tratamiento manual tiene sentido en tu caso.",
    whatIs: "La masoterapia reúne maniobras manuales sobre los tejidos blandos. Lo que muchas personas buscan como masaje descontracturante es, en fisioterapia, una intervención adaptada a la exploración, la sensibilidad y el objetivo funcional. Puede utilizarse como complemento para aliviar temporalmente algunas molestias o facilitar el movimiento, sin asumir que el dolor se debe a un músculo «anormal» que haya que romper o recolocar.",
    whenUsed: "Puede valorarse ante molestias musculares de espalda, cuello y hombros, sensación de rigidez tras esfuerzo o sobrecarga y ciertos cuadros de dolor musculoesquelético. La utilidad depende del motivo de consulta y de la respuesta; no todas las molestias requieren masaje ni todas las personas se benefician de la misma presión.",
    limitations: "La evidencia sobre el masaje para dolor lumbar o cervical es variable y, en general, de certeza limitada; no permite prometer resultados duraderos ni prevenir lesiones por sí solo. Las guías de dolor lumbar consideran las técnicas manuales únicamente como parte de un plan que incluya ejercicio. El masaje no reemplaza la valoración, el movimiento progresivo ni una derivación sanitaria cuando es necesaria.",
    symptoms: [
      "Sensación de sobrecarga en espalda, cuello u hombros",
      "Molestias musculares después de trabajar o entrenar",
      "Rigidez o incomodidad al mover una zona",
      "Sensibilidad muscular localizada que interfiere con tus actividades",
      "Dudas sobre si necesitas masaje, ejercicio u otra intervención",
    ],
    patientSectionsHeading: "Masaje descontracturante y masoterapia: qué esperar realmente",
    patientSectionsIntro: "El objetivo de la fisioterapia no es aplicar más fuerza, sino elegir el recurso adecuado. Estas son las diferencias y preguntas que conviene conocer antes de solicitar una sesión.",
    patientSections: [
      {
        title: "Masaje terapéutico frente a masaje de relajación",
        description: "El masaje terapéutico se utiliza con un objetivo de fisioterapia definido tras valorar síntomas, actividades y limitaciones. Puede resultar agradable, pero no se ofrece como una promesa de eliminar contracturas ni como una sesión estándar de spa.",
        points: [
          "Se acuerdan la zona, la presión y la finalidad de las maniobras.",
          "La intervención puede ser breve o combinarse con ejercicio y recomendaciones de actividad, según el caso.",
        ],
      },
      {
        title: "Masaje descontracturante de espalda, cuello y hombros",
        description: "«Descontracturante» es un término de búsqueda habitual para la sensación de tensión o sobrecarga muscular. Esa sensación puede tener varios factores relacionados; por eso se exploran movimientos, cargas y síntomas antes de elegir una técnica de tejidos blandos.",
        points: [
          "Se evita atribuir todo dolor a una «contractura» sin explorar otras posibilidades.",
          "El abordaje puede incluir trabajo sobre tejidos blandos, movilidad o ejercicio adaptado.",
        ],
      },
      {
        title: "Puntos gatillo y presión isquémica",
        description: "En algunos casos se puede considerar presión manual graduada sobre áreas musculares sensibles, técnica que también se denomina presión isquémica. Un punto doloroso a la palpación no constituye por sí solo un diagnóstico ni implica que haya que tratarlo siempre.",
        points: [
          "La intensidad se ajusta a tu sensibilidad y puede modificarse o suspenderse.",
          "La técnica se integra con la valoración del movimiento, la carga y las actividades que quieres recuperar.",
        ],
      },
      {
        title: "Molestias después del deporte o de una jornada exigente",
        description: "Tras una actividad intensa puede aparecer sensación de cansancio o sobrecarga muscular. El masaje puede considerarse como recurso complementario si resulta apropiado, pero no sustituye el descanso, la recuperación ni la programación de cargas.",
        points: [
          "No se puede garantizar que prevenga lesiones o mejore el rendimiento deportivo.",
          "Si se trata de una lesión, primero se valora su naturaleza y el plan de recuperación.",
        ],
      },
      {
        title: "Qué sucede en una valoración de fisioterapia",
        description: "Antes de proponer masoterapia se revisan el motivo de consulta, los antecedentes relevantes, la evolución del dolor y qué actividades se han visto afectadas. A partir de ahí se explica si el masaje tiene sentido y qué otras medidas pueden acompañarlo.",
        points: [
          "Se acuerda una intensidad tolerable; una sesión dolorosa no es necesariamente más eficaz.",
          "Las pautas se ajustan a tu evolución y no se prescribe automáticamente un bono o número fijo de sesiones.",
        ],
      },
    ],
    clinicalAdvisory: {
      title: "¿Cuándo conviene evitar el masaje y consultar primero?",
      description: "No conviene aplicar masaje sobre una herida abierta, infección de la piel o zona con lesión reciente sin valoración. Si aparecen hinchazón repentina de una pierna, dolor intenso con calor o enrojecimiento, fiebre o dolor importante tras un traumatismo, solicita valoración sanitaria antes de recibir masaje. Avisa también si tomas anticoagulantes, tienes fragilidad ósea o una enfermedad relevante; puede ser necesario adaptar o evitar ciertas maniobras. Esta información no sustituye una exploración clínica.",
    },
    plan: [
      {
        title: "Comprender la molestia",
        body: "Revisamos el dolor, la carga de trabajo o entrenamiento, la movilidad, el tiempo de evolución y qué actividades te cuesta realizar. Comprobamos si la terapia manual está indicada.",
      },
      {
        title: "Aplicar una técnica acordada",
        body: "Si el masaje aporta valor, se adapta la presión, la zona y el tiempo de aplicación a la sensibilidad y a la respuesta. No se busca provocar dolor intenso.",
      },
      {
        title: "Recuperar movimiento y capacidad",
        body: "Se plantean pautas de actividad y ejercicios cuando corresponda. El seguimiento prioriza volver a moverte y realizar las tareas importantes para ti, no depender de masajes recurrentes.",
      },
    ],
    faq: [
      {
        question: "¿Masoterapia y masaje descontracturante son lo mismo?",
        answer: "Masoterapia es un término profesional amplio para técnicas de masaje sobre tejidos blandos. «Masaje descontracturante» es una denominación habitual para solicitar atención por tensión o sobrecarga. La técnica se decide tras valorar el motivo de consulta, no solo por el nombre.",
      },
      {
        question: "¿El masaje terapéutico elimina las contracturas?",
        answer: "No se puede garantizar. Puede ayudar a manejar temporalmente algunas molestias, pero el dolor muscular tiene causas diversas y la evidencia no justifica prometer que una maniobra elimina una lesión o corrige definitivamente el tejido.",
      },
      {
        question: "¿Un masaje descontracturante tiene que doler para funcionar?",
        answer: "No. La intensidad se adapta a la tolerancia y a la respuesta. Más presión no significa necesariamente un mejor resultado, y si una maniobra resulta desagradable o empeora los síntomas debe revisarse.",
      },
      {
        question: "¿Sirve para molestias de espalda, cervicales u hombros?",
        answer: "Puede valorarse como parte de un abordaje de fisioterapia cuando existen molestias musculares en esas zonas. Primero conviene identificar cómo afectan el movimiento y la actividad y comprobar que no haya señales que aconsejen otro tipo de valoración.",
      },
      {
        question: "¿Se combina con ejercicios terapéuticos?",
        answer: "Sí, cuando está indicado. En dolor lumbar, por ejemplo, la guía NICE propone considerar la terapia manual únicamente dentro de un tratamiento que incluya ejercicio. El objetivo es recuperar función, no depender exclusivamente de técnicas pasivas.",
      },
      {
        question: "¿Es lo mismo que un masaje deportivo?",
        answer: "No necesariamente. El masaje deportivo suele referirse al contexto de entrenamiento o competición; la masoterapia se define aquí por el objetivo clínico. Si entrenas o practicas deporte, conviene revisar también tus cargas, las molestias y el plan de recuperación.",
      },
      {
        question: "¿Cuánto dura y cuánto cuesta un masaje terapéutico?",
        answer: "La duración y las condiciones se confirman antes de la cita, según el tipo de valoración y el abordaje necesario. Consulta las tarifas generales de fisioterapia; no se garantiza una sesión de masaje aislada con duración o precio propios.",
      },
      {
        question: "¿Puedo recibir masaje terapéutico a domicilio en Madrid?",
        answer: "La disponibilidad depende de la zona, la valoración y las características de la intervención. También puedes acudir a la consulta de Borja en la calle de Caracas, 6, Chamberí, previa cita.",
      },
      {
        question: "¿Qué diferencia hay entre masoterapia y presión isquémica?",
        answer: "La masoterapia engloba maniobras sobre tejidos blandos. La presión isquémica es una técnica manual más concreta sobre zonas musculares sensibles. Ninguna se aplica de forma automática ni sustituye el resto del plan de fisioterapia.",
      },
      {
        question: "¿Cuándo debería acudir al médico antes de pedir un masaje?",
        answer: "Si existe un dolor intenso tras traumatismo, signos de infección, hinchazón súbita de una pierna u otros síntomas nuevos preocupantes, conviene valoración sanitaria antes de recibir técnicas manuales. Comunica también tus antecedentes y la medicación relevante.",
      },
    ],
    evidenceSources: [
      {
        title: "NICE NG59 — Dolor lumbar y ciática: terapia manual junto con ejercicio",
        url: "https://www.nice.org.uk/guidance/ng59/chapter/recommendations",
      },
      {
        title: "Cochrane (2024) — Masaje para el dolor de cuello",
        url: "https://www.cochrane.org/es/evidence/CD004871_massage-neck-pain",
      },
      {
        title: "Cochrane (2015) — Masaje para el dolor lumbar",
        url: "https://www.cochrane.org/evidence/CD001929_massage-low-back-pain",
      },
      {
        title: "NCCIH — Massage Therapy: What You Need to Know",
        url: "https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know",
      },
    ],
    relatedSlugs: ["terapia-manual", "presion-isquemica", "contracturas", "ejercicio-terapeutico", "dolor-cervical"],
    relatedPathologySlugs: ["contracturas", "dolor-cervical", "dolor-lumbar", "lesiones-deportivas"],
    contactMessage: "Me gustaría consultar una valoración por molestias musculares y saber si la masoterapia o el masaje terapéutico podrían estar indicados en mi caso.",
  }),
  catalogTreatment({ slug: "estiramientos-asistidos", indexable: false, name: "Estiramientos asistidos", categorySlug: "terapia-manual", title: "Estiramientos asistidos en Madrid", description: "Movilidad y estiramientos pasivos guiados por fisioterapeuta dentro de un plan individual.", eyebrow: "Terapia manual · Madrid", intro: "Estiramientos realizados con ayuda del fisioterapeuta para trabajar movilidad con control.", whatIs: "Los estiramientos asistidos son movimientos guiados por el fisioterapeuta, que ajusta posición, intensidad y recorrido según tu respuesta.", whenUsed: "Pueden utilizarse cuando existe sensación de rigidez o limitación de movilidad y forman parte de un enfoque más amplio.", limitations: "Ganar recorrido de forma pasiva no garantiza cambios duraderos; suele ser importante acompañarlo de trabajo activo.", symptoms: ["Sensación de acortamiento", "Movilidad limitada", "Rigidez tras inmovilización", "Dificultad para determinados gestos"], plan: [{ title: "Explorar", body: "Comparamos movilidad, síntomas y gestos relevantes." }, { title: "Guiar", body: "Aplicamos movimiento asistido de forma progresiva." }, { title: "Activar", body: "Proponemos movimiento activo para consolidar capacidad." }], faq: [{ question: "¿Son iguales que los ejercicios de estiramiento?", answer: "No. Aquí el movimiento lo guía el fisioterapeuta; los ejercicios activos tienen otro objetivo." }, { question: "¿Deben doler?", answer: "No. La sensación se mantiene dentro de una tolerancia razonable." }, { question: "¿Cuántas sesiones hacen falta?", answer: "Depende de la causa y de tu respuesta; se revisa durante el proceso." }], relatedSlugs: ["ejercicios-estiramiento", "movilizaciones-articulares", "dolor-cervical"], relatedPathologySlugs: ["dolor-cervical", "dolor-lumbar", "esguinces"] }),
  catalogTreatment({ slug: "movilizaciones-articulares", indexable: false, name: "Movilizaciones articulares", categorySlug: "terapia-manual", title: "Movilizaciones articulares en Madrid", description: "Técnicas manuales para explorar y trabajar movilidad articular dentro de un plan de fisioterapia.", eyebrow: "Terapia manual · Madrid", intro: "Movilización articular adaptada a la exploración, la tolerancia y los objetivos de movimiento.", whatIs: "Las movilizaciones articulares son movimientos manuales dirigidos a una articulación para explorar su respuesta y trabajar el rango de movimiento cuando está indicado.", whenUsed: "Pueden considerarse en limitaciones de movilidad, rigidez o tras determinados periodos de inmovilización, siempre con valoración previa.", limitations: "No se aplican ante cualquier dolor ni sustituyen la progresión activa de movilidad y fuerza.", symptoms: ["Rigidez articular", "Dificultad para alcanzar un gesto", "Sensación de bloqueo o limitación", "Movilidad reducida tras lesión"], plan: [{ title: "Valorar el movimiento", body: "Analizamos recorrido, síntomas y tareas afectadas." }, { title: "Movilizar", body: "Técnica adaptada a la articulación y a tu tolerancia." }, { title: "Practicar", body: "Movimiento activo para integrar el cambio en función." }], faq: [{ question: "¿Es lo mismo que una manipulación?", answer: "No necesariamente. Se trata de movilizaciones graduadas y adaptadas al caso." }, { question: "¿Puede mejorar mi movilidad?", answer: "Puede formar parte del plan cuando la exploración lo indica, junto con trabajo activo." }, { question: "¿Se puede hacer a domicilio?", answer: "Depende del caso y de la modalidad acordada." }], relatedSlugs: ["ejercicios-movilidad", "estiramientos-asistidos", "esguinces"], relatedPathologySlugs: ["esguinces", "dolor-cervical", "dolor-lumbar"] }),
  catalogTreatment({ slug: "kinesiotape", name: "Kinesiotape", categorySlug: "terapia-manual", title: "Kinesiotape en Madrid", description: "Vendaje neuromuscular valorado como apoyo temporal dentro de un plan de fisioterapia.", eyebrow: "Terapia manual · Madrid", intro: "Vendaje neuromuscular como herramienta complementaria cuando encaja con tu valoración.", whatIs: "El kinesiotape o vendaje neuromuscular es una cinta elástica aplicada sobre la piel. Puede utilizarse como apoyo temporal en algunas situaciones de fisioterapia.", whenUsed: "Puede valorarse cuando se busca una pauta externa temporal que acompañe movimiento, actividad o percepción de una zona.", limitations: "No corrige por sí solo una lesión ni reemplaza la valoración, el ejercicio o la progresión de carga.", symptoms: ["Necesidad de apoyo temporal", "Molestias durante actividad", "Dudas sobre vendaje neuromuscular", "Plan de recuperación con pautas activas"], plan: [{ title: "Valorar", body: "Comprobamos si el vendaje aporta algo útil a tu caso." }, { title: "Aplicar", body: "Colocación con explicación de uso y cuidados." }, { title: "Revisar", body: "Se integra con el resto del plan, no como único tratamiento." }], faq: [{ question: "¿El kinesiotape cura una lesión?", answer: "No. Es una herramienta complementaria dentro de un plan individual." }, { question: "¿Puedo ducharme con él?", answer: "Recibirás indicaciones de cuidado según el tipo de aplicación." }, { question: "¿Se usa en cualquier lesión?", answer: "No. Se valora si tiene sentido en tu caso concreto." }], relatedSlugs: ["vendaje-funcional", "lesiones-deportivas", "esguinces"], relatedPathologySlugs: ["esguinces", "lesiones-deportivas", "tendinopatias"] }),
  catalogTreatment({ slug: "vendaje-funcional", name: "Vendaje funcional", categorySlug: "terapia-manual", title: "Vendaje funcional en Madrid", description: "Soporte funcional temporal para determinadas lesiones, siempre tras valoración de fisioterapia.", eyebrow: "Terapia manual · Madrid", intro: "Vendaje funcional orientado a proteger o acompañar la actividad sin perder de vista la recuperación activa.", whatIs: "El vendaje funcional busca aportar soporte temporal a una zona concreta sin inmovilizar completamente el movimiento cuando la situación lo permite.", whenUsed: "Puede considerarse en algunas lesiones ligamentosas, sobrecargas o al retomar actividad, tras explorar estabilidad, síntomas y objetivos.", limitations: "No sustituye el trabajo de movilidad, fuerza, propiocepción ni una valoración ante dolor intenso o traumatismo reciente.", symptoms: ["Sensación de inestabilidad", "Vuelta progresiva a actividad", "Esguince valorado", "Necesidad de soporte temporal"], plan: [{ title: "Examinar", body: "Valoramos lesión, estabilidad y actividad prevista." }, { title: "Proteger", body: "Vendaje adaptado al objetivo y a la piel." }, { title: "Recuperar", body: "Movilidad y ejercicio para no depender del soporte." }], faq: [{ question: "¿Puedo hacer deporte con vendaje funcional?", answer: "Depende de la lesión, fase y actividad. Se decide tras valoración." }, { question: "¿Inmoviliza por completo?", answer: "Busca soporte selectivo; el grado de restricción depende de la aplicación." }, { question: "¿Es igual que el kinesiotape?", answer: "No. Son materiales y objetivos distintos." }], relatedSlugs: ["kinesiotape", "ejercicios-propiocepcion", "esguinces"], relatedPathologySlugs: ["esguinces", "lesiones-deportivas"] }),
  catalogTreatment({ slug: "presion-isquemica", indexable: false, name: "Presión isquémica", categorySlug: "terapia-manual", title: "Presión isquémica para puntos gatillo en Madrid", description: "Técnica manual valorada para molestias musculares y puntos sensibles, integrada con ejercicio y movimiento.", eyebrow: "Terapia manual · Madrid", intro: "Trabajo manual sobre puntos sensibles musculares dentro de una valoración completa.", whatIs: "La presión isquémica aplica una presión mantenida y graduada sobre zonas musculares sensibles, a veces descritas como puntos gatillo.", whenUsed: "Puede valorarse ante dolor muscular localizado o sensibilidad que se relaciona con determinados movimientos o cargas.", limitations: "La presencia de un punto sensible no explica por sí sola un problema. Se revisan carga, movimiento, descanso y otros factores relevantes.", symptoms: ["Dolor muscular localizado", "Puntos sensibles", "Molestias al presionar una zona", "Tensión asociada a actividad"], plan: [{ title: "Explorar", body: "Relacionamos la sensibilidad con tu historia y movimiento." }, { title: "Dosificar", body: "Aplicación manual gradual y consensuada." }, { title: "Mover", body: "Pautas activas para recuperar confianza y capacidad." }], faq: [{ question: "¿Qué es un punto gatillo?", answer: "Es una zona muscular sensible; se interpreta dentro de la exploración completa." }, { question: "¿Tiene que ser doloroso?", answer: "La intensidad se regula y debe ser tolerable." }, { question: "¿Basta con tratar el punto?", answer: "Normalmente se combina con otras pautas según los objetivos." }], relatedSlugs: ["masoterapia", "puncion-seca", "contracturas"], relatedPathologySlugs: ["contracturas", "dolor-cervical", "dolor-lumbar"] }),
  catalogTreatment({
    slug: "drenaje-linfatico-manual",
    name: "Drenaje linfático manual",
    categorySlug: "terapia-manual",
    indexable: true,
    clinicalReviewPending: true,
    clinicOnly: true,
    title: "Drenaje linfático manual en Madrid",
    description: "Drenaje linfático manual en Madrid, Chamberí. Borja Estarellas ofrece valoración y tratamiento fisioterapéutico del edema según indicación clínica. Pide cita.",
    eyebrow: "Drenaje linfático · Fisioterapia en Chamberí",
    intro: "Drenaje linfático manual en la consulta de Borja Estarellas, en Chamberí. Si tienes un edema diagnosticado o te han recomendado esta técnica, valoramos su indicación y cómo integrarla con ejercicio, compresión y cuidados según tu caso.",
    introSectionTitle: "¿Cuándo conviene valorar un drenaje linfático manual?",
    recognition: "La hinchazón de un brazo o una pierna puede tener causas venosas, linfáticas, inflamatorias o sistémicas. La sensación de pesadez no basta para indicar drenaje. La historia clínica, el diagnóstico y las posibles precauciones determinan si procede fisioterapia, compresión u otra atención sanitaria.",
    whatIs: "El drenaje linfático manual (DLM) es una técnica específica de movimientos suaves y controlados sobre la piel, diseñada para favorecer la movilización del líquido en determinados trastornos del sistema linfático. En el linfedema suele formar parte de una terapia descongestiva más amplia, junto con compresión, ejercicio, cuidados cutáneos y educación. No equivale a un masaje descontracturante ni a un tratamiento estético universal.",
    whenUsed: "Puede estar indicado en determinados cuadros de edema o linfedema correctamente valorados, por ejemplo dentro de la rehabilitación tras algunos tratamientos oncológicos o intervenciones cuando existe una indicación clínica. La necesidad de drenaje, compresión y seguimiento especializado debe confirmarse individualmente y en coordinación médica cuando proceda.",
    limitations: "El drenaje manual aislado no sustituye la compresión cuando está indicada ni cura el linfedema. La evidencia sobre su aportación adicional varía según el contexto clínico. Tampoco se recomienda asumir que toda hinchazón, pesadez o «retención de líquidos» se resuelve con DLM: primero es necesario identificar la causa.",
    symptoms: [
      "Hinchazón de una extremidad con causa ya estudiada o diagnóstico conocido",
      "Sensación de pesadez o tirantez asociada a edema persistente",
      "Consulta por cuidados de linfedema dentro de un plan establecido",
      "Dudas sobre el papel de drenaje, compresión, ejercicio y cuidados de la piel",
      "Necesidad de orientación o derivación tras una intervención, según indicación médica",
    ],
    patientSectionsHeading: "Drenaje linfático, edema y compresión: diferencias importantes",
    patientSectionsIntro: "La eficacia y seguridad del tratamiento dependen de saber qué tipo de hinchazón existe y cómo debe abordarse. No todas las personas necesitan drenaje ni vendaje multicapa.",
    patientSections: [
      {
        title: "Drenaje linfático manual frente a masaje convencional",
        description: "El DLM utiliza maniobras específicas y generalmente suaves dirigidas al abordaje del edema linfático. No se aplica como masaje muscular intenso, descontracturante o procedimiento estético estandarizado.",
        points: [
          "La presión y el recorrido de las maniobras no se deciden por la sensación subjetiva de tensión muscular.",
          "La técnica requiere conocimientos y formación adecuados para identificar cuándo está indicada y cuándo no.",
        ],
      },
      {
        title: "Linfedema y otras causas de hinchazón",
        description: "El linfedema aparece cuando el drenaje linfático está alterado y se acumula líquido en los tejidos. También pueden producirse edemas por insuficiencia venosa, enfermedad cardíaca, tratamientos, infecciones u otras causas. El tratamiento cambia según el origen.",
        points: [
          "No debe diagnosticarse linfedema únicamente por la presencia de piernas o brazos hinchados.",
          "Si una extremidad se hincha de manera súbita, es dolorosa o está caliente y enrojecida, se necesita valoración sanitaria antes de realizar maniobras.",
        ],
      },
      {
        title: "Terapia descongestiva compleja y vendaje multicapa",
        description: "En determinados casos de linfedema se utiliza una estrategia combinada: compresión, cuidados de la piel, ejercicio, educación y, cuando procede, drenaje linfático manual. El vendaje multicapa puede formar parte de la fase intensiva, mientras que las prendas compresivas suelen emplearse en mantenimiento.",
        points: [
          "La compresión no es intercambiable con el drenaje: tiene indicaciones, técnicas y precauciones propias.",
          "Antes de comprimir una extremidad puede ser necesario evaluar la circulación arterial y otras contraindicaciones.",
        ],
      },
      {
        title: "Drenaje linfático tras cirugía",
        description: "Después de algunas intervenciones pueden aparecer cambios de volumen o edema. Sin embargo, el drenaje no está indicado automáticamente tras cualquier operación. Es importante conocer el procedimiento, el estado de la herida y las instrucciones del equipo médico.",
        points: [
          "La indicación se adapta al tipo de cirugía, la evolución y los riesgos relevantes.",
          "En contextos oncológicos o de linfedema complejo puede ser necesaria atención especializada y coordinación entre profesionales.",
        ],
      },
      {
        title: "Ejercicio, autocuidado y seguimiento",
        description: "El movimiento y los cuidados cutáneos son componentes relevantes de muchos planes de manejo del linfedema. El seguimiento puede incluir revisión de volumen, tolerancia a la compresión, función y necesidades de derivación.",
        points: [
          "Los ejercicios y la compresión deben adecuarse al diagnóstico y a las recomendaciones del equipo tratante.",
          "El objetivo es mantener la función y el control de los síntomas, sin prometer una curación definitiva.",
        ],
      },
    ],
    clinicalAdvisory: {
      title: "Señales de alarma antes de solicitar drenaje linfático",
      description: "Si aparece hinchazón súbita de una pierna o brazo, especialmente con dolor, calor o enrojecimiento, solicita valoración médica urgente para descartar causas como trombosis o infección. Si se acompaña de dificultad respiratoria o dolor torácico, acude a urgencias. Tampoco debe iniciarse drenaje o compresión en un edema de causa desconocida sin una valoración adecuada. Informa siempre sobre antecedentes cardíacos, vasculares, oncológicos, infecciones y tratamientos recientes.",
    },
    plan: [
      {
        title: "Aclarar el diagnóstico y el motivo",
        body: "Se revisan antecedentes, evolución de la hinchazón y recomendaciones médicas disponibles. Si la causa no está aclarada, se prioriza la evaluación sanitaria antes de plantear drenaje.",
      },
      {
        title: "Valorar opciones y precauciones",
        body: "Cuando existe indicación, se considera qué papel podrían tener las técnicas manuales, la compresión, el ejercicio y los cuidados cutáneos. La intervención se adapta a la valoración, el diagnóstico y la necesidad de coordinación con otros profesionales.",
      },
      {
        title: "Coordinar el seguimiento",
        body: "Se revisan síntomas, función y posibles necesidades de cuidados prolongados o derivación a un servicio de linfedema. El enfoque se adapta al diagnóstico, no a un protocolo genérico.",
      },
    ],
    faq: [
      {
        question: "¿Qué es el drenaje linfático manual?",
        answer: "Es una técnica fisioterapéutica especializada de maniobras suaves sobre la piel, que puede formar parte del manejo del edema linfático. No es un masaje descontracturante ni está indicado para cualquier persona con hinchazón.",
      },
      {
        question: "¿Sirve para la retención de líquidos o las piernas hinchadas?",
        answer: "No puede recomendarse de forma automática. La hinchazón tiene causas diferentes y algunas requieren valoración médica. Es necesario conocer su origen antes de considerar drenaje o compresión.",
      },
      {
        question: "¿El drenaje linfático sirve para el linfedema?",
        answer: "Puede formar parte de la terapia descongestiva compleja, que habitualmente incluye compresión, ejercicio, cuidados de la piel y educación. No cura el linfedema y su beneficio adicional depende de la situación concreta.",
      },
      {
        question: "¿En qué se diferencia de un masaje descontracturante?",
        answer: "El drenaje linfático manual se orienta al abordaje de determinados edemas mediante maniobras específicas y suaves. El masaje descontracturante se dirige a molestias de tejidos blandos y tiene otros objetivos. No son intercambiables.",
      },
      {
        question: "¿Se necesita vendaje multicapa después del drenaje?",
        answer: "No siempre. En algunos programas de tratamiento intensivo del linfedema se utiliza compresión multicapa, pero su indicación depende del diagnóstico, la circulación, la piel y las contraindicaciones. No debe aplicarse de forma rutinaria sin valoración.",
      },
      {
        question: "¿Puedo hacerme drenaje linfático después de una operación?",
        answer: "Depende del tipo de cirugía, la evolución, el motivo del edema y las instrucciones médicas. No debe asumirse que sea necesario o seguro después de cualquier intervención.",
      },
      {
        question: "¿El drenaje linfático tiene que doler?",
        answer: "El drenaje manual suele utilizar maniobras suaves. El dolor intenso no es un objetivo del procedimiento. Si existe dolor importante, hinchazón repentina o signos inflamatorios, se debe aclarar la causa antes de tratar.",
      },
      {
        question: "¿Dónde realiza Borja el drenaje linfático manual?",
        answer: "Borja realiza drenaje linfático manual en su consulta de la calle de Caracas, 6, Chamberí (Madrid). Se valora la indicación clínica antes de comenzar. No se anuncia automáticamente la modalidad a domicilio para esta técnica.",
      },
      {
        question: "¿Cuándo debería ir al médico por una extremidad hinchada?",
        answer: "Ante una hinchazón nueva, persistente o sin causa conocida, conviene consultar. Si aparece de forma súbita con dolor, calor o enrojecimiento, se recomienda valoración urgente; si además hay dificultad para respirar o dolor torácico, acude a urgencias.",
      },
    ],
    evidenceSources: [
      {
        title: "Hospital 12 de Octubre — Rehabilitación del linfedema",
        url: "https://www.comunidad.madrid/hospital/12octubre/profesionales/servicios-centrales/rehabilitacion-linfedema",
      },
      {
        title: "NHS — Tratamiento del linfedema y terapia descongestiva",
        url: "https://www.nhs.uk/conditions/lymphoedema/treatment/",
      },
      {
        title: "Sociedad Internacional de Linfología — Consenso sobre linfedema periférico (2023)",
        url: "https://pubmed.ncbi.nlm.nih.gov/39207406/",
      },
      {
        title: "Cochrane — Drenaje manual tras tratamiento del cáncer de mama",
        url: "https://www.cochrane.org/evidence/CD003475_manual-lymphatic-drainage-lymphedema-following-breast-cancer-treatment",
      },
    ],
    relatedSlugs: ["vendaje-multicapa", "ejercicio-terapeutico", "terapia-manual", "rehabilitacion-postoperatoria"],
    relatedPathologySlugs: ["rehabilitacion-postoperatoria", "fisioterapia-mayores"],
    contactMessage: "Quiero pedir una valoración para drenaje linfático manual con Borja en Chamberí. Me gustaría consultar las condiciones de la cita.",
  }),
  catalogTreatment({
    slug: "vendaje-multicapa",
    name: "Vendaje multicapa",
    categorySlug: "terapia-manual",
    indexable: true,
    clinicalReviewPending: true,
    title: "Vendaje compresivo multicapa para linfedema en Madrid",
    description: "Vendaje compresivo multicapa en Madrid, Chamberí. Borja Estarellas realiza terapia compresiva tras valorar el edema, la circulación y las precauciones.",
    eyebrow: "Vendaje multicapa · Compresión terapéutica",
    intro: "Borja realiza vendaje compresivo multicapa en su consulta de Chamberí para situaciones en las que está indicado. Antes de aplicarlo valora el origen del edema, la circulación y las precauciones necesarias.",
    introSectionTitle: "¿Qué es el vendaje compresivo multicapa?",
    recognition: "La hinchazón persistente no significa que deba aplicarse compresión. Antes de utilizar un vendaje multicapa es necesario conocer el origen del edema, la circulación, el estado de la piel y las posibles contraindicaciones.",
    whatIs: "El vendaje multicapa combina distintas capas de materiales compresivos adaptados a una extremidad. En determinados programas de terapia descongestiva del linfedema se usa durante la fase intensiva, junto con ejercicio, cuidados cutáneos y, cuando está indicado, drenaje linfático manual. No equivale al vendaje funcional de tobillo ni al vendaje neuromuscular.",
    whenUsed: "Puede considerarse dentro del manejo especializado de ciertos linfedemas o edemas crónicos diagnosticados. La compresión y su modalidad se eligen tras valorar la circulación, las precauciones, el objetivo terapéutico y la tolerancia; en mantenimiento pueden utilizarse prendas compresivas adaptadas.",
    limitations: "No debe aplicarse por rutina a piernas hinchadas ni a edemas sin diagnóstico. La enfermedad arterial periférica grave y la insuficiencia cardíaca descompensada pueden contraindicar determinadas formas de compresión. El tipo de material, la presión y el seguimiento se adaptan a cada paciente tras la valoración.",
    symptoms: [
      "Edema de una extremidad con diagnóstico y seguimiento establecidos",
      "Linfedema que requiere orientación sobre medidas de compresión",
      "Dudas entre vendaje multicapa y prendas compresivas",
      "Necesidad de comprender su relación con drenaje, ejercicio y cuidados de la piel",
    ],
    patientSectionsHeading: "Vendaje multicapa: indicaciones, diferencias y seguridad",
    patientSectionsIntro: "La compresión terapéutica debe responder a una indicación clínica, no a la apariencia de la hinchazón. Estas cuestiones ayudan a comprender por qué necesita valoración y seguimiento.",
    patientSections: [
      {
        title: "Vendaje multicapa y terapia descongestiva",
        description: "En determinados casos de linfedema, el vendaje multicapa puede utilizarse en la fase intensiva de un programa que incorpora ejercicio, cuidados de la piel y educación. El tratamiento se ajusta a la situación clínica.",
        points: [
          "La compresión suele ser un componente fundamental en el manejo del linfedema.",
          "Tras reducir el edema pueden indicarse prendas compresivas adaptadas para el mantenimiento.",
        ],
      },
      {
        title: "Drenaje linfático y compresión no son lo mismo",
        description: "El drenaje linfático manual utiliza maniobras específicas y suaves; el vendaje ejerce presión externa controlada. Pueden emplearse dentro del mismo plan, pero ninguna de las dos intervenciones se prescribe automáticamente.",
        points: [
          "El drenaje manual no reemplaza una compresión indicada por un equipo especializado.",
          "La utilidad de cada medida depende del diagnóstico y la respuesta funcional.",
        ],
      },
      {
        title: "Precauciones vasculares y circulatorias",
        description: "Antes de aplicar compresión puede ser necesario comprobar el estado arterial, la sensibilidad de la extremidad, la piel y las enfermedades cardíacas. Según el caso, un profesional puede valorar pruebas como el índice tobillo-brazo.",
        points: [
          "Determinadas formas de compresión están contraindicadas ante insuficiencia arterial grave o insuficiencia cardíaca descompensada.",
          "La presión excesiva puede causar dolor, alteraciones de sensibilidad o problemas circulatorios.",
        ],
      },
      {
        title: "Diferencias con vendaje funcional y kinesiotape",
        description: "El vendaje funcional busca un soporte temporal para algunas lesiones musculoesqueléticas y el kinesiotape utiliza cintas elásticas con otros objetivos. El vendaje multicapa se utiliza con criterios específicos de compresión terapéutica y no es intercambiable con ellos.",
        points: [
          "La selección del material depende de la indicación, no del nombre genérico «vendaje».",
          "Los cuidados y el tiempo de uso deben explicarse individualmente.",
        ],
      },
    ],
    clinicalAdvisory: {
      title: "No utilices compresión multicapa sin indicación profesional",
      description: "Una hinchazón súbita y dolorosa, con calor o enrojecimiento, requiere valoración médica urgente antes de aplicar compresión o masaje. La enfermedad arterial grave y determinadas enfermedades cardíacas pueden contraindicar el vendaje. Si un vendaje colocado provoca dolor intenso, entumecimiento, dedos fríos o cambios de color, solicita atención sanitaria inmediata siguiendo las instrucciones de retirada recibidas.",
    },
    plan: [
      {
        title: "Confirmar el diagnóstico",
        body: "Revisar la causa del edema, los antecedentes y las recomendaciones médicas; valorar la necesidad de exploración vascular antes de comprimir.",
      },
      {
        title: "Establecer una compresión adecuada",
        body: "Un profesional formado decide si procede vendaje, qué materiales utilizar y qué seguimiento de tolerancia, piel y circulación es necesario.",
      },
      {
        title: "Revisar y mantener resultados",
        body: "El plan puede incorporar movimiento, autocuidado, revisión del volumen y prendas compresivas de mantenimiento si están indicadas.",
      },
    ],
    faq: [
      {
        question: "¿Para qué sirve un vendaje multicapa?",
        answer: "Es una técnica de compresión que puede utilizarse durante la fase intensiva de determinados tratamientos de linfedema. La indicación depende del diagnóstico y de una valoración de seguridad.",
      },
      {
        question: "¿Es lo mismo que un vendaje funcional?",
        answer: "No. El vendaje funcional suele utilizarse para soporte de determinadas lesiones; el multicapa aplica compresión con objetivos específicos en algunos trastornos relacionados con edema.",
      },
      {
        question: "¿Se coloca siempre después del drenaje linfático?",
        answer: "No necesariamente. Puede integrar un programa descongestivo combinado, pero el tratamiento concreto depende de la valoración, la tolerancia y las contraindicaciones.",
      },
      {
        question: "¿Puedo utilizarlo si tengo problemas de circulación?",
        answer: "Debes consultar antes. La insuficiencia arterial puede contraindicar la compresión o exigir una valoración vascular especializada. No la apliques por tu cuenta.",
      },
      {
        question: "¿Qué diferencia hay entre vendaje multicapa y medias compresivas?",
        answer: "El vendaje multicapa puede utilizarse durante una fase intensiva de tratamiento; las prendas compresivas se emplean con frecuencia durante el mantenimiento. La selección requiere indicación.",
      },
      {
        question: "¿Cuánto tiempo debo llevar el vendaje?",
        answer: "No existe una duración universal. Depende del material, la presión y el plan establecido por el profesional responsable, que debe indicar también cómo vigilar la tolerancia.",
      },
      {
        question: "¿Qué hago si noto dolor o los dedos fríos?",
        answer: "El dolor intenso, los cambios de color o la pérdida de sensibilidad pueden indicar problemas con la compresión. Solicita valoración inmediata y sigue las instrucciones de seguridad proporcionadas por tu profesional.",
      },
      {
        question: "¿Se ofrece vendaje multicapa en la consulta de Chamberí?",
        answer: "Sí. Borja realiza vendaje compresivo multicapa en su consulta de Chamberí. Su aplicación requiere valoración del edema, de la circulación y de las posibles contraindicaciones antes de la sesión.",
      },
    ],
    evidenceSources: [
      {
        title: "NHS — Tratamiento del linfedema",
        url: "https://www.nhs.uk/conditions/lymphoedema/treatment/",
      },
      {
        title: "Hospital 12 de Octubre — Rehabilitación del linfedema",
        url: "https://www.comunidad.madrid/hospital/12octubre/profesionales/servicios-centrales/rehabilitacion-linfedema",
      },
      {
        title: "Consenso internacional — Riesgos y contraindicaciones de la compresión médica",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7383414/",
      },
    ],
    relatedSlugs: ["drenaje-linfatico-manual", "ejercicio-terapeutico", "vendaje-funcional", "terapia-manual"],
    relatedPathologySlugs: ["rehabilitacion-postoperatoria", "fisioterapia-mayores"],
    clinicOnly: true,
    contactMessage: "Quiero solicitar valoración con Borja en Chamberí para vendaje compresivo multicapa y conocer las condiciones de la cita.",
  }),
  catalogTreatment({
    slug: "fisioterapia-atm",
    name: "Fisioterapia ATM",
    categorySlug: "terapia-manual",
    // La revisión clínica por Borja sigue pendiente; no atribuirle una firma editorial aún.
    clinicalReviewPending: true,
    title: "Fisioterapia ATM y dolor de mandíbula en Madrid",
    description: "Fisioterapia para dolor mandibular y ATM en Chamberí. Valoración del movimiento, dolor al masticar y ejercicios adaptados. Consulta con Borja Estarellas.",
    eyebrow: "Fisioterapia ATM · Chamberí, Madrid",
    intro: "¿Te duele la mandíbula al masticar, hablar o abrir la boca? Valoramos el movimiento mandibular, los músculos y los factores relacionados con tus molestias antes de elegir un tratamiento.",
    recognition: "No todo dolor cerca del oído es un problema de la articulación temporomandibular. Los músculos de la masticación, la función articular y otros factores pueden influir en las molestias; por eso diferenciamos el dolor, los ruidos y los bloqueos antes de decidir qué medidas tienen sentido.",
    whatIs: "La articulación temporomandibular (ATM) conecta la mandíbula con el cráneo. Los trastornos temporomandibulares pueden afectar a la articulación, los músculos de la masticación y, en algunos casos, relacionarse con dolor de cabeza. La fisioterapia forma parte de las opciones conservadoras cuando la exploración lo indica: ejercicio mandibular supervisado, educación y técnicas manuales adaptadas al caso.",
    whenUsed: "Se puede valorar si existe dolor al masticar o bostezar, molestias delante del oído o en la sien, dificultad para abrir la boca, chasquidos acompañados de dolor o episodios de bloqueo. Un chasquido aislado sin dolor ni limitación suele ser frecuente y no exige tratamiento por sí solo.",
    limitations: "El dolor facial o mandibular no siempre se origina en la ATM. El bruxismo y los trastornos temporomandibulares son conceptos diferentes, aunque pueden coexistir. No se promete corregir la mordida ni curar el bruxismo; cuando hay sospecha de causas dentales, articulares u otras señales de alarma, se recomienda valoración médica u odontológica.",
    symptoms: [
      "Dolor en la mandíbula al masticar, hablar o bostezar",
      "Molestias delante del oído o dolor que se extiende a la sien y la cara",
      "Dificultad o dolor al abrir y cerrar la boca",
      "Chasquidos dolorosos o sensación de bloqueo mandibular",
      "Tensión de los músculos de la masticación que limita actividades cotidianas",
    ],
    patientSectionsHeading: "Dolor mandibular y ATM: qué conviene distinguir",
    patientSectionsIntro: "Las molestias de mandíbula pueden tener causas distintas. Estas situaciones ayudan a entender cuándo buscar una valoración y qué preguntas plantear en consulta.",
    patientSections: [
      {
        title: "Dolor al masticar o abrir la boca",
        description: "La molestia puede aparecer al comer alimentos duros, hablar durante mucho tiempo o bostezar. No basta con localizar el dolor: hay que explorar si intervienen los músculos, la articulación u otras estructuras.",
        points: [
          "Se analiza qué movimientos desencadenan las molestias y cómo afectan a tu día a día.",
          "El objetivo es recuperar comodidad y función, no tratar un chasquido de forma automática.",
        ],
      },
      {
        title: "Chasquidos, rigidez y bloqueos",
        description: "Los ruidos de la articulación sin dolor suelen ser frecuentes y no requieren tratamiento. Si aparecen con dolor, bloqueos o limitación de apertura, conviene valorar su causa y repercusión funcional.",
        points: [
          "Se diferencia un ruido sin molestias de una limitación funcional real.",
          "Un bloqueo intenso o súbito puede requerir atención médica u odontológica prioritaria.",
        ],
      },
      {
        title: "ATM y bruxismo no son lo mismo",
        description: "El bruxismo se refiere a actividad de apretar o rechinar los dientes; un trastorno temporomandibular implica problemas de dolor o función de la mandíbula y sus estructuras. Pueden coexistir, pero no se consideran diagnósticos equivalentes.",
        points: [
          "La fisioterapia no debe presentarse como una cura del bruxismo.",
          "Si hay desgaste dental, molestias dentales o dudas sobre una férula, la valoración corresponde a odontología.",
        ],
      },
      {
        title: "Qué puedes esperar de la primera valoración",
        description: "La consulta puede incluir una entrevista sobre dolor, hábitos, sueño y actividades, seguida de exploración del movimiento mandibular, musculatura y regiones relacionadas. Con esos datos se plantea el abordaje adecuado o una derivación si es necesaria.",
        points: [
          "Explicación de las opciones conservadoras y de lo que se espera del seguimiento.",
          "Ejercicios o pautas de autocuidado individualizados cuando estén indicados, sin maniobras forzadas.",
        ],
      },
    ],
    clinicalAdvisory: {
      title: "¿Cuándo es preferible consultar antes con medicina u odontología?",
      description: "Si no puedes abrir o cerrar la boca con normalidad, tienes un bloqueo importante, no puedes comer o beber, hay hinchazón con fiebre o las molestias comenzaron tras un traumatismo, solicita valoración sanitaria prioritaria. Si tienes dificultades para respirar o tragar, acude a urgencias. El dolor dental o los cambios recientes en la mordida también requieren valoración adecuada. Esta información no sustituye un diagnóstico.",
    },
    plan: [
      {
        title: "Valorar la función mandibular",
        body: "Revisamos el dolor, el movimiento al abrir y cerrar, la masticación, los hábitos y las estructuras que pueden estar implicadas. Cuando procede, recomendamos valoración odontológica.",
      },
      {
        title: "Elegir un abordaje conservador",
        body: "Según la valoración, pueden plantearse ejercicios mandibulares supervisados, educación, medidas de autocuidado y técnicas de terapia manual seleccionadas por su utilidad y tolerancia.",
      },
      {
        title: "Revisar la evolución",
        body: "La respuesta se sigue en actividades reales como comer, hablar y abrir la boca. Se adaptan las pautas y se coordina una derivación si la evolución o los hallazgos lo requieren.",
      },
    ],
    faq: [
      {
        question: "¿Es normal que la mandíbula haga clic al abrir la boca?",
        answer: "Un chasquido sin dolor ni limitación del movimiento es habitual y por sí solo no suele necesitar tratamiento. Si se acompaña de dolor, bloqueo o dificultad para comer, conviene una valoración.",
      },
      {
        question: "¿Puede ayudar la fisioterapia si me duele la mandíbula al masticar?",
        answer: "Puede formar parte de un tratamiento conservador en determinados trastornos temporomandibulares. El ejercicio mandibular y algunas técnicas de terapia manual cuentan con respaldo clínico para situaciones concretas, especialmente en dolor persistente, pero primero hay que explorar la causa del dolor.",
      },
      {
        question: "¿ATM y bruxismo significan lo mismo?",
        answer: "No. La ATM es la articulación de la mandíbula; los trastornos temporomandibulares son problemas que pueden afectar su función o producir dolor. El bruxismo es una actividad de apretar o rechinar los dientes. Pueden coexistir y requieren valoraciones distintas.",
      },
      {
        question: "¿Qué se hace en la primera sesión de fisioterapia de ATM?",
        answer: "Se revisan tus síntomas, antecedentes y las actividades que te molestan, como masticar o bostezar. La exploración puede incluir apertura, movimiento mandibular, musculatura y cuello. A partir de ahí se explica si la fisioterapia está indicada y qué opciones existen.",
      },
      {
        question: "¿Tengo que llevar férula de descarga o acudir primero al dentista?",
        answer: "No todo dolor mandibular necesita férula. Su indicación y ajuste corresponden al profesional odontológico. Si existen molestias dentales, desgaste, cambios en la mordida o síntomas que lo justifiquen, se recomienda valoración odontológica.",
      },
      {
        question: "¿Me darán ejercicios para hacer en casa?",
        answer: "Cuando estén indicados, pueden proponerse ejercicios suaves de movilidad o control mandibular y pautas de autocuidado individualizadas. No se recomienda forzar la apertura de la boca sin valoración.",
      },
      {
        question: "¿Cuándo debo consultar con urgencia por la mandíbula?",
        answer: "Busca valoración sanitaria prioritaria si aparece un bloqueo importante, no puedes comer o beber, hay hinchazón acompañada de fiebre o has sufrido un traumatismo. Ante dificultad para respirar o tragar, acude a urgencias.",
      },
      {
        question: "¿Cuántas sesiones suelen hacer falta?",
        answer: "No existe un número de sesiones válido para todas las personas. Depende de la causa, el tiempo de evolución, las actividades afectadas y la respuesta a las primeras pautas. El seguimiento se adapta a esos factores.",
      },
    ],
    evidenceSources: [
      {
        title: "NIDCR — Los trastornos temporomandibulares (información para pacientes)",
        url: "https://www.nidcr.nih.gov/espanol/temas-de-salud/los-trastornos-temporomandibulares",
      },
      {
        title: "BMJ — Guía de práctica clínica sobre dolor temporomandibular crónico (2023)",
        url: "https://www.bmj.com/content/383/bmj-2023-076227",
      },
      {
        title: "NHS — Temporomandibular disorder (TMD)",
        url: "https://www.nhs.uk/conditions/temporomandibular-disorder-tmd/",
      },
    ],
    relatedSlugs: ["terapia-manual", "ejercicios-control-motor", "dolor-cervical"],
    relatedPathologySlugs: ["dolor-cervical"],
    contactMessage: "Quiero consultar una valoración por dolor o molestias de mandíbula / ATM. Me gustaría conocer la disponibilidad de la consulta en Chamberí.",
  }),
  catalogTreatment({ slug: "ejercicios-estiramiento", indexable: false, name: "Ejercicios de estiramiento", categorySlug: "ejercicio-terapeutico", title: "Ejercicios de estiramiento en Madrid", description: "Ejercicio de estiramiento activo y adaptado para mejorar tolerancia al movimiento y movilidad funcional.", eyebrow: "Ejercicio terapéutico · Madrid", intro: "Estiramientos activos integrados en un programa de movimiento con objetivos funcionales.", whatIs: "Los ejercicios de estiramiento utilizan movimiento activo y dosis ajustada para trabajar tolerancia, movilidad y confianza en determinados gestos.", whenUsed: "Pueden programarse cuando la movilidad limitada afecta actividades y la exploración muestra que el movimiento progresivo puede ayudar.", limitations: "No se prescriben como solución universal ni se confunden con estiramientos asistidos realizados por el fisioterapeuta.", symptoms: ["Sensación de rigidez", "Movilidad limitada en gestos concretos", "Dificultad tras tiempo sentado", "Necesidad de recuperar recorrido activo"], plan: [{ title: "Seleccionar", body: "Elegimos movimientos que se relacionen con tu objetivo." }, { title: "Dosificar", body: "Definimos frecuencia, intensidad y señales para ajustar." }, { title: "Progresar", body: "Integramos movilidad en tareas más funcionales." }], faq: [{ question: "¿Estirar siempre es bueno?", answer: "Depende de la situación y del objetivo. Se prescribe si encaja con tu valoración." }, { question: "¿Es igual que un estiramiento asistido?", answer: "No. Aquí realizas activamente el ejercicio y controlas el movimiento." }, { question: "¿Cuánto debo mantener cada estiramiento?", answer: "La dosis se adapta al ejercicio y a tu respuesta, no es igual para todos." }], relatedSlugs: ["estiramientos-asistidos", "ejercicios-movilidad", "dolor-cervical"], relatedPathologySlugs: ["dolor-cervical", "dolor-lumbar", "esguinces"] }),
  catalogTreatment({ slug: "ejercicios-control-motor", name: "Ejercicios de control motor", categorySlug: "ejercicio-terapeutico", title: "Ejercicios de control motor en Madrid", description: "Trabajo de control motor para mejorar coordinación, calidad de movimiento y confianza en tareas específicas.", eyebrow: "Ejercicio terapéutico · Madrid", intro: "Ejercicios para recuperar coordinación y control en los movimientos que te cuestan.", whatIs: "El control motor trabaja cómo organizas y coordinas el movimiento en una tarea, con atención a la técnica, la respiración, el ritmo y la tolerancia.", whenUsed: "Puede utilizarse cuando existe inseguridad al mover una zona, alteración de un gesto o necesidad de recuperar coordinación antes de aumentar carga.", limitations: "No consiste en mantener una postura perfecta ni en repetir ejercicios genéricos; se adapta a una tarea funcional concreta.", symptoms: ["Inseguridad al moverse", "Dificultad para controlar un gesto", "Dolor al repetir una tarea", "Necesidad de recuperar coordinación"], plan: [{ title: "Observar", body: "Analizamos la tarea que resulta difícil o dolorosa." }, { title: "Practicar", body: "Ejercicios sencillos con feedback y objetivos claros." }, { title: "Transferir", body: "Llevamos el control a actividades reales y más carga." }], faq: [{ question: "¿Es solo para espalda?", answer: "No. Puede aplicarse a distintas regiones y tareas según la valoración." }, { question: "¿Tengo que hacer ejercicios lentos siempre?", answer: "Al inicio puede ser útil; después se progresa a movimientos más funcionales." }, { question: "¿Se combina con fuerza?", answer: "Sí. El control y la fuerza pueden trabajarse de forma complementaria." }], relatedSlugs: ["ejercicios-carga-progresiva", "fisioterapia-atm", "dolor-lumbar"], relatedPathologySlugs: ["dolor-lumbar", "dolor-cervical", "esguinces"] }),
  catalogTreatment({ slug: "ejercicios-propiocepcion", name: "Ejercicios de propiocepción", categorySlug: "ejercicio-terapeutico", title: "Ejercicios de propiocepción en Madrid", description: "Entrenamiento de equilibrio, estabilidad y respuesta al movimiento para recuperar seguridad tras una lesión.", eyebrow: "Ejercicio terapéutico · Madrid", intro: "Trabajo de equilibrio y estabilidad para volver a confiar en tus apoyos y movimientos.", whatIs: "La propiocepción incluye ejercicios que entrenan la percepción y respuesta del cuerpo ante apoyos, cambios de posición y movimiento.", whenUsed: "Suele considerarse tras esguinces, lesiones deportivas o periodos de inactividad cuando se busca recuperar seguridad y control.", limitations: "No se limita a usar superficies inestables. La dificultad se elige según la tarea y la fase de recuperación.", symptoms: ["Inseguridad en apoyos", "Vuelta al deporte", "Recuperación tras esguince", "Dificultad con cambios de dirección"], plan: [{ title: "Evaluar", body: "Observamos apoyo, equilibrio y tarea específica." }, { title: "Entrenar", body: "Ejercicios progresivos de control y reacción." }, { title: "Aplicar", body: "Progresión hacia gestos de trabajo, vida diaria o deporte." }], faq: [{ question: "¿Solo sirve para tobillo?", answer: "No. Puede aplicarse a diferentes articulaciones y tareas." }, { question: "¿Siempre se usa una superficie inestable?", answer: "No. El ejercicio se escoge según el objetivo y la fase." }, { question: "¿Cuándo se empieza tras un esguince?", answer: "Depende de la exploración, el dolor y la estabilidad de cada caso." }], relatedSlugs: ["vendaje-funcional", "ejercicios-carga-progresiva", "esguinces"], relatedPathologySlugs: ["esguinces", "lesiones-deportivas"] }),
  catalogTreatment({ slug: "ejercicios-carga-progresiva", name: "Ejercicios de carga progresiva", categorySlug: "ejercicio-terapeutico", title: "Ejercicios de carga progresiva en Madrid", description: "Planificación de fuerza y tolerancia para volver gradualmente a las actividades que te importan.", eyebrow: "Ejercicio terapéutico · Madrid", intro: "Progresión de carga para recuperar capacidad sin saltar pasos ni depender de una rutina genérica.", whatIs: "La carga progresiva organiza el aumento gradual de esfuerzo, fuerza y tolerancia en función de tu respuesta y del objetivo que quieres recuperar.", whenUsed: "Puede ser útil en tendinopatías, lesiones deportivas, dolor persistente o tras periodos de menor actividad, siempre con valoración.", limitations: "No implica forzar ni ignorar síntomas. La progresión se adapta a la evolución y puede requerir ajustes.", symptoms: ["Dolor al aumentar actividad", "Tendón sensible a la carga", "Vuelta al deporte", "Pérdida de fuerza o resistencia"], plan: [{ title: "Establecer base", body: "Identificamos el nivel actual de tolerancia y las tareas objetivo." }, { title: "Cargar", body: "Aumentos graduales de fuerza, volumen o complejidad." }, { title: "Volver", body: "Transferencia a trabajo, deporte o actividades cotidianas." }], faq: [{ question: "¿Hay que entrenar con dolor?", answer: "La respuesta se valora de forma individual; no se trata de ignorar síntomas." }, { question: "¿Sirve para tendinopatías?", answer: "Puede formar parte del tratamiento cuando está indicado y bien dosificado." }, { question: "¿Cuánto tarda la progresión?", answer: "Depende del punto de partida, el objetivo y la respuesta al programa." }], relatedSlugs: ["tendinopatias", "ejercicios-propiocepcion", "lesiones-deportivas"], relatedPathologySlugs: ["tendinopatias", "lesiones-deportivas", "dolor-lumbar"] }),
  catalogTreatment({ slug: "ejercicios-movilidad", indexable: false, name: "Ejercicios de movilidad", categorySlug: "ejercicio-terapeutico", title: "Ejercicios de movilidad en Madrid", description: "Movimiento activo y progresivo para recuperar rango útil en actividades cotidianas, trabajo o deporte.", eyebrow: "Ejercicio terapéutico · Madrid", intro: "Ejercicios de movilidad orientados a recuperar movimiento útil, no solo a ganar recorrido.", whatIs: "Los ejercicios de movilidad trabajan la capacidad de mover una articulación o región de manera activa, controlada y útil para una tarea.", whenUsed: "Pueden programarse tras rigidez, inmovilización, lesión o cuando un gesto cotidiano requiere recuperar recorrido y control.", limitations: "El objetivo no es alcanzar un rango ideal, sino el movimiento que necesitas con seguridad y tolerancia.", symptoms: ["Rigidez al moverse", "Dificultad en gestos cotidianos", "Movilidad reducida tras lesión", "Necesidad de recuperar rango activo"], plan: [{ title: "Medir", body: "Relacionamos el rango disponible con la actividad que te limita." }, { title: "Mover", body: "Ejercicios activos graduados y comprensibles." }, { title: "Usar", body: "Integramos el movimiento en tareas relevantes." }], faq: [{ question: "¿Movilidad y flexibilidad son lo mismo?", answer: "Se relacionan, pero la movilidad incluye control activo y función." }, { question: "¿Puedo hacerlos todos los días?", answer: "La frecuencia se ajusta al ejercicio y a tu respuesta." }, { question: "¿Sirven después de una lesión?", answer: "Pueden ser útiles en la fase adecuada, tras valoración." }], relatedSlugs: ["movilizaciones-articulares", "ejercicios-estiramiento", "esguinces"], relatedPathologySlugs: ["esguinces", "dolor-cervical", "dolor-lumbar"] }),
  catalogTreatment({
    slug: "puncion-seca",
    name: "Punción seca",
    categorySlug: "fisioterapia-invasiva-ecoguiada",
    indexable: false,
    clinicalReviewPending: true,
    clinicOnly: true,
    title: "Punción seca en Madrid",
    description: "Punción seca en Chamberí, Madrid: tratamiento con agujas para determinados cuadros de dolor muscular. Indicaciones, riesgos y valoración con Borja Estarellas.",
    eyebrow: "Punción seca · Fisioterapia en Chamberí",
    intro: "La punción seca es una técnica de fisioterapia invasiva que puede valorarse para algunas molestias musculares. Antes de plantearla es importante explorar tu problema, explicar los riesgos y considerar alternativas.",
    introSectionTitle: "¿Cuándo puede tener sentido valorar la punción seca?",
    recognition: "Un dolor muscular persistente o una zona sensible a la palpación no significa que necesites una aguja. El fisioterapeuta debe relacionar los síntomas con la movilidad, la fuerza, las tareas que te cuestan y los posibles factores contribuyentes antes de proponer una intervención.",
    whatIs: "La punción seca utiliza una aguja estéril fina sin administrar medicamentos ni inyectar sustancias. Se aplica sobre determinadas estructuras musculares en contextos clínicos seleccionados. Puede realizarse con o sin ecografía según la zona, el objetivo y la formación disponible; la guía ecográfica es una ayuda anatómica y no demuestra por sí misma mayor eficacia terapéutica.",
    whenUsed: "Puede considerarse en algunos pacientes con dolor musculoesquelético, sensibilidad muscular localizada o limitaciones funcionales cuando una valoración individual sugiere que puede aportar algo dentro de un plan más amplio. No se indica automáticamente para cualquier contractura, dolor cervical, deportivo o punto gatillo.",
    limitations: "La investigación sobre punción seca ofrece resultados heterogéneos. Una revisión sistemática de 2026 encontró que en la mayoría de sus estudios no añadió beneficios de reducción del dolor frente al ejercicio terapéutico solo; otras investigaciones hallan beneficios en contextos concretos y a corto plazo. No sustituye el ejercicio ni garantiza resultados. Las técnicas invasivas tienen efectos adversos y requieren consentimiento informado.",
    symptoms: [
      "Dolor o sensibilidad muscular que limita movimientos y actividades",
      "Molestias cervicales o de hombro que requieren valoración individual",
      "Dolor muscular relacionado con cargas o actividad deportiva",
      "Dudas sobre opciones de fisioterapia manual frente a una técnica con aguja",
      "Interés en conocer si se puede utilizar guía ecográfica según la región",
    ],
    patientSectionsHeading: "Punción seca: qué es, cuándo se utiliza y qué debes saber",
    patientSectionsIntro: "La elección de una técnica invasiva requiere información suficiente. Estas diferencias ayudan a decidir con expectativas realistas y sin confundirla con otros procedimientos.",
    patientSections: [
      {
        title: "Punción seca y puntos gatillo musculares",
        description: "Algunos profesionales consideran la punción seca ante zonas musculares sensibles, a veces denominadas puntos gatillo. La localización de un punto doloroso no explica por sí sola toda la situación clínica y no obliga a realizar una punción.",
        points: [
          "Se exploran dolor, función, movimiento y tareas relevantes antes de decidir.",
          "No se promete eliminar «nudos» musculares ni desactivar definitivamente una lesión con una aguja.",
        ],
      },
      {
        title: "Punción seca frente a acupuntura o infiltraciones",
        description: "Aunque pueden utilizar agujas similares, la punción seca en fisioterapia se plantea desde una exploración musculoesquelética y no emplea un medicamento inyectado. Las infiltraciones sí administran sustancias; son procedimientos diferentes con indicaciones distintas.",
        points: [
          "El paciente debe conocer qué procedimiento concreto se propone y por qué.",
          "Se utiliza material estéril de un solo uso y medidas de higiene apropiadas.",
        ],
      },
      {
        title: "¿Puede realizarse con ecografía?",
        description: "La ecografía puede ayudar a visualizar determinadas estructuras anatómicas cuando esté indicada. Eso no significa que toda punción seca deba ser ecoguiada ni que utilizar ecografía garantice resultados superiores.",
        points: [
          "La modalidad depende de la zona tratada, la indicación y los protocolos aplicables.",
          "La disponibilidad de punción seca con guía ecográfica se confirma antes de reservar.",
        ],
      },
      {
        title: "¿Duele y qué ocurre después?",
        description: "La punción puede provocar molestias durante la intervención y dolor muscular transitorio después. También pueden aparecer pequeños hematomas o sangrado leve. La reacción varía y debe explicarse antes de obtener consentimiento.",
        points: [
          "Se valora la tolerancia y se ofrecen instrucciones sobre el cuidado posterior.",
          "Si aparecen síntomas llamativos o persistentes, se debe solicitar atención sanitaria.",
        ],
      },
      {
        title: "Riesgos, contraindicaciones y consentimiento",
        description: "Antes de plantear la punción deben revisarse anticoagulantes, trastornos de coagulación, embarazo cuando proceda, infecciones, problemas de inmunidad, antecedentes relevantes y miedo a las agujas. Los eventos graves son infrecuentes pero posibles; en ciertas regiones torácicas existe riesgo de neumotórax.",
        points: [
          "Debe explicarse la relación entre beneficio esperado, alternativas y riesgos específicos de la zona.",
          "No debe realizarse sin consentimiento informado y una valoración de seguridad adecuada.",
        ],
      },
      {
        title: "Punción seca dentro de un plan activo",
        description: "El tratamiento de una lesión o dolor muscular no se agota en la punción. Cuando corresponde, se complementa con ejercicio terapéutico, educación, progresión de carga y seguimiento funcional.",
        points: [
          "La respuesta al tratamiento se revisa mediante actividades y síntomas, no solo palpando un punto sensible.",
          "Si no hay mejoría relevante, debe replantearse la hipótesis clínica y el plan.",
        ],
      },
    ],
    clinicalAdvisory: {
      title: "Seguridad: cuándo consultar tras una punción",
      description: "Antes de cualquier técnica con agujas informa de medicación anticoagulante, problemas de sangrado, embarazo, infección o antecedentes médicos relevantes. Después de una punción cerca del tórax, la aparición de dificultad respiratoria, dolor torácico o tos persistente exige valoración médica urgente por la posibilidad de complicaciones como neumotórax. La información de esta página no sustituye la valoración ni el consentimiento individual.",
    },
    plan: [
      {
        title: "Valoración y selección",
        body: "Se revisan antecedentes, síntomas, exploración musculoesquelética, precauciones y alternativas. Solo se plantea la técnica si existe una indicación individual.",
      },
      {
        title: "Información y procedimiento",
        body: "Se explican beneficios esperados, límites, riesgos, higiene y consentimiento. Si se realiza la punción, la intensidad y la región se adaptan a la valoración.",
      },
      {
        title: "Seguimiento y ejercicio",
        body: "Se comprueba la respuesta, se dan pautas posteriores y se integran ejercicios o cambios de carga según el objetivo funcional. Se reevalúa el plan si no aporta valor.",
      },
    ],
    faq: [
      {
        question: "¿Qué es la punción seca en fisioterapia?",
        answer: "Es una técnica invasiva que introduce una aguja fina y estéril sin inyectar fármacos. Puede utilizarse en determinadas situaciones musculoesqueléticas tras una valoración individual y consentimiento informado.",
      },
      {
        question: "¿La punción seca sirve para cualquier contractura?",
        answer: "No. La sensación de tensión o la presencia de un punto muscular sensible no constituyen por sí solas una indicación de punción. Primero debe explorarse el motivo de consulta y valorar alternativas.",
      },
      {
        question: "¿Es dolorosa la punción seca?",
        answer: "Puede producir molestias durante la intervención y dolor muscular transitorio después. La respuesta varía; el objetivo no es provocar dolor intenso ni realizar la técnica sin explicar previamente lo que puede sentirse.",
      },
      {
        question: "¿Qué diferencia hay entre punción seca y acupuntura?",
        answer: "Ambas pueden emplear agujas, pero la punción seca utilizada en fisioterapia se selecciona a partir de la valoración musculoesquelética. No equivale a una infiltración ni administra sustancias.",
      },
      {
        question: "¿Se puede hacer punción seca ecoguiada?",
        answer: "En determinadas regiones la ecografía puede ayudar a reconocer estructuras anatómicas. Su uso depende de la indicación, el procedimiento y la disponibilidad; no implica que cualquier punción seca requiera ecografía.",
      },
      {
        question: "¿Tiene riesgos o efectos secundarios?",
        answer: "Son frecuentes las molestias locales transitorias y pueden aparecer pequeños hematomas. Las complicaciones graves son poco frecuentes pero posibles, incluidos problemas que requieren atención urgente; por eso son necesarios valoración, formación, precauciones y consentimiento.",
      },
      {
        question: "¿Cuántas sesiones de punción seca necesito?",
        answer: "No existe una cifra válida para todos los pacientes. La decisión depende de la evaluación y de la respuesta, sin asumir que repetir punciones sea mejor que un plan activo de rehabilitación.",
      },
      {
        question: "¿Es mejor la punción seca que el ejercicio terapéutico?",
        answer: "No se puede afirmar con carácter general. La evidencia comparativa es heterogénea y una revisión de 2026 no encontró beneficio adicional sobre el ejercicio aislado en la mayoría de los estudios incluidos para reducir dolor. La elección depende del contexto.",
      },
      {
        question: "¿Se realiza punción seca a domicilio en Madrid?",
        answer: "En Fisio Estarellas estos procedimientos invasivos se plantean exclusivamente en consulta, tras valoración y confirmación de la indicación.",
      },
      {
        question: "¿Cuándo debo acudir a urgencias después de una punción?",
        answer: "Si aparecen dificultad para respirar, dolor torácico, tos persistente u otros síntomas intensos inesperados, especialmente tras tratar una región cercana al tórax, solicita atención médica urgente.",
      },
    ],
    evidenceSources: [
      {
        title: "Revisión sistemática (2026) — Punción seca y ejercicio frente a dolor musculoesquelético",
        url: "https://pubmed.ncbi.nlm.nih.gov/42086197/",
      },
      {
        title: "Revisión y metaanálisis (2026) — Efectos adversos de la punción seca",
        url: "https://pubmed.ncbi.nlm.nih.gov/42096510/",
      },
      {
        title: "Consenso clínico (2026) — Selección, dosis y seguimiento de punción seca",
        url: "https://pubmed.ncbi.nlm.nih.gov/42083628/",
      },
      {
        title: "Consejo General de Colegios de Fisioterapeutas — Protocolo sobre punción seca",
        url: "https://www.consejo-fisioterapia.org/adjuntos/legislacion/legislacion_57.pdf",
      },
    ],
    relatedSlugs: [
      "fisioterapia-invasiva-ecoguiada",
      "ecografia-musculoesqueletica",
      "presion-isquemica",
      "ejercicio-terapeutico",
      "contracturas",
    ],
    relatedPathologySlugs: ["contracturas", "dolor-cervical", "lesiones-deportivas"],
    contactMessage: "Quiero consultar si la punción seca puede estar indicada en mi caso. Me gustaría solicitar una valoración en la consulta de Chamberí.",
  }),
  catalogTreatment({ slug: "electrolisis-percutanea-ecoguiada", name: "Electrólisis percutánea ecoguiada", categorySlug: "fisioterapia-invasiva-ecoguiada", title: "Electrólisis percutánea ecoguiada en Madrid", description: "Información sobre electrólisis percutánea ecoguiada para valorar indicación, precauciones y alternativas en consulta.", eyebrow: "Técnicas invasivas · Madrid", intro: "Una opción que requiere valoración presencial, indicación individual y confirmación de disponibilidad antes de reservar.", indexable: false, clinicalReviewPending: true, clinicOnly: true, whatIs: "La electrólisis percutánea ecoguiada es un procedimiento invasivo que se puede valorar en determinadas situaciones musculoesqueléticas. EPI se utiliza como variante de búsqueda, sin que ello implique una marca o equipo concreto.", whenUsed: "La indicación depende de la exploración, el diagnóstico funcional, los objetivos y las alternativas disponibles. No se plantea como respuesta automática a una tendinopatía.", limitations: "Requiere confirmación clínica y de disponibilidad. No garantiza resultados ni sustituye un programa de ejercicio y progresión de carga.", symptoms: ["Consulta por tendón o tejido musculoesquelético", "Necesidad de valoración individual", "Dudas sobre procedimientos ecoguiados", "Atención presencial"], plan: [{ title: "Explorar", body: "Valoración clínica y revisión de objetivos antes de decidir." }, { title: "Informar", body: "Explicación de indicación, límites, alternativas y precauciones." }, { title: "Acompañar", body: "Plan activo y seguimiento funcional cuando el caso lo requiere." }], faq: [{ question: "¿Es lo mismo que EPI?", answer: "EPI es una denominación usada en búsquedas; la valoración debe centrarse en la indicación clínica, no en una marca." }, { question: "¿Es necesaria para toda tendinopatía?", answer: "No. Muchas tendinopatías se abordan con educación y carga progresiva, entre otras medidas." }, { question: "¿Está disponible siempre?", answer: "La disponibilidad y la indicación deben confirmarse antes de reservar." }], relatedSlugs: ["ecografia-musculoesqueletica", "ejercicios-carga-progresiva", "tendinopatias"], relatedPathologySlugs: ["tendinopatias", "lesiones-deportivas"] }),
  catalogTreatment({ slug: "neuromodulacion-percutanea-ecoguiada", name: "Neuromodulación percutánea ecoguiada", categorySlug: "fisioterapia-invasiva-ecoguiada", title: "Neuromodulación percutánea ecoguiada en Madrid", description: "Información para valorar neuromodulación percutánea ecoguiada, sus precauciones y alternativas en consulta.", eyebrow: "Técnicas invasivas · Madrid", intro: "Procedimiento que requiere valoración presencial, indicación individual y confirmación previa de disponibilidad.", indexable: false, clinicalReviewPending: true, clinicOnly: true, whatIs: "La neuromodulación percutánea ecoguiada es un procedimiento invasivo que puede considerarse en contextos concretos tras exploración individual. La guía ecográfica, cuando procede, busca aportar precisión anatómica.", whenUsed: "No se indica por un diagnóstico aislado. Se valora junto a síntomas, exploración, objetivos funcionales y otras opciones de tratamiento.", limitations: "No garantiza alivio ni sustituye la valoración médica cuando es necesaria, el ejercicio terapéutico o la progresión funcional.", symptoms: ["Consulta por dolor o limitación musculoesquelética", "Necesidad de exploración presencial", "Dudas sobre opciones invasivas", "Plan individualizado"], plan: [{ title: "Analizar", body: "Historia, exploración y posibles precauciones." }, { title: "Decidir", body: "Información clara sobre utilidad potencial, alternativas y límites." }, { title: "Rehabilitar", body: "Trabajo funcional y ejercicio según el objetivo de recuperación." }], faq: [{ question: "¿Está indicada para cualquier dolor?", answer: "No. Se considera solo tras una valoración individual y cuando puede tener sentido clínico." }, { question: "¿Garantiza resultados?", answer: "No. La respuesta varía y se integra dentro de un plan más amplio." }, { question: "¿Se realiza en casa?", answer: "No. Se plantea únicamente en consulta presencial." }], relatedSlugs: ["ecografia-musculoesqueletica", "ejercicio-terapeutico", "dolor-cervical"], relatedPathologySlugs: ["dolor-cervical", "dolor-lumbar", "lesiones-deportivas"] }),
];
