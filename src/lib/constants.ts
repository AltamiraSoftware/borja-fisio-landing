export const siteConfig = {
  name: "Borja Estarellas Fisioterapia",
  fullName: "Borja Estarellas Botín",
  profession: "Fisioterapeuta en Madrid",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://tufisioadomicilio.vercel.app",
  areaServed: "Madrid",
  priceClinic: "50 €",
  priceHome: "60 €",
};

export const locationConfig = {
  venueName: "Meraki Salud Chamberí",
  address: "Calle de Caracas, 6, bajo izquierda",
  postalCode: "28010",
  neighborhood: "Almagro",
  district: "Chamberí",
  city: "Madrid",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Meraki+Salud+Chamber%C3%AD%2C+Calle+de+Caracas+6%2C+28010+Madrid",
  embedUrl: "https://www.google.com/maps?q=Meraki+Salud+Chamber%C3%AD%2C+Calle+de+Caracas+6%2C+28010+Madrid&output=embed",
} as const;

export const contactConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  whatsappMessage:
    "Hola Borja, me gustaría pedir cita de fisioterapia en Madrid. ¿Podemos revisar disponibilidad?",
};
