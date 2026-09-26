'use client';

import React from 'react';
import { FourMarkRubricItem, SixMarkRubricItem, SixMarkLevel } from '@/types/curriculum';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { CheckSquare, Square, Lightbulb, Award } from 'lucide-react';

interface PeelRubricProps {
  questionId: string;
  totalMarks: number;
  rubricItems: (FourMarkRubricItem | SixMarkRubricItem)[];
  levelBreakdown?: SixMarkLevel[];
  examinerTips?: string;
}

export function PeelRubric({
  questionId,
  totalMarks,
  rubricItems,
  levelBreakdown,
  examinerTips,
}: PeelRubricProps) {
  const { toggleRubricItem, isRubricChecked, saveQuestionScore } = useStudyProgress();

  // Calculate current score from checked items weighted by marks
  const currentScore = rubricItems.reduce((acc, item) => {
    if (isRubricChecked(questionId, item.id)) {
      const weight = ('marks' in item ? item.marks : item.mark) || 1;
      return acc + weight;
    }
    return acc;
  }, 0);

  // Cap at totalMarks
  const boundedScore = Math.min(currentScore, totalMarks);

  // Synchronize score to context when bounded score changes
  React.useEffect(() => {
    saveQuestionScore(questionId, boundedScore);
  }, [questionId, boundedScore, saveQuestionScore]);

  return (
    <div className="space-y-4">
      {/* Rubric Header & Score Counter */}
      <div className="flex items-center justify-between p-3 rounded-lg bg-surface-subtle border border-border">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold text-text-primary uppercase tracking-wide">
            Examiner PEEL Rubric
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-text-muted">Self-Audit Score:</span>
          <span className="text-sm font-bold font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            {boundedScore} / {totalMarks} marks
          </span>
        </div>
      </div>

      {/* Levels of Response (for 6-mark questions) */}
      {levelBreakdown && levelBreakdown.length > 0 && (
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider block">
            IB Markbands:
          </span>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
            {levelBreakdown.map((lvl) => (
              <div
                key={lvl.range}
                className="p-2.5 rounded-lg bg-white border border-border/80 text-[11px] leading-snug"
              >
                <div className="font-bold text-text-primary mb-0.5">
                  [{lvl.range} Marks]
                </div>
                <MarkdownRenderer content={lvl.descriptor} className="text-text-secondary text-[11px] leading-snug" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Criteria Checkboxes */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider block">
          Assessment Criteria Checklist:
        </span>
        <div className="space-y-1.5">
          {rubricItems.map((item) => {
            const checked = isRubricChecked(questionId, item.id);
            const weight = ('marks' in item ? item.marks : item.mark) || 1;
            return (
              <button
                key={item.id}
                onClick={() => toggleRubricItem(questionId, item.id)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs font-medium transition flex items-start gap-2.5 cursor-pointer ${
                  checked
                    ? 'bg-blue-50/50 border-blue-400 text-blue-950'
                    : 'bg-white border-border hover:border-stone-400 text-text-secondary'
                }`}
              >
                <span className="mt-0.5 flex-shrink-0 text-blue-600">
                  {checked ? (
                    <CheckSquare className="w-4 h-4 fill-blue-600 text-white" />
                  ) : (
                    <Square className="w-4 h-4 text-stone-400" />
                  )}
                </span>
                <span className="flex-1 leading-relaxed"><MarkdownRenderer content={item.criterion} inline className="inline" /></span>
                <span className="font-mono text-[10px] text-text-muted font-bold px-1.5 py-0.5 bg-surface-subtle rounded border border-border flex-shrink-0">
                  [{weight} {weight === 1 ? 'mark' : 'marks'}]
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Examiner Tips Callout */}
      {examinerTips && (
        <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5">Examiner Strategy Tip:</strong>
            <MarkdownRenderer content={examinerTips} className="text-amber-950 text-xs" />
          </div>
        </div>
      )}
    </div>
  );
}
