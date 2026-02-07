
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-luxury-cream/90 dark:bg-luxury-dark/90 backdrop-blur-xl border-b border-luxury-gold/10' : 'py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center content-scale">
        <a href="#home" className="group flex items-center space-x-3">
          <span className="font-serif text-2xl tracking-tighter transition-all duration-500 group-hover:tracking-normal group-hover:text-luxury-gold uppercase">
            SARENDEM
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-xs uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors group overflow-hidden"
            >
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">{link.name}</span>
              <span className="absolute top-full left-0 inline-block transition-transform duration-500 group-hover:-translate-y-full text-luxury-gold">{link.name}</span>
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-luxury-gold/10 transition-all duration-500 hover:rotate-12"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - right-aligned fixed dropdown for phones */}
      {mobileMenuOpen && (
        <div className="fixed top-16 right-4 z-[49] md:hidden">
          <div className="bg-luxury-charcoal dark:bg-luxury-dark text-luxury-beige rounded-lg shadow-2xl py-3 px-4 space-y-2 min-w-[10rem]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-serif text-sm hover:text-luxury-gold transition-colors duration-200 tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
