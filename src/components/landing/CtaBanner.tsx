import { Button } from "@/components/ui/Button";
import { buildWhatsappHref } from "@/lib/utils";

type CtaBannerProps = {
  title: string;
  description: string;
  ctaText: string;
  ctaSubtext?: string;
  whatsappMsg?: string;
  secondaryHref?: string;
  secondaryText?: string;
};

export function CtaBanner({
  title,
  description,
  ctaText,
  ctaSubtext,
  whatsappMsg,
  secondaryHref,
  secondaryText,
}: CtaBannerProps) {
  const whatsappHref = buildWhatsappHref(whatsappMsg);

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="premium-dark-bg relative overflow-hidden rounded-[2rem] p-8 md:p-16">
          <div className="absolute -right-20 -top-20 size-72 rounded-full border border-[#2EC4C6]/30" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <h2 className="text-[clamp(2rem,3.6vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-white/80 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappHref}
                size="lg"
                aria-label={ctaText}
              >
                {ctaText}
              </Button>
              {secondaryHref && (
                <Button
                  href={secondaryHref}
                  size="lg"
                  variant="secondary"
                >
                  {secondaryText}
                </Button>
              )}
            </div>
            {ctaSubtext && (
              <p className="mt-4 text-sm text-white/50">{ctaSubtext}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
