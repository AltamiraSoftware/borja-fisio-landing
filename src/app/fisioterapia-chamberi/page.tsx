import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CalendarCheck, ChevronDown, MessageCircle, Navigation } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocationSection } from "@/components/landing/LocationSection";
import { Services } from "@/components/landing/Services";
import { AboutBorja } from "@/components/landing/AboutBorja";
import { InteriorHero } from "@/components/common/InteriorHero";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { sharedOpenGraph } from "@/lib/metadata";
import { getLocalJsonLd } from "@/lib/seo";
import { buildWhatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Fisioterapia en Chamberí, Almagro | Borja Estarellas" },
  description: "Fisioterapia con Borja Estarellas en Almagro, Chamberí. Consulta independiente dentro del centro Meraki Salud Chamberí, Calle de Caracas, 6. Cita previa.",
  alternates: { canonical: "/fisioterapia-chamberi" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Fisioterapia en Chamberí, Almagro | Borja Estarellas",
    description: "Consulta independiente de fisioterapia dentro del centro Meraki Salud Chamberí, en Calle de Caracas, 6. Atención con cita previa.",
    url: `${siteConfig.url}/fisioterapia-chamberi`,
  },
};

const practicalDetails = [
  {
    icon: Building2,
    title: "Consulta independiente",
    description: "Borja te atiende personalmente dentro del centro Meraki Salud Chamberí, en una consulta pensada para una valoración y un tratamiento individualizados.",
  },
  {
    icon: CalendarCheck,
    title: "Siempre con cita previa",
    description: "Antes de acudir confirmamos disponibilidad y resolvemos cualquier duda práctica para que sepas cómo empezar.",
  },
] as const;

const faqs = [
  { question: "¿La consulta es de Meraki Salud?", answer: <>La atención de fisioterapia la presta Borja Estarellas en su consulta independiente, situada dentro del centro Meraki Salud Chamberí.</> },
  { question: "¿Puedo acudir sin cita?", answer: <>No. Consulta primero con Borja la disponibilidad y las indicaciones de acceso a Calle de Caracas, 6, bajo izquierda.</> },
  { question: "¿También hay atención a domicilio?", answer: <>Sí, según zona y disponibilidad en Madrid. <Link className="font-semibold text-[#0F5366] underline underline-offset-4" href="/tratamientos/fisioterapia-domicilio">Consulta cómo funciona la fisioterapia a domicilio</Link>.</> },
];

export default function ChamberiPage() {
  const whatsappHref = buildWhatsappHref("Hola Borja, quiero reservar una sesión presencial en Chamberí.");

  return (
    <>
      <JsonLd data={getLocalJsonLd()} />
      <Header />
      <main className="page-flow-bg">
        <InteriorHero
          eyebrow="Consulta presencial · Chamberí"
          title="Fisioterapia en Chamberí"
          intro="Borja Estarellas te atiende con cita previa en una consulta independiente dentro del centro Meraki Salud Chamberí, en el barrio de Almagro."
          actions={
            <>
              <Button href={whatsappHref} target="_blank" size="lg" variant="whatsapp" icon={<MessageCircle className="size-5" aria-hidden="true" />}>Consultar disponibilidad</Button>
              <Button href="#ubicacion" size="lg" variant="secondary" icon={<Navigation className="size-5" aria-hidden="true" />}>Ver ubicación</Button>
            </>
          }
          strip={<TreatmentHeroStrip />}
        />

        <section className="px-4 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0F5366]">Atención presencial</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#073B4C] md:text-4xl">Una consulta para valorar, tratar y acompañar tu recuperación.</h2>
            </div>
            <div className="grid gap-5 text-lg leading-8 text-[var(--color-muted)]">
              <p>La primera sesión empieza por entender qué te ocurre, qué actividades te limita y qué objetivos quieres recuperar. A partir de ahí se decide el plan y las herramientas que pueden ayudarte.</p>
              <p>Recibirás atención directa de Borja desde la valoración hasta el seguimiento, con espacio para resolver dudas y adaptar el tratamiento según tu evolución.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {practicalDetails.map(({ icon: Icon, title, description }) => (
              <GlassCard key={title} variant="solid" className="flex min-h-72 flex-col items-center p-8 text-center md:p-10">
                <span className="card-icon"><Icon aria-hidden="true" /></span>
                <h3 className="mt-7 text-2xl font-semibold text-[#073B4C]">{title}</h3>
                <p className="mt-4 leading-8 text-[var(--color-muted)]">{description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <Services />
        <AboutBorja />
        <LocationSection />

        <section className="section-wash px-4 py-20 md:py-28" aria-labelledby="chamberi-faq-title">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0F5366]">Antes de venir</p>
              <h2 id="chamberi-faq-title" className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#073B4C] md:text-4xl">Preguntas sobre la consulta</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">Resuelve las dudas habituales sobre la cita en Almagro y la atención a domicilio.</p>
            </div>
            <div className="mt-10 grid gap-4">
              {faqs.map((item, index) => (
                <GlassCard key={item.question} className="overflow-hidden" hover={false}>
                  <details className="group" open={index === 0}>
                    <summary className="relative flex cursor-pointer items-center justify-center px-12 py-5 text-center">
                      <span className="text-base font-semibold text-[#073B4C]">{item.question}</span>
                      <ChevronDown className="absolute right-5 size-5 shrink-0 text-[#0F5366] transition group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="border-t border-[#d9e8e4] px-6 pb-6 pt-5 text-sm leading-7 text-[var(--color-muted)]"><p>{item.answer}</p></div>
                  </details>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="¿Quieres venir a consulta?"
          description="La primera sesión incluye valoración funcional, tratamiento cuando esté indicado, ejercicio terapéutico y pautas para seguir avanzando."
          ctaText="Pedir cita en consulta"
          ctaSubtext={`Consulta desde ${siteConfig.priceClinic}`}
          whatsappMsg="Hola Borja, quiero reservar una sesión presencial en Chamberí."
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
