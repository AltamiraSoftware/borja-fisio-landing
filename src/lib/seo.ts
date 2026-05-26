import { contactConfig, siteConfig } from "@/lib/constants";
import { faqItems, services } from "@/data/landing";

type JsonLdObject = Record<string, unknown>;

export function getLandingJsonLd(): JsonLdObject[] {
  const personId = `${siteConfig.url}/#borja-estarellas`;
  const businessId = `${siteConfig.url}/#fisioterapia`;
  const serviceId = `${siteConfig.url}/#servicio-domicilio`;
  const telephone = contactConfig.whatsappNumber.replace(/[^\d+]/g, "");

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: siteConfig.fullName,
      jobTitle: "Fisioterapeuta",
      worksFor: {
        "@id": businessId,
      },
      knowsAbout: [
        "Fisioterapia musculoesquelética",
        "Fisioterapia deportiva",
        "Terapia manual",
        "Ejercicio terapéutico",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": businessId,
      name: siteConfig.fullName,
      url: siteConfig.url,
      description:
        "Fisioterapia a domicilio en Madrid para dolor, lesiones deportivas y recuperación funcional.",
      areaServed: {
        "@type": "City",
        name: "Madrid",
      },
      medicalSpecialty: "Physiotherapy",
      priceRange: `Desde ${siteConfig.priceFrom}`,
      ...(telephone ? { telephone } : {}),
      ...(contactConfig.email ? { email: contactConfig.email } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: "Fisioterapia a domicilio en Madrid",
      serviceType: "Fisioterapia",
      provider: {
        "@id": businessId,
      },
      areaServed: {
        "@type": "City",
        name: "Madrid",
      },
      offers: {
        "@type": "Offer",
        price: "50",
        priceCurrency: "EUR",
        description: "Primera sesión de fisioterapia a domicilio desde 50 €.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tratamientos de fisioterapia",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
