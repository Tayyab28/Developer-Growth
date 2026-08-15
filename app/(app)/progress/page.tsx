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
  Flame,
  TrendingUp,
  Award,
  Trophy,
  Footprints,
  Zap,
  BookOpen,
  Crown,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProgressRing } from '@/components/shared/progress-ring';
import { useApp } from '@/components/providers/app-provider';
import { categories } from '@/lib/data/categories';
import { userProfile } from '@/lib/data/user';
import { activities, achievements, heatmapData, weeklyHours } from '@/lib/data/activity';
import { categoryColorClasses, timeAgo } from '@/lib/helpers';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Network,
  Share2,
  Cloud,
  BrainCircuit,
  Target,
};

const achievementIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Footprints,
  Flame,
  Server,
  Network,
  BookOpen,
  Trophy,
  BrainCircuit,
  Award,
  Zap,
  Crown,
};

const heatmapColors = [
  'bg-secondary',
  'bg-blue-500/30',
  'bg-blue-500/50',
  'bg-blue-500/75',
  'bg-blue-500',
];

export default function ProgressPage() {
  const { topics, overallProgress, getCategoryProgress } = useApp();
  const completedTopics = topics.filter((t) => t.status === 'completed');

  const totalHours = heatmapData.reduce((sum, d) => sum + d.hours, 0);
  const totalWeekHours = weeklyHours.reduce((sum, d) => sum + d.hours, 0);
  const maxWeekHours = Math.max(...weeklyHours.map((d) => d.hours));

  const stats = [
    { label: 'Total Topics', value: overallProgress.total, icon: TrendingUp },
    { label: 'Completed', value: overallProgress.completed, icon: CheckCircle2 },
    { label: 'In Progress', value: overallProgress.inProgress, icon: Clock },
    { label: 'Total Hours (90d)', value: totalHours.toFixed(1), icon: Flame },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 animate-fade-in-up">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Progress Tracker</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Track your learning journey over time
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-5 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Overall + Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Overall Progress</CardTitle>
            <CardDescription className="text-xs">Complete roadmap progress</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center pb-6">
            <ProgressRing value={overallProgress.percent} size={130} strokeWidth={9} />
            <div className="grid grid-cols-3 gap-3 mt-4 w-full text-center">
              <div>
                <p className="text-lg font-bold text-emerald-400">{overallProgress.completed}</p>
                <p className="text-xs text-muted-foreground">Done</p>
              </div>
              <div>
                <p className="text-lg font-bold text-amber-400">{overallProgress.inProgress}</p>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
              <div>
                <p className="text-lg font-bold text-muted-foreground">{overallProgress.notStarted}</p>
                <p className="text-xs text-muted-foreground">Todo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Learning Heatmap</CardTitle>
            <CardDescription className="text-xs">Last 90 days of learning activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {heatmapData.map((day) => (
                <div
                  key={day.date}
                  className={`w-3 h-3 rounded-sm ${heatmapColors[day.level]} hover:ring-1 hover:ring-primary/40 transition-all cursor-pointer`}
                  title={`${day.date}: ${day.hours}h`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex items-center gap-1">
                {heatmapColors.map((c, i) => (
                  <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Progress + Weekly Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Category Progress</CardTitle>
            <CardDescription className="text-xs">Progress by roadmap category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {categories.map((cat) => {
              const progress = getCategoryProgress(cat.id);
              const colors = categoryColorClasses(cat.color);
              return (
                <Link key={cat.id} href={`/category/${cat.id}`}>
                  <div className="space-y-1.5 group">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">{cat.name}</span>
                      <span className="text-xs text-muted-foreground">{progress.completed}/{progress.total}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
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
                  </div>
                </Link>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Weekly Learning Hours</CardTitle>
            <CardDescription className="text-xs">Total: {totalWeekHours.toFixed(1)}h this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-40 pt-4">
              {weeklyHours.map((d) => (
                <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full flex items-end justify-center h-full">
                    <div
                      className="w-full max-w-[40px] rounded-t-md bg-gradient-to-t from-primary/40 to-primary transition-all duration-500 hover:from-primary/60 hover:to-primary group relative"
                      style={{ height: `${(d.hours / maxWeekHours) * 100}%` }}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        {d.hours}h
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{d.day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completion Stats + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Recently Completed Topics</CardTitle>
            <CardDescription className="text-xs">Your latest achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {completedTopics.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-6">No completed topics yet.</p>
            ) : (
              completedTopics.slice(0, 6).map((topic) => {
                const cat = categories.find((c) => c.id === topic.categoryId);
                const colors = categoryColorClasses(cat?.color || 'blue');
                return (
                  <Link key={topic.id} href={`/topic/${topic.id}`}>
                    <div className="flex items-center gap-3 py-2.5 border-b border-border last:border-0 hover:bg-accent/50 -mx-2 px-2 rounded-lg transition-colors">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${colors.bg}`}>
                        <CheckCircle2 className={`h-4 w-4 ${colors.text}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{topic.title}</p>
                        <p className="text-xs text-muted-foreground">{cat?.name}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{topic.estimatedHours}h</Badge>
                    </div>
                  </Link>
                );
              })
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Recent Activity</CardTitle>
            <CardDescription className="text-xs">Your latest actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {activities.slice(0, 6).map((act) => (
              <div key={act.id} className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted shrink-0">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{act.title}</p>
                  <p className="text-xs text-muted-foreground">{act.description}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{timeAgo(act.timestamp)}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Achievement Badges</CardTitle>
          <CardDescription className="text-xs">
            {achievements.filter((a) => a.unlocked).length} of {achievements.length} unlocked
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {achievements.map((ach) => {
              const Icon = achievementIcons[ach.icon] || Trophy;
              return (
                <div
                  key={ach.id}
                  className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all ${
                    ach.unlocked
                      ? 'border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-orange-500/5 hover:border-amber-500/40'
                      : 'border-border opacity-50 grayscale'
                  }`}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-2 ${
                    ach.unlocked ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/10' : 'bg-muted'
                  }`}>
                    <Icon className={`h-6 w-6 ${ach.unlocked ? 'text-amber-400' : 'text-muted-foreground'}`} />
                  </div>
                  <p className="text-xs font-semibold">{ach.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{ach.description}</p>
                  {ach.unlocked && (
                    <Badge className="mt-2 text-xs bg-amber-500/20 text-amber-300 border-0">
                      Unlocked
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
