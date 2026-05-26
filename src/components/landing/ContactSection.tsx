import { MessageCircle, Send } from "lucide-react";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-white/16 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/38 focus:border-[#2EC4C6]/70 focus:bg-white/[0.14]";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="premium-dark-bg relative overflow-hidden px-4 py-20 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            inverse
            eyebrow="Contacto"
            title="Empieza a recuperarte con un tratamiento adaptado a ti"
            description="Cuéntame qué te ocurre y valoramos si encaja mejor una sesión a domicilio, una cita en gabinete o una orientación inicial."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={buildWhatsappHref()}
              size="lg"
              icon={<MessageCircle className="size-5" aria-hidden="true" />}
              aria-label="Pedir cita por WhatsApp"
            >
              Pedir cita por WhatsApp
            </Button>
            <Button href="#faq" size="lg" variant="secondary">
              Resolver dudas
            </Button>
          </div>
        </div>

        <GlassCard variant="dark" className="p-6 md:p-8" hover={false}>
          <form
            action="#"
            method="post"
            className="grid gap-5"
            data-contact-form="ready-for-api-route"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-white/86">
                Nombre
                <input
                  className={fieldClass}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="text-sm font-semibold text-white/86">
                Teléfono
                <input
                  className={fieldClass}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Tu teléfono"
                />
              </label>
            </div>

            <label className="text-sm font-semibold text-white/86">
              Zona de Madrid
              <input
                className={fieldClass}
                name="area"
                type="text"
                placeholder="Barrio o municipio"
              />
            </label>

            <label className="text-sm font-semibold text-white/86">
              Motivo de consulta
              <textarea
                className={`${fieldClass} min-h-32 resize-y`}
                name="reason"
                placeholder="Cuéntame qué te ocurre"
              />
            </label>

            <label className="text-sm font-semibold text-white/86">
              Preferencia
              <select className={fieldClass} name="preference" defaultValue="">
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="domicilio">Domicilio</option>
                <option value="gabinete">Gabinete</option>
                <option value="no-lo-se">No lo sé</option>
              </select>
            </label>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              icon={<Send className="size-5" aria-hidden="true" />}
              iconPosition="right"
            >
              Enviar consulta
            </Button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
