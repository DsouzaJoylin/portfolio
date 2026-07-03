import { IconType } from 'react-icons';
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPhp, SiPython,
  SiMongodb, SiMysql, SiFirebase,
  SiGit, SiGithub, SiPostman, SiFlutter, SiScikitlearn, SiPandas,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Code2 } from 'lucide-react';

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
  color: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, level: 90, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, level: 88, color: '#06B6D4' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
      { name: 'Express', icon: SiExpress, level: 82, color: '#000000' },
      { name: 'PHP', icon: SiPhp, level: 75, color: '#777BB4' },
      { name: 'Python', icon: SiPython, level: 80, color: '#3776AB' },
      { name: 'Java', icon: FaJava, level: 70, color: '#ED8B00' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, level: 82, color: '#FFCA28' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, level: 88, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, level: 90, color: '#181717' },
      { name: 'VS Code', icon: Code2, level: 95, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, level: 85, color: '#FF6C37' },
    ],
  },
  {
    id: 'mobile-ml',
    label: 'Mobile & ML',
    skills: [
      { name: 'Flutter', icon: SiFlutter, level: 80, color: '#02569B' },
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 75, color: '#F7931E' },
      { name: 'Pandas', icon: SiPandas, level: 78, color: '#150458' },
    ],
  },
];
