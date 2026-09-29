'use client';

import React, { useState } from 'react';
import { 
  TwoMarkQuestion, 
  FourMarkQuestion, 
  SixMarkQuestion, 
  SyllabusSubunit 
} from '@/types/curriculum';
import { TWO_MARK_QUESTIONS } from '@/data/question-bank';
import { FOUR_MARK_QUESTIONS, SIX_MARK_QUESTIONS } from '@/data/model-answers';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { SplitScreenExam } from '@/components/exam/SplitScreenExam';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { Button } from '@/components/ui/Button';
import { Badge, AoBadge, MarkBadge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { 
  PenTool, 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  ChevronLeft, 
  Eye, 
  EyeOff, 
  Lightbulb, 
  CheckSquare, 
  Square,
  Filter
} from 'lucide-react';

export function ExamPractice() {
  const { state, toggleTwoMarkCompleted, saveWrittenDraft } = useStudyProgress();

  // Tier filter: '2' | '4' | '6'
  const [tier, setTier] = useState<'2' | '4' | '6'>('2');
  const [selectedSubunit, setSelectedSubunit] = useState<string>('all');
  const [selectedCommandTerm, setSelectedCommandTerm] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState(0);

  // 2-mark model answer reveal toggle
  const [showTwoMarkAnswer, setShowTwoMarkAnswer] = useState(false);

  // Active question list based on tier
  const questions = tier === '2' ? TWO_MARK_QUESTIONS : tier === '4' ? FOUR_MARK_QUESTIONS : SIX_MARK_QUESTIONS;

  // Available command terms for active tier
  const availableCommandTerms = Array.from(new Set(questions.map((q) => q.commandTerm))).sort();

  // Filtered by subunit and command term
  const filteredQuestions = questions.filter((q) => {
    const matchesSubunit = selectedSubunit === 'all' || q.subunit === selectedSubunit;
    const matchesCommandTerm = selectedCommandTerm === 'all' || q.commandTerm === selectedCommandTerm;
    return matchesSubunit && matchesCommandTerm;
  });

  const currentQuestion = filteredQuestions[activeIndex] || filteredQuestions[0];

  // 2-mark local draft state
  const [twoMarkDraft, setTwoMarkDraft] = useState('');
  const twoMarkTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (currentQuestion && tier === '2') {
      setTwoMarkDraft(state.writtenDrafts[currentQuestion.id] || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion?.id, tier]);

  const handleTwoMarkDraftChange = (val: string) => {
    setTwoMarkDraft(val);
    if (twoMarkTimeoutRef.current) clearTimeout(twoMarkTimeoutRef.current);
    twoMarkTimeoutRef.current = setTimeout(() => {
      if (currentQuestion) {
        saveWrittenDraft(currentQuestion.id, val);
      }
    }, 400);
  };

  const handleNext = () => {
    if (activeIndex + 1 < filteredQuestions.length) {
      setActiveIndex((prev) => prev + 1);
      setShowTwoMarkAnswer(false);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      setShowTwoMarkAnswer(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Practice Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-border shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <PenTool className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Exam Practice & Written Rubrics
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Practice 2-mark definitions, 4-mark applied PEEL paragraphs, and 6-mark two-sided analyses.
            </p>
          </div>
        </div>

        {/* Tier Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-subtle rounded-lg border border-border">
          <button
            onClick={() => {
              setTier('2');
              setActiveIndex(0);
              setSelectedCommandTerm('all');
              setShowTwoMarkAnswer(false);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
              tier === '2'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            2-Mark Bank (32 Qs)
          </button>
          <button
            onClick={() => {
              setTier('4');
              setActiveIndex(0);
              setSelectedCommandTerm('all');
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
              tier === '4'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            4-Mark PEEL (12 Qs)
          </button>
          <button
            onClick={() => {
              setTier('6');
              setActiveIndex(0);
              setSelectedCommandTerm('all');
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
              tier === '6'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            6-Mark Analysis (7 Qs)
          </button>
        </div>
      </div>

      {/* Subunit & Command Term Filters & Navigator Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-border shadow-subtle">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-text-muted" />
            <span className="text-xs font-medium text-text-muted">Syllabus:</span>
            <select
              value={selectedSubunit}
              onChange={(e) => {
                setSelectedSubunit(e.target.value);
                setActiveIndex(0);
                setShowTwoMarkAnswer(false);
              }}
              className="text-xs bg-white border border-border rounded-lg px-2.5 py-1 text-text-primary focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">All Units ({questions.length})</option>
              <option value="1.1-what-is-a-business">1.1 What is a Business?</option>
              <option value="1.2-types-of-business-entities">1.2 Types of Business Entities</option>
              <option value="1.3-business-objectives">1.3 Business Objectives</option>
              <option value="bmt-swot-analysis">BMT: SWOT Analysis</option>
              <option value="bmt-ansoff-matrix">BMT: Ansoff Matrix</option>
              <option value="bmt-steeple-analysis">BMT: STEEPLE Analysis</option>
              <option value="bmt-toolkit">BMT: Toolkit Master</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-text-muted">Command Term:</span>
            <select
              value={selectedCommandTerm}
              onChange={(e) => {
                setSelectedCommandTerm(e.target.value);
                setActiveIndex(0);
                setShowTwoMarkAnswer(false);
              }}
              className="text-xs bg-white border border-border rounded-lg px-2.5 py-1 text-text-primary focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">All Command Terms</option>
              {availableCommandTerms.map((ct) => (
                <option key={ct} value={ct}>
                  {ct}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Question Pagination */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            icon={<ChevronLeft className="w-3.5 h-3.5" />}
          >
            Prev
          </Button>

          <span className="text-xs font-mono font-medium text-text-primary px-2">
            {filteredQuestions.length > 0 ? `${activeIndex + 1} / ${filteredQuestions.length}` : '0 / 0'}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={activeIndex + 1 >= filteredQuestions.length}
            icon={<ChevronRight className="w-3.5 h-3.5" />}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Active Question Display */}
      {currentQuestion ? (
        tier === '2' ? (
          /* 2-Mark Short Answer Question View */
          <Card className="p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-text-muted font-mono">
                  {currentQuestion.id}
                </span>
                <AoBadge ao="AO1" />
                <MarkBadge marks={2} />
              </div>

              <button
                onClick={() => toggleTwoMarkCompleted(currentQuestion.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition cursor-pointer ${
                  state.twoMarkCompleted[currentQuestion.id]
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-surface-subtle text-text-muted border-border hover:border-stone-400'
                }`}
              >
                {state.twoMarkCompleted[currentQuestion.id] ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Circle className="w-3.5 h-3.5" />
                )}
                <span>
                  {state.twoMarkCompleted[currentQuestion.id] ? 'Marked Complete' : 'Mark as Practiced'}
                </span>
              </button>
            </div>

            {/* Question Text */}
            <div>
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider block mb-1">
                Command Term: {currentQuestion.commandTerm}
              </span>
              <h2 className="text-lg font-bold text-text-primary leading-snug">
                <MarkdownRenderer content={currentQuestion.question} inline />
              </h2>
            </div>

            {/* 2-Mark Response Drafting Workspace */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-secondary flex items-center justify-between">
                <span>Your Draft Definition / Response:</span>
                <span className="text-[11px] font-mono text-text-muted">
                  {twoMarkDraft.length} characters
                </span>
              </label>
              <textarea
                value={twoMarkDraft}
                onChange={(e) => handleTwoMarkDraftChange(e.target.value)}
                placeholder="Draft your concise definition or explanation here before revealing the mark scheme..."
                rows={3}
                className="w-full p-3.5 rounded-lg border border-border text-sm text-text-primary leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[90px]"
              />
            </div>

            {/* Reveal Model Answer Toggle */}
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowTwoMarkAnswer(!showTwoMarkAnswer)}
                icon={showTwoMarkAnswer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              >
                {showTwoMarkAnswer ? 'Hide Model Answer' : 'Reveal Model Answer & Rubric'}
              </Button>
            </div>

            {/* Revealed 2-Mark Answer & Breakdown */}
            {showTwoMarkAnswer && (
              <div className="space-y-4 pt-4 border-t border-border animate-in fade-in duration-200">
                {/* Model Answer Box */}
                <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-200 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wide block mb-1">
                    Exemplar Model Answer:
                  </span>
                  <MarkdownRenderer
                    content={(currentQuestion as TwoMarkQuestion).modelAnswer}
                    className="text-text-primary font-medium text-xs sm:text-sm leading-relaxed whitespace-pre-line"
                  />
                </div>

                {/* 2-Mark Breakdown Checklist */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wide block">
                    Mark Breakdown (2 Discrete Criteria):
                  </span>
                  <div className="space-y-1.5">
                    {(currentQuestion as TwoMarkQuestion).markBreakdown.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-surface-subtle border border-border/80 text-xs text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-blue-600 font-bold mt-0.5">&bull;</span>
                        <span className="flex-1">
                          <MarkdownRenderer content={item.criterion} inline />
                        </span>
                        <span className="font-mono text-[10px] text-text-muted font-bold px-1.5 py-0.5 bg-white rounded border border-border">
                          [1 mark]
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examiner Tips */}
                {(currentQuestion as TwoMarkQuestion).examinerTips && (
                  <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block mb-0.5">Examiner Advice:</strong>
                      <MarkdownRenderer content={(currentQuestion as TwoMarkQuestion).examinerTips!} className="text-amber-950 text-xs" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        ) : (
          /* 4-Mark and 6-Mark Split-Screen Workspace with distinct key */
          <SplitScreenExam 
            key={currentQuestion.id} 
            question={currentQuestion as FourMarkQuestion | SixMarkQuestion} 
          />
        )
      ) : (
        <Card className="p-8 text-center text-text-muted">
          No questions found for the selected filter.
        </Card>
      )}
    </div>
  );
}
