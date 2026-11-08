import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  inverse?: boolean;
  headingLevel?: 1 | 2;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  inverse = false,
  headingLevel = 2,
}: SectionHeaderProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center [&>p:last-child]:mx-auto",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-semibold",
            inverse ? "text-[#8cf3ef]" : "text-[#0F5366]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-balance text-[clamp(2rem,3.6vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.025em]",
          inverse ? "text-white" : "text-[#073B4C]",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-[60ch] text-pretty text-base leading-8 md:text-lg",
            inverse ? "text-white/72" : "text-[var(--color-muted)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
