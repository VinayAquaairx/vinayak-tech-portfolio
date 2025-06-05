
export interface Skill {
  category: string;
  color: string;
  skills: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  tech: string[];
  status?: string;
  featured?: boolean;
  gradient: string;
  metrics?: {
    lines: string;
    time: string;
    team: string;
  };
  images?: string[];
  folder: string;
  companyProject?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: string;
  icon: any;
}

export interface HoveredImageState {
  url: string;
  x: number;
  y: number;
}
