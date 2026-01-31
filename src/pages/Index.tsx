import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import RecognitionSection from "@/components/portfolio/RecognitionSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ConnectSection from "@/components/portfolio/ConnectSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <RecognitionSection />
        <SkillsSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
