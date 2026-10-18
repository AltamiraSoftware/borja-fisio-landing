import {
  Activity,
  Dumbbell,
  Footprints,
  HandHeart,
  Home,
  MoveVertical,
  Route,
  ScanLine,
} from "lucide-react";
import { services } from "@/data/landing";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const icons = {
  home: Home,
  scan: ScanLine,
  neck: MoveVertical,
  spine: ScanLine,
  dumbbell: Dumbbell,
  activity: Activity,
  hand: HandHeart,
  footprints: Footprints,
  route: Route,
} as const;

export function Services() {
  return (
    <section id="servicios" className="px-4 pt-0 pb-0">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Tratamientos"
          title="Tratamientos de fisioterapia en Madrid"
          description="Sesiones orientadas a reducir dolor, recuperar función y ayudarte a volver a tu actividad con una progresión clara."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <GlassCard key={service.title} variant="solid" className="group flex min-h-72 flex-col items-center p-7 text-center">
                <div className="card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="mt-6 flex min-h-14 items-center justify-center text-xl font-semibold text-[#073B4C]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                  {service.text}
                </p>
                <Button href={service.href} size="sm" className="mt-6 self-center">
                  Consultar tratamiento
                </Button>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
