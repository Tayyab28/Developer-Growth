'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { Topic, Note, TopicStatus } from '@/lib/types';
import { topics as initialTopics } from '@/lib/data/topics';
import { initialNotes } from '@/lib/data/notes';

interface AppState {
  topics: Topic[];
  notes: Note[];
  updateTopicStatus: (topicId: string, status: TopicStatus) => void;
  updateTopicProgress: (topicId: string, progress: number) => void;
  markTopicComplete: (topicId: string) => void;
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, updates: Partial<Omit<Note, 'id' | 'createdAt'>>) => void;
  deleteNote: (id: string) => void;
  getTopic: (id: string) => Topic | undefined;
  getTopicsByCategory: (categoryId: string) => Topic[];
  getCategoryProgress: (categoryId: string) => { total: number; completed: number; inProgress: number; notStarted: number; percent: number };
  overallProgress: { total: number; completed: number; inProgress: number; notStarted: number; percent: number };
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  const updateTopicStatus = useCallback((topicId: string, status: TopicStatus) => {
    setTopics((prev) =>
      prev.map((t) => {
        if (t.id !== topicId) return t;
        const progress = status === 'completed' ? 100 : status === 'not-started' ? 0 : t.progress;
        return { ...t, status, progress };
      })
    );
  }, []);

  const updateTopicProgress = useCallback((topicId: string, progress: number) => {
    setTopics((prev) =>
      prev.map((t) => {
        if (t.id !== topicId) return t;
        const clamped = Math.max(0, Math.min(100, progress));
        const status: TopicStatus = clamped >= 100 ? 'completed' : clamped > 0 ? 'in-progress' : 'not-started';
        return { ...t, progress: clamped, status };
      })
    );
  }, []);

  const markTopicComplete = useCallback((topicId: string) => {
    updateTopicStatus(topicId, 'completed');
  }, [updateTopicStatus]);

  const addNote = useCallback((note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    const newNote: Note = {
      ...note,
      id: `note-${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    };
    setNotes((prev) => [newNote, ...prev]);
  }, []);

  const updateNote = useCallback((id: string, updates: Partial<Omit<Note, 'id' | 'createdAt'>>) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, ...updates, updatedAt: new Date().toISOString() } : n
      )
    );
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const getTopic = useCallback((id: string) => topics.find((t) => t.id === id), [topics]);

  const getTopicsByCategory = useCallback(
    (categoryId: string) => topics.filter((t) => t.categoryId === categoryId),
    [topics]
  );

  const getCategoryProgress = useCallback(
    (categoryId: string) => {
      const catTopics = topics.filter((t) => t.categoryId === categoryId);
      const total = catTopics.length;
      const completed = catTopics.filter((t) => t.status === 'completed').length;
      const inProgress = catTopics.filter((t) => t.status === 'in-progress').length;
      const notStarted = catTopics.filter((t) => t.status === 'not-started').length;
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { total, completed, inProgress, notStarted, percent };
    },
    [topics]
  );

  const overallProgress = useMemo(() => {
    const total = topics.length;
    const completed = topics.filter((t) => t.status === 'completed').length;
    const inProgress = topics.filter((t) => t.status === 'in-progress').length;
    const notStarted = topics.filter((t) => t.status === 'not-started').length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, inProgress, notStarted, percent };
  }, [topics]);

  const value: AppState = {
    topics,
    notes,
    updateTopicStatus,
    updateTopicProgress,
    markTopicComplete,
    addNote,
    updateNote,
    deleteNote,
    getTopic,
    getTopicsByCategory,
    getCategoryProgress,
    overallProgress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
