import Link from "next/link";
import { ArrowRight } from "lucide-react";

type IndexRowProps = { title: string; description?: string; href?: string; cta?: string; compact?: boolean };

export function IndexRow({ title, description, href, cta = "Conocer el enfoque", compact = false }: IndexRowProps) {
  const titleClass = compact ? "index-title text-2xl font-semibold leading-tight tracking-[-0.015em] text-[#073B4C]" : "index-title text-[clamp(1.5rem,2.6vw,2.3rem)] font-semibold leading-tight tracking-[-0.02em] text-[#073B4C]";
  const content = <><h3 className={titleClass}>{title}</h3>{description && <p className={`text-pretty leading-7 text-[var(--color-muted)] ${compact ? "mt-2" : "max-w-[56ch]"}`}>{description}</p>}</>;
  if (!href) return <div className="border-b border-[#d6e3df] py-8" data-reveal>{content}</div>;
  return <Link href={href} data-reveal className={`index-row grid items-center gap-x-6 gap-y-3 border-b border-[#d6e3df] py-8 ${compact ? "grid-cols-[1fr_auto]" : "md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.3fr)_auto] md:gap-x-14 md:py-10"}`}>
    <div>{content}</div><span className="flex items-center gap-4"><span className="hidden text-sm font-semibold text-[#0F5366] md:inline">{cta}</span><span className="index-arrow grid size-11 place-items-center rounded-full border border-[#d6e3df] text-[#073B4C]" aria-hidden="true"><ArrowRight className="size-[18px]" /></span></span>
  </Link>;
}
