import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AnimalCardProps {
  name: string;
  emoji: string;
  image: string;
  description: string;
  onClick: () => void;
}

const AnimalCard = ({ name, emoji, image, description, onClick }: AnimalCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-warm hover:-translate-y-1 bg-gradient-subtle border-0 shadow-card">
      <CardContent className="p-6">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={`Feed ${name}`}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 text-3xl animate-bounce-gentle">
            {emoji}
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-nature-earth">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          
          <Button 
            onClick={onClick}
            variant="nature"
            className="w-full"
          >
            Feed {name}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;