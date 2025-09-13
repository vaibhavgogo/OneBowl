import React from 'react';
import AnimalCard from '@/components/AnimalCard';
import dogImage from '@/assets/dog-hero.jpg';
import catImage from '@/assets/cat-hero.jpg';
import cowImage from '@/assets/cow-hero.jpg';
import monkeyImage from '@/assets/monkey-hero.jpg';
import birdImage from '@/assets/bird-hero.jpg';

const AnimalsSection = () => {
  const animals = [
    {
      name: "Dogs",
      emoji: "🐶",
      image: dogImage,
      description: "Street dogs and shelter pups waiting for their next meal"
    },
    {
      name: "Cats",
      emoji: "🐱", 
      image: catImage,
      description: "Feline friends who need love and nourishment"
    },
    {
      name: "Cows",
      emoji: "🐄",
      image: cowImage,
      description: "Gentle giants providing for us, deserving care in return"
    },
    {
      name: "Monkeys",
      emoji: "🐒",
      image: monkeyImage,
      description: "Playful primates looking for fruits and treats"
    },
    {
      name: "Birds",
      emoji: "🐦",
      image: birdImage,
      description: "Hardy farm animals that bring joy to rural communities"
    }
  ];

  const handleAnimalClick = (animalName: string) => {
    // This would navigate to the food selection page in a real app
    console.log(`Selected animal: ${animalName}`);
    alert(`Great choice! Food options for ${animalName} will be available soon. 🎉`);
  };

  return (
    <section id="animals-section" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-earth mb-6">
            Who Would You Like to Feed?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every animal deserves love and care. Choose your furry, feathered, or four-legged friend 
            and help us bring them the nourishment they need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {animals.map((animal, index) => (
            <div 
              key={animal.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimalCard
                name={animal.name}
                emoji={animal.emoji}
                image={animal.image}
                description={animal.description}
                onClick={() => handleAnimalClick(animal.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalsSection;