'use client';

import React from 'react';
import Link from 'next/link';
import { SyllabusSubunit } from '@/types/curriculum';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { MCQ_QUESTIONS, TWO_MARK_QUESTIONS } from '@/data/question-bank';
import { FOUR_MARK_QUESTIONS, SIX_MARK_QUESTIONS } from '@/data/model-answers';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  BarChart3, 
  Dumbbell, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  TrendingUp,
  Award
} from 'lucide-react';

interface SubunitMasteryData {
  subunit: SyllabusSubunit;
  title: string;
  code: string;
  mcqMastery: number; // percentage 0-100
  twoMarkMastery: number;
  writtenMastery: number; // 4-mark & 6-mark combined with rubric scores
  overallMastery: number;
  retentionStatus: 'fresh' | 'review-due' | 'untested';
}

export function MasteryHeatmap() {
  const { state } = useStudyProgress();

  const subunits: { id: SyllabusSubunit; code: string; title: string }[] = [
    { id: '1.1-what-is-a-business', code: 'Unit 1.1', title: 'What is a Business?' },
    { id: '1.2-types-of-business-entities', code: 'Unit 1.2', title: 'Types of Business Entities' },
    { id: '1.3-business-objectives', code: 'Unit 1.3', title: 'Business Objectives' },
    { id: 'bmt-swot-analysis', code: 'BMT SWOT', title: 'SWOT Analysis' },
    { id: 'bmt-ansoff-matrix', code: 'BMT Ansoff', title: 'Ansoff Growth Matrix' },
    { id: 'bmt-steeple-analysis', code: 'BMT STEEPLE', title: 'STEEPLE Analysis' },
    { id: 'bmt-toolkit', code: 'BMT Master', title: 'BM Toolkit' },
  ];

  // Calculate stats for each subunit
  const heatmapData: SubunitMasteryData[] = subunits.map((sub) => {
    // MCQs for this subunit
    const subMcqs = MCQ_QUESTIONS.filter((q) => q.subunit === sub.id);
    const correctMcqs = subMcqs.filter((q) => state.mcqAttempts[q.id]?.isCorrect).length;
    const mcqPercent = subMcqs.length > 0 ? Math.round((correctMcqs / subMcqs.length) * 100) : 0;

    // Leitner retention decay calculation based on MCQ timestamps
    const answeredSubunitMcqs = subMcqs.filter((q) => state.mcqAttempts[q.id]);
    let retentionStatus: 'fresh' | 'review-due' | 'untested' = 'untested';
    if (answeredSubunitMcqs.length > 0) {
      const latestTimestamp = Math.max(...answeredSubunitMcqs.map((q) => state.mcqAttempts[q.id].timestamp));
      const daysSince = (Date.now() - latestTimestamp) / (1000 * 60 * 60 * 24);
      retentionStatus = daysSince < 3 ? 'fresh' : 'review-due';
    }

    // 2-mark questions
    const sub2m = TWO_MARK_QUESTIONS.filter((q) => q.subunit === sub.id);
    const completed2m = sub2m.filter((q) => state.twoMarkCompleted[q.id]).length;
    const twoMarkPercent = sub2m.length > 0 ? Math.round((completed2m / sub2m.length) * 100) : 0;

    // 4-mark & 6-mark questions incorporating explicit rubric scores
    const sub4m = FOUR_MARK_QUESTIONS.filter((q) => q.subunit === sub.id);
    const sub6m = SIX_MARK_QUESTIONS.filter((q) => q.subunit === sub.id);
    const maxMarks = sub4m.reduce((acc, q) => acc + q.marks, 0) + sub6m.reduce((acc, q) => acc + q.marks, 0);
    const scoredMarks = [...sub4m, ...sub6m].reduce((acc, q) => {
      if (state.questionScores && state.questionScores[q.id] !== undefined) {
        return acc + state.questionScores[q.id];
      }
      return acc + (state.writtenDrafts[q.id]?.trim() ? Math.round(q.marks * 0.5) : 0);
    }, 0);
    const writtenPercent = maxMarks > 0 ? Math.min(100, Math.round((scoredMarks / maxMarks) * 100)) : 0;

    const overall = Math.round((mcqPercent * 0.4) + (twoMarkPercent * 0.3) + (writtenPercent * 0.3));

    return {
      subunit: sub.id,
      title: sub.title,
      code: sub.code,
      mcqMastery: mcqPercent,
      twoMarkMastery: twoMarkPercent,
      writtenMastery: writtenPercent,
      overallMastery: overall,
      retentionStatus,
    };
  });

  // Calculate cumulative stats
  const averageMastery = Math.round(
    heatmapData.reduce((acc, curr) => acc + curr.overallMastery, 0) / heatmapData.length
  );

  // Lowest performing subunit for "Weakness Workout"
  const lowestSubunit = [...heatmapData].sort((a, b) => a.overallMastery - b.overallMastery)[0];

  const getHeatmapColor = (pct: number) => {
    if (pct >= 80) return 'bg-emerald-500 text-white';
    if (pct >= 50) return 'bg-emerald-200 text-emerald-950';
    if (pct > 0) return 'bg-amber-100 text-amber-900';
    return 'bg-stone-100 text-stone-400';
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <BarChart3 className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-text-primary tracking-tight">
              Confidence & Mastery Heatmap
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Live tracking across syllabus units and assessment tiers. Auto-synced in local storage.
            </p>
          </div>
        </div>

        {/* Weakness Workout Action Link targeted to lowest subunit */}
        <Link href={lowestSubunit ? `/blitz?subunit=${lowestSubunit.subunit}` : '/blitz'}>
          <Button
            variant="outline"
            size="sm"
            icon={<Dumbbell className="w-3.5 h-3.5 text-blue-600" />}
          >
            Weakness Workout: {lowestSubunit?.code}
          </Button>
        </Link>
      </div>

      {/* Grid of Subunit Mastery */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-border text-[11px] font-bold text-text-muted uppercase tracking-wider">
              <th className="py-2.5 px-3">Syllabus Topic</th>
              <th className="py-2.5 px-3 text-center">MCQ (30 Qs)</th>
              <th className="py-2.5 px-3 text-center">2-Mark AO1 (32 Qs)</th>
              <th className="py-2.5 px-3 text-center">4/6-Mark PEEL (19 Qs)</th>
              <th className="py-2.5 px-3 text-center">Leitner Retention</th>
              <th className="py-2.5 px-3 text-right">Overall Unit Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-xs">
            {heatmapData.map((row) => (
              <tr key={row.subunit} className="hover:bg-stone-50/60 transition">
                <td className="py-3 px-3">
                  <div className="font-semibold text-text-primary">{row.code}</div>
                  <div className="text-[11px] text-text-muted">{row.title}</div>
                </td>

                {/* MCQ Heatmap Cell */}
                <td className="py-3 px-3 text-center">
                  <span
                    className={`inline-block w-16 py-1 rounded font-mono font-bold text-xs ${getHeatmapColor(
                      row.mcqMastery
                    )}`}
                  >
                    {row.mcqMastery}%
                  </span>
                </td>

                {/* 2-Mark Heatmap Cell */}
                <td className="py-3 px-3 text-center">
                  <span
                    className={`inline-block w-16 py-1 rounded font-mono font-bold text-xs ${getHeatmapColor(
                      row.twoMarkMastery
                    )}`}
                  >
                    {row.twoMarkMastery}%
                  </span>
                </td>

                {/* Written PEEL Heatmap Cell */}
                <td className="py-3 px-3 text-center">
                  <span
                    className={`inline-block w-16 py-1 rounded font-mono font-bold text-xs ${getHeatmapColor(
                      row.writtenMastery
                    )}`}
                  >
                    {row.writtenMastery}%
                  </span>
                </td>

                {/* Leitner Retention Status Cell */}
                <td className="py-3 px-3 text-center">
                  {row.retentionStatus === 'fresh' && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <Clock className="w-2.5 h-2.5" /> Fresh (Active)
                    </span>
                  )}
                  {row.retentionStatus === 'review-due' && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      <Clock className="w-2.5 h-2.5" /> Review Due
                    </span>
                  )}
                  {row.retentionStatus === 'untested' && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-stone-500 bg-stone-50 px-2 py-0.5 rounded-full border border-stone-200">
                      Untested
                    </span>
                  )}
                </td>

                {/* Overall Score */}
                <td className="py-3 px-3 text-right">
                  <span className="font-bold text-sm font-mono text-text-primary">
                    {row.overallMastery}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Score Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-surface-subtle border border-border">
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-amber-500" />
          <div>
            <span className="text-xs font-semibold text-text-primary block">
              Aggregate Syllabus Mastery: <strong className="font-mono text-blue-700">{averageMastery}%</strong>
            </span>
            <span className="text-[11px] text-text-muted">
              {averageMastery >= 80 ? 'Target achieved for Grade 7 readiness!' : 'Drill weak areas with Rapid Blitz and Split-Screen Exam practice.'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-32 bg-stone-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${averageMastery}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
