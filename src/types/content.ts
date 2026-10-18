export type FaqItem = {
  question: string;
  answer: string;
};

export type Treatment = {
  slug: string;
  name: string;
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
  symptoms: string[];
  assessment: string;
  plan: Array<{ title: string; body: string }>;
  homeTreatment: string;
  clinicTreatment?: string;
  clinicOnly?: boolean;
  faq: FaqItem[];
  relatedSlugs: string[];
  importedDetail?: {
    introTitle: string;
    introPoints: string[];
    heroBadges: string[];
    onlineFollowup: string;
    professionalBlurb: string;
    professionalHighlights?: string[];
  };
};
