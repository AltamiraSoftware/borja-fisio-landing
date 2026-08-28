import { ArrowRight, CheckCircle2 } from "lucide-react";
import { problemChecklist } from "@/data/landing";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProblemBenefit() {
  return (
    <section className="px-4 py-20 ">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="fade-up">
          <SectionHeader
            eyebrow="Sin desplazarte"
            title="Fisioterapia para tratar el dolor sin desplazarte de casa"
            description="Cuando aparece dolor, una lesión o una limitación de movimiento, desplazarse hasta una consulta no siempre es fácil. La fisioterapia a domicilio permite empezar el tratamiento en un entorno cómodo, con una valoración completa y un plan adaptado a tu situación real."
          />
        </div>

        <GlassCard className="relative overflow-hidden p-7 md:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,196,198,0.14)_0%,rgba(255,255,255,0)_64%)]" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">
                  Casos frecuentes
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#073B4C]">
                  Valoración y plan desde la primera sesión
                </h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {problemChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#d9e8e4] bg-white/62 px-4 py-3"
                >
                  <CheckCircle2
                    className="size-5 shrink-0 text-[#2b9b9d]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-[#102A33]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <Button
                href={buildWhatsappHref(
                  "Hola Borja, tengo dolor o una lesion y quiero saber si la fisioterapia a domicilio puede ayudarme.",
                )}
                variant="dark"
                icon={<ArrowRight className="size-4" aria-hidden="true" />}
                iconPosition="right"
              >
                Consultar disponibilidad
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
