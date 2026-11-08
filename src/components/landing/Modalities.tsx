import { CheckCircle2, Home, MapPinned } from "lucide-react";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Modalities() {
  return (
    <section id="modalidades" className="section-wash px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div data-reveal><SectionHeader align="center" eyebrow="Modalidades" title="Elige cómo quieres empezar" description="Consulta en Chamberí y atención a domicilio en Madrid. Cuéntame tu caso y revisamos la opción disponible que mejor encaje contigo." /></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2" data-reveal-group>
          <article data-reveal className="premium-panel premium-panel--light flex min-h-[31rem] flex-col items-center p-8 text-center md:p-11">
            <span className="premium-panel__mark"><MapPinned className="size-7" aria-hidden="true" /></span>
            <p className="mt-8 text-sm font-semibold text-[#0F5366]">Almagro · Chamberí</p>
            <h3 className="mt-2 text-3xl font-semibold leading-tight text-[#073B4C]">Consulta en Chamberí</h3>
            <p className="mt-5 max-w-[46ch] leading-8 text-[var(--color-muted)]">Borja atiende en una consulta independiente dentro del centro Meraki Salud Chamberí, en la calle de Caracas, 6, bajo izquierda. Solicita cita antes de acudir para confirmar horario y disponibilidad.</p>
            <p className="mt-8 w-full border-t border-[#d6e3df] pt-5 text-sm font-semibold text-[#073B4C]">En Almagro, Chamberí · Valoración personalizada</p>
            <div className="mt-auto pt-10"><Button href="/fisioterapia-chamberi">Ver la consulta</Button></div>
          </article>
          <article data-reveal className="premium-panel premium-panel--dark flex min-h-[31rem] flex-col items-center p-8 text-center md:p-11">
            <span className="premium-panel__mark"><Home className="size-7" aria-hidden="true" /></span>
            <p className="mt-8 text-sm font-semibold text-[#b7f7f2]">Disponible según zona</p>
            <h3 className="mt-2 text-3xl font-semibold leading-tight text-white">Fisioterapia a domicilio</h3>
            <p className="mt-5 max-w-[46ch] leading-8 text-white/82">Si desplazarte es difícil o prefieres recibir la sesión en casa, Borja puede atenderte a domicilio en Madrid. Confirmaremos la zona y disponibilidad antes de reservar.</p>
            <ul className="mt-8 grid gap-3 text-sm font-medium text-white/90">{["Valoración en tu entorno", "Tratamiento y ejercicio adaptados", "Pautas para seguir avanzando"].map((point) => <li key={point} className="flex items-center justify-center gap-3"><CheckCircle2 className="size-5 shrink-0 text-[#8cf3ef]" aria-hidden="true" />{point}</li>)}</ul>
            <div className="mt-auto pt-10"><Button href={buildWhatsappHref("Hola Borja, me interesa una sesión de fisioterapia a domicilio en Madrid.")} variant="accent">Consultar disponibilidad</Button></div>
          </article>
        </div>
      </div>
    </section>
  );
}
