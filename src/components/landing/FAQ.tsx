import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/landing";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          align="center"
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Dudas habituales antes de reservar una sesión de fisioterapia a domicilio en Madrid."
        />

        <div className="mt-10 grid gap-4">
          {faqItems.map((item, index) => (
            <GlassCard key={item.question} className="overflow-hidden" hover={false}>
              <details className="group" open={index === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left">
                  <span className="text-base font-semibold text-[#073B4C]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className="size-5 shrink-0 text-[#0F5366] transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="border-t border-[#d9e8e4] px-6 pb-6 pt-5 text-sm leading-7 text-[var(--color-muted)]">
                  {item.answer}
                </p>
              </details>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
