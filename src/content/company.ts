/**
 * Update addresses, phones, and emails before going live.
 */

export const company = {
  legalName: "Sparus Technology",
  shortName: "Sparus",
  tagline:
    "Product engineering, applied AI, and infrastructure for teams who care what production feels like.",
  linkedinUrl: "https://www.linkedin.com/company/sparus-tech",
  /** Public profile; leave empty to hide the footer icon */
  twitterUrl: "",
  /** Org or company profile; leave empty to hide the footer icon */
  githubUrl: "",
  contactEmail: "hello@sparustechnology.com",
  privacyEmail: "privacy@sparustechnology.com",
  careersEmail: "careers@sparustechnology.com",
} as const;

/** Editorial copy for About — replace dates or metrics with your facts. */
export const companyStoryParagraphs = [
  "Sparus Technology is a product-minded engineering partner: we ship software, wire in AI where it earns its place, and harden the infrastructure underneath. Our team is based in Udaipur, Rajasthan—a city known for craft and precision, which is how we like our systems too.",
  "We work with companies across time zones remotely: stand-ups, reviews, and incident response are scheduled so stakeholders overseas get overlap without sacrificing depth on the engineering side.",
  "We work with scale-ups modernizing their stack, enterprises untangling legacy, and teams that need senior hands without hiring a full department overnight. Every engagement ends with code, runbooks, and context you can actually inherit.",
] as const;

export type Office = {
  id: string;
  label: string;
  city: string;
  region: string;
  country: string;
  role: string;
  addressLines: string[];
  hours: string;
  /** Google Maps search query */
  mapQuery: string;
};

export const offices: Office[] = [
  {
    id: "udaipur",
    label: "India — HQ",
    city: "Udaipur",
    region: "Rajasthan",
    country: "India",
    role: "Headquarters, product engineering & delivery center",
    addressLines: [
      "Industrial growth corridor (update suite / plot to your exact address)",
      "Madri–Bhuwana link road vicinity",
      "Udaipur, Rajasthan 313031",
      "India",
    ],
    hours: "Mon–Fri · 10:00–19:00 IST (GMT+5:30)",
    mapQuery: "Udaipur Rajasthan India tech park",
  },
];
