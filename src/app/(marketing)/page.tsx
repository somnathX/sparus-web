import { Hero } from "@/components/landing/Hero";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { TechMarquee } from "@/components/landing/TechMarquee";
import { LocationsSection } from "@/components/landing/LocationsSection";
import { ContactSection } from "@/components/landing/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TechMarquee />
      <LocationsSection />
      <ContactSection />
    </>
  );
}
