import { CheckCircle2, Home, MapPinned } from "lucide-react";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Modalities() {
  return (
    <section id="modalidades" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader align="center" eyebrow="Modalidades" title="Elige cómo quieres empezar" description="Consulta en Chamberí y atención a domicilio en Madrid. Cuéntame tu caso y revisamos la opción disponible que mejor encaje contigo." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard variant="solid" className="group relative flex flex-col overflow-hidden p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#073B4C] to-[#2EC4C6]" />
            <div className="card-icon"><MapPinned aria-hidden="true" /></div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#0F5366]">Almagro · Chamberí</p>
            <h3 className="mt-3 flex min-h-[4.5rem] items-center justify-center text-3xl font-semibold text-[#073B4C]">Consulta en Chamberí</h3>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">Borja atiende en una consulta independiente dentro de Meraki Salud Chamberí, coworking sanitario, en la calle de Caracas, 6, bajo izquierda. Solicita cita antes de acudir para confirmar horario y disponibilidad.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-medium text-[#073B4C]"><span className="rounded-full bg-[#eef5f3] px-4 py-2">En Almagro, Chamberí</span><span className="rounded-full bg-[#eef5f3] px-4 py-2">Valoración personalizada</span></div>
            <div className="mt-auto flex justify-center pt-8"><Button href="/fisioterapia-chamberi">Ver la consulta</Button></div>
          </GlassCard>
          <GlassCard variant="solid" className="group flex flex-col p-8 md:p-10">
            <div className="card-icon"><Home aria-hidden="true" /></div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#0F5366]">Disponible según zona</p>
            <h3 className="mt-3 flex min-h-[4.5rem] items-center justify-center text-3xl font-semibold text-[#073B4C]">Fisioterapia a domicilio</h3>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">Si desplazarte es difícil o prefieres recibir la sesión en casa, Borja puede atenderte a domicilio en Madrid. Confirmaremos la zona y disponibilidad antes de reservar.</p>
            <ul className="mt-7 grid gap-3 text-sm font-medium text-[#073B4C]">
              {["Valoración en tu entorno", "Tratamiento y ejercicio adaptados", "Pautas para seguir avanzando"].map((point) => <li key={point} className="flex items-center justify-center gap-3"><CheckCircle2 className="size-5 shrink-0 text-[#2b9b9d]" aria-hidden="true" />{point}</li>)}
            </ul>
            <div className="mt-auto flex justify-center pt-8"><Button href={buildWhatsappHref("Hola Borja, me interesa una sesión de fisioterapia a domicilio en Madrid.")}>Consultar disponibilidad</Button></div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
