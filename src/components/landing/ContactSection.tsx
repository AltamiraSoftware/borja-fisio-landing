"use client";

import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { buildWhatsappHref } from "@/lib/utils";
import { contactConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useState, FormEvent } from "react";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-white/16 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/38 focus:border-[#2EC4C6]/70 focus:bg-white/[0.14]";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const area = formData.get("area")?.toString().trim();
    const reason = formData.get("reason")?.toString().trim();
    const preference = formData.get("preference")?.toString().trim();

    let message = "Hola Borja, soy " + (name || "anónimo");
    if (reason) message += ". " + reason;
    if (area) message += " (zona: " + area + ")";
    if (preference && preference !== "no-lo-se") message += ". Prefiero " + preference;
    if (phone) message += ". Mi teléfono: " + phone;

    // Build WhatsApp URL with the composed message
    const waPhone = contactConfig.whatsappNumber.replace(/[^\d]/g, "");
    const waUrl = waPhone
      ? `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    setTimeout(() => window.open(waUrl, "_blank", "noopener,noreferrer"), 800);
  };

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

          {submitted && (
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#2EC4C6]/30 bg-[#2EC4C6]/10 px-5 py-4">
              <CheckCircle2 className="size-5 shrink-0 text-[#2EC4C6]" aria-hidden="true" />
              <p className="text-sm text-[#b7f7f2]">
                Redirigiendo a WhatsApp… Si no se abre, usa el botón de arriba.
              </p>
            </div>
          )}
        </div>

        <GlassCard variant="dark" className="p-6 md:p-8" hover={false}>
          <form
            onSubmit={handleSubmit}
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
                  required
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
                  required
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
                required
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
