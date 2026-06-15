import type { MetadataRoute } from "next";
import { treatmentList } from "@/data/tratamientos";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...treatmentList.map((treatment) => ({
      url: `${siteConfig.url}${treatment.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: treatment.slug === "fisioterapia-domicilio" ? 0.9 : 0.8,
    })),
  ];
}
