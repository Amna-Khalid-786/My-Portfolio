
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  vercelLink?: string;
  figmaLink?: string;
  canvaLink?: string;
  isPrivate?: boolean;
  documentation?: string;
  screenshots?: string[];
  link?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Design' | 'Media' | 'Tools';
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  link?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
