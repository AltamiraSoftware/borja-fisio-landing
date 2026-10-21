export const siteConfig = {
  name: "Fisio Estarellas",
  fullName: "Borja Estarellas Botín",
  profession: "Fisioterapeuta en Madrid",
  registrationNumber: "15388",
  url: "https://fisioestarellas.es",
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

const phoneE164 = "+34618417971";

export const contactConfig = {
  phone: "618 417 971",
  phoneE164,
  whatsappNumber: phoneE164.replace(/\D/g, ""),
  email: "info@fisioestarellas.es",
  whatsappMessage:
    "Hola Borja, me gustaría pedir cita de fisioterapia en Madrid. ¿Podemos revisar disponibilidad?",
};
