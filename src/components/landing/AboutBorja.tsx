import { GraduationCap, Quote } from "lucide-react";
import { aboutBadges, educationItems } from "@/data/landing";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutBorja() {
  return (
    <section id="sobre-mi" className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Sobre Borja"
            title="Fisioterapia con Borja Estarellas Botín"
            description="Borja es fisioterapeuta en Madrid especializado en fisioterapia musculoesquelética y deportiva. Su enfoque combina valoración funcional, terapia manual, ejercicio terapéutico y educación del paciente para adaptar cada sesión a la persona, al dolor y al objetivo de recuperación."
          />
          <div className="mt-7 flex flex-wrap gap-2">
            {aboutBadges.map((badge, index) => (
              <Badge key={badge} variant={index % 2 === 0 ? "cyan" : "sage"}>
                {badge}
              </Badge>
            ))}
          </div>

          <GlassCard variant="dark" className="premium-dark-bg mt-8 p-7 md:p-8">
            <Quote className="mx-auto size-8 text-[#8cf3ef]" aria-hidden="true" />
            <p className="mt-5 text-pretty text-xl font-medium leading-9 text-white">
              “Un tratamiento serio no empieza por aplicar técnicas al azar,
              sino por entender qué limita tu movimiento y qué necesita tu
              cuerpo para volver a funcionar mejor.”
            </p>
            <p className="mt-5 text-sm font-semibold text-white/80">
              {siteConfig.fullName}
            </p>
          </GlassCard>
        </div>

        <div>
          <GlassCard className="group p-7 md:p-8">
            <div className="text-center">
              <div className="card-icon">
                <GraduationCap aria-hidden="true" />
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">
                  Formación
                </p>
                <h3 className="text-2xl font-semibold text-[#073B4C]">
                  Base clínica y ejercicio terapéutico
                </h3>
              </div>
            </div>

            <ul className="mt-7 grid gap-4">
              {educationItems.map((item) => (
                <li
                  key={item}
                  className="rounded-[20px] border border-[#5f9eb5] bg-[#f2f9fb] px-4 py-4 text-sm font-medium leading-7 text-[#173f50] shadow-[0_4px_14px_rgba(15,83,102,0.08)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

        </div>
      </div>
    </section>
  );
}
