import { faqItems } from "@/data/landing";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          align="center"
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Dudas habituales sobre la consulta en Chamberí y las sesiones a domicilio en Madrid."
        />

        <div className="mt-10"><FaqList items={faqItems} openFirst /></div>
      </div>
    </section>
  );
}
