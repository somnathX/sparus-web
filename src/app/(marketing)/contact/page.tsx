import type { Metadata } from "next";
import { ContactSection } from "@/components/landing/ContactSection";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/contact"),
  title: "Contact",
  description:
    "Reach Sparus Technology—tell us what you are building. We reply within one business day.",
};

export default function ContactPage() {
  return <ContactSection />;
}
