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
    ...(hq && {
      address: {
        "@type": "PostalAddress",
        addressLocality: hq.city,
        addressRegion: hq.region,
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
