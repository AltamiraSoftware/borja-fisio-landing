import type { ReactNode } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { InteriorHero } from "@/components/common/InteriorHero";

type StandardPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  featureHero?: boolean;
  heroActions?: ReactNode;
  heroStrip?: ReactNode;
};

export function StandardPage({ eyebrow, title, intro, children, featureHero = false, heroActions, heroStrip }: StandardPageProps) {
  return (
    <>
      <Header />
      <main>
        {featureHero ? (
          <InteriorHero eyebrow={eyebrow} title={title} intro={intro} actions={heroActions} strip={heroStrip} />
        ) : (
          <section className="premium-hero-bg relative isolate overflow-hidden px-4 pb-10 pt-28 text-white sm:pb-12 sm:pt-32">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7faf8] to-transparent" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8cf3ef] sm:text-sm">{eyebrow}</p>
              <h1 className="mt-6 max-w-4xl text-balance text-3xl font-semibold leading-tight sm:mt-7 sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">{intro}</p>
            </div>
          </section>
        )}
        <div className="page-flow-bg px-4 py-20">
          <div className="mx-auto max-w-7xl">{children}</div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
