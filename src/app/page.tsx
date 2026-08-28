import { AboutBorja } from "@/components/landing/AboutBorja";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { ContactSection } from "@/components/landing/ContactSection";
import { FAQ } from "@/components/landing/FAQ";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Modalities } from "@/components/landing/Modalities";
import { Pricing } from "@/components/landing/Pricing";
import { ProblemBenefit } from "@/components/landing/ProblemBenefit";
import { Process } from "@/components/landing/Process";
import { ScrollAnimations } from "@/components/landing/ScrollAnimations";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhoIsFor } from "@/components/landing/WhoIsFor";
import { getLandingJsonLd } from "@/lib/seo";

export default function Home() {
  const jsonLd = getLandingJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollAnimations />
      <Header />
      <main className="page-flow-bg">
        <Hero />
      
        <Services />
        {/* CTA after services */}
        <CtaBanner
          title="¿Te ayuda esta fisioterapia?"
          description="Si te identificas con alguno de estos casos, vale la pena que hables. Sin compromiso."
          ctaText="Pedir cita"
          ctaSubtext="Primera sesión desde 50 €"
          whatsappMsg="Hola Borja, me gustaría reservar una sesión de fisioterapia a domicilio en Madrid."
        />
        <WhoIsFor />
        <Process />
        <Testimonials />
        <Modalities />
        <AboutBorja />
        {/* CTA after about Borja */}
        <CtaBanner
          title="Conoce al fisioterapeuta que te va a tratar"
          description="Formación sólida, enfoque basado en evidencia y comunicación clara. Si encajas, la primera sesión es el punto de partida."
          ctaText="Reservar con Borja"
          whatsappMsg="Hola Borja, me gustaría reservar una sesión contigo."
        />
        <Pricing />
        {/* CTA before FAQ */}
        <CtaBanner
          title="¿Tienes dudas?"
          description="Revisa las preguntas frecuentes o escríbeme directamente. Te respondo en cuanto pueda."
          ctaText="Escribir por WhatsApp"
          secondaryHref="#faq"
          secondaryText="Leer FAQ"
          whatsappMsg="Hola Borja, tengo una duda sobre la fisioterapia a domicilio. ¿Me puedes orientar?"
        />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
