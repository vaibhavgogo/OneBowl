import HeroSection from '@/components/HeroSection';
import AnimalsSection from '@/components/AnimalsSection';
import StatsSection from '@/components/StatsSection';
import HowItWorksSection from '@/components/HowItWorksSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AnimalsSection />
      <HowItWorksSection />
      <StatsSection />
    </div>
  );
};

export default Index;
