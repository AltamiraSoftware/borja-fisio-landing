import { contactConfig } from "@/lib/constants";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function buildWhatsappHref(message = contactConfig.whatsappMessage) {
  const phone = contactConfig.whatsappNumber.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message);

  if (!phone) {
    return `https://wa.me/?text=${text}`;
  }

  return `https://wa.me/${phone}?text=${text}`;
}
