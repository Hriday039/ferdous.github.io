import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ResearchInterestSection from "@/components/sections/ResearchInterestSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ResearchSection />
      <ResearchInterestSection />
      <EducationSection />
      <SkillsSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
