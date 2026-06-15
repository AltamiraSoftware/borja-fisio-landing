import {
  Activity,
  ArrowUpRight,
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

const icons = {
  home: Home,
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
    <section id="servicios" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Tratamientos"
          title="Tratamientos de fisioterapia en Madrid"
          description="Sesiones orientadas a reducir dolor, recuperar función y ayudarte a volver a tu actividad con una progresión clara."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <GlassCard key={service.title} className="group flex min-h-64 flex-col items-center p-6 text-center">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#073B4C] text-white shadow-[0_14px_34px_rgba(7,59,76,0.18)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#073B4C]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                  {service.text}
                </p>
                <a
                  href={service.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0F5366] transition group-hover:text-[#0b8f91]"
                >
                  Ver tratamiento
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
