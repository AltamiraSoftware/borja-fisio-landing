import type { Treatment } from "@/types/content";
import { importedTreatments, treatmentCatalogSlugs } from "@/content/importedTreatments";

const sharedFaq = {
  prepare: {
    question: "¿Qué necesito preparar para la sesión en casa?",
    answer:
      "Solo necesitas un espacio tranquilo en el que puedas moverte con comodidad. Llevaré el material básico necesario y te confirmaré cualquier detalle antes de la sesión.",
  },
  diagnosis: {
    question: "¿Necesito tener un diagnóstico antes de consultar?",
    answer:
      "No necesitas saber qué tratamiento pedir. Puedes contarme qué notas, desde cuándo y qué actividades te limitan; valoraremos si la fisioterapia encaja y cuál es el siguiente paso más adecuado.",
  },
  sessions: {
    question: "¿Cuántas sesiones necesitaré?",
    answer:
      "Depende de la evolución, el objetivo y la situación de cada persona. Tras la valoración te explicaré una propuesta de trabajo y revisaremos el progreso sin prometer un número cerrado de sesiones.",
  },
};

const originalTreatments = [
  {
    slug: "rehabilitacion-postoperatoria",
    name: "Rehabilitación postoperatoria",
    updatedAt: "2026-10-18",
    seo: {
      title: "Fisioterapia postoperatoria a domicilio en Madrid",
      description:
        "Rehabilitación tras una operación sin desplazarte de casa. Recupera movilidad y función con una progresión adaptada a tu intervención.",
      primaryKeyword: "fisioterapia postoperatoria a domicilio madrid",
      secondaryKeywords: ["rehabilitación postoperatoria madrid", "fisioterapia postquirúrgica a domicilio"],
    },
    hero: {
      eyebrow: "Rehabilitación tras una intervención",
      h1: "Fisioterapia postoperatoria a domicilio en Madrid",
      intro:
        "Recupera movilidad, fuerza y autonomía después de una operación con un plan progresivo que podemos realizar en tu propia casa.",
    },
    recognition:
      "Después de una intervención, desplazarte puede ser difícil y es normal tener dudas sobre qué movimientos son seguros. La sesión parte de las indicaciones médicas, tu evolución y las actividades que necesitas recuperar.",
    symptoms: ["Movilidad reducida tras la intervención", "Pérdida de fuerza o confianza", "Dificultad para caminar o subir escaleras", "Necesidad de retomar tareas cotidianas"],
    assessment:
      "Revisaremos el informe y las indicaciones de tu equipo médico cuando existan, el estado de la zona intervenida, tu movilidad y tu capacidad funcional. Si aparecen señales que requieran revisión médica, te lo indicaré.",
    plan: [
      { title: "Recuperar movimiento", body: "Movilidad progresiva dentro de los límites indicados para tu fase de recuperación." },
      { title: "Recuperar capacidad", body: "Ejercicio adaptado para fuerza, control y tolerancia a las actividades diarias." },
      { title: "Medir el progreso", body: "Revisiones funcionales y pautas claras para avanzar entre sesiones." },
    ],
    homeTreatment:
      "Trabajar en casa permite practicar transferencias, marcha y tareas en el entorno donde realmente las necesitas, evitando desplazamientos en las primeras fases.",
    faq: [sharedFaq.prepare, sharedFaq.sessions, { question: "¿Cuándo puedo empezar?", answer: "Depende del tipo de intervención y de las indicaciones del cirujano. Antes de comenzar confirmaremos que la fisioterapia está autorizada y qué precauciones deben respetarse." }],
    relatedSlugs: ["fisioterapia-mayores", "dolor-lumbar", "fisioterapia-deportiva"],
  },
  {
    slug: "fisioterapia-mayores",
    name: "Fisioterapia para mayores",
    updatedAt: "2026-10-18",
    seo: {
      title: "Fisioterapia para mayores a domicilio en Madrid",
      description: "Fisioterapia en casa para mejorar movilidad, fuerza, equilibrio y autonomía de personas mayores. Atención personalizada en Madrid.",
      primaryKeyword: "fisioterapia para mayores a domicilio madrid",
      secondaryKeywords: ["fisioterapia geriátrica a domicilio madrid", "fisio personas mayores madrid"],
    },
    hero: { eyebrow: "Movilidad y autonomía", h1: "Fisioterapia para personas mayores a domicilio en Madrid", intro: "Trabajo personalizado para mantener o recuperar movilidad, fuerza, equilibrio y confianza sin salir de casa." },
    recognition: "Levantarse, caminar, superar un escalón o salir a la calle pueden volverse tareas difíciles. La fisioterapia se adapta al punto de partida y a objetivos cotidianos que tengan sentido para la persona.",
    symptoms: ["Pérdida de fuerza o movilidad", "Inseguridad al caminar", "Dificultad en transferencias", "Recuperación tras una caída o ingreso"],
    assessment: "Valoraremos movilidad, fuerza, equilibrio, marcha, entorno y objetivos. Cuando sea útil, integraremos a la familia o cuidadores en las pautas de apoyo.",
    plan: [
      { title: "Moverse con seguridad", body: "Práctica de movimientos cotidianos y estrategias adaptadas al domicilio." },
      { title: "Fuerza y equilibrio", body: "Ejercicios progresivos ajustados a la capacidad y tolerancia de la persona." },
      { title: "Más autonomía", body: "Objetivos concretos para caminar, levantarse y participar en la vida diaria." },
    ],
    homeTreatment: "El domicilio ofrece un contexto real para trabajar con la silla, la cama, los pasillos o los escalones que forman parte del día a día.",
    faq: [sharedFaq.prepare, sharedFaq.sessions, { question: "¿Puede estar presente un familiar?", answer: "Sí. Un familiar o cuidador puede acompañar la sesión y aprender pautas cuando resulte útil para la seguridad y la continuidad del trabajo." }],
    relatedSlugs: ["rehabilitacion-postoperatoria", "dolor-lumbar", "dolor-cervical"],
  },
] satisfies Treatment[];

const imported = treatmentCatalogSlugs.map((slug): Treatment => {
  const item = importedTreatments[slug];
  return {
    slug: item.slug,
    name: item.cardTitle,
    cardDescription: item.cardDescription,
    updatedAt: "2026-10-18",
    seo: {
      title: item.metaTitle,
      description: item.metaDescription,
      primaryKeyword: item.heroTitle.toLowerCase(),
      secondaryKeywords: [],
    },
    hero: {
      eyebrow: "Fisioterapia en Madrid",
      h1: item.heroTitle,
      intro: item.heroSubtitle,
    },
    recognition: item.introBody,
    symptoms: item.symptoms,
    assessment: item.approach[0].description,
    plan: item.approach.map((step) => ({ title: step.title, body: step.description })),
    homeTreatment: item.slug === "fisioterapia-domicilio" ? item.modality.presencial : "Podemos adaptar la valoración y el ejercicio a tu domicilio en Madrid cuando tu caso lo permita. Confirma cobertura y disponibilidad antes de reservar.",
    clinicTreatment: item.slug === "fisioterapia-domicilio" ? "También puedes acudir a la consulta independiente de Borja en Meraki, Arganzuela, con cita previa." : item.modality.presencial,
    clinicOnly: item.slug === "ecografia-musculoesqueletica",
    faq: item.faqs,
    relatedSlugs: item.relatedTreatments.map(({ href }) => href.split("/").pop() ?? ""),
    importedDetail: {
      introTitle: item.introTitle,
      introPoints: item.introPoints,
      heroBadges: item.heroBadges,
      onlineFollowup: item.modality.online,
      professionalBlurb: item.professionalBlurb,
      professionalHighlights: item.professionalHighlights,
    },
  };
});

const legacySlugMap: Record<string, string> = {
  "fisioterapia-deportiva": "lesiones-deportivas",
  "esguince-tobillo": "esguinces",
};

const additionalTreatments = originalTreatments.map((item) => ({
  ...item,
  relatedSlugs: item.relatedSlugs.map((slug) => legacySlugMap[slug] ?? slug),
}));

export const treatments: Treatment[] = [
  ...imported,
  ...additionalTreatments,
];

export const legacyTreatmentSlugs = legacySlugMap;

export function getAllTreatments() {
  return treatments;
}

export function getCatalogTreatments() {
  return imported;
}

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getTreatmentPath(slug: string) {
  return `/tratamientos/${slug}`;
}

function validateTreatments() {
  const slugs = new Set<string>();
  const titles = new Set<string>();

  for (const treatment of treatments) {
    if (!treatment.slug || slugs.has(treatment.slug)) throw new Error(`Slug de tratamiento duplicado o vacío: ${treatment.slug}`);
    if (!treatment.seo.title || titles.has(treatment.seo.title)) throw new Error(`Meta title duplicado o vacío: ${treatment.seo.title}`);
    if (!treatment.seo.description || !treatment.hero.h1) throw new Error(`Contenido SEO incompleto: ${treatment.slug}`);
    slugs.add(treatment.slug);
    titles.add(treatment.seo.title);
  }

  for (const treatment of treatments) {
    for (const relatedSlug of treatment.relatedSlugs) {
      if (!slugs.has(relatedSlug)) throw new Error(`relatedSlug inexistente en ${treatment.slug}: ${relatedSlug}`);
    }
  }
}

validateTreatments();
