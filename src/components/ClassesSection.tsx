import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClassesSection = () => {
  const classes = [
    {
      title: 'PP1 (Pre-Primary 1)',
      description: 'Ages 3-4: Introduction to basic skills through play-based learning.',
    },
    {
      title: 'PP2 (Pre-Primary 2)',
      description: 'Ages 4-5: Builds on PP1 with early literacy and numeracy.',
    },
    {
      title: 'Grade 1',
      description: 'Ages 5-6: Foundational skills in reading, writing, and math.',
    },
    {
      title: 'Grade 2',
      description: 'Ages 6-7: Expanding knowledge with more complex subjects.',
    },
    {
      title: 'Grade 3',
      description: 'Ages 7-8: Preparing for higher education with critical thinking skills.',
    },
    {
      title: 'Daycare Services',
      description: 'Ages 3-8: We offer comprehensive daycare services for all grade levels.',
    },
  ];

  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-poppins text-center mb-16 text-primary animate-fade-in">
          Classes Offered
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-poppins text-primary">
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