import type { Metadata } from "next";
import { JetBrains_Mono, Karla, Syne } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Sparus Technology | Innovation & Scalable Tech Solutions",
    template: "%s | Sparus Technology",
  },
  description:
    "Enterprise-grade software development, AI integration, and infrastructure. Sparus Technology delivers reliable, scalable solutions for ambitious teams.",
  keywords: [
    "Sparus Technology",
    "software development",
    "AI integration",
    "cloud infrastructure",
    "enterprise technology",
  ],
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
        {children}
      </body>
    </html>
  );
}
