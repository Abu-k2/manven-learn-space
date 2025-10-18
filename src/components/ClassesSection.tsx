import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const ClassesSection = () => {
  const containerRef = useStaggerAnimation(150);
  
  const classes = [
    {
      title: 'Early Years (Nursery)',
      description: 'Ages 3-4: Play-based learning foundation with social skills development, basic motor skills, and early language introduction.',
    },
    {
      title: 'Pre-Primary 1 (PP1)',
      description: 'Ages 4-5: Structured learning with early literacy, numeracy basics, and creative arts in a supportive environment.',
    },
    {
      title: 'Pre-Primary 2 (PP2)',
      description: 'Ages 5-6: Advanced pre-school preparation with reading readiness, mathematical concepts, and science exploration.',
    },
    {
      title: 'Grade 1-3 (Lower Primary)',
      description: 'Ages 6-9: Core curriculum following Kenyan syllabus with strong foundation in English, Mathematics, and Environmental Studies.',
    },
    {
      title: 'Grade 4-6 (Upper Primary)',
      description: 'Ages 9-12: Advanced primary education with specialized subjects including Science, Social Studies, and creative arts.',
    },
    {
      title: 'Grade 7-8 (Junior Secondary)',
      description: 'Ages 12-14: Transition to competency-based curriculum preparing students for senior secondary education.',
    },
  ];

  return (
    <section id="classes" className="py-20 bg-background" aria-labelledby="classes-heading">
      <div className="container mx-auto px-4">
        <h2 id="classes-heading" className="text-4xl font-bold font-poppins text-center mb-16 text-primary scroll-animate text-gradient">
          Academic Programs & Classes
        </h2>
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card 
              key={index} 
              className="text-center stagger-animate shadow-card hover-lift hover-glow transition-all duration-300 bg-card border-border"
              role="article"
              aria-labelledby={`class-${index}`}
            >
              <CardHeader>
                <CardTitle id={`class-${index}`} className="text-xl font-semibold font-poppins text-primary animate-zoom-in">
                  {classItem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {classItem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;