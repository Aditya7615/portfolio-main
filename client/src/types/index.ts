export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

export interface HackathonData {
  id: string;
  name: string;
  theme: string;
  date: string;
  position: string;
  role: string;
  technologies: string[];
  achievement?: string;
}

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string;
  tags: string[];
}

export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  duration: {
    start: string;
    end?: string;
  };
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    color?: string;
  }[];
}
