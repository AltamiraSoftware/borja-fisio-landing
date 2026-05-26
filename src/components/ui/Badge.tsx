import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "dark" | "light" | "cyan" | "sage";

const variants: Record<BadgeVariant, string> = {
  dark: "border-white/18 bg-white/10 text-white",
  light: "border-[#d5e5e1] bg-white/70 text-[#073B4C]",
  cyan: "border-[#2EC4C6]/35 bg-[#2EC4C6]/12 text-[#073B4C]",
  sage: "border-[#A4BE7B]/45 bg-[#A4BE7B]/18 text-[#073B4C]",
};

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "light", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
