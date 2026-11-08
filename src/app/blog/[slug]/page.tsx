/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, Stethoscope } from "lucide-react";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogProfessionalCard } from "@/components/blog/BlogProfessionalCard";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { extractPlainText, formatBlogDate } from "@/lib/blog";
import { getPublishedPostBySlug } from "@/lib/blog-queries";

export const dynamic = "force-dynamic";

function readingTime(content: string) {
  const words = extractPlainText(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getPublishedPostBySlug((await params).slug);
  if (!post) return { title: "Artículo no encontrado", robots: { index: false, follow: false } };

  return {
    title: post.meta_title || post.titulo,
    description: post.meta_description || post.extracto || extractPlainText(post.contenido).slice(0, 160),
    openGraph: { type: "article", images: post.imagen_destacada_url ? [post.imagen_destacada_url] : [] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPublishedPostBySlug((await params).slug);
  if (!post) notFound();
  const minutes = readingTime(post.contenido);

  return (
    <>
      <Header />
      <main className="page-flow-bg min-h-dvh pt-24">
        <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:pb-16 sm:pt-16">
          <div className="pointer-events-none absolute right-0 top-0 size-[30rem] rounded-full bg-[#bdece6]/45 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-steel)] transition hover:-translate-x-1 hover:text-[var(--color-petrol)]"><ArrowLeft className="size-4" />Volver a los artículos</Link>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[.12em] text-[var(--color-steel)]">
              {post.categoria?.nombre && <span className="rounded-full bg-[#dff5f1] px-3 py-1.5 text-[var(--color-petrol)]">{post.categoria.nombre}</span>}
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" />{formatBlogDate(post.publicado_en)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock3 className="size-3.5" />{minutes} min de lectura</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.06] tracking-tight text-[var(--color-night)] sm:text-6xl">{post.titulo}</h1>
            {post.extracto && <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-[var(--color-muted)] sm:text-xl">{post.extracto}</p>}
            <div className="mt-8 flex items-center gap-3 border-t border-[#cfe3dd] pt-6 text-sm text-[var(--color-muted)]"><span className="grid size-9 place-items-center rounded-full bg-[var(--color-petrol)] text-white"><Stethoscope className="size-4" /></span><span>Escrito por <strong className="font-semibold text-[var(--color-petrol)]">Borja Estarellas</strong></span></div>
          </div>
        </section>
        <ContactSection topic={post.titulo} />

        {post.imagen_destacada_url && <section className="mx-auto max-w-6xl px-4"><img src={post.imagen_destacada_url} alt={post.imagen_alt || post.titulo} className="aspect-[16/8] w-full rounded-[2rem] border border-white/80 object-cover shadow-[0_26px_65px_rgba(5,46,58,.18)]" /></section>}

        <section className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
          <article className="rounded-[2rem] border border-[#d6e8e4] bg-white px-6 py-8 shadow-[0_16px_45px_rgba(5,46,58,.08)] sm:px-10 sm:py-12"><BlogContent content={post.contenido} /></article>
          <div className="my-10"><BlogProfessionalCard topic={post.titulo} /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
