
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="pt-1 pb-0 md:pt-2 md:pb-0 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 content-scale">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Selected Works</h2>
            <p className="text-luxury-muted dark:text-luxury-beige/60 max-w-md">
              High-performance digital products built with precision and a focus on exceptional user experiences.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <span className="text-sm font-serif italic text-luxury-gold">
              {PROJECTS.length} Key Projects
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 md:gap-x-16 gap-y-24 md:gap-y-32">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-luxury-charcoal/5 dark:bg-luxury-beige/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-luxury-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-6">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="p-4 rounded-full bg-luxury-cream text-luxury-charcoal hover:scale-110 transition-transform" title="Live Demo">
                      <ExternalLink size={24} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="p-4 rounded-full bg-luxury-cream text-luxury-charcoal hover:scale-110 transition-transform" title="View Code">
                      <Github size={24} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] uppercase tracking-widest border border-luxury-gold/30 px-2 py-1 text-luxury-gold rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-luxury-muted mb-2 block font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-luxury-muted dark:text-luxury-beige/60 text-sm max-w-sm">
                    {project.description}
                  </p>
                </div>
                <span className="font-serif italic text-2xl text-luxury-muted/20">
                  {project.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
