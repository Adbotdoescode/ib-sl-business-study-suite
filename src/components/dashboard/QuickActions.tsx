import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { 
  Zap, 
  Grid, 
  Clock, 
  Scale, 
  PenTool, 
  Key, 
  BookOpen, 
  ArrowUpRight,
  HelpCircle
} from 'lucide-react';

const ACTIONS = [
  {
    title: 'Rapid Blitz MCQ Sprint',
    description: '120s sprint with 3s rapid bonus, sudden-death mode, and 2-sentence rationale feedback.',
    href: '/blitz',
    badge: 'High Velocity',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: Zap,
    iconBg: 'bg-amber-500/10 text-amber-600',
  },
  {
    title: 'Matrix Master Sorter',
    description: 'Interactive drag-and-drop quadrant sorter for SWOT Analysis and Ansoff Growth Matrix.',
    href: '/matrix-master',
    badge: 'Interactive DnD',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: Grid,
    iconBg: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    title: '10-Min High-Yield Cram',
    description: 'Filterable review of Top 20 Definitions, Top 5 Exam Distinctions, and 5 Golden Matrix Rules.',
    href: '/cram',
    badge: 'Quick Revision',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    icon: Clock,
    iconBg: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Entity Showdown Matrix',
    description: '8-dimension comparative table for 5 entities plus 5 realistic startup case matchmaker drills.',
    href: '/entities',
    badge: 'Case Solver',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    icon: Scale,
    iconBg: 'bg-purple-500/10 text-purple-600',
  },
];

const SECONDARY_LINKS = [
  {
    title: 'Written Exam Practice & Rubrics',
    subtitle: 'Practice 2-mark definitions, 4-mark split-screen PEEL cases, and 6-mark analyses.',
    href: '/practice',
    icon: PenTool,
  },
  {
    title: 'Self-Paced MCQ Bank (30 Qs)',
    subtitle: 'Untimed practice with complete distractor analyses and syllabus rationales.',
    href: '/practice/mcq',
    icon: HelpCircle,
  },
  {
    title: 'GET CASH Mnemonic & Matcher',
    subtitle: 'Flippable startup motive cards, 30s Speed Matcher game, and SMART targets.',
    href: '/mnemonics',
    icon: Key,
  },
  {
    title: 'Comprehensive Study Guides',
    subtitle: 'Complete textbook & visual notes readers for 1.1, 1.2, 1.3, SWOT, and Ansoff.',
    href: '/study',
    icon: BookOpen,
  },
];

export function QuickActions() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-base sm:text-lg font-bold text-text-primary tracking-tight">
          Core Study Drills & Interactive Tools
        </h2>
        <p className="text-xs text-text-secondary mt-0.5">
          Select a mode to begin testing and reinforcing key IB syllabus concepts.
        </p>
      </div>

      {/* Primary Action Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.href} href={action.href} className="group">
              <Card hoverEffect className="p-5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${action.iconBg}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${action.badgeColor}`}>
                      {action.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-text-primary group-hover:text-blue-600 transition mb-1 flex items-center justify-between">
                    <span>{action.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {action.description}
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Secondary Study Hub Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {SECONDARY_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <Link key={link.href} href={link.href} className="group">
              <div className="p-4 rounded-xl bg-white border border-border hover:border-stone-400 hover:shadow-subtle transition flex items-start gap-3">
                <div className="p-2 rounded-lg bg-surface-subtle text-text-secondary group-hover:text-blue-600 transition flex-shrink-0">
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-text-primary group-hover:text-blue-600 transition truncate">
                    {link.title}
                  </h4>
                  <p className="text-[11px] text-text-muted mt-0.5 line-clamp-2 leading-snug">
                    {link.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
