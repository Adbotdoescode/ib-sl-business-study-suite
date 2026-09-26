import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STUDY_UNITS, getStudyUnitById } from '@/data/study-content';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Sparkles,
  Zap,
  PenTool,
  Grid
} from 'lucide-react';

interface StudyUnitPageProps {
  params: Promise<{
    unitId: string;
  }>;
}

export async function generateStaticParams() {
  return STUDY_UNITS.map((unit) => ({
    unitId: unit.id,
  }));
}

export async function generateMetadata({ params }: StudyUnitPageProps) {
  const { unitId } = await params;
  const unit = getStudyUnitById(unitId);
  if (!unit) {
    return {
      title: 'Study Guide | IB SL Business Management',
    };
  }
  return {
    title: `${unit.unitCode}: ${unit.title} | IB SL Business Management`,
    description: unit.description,
  };
}

export default async function StudyUnitReaderPage({ params }: StudyUnitPageProps) {
  const { unitId } = await params;
  const unit = getStudyUnitById(unitId);

  if (!unit) {
    notFound();
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Back to Guides link */}
      <div className="flex items-center justify-between">
        <Link
          href="/study"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-text-primary transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Study Guides</span>
        </Link>

        {/* Practice shortcuts */}
        <div className="flex items-center gap-2">
          <Link href="/blitz">
            <Button variant="outline" size="sm" icon={<Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}>
              Test with MCQ Blitz
            </Button>
          </Link>
          <Link href="/practice">
            <Button variant="primary" size="sm" icon={<PenTool className="w-3.5 h-3.5" />}>
              Practice Written Questions
            </Button>
          </Link>
        </div>
      </div>

      {/* Guide Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-subtle space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
            {unit.unitCode}
          </span>
          <span className="flex items-center gap-1 text-xs text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            {unit.estimatedReadTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
          {unit.title}
        </h1>
        <p className="text-base text-blue-900 font-medium">
          {unit.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-3xl">
          {unit.description}
        </p>
      </div>

      {/* Reading Grid: Table of Contents + Main Text */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Sticky Table of Contents (Desktop) */}
        <div className="hidden lg:block lg:col-span-1 sticky top-24 space-y-4">
          <Card className="p-4">
            <span className="text-xs font-bold text-text-primary uppercase tracking-wide block mb-3 pb-2 border-b border-border">
              Table of Contents
            </span>
            <nav className="space-y-1.5 text-xs">
              {unit.sections.map((section, idx) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block p-1.5 rounded-md text-text-secondary hover:text-blue-700 hover:bg-blue-50/50 transition truncate"
                >
                  {idx + 1}. {section.title.replace(/^\d+\.\s*/, '')}
                </a>
              ))}
              <a
                href="#high-yield-glossary"
                className="block p-1.5 rounded-md font-semibold text-blue-700 hover:bg-blue-50 transition"
              >
                &bull; High-Yield Glossary
              </a>
            </nav>
          </Card>
        </div>

        {/* Main Content Pane */}
        <div className="lg:col-span-3 space-y-8 max-w-3xl">
          {unit.sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-xl border border-border shadow-subtle space-y-4"
            >
              <h2 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                {section.title}
              </h2>

              {/* Main Section Content formatted as Markdown */}
              <MarkdownRenderer
                content={section.content}
                className="text-xs sm:text-sm text-text-secondary leading-relaxed space-y-3 font-normal"
              />

              {/* Key Takeaways Card */}
              {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-surface-subtle border border-border/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Key Conceptual Takeaways:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-text-secondary">
                    {section.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&bull;</span>
                        <MarkdownRenderer content={takeaway} inline className="inline" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exam Tips Callout */}
              {section.examTips && section.examTips.length > 0 && (
                <div className="mt-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wide">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>Examiner Strategy & Trap Warning:</span>
                  </div>
                  <ul className="space-y-1 text-amber-950">
                    {section.examTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">&bull;</span>
                        <MarkdownRenderer content={tip} inline className="inline" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* High-Yield Glossary Section */}
          <section id="high-yield-glossary" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-xl border border-border shadow-subtle space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight">
                High-Yield Syllabus Terminology ({unit.highYieldTerms.length} Terms)
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {unit.highYieldTerms.map((item, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-surface-subtle border border-border/80 text-xs">
                  <strong className="text-text-primary font-bold block mb-0.5">
                    {item.term}
                  </strong>
                  <MarkdownRenderer
                    content={item.definition}
                    className="text-text-secondary leading-relaxed text-xs"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
