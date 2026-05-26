export const siteConfig = {
  name: "Borja Estarellas",
  fullName: "Borja Estarellas Botín",
  profession: "Fisioterapeuta en Madrid",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://borja-fisio-landing.vercel.app",
  areaServed: "Madrid",
  priceFrom: "50 €",
};

export const contactConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  whatsappMessage:
    "Hola Borja, me gustaría pedir cita de fisioterapia en Madrid. ¿Podemos revisar disponibilidad?",
};
