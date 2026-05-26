import { processSteps } from "@/data/landing";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Proceso"
          title="Cómo funciona"
          description="Un proceso simple, con valoración y tratamiento desde el primer contacto, pensado para que sepas qué esperar en cada paso."
        />

        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-1/2 top-12 hidden h-0.5 w-[75%] -translate-x-1/2 bg-gradient-to-r from-[#2EC4C6] via-[#A4BE7B] to-[#2EC4C6] lg:block" />

          {processSteps.map((step, index) => (
            <GlassCard
              key={step.title}
              className="relative p-6 text-center lg:min-h-64"
            >
              <div className="mx-auto grid size-16 place-items-center rounded-full border border-white/70 bg-white/78 text-lg font-semibold text-[#073B4C] shadow-[0_16px_38px_rgba(5,46,58,0.14)] backdrop-blur-xl">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#073B4C]">
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
