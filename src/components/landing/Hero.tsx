import Image from "next/image";
import { MessageCircle } from "lucide-react";
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

        <figure className="relative mx-auto w-full max-w-[27rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#d7ebe5]">
              <Image src="/borja.png" alt="Borja Estarellas Botín, fisioterapeuta en Madrid" fill priority sizes="(min-width: 1024px) 27rem, 92vw" className="object-cover object-[50%_22%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E3A]/70 via-transparent to-transparent" />
              <svg className="absolute inset-0 size-full" viewBox="0 0 100 125" fill="none" aria-hidden="true" focusable="false"><path className="trace-ghost" d="M8 112 C 8 92, 36 74, 92 70" /><path className="trace-arc" pathLength={1} d="M8 112 C 8 92, 36 74, 92 70" /><circle className="trace-pt" cx="8" cy="112" r="1.6" fill="#A4BE7B" /><circle className="trace-pt" cx="92" cy="70" r="1.6" fill="#2EC4C6" /><circle className="trace-dot" r="1.9" /></svg>
          </div>
          <figcaption className="mt-4 text-sm leading-6 text-white/78"><span className="block font-semibold text-white">{siteConfig.fullName}</span>Fisioterapeuta · Chamberí, Madrid<span className="mt-1 block text-white/66">Deportiva, ejercicio terapéutico y domicilio</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
