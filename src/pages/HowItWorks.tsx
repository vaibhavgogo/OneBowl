import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Camera, Gift } from "lucide-react";
import Navbar from "@/views/Navbar";
import Footer from "@/views/Footer";

const HowItWorks = () => {
  const steps = [
    {
      icon: Heart,
      title: "Choose Your Animal",
      description:
        "Select from dogs, cats, cows, monkeys, birds, and more. Each animal has their own favorite foods and treats.",
      color: "text-nature-primary",
    },
    {
      icon: ShoppingCart,
      title: "Select Food & Quantity",
      description:
        "Pick the type of food and quantity you'd like to donate. From biscuits to fresh fruits, every meal counts.",
      color: "text-nature-secondary",
    },
    {
      icon: Gift,
      title: "Make Your Donation",
      description:
        "Complete your secure donation through our trusted payment partners. Choose to donate anonymously or with your name.",
      color: "text-accent",
    },
    {
      icon: Camera,
      title: "Track & See Impact",
      description:
        "Follow your donation from purchase to delivery. Receive photos and videos of the animals enjoying their meal.",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            How It <span className="text-nature-primary">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            From selecting an animal to seeing your impact, our simple 4-step
            process makes feeding animals easy and transparent.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-full bg-muted ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of compassionate people who are already feeding
            animals in need.
          </p>
          <Button variant="hero" size="lg" className="animate-scale-in">
            Start Feeding Animals
            <Heart className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorks;
