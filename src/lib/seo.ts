import { contactConfig, locationConfig, siteConfig } from "@/lib/constants";
import type { Treatment } from "@/types/content";
import { getTreatmentPath } from "@/content/treatments";

type JsonLdObject = Record<string, unknown>;

const websiteId = `${siteConfig.url}/#website`;
const personId = `${siteConfig.url}/#borja-estarellas`;
const businessId = `${siteConfig.url}/#fisio-estarellas`;

export function getLandingJsonLd(): JsonLdObject {
  const address = {
    "@type": "PostalAddress",
    streetAddress: locationConfig.address,
    addressLocality: locationConfig.city,
    addressRegion: "Madrid",
    postalCode: locationConfig.postalCode,
    addressCountry: "ES",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "es",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.fullName,
        jobTitle: "Fisioterapeuta",
        identifier: { "@type": "PropertyValue", propertyID: "Número de colegiado", value: siteConfig.registrationNumber },
        url: `${siteConfig.url}/sobre-borja`,
        affiliation: { "@id": businessId },
      },
      {
        "@type": "MedicalBusiness",
        "@id": businessId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: "Consulta independiente de fisioterapia de Borja Estarellas en Almagro, Chamberí, dentro de Meraki Salud Chamberí. También ofrece atención a domicilio en Madrid.",
        image: `${siteConfig.url}/borja.png`,
        address,
        areaServed: { "@type": "City", name: "Madrid" },
        telephone: contactConfig.phoneE164,
        email: contactConfig.email,
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#fisioterapia`,
        name: "Fisioterapia individual en Madrid",
        serviceType: "Fisioterapia",
        provider: { "@id": businessId },
        areaServed: { "@type": "City", name: "Madrid" },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "Borja Estarellas | Fisioterapeuta en Madrid",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        inLanguage: "es",
      },
    ],
  };
}

export function getLocalJsonLd(): JsonLdObject {
  const url = `${siteConfig.url}/fisioterapia-chamberi`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: "Fisioterapia en Chamberí, Almagro | Borja Estarellas",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Consulta en Chamberí", item: url },
        ],
      },
    ],
  };
}

export function getTreatmentJsonLd(treatment: Treatment): JsonLdObject {
  const url = `${siteConfig.url}${getTreatmentPath(treatment.slug)}`;

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
        provider: { "@id": businessId },
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
        isPartOf: { "@id": websiteId },
        inLanguage: "es",
        about: { "@id": `${url}/#service` },
      },
    ],
  };
}
