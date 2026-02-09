
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-luxury-cream dark:bg-luxury-dark"
    >
      {/* Cinematic Hero Image Overlay - Subtle, moody background portrait */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-0 animate-[fadeIn_3s_ease-out_forwards] z-0">
        <img
          src="https://i.pinimg.com/1200x/17/1c/30/171c30b7fe35fd92f5cb1dc25653021f.jpg"
          alt="Portrait of a woman"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale brightness-[0.2] dark:brightness-[0.3] contrast-[1.15] [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_90%)]"
          loading="lazy"
        />
        {/* Edge vignette for better integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-luxury-cream dark:to-luxury-dark opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-cream via-transparent to-luxury-cream dark:from-luxury-dark dark:to-luxury-dark opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center content-scale">
        <div className="mb-8 inline-block opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <span className="text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold">
            Web Developer & Tester
          </span>
        </div>
        
        <h1 className="font-serif text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] mb-6 md:mb-8 tracking-tighter opacity-0 animate-[slideUp_1.5s_ease-out_forwards_0.2s] text-luxury-charcoal dark:text-luxury-beige w-full max-w-[90vw] md:max-w-[70ch] lg:max-w-none">
          Sarendem <br />
          <span className="italic font-light opacity-80">Worku.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-luxury-charcoal dark:text-luxury-beige/60 mb-10 md:mb-14 opacity-0 animate-[fadeIn_1s_ease-out_forwards_0.8s] leading-relaxed font-light">
          Building and testing problem-solving websites with strong security and <span className="text-luxury-charcoal dark:text-luxury-beige font-medium">high-performance engineering</span>.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards_1s]">
          <a 
            href="#projects" 
            className="inline-block relative px-12 py-5 group overflow-hidden border border-luxury-charcoal dark:border-luxury-beige"
          >
            <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-luxury-cream dark:group-hover:text-luxury-dark transition-colors duration-500">
              Explore Portfolio
            </span>
            <div className="absolute inset-0 bg-luxury-charcoal dark:bg-luxury-beige translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
          </a>
          <a 
            href="#contact" 
            className="text-[10px] uppercase tracking-[0.3em] font-bold py-5 hover:text-luxury-gold transition-colors flex items-center group"
          >
            Get In Touch
            <span className="ml-2 w-0 group-hover:w-8 h-px bg-luxury-gold transition-all duration-500"></span>
          </a>
        </div>
      </div>

      {/* Background depth accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none opacity-40 dark:opacity-60 z-[-1] hidden sm:block">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-luxury-gold/10 blur-[140px] rounded-full animate-pulse transition-colors duration-1000"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-luxury-gold/5 blur-[120px] rounded-full animate-pulse transition-colors duration-1000" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating accent line */}
      <div className="absolute top-0 right-[20%] w-px h-screen bg-gradient-to-b from-transparent via-luxury-gold/20 to-transparent hidden lg:block"></div>

      {/* Scroll indicator with text */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 transition-opacity hover:opacity-100 cursor-pointer group">
        <span className="text-[9px] uppercase tracking-[0.4em] mb-30 group-hover:text-luxury-gold transition-colors">Scroll</span>
        <div className="w-px h-16 bg-luxury-charcoal dark:bg-luxury-beige relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold animate-[scrollIndicator_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
