"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fieldClass = "mt-2 w-full rounded-2xl border border-white/16 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/38 focus:border-[#2EC4C6]/70 focus:bg-white/[0.14]";
const optionClass = "flex min-h-11 items-center justify-center rounded-xl border border-white/16 bg-white/[0.10] px-2 py-2 text-center text-xs font-semibold text-white/75 transition peer-checked:border-[#2EC4C6] peer-checked:bg-[#2EC4C6]/20 peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[#2EC4C6] sm:text-sm";

function track(event: string, params: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, event_category: "form", location: "contact_form", page_path: window.location.pathname, ...params });
}

export function ContactSection({ topic }: { topic?: string }) {
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [contactPreference, setContactPreference] = useState("whatsapp");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    track("form_submit_attempt");

    if (!formElement.checkValidity()) {
      setStatus("error");
      formElement.reportValidity();
      track("form_validation_error", { error_type: "validation" });
      return;
    }

    const form = new FormData(formElement);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const area = String(form.get("area") ?? "").trim();
    const reason = String(form.get("reason") ?? "").trim();
    const selectedContactPreference = String(form.get("contactPreference") ?? "whatsapp");
    const modality = String(form.get("modality") ?? "me_da_igual");
    const modalityLabel = { domicilio: "a domicilio", gabinete: "consulta en Arganzuela", me_da_igual: "me da igual" }[modality] ?? modality;
    const message = [
      `Hola Borja, soy ${name}. Quiero consultar una sesión de fisioterapia${topic ? ` sobre ${topic.toLowerCase()}` : ""}.`,
      `Mi teléfono: ${phone}.${email ? ` Mi email: ${email}.` : ""}`,
      area && `Mi zona de Madrid: ${area}.`,
      `Prefiero que me contactes por ${selectedContactPreference}. Modalidad: ${modalityLabel}.`,
      reason && `Motivo de consulta: ${reason}.`,
    ].filter(Boolean).join("\n");
    const url = buildWhatsappHref(message);

    setWhatsappUrl(url);
    setStatus("ready");
    track("lead_form_whatsapp_open", { contact_preference: selectedContactPreference, modality });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="premium-dark-bg relative scroll-mt-24 overflow-hidden px-4 py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader inverse eyebrow="Primer paso" title="Reserva o consulta una primera sesión" description="No necesitas tenerlo todo claro para escribir. Cuéntame brevemente qué ocurre y te orientaré sobre la consulta en Arganzuela o la atención a domicilio." />
          <div className="mt-9 grid gap-4">
            {[
              { title: "Primer contacto", text: "Escríbeme por WhatsApp o deja tus datos en el formulario.", icon: MessageCircle },
              { title: "Orientación inicial", text: "Revisamos qué necesitas y resolvemos tus dudas antes de reservar.", icon: PhoneCall },
              { title: "Primera sesión", text: "Acordamos la modalidad, la disponibilidad y el primer encuentro.", icon: CheckCircle2 },
            ].map(({ title, text, icon: Icon }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/16 bg-white/[0.07] p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#8cf3ef]/35 bg-[#8cf3ef]/10 text-[#8cf3ef]"><Icon aria-hidden="true" className="size-5" /></span>
                <div><h3 className="font-semibold text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-white/70">{text}</p></div>
              </div>
            ))}
          </div>
          <Button href={buildWhatsappHref()} size="lg" className="mt-8" icon={<MessageCircle className="size-5" aria-hidden="true" />}>Escribir por WhatsApp</Button>
        </div>

        <GlassCard variant="dark" className="p-6 md:p-8" hover={false}>
          <form onSubmit={handleSubmit} className="grid gap-5 text-left" data-contact-form aria-label="Formulario de contacto" noValidate>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8cf3ef]">Primera orientación</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Déjame tus datos para una primera orientación</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">Te orientaré sobre tu caso, la disponibilidad y si te conviene venir a consulta o recibir atención en casa.</p>
            </div>
            <label className="text-sm font-semibold text-white/86">Nombre
              <input className={fieldClass} name="name" autoComplete="name" placeholder="Tu nombre" required aria-describedby={status === "error" ? "contact-form-status" : undefined} />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-white/86">Teléfono
                <input className={fieldClass} name="phone" type="tel" autoComplete="tel" placeholder="600 000 000" required aria-describedby={status === "error" ? "contact-form-status" : undefined} />
              </label>
              <label className="text-sm font-semibold text-white/86">Email (opcional)
                <input className={fieldClass} name="email" type="email" autoComplete="email" placeholder="tu@email.com" required={contactPreference === "email"} aria-describedby={status === "error" ? "contact-form-status" : undefined} />
              </label>
            </div>
            <label className="text-sm font-semibold text-white/86">Zona de Madrid
              <input className={fieldClass} name="area" placeholder="Barrio o municipio" />
            </label>
            <fieldset>
              <legend className="text-sm font-semibold text-white/86">¿Cómo prefieres que te contacte?</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[["whatsapp", "WhatsApp"], ["llamada", "Llamada"], ["email", "Email"]].map(([value, label]) => <label key={value} className="cursor-pointer"><input className="peer sr-only" type="radio" name="contactPreference" value={value} checked={contactPreference === value} onChange={() => setContactPreference(value)} /><span className={optionClass}>{label}</span></label>)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold text-white/86">Modalidad preferida</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[["gabinete", "Consulta"], ["domicilio", "A domicilio"], ["me_da_igual", "Me da igual"]].map(([value, label]) => <label key={value} className="cursor-pointer"><input className="peer sr-only" type="radio" name="modality" value={value} defaultChecked={value === "me_da_igual"} /><span className={optionClass}>{label}</span></label>)}
              </div>
            </fieldset>
            <label className="text-sm font-semibold text-white/86">Motivo de consulta
              <textarea className={`${fieldClass} min-h-28 resize-y`} name="reason" rows={4} placeholder="Puedes contarlo en pocas líneas, sin entrar en detalles sensibles." />
            </label>
            <label className="flex items-start gap-3 text-sm leading-6 text-white/75">
              <input type="checkbox" name="privacy" required className="mt-1 size-4 shrink-0 accent-[#2EC4C6]" aria-describedby={status === "error" ? "contact-form-status" : undefined} />
              <span>Acepto la <a href="/politica-de-privacidad" className="font-semibold text-white underline decoration-[#2EC4C6] underline-offset-4">política de privacidad</a> (obligatorio)</span>
            </label>
            <Button type="submit" size="lg" className="w-full">Enviar solicitud de información</Button>
            <p className="text-center text-xs leading-5 text-white/60">Se abrirá WhatsApp con tu solicitud. Pulsa enviar allí para hacérsela llegar a Borja.</p>
            <p className="flex items-start gap-2 text-xs leading-5 text-white/60"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#8cf3ef]" aria-hidden="true" />No compartas información clínica especialmente sensible en este formulario. Podrás explicar mejor tu caso en la primera sesión.</p>
            <div id="contact-form-status" aria-live="polite">
              {status === "error" && <p className="rounded-xl border border-red-300/30 bg-red-950/30 px-4 py-3 text-sm text-white">Rellena nombre y teléfono, añade tu email si prefieres ese contacto y acepta la política de privacidad.</p>}
              {status === "ready" && <p className="flex flex-wrap items-center gap-2 rounded-xl border border-[#2EC4C6]/30 bg-[#2EC4C6]/10 px-4 py-3 text-sm text-white"><CheckCircle2 className="size-4 text-[#8cf3ef]" aria-hidden="true" />Se ha abierto WhatsApp. Envía allí el mensaje para completar tu consulta. <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp min-h-9 px-3 text-xs"><WhatsAppIcon className="size-4" />Abrir WhatsApp</a></p>}
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
