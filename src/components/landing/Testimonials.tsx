import { Star, Quote, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { buildWhatsappHref } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Llevaba meses con dolor de espalda y Borja me dio un tratamiento desde la primera sesión. Ahora puedo volver a hacer deporte sin molestias.",
    author: "Marta G.",
    context: "Dolor lumbar crónico",
    rating: 5,
  },
  {
    quote:
      "Después de la primera sesión ya noté mejoría. La explicación de lo que me pasaba fue clave para que entendiera cómo mejorar.",
    author: "Carlos R.",
    context: "Tendinitis de hombro",
    rating: 5,
  },
  {
    quote:
      "Me vino genial que viniera a casa. Con el dolor cervical que tenía, desplazarme era imposible. En 3 sesiones ya estaba mucho mejor.",
    author: "Laura M.",
    context: "Dolor cervical",
    rating: 5,
  },
  {
    quote:
      "Como deportista, la recuperación es importante. Borja entiende bien el cuerpo y me dio pautas que me ayudaron a volver antes al entrenamiento.",
    author: "David P.",
    context: "Esguince de tobillo",
    rating: 5,
  },
] as const;

export function Testimonials() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Opiniones"
          title="Lo que dicen mis pacientes"
          description="Experiencias reales de personas que han recibido tratamiento con Borja. Cada caso es diferente, pero la satisfacción es constante."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <GlassCard
              key={t.author}
              className="flex flex-col p-7 md:p-8"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 shrink-0 fill-[#2EC4C6] text-[#2EC4C6]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <Quote className="mx-auto mt-4 size-6 text-[#2EC4C6]/30" aria-hidden="true" />
              <p className="mt-2 flex-1 text-pretty text-base leading-7 text-[#102A33]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3 border-t border-[#d9e8e4] pt-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#2EC4C6]/12 text-[#073B4C] font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#073B4C]">
                    {t.author}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {t.context}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href={buildWhatsappHref(
              "Hola Borja, he visto las opiniones de tus pacientes y me gustaría reservar una sesión.",
            )}
            variant="dark"
            icon={<MessageCircle className="size-4" aria-hidden="true" />}
            iconPosition="right"
          >
            Reservar mi sesión
          </Button>
        </div>
      </div>
    </section>
  );
}
