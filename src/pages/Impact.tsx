import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Users, MapPin, Calendar, TrendingUp, Award } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Heart,
      number: "50,000+",
      label: "Animals Fed",
      description: "Across dogs, cats, cows, monkeys, and birds"
    },
    {
      icon: Users,
      number: "12,000+",
      label: "Active Donors",
      description: "Compassionate people making a difference"
    },
    {
      icon: MapPin,
      number: "150+",
      label: "Cities Covered",
      description: "Spreading kindness across the nation"
    },
    {
      icon: Calendar,
      number: "365",
      label: "Days Active",
      description: "Feeding animals every single day"
    }
  ];

  const stories = [
    {
      title: "Street Dogs in Mumbai",
      location: "Mumbai, Maharashtra",
      impact: "2,500 meals delivered this month",
      image: "/placeholder.svg",
      description: "Thanks to generous donors, street dogs in Mumbai's busy areas now receive regular nutritious meals."
    },
    {
      title: "Temple Cows in Varanasi",
      location: "Varanasi, Uttar Pradesh", 
      impact: "500 kg fodder donated weekly",
      image: "/placeholder.svg",
      description: "Sacred cows near temples receive fresh fodder and care through our community feeding program."
    },
    {
      title: "Rescue Cats in Bangalore",
      location: "Bangalore, Karnataka",
      impact: "300 cats fed daily",
      image: "/placeholder.svg",
      description: "Abandoned and rescue cats in Bangalore shelters get proper nutrition and medical care."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our <span className="text-nature-primary">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Every donation creates ripples of compassion. See how your kindness is transforming lives across the country.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-nature-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-nature-secondary mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Stories, Real Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Witness the transformation happening in communities across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-nature-primary/20 to-nature-secondary/20 flex items-center justify-center">
                  <Award className="w-16 h-16 text-nature-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {story.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    {story.location}
                  </div>
                  <div className="inline-flex items-center gap-2 bg-nature-secondary/10 text-nature-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <TrendingUp className="w-4 h-4" />
                    {story.impact}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Be Part of This Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Your next donation could be the meal that saves a life. Join our community of compassionate donors.
          </p>
          <Button variant="hero" size="lg" className="animate-scale-in">
            Make Your Impact
            <Heart className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Impact;