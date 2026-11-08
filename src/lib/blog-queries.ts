import { createClient } from "@/lib/supabase/server";
import type { BlogCategory, BlogPost } from "@/lib/blog";

const BLOG_SELECT = "id,titulo,slug,extracto,contenido,imagen_destacada_url,imagen_alt,id_categoria,estado,meta_title,meta_description,id_autor,publicado_en,creado_en,actualizado_en,categoria:blog_categories(id,nombre,slug,descripcion)";

function toBlogPost(row: unknown): BlogPost {
  const post = row as BlogPost & { categoria?: BlogCategory | BlogCategory[] | null };
  return {
    ...post,
    categoria: Array.isArray(post.categoria) ? post.categoria[0] ?? null : post.categoria ?? null,
  };
}

export async function getPublishedPosts() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("blog_posts").select(BLOG_SELECT).eq("estado", "published").order("publicado_en", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(toBlogPost);
}

export async function getPublishedPostBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("blog_posts").select(BLOG_SELECT).eq("estado", "published").eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data ? toBlogPost(data) : null;
}

export async function getCategories() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("blog_categories").select("id,nombre,slug,descripcion").order("nombre");
  if (error) throw error;
  return (data ?? []) as BlogCategory[];
}
