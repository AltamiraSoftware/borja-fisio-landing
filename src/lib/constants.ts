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
  address: "Calle de Rafael de Riego, 11",
  postalCode: "28045",
  neighborhood: "Palos de la Frontera",
  district: "Arganzuela",
  city: "Madrid",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+de+Rafael+de+Riego+11%2C+28045+Madrid",
  embedUrl: "https://www.google.com/maps?q=Calle+de+Rafael+de+Riego+11%2C+28045+Madrid&output=embed",
} as const;

export const contactConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  whatsappMessage:
    "Hola Borja, me gustaría pedir cita de fisioterapia en Madrid. ¿Podemos revisar disponibilidad?",
};
