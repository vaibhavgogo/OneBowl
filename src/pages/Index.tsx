import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AnimalsSection from '@/components/AnimalsSection';
import StatsSection from '@/components/StatsSection';
import HowItWorksSection from '@/components/HowItWorksSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AnimalsSection />
      <HowItWorksSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
