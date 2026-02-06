import React from 'react';
import { SKILL_CATEGORIES, EXPERIENCES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full pt-0 pb-20 md:pt-0 md:pb-28 lg:pt-0 lg:pb-32 -mt-16 md:-mt-20 lg:-mt-24 scroll-mt-20 bg-luxury-charcoal/5 dark:bg-luxury-charcoal/25"
    >
      <div className="container mx-auto px-6 md:px-12 content-scale">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Skills Categorized */}
          <div>
            <h3 className="font-serif text-4xl md:text-5xl mb-12">Technical Skills</h3>
            <div className="space-y-12">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-luxury-gold mb-6 font-bold">{cat.title}</h4>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {cat.skills.map(skill => (
                      <span key={skill} className="font-medium text-luxury-muted dark:text-luxury-beige/70 hover:text-luxury-gold transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="font-serif text-4xl md:text-5xl mb-12">Experience</h3>
            <div className="space-y-12 border-l border-luxury-charcoal/10 dark:border-luxury-beige/10 pl-8">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-luxury-gold transition-transform duration-500 group-hover:scale-150"></div>
                  <span className="text-xs uppercase tracking-widest text-luxury-gold font-bold mb-2 block">{exp.period}</span>
                  <h4 className="font-serif text-2xl mb-1">{exp.role}</h4>
                  <p className="text-sm font-medium mb-4">{exp.company}</p>
                  <p className="text-luxury-muted dark:text-luxury-beige/60 text-sm leading-relaxed max-w-md whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;