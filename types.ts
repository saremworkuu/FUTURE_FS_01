
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export type Theme = 'light' | 'dark';
