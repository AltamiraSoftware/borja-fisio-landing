/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { formatBlogDate, type BlogCategory, type BlogPost } from "@/lib/blog";

export function BlogSearch({ posts, categories }: { posts: BlogPost[]; categories: BlogCategory[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const visible = useMemo(() => posts.filter((post) => {
    const searchable = `${post.titulo} ${post.extracto} ${post.contenido}`.toLowerCase();
    return (!search || searchable.includes(search.toLowerCase())) && (!category || post.id_categoria === category);
  }), [posts, search, category]);

  return (
    <>
      <div className="-mt-10 rounded-[28px] border border-[#8eb9ca] bg-white/95 p-4 shadow-[0_18px_44px_rgba(15,83,102,.14),0_2px_8px_rgba(15,83,102,.07)] backdrop-blur sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_17rem_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Buscar artículos</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[var(--color-steel)]" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} className="h-12 w-full rounded-2xl border border-[#cbded9] bg-[#fbfdfc] py-3 pl-12 pr-4 text-sm outline-none transition placeholder:text-[#81918e] focus:border-[var(--color-cyan)] focus:bg-white focus:ring-4 focus:ring-[#d7f4f0]" placeholder="Busca por dolor, movilidad, lesión…" />
          </label>
          <label className="relative block">
            <span className="sr-only">Filtrar por categoría</span>
            <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-steel)]" />
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="h-12 w-full appearance-none rounded-2xl border border-[#cbded9] bg-[#fbfdfc] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[var(--color-cyan)] focus:bg-white focus:ring-4 focus:ring-[#d7f4f0]">
              <option value="">Todas las categorías</option>
              {categories.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
            </select>
          </label>
          <p className="px-2 text-center text-xs font-semibold text-[var(--color-muted)] lg:text-right">{visible.length} {visible.length === 1 ? "artículo" : "artículos"}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((post, index) => (
          <article key={post.id} className={`group flex min-h-[27rem] flex-col overflow-hidden rounded-[28px] border bg-white shadow-[0_14px_38px_rgba(15,83,102,.13),0_2px_8px_rgba(15,83,102,.07)] transition duration-300 hover:-translate-y-1.5 hover:border-[#1d7898] hover:shadow-[0_24px_52px_rgba(15,83,102,.23),0_0_0_3px_rgba(46,196,198,.11)] ${index === 0 ? "border-[#73b4ca]" : "border-[#8eb9ca]"}`}>
            <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-[#dcebe7]">
              {post.imagen_destacada_url ? <img src={post.imagen_destacada_url} alt={post.imagen_alt || post.titulo} className="size-full object-cover transition duration-500 group-hover:scale-[1.045]" /> : <div className="size-full bg-[radial-gradient(circle_at_24%_25%,rgba(46,196,198,.58),transparent_22%),linear-gradient(135deg,#073b4c,#167e78)]" />}
              <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#063947]/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">{post.categoria?.nombre || "Fisioterapia"}</span>
            </Link>
            <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-steel)]"><CalendarDays className="size-3.5" />{formatBlogDate(post.publicado_en)}</div>
              <h2 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[var(--color-night)]"><Link href={`/blog/${post.slug}`} className="transition hover:text-[var(--color-steel)]">{post.titulo}</Link></h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--color-muted)]">{post.extracto}</p>
              <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[var(--color-steel)] transition hover:gap-3 hover:text-[var(--color-petrol)]">Leer artículo <ArrowUpRight className="size-4" /></Link>
            </div>
          </article>
        ))}
      </div>

      {!visible.length && <div className="mt-10 rounded-[28px] border border-dashed border-[#8eb9ca] bg-white/70 p-12 text-center"><Search className="mx-auto size-7 text-[var(--color-steel)]" /><p className="mt-4 font-bold text-[var(--color-night)]">No hemos encontrado artículos con esa búsqueda.</p><button onClick={() => { setSearch(""); setCategory(""); }} className="mt-3 text-sm font-bold text-[var(--color-steel)] underline underline-offset-4">Ver todos los artículos</button></div>}
    </>
  );
}
