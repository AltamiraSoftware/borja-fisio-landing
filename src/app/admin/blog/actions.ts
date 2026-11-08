"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/require-admin";
import { slugify } from "@/lib/blog";

function value(formData: FormData, name: string) { return String(formData.get(name) ?? "").trim(); }

export async function savePost(formData: FormData) {
  const { supabase, admin } = await requireAdmin();
  const id = value(formData, "id");
  const estado = value(formData, "intent") === "published" ? "published" : "draft";
  const titulo = value(formData, "titulo"); const slug = slugify(value(formData, "slug") || titulo);
  const extracto = value(formData, "extracto"); const contenido = value(formData, "contenido");
  const imagen = value(formData, "imagen_destacada_url") || null; const imagenAlt = value(formData, "imagen_alt") || null;
  if (!titulo || !slug || !contenido) redirect(`/admin/blog${id ? `/${id}/editar` : "/nuevo"}?error=campos`);
  if (imagen && !imagenAlt) redirect(`/admin/blog${id ? `/${id}/editar` : "/nuevo"}?error=alt`);
  const payload = { titulo, slug, extracto, contenido, imagen_destacada_url: imagen, imagen_alt: imagenAlt, id_categoria: value(formData, "id_categoria") || null, estado, meta_title: value(formData, "meta_title") || null, meta_description: value(formData, "meta_description") || null, id_autor: admin.userId };
  const result = id ? await supabase.from("blog_posts").update(payload).eq("id", id) : await supabase.from("blog_posts").insert(payload);
  if (result.error) redirect(`/admin/blog${id ? `/${id}/editar` : "/nuevo"}?error=guardar`);
  revalidatePath("/blog"); revalidatePath(`/blog/${slug}`); revalidatePath("/sitemap.xml");
  redirect("/admin/blog");
}

export async function deletePost(formData: FormData) {
  const { supabase } = await requireAdmin(); const id = value(formData, "id");
  if (id) await supabase.from("blog_posts").delete().eq("id", id);
  revalidatePath("/blog"); revalidatePath("/sitemap.xml"); redirect("/admin/blog");
}
