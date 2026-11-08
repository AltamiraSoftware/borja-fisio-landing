import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type GlassCardVariant = "dark" | "light" | "solid";

const variants: Record<GlassCardVariant, string> = {
  dark: "border-white/16 bg-white/[0.08] text-white",
  light: "border-[#d6e3df] bg-white/90 text-[var(--color-text)] shadow-[0_2px_8px_rgba(5,46,58,0.06)]",
  solid: "border-[#d6e3df] bg-white text-[var(--color-text)] shadow-[0_2px_8px_rgba(5,46,58,0.06)]",
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
        "rounded-[16px] border text-center transition-[border-color,box-shadow] duration-200 ease-out",
        variants[variant],
        hover && variant !== "dark" && "hover:border-[#0F5366] focus-within:border-[#0F5366]",
        hover && variant === "dark" && "hover:border-[#2EC4C6]/60",
        className,
      )}
      {...props}
    />
  );
}
