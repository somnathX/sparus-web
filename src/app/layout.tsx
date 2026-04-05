import type { Metadata } from "next";
import { JetBrains_Mono, Karla, Syne } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { company } from "@/content/company";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const display = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const body = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const defaultTitle = "Sparus Technology | Innovation & Scalable Tech Solutions";
const defaultDescription =
  "Enterprise-grade software development, AI integration, and infrastructure. Sparus Technology delivers reliable, scalable solutions for ambitious teams.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Sparus Technology",
  },
  description: defaultDescription,
  keywords: [
    "Sparus Technology",
    "software development",
    "AI integration",
    "cloud infrastructure",
    "enterprise technology",
    "Udaipur",
    "India",
    "product engineering",
  ],
  authors: [{ name: company.legalName, url: siteUrl }],
  creator: company.legalName,
  publisher: company.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: company.legalName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
