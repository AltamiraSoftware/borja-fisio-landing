import type { Metadata } from "next";
import { Activity, ArrowRight, ClipboardCheck, GraduationCap, HandHeart, MessageCircle } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocationSection } from "@/components/landing/LocationSection";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { InteriorHero } from "@/components/common/InteriorHero";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";
import { aboutBadges, educationItems } from "@/data/landing";
import { buildWhatsappHref } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Sobre Borja Estarellas | Fisioterapeuta en Madrid" },
  description: "Conoce la formación y el enfoque de Borja Estarellas, fisioterapeuta musculoesquelético y deportivo con atención en Chamberí y a domicilio en Madrid.",
  alternates: { canonical: "/sobre-borja" },
};

const principles = [
  {
    icon: ClipboardCheck,
    title: "Entender antes de intervenir",
    description: "La primera valoración sirve para ordenar qué te ocurre, qué actividades te limita y qué objetivos tienen sentido en tu caso.",
  },
  {
    icon: HandHeart,
    title: "Tratamiento con criterio",
    description: "La terapia manual, el ejercicio o cualquier técnica se eligen cuando pueden aportar algo dentro de un plan razonado.",
  },
  {
    icon: Activity,
    title: "Volver a lo que importa",
    description: "El foco está en recuperar movimiento, autonomía y confianza para tu día a día, trabajo o deporte.",
  },
] as const;

export default function AboutPage() {
  const whatsappHref = buildWhatsappHref("Hola Borja, he leído sobre tu enfoque y quiero consultarte mi caso.");

  return (
    <>
      <Header />
      <main className="page-flow-bg">
        <InteriorHero
          eyebrow="Tu fisioterapeuta"
          title="Fisioterapia cercana, razonada y adaptada a cada persona"
          intro="Soy Borja Estarellas Botín. Realizo personalmente la valoración, el tratamiento y el seguimiento de cada paciente en Madrid. Atiendo en Chamberí y también a domicilio."
          badges={aboutBadges.map((badge) => <span key={badge} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">{badge}</span>)}
          actions={
            <>
              <Button href={whatsappHref} target="_blank" size="lg" variant="whatsapp" icon={<MessageCircle className="size-5" aria-hidden="true" />}>Consultar con Borja</Button>
              <Button href="#enfoque" size="lg" variant="secondary" icon={<ArrowRight className="size-5" aria-hidden="true" />} iconPosition="right">Conocer mi enfoque</Button>
            </>
          }
          strip={<TreatmentHeroStrip />}
        />

        <section id="enfoque" className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0F5366]">Mi manera de trabajar</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#073B4C] md:text-4xl">Un plan que parte de tu situación, no de una receta.</h2>
              </div>
              <div className="grid gap-5 text-lg leading-8 text-[var(--color-muted)]">
                <p>Mi enfoque combina valoración funcional, terapia manual cuando está indicada, ejercicio terapéutico y educación. El objetivo no es aplicar el mismo protocolo a todo el mundo, sino comprender qué te limita y qué necesitas recuperar.</p>
                <p>Tanto en la consulta de Chamberí como a domicilio, tendrás un único profesional de referencia desde la primera valoración. Revisaremos el proceso y adaptaremos el plan según tu evolución.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, description }) => (
                <GlassCard key={title} variant="solid" className="flex flex-col items-center p-7 text-center md:p-8">
                  <span className="card-icon"><Icon className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-6 text-xl font-semibold text-[#073B4C]">{title}</h3>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">{description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wash px-4 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0F5366]">Formación y práctica clínica</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#073B4C] md:text-4xl">Base clínica y ejercicio terapéutico</h2>
              <ul className="mt-9 border-t border-[#073B4C]">
                {educationItems.map((item, index) => (
                  <li key={item} className="grid grid-cols-[2.25rem_1fr] gap-4 border-b border-[#d6e3df] py-5">
                    <span className="grid size-9 place-items-center rounded-xl bg-[#e6f7f3] text-sm font-bold text-[#0F5366]">0{index + 1}</span>
                    <p className="pt-1 text-base font-medium leading-7 text-[#173f50]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="premium-dark-bg self-start rounded-[1.5rem] p-8 text-white md:p-10">
              <GraduationCap className="size-9 text-[#8cf3ef]" aria-hidden="true" />
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#8cf3ef]">Compromiso profesional</p>
              <p className="mt-4 text-pretty text-2xl font-medium leading-9">“Un tratamiento serio no empieza por aplicar técnicas al azar, sino por entender qué limita tu movimiento.”</p>
              <p className="mt-7 border-t border-white/15 pt-5 text-sm font-semibold text-white/78">{siteConfig.fullName}<span className="mt-1 block font-normal">Fisioterapeuta colegiado en Madrid · n.º {siteConfig.registrationNumber}</span></p>
            </aside>
          </div>
        </section>

        <LocationSection />

        <CtaBanner
          title="¿Quieres consultar tu caso?"
          description="Cuéntame qué te preocupa y revisamos la modalidad que mejor encaje contigo."
          ctaText="Consultar por WhatsApp"
          ctaSubtext="Consulta en Chamberí o atención a domicilio"
          whatsappMsg="Hola Borja, he leído sobre tu enfoque y quiero consultarte mi caso."
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
