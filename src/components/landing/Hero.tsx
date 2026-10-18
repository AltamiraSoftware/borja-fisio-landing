import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function Hero() {
  const whatsappHref = buildWhatsappHref();

  return (
    <section id="inicio" className="premium-hero-bg relative isolate scroll-mt-24 overflow-hidden px-4 pb-12 pt-32 text-white sm:pt-36 md:pb-16 md:pt-40 lg:pt-32">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7FAF8] via-[#F7FAF8]/70 to-transparent" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.10)_100%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl lg:-mt-40 lg:pt-0">
          <p className="mb-5 inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-[#b7f7f2] backdrop-blur-xl">Fisioterapia en Arganzuela · Madrid</p>

          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            Recupera <span className="text-gradient-cyan">movimiento</span>,
            reduce <span className="text-gradient-cyan">dolor</span> y vuelve
            a tu <span className="text-gradient-cyan">rutina</span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/76 md:text-xl">
            Atención personalizada para dolor, lesiones deportivas y recuperación funcional. Consulta en Palos de la Frontera y sesiones a domicilio en Madrid, con valoración, ejercicio terapéutico y pautas claras.
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

          <p className="mt-5 text-sm font-medium text-white/62">
            Consulta en Arganzuela desde {siteConfig.priceClinic} y atención a domicilio desde {siteConfig.priceHome}, según disponibilidad.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[36rem]">
          <GlassCard variant="dark" className="relative overflow-hidden p-4 md:p-5" hover={false}>
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.03)_100%)]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[linear-gradient(155deg,#eef5f3_0%,#d7ebe5_46%,#7bbbc0_100%)]">
              <Image src="/borja.png" alt="Borja Estarellas Botín, fisioterapeuta en Madrid" fill priority sizes="(min-width: 1024px) 36rem, 92vw" className="object-cover object-[50%_22%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E3A]/58 via-transparent to-white/8" />
              <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/45 bg-white/78 p-5 text-[#073B4C] shadow-[0_18px_45px_rgba(5,46,58,0.16)] backdrop-blur-xl">
                <p className="text-lg font-semibold">{siteConfig.fullName}</p>
                <p className="mt-1 text-sm text-[#5B6B73]">Fisioterapeuta</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <Badge variant="cyan">Arganzuela</Badge>
                  <Badge variant="sage">Deportiva</Badge>
                  <Badge variant="light">Ejercicio terapéutico</Badge>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
