import { CheckCircle2, MapPinned, Stethoscope } from "lucide-react";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const homePoints = [
  "Evitas desplazamientos.",
  "Ideal si tienes dolor, lesión o poca disponibilidad.",
  "Tratamiento adaptado a tu entorno real.",
  "Material básico incluido si es necesario.",
] as const;

const clinicPoints = [
  "Sujeto a disponibilidad.",
  "Útil si prefieres un entorno clínico.",
  "Se confirma antes de reservar.",
  "Modalidad flexible según tu caso.",
] as const;

export function Modalities() {
  return (
    <section id="modalidades" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Modalidades"
          title="Domicilio en Madrid y opción de gabinete"
          description="La modalidad principal es la fisioterapia a domicilio. En algunos casos, también puede valorarse una cita en gabinete o sala alquilada."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassCard className="relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,196,198,0.16)_0%,rgba(255,255,255,0)_64%)]" />
            <div className="relative">
              <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-[#073B4C] text-white">
                <MapPinned className="size-6" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-semibold text-[#073B4C]">
                Fisioterapia a domicilio
              </h3>
              <p className="mt-5 text-pretty text-base leading-8 text-[var(--color-muted)]">
                La modalidad principal. Borja se desplaza a tu domicilio en
                Madrid para realizar una sesión completa de valoración,
                tratamiento y pautas. Solo necesitas un espacio cómodo para
                trabajar con seguridad.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {homePoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-[#2b9b9d]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium leading-7">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                href={buildWhatsappHref(
                  "Hola Borja, me interesa una sesión de fisioterapia a domicilio en Madrid.",
                )}
                className="mt-8"
                variant="dark"
              >
                Pedir cita por WhatsApp
              </Button>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-10">
            <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-[#2EC4C6]/14 text-[#0F5366]">
              <Stethoscope className="size-6" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-[#073B4C]">
              Atención en gabinete bajo cita
            </h3>
            <p className="mt-5 text-pretty text-base leading-8 text-[var(--color-muted)]">
              Cuando el caso, la zona o la disponibilidad lo aconsejen, también
              puede valorarse la atención en gabinete o sala alquilada bajo cita
              previa.
            </p>
            <div className="mt-7 grid gap-3">
              {clinicPoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[#2b9b9d]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-7">{point}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
