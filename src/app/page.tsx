import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ClientsSection } from "@/components/sections/clients";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}