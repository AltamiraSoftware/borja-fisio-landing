import type { Metadata } from "next";
import { Activity, ArrowDown, Dumbbell, HandHeart, MessageCircle, ScanLine } from "lucide-react";
import { StandardPage } from "@/components/common/StandardPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPathologiesJsonLd } from "@/lib/seo";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocationSection } from "@/components/landing/LocationSection";
import { Modalities } from "@/components/landing/Modalities";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getPathologyTreatments, getTreatmentPath } from "@/content/treatments";
import { treatmentCategories } from "@/content/treatmentCategories";
import { siteConfig } from "@/lib/constants";
import { sharedOpenGraph } from "@/lib/metadata";
import { buildWhatsappHref } from "@/lib/utils";

const categoryIcons = { "terapia-manual": HandHeart, "ejercicio-terapeutico": Dumbbell, "fisioterapia-invasiva-ecoguiada": ScanLine } as const;

export const metadata: Metadata = {
  title: "Patologías y motivos de consulta de fisioterapia en Madrid",
  description: "Conoce las patologías y motivos de consulta que trata Borja Estarellas en Chamberí: dolor cervical, lumbar, tendinopatías, lesiones deportivas y más.",
  alternates: { canonical: "/patologias" },
  openGraph: { ...sharedOpenGraph, title: "Patologías que tratamos en Madrid | Borja Estarellas", description: "Conoce los problemas y lesiones que valoramos en fisioterapia y los enfoques profesionales de Borja Estarellas.", url: `${siteConfig.url}/patologias` },
};

export default function PathologiesPage() {
  const pathologies = getPathologyTreatments();

  return (
    <>
    <JsonLd data={getPathologiesJsonLd(pathologies)} />
    <StandardPage
      eyebrow="Patologías y motivos de consulta · Madrid"
      title="Patologías que tratamos en fisioterapia en Madrid"
      intro="Explora las molestias, lesiones y problemas funcionales que valora Borja Estarellas en Madrid. Después de conocer tu caso se decide qué técnica o enfoque tiene sentido."
      featureHero
      heroStrip={<TreatmentHeroStrip />}
      heroActions={<><Button href={buildWhatsappHref("Hola Borja, quiero consultar qué tratamiento de fisioterapia encaja con mi caso.")} size="lg">Consultar mi caso</Button><Button href="#contacto" size="lg" variant="secondary">Solicitar orientación</Button></>}
      afterContent={<><section className="page-flow-bg px-4 pb-20 pt-2 sm:pb-24"><div className="mx-auto max-w-5xl"><div className="mx-auto flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-[var(--color-steel)]"><span className="h-px w-10 bg-[#9bcfc6]" />El siguiente paso<span className="h-px w-10 bg-[#9bcfc6]" /></div><div className="mt-7 overflow-hidden rounded-[32px] border border-[#8eb9ca] bg-white shadow-[0_18px_44px_rgba(15,83,102,.14),0_2px_8px_rgba(15,83,102,.07)]"><div className="grid items-center gap-7 p-7 sm:p-10 lg:grid-cols-[1fr_auto]"><div><p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-steel)]"><MessageCircle className="size-4" />Orientación inicial</p><h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-[var(--color-night)]">¿No tienes claro qué tratamiento encaja contigo?</h2><p className="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">No hace falta decidirlo ahora. Cuéntame brevemente qué ocurre y te orientaré sobre la modalidad y el siguiente paso.</p></div><Button href="#contacto" size="lg" className="w-full lg:w-auto"><ArrowDown className="size-5" />Solicitar orientación</Button></div></div></div></section><div className="page-flow-bg"><Modalities /><LocationSection /><CtaBanner title="¿No sabes qué tratamiento elegir?" description="Cuéntame qué te ocurre y te orientaré sobre el siguiente paso y la disponibilidad." ctaText="Consultar mi caso por WhatsApp" /></div></>}
    >
      <section id="patologias" className="scroll-mt-28">
        <SectionHeader align="center" eyebrow="¿Qué necesitas tratar?" title="Empieza por lo que te está limitando" description="Estas páginas te ayudan a entender motivos de consulta frecuentes. No necesitas identificar una técnica antes de pedir orientación." />
        <div className="treatment-card-row mt-12">
          {pathologies.map((treatment) => <GlassCard key={treatment.slug} variant="solid" className="group flex min-h-72 flex-col p-7"><div className="card-icon"><Activity aria-hidden="true" /></div><h2 className="mt-6 flex min-h-[4.5rem] items-center justify-center text-center text-xl font-semibold text-[#073B4C]">{treatment.name}</h2><p className="mt-4 flex-1 text-center text-sm leading-7 text-[var(--color-muted)]">{treatment.cardDescription ?? treatment.hero.intro}</p><Button href={getTreatmentPath(treatment.slug)} size="sm" className="mt-6 self-center">Ver información</Button></GlassCard>)}
        </div>
      </section>

      <section id="enfoques" className="mt-24 scroll-mt-28 border-t border-[#cfe3dd] pt-20">
        <SectionHeader align="center" eyebrow="¿Cómo podemos ayudarte?" title="Cómo abordamos cada patología" description="Terapia manual, ejercicio terapéutico y procedimientos ecoguiados cuando corresponda. Cada enfoque se adapta al diagnóstico y a la recuperación funcional." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {treatmentCategories.map((category) => { const Icon = categoryIcons[category.slug as keyof typeof categoryIcons]; return <GlassCard key={category.slug} variant="solid" className="group flex min-h-[25rem] flex-col p-8 text-center"><div className="card-icon"><Icon aria-hidden="true" /></div><h2 className="mt-6 text-2xl font-semibold text-[#073B4C]">{category.name}</h2><p className="mt-4 flex-1 leading-7 text-[var(--color-muted)]">{category.cardDescription}</p><Button href={getTreatmentPath(category.slug)} size="sm" className="mt-7 self-center">Explorar {category.name.toLowerCase()}</Button></GlassCard>; })}
        </div>
      </section>
    </StandardPage>
    </>
  );
}
