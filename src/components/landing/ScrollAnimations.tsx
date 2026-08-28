"use client";

import { useEffect } from "react";

/**
 * Client component that enables scroll-triggered fade-up animations.
 * Observes .fade-up and .stagger-children elements and adds .visible
 * when they enter the viewport. Renders nothing.
 */
export function ScrollAnimations() {
  useEffect(() => {
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

    const fadeEls = document.querySelectorAll(".fade-up, .stagger-children");
    fadeEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
