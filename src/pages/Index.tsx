import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClassesSection from '@/components/ClassesSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const { triggerAnimation } = useScrollAnimation();

  useEffect(() => {
    // Initialize scroll animations on mount
    const timer = setTimeout(() => {
      triggerAnimation('.scroll-animate');
    }, 100);
    
    return () => clearTimeout(timer);
  }, [triggerAnimation]);

  return (
    <div className="min-h-screen font-poppins overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
