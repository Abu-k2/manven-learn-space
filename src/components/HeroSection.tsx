import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-school.jpg';

const HeroSection = () => {
  const [selectedInterest, setSelectedInterest] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedInterest) {
      const sectionId = selectedInterest.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6 animate-fade-in">
          Welcome to The Manven School
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
          A nurturing environment for young learners to grow, explore, and thrive.
        </p>
        
        <form onSubmit={handleFormSubmit} className="mt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
            <select
              className="w-full md:w-96 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-all"
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
              aria-label="Select your interest"
            >
              <option value="" className="text-gray-800">Select your interest</option>
              <option value="#classes" className="text-gray-800">Learn about our classes</option>
              <option value="#facilities" className="text-gray-800">See our facilities</option>
              <option value="#testimonials" className="text-gray-800">Read testimonials</option>
              <option value="#contact" className="text-gray-800">Admissions and contact</option>
            </select>
            <Button 
              type="submit" 
              variant="secondary"
              className="w-full md:w-auto px-8 py-3 bg-hero-secondary hover:bg-hero-secondary/90 text-primary font-semibold"
            >
              Enter
            </Button>
          </div>
        </form>
        
        <Button
          onClick={scrollToContact}
          size="lg"
          className="mt-8 bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all px-8 py-3 text-lg font-semibold animate-fade-in"
        >
          Join Us Today
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;