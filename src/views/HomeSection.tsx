import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowDown } from "lucide-react";
import animalsTogetherImage from "@/assets/animals-together.jpg";
import oneLogo from "@/assets/onebowl-logo.png";

const HomeSection = () => {
  const scrollToAnimals = () => {
    const animalsSection = document.getElementById("animals-section");
    animalsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={animalsTogetherImage}
          alt="Animals together"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 flex flex-col items-center gap-4">
          <img
            src={oneLogo}
            alt="One Bowl Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <Heart
              className="w-5 h-5 text-nature-secondary"
              fill="currentColor"
            />
            <span className="text-sm font-medium">
              One bowl, endless compassion
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="text-nature-secondary">One</span>Bowl
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Choose an animal, select their favorite food, and watch your kindness
          create a ripple of joy. Every meal matters, every donation feeds hope.
        </p>
        <div className="gap-4 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToAnimals}
              className="animate-scale-in"
            >
              Start Feeding
              <Heart className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="ghost-white"
              size="lg"
              className="animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              Learn Our Story
            </Button>
          </div>
          <div className="transform -translate-x-1/2 animate-bounce-gentle">
            <button
              onClick={scrollToAnimals}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
