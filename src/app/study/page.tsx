import React from 'react';
import Link from 'next/link';
import { STUDY_UNITS } from '@/data/study-content';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ListChecks, 
  Sparkles,
  HelpCircle,
  PenTool
} from 'lucide-react';

export const metadata = {
  title: 'Syllabus Study Guides | IB SL Business Management',
  description: 'Complete academic study guides based on Paul Hoang 5th Edition and student visual notes.',
};

export default function StudyGuidesIndexPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-subtle">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Syllabus Study Guides & Reference Notes
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Comprehensive academic guides covering Units 1.1, 1.2, 1.3, SWOT Analysis, and the Ansoff Growth Matrix.
            </p>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STUDY_UNITS.map((unit) => (
          <Card key={unit.id} hoverEffect className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {unit.unitCode}
                </span>
                <span className="flex items-center gap-1 text-xs text-text-muted">
                  <Clock className="w-3.5 h-3.5" />
                  {unit.estimatedReadTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-text-primary mb-1">
                {unit.title}
              </h2>
              <p className="text-xs font-medium text-blue-900/80 mb-3">
                {unit.subtitle}
              </p>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                {unit.description}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-border/80 text-[11px] text-text-muted">
                <div className="flex items-center gap-1.5">
                  <ListChecks className="w-3.5 h-3.5 text-blue-600" />
                  <span><strong>{unit.sections.length}</strong> In-Depth Syllabus Sections</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span><strong>{unit.highYieldTerms.length}</strong> High-Yield Terms Defined</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <Link href={`/study/${unit.id}`} className="w-full">
                <Button variant="primary" size="sm" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                  Read Complete Guide
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
