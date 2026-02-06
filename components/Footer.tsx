import React from 'react';
import { Linkedin, ArrowUp, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 bg-luxury-cream text-luxury-charcoal dark:bg-luxury-charcoal dark:text-luxury-beige">
      <div className="container mx-auto px-6 md:px-12 content-scale">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-luxury-beige/10">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-luxury-gold font-bold">Menu</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-luxury-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-luxury-gold transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-luxury-gold transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-luxury-gold transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-luxury-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-luxury-gold font-bold">Social</h4>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/saremworkuu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 border border-luxury-beige/10 rounded-full hover:border-luxury-gold hover:text-luxury-gold transition-all" 
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sarendem-worku-5405a3341/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 border border-luxury-beige/10 rounded-full hover:border-luxury-gold hover:text-luxury-gold transition-all" 
                aria-label="Linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:saremworkuu@gmail.com" 
                className="p-3 border border-luxury-beige/10 rounded-full hover:border-luxury-gold hover:text-luxury-gold transition-all" 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6 md:col-span-2 flex flex-col md:items-end justify-between">
            <div className="text-left md:text-right">
              <h4 className="text-xs uppercase tracking-widest text-luxury-gold font-bold mb-4">Location</h4>
              <p className="text-luxury-beige/60">
                Remote / Global
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="mt-8 flex items-center space-x-4 group self-start md:self-end"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">Back to top</span>
              <div className="p-3 border border-luxury-gold rounded-full group-hover:bg-luxury-gold transition-colors duration-500">
                <ArrowUp size={16} className="group-hover:text-luxury-charcoal" />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-luxury-beige/30 space-y-4 md:space-y-0">
          <p>© 2026 Sarendem Worku. Made with Passion and Code.</p>
          <div className="flex space-x-8">
            <span>Available for Hire</span>
            <span className="w-1 h-1 rounded-full bg-luxury-gold self-center"></span>
            <span>V 1.0.5</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;