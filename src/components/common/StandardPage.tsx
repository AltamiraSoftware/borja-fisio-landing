import type { ReactNode } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { InteriorHero } from "@/components/common/InteriorHero";
import { ContactSection } from "@/components/landing/ContactSection";
import { TreatmentHeroStrip } from "@/components/treatment/TreatmentHeroStrip";

type StandardPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  afterContent?: ReactNode;
  followingContent?: ReactNode;
  finalContent?: ReactNode;
  featureHero?: boolean;
  heroActions?: ReactNode;
  heroStrip?: ReactNode;
  contactAfterHero?: boolean;
  contactTopic?: string;
};

export function StandardPage({ eyebrow, title, intro, children, afterContent, followingContent, finalContent, heroActions, heroStrip, contactAfterHero = true, contactTopic }: StandardPageProps) {
  return (
    <>
      <Header />
      <main>
        <InteriorHero eyebrow={eyebrow} title={title} intro={intro} actions={heroActions} strip={heroStrip ?? <TreatmentHeroStrip />} />
        {contactAfterHero && <ContactSection topic={contactTopic} />}
        <div className="page-flow-bg px-4 py-20">
          <div className="mx-auto max-w-7xl">{children}</div>
        </div>
        {afterContent}
        {followingContent && (
          <div className="page-flow-bg px-4">
            <div className="mx-auto max-w-7xl">{followingContent}</div>
          </div>
        )}
        {finalContent && <div className="page-flow-bg">{finalContent}</div>}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
