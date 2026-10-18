import Image from "next/image";
import type { ReactNode } from "react";
import { Activity } from "lucide-react";
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
    <section className="premium-hero-bg relative isolate overflow-hidden px-4 pb-12 pt-28 text-white sm:pb-14 sm:pt-32">
      <div className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t ${strip ? "from-[#052E3A]/85" : "from-[#f7faf8]"} to-transparent`} aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-x-10 gap-y-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-14">
          <div className="min-w-0 lg:col-start-1 lg:row-start-1 lg:self-end">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#b7f7f2] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-sm">{eyebrow}</p>
            <h1 className="mt-6 max-w-3xl text-balance text-[clamp(1.85rem,5.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] sm:mt-7">{title}</h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/82 lg:text-lg lg:leading-8">{intro}</p>
            {badges && <div className="mt-5 flex flex-wrap gap-2">{badges}</div>}
          </div>
          <div className="relative mx-auto w-full max-w-[13rem] sm:max-w-[18rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[22rem] lg:self-center">
            <div className="relative overflow-hidden rounded-[28px] border border-[#2EC4C6]/45 bg-white/[0.10] p-2 shadow-[0_28px_65px_rgba(5,46,58,0.38)] backdrop-blur-xl sm:p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#d7ebe5]">
                <Image
                  src="/borja.png"
                  alt="Borja Estarellas Botín, fisioterapeuta en Madrid"
                  fill
                  priority
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 18rem, 13rem"
                  className="object-cover object-[50%_22%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E3A]/55 via-transparent to-white/8" />
                <div className="absolute inset-x-4 bottom-4 hidden rounded-[18px] border border-[#1d7898]/40 bg-white/92 p-3 text-left text-[#073B4C] shadow-[0_16px_36px_rgba(7,59,76,0.30)] backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[linear-gradient(140deg,#073B4C_0%,#0F5366_65%,#2EC4C6_145%)] text-white shadow-[0_6px_14px_rgba(7,59,76,0.28)]">
                      <Activity className="size-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[15px] font-semibold leading-tight">{siteConfig.fullName}</p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-medium text-[#5B6B73]">
                        <span className="size-1.5 shrink-0 rounded-full bg-[#2EC4C6]" aria-hidden="true" />
                        Fisioterapeuta · Arganzuela
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {actions && <div className="flex flex-wrap justify-center gap-3 lg:col-start-1 lg:row-start-2 lg:justify-start lg:self-start">{actions}</div>}
        </div>
        {strip && <div className="mt-8 border-t border-white/20 pt-5 sm:mt-10">{strip}</div>}
      </div>
    </section>
  );
}
