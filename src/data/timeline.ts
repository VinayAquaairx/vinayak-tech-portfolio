
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';
import { TimelineItem } from '@/types';

export const timeline: TimelineItem[] = [
  {
    year: '2020',
    title: 'Started CSE Journey',
    description: 'Began Bachelor of Technology (CSE Honors) at Lovely Professional University',
    type: 'education',
    icon: GraduationCap
  },
  {
    year: '2023',
    title: 'AEROGO Internship',
    description: 'Business Development Analyst - Specialized in data visualization and market research for UAV technologies',
    type: 'work',
    icon: Briefcase
  },
  {
    year: '2024',
    title: 'AquaAirX Software Engineer',
    description: 'Software Development Engineer - Leading Ground Control Station development for UAV and underwater vehicles',
    type: 'work',
    icon: Rocket
  }
];
