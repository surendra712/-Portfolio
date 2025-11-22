export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'ML' | 'Web' | 'AI' | 'Other';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  specialization: string;
  duration: string;
  gpa?: string;
}

export interface Certification {
  name: string;
  platform: string;
  description: string;
  url?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
}