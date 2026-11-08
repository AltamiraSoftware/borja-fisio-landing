export const BLOG_STATUS = { DRAFT: "draft", PUBLISHED: "published" } as const;

export type BlogCategory = { id: string; nombre: string; slug: string; descripcion: string | null };
export type BlogPost = {
  id: string; titulo: string; slug: string; extracto: string; contenido: string;
  imagen_destacada_url: string | null; imagen_alt: string | null; id_categoria: string | null;
  estado: "draft" | "published"; meta_title: string | null; meta_description: string | null;
  id_autor: string; publicado_en: string | null; creado_en: string; actualizado_en: string;
  categoria?: BlogCategory | null;
};

export function slugify(value = "") {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

export function formatBlogDate(value?: string | null) {
  if (!value) return "";
  return new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

export function extractPlainText(markdown = "") {
  return markdown.replace(/^#{1,6}\s+/gm, "").replace(/(\*\*|__|\*|_|`|>)/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/^- /gm, "").replace(/\n+/g, " ").trim();
}
