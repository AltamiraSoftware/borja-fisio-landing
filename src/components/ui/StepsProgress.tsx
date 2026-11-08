"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function StepsProgress({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.6;
      const rect = element.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - rect.top) / rect.height));
      element.style.setProperty("--p", progress.toFixed(3));
      Array.from(element.children).forEach((item) => {
        const listItem = item as HTMLElement;
        listItem.toggleAttribute("data-pending", listItem.getBoundingClientRect().top > line);
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <ol ref={ref} className={`steps ${className ?? ""}`}>{children}</ol>;
}
