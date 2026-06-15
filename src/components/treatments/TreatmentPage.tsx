import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  Footprints,
  GraduationCap,
  HandHeart,
  Home,
  MapPinned,
  MessageCircle,
  MoveVertical,
  Route,
  ScanLine,
  Send,
  Stethoscope,
} from "lucide-react";
import { borjaProfile, type Treatment } from "@/data/tratamientos";
import { contactConfig, siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

type JsonLdObject = Record<string, unknown>;

const treatmentIcons: Record<string, LucideIcon> = {
  "fisioterapia-domicilio": Home,
  "dolor-cervical": MoveVertical,
  "dolor-lumbar": ScanLine,
  tendinopatias: Activity,
  contracturas: HandHeart,
  esguinces: Footprints,
  "lesiones-deportivas": Dumbbell,
  "fascitis-plantar": Route,
};

const fieldClass =
  "mt-2 w-full rounded-2xl border border-white/16 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/38 focus:border-[#2EC4C6]/70 focus:bg-white/[0.14]";

function getTreatmentJsonLd(treatment: Treatment): JsonLdObject[] {
  const canonicalUrl = `${siteConfig.url}${treatment.path}`;
  const businessId = `${siteConfig.url}/#fisioterapia`;
  const personId = `${siteConfig.url}/#borja-estarellas`;
  const telephone = contactConfig.whatsappNumber.replace(/[^\d+]/g, "");

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: treatment.heroTitle,
      description: treatment.metaDescription,
      url: canonicalUrl,
      serviceType: "Fisioterapia",
      provider: {
        "@type": "MedicalBusiness",
        "@id": businessId,
        name: siteConfig.fullName,
        url: siteConfig.url,
        medicalSpecialty: "Physiotherapy",
        ...(telephone ? { telephone } : {}),
        ...(contactConfig.email ? { email: contactConfig.email } : {}),
      },
      areaServed: {
        "@type": "City",
        name: siteConfig.areaServed,
      },
      offers: {
        "@type": "Offer",
        price: "50",
        priceCurrency: "EUR",
        description: `Primera sesión de fisioterapia desde ${siteConfig.priceFrom}.`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: siteConfig.fullName,
      jobTitle: "Fisioterapeuta",
      worksFor: {
        "@id": businessId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: treatment.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tratamientos",
          item: `${siteConfig.url}/#servicios`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: treatment.navLabel,
          item: canonicalUrl,
        },
      ],
    },
  ];
}

export function TreatmentPage({ treatment }: { treatment: Treatment }) {
  const Icon = treatmentIcons[treatment.slug] ?? Stethoscope;
  const whatsappMessage = `Hola Borja, quiero consultar sobre ${treatment.navLabel.toLowerCase()} en Madrid.`;
  const whatsappHref = buildWhatsappHref(whatsappMessage);
  const pageSchemas = getTreatmentJsonLd(treatment);
  const professionalHighlights =
    treatment.professionalHighlights ??
    [
      treatment.professionalBlurb,
      "El objetivo es reducir dolor, recuperar movimiento y darte pautas claras para sostener la mejora en tu rutina.",
    ];

  return (
    <>
      {pageSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <Header />
      <main className="page-flow-bg">
        <section className="premium-hero-bg relative isolate overflow-hidden px-4 pb-20 pt-32 text-white md:pb-24 md:pt-40">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7FAF8] via-[#F7FAF8]/70 to-transparent" />
          <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.10)_100%)]" />

          <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <Link
                href="/#servicios"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/68 transition hover:text-white"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Volver a tratamientos
              </Link>

              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-[#b7f7f2] backdrop-blur-xl">
                <Icon className="size-4" aria-hidden="true" />
                Fisioterapia en Madrid
              </div>

              <h1 className="text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                {treatment.heroTitle}
              </h1>

              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/76 md:text-xl">
                {treatment.heroSubtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {treatment.heroBadges.map((badge, index) => (
                  <Badge
                    key={badge}
                    variant={index % 2 === 0 ? "dark" : "cyan"}
                    className={index % 2 === 0 ? undefined : "text-white"}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={whatsappHref}
                  size="lg"
                  icon={<MessageCircle className="size-5" aria-hidden="true" />}
                  aria-label={`Pedir cita para ${treatment.navLabel} por WhatsApp`}
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
                Primera sesión desde {siteConfig.priceFrom}. Atención a domicilio
                o gabinete según disponibilidad.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[35rem]">
              <GlassCard
                variant="dark"
                className="relative overflow-hidden p-4 md:p-5"
                hover={false}
              >
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.03)_100%)]" />
                <div className="relative overflow-hidden rounded-[24px] border border-white/14 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-5">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[linear-gradient(155deg,#eef5f3_0%,#d7ebe5_46%,#7bbbc0_100%)]">
                    <Image
                      src={borjaProfile.image}
                      alt={borjaProfile.heroImageAlt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 35rem, 92vw"
                      className="object-cover object-[50%_22%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052E3A]/62 via-transparent to-white/8" />
                    <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/45 bg-white/80 p-5 text-[#073B4C] shadow-[0_18px_45px_rgba(5,46,58,0.16)] backdrop-blur-xl">
                      <div className="flex items-start gap-4">
                        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#073B4C] text-white">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-lg font-semibold">
                            {treatment.navLabel}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5B6B73]">
                            Tratamiento con {borjaProfile.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="valoracion" className="px-4 py-20">
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeader
              eyebrow="Valoración"
              title={treatment.introTitle}
              description={treatment.introBody}
            />

            <div className="grid gap-6">
              <GlassCard className="relative overflow-hidden p-7 md:p-8">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,196,198,0.14)_0%,rgba(255,255,255,0)_64%)]" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">
                    Puede ayudarte si
                  </p>
                  <div className="mt-6 grid gap-3">
                    {treatment.introPoints.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2
                          className="mt-0.5 size-5 shrink-0 text-[#2b9b9d]"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium leading-7">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-7 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">
                  Síntomas y situaciones frecuentes
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {treatment.symptoms.map((symptom) => (
                    <div
                      key={symptom}
                      className="rounded-2xl border border-[#d9e8e4] bg-white/62 px-4 py-3 text-sm font-medium leading-7 text-[#102A33]"
                    >
                      {symptom}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="tratamiento" className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="Tratamiento"
              title="Cómo trabajamos esta lesión o este dolor"
              description="Cada sesión combina valoración, tratamiento y pautas activas para que el proceso tenga sentido dentro de tu rutina."
            />

            <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
              <div className="absolute left-1/2 top-12 hidden h-0.5 w-[66%] -translate-x-1/2 bg-gradient-to-r from-[#2EC4C6] via-[#A4BE7B] to-[#2EC4C6] lg:block" />
              {treatment.approach.map((step, index) => (
                <GlassCard
                  key={step.title}
                  className="relative p-6 text-center lg:min-h-72"
                >
                  <div className="mx-auto grid size-16 place-items-center rounded-full border border-white/70 bg-white/78 text-lg font-semibold text-[#073B4C] shadow-[0_16px_38px_rgba(5,46,58,0.14)] backdrop-blur-xl">
                    {index + 1}
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-[#073B4C]">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section
          id="modalidades"
          className="premium-dark-bg relative overflow-hidden px-4 py-20 text-white"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              inverse
              align="center"
              eyebrow="Modalidad"
              title="Tratamiento adaptado a tu dolor, tu rutina y tu recuperación"
              description="La atención principal es a domicilio en Madrid, con seguimiento y pautas cuando ayudan a consolidar la evolución."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <GlassCard variant="dark" className="p-8 md:p-10" hover={false}>
                <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-[#2EC4C6]/18 text-[#9bf5f2]">
                  <MapPinned className="size-6" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-semibold">
                  Fisioterapia a domicilio
                </h2>
                <p className="mt-5 text-pretty text-base leading-8 text-white/72">
                  {treatment.modality.presencial}
                </p>
                <Button
                  href={whatsappHref}
                  className="mt-8"
                  icon={<MessageCircle className="size-4" aria-hidden="true" />}
                >
                  Solicitar sesión
                </Button>
              </GlassCard>

              <GlassCard variant="dark" className="p-8 md:p-10" hover={false}>
                <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-white/12 text-[#9bf5f2]">
                  <Stethoscope className="size-6" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Seguimiento y progresión
                </h2>
                <p className="mt-5 text-pretty text-base leading-8 text-white/72">
                  {treatment.modality.online}
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="borja" className="px-4 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Profesional"
                title={`Tratamiento con ${borjaProfile.name}`}
                description={treatment.professionalBlurb}
              />
              <div className="mt-7 flex flex-wrap gap-2">
                {borjaProfile.chips.map((chip, index) => (
                  <Badge key={chip} variant={index % 2 === 0 ? "cyan" : "sage"}>
                    {chip}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <GlassCard className="p-7 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#073B4C] text-white">
                    <GraduationCap className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">
                      Enfoque fisioterapéutico
                    </p>
                    <h2 className="text-2xl font-semibold text-[#073B4C]">
                      Fisioterapia basada en evidencia y movimiento
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid gap-4">
                  {professionalHighlights.map((item) => (
                    <p
                      key={item}
                      className="rounded-[20px] border border-[#d9e8e4] bg-white/62 px-4 py-4 text-sm leading-7 text-[var(--color-muted)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-7 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F5366]">
                  Formación
                </p>
                <ul className="mt-6 grid gap-3">
                  {borjaProfile.credentials.map((credential) => (
                    <li key={credential} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-[#2b9b9d]"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-7 text-[var(--color-muted)]">
                        {credential}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="relacionados" className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="Tratamientos relacionados"
              title="Otras páginas que pueden encajar con tu caso"
              description="Si tu dolor se parece a más de una situación, estas rutas ayudan a orientar mejor la consulta."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {treatment.relatedTreatments.map((related) => (
                <GlassCard
                  key={related.href}
                  className="group flex min-h-48 flex-col p-6"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#073B4C] text-white shadow-[0_14px_34px_rgba(7,59,76,0.18)]">
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 flex-1 text-xl font-semibold text-[#073B4C]">
                    {related.label}
                  </h2>
                  <a
                    href={related.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0F5366] transition group-hover:text-[#0b8f91]"
                  >
                    Ver tratamiento
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="premium-dark-bg relative overflow-hidden px-4 py-20 text-white"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                inverse
                eyebrow="Contacto"
                title={`Reserva o consulta tu sesión de ${treatment.navLabel.toLowerCase()}`}
                description="Cuéntame tu caso y valoramos si este tratamiento, la atención a domicilio o una orientación inicial encajan contigo."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={whatsappHref}
                  size="lg"
                  icon={<MessageCircle className="size-5" aria-hidden="true" />}
                  aria-label={`Pedir cita para ${treatment.navLabel} por WhatsApp`}
                >
                  Pedir cita por WhatsApp
                </Button>
                <Button href="#faq" size="lg" variant="secondary">
                  Resolver dudas
                </Button>
              </div>
            </div>

            <GlassCard variant="dark" className="p-6 md:p-8" hover={false}>
              <form
                action="#"
                method="post"
                className="grid gap-5"
                data-contact-form="ready-for-api-route"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-semibold text-white/86">
                    Nombre
                    <input
                      className={fieldClass}
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label className="text-sm font-semibold text-white/86">
                    Teléfono
                    <input
                      className={fieldClass}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Tu teléfono"
                    />
                  </label>
                </div>

                <label className="text-sm font-semibold text-white/86">
                  Zona de Madrid
                  <input
                    className={fieldClass}
                    name="area"
                    type="text"
                    placeholder="Barrio o municipio"
                  />
                </label>

                <label className="text-sm font-semibold text-white/86">
                  Motivo de consulta
                  <textarea
                    className={`${fieldClass} min-h-32 resize-y`}
                    name="reason"
                    placeholder={`Cuéntame qué te ocurre con ${treatment.navLabel.toLowerCase()}`}
                  />
                </label>

                <input
                  type="hidden"
                  name="service"
                  value={treatment.navLabel}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  icon={<Send className="size-5" aria-hidden="true" />}
                  iconPosition="right"
                >
                  Enviar consulta
                </Button>
              </form>
            </GlassCard>
          </div>
        </section>

        <section id="faq" className="px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              align="center"
              eyebrow="FAQ"
              title="Preguntas frecuentes"
              description={`Dudas habituales antes de reservar fisioterapia para ${treatment.navLabel.toLowerCase()} en Madrid.`}
            />

            <div className="mt-10 grid gap-4">
              {treatment.faqs.map((item, index) => (
                <GlassCard
                  key={item.question}
                  className="overflow-hidden"
                  hover={false}
                >
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
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
