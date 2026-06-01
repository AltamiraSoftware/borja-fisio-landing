import { CheckCircle2, Quote } from "lucide-react";
import { whoIsFor } from "@/data/landing";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhoIsFor() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeader
            eyebrow="Enfoque"
            title="¿Para quién está pensada esta fisioterapia?"
            description="Una fisioterapia seria debe adaptarse a la persona, al dolor, al contexto y al objetivo. No todas las molestias necesitan lo mismo, y no todo tratamiento empieza por la camilla."
          />

          <GlassCard className="mt-8 p-7" hover={false}>
            <Quote className="size-8 text-[#0F5366]" aria-hidden="true" />
            <p className="mt-5 text-pretty text-xl font-medium leading-9 text-[#073B4C]">
              “No se trata solo de aliviar durante la sesión. El objetivo es
              que entiendas qué te ocurre, mejores tu función y tengas
              herramientas para mantener la recuperación.”
            </p>
          </GlassCard>
        </div>

        <GlassCard className="p-6 md:p-8">
          <div className="grid gap-4">
            {whoIsFor.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-[22px] border border-[#d9e8e4] bg-white/64 p-4"
              >
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-[#2b9b9d]"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium leading-7 text-[#102A33]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
