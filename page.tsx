import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}