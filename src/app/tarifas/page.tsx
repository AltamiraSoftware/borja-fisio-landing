import type { Metadata } from "next";
import { CheckCircle2, Home, MapPinned, MessageCircle } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocationSection } from "@/components/landing/LocationSection";
import { InteriorHero } from "@/components/common/InteriorHero";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { pricingIncludes } from "@/data/landing";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Precios de fisioterapia en Chamberí",
  description: "Precios de fisioterapia con Borja Estarellas: primera sesión en consulta en Chamberí por 50 € o a domicilio en Madrid por 60 €.",
  alternates: { canonical: "/tarifas" },
};

const options = [
  {
    icon: MapPinned,
    title: "Consulta en Chamberí",
    price: siteConfig.priceClinic,
    description: "Atención presencial en una consulta independiente dentro de Meraki Salud Chamberí, en Almagro.",
    detail: "Calle de Caracas, 6, bajo izquierda · Cita previa",
    cta: "Pedir cita en consulta",
    href: buildWhatsappHref("Hola Borja, quiero pedir una cita presencial en Chamberí."),
  },
  {
    icon: Home,
    title: "Fisioterapia a domicilio",
    price: siteConfig.priceHome,
    description: "Valoración y tratamiento en tu domicilio en Madrid, adaptados a tu situación y a tu entorno.",
    detail: "Zona y disponibilidad a confirmar antes de reservar",
    cta: "Consultar mi zona",
    href: buildWhatsappHref("Hola Borja, quiero confirmar la zona y reservar una sesión a domicilio en Madrid."),
  },
] as const;

export default function PricesPage() {
  const whatsappHref = buildWhatsappHref("Hola Borja, quiero consultar una primera sesión de fisioterapia en Chamberí.");

  return (
    <>
      <Header />
      <main className="page-flow-bg">
        <InteriorHero
          eyebrow="Información clara"
          title="Precios de fisioterapia en Chamberí"
          intro="Conoce el precio de la primera sesión y elige entre la consulta en Chamberí o la atención a domicilio en Madrid. Antes de reservar, revisamos disponibilidad y la modalidad más adecuada para ti."
          actions={
            <>
              <Button href={whatsappHref} target="_blank" size="lg" variant="whatsapp" icon={<MessageCircle className="size-5" aria-hidden="true" />}>Consultar disponibilidad</Button>
              <Button href="#precios" size="lg" variant="secondary">Ver precios</Button>
            </>
          }
          strip={<TreatmentHeroStrip />}
        />

        <section id="precios" className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0F5366]">Primera sesión</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#073B4C] md:text-4xl">Dos formas de empezar, un mismo seguimiento profesional</h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">La valoración, el tratamiento y las pautas se adaptan a tu caso. Elige la modalidad que mejor encaje contigo.</p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              {options.map(({ icon: Icon, title, price, description, detail, cta, href }) => (
                <GlassCard key={title} variant="solid" className="flex min-h-[30rem] flex-col items-center p-8 text-center md:p-10">
                  <span className="card-icon"><Icon aria-hidden="true" /></span>
                  <h3 className="mt-7 text-2xl font-semibold text-[#073B4C]">{title}</h3>
                  <p className="mt-6 text-6xl font-semibold tracking-[-0.04em] text-[#073B4C]">{price}</p>
                  <p className="mt-2 text-sm font-medium text-[#0F5366]">Primera sesión</p>
                  <p className="mt-6 flex-1 leading-7 text-[var(--color-muted)]">{description}</p>
                  <p className="mt-5 border-t border-[#d6e3df] pt-5 text-sm font-medium leading-6 text-[#173f50]">{detail}</p>
                  <Button href={href} className="mt-7 self-center">{cta}</Button>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wash px-4 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0F5366]">Qué incluye</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#073B4C] md:text-4xl">Una primera sesión para entender qué necesitas</h2>
              <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">No se trata de aplicar un protocolo fijo. La sesión sirve para valorar tu situación, resolver dudas y plantear los siguientes pasos con criterio.</p>
            </div>

            <GlassCard variant="solid" className="flex flex-col items-center p-8 text-center md:p-10">
              <span className="card-icon"><CheckCircle2 aria-hidden="true" /></span>
              <ul className="mt-8 grid w-full gap-4 text-left sm:grid-cols-2">
                {pricingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-[#d6e3df] bg-[#f8fcfb] p-4 leading-7 text-[#173f50]">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#2b9b9d]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </section>

        <LocationSection />

        <CtaBanner
          title="¿Quieres reservar o resolver una duda antes?"
          description="Escríbeme qué necesitas y te confirmaré la disponibilidad de la consulta en Chamberí o la atención a domicilio."
          ctaText="Consultar por WhatsApp"
          ctaSubtext={`Consulta ${siteConfig.priceClinic} · Domicilio ${siteConfig.priceHome}`}
          whatsappMsg="Hola Borja, quiero consultar una primera sesión de fisioterapia en Chamberí."
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
