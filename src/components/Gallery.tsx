
import React, { useState } from 'react';
import { AnimatedElement } from '@/lib/animations';
import { Image, X } from 'lucide-react';

// Gallery images
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Couple walking on the beach"
  },
  {
    src: "https://images.unsplash.com/photo-1537907510278-e3838221b475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Couple holding hands"
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Couple in sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1490314631663-77e5b59b925b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Couple at a dinner"
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Couple dancing"
  },
  {
    src: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Couple at a park"
  },
  {
    src: "https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Engagement photo"
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Couple laughing"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="gallery" className="elegant-section">
      <div className="section-heading">
        <AnimatedElement>
          <h2 className="section-title">Our Gallery</h2>
        </AnimatedElement>
        <AnimatedElement delay={200}>
          <p className="section-subtitle">A collection of our favorite moments</p>
        </AnimatedElement>
        
        <div className="elegant-divider">
          <Image className="mx-4 text-wedding-gold" size={24} />
        </div>
      </div>
      
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <AnimatedElement
            key={index}
            animation="scale-in"
            delay={index * 100}
            threshold={0.2}
          >
            <div 
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer gallery-image fancy-box"
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-110"
                loading="lazy"
              />
            </div>
          </AnimatedElement>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-wedding-gold transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full" 
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="w-full h-full object-contain animate-scale-in"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
