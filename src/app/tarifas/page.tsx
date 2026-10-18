import type { Metadata } from "next";
import { CheckCircle2, Home, MapPinned } from "lucide-react";
import { StandardPage } from "@/components/common/StandardPage";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { pricingIncludes } from "@/data/landing";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tarifas de fisioterapia en Madrid",
  description: "Primera sesión de fisioterapia con Borja Estarellas: 50 € en consulta en Arganzuela y 60 € a domicilio en Madrid.",
  alternates: { canonical: "/tarifas" },
};

export default function PricesPage() {
  return (
    <StandardPage eyebrow="Información clara" title="Tarifas de fisioterapia" intro="Primera sesión presencial en Arganzuela por 50 € o a domicilio en Madrid por 60 €. Confirma zona y disponibilidad antes de reservar.">
      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard variant="solid" className="flex flex-col items-center p-8 md:p-10" hover={false}>
          <MapPinned className="size-8 text-[#0F5366]" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold text-[#073B4C]">En consulta · Arganzuela</h2>
          <p className="mt-3 text-5xl font-semibold tracking-tight text-[#073B4C]">{siteConfig.priceClinic}</p>
          <p className="mt-5 flex-1 leading-7 text-[var(--color-muted)]">Consulta independiente en Meraki, coworking sanitario · Calle de Rafael de Riego, 11. Atención con cita previa.</p>
          <div className="mt-auto flex justify-center pt-8"><Button href={buildWhatsappHref("Hola Borja, quiero pedir una cita presencial en Arganzuela.")}>Pedir cita en consulta</Button></div>
        </GlassCard>
        <GlassCard variant="solid" className="flex flex-col items-center p-8 md:p-10" hover={false}>
          <Home className="size-8 text-[#0F5366]" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold text-[#073B4C]">A domicilio · Madrid</h2>
          <p className="mt-3 text-5xl font-semibold tracking-tight text-[#073B4C]">{siteConfig.priceHome}</p>
          <p className="mt-5 flex-1 leading-7 text-[var(--color-muted)]">Consulta si tu dirección está dentro de la zona de atención antes de reservar.</p>
          <div className="mt-auto flex justify-center pt-8"><Button href={buildWhatsappHref("Hola Borja, quiero confirmar la zona y reservar una sesión a domicilio en Madrid.")}>Consultar mi zona</Button></div>
        </GlassCard>
      </div>
      <GlassCard variant="solid" className="mt-6 p-8 md:p-10" hover={false}>
        <h2 className="text-2xl font-semibold text-[#073B4C]">Qué incluye la primera sesión</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">{pricingIncludes.map((item) => <li key={item} className="flex items-center justify-center gap-3 leading-7"><CheckCircle2 className="size-5 shrink-0 text-[#2b9b9d]" aria-hidden="true" />{item}</li>)}</ul>
      </GlassCard>
    </StandardPage>
  );
}
