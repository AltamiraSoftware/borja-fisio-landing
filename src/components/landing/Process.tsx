import { processSteps } from "@/data/landing";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Metodología"
          title="Cómo funciona"
          description="Una metodología individual: entender tu caso, elegir el tratamiento indicado, trabajar el movimiento y revisar la evolución."
        />

        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-1/2 top-14 hidden h-0.5 w-[75%] -translate-x-1/2 bg-gradient-to-r from-[#073B4C] via-[#2a829d] to-[#073B4C] lg:block" />

          {processSteps.map((step, index) => (
            <GlassCard
              key={step.title}
              className="relative p-6 text-center lg:min-h-64"
            >
              <div className="mx-auto grid size-16 place-items-center rounded-full border-2 border-[#073B4C] bg-[#eaf6f8] text-lg font-bold text-[#073B4C] shadow-[0_12px_28px_rgba(7,59,76,0.2)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 flex min-h-14 items-center justify-center text-xl font-semibold text-[#073B4C]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {step.text}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
