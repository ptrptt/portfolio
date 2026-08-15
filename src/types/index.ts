export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  gradient: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  gpa: string;
  period: string;
  current: boolean;
  logo: string;
}

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
}
