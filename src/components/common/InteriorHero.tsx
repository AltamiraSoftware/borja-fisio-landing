import Image from "next/image";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/constants";

type InteriorHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ReactNode;
  badges?: ReactNode;
  strip?: ReactNode;
};

export function InteriorHero({ eyebrow, title, intro, actions, badges, strip }: InteriorHeroProps) {
  return (
    <section className="premium-hero-bg relative isolate overflow-hidden px-4 pb-12 pt-24 text-white sm:pb-14 sm:pt-28">
      <div className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t ${strip ? "from-[#052E3A]/85" : "from-[#f7faf8]"} to-transparent`} aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-x-10 gap-y-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-14">
          <div className="min-w-0 lg:col-start-1 lg:row-start-1 lg:self-end">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#b7f7f2] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-sm">{eyebrow}</p>
            <h1 className="mt-6 max-w-3xl text-balance text-[clamp(1.85rem,5.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] sm:mt-7">{title}</h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/82 lg:text-lg lg:leading-8">{intro}</p>
            {badges && <div className="mt-5 flex flex-wrap gap-2">{badges}</div>}
          </div>
          <div className="relative mx-auto w-full max-w-[12rem] rounded-[24px] border border-white/30 bg-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:max-w-[17rem] sm:p-3 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[21rem] lg:self-center">
            <div className="overflow-hidden rounded-[18px] bg-[#d7ebe5]">
              <Image
                src="/borja.png"
                alt="Borja Estarellas Botín, fisioterapeuta en Madrid"
                width={1024}
                height={1536}
                priority
                sizes="(min-width: 1024px) 21rem, (min-width: 640px) 17rem, 12rem"
                className="h-auto w-full"
              />
            </div>
            <div className="mt-2 hidden rounded-[18px] border border-white/20 bg-white/12 px-4 py-2 text-center sm:block">
              <p className="font-semibold text-white">{siteConfig.fullName}</p>
              <p className="mt-1 text-xs text-white/72">Consulta en Arganzuela · Atención a domicilio</p>
            </div>
          </div>
          {actions && <div className="flex flex-wrap justify-center gap-3 lg:col-start-1 lg:row-start-2 lg:justify-start lg:self-start">{actions}</div>}
        </div>
        {strip && <div className="mt-8 border-t border-white/20 pt-5 sm:mt-10">{strip}</div>}
      </div>
    </section>
  );
}
