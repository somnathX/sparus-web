import type { Metadata } from "next";
import { Archivo, Fragment_Mono } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { company } from "@/content/company";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const defaultTitle = "Sparus Technology — Software that works in production";
const defaultDescription =
  "Sparus Technology is a product-minded engineering company. Software development, AI integration, and infrastructure that holds up in production.";

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
    "product engineering",
    "Udaipur",
    "Dubai",
    "India",
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
  verification: {
    google: "iE7tB31v2Kq1elTx5A-eBXPW0Cht_3PsF6lDE1iefXY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
