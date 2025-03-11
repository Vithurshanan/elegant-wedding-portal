
import React, { useState } from 'react';
import { AnimatedElement } from '@/lib/animations';
import { Calendar, Users, MessageCircle } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guestCount: '1',
    mealPreference: 'standard',
    dietaryRestrictions: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          attending: 'yes',
          guestCount: '1',
          mealPreference: 'standard',
          dietaryRestrictions: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section 
      id="rsvp" 
      className="elegant-section relative bg-[url('https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed bg-center"
    >
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="relative z-10">
        <div className="section-heading">
          <AnimatedElement>
            <h2 className="section-title">RSVP</h2>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <p className="section-subtitle">We look forward to celebrating with you</p>
          </AnimatedElement>
          
          <div className="elegant-divider">
            <Calendar className="mx-4 text-wedding-gold" size={24} />
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <AnimatedElement animation="fade-in" threshold={0.3}>
            <div className="bg-white p-8 rounded-lg shadow-md elegant-border">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mb-4 text-wedding-gold">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Your RSVP has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="elegant-label">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="elegant-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="elegant-label">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="elegant-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="attending" className="elegant-label">Will you be attending? <span className="text-red-500">*</span></label>
                      <select
                        id="attending"
                        name="attending"
                        value={formData.attending}
                        onChange={handleChange}
                        className="elegant-select w-full"
                        required
                      >
                        <option value="yes">Yes, I will attend</option>
                        <option value="no">No, I cannot attend</option>
                      </select>
                    </div>
                    
                    {formData.attending === 'yes' && (
                      <div>
                        <label htmlFor="guestCount" className="elegant-label">Number of Guests <span className="text-red-500">*</span></label>
                        <select
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="elegant-select w-full"
                          required
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                        </select>
                      </div>
                    )}
                  </div>
                  
                  {formData.attending === 'yes' && (
                    <>
                      <div>
                        <label htmlFor="mealPreference" className="elegant-label">Meal Preference</label>
                        <select
                          id="mealPreference"
                          name="mealPreference"
                          value={formData.mealPreference}
                          onChange={handleChange}
                          className="elegant-select w-full"
                        >
                          <option value="standard">Standard (Beef)</option>
                          <option value="fish">Fish</option>
                          <option value="vegetarian">Vegetarian</option>
                          <option value="vegan">Vegan</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="dietaryRestrictions" className="elegant-label">Dietary Restrictions</label>
                        <input
                          type="text"
                          id="dietaryRestrictions"
                          name="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={handleChange}
                          className="elegant-input"
                          placeholder="Please list any allergies or dietary restrictions"
                        />
                      </div>
                    </>
                  )}
                  
                  <div>
                    <label htmlFor="message" className="elegant-label">Message to the Couple</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="elegant-textarea"
                      placeholder="Share your wishes or any additional information"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-elegant-primary rounded-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit RSVP'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedElement>
          
          <AnimatedElement className="text-center mt-10" animation="fade-in" threshold={0.3}>
            <p className="text-muted-foreground">
              Please RSVP by <span className="font-medium">November 15, 2024</span>
            </p>
            <p className="text-sm mt-2">
              For any questions regarding your RSVP, please contact us at <a href="mailto:wedding@example.com" className="text-wedding-gold hover:underline">wedding@example.com</a>
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
