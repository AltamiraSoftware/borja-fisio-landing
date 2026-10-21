import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllTreatments, getTreatmentPath } from "@/content/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/fisioterapia-chamberi", "/rehabilitacion-a-domicilio-madrid", "/tratamientos", "/sobre-borja", "/tarifas", "/preguntas-frecuentes", "/contacto"];

  return [
    ...staticPaths.map((path, index) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : path === "/tratamientos" || path === "/fisioterapia-chamberi" ? 0.9 : 0.7,
    })),
    ...getAllTreatments().map((treatment) => ({
      url: `${siteConfig.url}${getTreatmentPath(treatment.slug)}`,
      lastModified: new Date(treatment.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
