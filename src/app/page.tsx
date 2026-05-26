import { AboutBorja } from "@/components/landing/AboutBorja";
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
import { Services } from "@/components/landing/Services";
import { TrustBar } from "@/components/landing/TrustBar";
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
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemBenefit />
        <Services />
        <WhoIsFor />
        <Process />
        <Modalities />
        <AboutBorja />
        <Pricing />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
