import type { Metadata } from "next";
import { CalendarDays, ClipboardCheck, MapPinned } from "lucide-react";
import { StandardPage } from "@/components/common/StandardPage";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocationSection } from "@/components/landing/LocationSection";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { locationConfig, siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fisioterapia en Chamberí, Madrid | Borja Estarellas",
  description: "Consulta de fisioterapia con Borja Estarellas en Meraki Salud Chamberí, calle de Caracas, 6, bajo izquierda, Almagro. También atención a domicilio en Madrid.",
  alternates: { canonical: "/fisioterapia-chamberi" },
};

export default function ChamberiPage() {
  return (
    <StandardPage
      eyebrow="Consulta presencial · Chamberí"
      title="Fisioterapia en Chamberí"
      intro="Una consulta independiente en Meraki Salud Chamberí, coworking sanitario, en Almagro. Borja te atiende de forma personal y con cita previa."
      featureHero
      heroActions={
        <>
          <Button href={buildWhatsappHref("Hola Borja, quiero consultar disponibilidad en la consulta de Chamberí.")} size="lg">Consultar disponibilidad</Button>
          <Button href="#ubicacion" size="lg" variant="secondary">Ver ubicación</Button>
        </>
      }
    >
      <section>
        <SectionHeader align="center" eyebrow="La consulta" title="Un espacio para entender tu caso y avanzar" description="En la calle de Caracas, 6, bajo izquierda, Borja realiza personalmente la valoración, el tratamiento y el seguimiento. La consulta está dentro de Meraki Salud Chamberí, coworking sanitario, en el barrio de Almagro." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: MapPinned, title: "En Almagro", text: `${locationConfig.address}, ${locationConfig.postalCode} Madrid. Una ubicación accesible en Chamberí.` },
            { icon: ClipboardCheck, title: "Valoración individual", text: "Revisamos qué te limita y qué necesitas recuperar para adaptar la sesión a tus objetivos." },
            { icon: CalendarDays, title: "Siempre con cita", text: "Confirma horario y disponibilidad antes de acudir. También puedes consultar la atención a domicilio." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} variant="solid" className="group p-7 text-center">
                <div className="card-icon"><Icon aria-hidden="true" /></div>
                <h3 className="mt-6 flex min-h-14 items-center justify-center text-xl font-semibold text-[#073B4C]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <LocationSection />

      <section>
        <GlassCard variant="solid" className="flex flex-col items-center p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0F5366]">Primera sesión</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#073B4C]">Atención presencial desde {siteConfig.priceClinic}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">La primera sesión incluye valoración funcional, tratamiento cuando esté indicado, ejercicio terapéutico y pautas para seguir avanzando.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={buildWhatsappHref("Hola Borja, quiero reservar una sesión presencial en Chamberí.")}>Pedir cita en consulta</Button>
            <Button href="/tratamientos" variant="ghost">Ver tratamientos</Button>
          </div>
        </GlassCard>
      </section>

      <CtaBanner title="¿Quieres venir a consulta?" description="Cuéntame qué necesitas y confirmamos disponibilidad antes de que te desplaces." ctaText="Consultar por WhatsApp" whatsappMsg="Hola Borja, quiero pedir cita en la consulta de Chamberí." />
    </StandardPage>
  );
}
