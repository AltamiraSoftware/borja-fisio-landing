import type { Metadata } from "next";
import { AboutBorja } from "@/components/landing/AboutBorja";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { ContactSection } from "@/components/landing/ContactSection";
import { FAQ } from "@/components/landing/FAQ";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LocationSection } from "@/components/landing/LocationSection";
import { Modalities } from "@/components/landing/Modalities";
import { Pricing } from "@/components/landing/Pricing";
import { Process } from "@/components/landing/Process";
import { ScrollAnimations } from "@/components/landing/ScrollAnimations";
import { Services } from "@/components/landing/Services";
import { WhoIsFor } from "@/components/landing/WhoIsFor";
import { getLandingJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Borja Estarellas | Fisioterapeuta en Madrid" },
  description: "Fisioterapia individual con Borja Estarellas. Tratamiento musculoesquelético y deportivo, ejercicio terapéutico y atención en consulta o a domicilio en Madrid.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Borja Estarellas | Fisioterapeuta en Madrid",
    description: "Conoce el enfoque de Borja Estarellas y sus modalidades de fisioterapia en Madrid.",
    url: siteConfig.url,
  },
};

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
        <div className="home-intro-bg">
          <Hero />
          <ContactSection />
        </div>
        <Modalities />
        <Services />
        <WhoIsFor />
        <Process />
        <AboutBorja />
        <Pricing />
        <LocationSection />
        <FAQ />
        <CtaBanner
          title="Cuéntame qué necesitas recuperar"
          description="Valoramos tu caso y la modalidad disponible antes de reservar."
          ctaText="Consultar por WhatsApp"
          ctaSubtext="Consulta 50 € · Domicilio 60 €"
          whatsappMsg="Hola Borja, quiero consultar una sesión de fisioterapia en Madrid."
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
