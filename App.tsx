
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative min-h-screen bg-luxury-cream dark:bg-luxury-dark text-luxury-charcoal dark:text-luxury-beige transition-colors duration-500">
      {/* Visual background accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-luxury-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-luxury-gold/5 blur-[100px] rounded-full"></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Section-to-section spacing removed; sections control their own paddings */}
      <main className="space-y-0">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
