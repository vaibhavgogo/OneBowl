import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Shield, Globe, Award } from "lucide-react";
import Navbar from "@/views/Navbar";
import Footer from "@/views/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description:
        "Every decision we make is guided by genuine care for animals and the people who love them.",
    },
    {
      icon: Shield,
      title: "Complete Transparency",
      description:
        "Track your donation from payment to delivery with photo and video proof of impact.",
    },
    {
      icon: Globe,
      title: "Community Driven",
      description:
        "Building a network of animal lovers, local partners, and dedicated volunteers across India.",
    },
    {
      icon: Award,
      title: "Verified Impact",
      description:
        "Every meal is documented, every animal is helped, and every donor knows their contribution matters.",
    },
  ];

  const team = [
    {
      name: "Vaibhav Sharma",
      role: "Founder & CEO",
      description:
        "Animal welfare advocate with 10+ years of NGO experience. Started OneBowl after rescuing 50+ street dogs.",
      icon: Heart,
    },
    {
      name: "Aditya Shahi",
      role: "Operations Head",
      description:
        "Former logistics manager who ensures every donation reaches the right animals at the right time.",
      icon: Target,
    },
    {
      name: "Dr. Meera Nair",
      role: "Veterinary Advisor",
      description:
        "Licensed veterinarian providing guidance on animal nutrition and welfare standards.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            About <span className="text-nature-primary">OneBowl</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Born from a simple belief: every animal deserves love, care, and a
            full belly. We're making animal welfare accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                OneBowl bridges the gap between compassionate hearts and hungry
                animals. We believe that feeding an animal shouldn't be
                complicated, expensive, or uncertain.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Through our platform, anyone can choose an animal, select
                appropriate food, and track their donation from purchase to
                delivery. We're not just feeding animals – we're building a
                community of kindness.
              </p>
              <Button variant="nature" size="lg" className="animate-scale-in">
                Join Our Mission
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-nature-primary/10 to-nature-secondary/10 rounded-2xl p-8 animate-scale-in">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-nature-primary mb-2">
                    2025
                  </div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-nature-primary mb-2">
                    1K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Animals Fed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-nature-primary mb-2">
                    5+
                  </div>
                  <div className="text-sm text-muted-foreground">Cities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-nature-primary mb-2">
                    1K+
                  </div>
                  <div className="text-sm text-muted-foreground">Donors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-primary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-nature-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate people working to make animal welfare accessible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-nature-secondary/10 rounded-full mb-6">
                  <member.icon className="w-10 h-10 text-nature-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-nature-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're a donor, volunteer, or partner, there's a place for
            you in the OneBowl community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="animate-scale-in">
              Start Donating
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="nature" size="lg" className="animate-scale-in">
              Become a Partner
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
