import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TreatmentPage } from "@/components/treatments/TreatmentPage";
import {
  getTreatment,
  getTreatmentMetadata,
  treatmentSlugs,
} from "@/data/tratamientos";
import { siteConfig } from "@/lib/constants";

type TreatmentRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return treatmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TreatmentRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  const metadata = getTreatmentMetadata(slug);

  if (!treatment) {
    return metadata;
  }

  return {
    title: {
      absolute: metadata.title,
    },
    description: metadata.description,
    alternates: {
      canonical: treatment.path,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${siteConfig.url}${treatment.path}`,
      siteName: siteConfig.name,
      locale: "es_ES",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FisioterapiaTreatmentRoute({
  params,
}: TreatmentRouteProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentPage treatment={treatment} />;
}
