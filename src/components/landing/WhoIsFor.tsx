import { Quote } from "lucide-react";
import { whoIsFor } from "@/data/landing";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhoIsFor() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div data-reveal>
          <SectionHeader
            eyebrow="Enfoque"
            title="¿Para quién está pensada esta fisioterapia?"
            description="Una fisioterapia seria debe adaptarse a la persona, al dolor, al contexto y al objetivo. No todas las molestias necesitan lo mismo, y no todo tratamiento empieza por la camilla."
          />

          <blockquote className="mt-10 border-l-2 border-[#2EC4C6] pl-6">
            <Quote className="size-6 text-[#0F5366]" aria-hidden="true" />
            <p className="mt-4 text-pretty text-xl font-medium leading-9 text-[#073B4C]">
              “No se trata solo de aliviar durante la sesión. El objetivo es
              que entiendas qué te ocurre, mejores tu función y tengas
              herramientas para mantener la recuperación.”
            </p>
          </blockquote>
        </div>

        <ul className="self-center border-t border-[#073B4C]" data-reveal data-reveal-delay="100">
            {whoIsFor.map((item) => (
              <li
                key={item}
                className="py-5 text-lg font-medium leading-7 text-[#102A33] border-b border-[#d6e3df]"
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
