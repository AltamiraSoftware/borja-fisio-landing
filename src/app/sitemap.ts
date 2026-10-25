import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllTreatments, getTreatmentPath } from "@/content/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const indexablePaths = ["", "/fisioterapia-chamberi", "/rehabilitacion-a-domicilio-madrid", "/tratamientos", "/sobre-borja", "/tarifas", "/preguntas-frecuentes", "/contacto"];

  return [
    ...indexablePaths.map((path) => ({
      url: `${siteConfig.url}${path}`,
    })),
    ...getAllTreatments().map((treatment) => ({
      url: `${siteConfig.url}${getTreatmentPath(treatment.slug)}`,
    })),
  ];
}
