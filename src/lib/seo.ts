import { contactConfig, locationConfig, siteConfig } from "@/lib/constants";
import { faqItems, services } from "@/data/landing";
import type { Treatment } from "@/types/content";
import { getTreatmentPath } from "@/content/treatments";

type JsonLdObject = Record<string, unknown>;

export function getLandingJsonLd(): JsonLdObject[] {
  const personId = `${siteConfig.url}/#borja-estarellas`;
  const businessId = `${siteConfig.url}/#organization`;
  const serviceId = `${siteConfig.url}/#fisioterapia-madrid`;
  const telephone = contactConfig.whatsappNumber.replace(/[^\d+]/g, "");

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: siteConfig.fullName,
      jobTitle: "Fisioterapeuta",
      url: siteConfig.url,
      worksFor: {
        "@id": businessId,
      },
      knowsAbout: [
        "Fisioterapia musculoesquelética",
        "Fisioterapia deportiva",
        "Terapia manual",
        "Ejercicio terapéutico",
        "Dolor lumbar",
        "Dolor cervical",
        "Tendinopatías",
        "Esguinces",
        "Fascitis plantar",
        "Ecografía musculoesquelética",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": businessId,
      name: siteConfig.fullName,
      url: siteConfig.url,
      description:
        "Fisioterapia en Madrid para dolor, lesiones deportivas y recuperación funcional. Consulta en Arganzuela y atención a domicilio.",
      image: `${siteConfig.url}/borja.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: locationConfig.address,
        addressLocality: locationConfig.city,
        addressRegion: "Madrid",
        postalCode: locationConfig.postalCode,
        addressCountry: "ES",
      },
      hasMap: locationConfig.mapsUrl,
      areaServed: {
        "@type": "City",
        name: "Madrid",
        sameAs: "https://en.wikipedia.org/wiki/Madrid",
      },
      ...(telephone ? { telephone } : {}),
      ...(contactConfig.email ? { email: contactConfig.email } : {}),
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: "Fisioterapia en Madrid",
      serviceType: "Fisioterapia",
      provider: {
        "@id": businessId,
      },
      areaServed: [
        { "@type": "City", name: "Madrid" },
        { "@type": "Place", name: `${locationConfig.neighborhood}, ${locationConfig.district}` },
      ],
      offers: [
        { "@type": "Offer", name: "Primera sesión en consulta", price: "50", priceCurrency: "EUR", url: `${siteConfig.url}/tarifas` },
        { "@type": "Offer", name: "Primera sesión a domicilio", price: "60", priceCurrency: "EUR", url: `${siteConfig.url}/tarifas` },
      ],
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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servicios",
          item: `${siteConfig.url}/#servicios`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Precio",
          item: `${siteConfig.url}/#precio`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contacto",
          item: `${siteConfig.url}/#contacto`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": siteConfig.url,
      url: siteConfig.url,
      name: `Fisioterapia en Arganzuela y Madrid | ${siteConfig.fullName}`,
      description:
        "Consulta de fisioterapia en Arganzuela y atención a domicilio en Madrid con Borja Estarellas.",
      isPartOf: {
        "@id": siteConfig.url,
      },
      about: {
        "@id": businessId,
      },
      inLanguage: "es",
      availableLanguage: "es",
    },
  ];
}

export function getTreatmentJsonLd(treatment: Treatment): JsonLdObject {
  const path = getTreatmentPath(treatment.slug);
  const url = `${siteConfig.url}${path}`;
  const providerId = `${siteConfig.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: treatment.hero.h1,
        description: treatment.seo.description,
        serviceType: "Fisioterapia",
        areaServed: { "@type": "City", name: "Madrid" },
        provider: { "@id": providerId },
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Tratamientos", item: `${siteConfig.url}/tratamientos` },
          { "@type": "ListItem", position: 3, name: treatment.name, item: url },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: treatment.seo.title,
        description: treatment.seo.description,
        inLanguage: "es",
        about: { "@id": `${url}/#service` },
      },
    ],
  };
}
