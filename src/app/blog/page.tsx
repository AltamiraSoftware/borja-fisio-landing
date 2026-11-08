import type { Metadata } from "next";
import { ArrowDown, BookOpenCheck, Stethoscope } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { ContactSection } from "@/components/landing/ContactSection";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";
import { getCategories, getPublishedPosts } from "@/lib/blog-queries";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Blog de fisioterapia en Madrid",
  description: "Artículos de fisioterapia, recuperación y movimiento de Borja Estarellas.",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPublishedPosts(), getCategories()]);

  return (
    <>
      <Header />
      <main className="page-flow-bg min-h-dvh overflow-hidden">
        <section className="premium-hero-bg relative isolate px-4 pb-24 pt-32 text-white sm:pb-28 sm:pt-40">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -right-24 top-6 size-80 rounded-full bg-[#2ec4c6]/15 blur-3xl" />
            <div className="absolute -left-20 bottom-0 size-72 rounded-full border border-white/10" />
            <div className="absolute bottom-16 right-[22%] size-32 rounded-full border border-[#8cf3ef]/20" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-[#b8faf5]"><BookOpenCheck className="size-4" />Cuaderno de salud y movimiento</p>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">Fisioterapia explicada con claridad.</h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/78 sm:text-xl">Ideas prácticas para entender mejor el dolor, recuperarte con criterio y cuidar tu movimiento en el día a día.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4 text-sm text-white/76"><span className="inline-flex items-center gap-2"><Stethoscope className="size-4 text-[#8cf3ef]" />Por Borja Estarellas</span><span className="hidden size-1 rounded-full bg-white/40 sm:block" /><span>Fisioterapeuta en Madrid</span></div>
            </div>
            <div className="mt-10 max-w-5xl"><TreatmentHeroStrip /></div>
            <a href="#articulos" className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-[#b8faf5] transition hover:text-white">Explorar artículos <ArrowDown className="size-4" /></a>
          </div>
        </section>
        <ContactSection topic="artículos de fisioterapia" />

        <section id="articulos" className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28">
          <BlogSearch posts={posts} categories={categories} />
        </section>
      </main>
      <Footer />
    </>
  );
}
