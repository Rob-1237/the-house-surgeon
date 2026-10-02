import { site } from "@/content/site";
import { services } from "@/content/services";

/** LocalBusiness/Plumber schema. Fill license, hours, and geo once Floyd confirms. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.name,
    url: site.url,
    telephone: "+1-463-312-4018",
    email: site.email,
    image: `${site.url}/images/pip/pip-stethoscope.webp`,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 39.69, longitude: -86.29 }, // Decatur Twp, approx.
      geoRadius: Math.round(site.serviceArea.radiusMiles * 1609.34),
    },
    sameAs: [site.links.googleProfile],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/services/${s.slug}/` },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
