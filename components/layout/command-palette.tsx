'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Server,
  Network,
  Share2,
  Cloud,
  BrainCircuit,
  Target,
  StickyNote,
  TrendingUp,
  Settings,
  FileText,
  Search,
} from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { categories } from '@/lib/data/categories';
import { userProfile } from '@/lib/data/user';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/notes', label: 'Notes', icon: StickyNote },
  { href: '/progress', label: 'Progress Tracker', icon: TrendingUp },
  { href: '/settings', label: 'Settings', icon: Settings },
];

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'backend-engineering': Server,
  'system-design': Network,
  'distributed-systems': Share2,
  'cloud-devops': Cloud,
  'ai-engineering': BrainCircuit,
  'interview-prep': Target,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { topics, notes } = useApp();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search topics, notes, pages..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Pages">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                <Icon className="h-4 w-4" />
                {item.label}
              </CommandItem>
            );
          })}
        </CommandGroup>

        <CommandGroup heading="Categories">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            return (
              <CommandItem
                key={cat.id}
                onSelect={() => navigate(`/category/${cat.id}`)}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {cat.name}
              </CommandItem>
            );
          })}
        </CommandGroup>

        <CommandGroup heading="Topics">
          {topics.slice(0, 8).map((topic) => (
            <CommandItem
              key={topic.id}
              onSelect={() => navigate(`/topic/${topic.id}`)}
            >
              <FileText className="h-4 w-4" />
              {topic.title}
              <CommandShortcut>{topic.difficulty}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        {notes.length > 0 && (
          <CommandGroup heading="Notes">
            {notes.slice(0, 5).map((note) => (
              <CommandItem
                key={note.id}
                onSelect={() => navigate('/notes')}
              >
                <StickyNote className="h-4 w-4" />
                {note.title}
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        <CommandGroup heading="Quick Actions">
          <CommandItem onSelect={() => navigate('/progress')}>
            <TrendingUp className="h-4 w-4" />
            View Progress Tracker
          </CommandItem>
          <CommandItem onSelect={() => navigate('/settings')}>
            <Settings className="h-4 w-4" />
            Open Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
