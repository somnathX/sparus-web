import type { Metadata } from "next";
import { HomeExperience } from "@/components/home/home-experience";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/"),
  title: "Sparus Technology — Software that works in production",
  description:
    "Sparus Technology is a product-minded engineering company. Software development, AI integration, and infrastructure that holds up in production.",
};

export default function HomePage() {
  return <HomeExperience />;
}
