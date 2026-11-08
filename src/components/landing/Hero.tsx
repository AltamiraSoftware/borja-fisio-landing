import Image from "next/image";
import type { CSSProperties } from "react";
import { Activity, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const whatsappHref = buildWhatsappHref();

  return (
    <section id="inicio" className="premium-hero-bg relative isolate scroll-mt-24 overflow-hidden px-4 pb-16 pt-32 text-white sm:pt-36 md:pb-24 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="max-w-3xl">
          <p className="hero-fade text-base font-medium text-[#b7f7f2]">Fisioterapia en Chamberí · Madrid</p>

          <h1 className="mt-5 text-balance text-[clamp(2.7rem,5.6vw,5.2rem)] font-bold leading-[1.02] tracking-[-0.035em]">
            <span className="line-mask"><span className="line-rise">Recupera tu movilidad.</span></span>
            <span className="line-mask"><span className="line-rise" style={{ animationDelay: "120ms" }}>Vuelve a hacer lo que te gusta.</span></span>
          </h1>

          <p className="hero-fade mt-7 max-w-[52ch] text-pretty text-lg leading-8 text-white/82 md:text-xl" style={{ animationDelay: "500ms" }}>
            Valoración individualizada, fisioterapia avanzada y ejercicio terapéutico para tratar el dolor, recuperar tu funcionalidad y acompañarte durante tu recuperación.
          </p>

          <div className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "620ms" }}>
            <Button
              href={whatsappHref}
              size="lg"
              icon={<MessageCircle className="size-5" aria-hidden="true" />}
              aria-label="Pedir cita por WhatsApp"
            >
              Pedir cita por WhatsApp
            </Button>
            <Button
              href="#contacto"
              size="lg"
              variant="secondary"
            >
              Solicitar orientación
            </Button>
          </div>

          <p className="hero-fade mt-8 max-w-2xl border-l-2 border-[#2EC4C6] pl-4 text-sm leading-6 text-white/86" style={{ animationDelay: "740ms" }}>
            Consulta independiente dentro del centro Meraki Salud Chamberí desde {siteConfig.priceClinic} y atención a domicilio desde {siteConfig.priceHome}, según disponibilidad.
          </p>
        </div>

        <figure className="relative mx-auto w-full max-w-[27rem]" data-enter style={{ "--enter-delay": "240ms" } as CSSProperties}>
          <div className="relative overflow-hidden rounded-[28px] border border-[#2EC4C6]/45 bg-white/[0.10] p-4 text-center shadow-[0_28px_65px_rgba(5,46,58,0.38)] backdrop-blur-xl md:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.03)_100%)]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[linear-gradient(155deg,#eef5f3_0%,#d7ebe5_46%,#7bbbc0_100%)]">
              <Image src="/borja.png" alt="Borja Estarellas Botín, fisioterapeuta en Madrid" fill priority sizes="(min-width: 1024px) 27rem, 92vw" className="object-cover object-[50%_22%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E3A]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[18px] border border-[#1d7898]/40 bg-white/92 p-3.5 text-left text-[#073B4C] shadow-[0_16px_36px_rgba(7,59,76,0.30)] backdrop-blur-xl">
                <div className="flex items-center gap-2.5"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[linear-gradient(140deg,#073B4C_0%,#0F5366_65%,#2EC4C6_145%)] text-white shadow-[0_6px_14px_rgba(7,59,76,0.28)]"><Activity className="size-4" aria-hidden="true" /></span><div className="min-w-0"><p className="truncate text-[15px] font-semibold leading-tight">{siteConfig.fullName}</p><p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-medium text-[#5B6B73]"><span className="size-1.5 shrink-0 rounded-full bg-[#2EC4C6]" aria-hidden="true" />Fisioterapia Chamberí · Madrid</p></div></div>
                <div className="mt-2.5 flex flex-wrap gap-1.5"><span className="rounded-full border border-[#2EC4C6]/35 bg-[#2EC4C6]/12 px-2.5 py-0.5 text-[11px] font-semibold">Deportiva</span><span className="rounded-full border border-[#A4BE7B]/45 bg-[#A4BE7B]/18 px-2.5 py-0.5 text-[11px] font-semibold">Ejercicio terapéutico</span><span className="rounded-full border border-[#d5e5e1] bg-white/70 px-2.5 py-0.5 text-[11px] font-semibold">Domicilio</span></div>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 flex items-start gap-3 text-sm leading-6 text-white/78"><span className="mt-2 h-px w-8 shrink-0 bg-[#2EC4C6]" aria-hidden="true" /><span>Consulta en Chamberí y atención a domicilio</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
