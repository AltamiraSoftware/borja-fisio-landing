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
      if (link.href.includes("wa.me")) track("whatsapp_click", { page_path: window.location.pathname });
      if (link.href.startsWith("tel:")) track("phone_click", { page_path: window.location.pathname });
    };
    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (form.matches("[data-contact-form]")) track("contact_form_submit", { page_path: window.location.pathname });
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
