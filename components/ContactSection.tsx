import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. I will get back to you shortly.');
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-luxury-charcoal/5 dark:bg-luxury-charcoal/30 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 content-scale">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold mb-6 block">Contact</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-10 leading-tight">
              Let's build <br />
              <span className="italic">something great.</span>
            </h2>
            <p className="text-lg text-luxury-muted dark:text-luxury-beige/70 max-w-sm mb-12">
              Currently accepting new projects and consulting opportunities. Reach out for a collaboration inquiry.
            </p>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest font-bold">Email</p>
              <a href="mailto:saremworkuu@gmail.com" className="text-2xl font-serif hover:text-luxury-gold transition-colors">saremworkuu@gmail.com</a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group relative">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-luxury-charcoal/20 dark:border-luxury-beige/20 py-4 focus:outline-none focus:border-luxury-gold transition-colors placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="group relative">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-luxury-charcoal/20 dark:border-luxury-beige/20 py-4 focus:outline-none focus:border-luxury-gold transition-colors placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="group relative">
                <textarea 
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-luxury-charcoal/20 dark:border-luxury-beige/20 py-4 focus:outline-none focus:border-luxury-gold transition-colors placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest resize-none"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="inline-flex items-center space-x-4 px-10 py-5 bg-luxury-charcoal dark:bg-luxury-beige text-luxury-cream dark:text-luxury-dark text-xs uppercase tracking-widest hover:bg-luxury-gold dark:hover:bg-luxury-gold transition-all duration-500 group"
              >
                <span>Send Inquiry</span>
                <Send size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;