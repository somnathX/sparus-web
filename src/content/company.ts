/**
 * Update addresses, phones, and emails before going live.
 */

export const company = {
  legalName: "Sparus Technology Private Limited",
  shortName: "Sparus",
  /** Corporate Identity Number — shown in the footer per MCA norms for Indian companies */
  cin: "U62013RJ2024PTC092407",
  tagline:
    "Product engineering, applied AI, and infrastructure for teams who care what production feels like.",
  linkedinUrl: "https://www.linkedin.com/company/sparus-tech",
  /** Public profile; leave empty to hide the footer icon */
  twitterUrl: "",
  /** Org or company profile; leave empty to hide the footer icon */
  githubUrl: "",
  contactEmail: "hello@sparustech.com",
  privacyEmail: "privacy@sparustech.com",
  careersEmail: "careers@sparustech.com",
  /** Registered-office contact number */
  phone: "+91 91166 25977",
  phoneHref: "+919116625977",
  /** Path under /public — e.g. /images/team-office.jpg */
  teamPhotoSrc: "/images/team-office.png",
  teamPhotoAlt: "Sparus Technology team at the Udaipur studio",
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
    role: "Registered office, product engineering & delivery center",
    addressLines: [
      "165 Jeevan Tara, Goverdhan Vilas",
      "Udaipur City, Girwa",
      "Udaipur, Rajasthan 313001",
      "India",
    ],
    hours: "Mon–Fri · 10:00–19:00 IST (GMT+5:30)",
    mapQuery: "165 Jeevan Tara, Goverdhan Vilas, Udaipur, Rajasthan 313001",
  },
  {
    id: "dubai",
    label: "UAE — Regional Office",
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    role: "Client engagement & regional operations",
    addressLines: [
      "Business Bay",
      "Dubai, UAE",
    ],
    hours: "Mon–Fri · 10:00–19:00 GST (GMT+4)",
    mapQuery: "Business Bay Dubai UAE",
  },
];
