import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type GlassCardVariant = "dark" | "light" | "solid";

const variants: Record<GlassCardVariant, string> = {
  dark: "border-white/16 bg-white/[0.10] text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl",
  light:
    "border-[#8eb9ca] bg-white/[0.82] text-[var(--color-text)] shadow-[0_14px_38px_rgba(15,83,102,0.13),0_2px_8px_rgba(15,83,102,0.07)] backdrop-blur-xl",
  solid:
    "border-[#8eb9ca] bg-white text-[var(--color-text)] shadow-[0_14px_38px_rgba(15,83,102,0.13),0_2px_8px_rgba(15,83,102,0.07)]",
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
        "rounded-[28px] border text-center transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out",
        variants[variant],
        hover && variant !== "dark" && "hover:-translate-y-1.5 hover:border-[#1d7898] hover:shadow-[0_24px_52px_rgba(15,83,102,0.23),0_0_0_3px_rgba(46,196,198,0.11)] focus-within:border-[#1d7898] focus-within:shadow-[0_24px_52px_rgba(15,83,102,0.23),0_0_0_3px_rgba(46,196,198,0.11)] motion-reduce:hover:translate-y-0",
        hover && variant === "dark" && "hover:-translate-y-1 hover:border-[#8cf3ef]/50 hover:shadow-[0_26px_65px_rgba(5,46,58,0.28)] motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    />
  );
}
