import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { StudyProgressProvider } from '@/context/StudyProgressContext';
import { Navigation } from '@/components/layout/Navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IB SL Business Management Study Suite | Units 1.1-1.3, SWOT & Ansoff',
  description: 'Production-grade study suite featuring Matrix Master, Rapid Blitz MCQ Sprint, Entity Showdown, Split-Screen PEEL Exam Practice, and High-Yield Cram Mode.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans min-h-screen bg-canvas text-text-primary antialiased flex flex-col">
        <StudyProgressProvider>
          <Navigation />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </main>
          <footer className="border-t border-border bg-white py-6 mt-12 text-center text-xs text-text-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>IB SL Business Management Exam Preparation Suite &bull; Units 1.1, 1.2, 1.3, SWOT, Ansoff</span>
              <span>Pure Light Mode &bull; Built with Next.js 15 & React 19</span>
            </div>
          </footer>
        </StudyProgressProvider>
      </body>
    </html>
  );
}
