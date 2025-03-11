
import React, { useState } from 'react';
import { AnimatedElement } from '@/lib/animations';
import { MessageCircle, ChevronDown, Mail, Phone } from 'lucide-react';

const FAQs = [
  {
    question: "Will there be transportation between the ceremony and reception?",
    answer: "Yes, we'll provide shuttle service between the ceremony and reception venues. Shuttles will depart from St. Patrick's Church at 5:30 PM."
  },
  {
    question: "What is the dress code?",
    answer: "The ceremony is formal attire and the reception is black tie optional. We encourage our guests to dress elegantly for the occasion."
  },
  {
    question: "Can I bring a plus one?",
    answer: "Due to venue capacity constraints, we can only accommodate guests who are explicitly named on the invitation. Please refer to your invitation for details."
  },
  {
    question: "Will the wedding be indoors or outdoors?",
    answer: "The ceremony will be indoors at St. Patrick's Church, and the reception will be held in the Grand Ballroom at The Fairmont Hotel, which is also indoors."
  },
  {
    question: "Where should I stay?",
    answer: "We've reserved a block of rooms at The Fairmont Hotel for our wedding guests at a special rate. Please use the group code 'JM2024' when booking."
  },
  {
    question: "Are children welcome?",
    answer: "While we love your little ones, our wedding will be an adult-only celebration. We appreciate your understanding."
  },
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Contact form submitted:', contactForm);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="faq" className="elegant-section">
      <div className="section-heading">
        <AnimatedElement>
          <h2 className="section-title">FAQ & Contact</h2>
        </AnimatedElement>
        <AnimatedElement delay={200}>
          <p className="section-subtitle">Answers to common questions and ways to reach us</p>
        </AnimatedElement>
        
        <div className="elegant-divider">
          <MessageCircle className="mx-4 text-wedding-gold" size={24} />
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQ Section */}
        <AnimatedElement animation="fade-in" threshold={0.2}>
          <div>
            <h3 className="font-display text-2xl mb-6">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {FAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-wedding-gold/20 rounded-md overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-wedding-gold/5 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? 'py-4 max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
        
        {/* Contact Form */}
        <AnimatedElement animation="fade-in" delay={200} threshold={0.2}>
          <div>
            <h3 className="font-display text-2xl mb-6">Contact Us</h3>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center">
                <Mail className="text-wedding-gold mr-3" size={20} />
                <span>wedding@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-wedding-gold mr-3" size={20} />
                <span>(123) 456-7890</span>
              </div>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8 border border-wedding-gold/20 rounded-md">
                <div className="mb-4 text-wedding-gold">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for your message. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="elegant-label">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="elegant-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="elegant-label">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="elegant-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-subject" className="elegant-label">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    className="elegant-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="elegant-label">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    className="elegant-textarea"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn-elegant-primary rounded-md w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Contact;
