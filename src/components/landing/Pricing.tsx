import { CheckCircle2, MessageCircle } from "lucide-react";
import { pricingIncludes } from "@/data/landing";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Pricing() {
  return (
    <section id="precio" className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader
          eyebrow="Precio"
          title="Primera sesión de fisioterapia a domicilio desde 50 €"
          description="Una primera sesión completa para entender tu caso, tratar lo prioritario y dejarte pautas útiles para casa."
        />

        <GlassCard className="relative overflow-hidden p-8 md:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(164,190,123,0.20)_0%,rgba(255,255,255,0)_66%)]" />
          <div className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">
                  Primera sesión
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-6xl font-semibold tracking-[-0.04em] text-[#073B4C]">
                    {siteConfig.priceFrom.replace(" €", "")}
                  </span>
                  <span className="pb-2 text-2xl font-semibold text-[#073B4C]">
                    €
                  </span>
                </div>
              </div>
              <Button
                href={buildWhatsappHref(
                  "Hola Borja, me gustaría reservar una primera sesión de fisioterapia a domicilio.",
                )}
                variant="dark"
                icon={<MessageCircle className="size-4" aria-hidden="true" />}
                aria-label="Pedir cita por WhatsApp"
              >
                Pedir cita por WhatsApp
              </Button>
            </div>

            <p className="mt-6 text-pretty text-base leading-8 text-[var(--color-muted)]">
              Sesión completa de fisioterapia a domicilio en Madrid con
              valoración inicial, tratamiento y pautas adaptadas a tu caso.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {pricingIncludes.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[#2b9b9d]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-7">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm leading-7 text-[var(--color-muted)]">
              Si quieres confirmar zona, disponibilidad o modalidad, puedes
              consultar antes de reservar.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
