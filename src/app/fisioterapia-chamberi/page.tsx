import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { StandardPage } from "@/components/common/StandardPage";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { ContactSection } from "@/components/landing/ContactSection";
import { LocationSection } from "@/components/landing/LocationSection";
import { Services } from "@/components/landing/Services";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { getLocalJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Fisioterapia en Chamberí, Almagro | Borja Estarellas" },
  description: "Fisioterapia con Borja Estarellas en Almagro, Chamberí. Consulta independiente en Meraki Salud Chamberí, Calle de Caracas, 6. Cita previa y atención individual.",
  alternates: { canonical: "/fisioterapia-chamberi" },
  openGraph: {
    title: "Fisioterapia en Chamberí, Almagro | Borja Estarellas",
    description: "Consulta independiente de fisioterapia en Calle de Caracas, 6, dentro de Meraki Salud Chamberí. Atención con cita previa.",
    url: `${siteConfig.url}/fisioterapia-chamberi`,
  },
};

export default function ChamberiPage() {
  return (
    <>
    <JsonLd data={getLocalJsonLd()} />
    <StandardPage
      eyebrow="Consulta presencial · Chamberí"
      title="Fisioterapia en Chamberí"
      intro="Borja Estarellas te atiende con cita previa en su consulta independiente dentro de Meraki Salud Chamberí, en el barrio de Almagro."
      featureHero
      afterContent={<ContactSection topic="fisioterapia en Chamberí" />}
      followingContent={
        <>
          <LocationSection />
          <section className="mx-auto max-w-4xl py-20" aria-labelledby="chamberi-faq-title">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F5366]">Antes de venir</p>
              <h2 id="chamberi-faq-title" className="text-balance text-3xl font-semibold leading-tight text-[#073B4C] md:text-5xl">Preguntas sobre la consulta</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">Resuelve las dudas habituales sobre la cita en Almagro y la atención a domicilio.</p>
            </div>
            <div className="mt-10 grid gap-4">
              {[
                { question: "¿La consulta es de Meraki Salud?", answer: <>La atención de fisioterapia la presta Borja Estarellas de forma independiente. Meraki Salud Chamberí es el coworking sanitario donde se encuentra la consulta.</> },
                { question: "¿Puedo acudir sin cita?", answer: <>No. Consulta primero con Borja la disponibilidad y las indicaciones de acceso a Calle de Caracas, 6, bajo izquierda.</> },
                { question: "¿También hay atención a domicilio?", answer: <>Sí, según zona y disponibilidad en Madrid. <Link className="font-semibold text-[#0F5366] underline underline-offset-4" href="/tratamientos/fisioterapia-domicilio">Consulta cómo funciona la fisioterapia a domicilio</Link>.</> },
              ].map((item, index) => (
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
          </section>
        </>
      }
      finalContent={<CtaBanner title="¿Quieres venir a consulta?" description="La primera sesión incluye valoración funcional, tratamiento cuando esté indicado, ejercicio terapéutico y pautas para seguir avanzando. Confirma disponibilidad antes de acudir." ctaText="Pedir cita en consulta" ctaSubtext={`Consulta desde ${siteConfig.priceClinic}`} whatsappMsg="Hola Borja, quiero reservar una sesión presencial en Chamberí." />}
      heroActions={
        <>
          <Button href="#contacto" size="lg">Consultar disponibilidad</Button>
          <Button href="#ubicacion" size="lg" variant="secondary">Ver ubicación</Button>
        </>
      }
    >
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Consulta en Chamberí" }]} />
      <Services />
    </StandardPage>
    </>
  );
}
