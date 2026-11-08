import Link from "next/link";
import { treatmentCategories } from "@/content/treatmentCategories";
import { getTreatmentPath } from "@/content/treatments";
import { IndexRow } from "@/components/ui/IndexRow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Services() {
  return (
    <section id="servicios" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Tratamientos"
          title="Un plan de fisioterapia para tu situación"
          description="Puedes llegar con dolor, una lesión o una duda. La valoración orienta el enfoque y las herramientas que pueden ayudarte."
        />

        <div className="mt-12 border-t border-[#102A33]">
          {treatmentCategories.map((category) => <IndexRow key={category.slug} title={category.name} description={category.cardDescription} href={getTreatmentPath(category.slug)} />)}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-[var(--color-muted)]">¿Buscas información sobre <Link href="/patologias/dolor-cervical" className="font-semibold text-[#0F5366] underline underline-offset-4">dolor cervical</Link>, <Link href="/patologias/dolor-lumbar" className="font-semibold text-[#0F5366] underline underline-offset-4">dolor lumbar</Link> o <Link href="/patologias/lesiones-deportivas" className="font-semibold text-[#0F5366] underline underline-offset-4">lesiones deportivas</Link>? Explora todos los motivos de consulta.</p>
        <div className="mt-6 flex justify-center"><Button href="/patologias" variant="ghost" size="sm">Ver todas las patologías</Button></div>
      </div>
    </section>
  );
}
