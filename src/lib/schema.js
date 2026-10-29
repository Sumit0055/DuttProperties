import { siteConfig } from "./site";

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function projectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: project.name,
    description: project.description,
    url: `${siteConfig.url}/${project.slug}`,
    image: project.image,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    numberOfAccommodations: undefined,
    provider: {
      "@id": `${siteConfig.url}/#organisation`,
      "@type": "RealEstateAgent",
      name: siteConfig.legalName,
    },
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function servicesSchema(services) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Real estate property consultancy",
    provider: { "@id": `${siteConfig.url}/#organisation` },
    areaServed: siteConfig.areasServed.map((area) => ({ "@type": "City", name: area })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dutt Properties services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}
