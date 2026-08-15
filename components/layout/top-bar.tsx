'use client';

import { Search, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileSidebar } from '@/components/layout/mobile-sidebar';

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 flex items-center gap-3 h-16 px-4 md:px-6 border-b border-border bg-background/80 backdrop-blur-md">
      <MobileSidebar />

      <button
        onClick={() => {
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
        }}
        className="flex items-center gap-2 h-9 px-3 rounded-lg border border-border bg-muted/50 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors w-full max-w-md cursor-pointer"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">Search topics, notes...</span>
        <span className="sm:hidden">Search...</span>
        <kbd className="ml-auto hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-xs rounded border border-border bg-background font-mono">
          <Command className="h-3 w-3" />K
        </kbd>
      </button>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="sm" className="hidden sm:flex text-muted-foreground">
          Give Feedback
        </Button>
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary to-chart-4 text-primary-foreground text-sm font-semibold">
          AC
        </div>
      </div>
    </header>
  );
}
