import Image from "next/image";
import { Activity, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const whatsappHref = buildWhatsappHref();

  return (
    <section id="inicio" className="premium-hero-bg relative isolate scroll-mt-24 overflow-hidden px-4 pb-12 pt-32 text-white sm:pt-36 md:pb-16 lg:pt-28">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.10)_100%)] lg:block" />
      <div className="relative mx-auto grid min-h-[calc(100svh-14rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.08em] text-[#b7f7f2] backdrop-blur-xl">FISIOTERAPIA EN CHAMBERÍ · MADRID</p>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl sm:leading-[1.02] md:text-6xl lg:text-7xl">
            Recupera tu <span className="text-gradient-cyan">movilidad</span>. Vuelve a hacer lo que te gusta.
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/76 md:text-xl">
            Valoración individualizada, fisioterapia avanzada y ejercicio terapéutico para tratar el dolor, recuperar tu funcionalidad y acompañarte durante tu recuperación.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

          <p className="mt-5 inline-flex max-w-2xl items-start gap-2 rounded-2xl border border-white/14 bg-[#052E3A]/55 px-3.5 py-2.5 text-sm font-medium leading-6 text-white backdrop-blur-sm">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2EC4C6]" aria-hidden="true" />
            <span>
              Consulta en Chamberí desde {siteConfig.priceClinic} y atención a domicilio desde {siteConfig.priceHome}, según disponibilidad.
            </span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[27rem]">
          <div className="relative overflow-hidden rounded-[28px] border border-[#2EC4C6]/45 bg-white/[0.10] p-4 text-center shadow-[0_28px_65px_rgba(5,46,58,0.38)] backdrop-blur-xl md:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.03)_100%)]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[linear-gradient(155deg,#eef5f3_0%,#d7ebe5_46%,#7bbbc0_100%)]">
              <Image src="/borja.png" alt="Borja Estarellas Botín, fisioterapeuta en Madrid" fill priority sizes="(min-width: 1024px) 27rem, 92vw" className="object-cover object-[50%_22%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E3A]/58 via-transparent to-white/8" />
              <div className="absolute inset-x-5 bottom-5 rounded-[18px] border border-[#1d7898]/40 bg-white/92 p-3.5 text-left text-[#073B4C] shadow-[0_16px_36px_rgba(7,59,76,0.30)] backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[linear-gradient(140deg,#073B4C_0%,#0F5366_65%,#2EC4C6_145%)] text-white shadow-[0_6px_14px_rgba(7,59,76,0.28)]">
                    <Activity className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-semibold leading-tight">{siteConfig.fullName}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-medium text-[#5B6B73]">
                      <span className="size-1.5 shrink-0 rounded-full bg-[#2EC4C6]" aria-hidden="true" />
                      Fisioterapeuta · Chamberí, Madrid
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <Badge variant="cyan" size="sm">Deportiva</Badge>
                  <Badge variant="sage" size="sm">Ejercicio terapéutico</Badge>
                  <Badge variant="light" size="sm">Domicilio</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
