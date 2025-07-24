import Hero from "@/components/Hero";
import RoomsSection from "@/components/RoomsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const HomePage = () => (
  <main>
    <Hero />
    <RoomsSection showViewAllButton={true} />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
  </main>
);

export default HomePage; 