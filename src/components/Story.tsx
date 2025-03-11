
import React from 'react';
import { AnimatedElement } from '@/lib/animations';
import { Heart } from 'lucide-react';

// Timeline data
const timelineEvents = [
  {
    date: "May 2018",
    title: "The First Meeting",
    description: "We met at a mutual friend's birthday party. Michael spilled his drink on Jessica's dress, and that's how our conversation started.",
    image: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    date: "August 2018",
    title: "First Date",
    description: "Our first official date was at a small Italian restaurant downtown. We talked for hours and realized we had so much in common.",
    image: "https://images.unsplash.com/photo-1529418561274-28320e5d6e73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    date: "December 2019",
    title: "Moving In Together",
    description: "After a year of dating, we decided to take the next step and move in together with our cat, Whiskers.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    date: "July 2023",
    title: "The Proposal",
    description: "Michael proposed during our vacation in Santorini, at sunset overlooking the caldera. It was the perfect moment.",
    image: "https://images.unsplash.com/photo-1571555788467-92586f53a9fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    date: "December 2024",
    title: "Wedding Day",
    description: "And now, we're excited to celebrate our love with friends and family as we begin our journey as husband and wife.",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const Story = () => {
  return (
    <section id="story" className="elegant-section">
      <div className="section-heading">
        <AnimatedElement>
          <h2 className="section-title">Our Love Story</h2>
        </AnimatedElement>
        <AnimatedElement delay={200}>
          <p className="section-subtitle">The journey that led us to forever</p>
        </AnimatedElement>
        
        <div className="elegant-divider">
          <Heart className="mx-4 text-wedding-gold" size={24} />
        </div>
      </div>
      
      <div className="timeline-container max-w-4xl mx-auto px-4 py-8">
        {timelineEvents.map((event, index) => (
          <AnimatedElement
            key={index}
            className="timeline-item"
            animation="fade-in"
            delay={index * 200}
            threshold={0.2}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-content fancy-box">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-md w-full h-48 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-display mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
      
      <AnimatedElement className="text-center mt-16" threshold={0.5}>
        <a href="#gallery" className="btn-elegant-secondary">
          View Our Gallery
        </a>
      </AnimatedElement>
    </section>
  );
};

export default Story;
