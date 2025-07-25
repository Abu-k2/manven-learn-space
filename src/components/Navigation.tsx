import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            className="text-xl font-bold font-poppins text-primary hover:text-hero-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            THE MANVEN SCHOOL <span className="text-hero-secondary">KIMUMU</span>
          </a>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Classes', id: 'classes' },
              { label: 'Facilities', id: 'facilities' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Admissions', id: 'contact' }
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Classes', id: 'classes' },
                { label: 'Facilities', id: 'facilities' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Admissions', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;