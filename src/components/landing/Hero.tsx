import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Home,
  MessageCircle,
  Route,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

const floatingCards = [
  {
    icon: Home,
    title: "Atención a domicilio",
    position: "lg:-left-10 lg:top-10",
  },
  {
    icon: CheckCircle2,
    title: "Valoración personalizada",
    position: "lg:-right-8 lg:top-24",
  },
  {
    icon: Dumbbell,
    title: "Terapia manual + ejercicio",
    position: "lg:-left-8 lg:bottom-24",
  },
  {
    icon: Route,
    title: "Seguimiento funcional",
    position: "lg:-right-6 lg:bottom-10",
  },
] as const;

export function Hero() {
  const whatsappHref = buildWhatsappHref();

  return (
    <section
      id="inicio"
      className="premium-hero-bg relative isolate overflow-hidden px-4 pb-20 pt-32 text-white md:pb-24 md:pt-40"
    >
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7FAF8] to-transparent" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.16),transparent_24rem)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-[#b7f7f2] backdrop-blur-xl">
            Fisioterapia a domicilio en Madrid
          </p>

          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            Recupera <span className="text-gradient-cyan">movimiento</span>,
            reduce <span className="text-gradient-cyan">dolor</span> y vuelve
            a tu <span className="text-gradient-cyan">rutina</span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/76 md:text-xl">
            Sesiones de fisioterapia a domicilio para dolor, lesiones
            deportivas y recuperación funcional. Valoración, terapia manual,
            ejercicio terapéutico y pautas claras desde la primera sesión.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
              icon={<ArrowRight className="size-5" aria-hidden="true" />}
              iconPosition="right"
            >
              Consultar mi caso
            </Button>
          </div>

          <p className="mt-5 text-sm font-medium text-white/62">
            Primera sesión desde {siteConfig.priceFrom}. Atención a domicilio o
            gabinete según disponibilidad.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[36rem]">
          <GlassCard
            variant="dark"
            className="relative overflow-hidden p-4 md:p-5"
            hover={false}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_28%,rgba(255,255,255,0.22),transparent_16rem)]" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/14 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[linear-gradient(155deg,#eef5f3_0%,#d7ebe5_46%,#7bbbc0_100%)]">
                <Image
                  src="/borja.png"
                  alt="Borja Estarellas Botín, fisioterapeuta en Madrid"
                  fill
                  priority
                  sizes="(min-width: 1024px) 36rem, 92vw"
                  className="object-cover object-[50%_22%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E3A]/58 via-transparent to-white/8" />
                <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/45 bg-white/78 p-5 text-[#073B4C] shadow-[0_18px_45px_rgba(5,46,58,0.16)] backdrop-blur-xl">
                  <p className="text-lg font-semibold">
                    {siteConfig.fullName}
                  </p>
                  <p className="mt-1 text-sm text-[#5B6B73]">
                    Fisioterapeuta
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="cyan">Domicilio</Badge>
                    <Badge variant="sage">Deportiva</Badge>
                    <Badge variant="light">Ejercicio terapéutico</Badge>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:pointer-events-none lg:absolute lg:inset-0 lg:mt-0 lg:block">
            {floatingCards.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard
                  key={item.title}
                  variant="dark"
                  className={`flex items-center gap-3 px-4 py-3 lg:absolute lg:w-52 ${item.position}`}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#2EC4C6]/18 text-[#9bf5f2]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-white/90">
                    {item.title}
                  </span>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
