import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <nav className="flex flex-wrap justify-center items-center gap-4">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Classes', id: 'classes' },
              { label: 'Facilities', id: 'facilities' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Admissions', id: 'contact' }
            ].map((item, index, array) => (
              <React.Fragment key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-hero-secondary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
                {index < array.length - 1 && <span className="text-primary-foreground/60">|</span>}
              </React.Fragment>
            ))}
          </nav>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-hero-secondary transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-hero-secondary transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.243 14.894 3.752 13.743 3.752 12.446c0-1.297.49-2.448 1.369-3.328.88-.88 2.031-1.369 3.328-1.369 1.297 0 2.448.49 3.328 1.369.88.88 1.369 2.031 1.369 3.328 0 1.297-.49 2.448-1.369 3.328-.88.807-2.031 1.297-3.328 1.297zm7.718-1.297c-.88.88-2.031 1.369-3.328 1.369-1.297 0-2.448-.49-3.328-1.369-.88-.88-1.369-2.031-1.369-3.328 0-1.297.49-2.448 1.369-3.328.88-.88 2.031-1.369 3.328-1.369 1.297 0 2.448.49 3.328 1.369.88.88 1.369 2.031 1.369 3.328 0 1.297-.49 2.448-1.369 3.328z"/>
            </svg>
          </a>
          <a 
            href="https://www.tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-hero-secondary transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
        
        <p className="text-primary-foreground/80">
          © 2025 Maven Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;