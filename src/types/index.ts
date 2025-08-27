// Type definitions for the portfolio project

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

export type ProjectCategory = 
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'mobile'
  | 'database'
  | 'tools'
  | 'other';

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory = 
  | 'frontend'
  | 'backend'
  | 'database'
  | 'tools'
  | 'languages'
  | 'frameworks';

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GameStats {
  bestScore: number;
  bestTime: number;
  gamesPlayed: number;
  totalMoves: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}
