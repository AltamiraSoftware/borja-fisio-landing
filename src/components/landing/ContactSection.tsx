"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fieldClass = "mt-2 min-h-12 w-full rounded-[10px] border border-[#4a8aa0] bg-[#052E3A] px-4 py-3 text-base text-white outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-white/55 focus:border-[#2EC4C6] focus:shadow-[0_0_0_3px_rgba(46,196,198,0.28)]";
const optionClass = "flex min-h-12 items-center justify-center rounded-[10px] border border-[#4a8aa0] bg-[#052E3A] px-2 py-2 text-center text-sm font-semibold text-white/82 transition-colors duration-150 peer-checked:border-[#2EC4C6] peer-checked:bg-[#2EC4C6] peer-checked:text-[#052E3A] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2EC4C6]";

function track(event: string, params: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, event_category: "form", location: "contact_form", page_path: window.location.pathname, ...params });
}

export function ContactSection({ topic, headingLevel = 2, messageIntro }: { topic?: string; headingLevel?: 1 | 2; messageIntro?: string }) {
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
    const modalityLabel = { domicilio: "a domicilio", gabinete: "consulta en Chamberí", me_da_igual: "me da igual" }[modality] ?? modality;
    const message = [
      `Hola Borja, soy ${name}. ${messageIntro ?? `Quiero consultar una sesión de fisioterapia${topic ? ` sobre ${topic.toLowerCase()}` : ""}.`}`,
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
          <SectionHeader inverse headingLevel={headingLevel} eyebrow="Primer paso" title="Reserva o consulta una primera sesión" description="No necesitas tenerlo todo claro para escribir. Cuéntame brevemente qué ocurre y te orientaré sobre la consulta en Chamberí o la atención a domicilio." />
          <ol className="steps steps--dark mt-10">
            {[
              { title: "Primer contacto", text: "Escríbeme por WhatsApp o deja tus datos en el formulario." },
              { title: "Orientación inicial", text: "Revisamos qué necesitas y resolvemos tus dudas antes de reservar." },
              { title: "Primera sesión", text: "Acordamos la modalidad, la disponibilidad y el primer encuentro." },
            ].map(({ title, text }) => (
              <li key={title}><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-1 max-w-[44ch] leading-7 text-white/78">{text}</p></li>
            ))}
          </ol>
          <Button href={buildWhatsappHref()} size="lg" className="mt-8" icon={<MessageCircle className="size-5" aria-hidden="true" />}>Escribir por WhatsApp</Button>
        </div>

        <div className="rounded-[16px] border border-[#2d6a7e] bg-[#073B4C] p-6 md:p-9">
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
            <Button type="submit" variant="accent" size="lg" className="w-full">Enviar solicitud de información</Button>
            <p className="text-center text-sm leading-6 text-white/78">Se abrirá WhatsApp con tu solicitud. Pulsa enviar allí para hacérsela llegar a Borja.</p>
            <p className="flex items-start gap-2 text-sm leading-6 text-white/78"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#8cf3ef]" aria-hidden="true" />No compartas información clínica especialmente sensible en este formulario. Podrás explicar mejor tu caso en la primera sesión.</p>
            <div id="contact-form-status" aria-live="polite">
              {status === "error" && <p className="rounded-xl border border-red-300/30 bg-red-950/30 px-4 py-3 text-sm text-white">Rellena nombre y teléfono, añade tu email si prefieres ese contacto y acepta la política de privacidad.</p>}
              {status === "ready" && <p className="flex flex-wrap items-center gap-2 rounded-xl border border-[#2EC4C6]/30 bg-[#2EC4C6]/10 px-4 py-3 text-sm text-white"><CheckCircle2 className="size-4 text-[#8cf3ef]" aria-hidden="true" />Se ha abierto WhatsApp. Envía allí el mensaje para completar tu consulta. <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp min-h-9 px-3 text-xs"><WhatsAppIcon className="size-4" />Abrir WhatsApp</a></p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
