import { Project, SkillCategory, Experience, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Haro-Dandi',
    category: 'Tourism & Exploration',
    image: 'https://i.pinimg.com/1200x/94/52/b7/9452b7a80c198c341eb69962b1858875.jpg',
    description: 'A premium digital gateway to cultural and natural exploration. Designed with immersive storytelling and a focus on seamless discovery of hidden horizons.',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Mapbox GL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/saremworkuu/Haro-Dandi-frontend'
  },
  {
    id: '02',
    title: 'SecretDoor',
    category: 'Cybersecurity Platform',
    image: 'https://i.pinimg.com/736x/55/d9/65/55d9656e72ff0dd0fa9aca1a722a690d.jpg',
    description: 'An advanced Capture The Flag (CTF) environment featuring multi-layered security challenges, real-time analytics, and a sophisticated hacking interface.',
    techStack: ['Next.js', 'Socket.io', 'Docker', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/saremworkuu/SecretDoor'
  },
  {
    id: '03',
    title: 'shopEasy',
    category: 'E-commerce Solutions',
    image: 'https://i.pinimg.com/736x/05/36/5f/05365f3a4361c56b9f93894e8cc899c3.jpg',
    description: 'A modern, high-conversion digital storefront optimizing the path to purchase with fluid animations, intuitive navigation, and high-performance checkout.',
    techStack: ['React', 'Redux', 'Stripe', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/saremworkuu/shopEasy-'
  },
  {
    id: '04',
    title: 'Backend-Task-Express.js',
    category: 'Backend Architecture',
    image: 'https://i.pinimg.com/1200x/95/dd/af/95ddaf55a0feabbe1fa82837eea73d86.jpg',
    description: 'A robust, scalable server-side engine built with Express.js. Engineered for high availability, optimized database querying, and secure API management.',
    techStack: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/saremworkuu/Backend-Task-Express.js-'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Visual Identity',
    description: 'Crafting unique digital signatures for brands that seek to leave a lasting impression in the luxury space.',
    icon: 'Feather'
  },
  {
    title: 'Creative Engineering',
    description: 'Developing high-performance, interactive websites that push the boundaries of modern browser technology.',
    icon: 'Code'
  },
  {
    title: 'Digital Strategy',
    description: 'Consulting on technical architecture and user experience to drive meaningful engagement and conversion.',
    icon: 'Globe'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'GraphQL', 'REST APIs']
  },
  {
    title: 'Tools & Design',
    skills: ['Figma', 'Git / GitHub', 'Vercel']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2026 — PRESENT',
    role: 'Web Developer',
    company: 'Marakisoft PLC',
    description: 'Developing high-traffic editorial and e-commerce platforms with a focus on clean code and robust architectural patterns.'
  },
  {
    period: '2026',
    role: 'Web Pentesting',
    company: 'CSEC Cybersecurity',
    description: 'Web application security (OWASP Top 10)\nReconnaissance & vulnerability analysis\nBurp Suite, Nmap, Metasploit\nLinux fundamentals & basic scripting'
  },
  {
    period: '2025 — PRESENT',
    role: 'CTF Player',
    company: 'Competitive Cybersecurity',
    description: 'Web exploitation\nCryptography basics\nPrivilege escalation\nForensics & reverse-engineering fundamentals'
  }
];