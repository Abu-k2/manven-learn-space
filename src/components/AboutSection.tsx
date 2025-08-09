import React from 'react';
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const containerRef = useStaggerAnimation(200);

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-poppins text-center mb-16 text-primary scroll-animate text-gradient">
          About Us
        </h2>
        <div ref={containerRef} className="grid md:grid-cols-2 gap-12">
          <div className="stagger-animate hover-lift bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-primary">Our Story</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Founded in 2023, Maven Academy is a vibrant private school dedicated to fostering creativity and learning for young children from PP1 to Grade 3.
            </p>
          </div>
          <div className="stagger-animate hover-lift bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-primary">Mission & Vision</h3>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-primary">Mission:</strong> To provide a supportive and engaging environment that inspires a love for learning.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-primary">Vision:</strong> To be the world class academic champion.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-primary">Motto:</strong> In God we trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;