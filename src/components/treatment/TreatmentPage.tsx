import Link from "next/link";
import { CheckCircle2, Home, MapPinned } from "lucide-react";
import type { Treatment } from "@/types/content";
import { getTreatment, getTreatmentPath } from "@/content/treatments";
import { InteriorHero } from "@/components/common/InteriorHero";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Header } from "@/components/landing/Header";
import { LocationSection } from "@/components/landing/LocationSection";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";

export function TreatmentPage({ treatment }: { treatment: Treatment }) {
  const whatsappHref = buildWhatsappHref(`Hola Borja, quiero consultarte mi caso sobre ${treatment.name.toLowerCase()}. Estoy en Madrid.`);
  const related = treatment.relatedSlugs.map(getTreatment).filter((item): item is Treatment => Boolean(item));
  const homeFocused = ["fisioterapia-domicilio", "rehabilitacion-postoperatoria", "fisioterapia-mayores"].includes(treatment.slug);

  return (
    <>
      <Header />
      <main>
        <InteriorHero
          eyebrow={treatment.hero.eyebrow}
          title={treatment.hero.h1}
          intro={treatment.hero.intro}
          strip={<TreatmentHeroStrip />}
          badges={treatment.importedDetail?.heroBadges.map((badge) => (
            <span key={badge} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              {!homeFocused && badge === "Domicilio en Madrid" ? "Consulta en Chamberí" : badge}
            </span>
          ))}
          actions={
            <>
              <Button href={whatsappHref} size="lg" target="_blank">Cuéntame tu caso</Button>
              <Button href="#contacto" size="lg" variant="secondary">Solicitar orientación</Button>
            </>
          }
        />

        <div className="page-flow-bg">
          <section className="px-4 py-20">
            <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionHeader eyebrow="¿Te pasa algo parecido?" title={treatment.importedDetail?.introTitle ?? "Entender lo que te limita es el primer paso"} description={treatment.recognition} />
                {treatment.importedDetail && (
                  <ul className="mt-7 grid gap-4">
                    {treatment.importedDetail.introPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 leading-7 text-[#173f50]"><CheckCircle2 className="mt-1 size-5 shrink-0 text-[#14718b]" aria-hidden="true" />{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              <GlassCard variant="solid" hover={false} className="p-7 text-left md:p-9">
                <h3 className="text-center text-2xl font-semibold text-[#073B4C]">Síntomas</h3>
                <ul className="mt-6 divide-y divide-[#d5e6eb]">
                  {treatment.symptoms.map((symptom) => (
                    <li key={symptom} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#0F5366]" aria-hidden="true" />
                      <span className="font-medium leading-7 text-[#173f50]">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </section>

          <ContactSection topic={treatment.name} />

          <section id="como-trabajaremos" className="scroll-mt-28 px-4 py-20">
            <div className="mx-auto max-w-7xl">
              <SectionHeader align="center" eyebrow="Valoración antes de tratar" title="Un plan basado en tu situación y tus objetivos" description={treatment.assessment} />
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {treatment.plan.map((step, index) => (
                  <GlassCard key={step.title} variant="solid" className="p-7 text-center">
                    <span className="mx-auto grid size-14 place-items-center rounded-full border border-[#73b4ca] bg-[#073B4C] text-lg font-bold text-white shadow-[0_12px_26px_rgba(15,83,102,0.27)]">{index + 1}</span>
                    <h3 className="mt-6 flex min-h-14 items-center justify-center text-xl font-semibold text-[#073B4C]">{step.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--color-muted)]">{step.body}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="mx-auto max-w-7xl">
              <SectionHeader align="center" eyebrow="Modalidades" title={treatment.clinicOnly ? "Ecografía en la consulta de Chamberí" : "En consulta o a domicilio, según tu caso"} description={treatment.clinicOnly ? "El ecógrafo está disponible en la consulta independiente de Borja dentro de Meraki Salud Chamberí, coworking sanitario, en Chamberí." : "Borja atiende en una consulta independiente dentro de Meraki Salud Chamberí, coworking sanitario, en Chamberí. También puedes preguntar por las sesiones a domicilio en Madrid."} />
              <div className={`mt-12 grid gap-6 ${treatment.clinicOnly ? "mx-auto max-w-2xl" : "md:grid-cols-2"}`}>
                <GlassCard variant="solid" className="group flex flex-col p-8 text-center md:p-10">
                  <div className="card-icon"><MapPinned aria-hidden="true" /></div>
                  <h3 className="mt-6 text-2xl font-semibold text-[#073B4C]">Consulta en Chamberí</h3>
                  <p className="mt-4 flex-1 leading-8 text-[var(--color-muted)]">{treatment.clinicTreatment ?? "Atención presencial en Caracas, 6, bajo izquierda, Almagro. Confirma disponibilidad antes de acudir."}</p>
                  {!treatment.clinicOnly && <p className="mt-5 text-lg font-semibold text-[#073B4C]">Desde {siteConfig.priceClinic}</p>}
                  <Button className="mt-6 self-center" href="/fisioterapia-chamberi">Ver la consulta</Button>
                </GlassCard>
                {!treatment.clinicOnly && <GlassCard variant="solid" className="group flex flex-col p-8 text-center md:p-10">
                  <div className="card-icon"><Home aria-hidden="true" /></div>
                  <h3 className="mt-6 text-2xl font-semibold text-[#073B4C]">Atención a domicilio</h3>
                  <p className="mt-4 flex-1 leading-8 text-[var(--color-muted)]">{treatment.homeTreatment}</p>
                  <p className="mt-5 text-lg font-semibold text-[#073B4C]">Desde {siteConfig.priceHome}</p>
                  <Button className="mt-6 self-center" href={whatsappHref}>Consultar zona</Button>
                </GlassCard>}
              </div>
              {treatment.importedDetail && <p className="mx-auto mt-7 max-w-3xl text-center leading-7 text-[var(--color-muted)]">{treatment.importedDetail.onlineFollowup}</p>}
            </div>
          </section>

          <LocationSection />

          <section className="px-4 py-20">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
              <GlassCard variant="solid" className="flex flex-col p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">Tu fisioterapeuta</p>
                <h2 className="mt-3 flex items-center justify-center text-3xl font-semibold text-[#073B4C] lg:min-h-[5.5rem]">Borja Estarellas Botín</h2>
                <p className="mt-5 flex-1 leading-8 text-[var(--color-muted)]">{treatment.importedDetail?.professionalBlurb ?? "La valoración, el tratamiento y el seguimiento los realiza el mismo profesional, con un plan adaptado a cada persona."}</p>
                {treatment.importedDetail?.professionalHighlights && <ul className="mt-4 grid gap-2 leading-7 text-[var(--color-muted)]">{treatment.importedDetail.professionalHighlights.map((item) => <li key={item}>{item}</li>)}</ul>}
                <Link href="/sobre-borja" className="btn btn--primary mt-7 self-center px-5 py-3 text-sm">Conocer formación y enfoque</Link>
              </GlassCard>
              <GlassCard variant="solid" className="flex flex-col p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">Tarifas</p>
                <h2 className="mt-3 flex items-center justify-center text-center text-3xl font-semibold text-[#073B4C] lg:min-h-[5.5rem]">{treatment.clinicOnly ? "Consulta las condiciones de la valoración ecográfica" : `Consulta ${siteConfig.priceClinic} · Domicilio ${siteConfig.priceHome}`}</h2>
                <p className="mt-5 flex-1 leading-8 text-[var(--color-muted)]">{treatment.clinicOnly ? "La ecografía se realiza en consulta cuando aporta información útil al caso. Indica tu interés al reservar para confirmar indicación, disponibilidad y precio." : "La primera sesión incluye valoración funcional, tratamiento cuando esté indicado, ejercicio terapéutico y pautas. Confirma disponibilidad y zona de desplazamiento antes de reservar."}</p>
                <Link href="/tarifas" className="btn btn--primary mt-7 self-center px-5 py-3 text-sm">Consultar tarifas</Link>
              </GlassCard>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="mx-auto max-w-4xl">
              <SectionHeader align="center" eyebrow="Dudas habituales" title="Preguntas frecuentes" />
              <div className="mt-10 grid gap-4">
                {treatment.faq.map((item) => (
                  <GlassCard key={item.question} className="overflow-hidden">
                    <details className="group">
                      <summary className="cursor-pointer px-6 py-5 font-semibold text-[#073B4C]">{item.question}</summary>
                      <p className="border-t border-[#a8cbd7] px-6 py-5 leading-7 text-[var(--color-muted)]">{item.answer}</p>
                    </details>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="px-4 py-20">
              <div className="mx-auto max-w-7xl">
                <SectionHeader align="center" eyebrow="Sigue explorando" title="Tratamientos relacionados" />
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {related.map((item) => (
                    <GlassCard key={item.slug} variant="solid" className="flex flex-col p-7 text-center">
                      <h3 className="flex min-h-14 items-center justify-center text-xl font-semibold text-[#073B4C]">{item.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">{item.hero.intro}</p>
                      <Link href={getTreatmentPath(item.slug)} className="btn btn--primary mt-6 min-h-10 self-center px-4 text-sm">Ver tratamiento</Link>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </section>
          )}

          <CtaBanner title="¿Quieres saber si este tratamiento encaja contigo?" description="Explícame brevemente qué te ocurre y en qué zona de Madrid estás. Te orientaré antes de reservar." ctaText="Consultar mi caso por WhatsApp" whatsappMsg={`Hola Borja, quiero consultarte mi caso sobre ${treatment.name.toLowerCase()}. Estoy en Madrid.`} />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
