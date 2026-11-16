"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function track(event: string, details: Record<string, string> = {}) {
  window.dataLayer?.push({ event, ...details });
}

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest("a");
      if (!link) return;
      const details = { page_path: window.location.pathname };
      if (link.classList.contains("btn")) {
        track("cta_click", { ...details, cta_label: link.textContent?.trim().slice(0, 100) || "sin_etiqueta" });
      }
      if (link.href.includes("wa.me")) track("whatsapp_open", details);
      if (link.href.startsWith("tel:")) track("phone_click", { page_path: window.location.pathname });
      if (link.hostname === "www.doctoralia.es" || link.hostname === "doctoralia.es") {
        track("doctoralia_click", details);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
