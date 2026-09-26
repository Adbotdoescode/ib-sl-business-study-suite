'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { 
  GraduationCap, 
  Zap, 
  Grid, 
  Scale, 
  PenTool, 
  BookOpen, 
  Clock, 
  Key, 
  RotateCcw,
  Menu,
  X,
  HelpCircle
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Overview', icon: GraduationCap },
  { href: '/blitz', label: 'MCQ Blitz', icon: Zap },
  { href: '/matrix-master', label: 'Matrix Master', icon: Grid },
  { href: '/entities', label: 'Entity Showdown', icon: Scale },
  { href: '/practice', label: 'Exam Practice', icon: PenTool },
  { href: '/cram', label: '10-Min Cram', icon: Clock },
  { href: '/mnemonics', label: 'GET CASH', icon: Key },
  { href: '/study', label: 'Study Guides', icon: BookOpen },
];

export function Navigation() {
  const pathname = usePathname();
  const { resetAllProgress } = useStudyProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-subtle group-hover:bg-blue-700 transition">
                <GraduationCap className="w-4 h-4" strokeWidth={2} />
              </div>
              <div>
                <span className="font-semibold text-text-primary text-sm sm:text-base tracking-tight block">
                  IB SL Business
                </span>
                <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block -mt-1">
                  1.1 • 1.2 • 1.3 • SWOT • Ansoff
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
                  )}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions / Reset */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={resetAllProgress}
              title="Reset test and revision progress"
              className="flex items-center gap-1 text-xs text-text-muted hover:text-red-600 px-2.5 py-1.5 rounded-lg hover:bg-red-50/60 transition cursor-pointer border border-transparent hover:border-red-200"
            >
              <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Reset</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-subtle transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.75} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 pt-2 pb-4 space-y-1 animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition',
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
                  )}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                  <span>{link.label}</span>
                </Link>
                {link.href === '/practice' && (
                  <Link
                    href="/practice/mcq"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition pl-8',
                      pathname === '/practice/mcq'
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
                    )}
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-text-muted" />
                    <span>Untimed MCQ Bank</span>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
          <div className="pt-2 border-t border-border mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                resetAllProgress();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <RotateCcw className="w-4 h-4" strokeWidth={1.75} />
              <span>Reset All Study Progress</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
