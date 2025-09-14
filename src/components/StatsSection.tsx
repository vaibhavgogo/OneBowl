import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin, Award } from "lucide-react";
import CountUp from "./ui/animations/CountUp";

const StatsSection = () => {
  const stats = [
    {
      icon: Heart,
      number: "2,547",
      label: "Animals Fed",
      description: "This month",
    },
    {
      icon: Users,
      number: "1,239",
      label: "Kind Donors",
      description: "Growing daily",
    },
    {
      icon: MapPin,
      number: "47",
      label: "Locations",
      description: "Across the city",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "Delivered with proof",
    },
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nature-earth mb-4">
            Our Impact Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every donation creates a ripple of kindness. Here's how we're making
            a difference together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="text-center shadow-card border-0 bg-white/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-nature-primary/10">
                    <IconComponent className="w-8 h-8 text-nature-primary" />
                  </div>

                  <div className="text-3xl font-bold text-nature-earth mb-2">
                    {/* ✅ Using CountUp */}
                    <CountUp end={stat.number} duration={1200} />
                  </div>

                  <div className="text-lg font-semibold text-nature-earth mb-1">
                    {stat.label}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
