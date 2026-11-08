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
  whatIs: string;
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
  "ejercicio-terapeutico": { primary: "ejercicio terapéutico Madrid", secondary: ["ejercicio terapéutico Chamberí","rehabilitación activa Madrid"] },
  "fisioterapia-invasiva-ecoguiada": { primary: "fisioterapia invasiva ecoguiada Madrid", secondary: ["técnicas ecoguiadas fisioterapia","fisioterapia invasiva Chamberí"] },
  "masoterapia": { primary: "masaje terapéutico Madrid", secondary: ["masoterapia Chamberí","masaje descontracturante fisioterapia"] },
  "estiramientos-asistidos": { primary: "estiramientos asistidos fisioterapia", secondary: ["estiramientos pasivos fisioterapeuta","estiramientos asistidos Madrid"] },
  "movilizaciones-articulares": { primary: "movilización articular fisioterapia", secondary: ["terapia manual articular","movilizaciones articulares Madrid"] },
  "kinesiotape": { primary: "kinesiotape Madrid", secondary: ["vendaje neuromuscular Madrid","kinesiotaping fisioterapia"] },
  "vendaje-funcional": { primary: "vendaje funcional Madrid", secondary: ["vendaje funcional tobillo","vendaje deportivo fisioterapia"] },
  "presion-isquemica": { primary: "presión isquémica puntos gatillo", secondary: ["tratamiento puntos gatillo musculares","presión isquémica fisioterapia"] },
  "drenaje-linfatico-manual": { primary: "drenaje linfático manual Madrid", secondary: ["drenaje linfático Chamberí","drenaje linfático fisioterapia"] },
  "vendaje-multicapa": { primary: "vendaje multicapa fisioterapia", secondary: ["vendaje compresivo multicapa","compresión para edema"] },
  "fisioterapia-atm": { primary: "fisioterapia ATM Madrid", secondary: ["fisioterapia dolor mandibular","articulación temporomandibular Chamberí"] },
  "ejercicios-estiramiento": { primary: "ejercicios de estiramiento terapéutico", secondary: ["estiramientos activos fisioterapia","ejercicios de flexibilidad"] },
  "ejercicios-control-motor": { primary: "ejercicios de control motor fisioterapia", secondary: ["control motor lumbar","control de movimiento fisioterapia"] },
  "ejercicios-propiocepcion": { primary: "ejercicios de propiocepción", secondary: ["propiocepción tobillo","entrenamiento del equilibrio fisioterapia"] },
  "ejercicios-carga-progresiva": { primary: "carga progresiva fisioterapia", secondary: ["ejercicios para tendinopatías","readaptación de fuerza"] },
  "ejercicios-movilidad": { primary: "ejercicios de movilidad articular", secondary: ["movilidad activa fisioterapia","ejercicios de movilidad funcional"] },
  "puncion-seca": { primary: "punción seca Madrid", secondary: ["punción seca Chamberí","punción seca ecoguiada"] },
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
    recognition: input.whatIs,
    whatIs: input.whatIs,
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
    slug: "ejercicio-terapeutico", name: "Ejercicio terapéutico", title: "Ejercicio terapéutico en Madrid", description: "Programas de ejercicio individualizados para recuperar movilidad, fuerza, control y confianza al moverte.", eyebrow: "Ejercicio terapéutico · Madrid", intro: "Un enfoque activo y progresivo para recuperar capacidad en las actividades que te importan.",
    whatIs: "El ejercicio terapéutico utiliza movimiento dosificado y adaptado para mejorar capacidades como movilidad, fuerza, control motor, equilibrio o tolerancia a la carga.",
    whenUsed: "Puede formar parte de la recuperación de dolor lumbar o cervical, lesiones deportivas, tendinopatías, esguinces y procesos de readaptación funcional.",
    limitations: "No hay una rutina universal. La selección de ejercicios, la carga y la progresión se ajustan a tu punto de partida, respuesta y objetivos.",
    symptoms: ["Pérdida de fuerza o confianza al moverte", "Dolor al cargar, entrenar o caminar", "Dificultad para recuperar una actividad", "Necesidad de una progresión guiada"],
    plan: [{ title: "Medir tu punto de partida", body: "Valoración funcional de movilidad, fuerza, control y tareas relevantes." }, { title: "Programar", body: "Ejercicios con dosis y objetivos comprensibles para tu situación." }, { title: "Progresar", body: "Revisión de la respuesta y ajuste gradual hacia tus actividades." }],
    faq: [{ question: "¿Tengo que estar en forma para empezar?", answer: "No. El punto de partida se adapta a tu capacidad y a tus objetivos actuales." }, { question: "¿Me llevaré ejercicios para casa?", answer: "Cuando sea útil, recibirás pautas concretas y realistas para continuar entre sesiones." }, { question: "¿El ejercicio sustituye al tratamiento manual?", answer: "Son herramientas diferentes. Se combinan cuando cada una aporta algo al plan." }],
    relatedSlugs: ["terapia-manual", "lesiones-deportivas", "tendinopatias"], relatedPathologySlugs: ["dolor-lumbar", "dolor-cervical", "tendinopatias", "lesiones-deportivas", "esguinces"], techniqueSlugs: exerciseTechniques,
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
  catalogTreatment({ slug: "masoterapia", name: "Masoterapia", categorySlug: "terapia-manual", title: "Masaje terapéutico en Madrid", description: "Masoterapia integrada en una valoración de fisioterapia para molestias musculares y recuperación funcional.", eyebrow: "Terapia manual · Madrid", intro: "Masaje terapéutico adaptado a tu sensibilidad, actividad y objetivos de recuperación.", whatIs: "La masoterapia utiliza maniobras sobre tejidos blandos dentro de una sesión de fisioterapia. Puede buscar reducir sensación de tensión, facilitar movimiento o acompañar un plan de recuperación.", whenUsed: "Puede considerarse ante sobrecarga muscular, sensación de rigidez o después de esfuerzo, siempre valorando el origen de la molestia.", limitations: "No busca sustituir la valoración ni resolver por sí sola problemas de carga, fuerza o movimiento.", symptoms: ["Sobrecarga muscular", "Sensación de tensión", "Molestias tras actividad", "Rigidez que limita el movimiento"], plan: [{ title: "Escuchar", body: "Identificamos la zona, la actividad y los factores que influyen." }, { title: "Tratar", body: "Aplicación manual adaptada a tu tolerancia." }, { title: "Orientar", body: "Pautas de movimiento o carga para después de la sesión." }], faq: [{ question: "¿Es un masaje relajante?", answer: "Es una técnica de fisioterapia con un objetivo definido dentro de la valoración." }, { question: "¿Puede ser intenso?", answer: "La presión se ajusta a tu tolerancia; el dolor no es un requisito." }, { question: "¿Se combina con ejercicio?", answer: "Sí, cuando el ejercicio ayuda a recuperar o mantener función." }], relatedSlugs: ["presion-isquemica", "estiramientos-asistidos", "contracturas"], relatedPathologySlugs: ["contracturas", "dolor-cervical", "lesiones-deportivas"] }),
  catalogTreatment({ slug: "estiramientos-asistidos", indexable: false, name: "Estiramientos asistidos", categorySlug: "terapia-manual", title: "Estiramientos asistidos en Madrid", description: "Movilidad y estiramientos pasivos guiados por fisioterapeuta dentro de un plan individual.", eyebrow: "Terapia manual · Madrid", intro: "Estiramientos realizados con ayuda del fisioterapeuta para trabajar movilidad con control.", whatIs: "Los estiramientos asistidos son movimientos guiados por el fisioterapeuta, que ajusta posición, intensidad y recorrido según tu respuesta.", whenUsed: "Pueden utilizarse cuando existe sensación de rigidez o limitación de movilidad y forman parte de un enfoque más amplio.", limitations: "Ganar recorrido de forma pasiva no garantiza cambios duraderos; suele ser importante acompañarlo de trabajo activo.", symptoms: ["Sensación de acortamiento", "Movilidad limitada", "Rigidez tras inmovilización", "Dificultad para determinados gestos"], plan: [{ title: "Explorar", body: "Comparamos movilidad, síntomas y gestos relevantes." }, { title: "Guiar", body: "Aplicamos movimiento asistido de forma progresiva." }, { title: "Activar", body: "Proponemos movimiento activo para consolidar capacidad." }], faq: [{ question: "¿Son iguales que los ejercicios de estiramiento?", answer: "No. Aquí el movimiento lo guía el fisioterapeuta; los ejercicios activos tienen otro objetivo." }, { question: "¿Deben doler?", answer: "No. La sensación se mantiene dentro de una tolerancia razonable." }, { question: "¿Cuántas sesiones hacen falta?", answer: "Depende de la causa y de tu respuesta; se revisa durante el proceso." }], relatedSlugs: ["ejercicios-estiramiento", "movilizaciones-articulares", "dolor-cervical"], relatedPathologySlugs: ["dolor-cervical", "dolor-lumbar", "esguinces"] }),
  catalogTreatment({ slug: "movilizaciones-articulares", indexable: false, name: "Movilizaciones articulares", categorySlug: "terapia-manual", title: "Movilizaciones articulares en Madrid", description: "Técnicas manuales para explorar y trabajar movilidad articular dentro de un plan de fisioterapia.", eyebrow: "Terapia manual · Madrid", intro: "Movilización articular adaptada a la exploración, la tolerancia y los objetivos de movimiento.", whatIs: "Las movilizaciones articulares son movimientos manuales dirigidos a una articulación para explorar su respuesta y trabajar el rango de movimiento cuando está indicado.", whenUsed: "Pueden considerarse en limitaciones de movilidad, rigidez o tras determinados periodos de inmovilización, siempre con valoración previa.", limitations: "No se aplican ante cualquier dolor ni sustituyen la progresión activa de movilidad y fuerza.", symptoms: ["Rigidez articular", "Dificultad para alcanzar un gesto", "Sensación de bloqueo o limitación", "Movilidad reducida tras lesión"], plan: [{ title: "Valorar el movimiento", body: "Analizamos recorrido, síntomas y tareas afectadas." }, { title: "Movilizar", body: "Técnica adaptada a la articulación y a tu tolerancia." }, { title: "Practicar", body: "Movimiento activo para integrar el cambio en función." }], faq: [{ question: "¿Es lo mismo que una manipulación?", answer: "No necesariamente. Se trata de movilizaciones graduadas y adaptadas al caso." }, { question: "¿Puede mejorar mi movilidad?", answer: "Puede formar parte del plan cuando la exploración lo indica, junto con trabajo activo." }, { question: "¿Se puede hacer a domicilio?", answer: "Depende del caso y de la modalidad acordada." }], relatedSlugs: ["ejercicios-movilidad", "estiramientos-asistidos", "esguinces"], relatedPathologySlugs: ["esguinces", "dolor-cervical", "dolor-lumbar"] }),
  catalogTreatment({ slug: "kinesiotape", name: "Kinesiotape", categorySlug: "terapia-manual", title: "Kinesiotape en Madrid", description: "Vendaje neuromuscular valorado como apoyo temporal dentro de un plan de fisioterapia.", eyebrow: "Terapia manual · Madrid", intro: "Vendaje neuromuscular como herramienta complementaria cuando encaja con tu valoración.", whatIs: "El kinesiotape o vendaje neuromuscular es una cinta elástica aplicada sobre la piel. Puede utilizarse como apoyo temporal en algunas situaciones de fisioterapia.", whenUsed: "Puede valorarse cuando se busca una pauta externa temporal que acompañe movimiento, actividad o percepción de una zona.", limitations: "No corrige por sí solo una lesión ni reemplaza la valoración, el ejercicio o la progresión de carga.", symptoms: ["Necesidad de apoyo temporal", "Molestias durante actividad", "Dudas sobre vendaje neuromuscular", "Plan de recuperación con pautas activas"], plan: [{ title: "Valorar", body: "Comprobamos si el vendaje aporta algo útil a tu caso." }, { title: "Aplicar", body: "Colocación con explicación de uso y cuidados." }, { title: "Revisar", body: "Se integra con el resto del plan, no como único tratamiento." }], faq: [{ question: "¿El kinesiotape cura una lesión?", answer: "No. Es una herramienta complementaria dentro de un plan individual." }, { question: "¿Puedo ducharme con él?", answer: "Recibirás indicaciones de cuidado según el tipo de aplicación." }, { question: "¿Se usa en cualquier lesión?", answer: "No. Se valora si tiene sentido en tu caso concreto." }], relatedSlugs: ["vendaje-funcional", "lesiones-deportivas", "esguinces"], relatedPathologySlugs: ["esguinces", "lesiones-deportivas", "tendinopatias"] }),
  catalogTreatment({ slug: "vendaje-funcional", name: "Vendaje funcional", categorySlug: "terapia-manual", title: "Vendaje funcional en Madrid", description: "Soporte funcional temporal para determinadas lesiones, siempre tras valoración de fisioterapia.", eyebrow: "Terapia manual · Madrid", intro: "Vendaje funcional orientado a proteger o acompañar la actividad sin perder de vista la recuperación activa.", whatIs: "El vendaje funcional busca aportar soporte temporal a una zona concreta sin inmovilizar completamente el movimiento cuando la situación lo permite.", whenUsed: "Puede considerarse en algunas lesiones ligamentosas, sobrecargas o al retomar actividad, tras explorar estabilidad, síntomas y objetivos.", limitations: "No sustituye el trabajo de movilidad, fuerza, propiocepción ni una valoración ante dolor intenso o traumatismo reciente.", symptoms: ["Sensación de inestabilidad", "Vuelta progresiva a actividad", "Esguince valorado", "Necesidad de soporte temporal"], plan: [{ title: "Examinar", body: "Valoramos lesión, estabilidad y actividad prevista." }, { title: "Proteger", body: "Vendaje adaptado al objetivo y a la piel." }, { title: "Recuperar", body: "Movilidad y ejercicio para no depender del soporte." }], faq: [{ question: "¿Puedo hacer deporte con vendaje funcional?", answer: "Depende de la lesión, fase y actividad. Se decide tras valoración." }, { question: "¿Inmoviliza por completo?", answer: "Busca soporte selectivo; el grado de restricción depende de la aplicación." }, { question: "¿Es igual que el kinesiotape?", answer: "No. Son materiales y objetivos distintos." }], relatedSlugs: ["kinesiotape", "ejercicios-propiocepcion", "esguinces"], relatedPathologySlugs: ["esguinces", "lesiones-deportivas"] }),
  catalogTreatment({ slug: "presion-isquemica", indexable: false, name: "Presión isquémica", categorySlug: "terapia-manual", title: "Presión isquémica para puntos gatillo en Madrid", description: "Técnica manual valorada para molestias musculares y puntos sensibles, integrada con ejercicio y movimiento.", eyebrow: "Terapia manual · Madrid", intro: "Trabajo manual sobre puntos sensibles musculares dentro de una valoración completa.", whatIs: "La presión isquémica aplica una presión mantenida y graduada sobre zonas musculares sensibles, a veces descritas como puntos gatillo.", whenUsed: "Puede valorarse ante dolor muscular localizado o sensibilidad que se relaciona con determinados movimientos o cargas.", limitations: "La presencia de un punto sensible no explica por sí sola un problema. Se revisan carga, movimiento, descanso y otros factores relevantes.", symptoms: ["Dolor muscular localizado", "Puntos sensibles", "Molestias al presionar una zona", "Tensión asociada a actividad"], plan: [{ title: "Explorar", body: "Relacionamos la sensibilidad con tu historia y movimiento." }, { title: "Dosificar", body: "Aplicación manual gradual y consensuada." }, { title: "Mover", body: "Pautas activas para recuperar confianza y capacidad." }], faq: [{ question: "¿Qué es un punto gatillo?", answer: "Es una zona muscular sensible; se interpreta dentro de la exploración completa." }, { question: "¿Tiene que ser doloroso?", answer: "La intensidad se regula y debe ser tolerable." }, { question: "¿Basta con tratar el punto?", answer: "Normalmente se combina con otras pautas según los objetivos." }], relatedSlugs: ["masoterapia", "puncion-seca", "contracturas"], relatedPathologySlugs: ["contracturas", "dolor-cervical", "dolor-lumbar"] }),
  catalogTreatment({ slug: "drenaje-linfatico-manual", name: "Drenaje linfático manual", categorySlug: "terapia-manual", title: "Drenaje linfático manual en Madrid", description: "Tratamiento fisioterapéutico manual que requiere valoración para determinados edemas y procesos indicados.", eyebrow: "Terapia manual · Madrid", intro: "Drenaje linfático manual con valoración previa, objetivos claros y coordinación cuando sea necesaria.", whatIs: "El drenaje linfático manual utiliza maniobras suaves dirigidas a acompañar el manejo de determinados edemas cuando existe indicación clínica.", whenUsed: "Puede considerarse en situaciones concretas y tras valorar antecedentes, diagnóstico, evolución y posibles contraindicaciones.", limitations: "No es un masaje general ni está indicado para cualquier hinchazón. Puede requerir coordinación con el equipo médico.", symptoms: ["Edema que requiere valoración", "Sensación de pesadez", "Proceso con indicación profesional", "Necesidad de pautas de cuidado"], plan: [{ title: "Revisar", body: "Historia, diagnóstico y posibles precauciones antes de intervenir." }, { title: "Aplicar", body: "Técnica manual suave cuando está indicada." }, { title: "Acompañar", body: "Pautas y derivación si el caso requiere otros profesionales." }], faq: [{ question: "¿Sirve para cualquier retención de líquidos?", answer: "No. La hinchazón debe valorarse para conocer su origen y si esta técnica es adecuada." }, { question: "¿Es un masaje intenso?", answer: "No. Son maniobras suaves y específicas." }, { question: "¿Puede requerir indicación médica?", answer: "Sí. Según el contexto, es importante contar con diagnóstico o coordinación médica." }], relatedSlugs: ["vendaje-multicapa", "rehabilitacion-postoperatoria", "fisioterapia-mayores"], relatedPathologySlugs: ["rehabilitacion-postoperatoria", "fisioterapia-mayores"] }),
  catalogTreatment({ slug: "vendaje-multicapa", indexable: false, clinicalReviewPending: true, name: "Vendaje multicapa", categorySlug: "terapia-manual", title: "Vendaje multicapa en Madrid", description: "Terapia compresiva que requiere valoración profesional, indicación y seguimiento individual.", eyebrow: "Terapia manual · Madrid", intro: "Vendaje multicapa y terapia compresiva dentro de un abordaje valorado de forma individual.", whatIs: "El vendaje multicapa utiliza capas de material compresivo con objetivos concretos dentro del manejo de determinados edemas o situaciones vasculares valoradas.", whenUsed: "Solo puede considerarse tras explorar la indicación, el estado de la piel, antecedentes y contraindicaciones.", limitations: "No es un vendaje deportivo ni debe aplicarse sin valoración específica. Puede requerir coordinación médica.", symptoms: ["Necesidad de valorar terapia compresiva", "Edema con indicación profesional", "Seguimiento de piel y tolerancia", "Dudas sobre vendaje multicapa"], plan: [{ title: "Indicar", body: "Confirmamos si la compresión es apropiada y segura." }, { title: "Aplicar", body: "Vendaje individualizado con explicaciones de cuidado." }, { title: "Controlar", body: "Seguimiento de respuesta y revisión de señales de alerta." }], faq: [{ question: "¿Es igual que un vendaje funcional?", answer: "No. Tiene objetivos, materiales y precauciones distintos." }, { question: "¿Se puede usar en cualquier edema?", answer: "No. La causa del edema y las contraindicaciones deben revisarse primero." }, { question: "¿Puedo retirarlo si molesta?", answer: "Recibirás indicaciones precisas sobre cuidado y qué hacer ante molestias." }], relatedSlugs: ["drenaje-linfatico-manual", "rehabilitacion-postoperatoria", "fisioterapia-mayores"], relatedPathologySlugs: ["rehabilitacion-postoperatoria", "fisioterapia-mayores"] }),
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
  catalogTreatment({ slug: "puncion-seca", name: "Punción seca", categorySlug: "fisioterapia-invasiva-ecoguiada", title: "Punción seca en Madrid", description: "Valoración de punción seca para determinados cuadros musculoesqueléticos, siempre dentro de un plan individual.", eyebrow: "Técnicas invasivas · Madrid", intro: "Una técnica que puede valorarse en algunos casos musculoesqueléticos, con indicación previa y atención presencial.", indexable: false, clinicalReviewPending: true, whatIs: "La punción seca es una técnica invasiva que utiliza una aguja fina sobre tejido muscular en contextos concretos. Puede realizarse con o sin guía ecográfica según indicación y disponibilidad.", whenUsed: "Puede considerarse en algunos cuadros de dolor muscular o sensibilidad localizada después de historia clínica y exploración individual.", limitations: "No es necesaria para todos los casos ni garantiza resultados. Requiere valorar contraindicaciones, consentimiento y alternativas de tratamiento.", symptoms: ["Dolor muscular persistente", "Zona muscular sensible", "Limitación funcional valorada", "Consulta presencial con valoración previa"], plan: [{ title: "Valorar", body: "Historia clínica, exploración y revisión de precauciones." }, { title: "Explicar", body: "Objetivo, alternativas y posibles reacciones antes de decidir." }, { title: "Integrar", body: "Pautas activas y seguimiento según la respuesta." }], faq: [{ question: "¿La punción seca es para cualquier contractura?", answer: "No. Se considera solo cuando la valoración sugiere que puede aportar valor." }, { question: "¿Puede hacerse con ecografía?", answer: "Según la zona, la indicación y la disponibilidad; no es obligatoria en todos los casos." }, { question: "¿Se realiza a domicilio?", answer: "No. Se plantea únicamente en consulta presencial." }], relatedSlugs: ["presion-isquemica", "ejercicios-carga-progresiva", "contracturas"], relatedPathologySlugs: ["contracturas", "dolor-cervical", "lesiones-deportivas"], clinicOnly: true }),
  catalogTreatment({ slug: "electrolisis-percutanea-ecoguiada", name: "Electrólisis percutánea ecoguiada", categorySlug: "fisioterapia-invasiva-ecoguiada", title: "Electrólisis percutánea ecoguiada en Madrid", description: "Información sobre electrólisis percutánea ecoguiada para valorar indicación, precauciones y alternativas en consulta.", eyebrow: "Técnicas invasivas · Madrid", intro: "Una opción que requiere valoración presencial, indicación individual y confirmación de disponibilidad antes de reservar.", indexable: false, clinicalReviewPending: true, clinicOnly: true, whatIs: "La electrólisis percutánea ecoguiada es un procedimiento invasivo que se puede valorar en determinadas situaciones musculoesqueléticas. EPI se utiliza como variante de búsqueda, sin que ello implique una marca o equipo concreto.", whenUsed: "La indicación depende de la exploración, el diagnóstico funcional, los objetivos y las alternativas disponibles. No se plantea como respuesta automática a una tendinopatía.", limitations: "Requiere confirmación clínica y de disponibilidad. No garantiza resultados ni sustituye un programa de ejercicio y progresión de carga.", symptoms: ["Consulta por tendón o tejido musculoesquelético", "Necesidad de valoración individual", "Dudas sobre procedimientos ecoguiados", "Atención presencial"], plan: [{ title: "Explorar", body: "Valoración clínica y revisión de objetivos antes de decidir." }, { title: "Informar", body: "Explicación de indicación, límites, alternativas y precauciones." }, { title: "Acompañar", body: "Plan activo y seguimiento funcional cuando el caso lo requiere." }], faq: [{ question: "¿Es lo mismo que EPI?", answer: "EPI es una denominación usada en búsquedas; la valoración debe centrarse en la indicación clínica, no en una marca." }, { question: "¿Es necesaria para toda tendinopatía?", answer: "No. Muchas tendinopatías se abordan con educación y carga progresiva, entre otras medidas." }, { question: "¿Está disponible siempre?", answer: "La disponibilidad y la indicación deben confirmarse antes de reservar." }], relatedSlugs: ["ecografia-musculoesqueletica", "ejercicios-carga-progresiva", "tendinopatias"], relatedPathologySlugs: ["tendinopatias", "lesiones-deportivas"] }),
  catalogTreatment({ slug: "neuromodulacion-percutanea-ecoguiada", name: "Neuromodulación percutánea ecoguiada", categorySlug: "fisioterapia-invasiva-ecoguiada", title: "Neuromodulación percutánea ecoguiada en Madrid", description: "Información para valorar neuromodulación percutánea ecoguiada, sus precauciones y alternativas en consulta.", eyebrow: "Técnicas invasivas · Madrid", intro: "Procedimiento que requiere valoración presencial, indicación individual y confirmación previa de disponibilidad.", indexable: false, clinicalReviewPending: true, clinicOnly: true, whatIs: "La neuromodulación percutánea ecoguiada es un procedimiento invasivo que puede considerarse en contextos concretos tras exploración individual. La guía ecográfica, cuando procede, busca aportar precisión anatómica.", whenUsed: "No se indica por un diagnóstico aislado. Se valora junto a síntomas, exploración, objetivos funcionales y otras opciones de tratamiento.", limitations: "No garantiza alivio ni sustituye la valoración médica cuando es necesaria, el ejercicio terapéutico o la progresión funcional.", symptoms: ["Consulta por dolor o limitación musculoesquelética", "Necesidad de exploración presencial", "Dudas sobre opciones invasivas", "Plan individualizado"], plan: [{ title: "Analizar", body: "Historia, exploración y posibles precauciones." }, { title: "Decidir", body: "Información clara sobre utilidad potencial, alternativas y límites." }, { title: "Rehabilitar", body: "Trabajo funcional y ejercicio según el objetivo de recuperación." }], faq: [{ question: "¿Está indicada para cualquier dolor?", answer: "No. Se considera solo tras una valoración individual y cuando puede tener sentido clínico." }, { question: "¿Garantiza resultados?", answer: "No. La respuesta varía y se integra dentro de un plan más amplio." }, { question: "¿Se realiza en casa?", answer: "No. Se plantea únicamente en consulta presencial." }], relatedSlugs: ["ecografia-musculoesqueletica", "ejercicio-terapeutico", "dolor-cervical"], relatedPathologySlugs: ["dolor-cervical", "dolor-lumbar", "lesiones-deportivas"] }),
];
