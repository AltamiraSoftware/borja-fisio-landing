"use client";

import { useEffect } from "react";

/**
 * Client component that enables scroll-triggered fade-up animations.
 * Observes .fade-up and .stagger-children elements and adds .visible
 * when they enter the viewport. Renders nothing.
 */
export function ScrollAnimations() {
  useEffect(() => {
    const root = document.documentElement;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal], .fade-up, .stagger-children");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    root.classList.add("is-enhanced");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => { el.querySelectorAll<HTMLElement>(":scope > *").forEach((child, index) => child.style.setProperty("--i", String(Math.min(index, 3)))); observer.observe(el); });

    return () => { observer.disconnect(); root.classList.remove("is-enhanced"); };
  }, []);

  return null;
}
