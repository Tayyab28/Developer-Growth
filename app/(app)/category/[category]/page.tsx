'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Server,
  Network,
  Share2,
  Cloud,
  BrainCircuit,
  Target,
  ArrowLeft,
  CheckCircle2,
  Clock,
  CircleDashed,
  ExternalLink,
  BookOpen,
  Play,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProgressRing } from '@/components/shared/progress-ring';
import { useApp } from '@/components/providers/app-provider';
import { categoryMap } from '@/lib/data/categories';
import { categoryColorClasses, difficultyColor, statusLabel, statusColor } from '@/lib/helpers';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Network,
  Share2,
  Cloud,
  BrainCircuit,
  Target,
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const category = categoryMap[categoryId];
  const { getTopicsByCategory, getCategoryProgress, markTopicComplete } = useApp();

  if (!category) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Category not found.</p>
        <Link href="/" className="text-primary hover:underline mt-2 inline-block">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const topics = getTopicsByCategory(categoryId);
  const progress = getCategoryProgress(categoryId);
  const colors = categoryColorClasses(category.color);
  const Icon = iconMap[category.icon];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 animate-fade-in-up">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      {/* Category Header */}
      <Card className={`relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`} />
        <CardContent className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border shrink-0`}>
              {Icon && <Icon className={`h-8 w-8 ${colors.text}`} />}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold tracking-tight">{category.name}</h1>
              <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{category.description}</p>
              <div className="flex items-center gap-4 mt-3">
                <Badge variant="secondary">{progress.total} topics</Badge>
                <span className="text-sm text-muted-foreground">
                  {progress.completed} completed
                </span>
                <span className="text-sm text-muted-foreground">
                  {progress.inProgress} in progress
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <ProgressRing value={progress.percent} size={90} strokeWidth={7} />
              <span className="text-xs text-muted-foreground mt-1">Complete</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Topic Cards */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Topics</h2>
        {topics.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <CircleDashed className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No topics in this category yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic) => (
              <Card key={topic.id} className="hover:border-primary/30 transition-all duration-200 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1 line-clamp-2">
                        {topic.description}
                      </CardDescription>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold shrink-0 ${statusColor(topic.status)}`}>
                      {statusLabel(topic.status)}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${difficultyColor(topic.difficulty)}`}>
                      {topic.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {topic.estimatedHours}h estimated
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-muted-foreground">Progress</span>
                      <span className="text-xs font-semibold">{topic.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${topic.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href={`/topic/${topic.id}`}>
                      <Button size="sm" className="gap-1.5">
                        <Play className="h-3.5 w-3.5" />
                        Open Topic
                      </Button>
                    </Link>
                    <a href={topic.documentationUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-1.5">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Docs
                      </Button>
                    </a>
                    {topic.status !== 'completed' && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-1.5 ml-auto text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                        onClick={() => markTopicComplete(topic.id)}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Mark Complete
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
