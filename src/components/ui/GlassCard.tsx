import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type GlassCardVariant = "dark" | "light" | "solid";

const variants: Record<GlassCardVariant, string> = {
  dark: "border-white/16 bg-white/[0.10] text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl",
  light:
    "border-white/75 bg-white/[0.70] text-[var(--color-text)] shadow-[var(--shadow-glass)] backdrop-blur-xl",
  solid:
    "border-[#dbe9e5] bg-white text-[var(--color-text)] shadow-[var(--shadow-premium)]",
};

type GlassCardProps = ComponentPropsWithoutRef<"div"> & {
  variant?: GlassCardVariant;
  hover?: boolean;
};

export function GlassCard({
  className,
  variant = "light",
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border transition duration-300 ease-out",
        variants[variant],
        hover && "hover:-translate-y-1 hover:border-[#2EC4C6]/45",
        className,
      )}
      {...props}
    />
  );
}
