
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Jessica & Michael - Wedding Invitation";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Story />
      <Events />
      <Gallery />
      <RSVP />
      <Contact />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-6 right-6 bg-wedding-gold text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-wedding-gold/90 transition-all hover:shadow-xl"
        aria-label="Back to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </a>
    </div>
  );
};

export default Index;
