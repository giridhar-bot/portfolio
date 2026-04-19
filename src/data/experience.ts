export interface Experience {
  id: string;
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: 'capgemini',
    company: 'Capgemini',
    client: 'Mercedes-Benz Research & Development India (MBRDI)',
    role: 'Consultant – Full Stack Engineer (Java + React)',
    period: 'Dec 2025 – Present',
    location: 'Bangalore, India',
    description:
      'Building enterprise IT platforms for financial planning, cost allocation, hierarchy automation, and billing workflows.',
    highlights: [
      'Built microservices-based IT Controlling platform for planning, cost allocation, and billing automation',
      'Developed REST APIs integrating enterprise workflow C-FMP → ServCat → Billing4IT',
      'Engineered auto/manual Work Hierarchy sync with 12 AM scheduler and structure preservation',
      'Implemented auto-correction logic for misplaced hierarchy nodes across updates',
      'Built dynamic Hierarchy Management module with secure CRUD and batch operations',
      'Delivered React + Spring Boot modules for role-based enterprise operations',
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'Microservices', 'REST APIs', 'Scheduler', 'SQL'],
  },
  {
    id: 'infinite',
    company: 'Infinite Computer Solutions',
    role: 'Software Engineer – Java Full Stack (Java + React)',
    period: 'Jul 2021 – Sept 2025',
    location: 'Bangalore, India',
    description:
      'Led end-to-end development of enterprise applications for Brightspeed, Verizon, and Qualcomm using Java, Spring Boot, and React.js.',
    highlights: [
      'Designed microservices handling billing, order tracking, and reporting for 15K+ monthly transactions',
      'Reduced backend response time by 40% using Redis caching, async processing, and DB indexing',
      'Built reusable React component libraries improving development speed by 30%',
      'Optimized frontend with code splitting, lazy loading, and memoization reducing load time by 40%',
      'Delivered Smart Analytics platform features for Verizon 4G/5G monitoring',
      'Built enterprise customer portal features for Brightspeed and drone telemetry workflows for Qualcomm',
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'Redis', 'SQL', 'Microservices', 'JWT', 'Docker'],
  },
];
