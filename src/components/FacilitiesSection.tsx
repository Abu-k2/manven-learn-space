import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import classroomImage from '@/assets/classroom.jpg';
import playgroundImage from '@/assets/playground.jpg';

const FacilitiesSection = () => {
  const facilities = [
    {
      title: 'Modern Smart Classrooms',
      description: 'Eight fully-equipped smart classrooms with interactive whiteboards, air conditioning, and modern furniture designed for optimal learning experiences.',
      image: classroomImage,
      alt: 'Modern smart classroom with interactive whiteboard and comfortable seating at The Manven School Kimumu'
    },
    {
      title: 'Sports & Recreation Facilities',
      description: 'Expansive playground with modern play equipment, sports fields for football and athletics, and covered assembly area for various activities.',
      image: playgroundImage,
      alt: 'Well-maintained sports facilities and playground equipment at The Manven School Kimumu'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-muted" aria-labelledby="facilities-heading">
      <div className="container mx-auto px-4">
        <h2 id="facilities-heading" className="text-4xl font-bold font-poppins text-center mb-16 text-primary animate-fade-in">
          World-Class Facilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in overflow-hidden"
              role="article"
              aria-labelledby={`facility-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
              <CardHeader>
                <CardTitle id={`facility-${index}`} className="text-xl font-semibold font-poppins text-primary">
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