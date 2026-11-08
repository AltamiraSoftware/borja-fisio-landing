import { Activity, Dumbbell, HandHeart, ScanLine } from "lucide-react";
import Link from "next/link";
import { treatmentCategories } from "@/content/treatmentCategories";
import { getTreatmentPath } from "@/content/treatments";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const categoryIcons = {
  "terapia-manual": HandHeart,
  "ejercicio-terapeutico": Dumbbell,
  "fisioterapia-invasiva-ecoguiada": ScanLine,
} as const;

export function Services() {
  const cards = [
    {
      title: "Patologías",
      description: "Dolor, lesión o limitación de movimiento. Explora los motivos de consulta frecuentes antes de solicitar una valoración.",
      href: "/patologias",
      icon: Activity,
      cta: "Ver patologías",
    },
    ...treatmentCategories.map((category) => ({
      title: category.name,
      description: category.cardDescription,
      href: getTreatmentPath(category.slug),
      icon: categoryIcons[category.slug as keyof typeof categoryIcons],
      cta: "Conocer el enfoque",
    })),
  ];

  return (
    <section id="servicios" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Tratamientos"
          title="Un plan de fisioterapia para tu situación"
          description="Puedes llegar con dolor, una lesión o una duda. La valoración orienta el enfoque y las herramientas que pueden ayudarte."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, description, href, icon: Icon, cta }) => (
            <GlassCard key={href} variant="solid" className="group flex min-h-72 flex-col items-center p-7 text-center">
              <div className="card-icon">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="mt-6 flex min-h-14 items-center justify-center text-xl font-semibold text-[#073B4C]">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                {description}
              </p>
              <Button href={href} size="sm" className="mt-6 self-center">
                {cta}
              </Button>
            </GlassCard>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-[var(--color-muted)]">¿Buscas información sobre <Link href="/patologias/dolor-cervical" className="font-semibold text-[#0F5366] underline underline-offset-4">dolor cervical</Link>, <Link href="/patologias/dolor-lumbar" className="font-semibold text-[#0F5366] underline underline-offset-4">dolor lumbar</Link> o <Link href="/patologias/lesiones-deportivas" className="font-semibold text-[#0F5366] underline underline-offset-4">lesiones deportivas</Link>? Explora todos los motivos de consulta.</p>
        <div className="mt-6 flex justify-center"><Button href="/patologias" variant="ghost" size="sm">Ver todas las patologías</Button></div>
      </div>
    </section>
  );
}
