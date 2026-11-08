import { processSteps } from "@/data/landing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepsProgress } from "@/components/ui/StepsProgress";

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

        <StepsProgress className="mt-14 mx-auto max-w-3xl">
          {processSteps.map((step, index) => (
            <li key={step.title}><p className="text-sm font-semibold text-[#0F5366]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 text-2xl font-semibold text-[#073B4C]">{step.title}</h3><p className="mt-3 max-w-[60ch] leading-7 text-[var(--color-muted)]">{step.text}</p></li>
          ))}
        </StepsProgress>
      </div>
    </section>
  );
}
