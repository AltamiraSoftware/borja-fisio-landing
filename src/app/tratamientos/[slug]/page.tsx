import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getAllTreatments, getTreatment, getTreatmentPath, getConsolidatedTarget, legacyTreatmentSlugs } from "@/content/treatments";
import { TreatmentPage } from "@/components/treatment/TreatmentPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTreatmentJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { sharedOpenGraph } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...getAllTreatments().map(({ slug }) => ({ slug })), ...Object.keys(legacyTreatmentSlugs).map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = getTreatment((await params).slug);
  if (!treatment || treatment.kind === "pathology" || getConsolidatedTarget(treatment.slug)) return {};
  const path = getTreatmentPath(treatment.slug);

  return {
    title: { absolute: `${treatment.seo.title} | Borja Estarellas` },
    description: treatment.seo.description,
    alternates: { canonical: path },
    robots: treatment.indexable === false ? { index: false, follow: true } : undefined,
    openGraph: {
      ...sharedOpenGraph,
      title: `${treatment.seo.title} | Borja Estarellas`,
      description: treatment.seo.description,
      url: `${siteConfig.url}${path}`,
      type: "website",
      images: [{ url: "/borja.png", width: 1024, height: 1280, alt: "Borja Estarellas, fisioterapeuta en Madrid" }],
    },
  };
}

export default async function TreatmentRoute({ params }: Props) {
  const { slug } = await params;
  if (legacyTreatmentSlugs[slug]) permanentRedirect(getTreatmentPath(legacyTreatmentSlugs[slug]));
  const treatment = getTreatment(slug);
  if (!treatment) notFound();
  if (treatment.kind === "pathology" || getConsolidatedTarget(slug)) permanentRedirect(getTreatmentPath(slug));

  return <><JsonLd data={getTreatmentJsonLd(treatment)} /><TreatmentPage treatment={treatment} /></>;
}
