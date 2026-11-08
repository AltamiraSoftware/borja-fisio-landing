import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPathologyTreatments, getTreatment, getTreatmentPath } from "@/content/treatments";
import { TreatmentPage } from "@/components/treatment/TreatmentPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTreatmentJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { sharedOpenGraph } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPathologyTreatments().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = getTreatment((await params).slug);
  if (!treatment || treatment.kind !== "pathology") return { robots: { index: false, follow: false } };
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

export default async function PathologyRoute({ params }: Props) {
  const treatment = getTreatment((await params).slug);
  if (!treatment || treatment.kind !== "pathology") notFound();
  return <><JsonLd data={getTreatmentJsonLd(treatment)} /><TreatmentPage treatment={treatment} /></>;
}
