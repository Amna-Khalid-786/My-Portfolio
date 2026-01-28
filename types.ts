
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  documentation?: string;
  screenshots?: string[];
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
