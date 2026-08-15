import type { CategoryId, TopicStatus, Difficulty } from '@/lib/types';

export function statusLabel(status: TopicStatus): string {
  switch (status) {
    case 'not-started':
      return 'Not Started';
    case 'in-progress':
      return 'In Progress';
    case 'completed':
      return 'Completed';
  }
}

export function statusColor(status: TopicStatus): string {
  switch (status) {
    case 'not-started':
      return 'text-muted-foreground bg-muted';
    case 'in-progress':
      return 'text-warning-foreground bg-warning';
    case 'completed':
      return 'text-success-foreground bg-success';
  }
}

export function difficultyColor(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'Beginner':
      return 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30';
    case 'Intermediate':
      return 'text-blue-300 bg-blue-500/10 border-blue-500/30';
    case 'Advanced':
      return 'text-amber-300 bg-amber-500/10 border-amber-500/30';
    case 'Expert':
      return 'text-rose-300 bg-rose-500/10 border-rose-500/30';
  }
}

export function categoryColorClasses(color: string): {
  bg: string;
  text: string;
  border: string;
  gradient: string;
  ring: string;
} {
  const map: Record<string, { bg: string; text: string; border: string; gradient: string; ring: string }> = {
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/20',
      gradient: 'from-blue-500/20 to-blue-600/5',
      ring: 'ring-blue-500/30',
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      border: 'border-emerald-500/20',
      gradient: 'from-emerald-500/20 to-emerald-600/5',
      ring: 'ring-emerald-500/30',
    },
    amber: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      border: 'border-amber-500/20',
      gradient: 'from-amber-500/20 to-amber-600/5',
      ring: 'ring-amber-500/30',
    },
    sky: {
      bg: 'bg-sky-500/10',
      text: 'text-sky-400',
      border: 'border-sky-500/20',
      gradient: 'from-sky-500/20 to-sky-600/5',
      ring: 'ring-sky-500/30',
    },
    violet: {
      bg: 'bg-violet-500/10',
      text: 'text-violet-400',
      border: 'border-violet-500/20',
      gradient: 'from-violet-500/20 to-violet-600/5',
      ring: 'ring-violet-500/30',
    },
    rose: {
      bg: 'bg-rose-500/10',
      text: 'text-rose-400',
      border: 'border-rose-500/20',
      gradient: 'from-rose-500/20 to-rose-600/5',
      ring: 'ring-rose-500/30',
    },
  };
  return map[color] || map.blue;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date('2026-08-14T23:59:59Z');
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return 'Just now';
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}
