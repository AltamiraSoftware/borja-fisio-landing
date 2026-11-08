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
