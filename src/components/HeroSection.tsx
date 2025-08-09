import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from '@/assets/hero-school.jpg';

const HeroSection = () => {
  const [selectedInterest, setSelectedInterest] = useState('');
  const { triggerAnimation } = useScrollAnimation();

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
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-4 h-4 bg-white/20 rounded-full animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-3 h-3 bg-white/30 rounded-full animate-float" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-5 h-5 bg-white/15 rounded-full animate-float" style={{ top: '80%', left: '20%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-float" style={{ top: '30%', left: '70%', animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6 animate-text-reveal text-gradient">
          Welcome to The Manven School
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up text-shimmer">
          A nurturing environment for young learners to grow, explore, and thrive.
        </p>
        
        <form onSubmit={handleFormSubmit} className="mt-8 scroll-scale">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
            <select
              className="w-full md:w-96 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-all hover-glow"
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
              className="w-full md:w-auto px-8 py-3 bg-hero-secondary hover:bg-hero-secondary/90 text-primary font-semibold hover-scale animate-pulse-glow"
            >
              Enter
            </Button>
          </div>
        </form>
        
        <Button
          onClick={scrollToContact}
          size="lg"
          className="mt-8 bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all px-8 py-3 text-lg font-semibold animate-bounce-in hover-lift"
        >
          Join Us Today
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;