import type { Metadata } from "next";
import { Activity } from "lucide-react";
import { StandardPage } from "@/components/common/StandardPage";
import { LocationSection } from "@/components/landing/LocationSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { Modalities } from "@/components/landing/Modalities";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getCatalogTreatments, getTreatmentPath } from "@/content/treatments";
import { buildWhatsappHref } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tratamientos de fisioterapia en Madrid",
  description: "Explora los tratamientos de fisioterapia con Borja Estarellas en Madrid. Consulta en Chamberí y sesiones a domicilio según disponibilidad.",
  alternates: { canonical: "/tratamientos" },
  openGraph: {
    title: "Tratamientos de fisioterapia en Madrid | Borja Estarellas",
    description: "Conoce los tratamientos de Borja Estarellas y elige entre consulta en Chamberí o atención a domicilio, según tu caso.",
    url: `${siteConfig.url}/tratamientos`,
  },
};

export default function TreatmentsPage() {
  return (
    <StandardPage
      eyebrow="Tratamientos · Madrid"
      title="Fisioterapia adaptada a lo que necesitas recuperar"
      intro="No tienes que elegir una técnica ni llegar con un diagnóstico cerrado. Explora los motivos de consulta habituales o cuéntame directamente tu caso."
      featureHero
      heroStrip={<TreatmentHeroStrip />}
      heroActions={
        <>
          <Button href={buildWhatsappHref("Hola Borja, quiero consultar qué tratamiento de fisioterapia encaja con mi caso.")} size="lg">Consultar mi caso</Button>
          <Button href="#contacto" size="lg" variant="secondary">Solicitar orientación</Button>
        </>
      }
    >
      <section id="tratamientos" className="scroll-mt-28">
        <SectionHeader align="center" eyebrow="Tratamientos" title="Encuentra el cuidado que necesitas" description="Cada sesión parte de una valoración individual. Puedes acudir a la consulta de Chamberí o preguntar por la atención a domicilio según tu caso y disponibilidad." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getCatalogTreatments().map((treatment) => (
            <GlassCard key={treatment.slug} variant="solid" className="group flex min-h-72 flex-col p-7">
              <div className="card-icon"><Activity aria-hidden="true" /></div>
              <h2 className="mt-6 flex min-h-[4.5rem] items-center justify-center text-center text-xl font-semibold text-[#073B4C]">{treatment.name}</h2>
              <p className="mt-4 flex-1 text-center text-sm leading-7 text-[var(--color-muted)]">{treatment.cardDescription ?? treatment.hero.intro}</p>
              <Button href={getTreatmentPath(treatment.slug)} size="sm" className="mt-6 self-center">Ver tratamiento</Button>
            </GlassCard>
          ))}
        </div>
      </section>
      <ContactSection />
      <Modalities />
      <LocationSection />
      <CtaBanner title="¿No sabes qué tratamiento elegir?" description="Cuéntame qué te ocurre y te orientaré sobre el siguiente paso y la disponibilidad." ctaText="Consultar mi caso por WhatsApp" />
    </StandardPage>
  );
}
