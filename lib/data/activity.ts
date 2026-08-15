import type { Activity, Achievement, HeatmapDay, WeeklyHour } from '@/lib/types';

export const activities: Activity[] = [
  {
    id: 'act-1',
    type: 'topic-completed',
    title: 'Completed CAP Theorem',
    description: 'Finished the CAP Theorem topic in Distributed Systems',
    timestamp: '2026-08-13T18:30:00Z',
    categoryId: 'distributed-systems',
  },
  {
    id: 'act-2',
    type: 'note-created',
    title: 'Created note: Event Loop Phases Summary',
    description: 'Added a new note for Backend Engineering',
    timestamp: '2026-08-10T10:30:00Z',
    categoryId: 'backend-engineering',
  },
  {
    id: 'act-3',
    type: 'topic-completed',
    title: 'Completed OpenAI API',
    description: 'Finished the OpenAI API topic in AI Engineering',
    timestamp: '2026-08-09T20:00:00Z',
    categoryId: 'ai-engineering',
  },
  {
    id: 'act-4',
    type: 'topic-started',
    title: 'Started Payment Gateway',
    description: 'Began studying Payment Gateway in System Design',
    timestamp: '2026-08-08T09:00:00Z',
    categoryId: 'system-design',
  },
  {
    id: 'act-5',
    type: 'milestone',
    title: 'Reached 25% overall progress',
    description: 'You have completed 25% of your learning roadmap',
    timestamp: '2026-08-07T12:00:00Z',
  },
  {
    id: 'act-6',
    type: 'topic-completed',
    title: 'Completed Kafka Fundamentals',
    description: 'Finished the Kafka Fundamentals topic in Distributed Systems',
    timestamp: '2026-08-05T16:00:00Z',
    categoryId: 'distributed-systems',
  },
  {
    id: 'act-7',
    type: 'note-created',
    title: 'Created note: CAP Theorem Real-World Examples',
    description: 'Added a new note for Distributed Systems',
    timestamp: '2026-08-05T16:45:00Z',
    categoryId: 'distributed-systems',
  },
  {
    id: 'act-8',
    type: 'topic-completed',
    title: 'Completed URL Shortener',
    description: 'Finished the URL Shortener topic in System Design',
    timestamp: '2026-08-02T14:00:00Z',
    categoryId: 'system-design',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'First Steps',
    description: 'Completed your first topic',
    icon: 'Footprints',
    unlockedAt: '2026-01-20T10:00:00Z',
    unlocked: true,
  },
  {
    id: 'ach-2',
    title: 'On Fire',
    description: 'Maintained a 7-day learning streak',
    icon: 'Flame',
    unlockedAt: '2026-01-27T10:00:00Z',
    unlocked: true,
  },
  {
    id: 'ach-3',
    title: 'Backend Builder',
    description: 'Completed 3 Backend Engineering topics',
    icon: 'Server',
    unlockedAt: '2026-03-15T10:00:00Z',
    unlocked: true,
  },
  {
    id: 'ach-4',
    title: 'Systems Thinker',
    description: 'Completed 2 System Design topics',
    icon: 'Network',
    unlockedAt: '2026-06-01T10:00:00Z',
    unlocked: true,
  },
  {
    id: 'ach-5',
    title: 'Knowledge Keeper',
    description: 'Created 5 or more notes',
    icon: 'BookOpen',
    unlockedAt: '2026-07-20T10:00:00Z',
    unlocked: true,
  },
  {
    id: 'ach-6',
    title: 'Quarter Master',
    description: 'Reached 25% overall progress',
    icon: 'Trophy',
    unlockedAt: '2026-08-07T10:00:00Z',
    unlocked: true,
  },
  {
    id: 'ach-7',
    title: 'AI Pioneer',
    description: 'Complete all AI Engineering topics',
    icon: 'BrainCircuit',
    unlockedAt: '',
    unlocked: false,
  },
  {
    id: 'ach-8',
    title: 'Halfway There',
    description: 'Reach 50% overall progress',
    icon: 'Award',
    unlockedAt: '',
    unlocked: false,
  },
  {
    id: 'ach-9',
    title: 'Unstoppable',
    description: 'Maintain a 30-day learning streak',
    icon: 'Zap',
    unlockedAt: '',
    unlocked: false,
  },
  {
    id: 'ach-10',
    title: 'Completionist',
    description: 'Complete all topics in the roadmap',
    icon: 'Crown',
    unlockedAt: '',
    unlocked: false,
  },
];

function generateHeatmap(): HeatmapDay[] {
  const days: HeatmapDay[] = [];
  const today = new Date('2026-08-14');
  for (let i = 0; i < 91; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const baseHours = isWeekend ? Math.random() * 2 : Math.random() * 4;
    const hours = Math.round(baseHours * 10) / 10;
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    if (hours === 0) level = 0;
    else if (hours < 1) level = 1;
    else if (hours < 2) level = 2;
    else if (hours < 3) level = 3;
    else level = 4;
    days.unshift({
      date: date.toISOString().split('T')[0],
      hours,
      level,
    });
  }
  return days;
}

export const heatmapData: HeatmapDay[] = generateHeatmap();

export const weeklyHours: WeeklyHour[] = [
  { day: 'Mon', hours: 3.5 },
  { day: 'Tue', hours: 4.2 },
  { day: 'Wed', hours: 2.8 },
  { day: 'Thu', hours: 5.1 },
  { day: 'Fri', hours: 3.9 },
  { day: 'Sat', hours: 1.5 },
  { day: 'Sun', hours: 2.3 },
];
