import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-1 md:pt-28 md:pb-2 lg:pt-32 lg:pb-4 scroll-mt-20 -mt-16 md:-mt-20">
      <div className="container mx-auto px-6 md:px-12 content-scale">
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[3/4] overflow-hidden relative transition-all duration-1000 bg-luxury-dark border border-luxury-gold/20 flex items-center justify-center">
              <img 
                src="https://i.pinimg.com/736x/2e/b6/bd/2eb6bdd6e7f416a92dc3f5017347738a.jpg" 
                alt="Sarendem Worku Illustration" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              {/* Subtle grain overlay for artistic texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
              {/* Overlay for cinematic depth effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-luxury-gold/10 backdrop-blur-3xl hidden md:flex items-center justify-center border border-luxury-gold/20 p-8 z-10">
              <span className="text-xs uppercase tracking-widest text-center font-bold">
                Security-Driven <br /> Systems Development
              </span>
            </div>
          </div>
          
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold mb-6 block">Sarendem Worku</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
              Building systems, <br />
              <span className="italic">and securing them.</span>
            </h2>
            <div className="space-y-6 text-lg text-luxury-muted dark:text-luxury-beige/80 leading-relaxed max-w-xl">
              <p>
                I love developing websites that focus on <span className="text-luxury-charcoal dark:text-luxury-beige font-medium">real-world solutions</span> while maintaining <span className="text-luxury-charcoal dark:text-luxury-beige font-medium">strong security</span>. Exploring <span className="text-luxury-charcoal dark:text-luxury-beige font-medium">cybersecurity</span> and participating in <span className="text-luxury-charcoal dark:text-luxury-beige font-medium">CTF challenges</span> helps me understand systems from the inside out, allowing me to think like both a builder and a defender. 
              </p>
              <p>
                I enjoy applying this mindset to create projects that balance functionality, safety, and thoughtful design, all driven by a genuine passion for <span className="text-luxury-charcoal dark:text-luxury-beige font-medium">learning and continuous growth</span>.
              </p>
              <p>
                Beyond that, I’m always eager to improve my skills by experimenting with new technologies, learning from real-world security scenarios, and refining my problem-solving approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;