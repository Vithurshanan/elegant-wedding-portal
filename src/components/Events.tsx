
import React from 'react';
import { AnimatedElement } from '@/lib/animations';
import { Calendar, Clock, MapPin, Gift, Sparkles, Music } from 'lucide-react';

const Events = () => {
  return (
    <section id="events" className="elegant-section bg-muted/50">
      <div className="section-heading">
        <AnimatedElement>
          <h2 className="section-title">Wedding Events</h2>
        </AnimatedElement>
        <AnimatedElement delay={200}>
          <p className="section-subtitle">Join us to celebrate our special day</p>
        </AnimatedElement>
        
        <div className="elegant-divider">
          <Calendar className="mx-4 text-wedding-gold" size={24} />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {/* Ceremony Card */}
        <AnimatedElement animation="fade-in-up" threshold={0.2}>
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg elegant-border h-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-wedding-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-wedding-gold" size={26} />
              </div>
              <h3 className="font-display text-2xl mb-1">The Ceremony</h3>
              <p className="text-muted-foreground font-serif italic">
                Where we say "I do"
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 mr-3 text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Date</h4>
                  <p className="text-muted-foreground">December 31, 2024</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Time</h4>
                  <p className="text-muted-foreground">4:00 PM - 5:30 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    St. Patrick's Church<br />
                    747 Mission Street<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Gift className="w-5 h-5 mr-3 text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Dress Code</h4>
                  <p className="text-muted-foreground">Formal Attire</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wedding-gold hover:text-wedding-gold/80 underline decoration-wedding-gold/30 hover:decoration-wedding-gold/60 font-medium"
              >
                Get Directions
              </a>
            </div>
          </div>
        </AnimatedElement>
        
        {/* Reception Card */}
        <AnimatedElement animation="fade-in-up" delay={200} threshold={0.2}>
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg elegant-border h-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-wedding-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-wedding-gold" size={26} />
              </div>
              <h3 className="font-display text-2xl mb-1">The Reception</h3>
              <p className="text-muted-foreground font-serif italic">
                Time to celebrate
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 mr-3 text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Date</h4>
                  <p className="text-muted-foreground">December 31, 2024</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Time</h4>
                  <p className="text-muted-foreground">6:00 PM - 12:00 AM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Grand Ballroom<br />
                    The Fairmont Hotel<br />
                    950 Mason Street<br />
                    San Francisco, CA 94108
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Gift className="w-5 h-5 mr-3 text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Dress Code</h4>
                  <p className="text-muted-foreground">Black Tie Optional</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wedding-gold hover:text-wedding-gold/80 underline decoration-wedding-gold/30 hover:decoration-wedding-gold/60 font-medium"
              >
                Get Directions
              </a>
            </div>
          </div>
        </AnimatedElement>
      </div>
      
      {/* Additional Info */}
      <AnimatedElement className="mt-16 max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-md elegant-border" threshold={0.3}>
        <h3 className="font-display text-2xl mb-4">Additional Information</h3>
        <div className="space-y-4 text-left">
          <div className="mb-4">
            <h4 className="font-medium mb-2">Parking</h4>
            <p className="text-muted-foreground">
              Valet parking will be available at both venues. Self-parking options are also available nearby.
            </p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">Transportation</h4>
            <p className="text-muted-foreground">
              A shuttle service will be provided between the ceremony and reception venues.
              Shuttles will depart from St. Patrick's Church at 5:30 PM.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Accommodations</h4>
            <p className="text-muted-foreground">
              We have reserved a block of rooms at The Fairmont Hotel for our wedding guests.
              Please use the group code "JM2024" when booking to receive our special rate.
            </p>
          </div>
        </div>
      </AnimatedElement>
    </section>
  );
};

export default Events;
