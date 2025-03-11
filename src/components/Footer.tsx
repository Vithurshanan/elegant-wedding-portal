
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wedding-navy py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <a href="#home" className="inline-block">
            <span className="font-script text-3xl text-wedding-gold mb-4 inline-block">
              Jessica & Michael
            </span>
          </a>
          
          <div className="elegant-divider mb-6">
            <Heart className="mx-4 text-wedding-gold" size={20} />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#home" className="text-white/80 hover:text-wedding-gold transition-colors">Home</a>
            <a href="#story" className="text-white/80 hover:text-wedding-gold transition-colors">Our Story</a>
            <a href="#events" className="text-white/80 hover:text-wedding-gold transition-colors">Events</a>
            <a href="#gallery" className="text-white/80 hover:text-wedding-gold transition-colors">Gallery</a>
            <a href="#rsvp" className="text-white/80 hover:text-wedding-gold transition-colors">RSVP</a>
            <a href="#faq" className="text-white/80 hover:text-wedding-gold transition-colors">FAQ</a>
          </nav>
          
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Jessica & Michael | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
