'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FourMarkQuestion, SixMarkQuestion } from '@/types/curriculum';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { PeelRubric } from '@/components/exam/PeelRubric';
import { ExemplarHighlighter } from '@/components/exam/ExemplarHighlighter';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  FileEdit, 
  BookOpen, 
  RotateCcw, 
  Save, 
  CheckCircle, 
  FileText,
  HelpCircle
} from 'lucide-react';

interface SplitScreenExamProps {
  question: FourMarkQuestion | SixMarkQuestion;
}

export function SplitScreenExam({ question }: SplitScreenExamProps) {
  const { state, saveWrittenDraft } = useStudyProgress();
  const [viewMode, setViewMode] = useState<'write' | 'exemplar'>('write');
  const [responseMode, setResponseMode] = useState<'write' | 'preview'>('write');

  // Debounced local state for smooth typing without synchronous localStorage overhead
  const [localDraft, setLocalDraft] = useState(state.writtenDrafts[question.id] || '');
  const draftRef = useRef(localDraft);
  draftRef.current = localDraft;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync from context when question changes
  useEffect(() => {
    setLocalDraft(state.writtenDrafts[question.id] || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  // Clean up debounce timer and flush draft to context on unmount or question change
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        saveWrittenDraft(question.id, draftRef.current);
      }
    };
  }, [question.id, saveWrittenDraft]);

  const wordCount = localDraft.trim() ? localDraft.trim().split(/\s+/).length : 0;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setLocalDraft(val);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      saveWrittenDraft(question.id, val);
    }, 400);
  };

  const handleClearDraft = () => {
    if (window.confirm('Clear your written answer draft for this question?')) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setLocalDraft('');
      saveWrittenDraft(question.id, '');
    }
  };

  return (
    <div className="space-y-4">
      {/* Mode Switcher Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-white border border-border shadow-subtle">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('write')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              viewMode === 'write'
                ? 'bg-blue-600 text-white shadow-subtle'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
            }`}
          >
            <FileEdit className="w-3.5 h-3.5" />
            <span>Write & Self-Audit (Split Screen)</span>
          </button>

          <button
            onClick={() => setViewMode('exemplar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              viewMode === 'exemplar'
                ? 'bg-blue-600 text-white shadow-subtle'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Study Model Exemplar (PEEL Tokens)</span>
          </button>
        </div>

        {viewMode === 'write' && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-muted font-mono">
              Word Count: <strong className="text-text-primary">{wordCount}</strong>
            </span>
            <button
              onClick={handleClearDraft}
              className="text-xs text-text-muted hover:text-red-600 transition flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>
        )}
      </div>

      {viewMode === 'write' ? (
        /* Split Screen Workspace */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Pane: Stimulus Case Study & Writing Prompt */}
          <div className="space-y-4">
            <Card className="p-5">
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border">
                <FileText className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-bold text-text-primary uppercase tracking-wide">
                  Case Study Stimulus
                </h3>
              </div>

              {question.caseStimulus ? (
                <MarkdownRenderer
                  content={question.caseStimulus}
                  className="p-4 rounded-xl bg-surface-subtle border border-border/80 text-xs sm:text-sm text-text-secondary leading-relaxed font-sans"
                />
              ) : (
                <div className="p-4 text-xs text-text-muted italic bg-surface-subtle rounded-xl border border-border">
                  No additional stimulus provided; answer directly using theoretical syllabus definitions.
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-[11px] font-bold text-text-muted uppercase tracking-wide block mb-1">
                  Question Prompt:
                </span>
                <div className="text-sm font-semibold text-text-primary leading-snug">
                  <MarkdownRenderer content={question.question} inline />
                </div>
              </div>
            </Card>

            {/* Rubric Checklist embedded in left column for quick reference */}
            <Card className="p-5">
              <PeelRubric
                questionId={question.id}
                totalMarks={question.marks}
                rubricItems={question.rubricChecklist}
                levelBreakdown={'levelBreakdown' in question ? question.levelBreakdown : undefined}
              />
            </Card>
          </div>

          {/* Right Pane: Student Text Editor with Auto-Save */}
          <div className="space-y-4">
            <Card className="p-5 flex flex-col min-h-[500px]">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wide flex items-center gap-1.5">
                    <FileEdit className="w-3.5 h-3.5 text-blue-600" />
                    Your Response Workspace
                  </span>
                  <div className="inline-flex items-center p-0.5 rounded-lg bg-surface-subtle border border-border text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setResponseMode('write')}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        responseMode === 'write'
                          ? 'bg-white text-text-primary shadow-subtle font-semibold'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      Write
                    </button>
                    <button
                      type="button"
                      onClick={() => setResponseMode('preview')}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        responseMode === 'preview'
                          ? 'bg-white text-text-primary shadow-subtle font-semibold'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      Preview
                    </button>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Auto-saved
                </span>
              </div>

              {responseMode === 'preview' ? (
                <MarkdownRenderer
                  content={localDraft || '*No response written yet. Type in Write mode to preview.*'}
                  className="min-h-[360px] p-3.5 bg-surface-subtle/50 rounded-lg border border-border text-xs sm:text-sm text-text-secondary"
                />
              ) : (
                <textarea
                  value={localDraft}
                  onChange={handleTextChange}
                  placeholder="Type your exam response here... Use the PEEL structure (Point, Explanation, Evidence, Link) to maximize mark criteria."
                  className="w-full flex-1 p-3.5 rounded-lg border border-border text-sm text-text-primary leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[360px]"
                />
              )}

              <div className="mt-3 pt-3 border-t border-border/80 flex items-center justify-between text-xs text-text-muted">
                <span>Tip: Self-audit each sentence using the checklist on the left.</span>
                <span className="font-mono">{localDraft.length} characters</span>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        /* Study Model Exemplar Mode with Question Stimulus Banner */
        <div className="space-y-6">
          <Card className="p-5 bg-gradient-to-r from-blue-50/40 via-surface-subtle to-indigo-50/20 border-border">
            <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border/60">
              <FileText className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wide">
                Case Study Stimulus & Prompt
              </h3>
            </div>
            {question.caseStimulus && (
              <MarkdownRenderer
                content={question.caseStimulus}
                className="p-4 rounded-xl bg-white/90 border border-border/80 text-xs sm:text-sm text-text-secondary leading-relaxed font-sans mb-3"
              />
            )}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-wide block mb-1">
                Question Prompt:
              </span>
              <div className="text-sm font-semibold text-text-primary leading-snug">
                <MarkdownRenderer content={question.question} inline />
              </div>
            </div>
          </Card>

          <ExemplarHighlighter question={question} />
        </div>
      )}
    </div>
  );
}
