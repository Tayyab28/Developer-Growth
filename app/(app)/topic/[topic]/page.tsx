'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  CircleDashed,
  ExternalLink,
  BookOpen,
  Youtube,
  FileText,
  BookMarked,
  Target,
  Play,
  StickyNote,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ProgressRing } from '@/components/shared/progress-ring';
import { useApp } from '@/components/providers/app-provider';
import { categoryMap } from '@/lib/data/categories';
import { difficultyColor, statusLabel, statusColor } from '@/lib/helpers';
import type { Resource } from '@/lib/types';

const resourceIcons: Record<Resource['type'], React.ComponentType<{ className?: string }>> = {
  docs: BookOpen,
  youtube: Youtube,
  article: FileText,
  book: BookMarked,
};

const resourceColors: Record<Resource['type'], string> = {
  docs: 'text-blue-400 bg-blue-500/10',
  youtube: 'text-red-400 bg-red-500/10',
  article: 'text-amber-400 bg-amber-500/10',
  book: 'text-emerald-400 bg-emerald-500/10',
};

export default function TopicDetailPage() {
  const params = useParams();
  const topicId = params.topic as string;
  const { getTopic, updateTopicProgress, markTopicComplete, notes, addNote } = useApp();
  const topic = getTopic(topicId);

  const [noteInput, setNoteInput] = useState('');
  const [progressInput, setProgressInput] = useState(topic?.progress ?? 0);

  if (!topic) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Topic not found.</p>
        <Link href="/" className="text-primary hover:underline mt-2 inline-block">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const category = categoryMap[topic.categoryId];
  const topicNotes = notes.filter((n) => n.topicId === topic.id);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6 animate-fade-in-up">
      <Link
        href={`/category/${topic.categoryId}`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {category?.name}
      </Link>

      {/* Topic Header */}
      <Card>
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{category?.name}</Badge>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColor(topic.status)}`}>
                  {statusLabel(topic.status)}
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">{topic.title}</h1>
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{topic.overview}</p>
              <div className="flex items-center gap-4 mt-4">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${difficultyColor(topic.difficulty)}`}>
                  {topic.difficulty}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {topic.estimatedHours} hours estimated
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <ProgressRing value={topic.progress} size={100} strokeWidth={8} />
              <span className="text-xs text-muted-foreground mt-1">Progress</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview">
        <TabsList className="w-full justify-start overflow-x-auto scrollbar-thin">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Learning Objectives
              </CardTitle>
              <CardDescription>What you will master in this topic</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {topic.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{obj.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{obj.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documentation Tab */}
        <TabsContent value="documentation" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                External Documentation
              </CardTitle>
              <CardDescription>Official references and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={topic.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-accent transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    Official Documentation
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{topic.documentationUrl}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <StickyNote className="h-5 w-5 text-primary" />
                Your Notes
              </CardTitle>
              <CardDescription>Notes specific to this topic</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <textarea
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="Add a note for this topic..."
                  className="flex-1 min-h-[80px] rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Button
                  onClick={() => {
                    if (noteInput.trim()) {
                      addNote({
                        title: `${topic.title} Note`,
                        content: noteInput,
                        categoryId: topic.categoryId,
                        topicId: topic.id,
                        tags: [],
                      });
                      setNoteInput('');
                    }
                  }}
                  disabled={!noteInput.trim()}
                  className="self-end"
                >
                  Add Note
                </Button>
              </div>

              {topicNotes.length === 0 ? (
                <div className="text-center py-8">
                  <StickyNote className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No notes yet for this topic.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {topicNotes.map((note) => (
                    <div key={note.id} className="p-3 rounded-lg border border-border bg-muted/30">
                      <p className="text-sm font-medium">{note.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 whitespace-pre-wrap">{note.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topic.resources.map((resource, i) => {
              const Icon = resourceIcons[resource.type];
              const colorClass = resourceColors[resource.type];
              return (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="hover:border-primary/30 transition-colors h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${colorClass}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium capitalize">{resource.type}</p>
                          <p className="text-sm text-foreground mt-0.5">{resource.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Track Your Progress
              </CardTitle>
              <CardDescription>Update your progress as you learn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center py-4">
                <ProgressRing value={progressInput} size={140} strokeWidth={10} />
                <p className="text-sm text-muted-foreground mt-2">
                  {progressInput === 0 ? 'Not started' : progressInput >= 100 ? 'Completed!' : 'In progress'}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Adjust Progress: {progressInput}%</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progressInput}
                  onChange={(e) => setProgressInput(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => updateTopicProgress(topic.id, progressInput)}
                  className="flex-1"
                >
                  Save Progress
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setProgressInput(100);
                    markTopicComplete(topic.id);
                  }}
                  className="gap-1.5 text-emerald-400 hover:text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Mark Complete
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
