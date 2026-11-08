"use client";

import { useEffect } from "react";

/**
 * Mejora progresiva: el contenido sobre el pliegue nunca espera a JS.
 * Solo los elementos registrados fuera de pantalla se arman para reveal.
 */
export function ScrollAnimations() {
  useEffect(() => {
    const root = document.querySelector("main");
    if (!root) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pending = new Set<HTMLElement>();
    const registered = new Set<HTMLElement>();
    const reveal = (element: HTMLElement) => {
      element.classList.add("is-in");
      element.classList.remove("motion-pending");
      pending.delete(element);
      observer?.unobserve(element);
    };
    const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) reveal(entry.target as HTMLElement); });
    }, { rootMargin: "0px 0px 5% 0px", threshold: 0.01 }) : null;
    const register = () => {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        if (registered.has(element)) return;
        registered.add(element);
        const group = element.closest("[data-reveal-group]");
        const siblings = group ? Array.from(group.querySelectorAll("[data-reveal]")).filter((item) => item.closest("[data-reveal-group]") === group) : [];
        const delay = element.dataset.revealDelay ?? `${Math.min(Math.max(siblings.indexOf(element), 0), 5) * 80}`;
        element.style.setProperty("--delay", `${delay}ms`);
        if (media.matches || !observer || element.getBoundingClientRect().top < window.innerHeight) {
          reveal(element);
          return;
        }
        element.classList.add("motion-pending");
        pending.add(element);
        observer.observe(element);
      });
    };
    register();
    const mutations = new MutationObserver(register);
    mutations.observe(root, { childList: true, subtree: true });
    const preference = () => { if (media.matches) pending.forEach(reveal); };
    media.addEventListener("change", preference);
    return () => {
      mutations.disconnect();
      observer?.disconnect();
      media.removeEventListener("change", preference);
      registered.forEach((element) => element.classList.remove("motion-pending"));
    };
  }, []);

  return null;
}
