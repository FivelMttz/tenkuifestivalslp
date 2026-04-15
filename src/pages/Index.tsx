import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TheaterSection from "@/components/TheaterSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import VenuesSection from "@/components/VenuesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TheaterSection />
      <WorkshopsSection />
      <VenuesSection />
      <Footer />
    </div>
  );
};

export default Index;
