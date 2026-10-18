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
      <div className="mx-auto max-w-4xl">
        <div className="premium-dark-bg relative overflow-hidden rounded-[32px] p-8 md:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,196,198,0.08)_0%,rgba(255,255,255,0)_64%)]" />
          <div className="relative text-center">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-pretty text-base leading-7 text-white/72 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
