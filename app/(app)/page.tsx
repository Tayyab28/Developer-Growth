'use client';

import Link from 'next/link';
import {
  Server,
  Network,
  Share2,
  Cloud,
  BrainCircuit,
  Target,
  CheckCircle2,
  Clock,
  CircleDashed,
  Flame,
  TrendingUp,
  ArrowRight,
  Trophy,
  Activity as ActivityIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProgressRing } from '@/components/shared/progress-ring';
import { useApp } from '@/components/providers/app-provider';
import { categories } from '@/lib/data/categories';
import { userProfile } from '@/lib/data/user';
import { activities, achievements } from '@/lib/data/activity';
import { categoryColorClasses, timeAgo } from '@/lib/helpers';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Network,
  Share2,
  Cloud,
  BrainCircuit,
  Target,
};

const activityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'topic-completed': CheckCircle2,
  'topic-started': Clock,
  'note-created': Trophy,
  milestone: Trophy,
};

export default function DashboardPage() {
  const { topics, overallProgress, getCategoryProgress } = useApp();

  const inProgress = topics.filter((t) => t.status === 'in-progress').length;
  const completed = topics.filter((t) => t.status === 'completed').length;

  const stats = [
    { label: 'Total Topics', value: topics.length, icon: CircleDashed, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Completed', value: completed, icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'In Progress', value: inProgress, icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Learning Streak', value: `${userProfile.streak} days`, icon: Flame, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  const recentAchievements = achievements.filter((a) => a.unlocked).slice(0, 4);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      {/* Greeting & Goal */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          {new Date('2026-08-14').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {userProfile.name.split(' ')[0]}!
        </h1>
        <div className="flex items-start gap-2 rounded-xl border border-primary/20 bg-primary/5 p-4 max-w-3xl">
          <Target className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-wide">Current Goal</p>
            <p className="text-sm text-foreground mt-0.5">{userProfile.goal}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="hover:border-primary/30 transition-colors duration-200">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${stat.bg}`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Overall Progress</CardTitle>
            <CardDescription className="text-xs">Your journey toward Senior Backend Engineer</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pb-6">
            <ProgressRing value={overallProgress.percent} size={140} strokeWidth={10} />
            <div className="flex items-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">{completed} done</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">{inProgress} active</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Recent Activity</CardTitle>
            <CardDescription className="text-xs">Your latest learning actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {activities.slice(0, 5).map((act) => {
              const Icon = activityIcons[act.type] || ActivityIcon;
              return (
                <div key={act.id} className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted shrink-0">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{act.title}</p>
                    <p className="text-xs text-muted-foreground">{act.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{timeAgo(act.timestamp)}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Roadmap Categories */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Roadmap Categories</h2>
          <Link href="/progress">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              View Progress
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const colors = categoryColorClasses(cat.color);
            const progress = getCategoryProgress(cat.id);
            return (
              <Link key={cat.id} href={`/category/${cat.id}`}>
                <Card className={`group relative overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer h-full`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardHeader className="relative pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${colors.bg} ${colors.border} border`}>
                        {Icon && <Icon className={`h-5 w-5 ${colors.text}`} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base truncate">{cat.name}</CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">{progress.total} topics</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{cat.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            cat.color === 'blue' ? 'bg-blue-500' :
                            cat.color === 'emerald' ? 'bg-emerald-500' :
                            cat.color === 'amber' ? 'bg-amber-500' :
                            cat.color === 'sky' ? 'bg-sky-500' :
                            cat.color === 'violet' ? 'bg-violet-500' :
                            'bg-rose-500'
                          }`}
                          style={{ width: `${progress.percent}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">{progress.percent}%</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                        {progress.completed}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-amber-500" />
                        {progress.inProgress}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Achievements</h2>
          <Badge variant="secondary">{recentAchievements.length} unlocked</Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentAchievements.map((ach) => {
            const Icon = iconMap[ach.icon] || Trophy;
            const ActualIcon = ach.icon === 'Footprints' ? Trophy :
              ach.icon === 'Flame' ? Flame :
              ach.icon === 'Server' ? Server :
              ach.icon === 'Network' ? Network :
              ach.icon === 'BookOpen' ? Target :
              ach.icon === 'Trophy' ? Trophy :
              Trophy;
            return (
              <Card key={ach.id} className="text-center hover:border-primary/30 transition-colors">
                <CardContent className="p-5 flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/10 mb-3">
                    <ActualIcon className="h-6 w-6 text-amber-400" />
                  </div>
                  <p className="text-sm font-semibold">{ach.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ach.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
