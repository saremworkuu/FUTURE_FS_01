
import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 bg-luxury-charcoal/5 dark:bg-luxury-charcoal/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold mb-4 block">Specializations</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-8">
            Elevating Brands <br />
            <span className="italic">through Craftsmanship.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon];
            return (
              <div 
                key={index} 
                className="p-10 border border-luxury-charcoal/10 dark:border-luxury-beige/10 bg-luxury-cream dark:bg-luxury-dark/40 hover:border-luxury-gold transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-gold/5 flex items-center justify-center mb-10 group-hover:bg-luxury-gold transition-colors duration-500">
                  {Icon && <Icon className="text-luxury-gold group-hover:text-luxury-cream transition-colors duration-500" size={32} />}
                </div>
                <h3 className="font-serif text-3xl mb-4">{service.title}</h3>
                <p className="text-luxury-muted dark:text-luxury-beige/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-10 h-1 w-0 bg-luxury-gold transition-all duration-700 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
