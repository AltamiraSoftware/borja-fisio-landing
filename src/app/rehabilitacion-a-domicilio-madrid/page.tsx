import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, MapPinned } from "lucide-react";
import { StandardPage } from "@/components/common/StandardPage";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocationSection } from "@/components/landing/LocationSection";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rehabilitación a domicilio en Madrid | Fisioterapia en casa",
  description: "Recupera movilidad y función con un plan de rehabilitación personalizado en tu domicilio en Madrid. Valoración, ejercicio y seguimiento profesional.",
  alternates: { canonical: "/rehabilitacion-a-domicilio-madrid" },
};

const cases = [
  "Recuperación después de una operación",
  "Pérdida de movilidad o fuerza",
  "Dificultad para desplazarte a una clínica",
  "Necesidad de recuperar autonomía",
  "Vuelta progresiva a la actividad",
  "Trabajo funcional en tu entorno real",
];

export default function RehabilitationPage() {
  return (
    <StandardPage
      eyebrow="Atención a domicilio · Madrid"
      title="Rehabilitación a domicilio en Madrid"
      intro="Recupera movilidad, fuerza y función con un plan personalizado en tu propia casa, sin añadir el esfuerzo de desplazarte."
      featureHero
      heroActions={
        <>
          <Button href={buildWhatsappHref("Hola Borja, quiero consultar un proceso de rehabilitación a domicilio en Madrid.")} size="lg">Consultar mi caso</Button>
          <Button href="#ubicacion" size="lg" variant="secondary">Ver la consulta</Button>
        </>
      }
    >
      <section>
        <SectionHeader align="center" eyebrow="Cuándo puede ayudarte" title="Un tratamiento pensado para tu situación" description="Si una lesión, una intervención o una limitación funcional hace difícil acudir a consulta, podemos valorar la rehabilitación en tu entorno y adaptar el plan a lo que necesitas volver a hacer." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <GlassCard key={item} variant="solid" className="group flex flex-col items-center p-7 text-center">
              <div className="card-icon"><CheckCircle2 aria-hidden="true" /></div>
              <p className="mt-5 font-semibold leading-7 text-[#173f50]">{item}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-20">
        <SectionHeader align="center" eyebrow="Modalidades" title="En casa o en la consulta de Chamberí" description="La atención a domicilio se confirma según zona y disponibilidad. Si prefieres acudir en persona, Borja también atiende en una consulta independiente dentro de Meraki Salud Chamberí, coworking sanitario." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassCard variant="solid" className="group flex flex-col p-8 md:p-10">
            <div className="card-icon"><Home aria-hidden="true" /></div>
            <h3 className="mt-6 text-center text-2xl font-semibold text-[#073B4C]">Rehabilitación a domicilio</h3>
            <p className="mt-4 flex-1 text-center leading-8 text-[var(--color-muted)]">Valoración, tratamiento y ejercicio adaptados a tu entorno. Confirmaremos la zona de Madrid antes de reservar.</p>
            <p className="mt-5 text-center text-lg font-semibold text-[#073B4C]">Desde {siteConfig.priceHome}</p>
            <Button className="mt-6 self-center" href={buildWhatsappHref("Hola Borja, quiero confirmar si puedes atenderme a domicilio en mi zona de Madrid.")}>Consultar mi zona</Button>
          </GlassCard>
          <GlassCard variant="solid" className="group flex flex-col p-8 md:p-10">
            <div className="card-icon"><MapPinned aria-hidden="true" /></div>
            <h3 className="mt-6 text-center text-2xl font-semibold text-[#073B4C]">Consulta en Chamberí</h3>
            <p className="mt-4 flex-1 text-center leading-8 text-[var(--color-muted)]">Una alternativa presencial en la calle de Caracas, 6, bajo izquierda, en Almagro. Atención siempre con cita previa.</p>
            <p className="mt-5 text-center text-lg font-semibold text-[#073B4C]">Desde {siteConfig.priceClinic}</p>
            <Button className="mt-6 self-center" href="/fisioterapia-chamberi">Conocer la consulta</Button>
          </GlassCard>
        </div>
      </section>

      <section>
        <SectionHeader align="center" eyebrow="Tratamientos relacionados" title="Un plan progresivo para volver a moverte" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { href: "/tratamientos/rehabilitacion-postoperatoria", title: "Rehabilitación postoperatoria", text: "Trabajo progresivo después de una intervención, coordinado con las indicaciones de tu equipo médico." },
            { href: "/tratamientos/fisioterapia-mayores", title: "Fisioterapia para mayores", text: "Movilidad, equilibrio, fuerza y autonomía trabajados según los objetivos de cada persona." },
          ].map((item) => (
            <GlassCard key={item.href} variant="solid" className="flex flex-col p-8">
              <h3 className="flex min-h-16 items-center justify-center text-center text-2xl font-semibold text-[#073B4C]">{item.title}</h3>
              <p className="mt-4 flex-1 text-center leading-7 text-[var(--color-muted)]">{item.text}</p>
              <Link href={item.href} className="btn btn--primary mt-6 min-h-11 self-center px-5 text-sm">Ver tratamiento</Link>
            </GlassCard>
          ))}
        </div>
      </section>

      <LocationSection />
      <CtaBanner title="Cuéntame qué necesitas recuperar" description="Valoramos tu caso, tu zona y la modalidad más adecuada antes de reservar." ctaText="Consultar por WhatsApp" whatsappMsg="Hola Borja, quiero consultar una sesión de rehabilitación en Madrid." />
    </StandardPage>
  );
}
