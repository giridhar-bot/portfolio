export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 90, category: 'Frontend', icon: '⚛️' },
  { name: 'Redux', level: 85, category: 'Frontend', icon: '🔄' },
  { name: 'Context API', level: 82, category: 'Frontend', icon: '🧩' },
  { name: 'Material UI', level: 85, category: 'Frontend', icon: '🎯' },
  { name: 'JavaScript', level: 88, category: 'Frontend', icon: '🟨' },
  { name: 'TypeScript', level: 86, category: 'Frontend', icon: '🔷' },
  { name: 'Responsive UI', level: 90, category: 'Frontend', icon: '📱' },

  // Backend
  { name: 'Java', level: 90, category: 'Backend', icon: '☕' },
  { name: 'Spring Boot', level: 85, category: 'Backend', icon: '🍃' },
  { name: 'Microservices', level: 80, category: 'Backend', icon: '🔗' },
  { name: 'REST APIs', level: 86, category: 'Backend', icon: '🌐' },
  { name: 'Redis', level: 84, category: 'Backend', icon: '⚡' },
  { name: 'SQL', level: 86, category: 'Backend', icon: '🗄️' },
  { name: 'Multithreading', level: 80, category: 'Backend', icon: '🧠' },
  { name: 'Async Processing', level: 82, category: 'Backend', icon: '⏱️' },
  { name: 'JWT/Spring Security', level: 84, category: 'Backend', icon: '🔐' },

  // Tools & Core
  { name: 'Docker', level: 84, category: 'Tools & Core', icon: '🐳' },
  { name: 'Git', level: 90, category: 'Tools & Core', icon: '📦' },
  { name: 'GitHub Copilot', level: 82, category: 'Tools & Core', icon: '🤖' },
  { name: 'CI/CD', level: 84, category: 'Tools & Core', icon: '⚙️' },
  { name: 'Postman', level: 86, category: 'Tools & Core', icon: '📮' },
  { name: 'DSA', level: 82, category: 'Tools & Core', icon: '🧮' },
  { name: 'OOP', level: 88, category: 'Tools & Core', icon: '🧱' },
  { name: 'System Design', level: 84, category: 'Tools & Core', icon: '🏗️' },
  { name: 'DB Indexing', level: 85, category: 'Tools & Core', icon: '🗂️' },
];

export const skillCategories = ['Frontend', 'Backend', 'Tools & Core'];
