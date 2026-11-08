import type { Metadata } from "next";
import { Activity, Dumbbell, HandHeart, ScanLine } from "lucide-react";
import { StandardPage } from "@/components/common/StandardPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocationSection } from "@/components/landing/LocationSection";
import { Modalities } from "@/components/landing/Modalities";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getPathologyTreatments, getTreatmentPath } from "@/content/treatments";
import { treatmentCategories } from "@/content/treatmentCategories";
import { siteConfig } from "@/lib/constants";
import { sharedOpenGraph } from "@/lib/metadata";
import { getPathologiesJsonLd } from "@/lib/seo";
import { buildWhatsappHref } from "@/lib/utils";

const categoryIcons = {
  "terapia-manual": HandHeart,
  "ejercicio-terapeutico": Dumbbell,
  "fisioterapia-invasiva-ecoguiada": ScanLine,
} as const;

const highlightedServices = [
  {
    title: "Drenaje linfático manual",
    description: "Tratamiento manual especializado para determinados edemas y linfedemas, tras valoración clínica.",
    href: "/tratamientos/drenaje-linfatico-manual",
  },
  {
    title: "Fisioterapia de ATM",
    description: "Valoración del dolor mandibular, dificultades de apertura y función temporomandibular.",
    href: "/tratamientos/fisioterapia-atm",
  },
];

export const metadata: Metadata = {
  title: "Patologías y motivos de consulta en fisioterapia en Madrid",
  description: "Conoce las patologías y motivos de consulta que trata Borja Estarellas en Chamberí: dolor cervical, lumbar, tendinopatías y lesiones deportivas.",
  alternates: { canonical: "/patologias" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Patologías que tratamos en Madrid | Borja Estarellas",
    description: "Explora los motivos de consulta y los enfoques de fisioterapia de Borja Estarellas en Chamberí.",
    url: `${siteConfig.url}/patologias`,
  },
};

export default function PathologiesPage() {
  const pathologies = getPathologyTreatments();

  return (
    <>
      <JsonLd data={getPathologiesJsonLd(pathologies)} />
      <StandardPage
        eyebrow="Patologías y motivos de consulta · Madrid"
        title="Patologías que tratamos en fisioterapia"
        intro="Dolor cervical, lumbar, lesiones deportivas y otros problemas que limitan tu día a día. Conoce cada motivo de consulta y solicita una valoración para elegir el enfoque adecuado."
        featureHero
        heroStrip={<TreatmentHeroStrip />}
        contactTopic="patologías y motivos de consulta"
        heroActions={
          <>
            <Button href={buildWhatsappHref("Hola Borja, quiero consultar una valoración por una lesión o problema musculoesquelético.")} size="lg">
              Consultar mi caso
            </Button>
            <Button href="#contacto" size="lg" variant="secondary">Solicitar valoración</Button>
          </>
        }
        afterContent={
          <div className="page-flow-bg">
            <Modalities />
            <LocationSection />
            <CtaBanner
              title="¿No sabes qué tratamiento necesitas?"
              description="Cuéntame qué te ocurre. La valoración determina qué técnicas pueden ayudarte y cuál es la siguiente opción."
              ctaText="Consultar por WhatsApp"
            />
          </div>
        }
      >
        <section id="patologias" className="scroll-mt-28">
          <SectionHeader
            align="center"
            eyebrow="Qué podemos valorar"
            title="Patologías, lesiones y problemas funcionales"
            description="Cada caso tiene su propia página informativa con síntomas habituales, valoración, opciones de recuperación y enlaces a técnicas cuando corresponda."
          />
          <div className="treatment-card-row mt-12">
            {pathologies.map((treatment) => (
              <GlassCard key={treatment.slug} variant="solid" className="flex min-h-72 flex-col p-7">
                <div className="card-icon"><Activity aria-hidden="true" /></div>
                <h2 className="mt-6 text-center text-xl font-semibold text-[#073B4C]">{treatment.name}</h2>
                <p className="mt-4 flex-1 text-center text-sm leading-7 text-[var(--color-muted)]">
                  {treatment.cardDescription ?? treatment.hero.intro}
                </p>
                <Button href={getTreatmentPath(treatment.slug)} size="sm" className="mt-6 self-center">
                  Conocer la patología
                </Button>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="tecnicas" className="mt-24 scroll-mt-28 border-t border-[#cfe3dd] pt-20">
          <SectionHeader
            align="center"
            eyebrow="Cómo abordamos tu caso"
            title="Tres enfoques de fisioterapia"
            description="Terapia manual y ejercicio terapéutico agrupan sus técnicas en una página cada uno. Las intervenciones ecoguiadas disponen de información específica por procedimiento."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {treatmentCategories.map((category) => {
              const Icon = categoryIcons[category.slug as keyof typeof categoryIcons];
              return (
                <GlassCard key={category.slug} variant="solid" className="flex min-h-[22rem] flex-col p-8 text-center">
                  <div className="card-icon"><Icon aria-hidden="true" /></div>
                  <h2 className="mt-6 text-2xl font-semibold text-[#073B4C]">{category.name}</h2>
                  <p className="mt-4 flex-1 leading-7 text-[var(--color-muted)]">{category.cardDescription}</p>
                  <Button href={getTreatmentPath(category.slug)} size="sm" className="mt-7 self-center">
                    Conocer el enfoque
                  </Button>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section className="mt-24 border-t border-[#cfe3dd] pt-20" aria-label="Servicios especializados">
          <SectionHeader
            align="center"
            eyebrow="Servicios con página propia"
            title="Drenaje linfático y fisioterapia de ATM"
            description="Se explican también dentro de terapia manual, pero disponen de contenido especializado por sus indicaciones y búsquedas específicas."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {highlightedServices.map((service) => (
              <GlassCard key={service.href} variant="solid" className="flex flex-col p-8 text-center">
                <h3 className="text-xl font-semibold text-[#073B4C]">{service.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-[var(--color-muted)]">{service.description}</p>
                <Button href={service.href} size="sm" className="mt-6 self-center">
                  Ver servicio especializado
                </Button>
              </GlassCard>
            ))}
          </div>
        </section>
      </StandardPage>
    </>
  );
}
