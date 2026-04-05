import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import GallerySection from "@/components/GallerySection";
import ScheduleSection from "@/components/ScheduleSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <GallerySection />
      <ScheduleSection />
      <PricingSection />
      <ContactSection />
      <footer className="py-6 text-center text-muted-foreground text-sm border-t border-border">
        Разработано{" "}
        <a
          href="https://t.me/itvladis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          @itvladis
        </a>{" "}
        © 2026
      </footer>
    </div>
  );
};

export default Index;
