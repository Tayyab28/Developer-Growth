import type { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    id: 'backend-engineering',
    name: 'Backend Engineering',
    description:
      'Master server-side development, databases, and API design with deep dives into Node.js internals and data stores.',
    icon: 'Server',
    color: 'blue',
  },
  {
    id: 'system-design',
    name: 'System Design',
    description:
      'Learn to architect scalable systems from URL shorteners to video streaming platforms.',
    icon: 'Network',
    color: 'emerald',
  },
  {
    id: 'distributed-systems',
    name: 'Distributed Systems',
    description:
      'Understand the patterns and trade-offs of building reliable distributed systems.',
    icon: 'Share2',
    color: 'amber',
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description:
      'Deploy and operate applications at scale with Docker, Kubernetes, and CI/CD.',
    icon: 'Cloud',
    color: 'sky',
  },
  {
    id: 'ai-engineering',
    name: 'AI Engineering',
    description:
      'Build AI-powered applications with LLMs, RAG pipelines, and autonomous agents.',
    icon: 'BrainCircuit',
    color: 'violet',
  },
  {
    id: 'interview-prep',
    name: 'Interview Preparation',
    description:
      'Sharpen your DSA, behavioral, and system design interview skills for senior roles.',
    icon: 'Target',
    color: 'rose',
  },
];

export const categoryMap = Object.fromEntries(
  categories.map((c) => [c.id, c])
) as Record<string, Category>;
