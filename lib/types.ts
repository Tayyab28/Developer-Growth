export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type TopicStatus = 'not-started' | 'in-progress' | 'completed';

export type CategoryId =
  | 'backend-engineering'
  | 'system-design'
  | 'distributed-systems'
  | 'cloud-devops'
  | 'ai-engineering'
  | 'interview-prep';

export interface Resource {
  type: 'docs' | 'youtube' | 'article' | 'book';
  title: string;
  url: string;
  description: string;
}

export interface LearningObjective {
  title: string;
  description: string;
}

export interface Topic {
  id: string;
  categoryId: CategoryId;
  title: string;
  description: string;
  overview: string;
  difficulty: Difficulty;
  estimatedHours: number;
  status: TopicStatus;
  progress: number;
  documentationUrl: string;
  objectives: LearningObjective[];
  resources: Resource[];
}

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  categoryId?: CategoryId;
  topicId?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: string;
  type: 'topic-completed' | 'topic-started' | 'note-created' | 'milestone';
  title: string;
  description: string;
  timestamp: string;
  categoryId?: CategoryId;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
  unlocked: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  currentRole: string;
  goal: string;
  avatarInitials: string;
  streak: number;
  joinedDate: string;
}

export interface HeatmapDay {
  date: string;
  hours: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface WeeklyHour {
  day: string;
  hours: number;
}
