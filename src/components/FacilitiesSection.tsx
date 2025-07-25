import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import classroomImage from '@/assets/classroom.jpg';
import playgroundImage from '@/assets/playground.jpg';

const FacilitiesSection = () => {
  const facilities = [
    {
      title: 'Five Modern Classrooms',
      description: 'Our five spacious classrooms are equipped with interactive learning tools and colorful decor.',
      image: classroomImage,
      alt: 'Modern classroom with interactive tools'
    },
    {
      title: 'Playground',
      description: 'A safe and fun outdoor playground with swings, slides, and climbing structures.',
      image: playgroundImage,
      alt: 'Outdoor playground with swings and slides'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-poppins text-center mb-16 text-primary animate-fade-in">
          Our Facilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-poppins text-primary">
                  {facility.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;