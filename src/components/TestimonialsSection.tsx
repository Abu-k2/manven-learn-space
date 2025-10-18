import React from 'react';
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const containerRef = useStaggerAnimation(200);
  
  const testimonials = [
    {
      quote: "The Manven School Kimumu has exceeded our expectations. The personalized attention and excellent academic foundation our daughter receives is outstanding. The teachers genuinely care about each child's development.",
      author: "Sarah Mwangi, Parent of Grade 3 Student"
    },
    {
      quote: "The modern facilities and comprehensive curriculum at Manven School have been instrumental in my son's academic growth. He comes home excited about what he learned each day!",
      author: "James Kimani, Parent of Grade 5 Student"
    },
    {
      quote: "We chose Manven School for its reputation for excellence, and it has delivered beyond our expectations. The balanced approach to academics and character development is remarkable.",
      author: "Dr. Emily Rotich, Parent of PP2 Student"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <h2 id="testimonials-heading" className="text-4xl font-bold font-poppins text-center mb-16 text-primary scroll-animate text-gradient">
          Parent Testimonials
        </h2>
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="bg-card p-8 rounded-lg stagger-animate shadow-card hover-lift hover-glow transition-all duration-300 border border-border"
              role="article"
              aria-labelledby={`testimonial-${index}`}
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-hero-secondary animate-rotate-in" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <blockquote className="text-foreground italic mb-6 leading-relaxed text-shimmer">
                "{testimonial.quote}"
              </blockquote>
              <cite id={`testimonial-${index}`} className="font-bold text-primary font-poppins animate-slide-up not-italic">
                — {testimonial.author}
              </cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;