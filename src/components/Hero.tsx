
import React, { useState, useEffect } from 'react';
import { AnimatedElement, AnimatedText } from '@/lib/animations';
import { Calendar, Clock, MapPin } from 'lucide-react';

// The wedding date - adjust as needed
const WEDDING_DATE = new Date('2024-12-31T16:00:00');

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +WEDDING_DATE - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" 
        style={{ backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <AnimatedElement animation="fade-in-down" delay={200}>
          <p className="font-script text-2xl md:text-3xl lg:text-4xl mb-2 text-wedding-gold">
            We're Getting Married
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fade-in" delay={500}>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
            Jessica & Michael
          </h1>
        </AnimatedElement>

        <AnimatedElement animation="fade-in-up" delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10 text-white/90">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-wedding-gold" />
              <span className="font-serif">December 31, 2024</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-wedding-gold" />
              <span className="font-serif">4:00 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-wedding-gold" />
              <span className="font-serif">San Francisco, CA</span>
            </div>
          </div>
        </AnimatedElement>

        {/* Countdown */}
        <AnimatedElement animation="scale-in" delay={1100}>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 inline-block">
            <h3 className="font-serif text-lg mb-4">Countdown to Our Big Day</h3>
            <div className="flex justify-center space-x-4 sm:space-x-8">
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-1 countdown-number">
                  <span>{String(timeLeft.days).padStart(2, '0')}</span>
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-1 countdown-number">
                  <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Hours</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-1 countdown-number">
                  <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Minutes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-1 countdown-number">
                  <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Seconds</div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade-in-up" delay={1400}>
          <div className="mt-10">
            <a 
              href="#rsvp" 
              className="btn-elegant-primary text-sm sm:text-base rounded-full hover:shadow-lg transition-all duration-300"
            >
              RSVP Now
            </a>
          </div>
        </AnimatedElement>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-fade-in-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
