import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllTreatments, getTreatmentPath } from "@/content/treatments";
import { getPublishedPosts } from "@/lib/blog-queries";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const indexablePaths = ["", "/fisioterapia-chamberi", "/rehabilitacion-a-domicilio-madrid", "/tratamientos", "/sobre-borja", "/tarifas", "/blog", "/preguntas-frecuentes", "/contacto"];

  const posts = await getPublishedPosts();

  return [
    ...indexablePaths.map((path) => ({
      url: `${siteConfig.url}${path}`,
    })),
    ...getAllTreatments().filter((treatment) => treatment.indexable !== false).map((treatment) => ({
      url: `${siteConfig.url}${getTreatmentPath(treatment.slug)}`,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.actualizado_en,
    })),
  ];
}
