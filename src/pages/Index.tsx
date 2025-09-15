import AnimalsSection from "@/views/AnimalsSection";
import HomeSection from "@/views/HomeSection";
import HowItWorksSection from "@/views/HowItWorksSection";
import Navbar from "@/views/Navbar";
import StatsSection from "@/views/StatsSection";
import Footer from "@/views/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomeSection />
      <AnimalsSection />
      <HowItWorksSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
