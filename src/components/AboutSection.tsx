import React from 'react';
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const containerRef = useStaggerAnimation(200);

  return (
    <section id="about" className="py-20 bg-muted" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <h2 id="about-heading" className="text-4xl font-bold font-poppins text-center mb-16 text-primary scroll-animate text-gradient">
          About The Manven School Kimumu
        </h2>
        <div ref={containerRef} className="grid md:grid-cols-2 gap-12">
          <article className="stagger-animate hover-lift bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-primary">Our Story</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Founded with a vision to provide exceptional primary education, The Manven School Kimumu is a premier private school dedicated to fostering creativity, academic excellence, and character development for young children from Early Years to Grade 8 in Eldoret, Kenya.
            </p>
          </article>
          <article className="stagger-animate hover-lift bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-primary">Mission & Vision</h3>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-primary">Mission:</strong> To provide a supportive, engaging, and inclusive environment that inspires a lifelong love for learning, critical thinking, and character development.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-primary">Vision:</strong> To be the leading primary education institution in Kenya, producing globally competitive and morally upright citizens.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-primary">Motto:</strong> Excellence in Education, Character in Life.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;