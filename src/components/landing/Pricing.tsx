import { CheckCircle2, Home, MapPinned } from "lucide-react";
import { pricingIncludes } from "@/data/landing";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Pricing() {
  return (
    <section id="precio" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader align="center" eyebrow="Tarifas" title="Dos modalidades, precios claros" description="Elige la consulta de Arganzuela o una sesión a domicilio en Madrid. Confirma la disponibilidad y la zona de desplazamiento antes de reservar." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr_1.1fr]">
          <GlassCard variant="solid" className="group flex flex-col items-center p-7 text-center md:p-8">
            <div className="card-icon"><MapPinned aria-hidden="true" /></div>
            <h3 className="mt-5 text-2xl font-semibold text-[#073B4C]">En consulta</h3>
            <p className="mt-2 flex min-h-[4.5rem] items-center justify-center text-sm leading-6 text-[var(--color-muted)]">Consulta independiente en Meraki, coworking sanitario · Rafael de Riego, 11</p>
            <p className="mt-6 text-5xl font-semibold tracking-tight text-[#073B4C]">{siteConfig.priceClinic}</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Primera sesión</p>
            <div className="mt-auto pt-8"><Button href={buildWhatsappHref("Hola Borja, quiero reservar una sesión presencial en la consulta de Arganzuela.")}>Consultar cita</Button></div>
          </GlassCard>
          <GlassCard variant="solid" className="group flex flex-col items-center p-7 text-center md:p-8">
            <div className="card-icon"><Home aria-hidden="true" /></div>
            <h3 className="mt-5 text-2xl font-semibold text-[#073B4C]">A domicilio</h3>
            <p className="mt-2 flex min-h-[4.5rem] items-center justify-center text-sm leading-6 text-[var(--color-muted)]">En Madrid, según zona y disponibilidad</p>
            <p className="mt-6 text-5xl font-semibold tracking-tight text-[#073B4C]">{siteConfig.priceHome}</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Primera sesión</p>
            <div className="mt-auto pt-8"><Button href={buildWhatsappHref("Hola Borja, quiero reservar una sesión de fisioterapia a domicilio en Madrid.")}>Consultar zona</Button></div>
          </GlassCard>
          <GlassCard variant="solid" className="group p-7 md:p-8">
            <div className="card-icon"><CheckCircle2 aria-hidden="true" /></div>
            <h3 className="mt-5 text-center text-2xl font-semibold text-[#073B4C]">La sesión incluye</h3>
            <ul className="mt-6 grid gap-4">
              {pricingIncludes.map((item) => <li key={item} className="flex items-center justify-center gap-3 text-sm leading-6 text-[var(--color-muted)]"><CheckCircle2 className="size-5 shrink-0 text-[#2b9b9d]" aria-hidden="true" />{item}</li>)}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
