import React from 'react';
import Link from 'next/link';
import { ExamPractice } from '@/components/exam/ExamPractice';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  PenTool, 
  CheckSquare, 
  FileText, 
  HelpCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Exam Practice & Written Rubrics | IB SL Business Management',
  description: 'Practice 2-mark definitions, 4-mark applied PEEL questions, and 6-mark analytical essays.',
};

export default function PracticeHubPage() {
  return (
    <div className="space-y-6">
      {/* Practice Modality Hub Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link
          href="/practice/written"
          className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/90 flex items-center justify-between transition hover:border-blue-400 group"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
              <PenTool className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-950 group-hover:text-blue-700 transition">
                Written & Rubrics
              </div>
              <div className="text-[11px] text-blue-700/90">2m, 4m PEEL & 6m Essays</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-600 text-white rounded-full">
            Active
          </span>
        </Link>

        <Link
          href="/practice/mcq"
          className="p-3.5 rounded-xl bg-white hover:bg-surface-subtle border border-border flex items-center justify-between transition group shadow-subtle hover:border-stone-400"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-subtle text-text-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-text-primary group-hover:text-blue-600 transition">
                Untimed MCQ Bank
              </div>
              <div className="text-[11px] text-text-muted">30 Questions + Rationales</div>
            </div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-blue-600 transition" />
        </Link>

        <Link
          href="/blitz"
          className="p-3.5 rounded-xl bg-white hover:bg-surface-subtle border border-border flex items-center justify-between transition group shadow-subtle hover:border-stone-400"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-subtle text-text-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-amber-50 group-hover:text-amber-600 transition">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-text-primary group-hover:text-amber-600 transition">
                Timed Rapid Blitz
              </div>
              <div className="text-[11px] text-text-muted">Sprint, Sudden Death & Endless</div>
            </div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-amber-600 transition" />
        </Link>
      </div>

      <ExamPractice />
    </div>
  );
}
