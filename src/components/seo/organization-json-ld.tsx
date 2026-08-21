import { company, offices } from "@/content/company";
import { getSiteUrl } from "@/lib/site";

export function OrganizationJsonLd() {
  const url = getSiteUrl();
  const hq = offices[0];
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.shortName,
    url,
    description: company.tagline,
    sameAs: [company.linkedinUrl],
    email: company.contactEmail,
    telephone: company.phoneHref,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CIN",
      value: company.cin,
    },
    ...(hq && {
      address: {
        "@type": "PostalAddress",
        streetAddress: hq.addressLines.slice(0, 2).join(", "),
        addressLocality: hq.city,
        addressRegion: hq.region,
        postalCode: "313001",
        addressCountry: hq.country,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
