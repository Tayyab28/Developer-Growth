'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  Menu,
  Flame,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { userProfile } from '@/lib/data/user';
import { useApp } from '@/components/providers/app-provider';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/category/backend-engineering', label: 'Backend Engineering', icon: Server },
  { href: '/category/system-design', label: 'System Design', icon: Network },
  { href: '/category/distributed-systems', label: 'Distributed Systems', icon: Share2 },
  { href: '/category/cloud-devops', label: 'Cloud & DevOps', icon: Cloud },
  { href: '/category/ai-engineering', label: 'AI Engineering', icon: BrainCircuit },
  { href: '/category/interview-prep', label: 'Interview Prep', icon: Target },
  { href: '/notes', label: 'Notes', icon: StickyNote },
  { href: '/progress', label: 'Progress Tracker', icon: TrendingUp },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { overallProgress } = useApp();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0 flex flex-col">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="flex items-center gap-2.5 px-5 h-16 border-b border-border">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            DG
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">Developer</p>
            <p className="text-sm font-semibold leading-tight text-primary">Growth OS</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-3 border-t border-border">
          <div className="rounded-lg bg-gradient-to-br from-primary/10 to-transparent p-3 mb-3 border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">Overall Progress</span>
              <span className="text-xs font-bold text-primary">{overallProgress.percent}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${overallProgress.percent}%` }}
              />
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
              <Flame className="h-3 w-3 text-orange-400" />
              <span>{userProfile.streak} day streak</span>
            </div>
          </div>
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent transition-colors"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary to-chart-4 text-primary-foreground text-sm font-semibold">
              {userProfile.avatarInitials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{userProfile.name}</p>
              <p className="text-xs text-muted-foreground truncate">{userProfile.currentRole}</p>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
