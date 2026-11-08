import Link from "next/link";
import { ArrowLeft, CalendarDays, FilePlus2, FileText, Pencil, Plus, Trash2 } from "lucide-react";
import { deletePost } from "./actions";
import { formatBlogDate, type BlogPost } from "@/lib/blog";
import { requireAdmin } from "@/lib/require-admin";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("blog_posts").select("id,titulo,slug,estado,actualizado_en,publicado_en").order("actualizado_en", { ascending: false });
  const posts = (data ?? []) as Pick<BlogPost, "id" | "titulo" | "slug" | "estado" | "actualizado_en" | "publicado_en">[];

  return (
    <main className="min-h-dvh bg-[#f5faf8]">
      <header className="border-b border-[#dcebe7] bg-white/90 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"><Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-petrol)]"><ArrowLeft className="size-4" />Panel</Link><Link href="/" className="text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-petrol)]">Ver la web</Link></div></header>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[var(--color-steel)]">Panel privado</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-night)]">Artículos del blog</h1><p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)]">Gestiona tus borradores y las publicaciones visibles en la web.</p></div><Link href="/admin/blog/nuevo" className="btn btn--primary h-12 px-5"><Plus className="size-4" />Nuevo artículo</Link></div>
        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-[#cfe3dd] bg-white shadow-[0_16px_42px_rgba(5,46,58,.08)]">
          {posts.length ? <div className="divide-y divide-[#e6f0ed]">{posts.map((post) => <article key={post.id} className="group grid gap-4 p-5 transition hover:bg-[#fbfefd] sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:px-7 sm:py-6"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[.08em] ${post.estado === "published" ? "bg-[#dcf6f0] text-[#076b65]" : "bg-[#f1eee4] text-[#7b6723]"}`}>{post.estado === "published" ? "Publicado" : "Borrador"}</span><span className="inline-flex items-center gap-1 text-xs text-[var(--color-muted)]"><CalendarDays className="size-3.5" />{formatBlogDate(post.publicado_en || post.actualizado_en)}</span></div><h2 className="mt-3 truncate text-lg font-bold text-[var(--color-night)]">{post.titulo}</h2><p className="mt-1 truncate text-sm text-[var(--color-muted)]">/blog/{post.slug}</p></div><div className="flex items-center gap-2"><Link href={`/admin/blog/${post.id}/editar`} className="btn btn--ghost h-10 px-4 text-sm"><Pencil className="size-3.5" />Editar</Link><form action={deletePost}><input type="hidden" name="id" value={post.id} /><button className="inline-flex h-10 items-center justify-center rounded-full border border-red-100 px-3 text-red-700 transition hover:border-red-200 hover:bg-red-50" aria-label={`Borrar ${post.titulo}`}><Trash2 className="size-4" /></button></form></div></article>)}</div> : <div className="px-6 py-16 text-center"><span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#e6f5f2] text-[var(--color-petrol)]"><FileText className="size-7" /></span><h2 className="mt-5 text-xl font-bold text-[var(--color-night)]">Tu blog empieza aquí</h2><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[var(--color-muted)]">Crea el primer borrador y revísalo con calma antes de publicarlo.</p><Link href="/admin/blog/nuevo" className="btn btn--primary mt-6 h-11 px-5"><FilePlus2 className="size-4" />Crear primer artículo</Link></div>}
        </div>
      </section>
    </main>
  );
}
