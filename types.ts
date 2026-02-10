
export interface Project {
  id: string;
  title: string;
  level: number;
  description: string;
  stack: string[];
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
}

export type SectionType = 'home' | 'about' | 'skills' | 'projects' | 'resume' | 'contact' | 'experience';
