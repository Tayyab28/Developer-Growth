import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppProvider } from '@/components/providers/app-provider';
import { CommandPalette } from '@/components/layout/command-palette';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Developer Growth OS',
  description:
    'Track your journey from software engineer to Senior Backend / Distributed Systems Engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider>
          {children}
          <CommandPalette />
        </AppProvider>
      </body>
    </html>
  );
}
