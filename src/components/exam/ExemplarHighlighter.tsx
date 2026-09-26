'use client';

import React, { useState } from 'react';
import { FourMarkQuestion, SixMarkQuestion, PEELPoint } from '@/types/curriculum';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { Eye, EyeOff, Sparkles, CheckCircle2, Award } from 'lucide-react';

interface ExemplarHighlighterProps {
  question: FourMarkQuestion | SixMarkQuestion;
}

export function ExemplarHighlighter({ question }: ExemplarHighlighterProps) {
  // Token visibility toggles for 4-mark PEEL
  const [showPoint, setShowPoint] = useState(true);
  const [showExplanation, setShowExplanation] = useState(true);
  const [showEvidence, setShowEvidence] = useState(true);
  const [showLink, setShowLink] = useState(true);

  const isFourMark = 'peelModelAnswer' in question;

  return (
    <div className="space-y-6">
      {/* 6-Mark IB Level Markbands */}
      {!isFourMark && 'levelBreakdown' in question && question.levelBreakdown && (
        <Card className="p-4 bg-surface-subtle border-border">
          <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-border">
            <Award className="w-4 h-4 text-amber-600" />
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">
              Official IB Markband Criteria
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {question.levelBreakdown.map((lvl) => (
              <div
                key={lvl.range}
                className="p-3 rounded-lg bg-white border border-border/80 text-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded text-[11px] border border-amber-200 inline-block mb-1.5">
                    Level {lvl.range === '1-2' ? '1' : lvl.range === '3-4' ? '2' : '3'} [{lvl.range} Marks]
                  </span>
                  <MarkdownRenderer
                    content={lvl.descriptor}
                    className="text-text-secondary text-[11px] leading-relaxed"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* 4-Mark PEEL Token Toggles */}
      {isFourMark && (
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-surface-subtle border border-border">
          <span className="text-xs font-bold text-text-primary uppercase tracking-wide">
            PEEL Element Filters:
          </span>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowPoint(!showPoint)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition border flex items-center gap-1.5 cursor-pointer ${
                showPoint
                  ? 'bg-blue-50 text-blue-700 border-blue-300'
                  : 'bg-white text-text-muted border-border'
              }`}
            >
              {showPoint ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <span>Point (P)</span>
            </button>

            <button
              onClick={() => setShowEvidence(!showEvidence)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition border flex items-center gap-1.5 cursor-pointer ${
                showEvidence
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-white text-text-muted border-border'
              }`}
            >
              {showEvidence ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <span>Evidence (E)</span>
            </button>

            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition border flex items-center gap-1.5 cursor-pointer ${
                showExplanation
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-white text-text-muted border-border'
              }`}
            >
              {showExplanation ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <span>Explanation (E)</span>
            </button>

            <button
              onClick={() => setShowLink(!showLink)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition border flex items-center gap-1.5 cursor-pointer ${
                showLink
                  ? 'bg-purple-50 text-purple-700 border-purple-300'
                  : 'bg-white text-text-muted border-border'
              }`}
            >
              {showLink ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <span>Link (L)</span>
            </button>
          </div>
        </div>
      )}

      {/* Model Answer Breakdown */}
      {isFourMark ? (
        <div className="space-y-4">
          <RenderPeelPoint
            pointData={(question as FourMarkQuestion).peelModelAnswer.point1}
            pointNumber={1}
            showPoint={showPoint}
            showExplanation={showExplanation}
            showEvidence={showEvidence}
            showLink={showLink}
          />
          <RenderPeelPoint
            pointData={(question as FourMarkQuestion).peelModelAnswer.point2}
            pointNumber={2}
            showPoint={showPoint}
            showExplanation={showExplanation}
            showEvidence={showEvidence}
            showLink={showLink}
          />
        </div>
      ) : (
        /* 6-Mark Analytical Exemplar Breakdown */
        <div className="space-y-5">
          {/* Perspective 1 */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
              <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="text-sm font-bold text-text-primary">
                Perspective 1: {(question as SixMarkQuestion).perspective1.title}
              </h3>
            </div>
            <div className="space-y-3">
              {(question as SixMarkQuestion).perspective1.points.map((p, i) => (
                <div key={i} className="text-xs leading-relaxed space-y-1">
                  <div className="font-semibold text-text-primary">&bull; {p.subPoint}</div>
                  <MarkdownRenderer content={p.elaboration} className="text-text-secondary pl-3 text-xs leading-relaxed" />
                </div>
              ))}
            </div>
          </Card>

          {/* Perspective 2 */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
              <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="text-sm font-bold text-text-primary">
                Perspective 2: {(question as SixMarkQuestion).perspective2.title}
              </h3>
            </div>
            <div className="space-y-3">
              {(question as SixMarkQuestion).perspective2.points.map((p, i) => (
                <div key={i} className="text-xs leading-relaxed space-y-1">
                  <div className="font-semibold text-text-primary">&bull; {p.subPoint}</div>
                  <MarkdownRenderer content={p.elaboration} className="text-text-secondary pl-3 text-xs leading-relaxed" />
                </div>
              ))}
            </div>
          </Card>

          {/* Evaluative Synthesis */}
          <Card className="p-5 bg-purple-50/30 border-purple-200">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-purple-200">
              <Sparkles className="w-4 h-4 text-purple-700" />
              <h3 className="text-sm font-bold text-purple-950">
                Synthesis, Trade-offs & Evaluative Conclusion (Level 3 Descriptor)
              </h3>
            </div>
            <MarkdownRenderer
              content={(question as SixMarkQuestion).synthesisAndEvaluation}
              className="text-xs text-purple-950 leading-relaxed font-normal"
            />
          </Card>
        </div>
      )}
    </div>
  );
}

function RenderPeelPoint({
  pointData,
  pointNumber,
  showPoint,
  showExplanation,
  showEvidence,
  showLink,
}: {
  pointData: PEELPoint;
  pointNumber: number;
  showPoint: boolean;
  showExplanation: boolean;
  showEvidence: boolean;
  showLink: boolean;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-stone-900 text-white font-bold text-[11px] flex items-center justify-center">
            {pointNumber}
          </span>
          <h4 className="text-sm font-bold text-text-primary">{pointData.title}</h4>
        </div>
        <span className="text-[11px] text-text-muted font-mono">[2 marks]</span>
      </div>

      <div className="space-y-2.5 text-xs leading-relaxed">
        {/* Point */}
        {showPoint && (
          <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-200/80">
            <strong className="text-blue-900 block mb-0.5 uppercase tracking-wide text-[10px]">
              Point (P):
            </strong>
            <MarkdownRenderer content={pointData.point} className="text-blue-950 text-xs leading-relaxed" />
          </div>
        )}

        {/* Evidence */}
        {showEvidence && (
          <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200/80">
            <strong className="text-emerald-900 block mb-0.5 uppercase tracking-wide text-[10px]">
              Evidence / Case Application (E):
            </strong>
            <MarkdownRenderer content={pointData.evidence} className="text-emerald-950 text-xs leading-relaxed" />
          </div>
        )}

        {/* Explanation */}
        {showExplanation && (
          <div className="p-3 rounded-lg bg-amber-50/50 border border-amber-200/80">
            <strong className="text-amber-900 block mb-0.5 uppercase tracking-wide text-[10px]">
              Explanation / Chain of Analysis (E):
            </strong>
            <MarkdownRenderer content={pointData.explanation} className="text-amber-950 text-xs leading-relaxed" />
          </div>
        )}

        {/* Link */}
        {showLink && (
          <div className="p-3 rounded-lg bg-purple-50/50 border border-purple-200/80">
            <strong className="text-purple-900 block mb-0.5 uppercase tracking-wide text-[10px]">
              Link to Question (L):
            </strong>
            <MarkdownRenderer content={pointData.link} className="text-purple-950 text-xs leading-relaxed" />
          </div>
        )}
      </div>
    </Card>
  );
}
