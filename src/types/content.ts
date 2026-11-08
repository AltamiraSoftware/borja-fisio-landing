export type FaqItem = {
  question: string;
  answer: string;
};

export type Treatment = {
  slug: string;
  name: string;
  kind?: "pathology" | "category" | "technique";
  categorySlug?: string;
  indexable?: boolean;
  clinicalReviewPending?: boolean;
  cardDescription?: string;
  introSectionTitle?: string;
  updatedAt: string;
  seo: {
    title: string;
    description: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
  };
  recognition: string;
  whatIs?: string;
  // Secciones editoriales propias de servicios complejos: evitan fichas genéricas o repetidas.
  patientSectionsHeading?: string;
  patientSectionsIntro?: string;
  patientSections?: Array<{
    title: string;
    description: string;
    points?: string[];
  }>;
  // Aviso de orientación clínica, nunca un diagnóstico ni una indicación automática de tratamiento.
  clinicalAdvisory?: { title: string; description: string };
  // Fuentes públicas utilizadas en el contenido, diferenciadas de la revisión profesional.
  evidenceSources?: Array<{ title: string; url: string }>;
  whenUsed?: string;
  limitations?: string;
  symptoms: string[];
  assessment: string;
  plan: Array<{ title: string; body: string }>;
  homeTreatment: string;
  clinicTreatment?: string;
  clinicOnly?: boolean;
  faq: FaqItem[];
  relatedSlugs: string[];
  relatedPathologySlugs?: string[];
  techniqueSlugs?: string[];
  contactMessage?: string;
  importedDetail?: {
    introTitle: string;
    introPoints: string[];
    heroBadges: string[];
    onlineFollowup: string;
    professionalBlurb: string;
    professionalHighlights?: string[];
  };
};
