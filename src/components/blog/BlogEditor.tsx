/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ImageUp, LoaderCircle, Save, Send } from "lucide-react";
import { BlogContent } from "@/components/blog/BlogContent";
import { slugify, type BlogCategory, type BlogPost } from "@/lib/blog";
import { createClient } from "@/lib/supabase/client";

type BlogEditorProps = {
  post?: BlogPost | null;
  categories: BlogCategory[];
  userId: string;
  action: (formData: FormData) => void | Promise<void>;
};

const helpText = "text-xs font-normal leading-5 text-[var(--color-muted)]";
const inputClass = "rounded-xl border border-[#cbded9] px-4 py-3 font-normal outline-none focus:border-[var(--color-cyan)] focus:ring-2 focus:ring-[#c7f1ed]";

function createImageId() {
  if (typeof globalThis.crypto?.randomUUID === "function") return globalThis.crypto.randomUUID();

  if (typeof globalThis.crypto?.getRandomValues === "function") {
    const values = new Uint32Array(3);
    globalThis.crypto.getRandomValues(values);
    return Array.from(values, (value) => value.toString(36)).join("-");
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function BlogEditor({ post, categories, userId, action }: BlogEditorProps) {
  const [title, setTitle] = useState(post?.titulo ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(post?.slug));
  const [imageUrl, setImageUrl] = useState(post?.imagen_destacada_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [content, setContent] = useState(post?.contenido ?? "");

  async function uploadImage(file?: File) {
    if (!file) return;
    setUploadError("");
    const acceptedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!acceptedTypes.includes(file.type) || file.size > 5 * 1024 * 1024) {
      setUploadError("Selecciona una imagen JPG, PNG o WebP de hasta 5 MB.");
      return;
    }

    setUploading(true);
    try {
      const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `${userId}/${createImageId()}.${extension}`;
      const supabase = createClient();
      const { data: { user }, error: sessionError } = await supabase.auth.getUser();
      if (sessionError || !user || user.id !== userId) {
        throw new Error("La sesión del navegador no es válida. Cierra sesión y vuelve a acceder al panel.");
      }
      const { error } = await supabase.storage.from("blog-images").upload(path, file, {
        cacheControl: "31536000",
        upsert: false,
        contentType: file.type,
      });
      if (error) throw error;
      const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
      setImageUrl(data.publicUrl);
    } catch (error) {
      const detail = error instanceof Error ? error.message : "";
      console.error("Error al subir la imagen destacada", error);
      setUploadError(detail || "No se ha podido subir la imagen. Comprueba la política del bucket y vuelve a intentarlo.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <form action={action} className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <input type="hidden" name="id" value={post?.id ?? ""} />
      <input type="hidden" name="imagen_destacada_url" value={imageUrl} />

      <div className="rounded-[2rem] border border-[#cfe3dd] bg-white p-6 shadow-[var(--shadow-premium)] sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[.16em] text-[var(--color-steel)]">Blog</p>
        <h1 className="mt-2 text-3xl font-bold text-[var(--color-night)]">{post ? "Editar artículo" : "Nuevo artículo"}</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Los cambios de un artículo ya publicado se harán públicos al pulsar «Actualizar publicación».</p>

        <aside className="mt-6 rounded-2xl border border-[#b9ded5] bg-[#eef8f5] p-4 text-sm leading-6 text-[var(--color-petrol)]">
          <strong>Antes de publicar:</strong> revisa que título, extracto, imagen y textos SEO hablen del mismo tema. Si aún no está listo, usa «Guardar borrador»: nadie podrá verlo en la web pública.
        </aside>

        <div className="mt-8 grid gap-6">
          <label className="grid gap-2 text-sm font-bold">
            Título del artículo
            <span className={helpText}>Es el titular que verá la persona lectora. Hazlo claro y específico: «Cómo aliviar el dolor cervical al trabajar».</span>
            <input name="titulo" value={title} onChange={(event) => {
              const nextTitle = event.target.value;
              setTitle(nextTitle);
              if (!slugEdited) setSlug(slugify(nextTitle));
            }} required className={`h-12 ${inputClass}`} />
          </label>

          <label className="grid gap-2 text-sm font-bold">
            Slug (dirección web)
            <span className={helpText}>Es la última parte de la URL, por ejemplo: <em>como-aliviar-dolor-cervical</em>. Se crea desde el título; usa palabras separadas por guiones. Evita cambiarlo tras publicar para no romper enlaces compartidos.</span>
            <input name="slug" value={slug} onChange={(event) => {
              setSlugEdited(true);
              setSlug(slugify(event.target.value));
            }} required className={`h-12 ${inputClass}`} />
          </label>

          <label className="grid gap-2 text-sm font-bold">
            Extracto
            <span className={helpText}>Resumen de una o dos frases. Aparece en el listado del blog y ayuda a decidir si leer el artículo. Explica el beneficio sin repetir el título.</span>
            <textarea name="extracto" defaultValue={post?.extracto ?? ""} rows={3} className={inputClass} placeholder="Descubre hábitos y ejercicios sencillos para cuidar el cuello durante la jornada." />
          </label>

          <label className="grid gap-2 text-sm font-bold">
            Contenido
            <span className={helpText}>Escribe el artículo completo. Separa apartados con <em># Título</em> o <em>## Subtítulo</em>, y usa <em>-</em> al inicio de una línea para listas. La vista previa muestra cómo se leerá.</span>
            <textarea name="contenido" value={content} onChange={(event) => setContent(event.target.value)} required rows={16} className={`${inputClass} leading-7`} placeholder="# Introducción&#10;&#10;Explica aquí el tema con un lenguaje cercano." />
          </label>

          <details className="rounded-xl border border-[#dbe9e6] bg-[#fbfdfc] p-4">
            <summary className="cursor-pointer font-semibold text-[var(--color-night)]">Vista previa del contenido</summary>
            <div className="mt-4 border-t border-[#dbe9e6] pt-4"><BlogContent content={content || "El contenido aparecerá aquí mientras escribes."} /></div>
          </details>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              Categoría
              <span className={helpText}>Agrupa artículos parecidos para facilitar la navegación. Elige una si encaja; no es obligatorio.</span>
              <select name="id_categoria" defaultValue={post?.id_categoria ?? ""} className={`h-12 bg-white ${inputClass}`}>
                <option value="">Sin categoría</option>
                {categories.map((category) => <option key={category.id} value={category.id}>{category.nombre}</option>)}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Texto alternativo de imagen
              <span className={helpText}>Describe lo que muestra la imagen para lectores de pantalla y buscadores. Ejemplo: «Fisioterapeuta guiando un ejercicio de movilidad cervical».</span>
              <input name="imagen_alt" defaultValue={post?.imagen_alt ?? ""} className={`h-12 ${inputClass}`} placeholder="Describe la imagen" />
            </label>
          </div>

          <div className="rounded-2xl border border-dashed border-[#bdd5d1] bg-[#f6faf9] p-5">
            <label className="flex cursor-pointer items-center gap-3 text-sm font-bold text-[var(--color-petrol)]">
              <ImageUp className="size-5" />
              <span>{uploading ? "Subiendo imagen…" : "Subir imagen destacada"}</span>
              <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" disabled={uploading} onChange={(event) => uploadImage(event.target.files?.[0])} />
            </label>
            <p className={`mt-2 ${helpText}`}>Es la imagen principal del artículo y se verá en la ficha y al abrirlo. Elige una imagen horizontal, propia o con licencia de uso, en JPG, PNG o WebP (máximo 5 MB).</p>
            {uploadError && <p className="mt-3 text-sm text-red-700">{uploadError}</p>}
            {imageUrl && <img src={imageUrl} alt="Vista previa de imagen destacada" className="mt-4 h-48 w-full rounded-xl object-cover" />}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              Meta título (SEO)
              <span className={helpText}>Título para Google y la pestaña del navegador. Si lo dejas vacío, se usa el título del artículo. Procura que sea claro y de unas 50–60 letras.</span>
              <input name="meta_title" defaultValue={post?.meta_title ?? ""} className={`h-12 ${inputClass}`} placeholder="Dolor cervical: causas y consejos | Fisio Estarellas" />
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Meta descripción (SEO)
              <span className={helpText}>Resumen para Google. Si queda vacío, se usa el extracto. Resume el artículo e invita a leerlo, sin prometer resultados clínicos.</span>
              <textarea name="meta_description" defaultValue={post?.meta_description ?? ""} rows={3} className={inputClass} placeholder="Consejos de fisioterapia para comprender y aliviar el dolor cervical." />
            </label>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button name="intent" value="draft" className="btn btn--ghost h-12 px-5" disabled={uploading}>
            {uploading ? <LoaderCircle className="size-5 animate-spin" /> : <Save className="size-5" />}Guardar borrador
          </button>
          <button name="intent" value="published" className="btn btn--primary h-12 px-5" disabled={uploading}>
            {uploading ? <LoaderCircle className="size-5 animate-spin" /> : <Send className="size-5" />}{post?.estado === "published" ? "Actualizar publicación" : "Publicar"}
          </button>
          <p className="basis-full text-xs leading-5 text-[var(--color-muted)]">«Guardar borrador» conserva el trabajo sin mostrarlo en la web. «Publicar» o «Actualizar publicación» lo hace visible para cualquier visitante.</p>
        </div>
      </div>
    </form>
  );
}
