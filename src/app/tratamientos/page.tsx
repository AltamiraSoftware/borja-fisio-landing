import type { Metadata } from "next";
import { Activity, ArrowDown, Dumbbell, HandHeart, MessageCircle, ScanLine } from "lucide-react";
import { StandardPage } from "@/components/common/StandardPage";
import { ContactSection } from "@/components/landing/ContactSection";
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
  title: "Tratamientos de fisioterapia en Madrid",
  description: "Explora patologías, terapia manual, ejercicio terapéutico y ecografía musculoesquelética con Borja Estarellas en Chamberí, Madrid.",
  alternates: { canonical: "/tratamientos" },
  openGraph: { ...sharedOpenGraph, title: "Tratamientos de fisioterapia en Madrid | Borja Estarellas", description: "Encuentra orientación para tu problema y conoce los enfoques de fisioterapia de Borja Estarellas en Chamberí.", url: `${siteConfig.url}/tratamientos` },
};

export default function TreatmentsPage() {
  const pathologies = getPathologyTreatments().filter((treatment) => treatment.slug !== "fisioterapia-domicilio");

  return (
    <StandardPage
      eyebrow="Tratamientos · Madrid"
      title="Fisioterapia adaptada a lo que necesitas recuperar"
      intro="Puedes empezar por lo que te ocurre o conocer los enfoques que utilizamos en fisioterapia. La valoración individual orienta el siguiente paso."
      featureHero
      heroStrip={<TreatmentHeroStrip />}
      heroActions={<><Button href={buildWhatsappHref("Hola Borja, quiero consultar qué tratamiento de fisioterapia encaja con mi caso.")} size="lg">Consultar mi caso</Button><Button href="#contacto" size="lg" variant="secondary">Solicitar orientación</Button></>}
      afterContent={<><section className="page-flow-bg px-4 pb-20 pt-2 sm:pb-24"><div className="mx-auto max-w-5xl"><div className="mx-auto flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-[var(--color-steel)]"><span className="h-px w-10 bg-[#9bcfc6]" />El siguiente paso<span className="h-px w-10 bg-[#9bcfc6]" /></div><div className="mt-7 overflow-hidden rounded-[32px] border border-[#8eb9ca] bg-white shadow-[0_18px_44px_rgba(15,83,102,.14),0_2px_8px_rgba(15,83,102,.07)]"><div className="grid items-center gap-7 p-7 sm:p-10 lg:grid-cols-[1fr_auto]"><div><p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-steel)]"><MessageCircle className="size-4" />Orientación inicial</p><h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-[var(--color-night)]">¿No tienes claro qué tratamiento encaja contigo?</h2><p className="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">No hace falta decidirlo ahora. Cuéntame brevemente qué ocurre y te orientaré sobre la modalidad y el siguiente paso.</p></div><Button href="#contacto" size="lg" className="w-full lg:w-auto"><ArrowDown className="size-5" />Solicitar orientación</Button></div></div></div></section><ContactSection /><div className="page-flow-bg"><Modalities /><LocationSection /><CtaBanner title="¿No sabes qué tratamiento elegir?" description="Cuéntame qué te ocurre y te orientaré sobre el siguiente paso y la disponibilidad." ctaText="Consultar mi caso por WhatsApp" /></div></>}
    >
      <section id="patologias" className="scroll-mt-28">
        <SectionHeader align="center" eyebrow="¿Qué necesitas tratar?" title="Empieza por lo que te está limitando" description="Estas páginas te ayudan a entender motivos de consulta frecuentes. No necesitas identificar una técnica antes de pedir orientación." />
        <div className="treatment-card-row mt-12">
          {pathologies.map((treatment) => <GlassCard key={treatment.slug} variant="solid" className="group flex min-h-72 flex-col p-7"><div className="card-icon"><Activity aria-hidden="true" /></div><h2 className="mt-6 flex min-h-[4.5rem] items-center justify-center text-center text-xl font-semibold text-[#073B4C]">{treatment.name}</h2><p className="mt-4 flex-1 text-center text-sm leading-7 text-[var(--color-muted)]">{treatment.cardDescription ?? treatment.hero.intro}</p><Button href={getTreatmentPath(treatment.slug)} size="sm" className="mt-6 self-center">Ver información</Button></GlassCard>)}
        </div>
      </section>

      <section id="enfoques" className="mt-24 scroll-mt-28 border-t border-[#cfe3dd] pt-20">
        <SectionHeader align="center" eyebrow="¿Cómo podemos ayudarte?" title="Tres enfoques que se integran según tu caso" description="Las técnicas no son un catálogo cerrado: se seleccionan tras la valoración y se combinan con objetivos funcionales claros." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {treatmentCategories.map((category) => { const Icon = categoryIcons[category.slug as keyof typeof categoryIcons]; return <GlassCard key={category.slug} variant="solid" className="group flex min-h-[25rem] flex-col p-8 text-center"><div className="card-icon"><Icon aria-hidden="true" /></div><h2 className="mt-6 text-2xl font-semibold text-[#073B4C]">{category.name}</h2><p className="mt-4 flex-1 leading-7 text-[var(--color-muted)]">{category.cardDescription}</p><Button href={getTreatmentPath(category.slug)} size="sm" className="mt-7 self-center">Explorar {category.name.toLowerCase()}</Button></GlassCard>; })}
        </div>
      </section>
    </StandardPage>
  );
}
