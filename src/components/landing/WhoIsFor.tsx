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

          <GlassCard className="group mt-8 p-7">
            <div className="card-icon"><Quote aria-hidden="true" /></div>
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
                className="flex flex-col items-center justify-center gap-2 rounded-[22px] border border-[#a8cbd7] bg-white/75 p-4 text-center"
              >
                <CheckCircle2
                  className="size-5 shrink-0 text-[#14718b]"
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
