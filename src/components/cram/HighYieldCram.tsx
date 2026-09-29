'use client';

import React, { useState } from 'react';
import { 
  CRAM_DEFINITIONS, 
  CRAM_DISTINCTIONS, 
  CRAM_GOLDEN_RULES 
} from '@/data/cram-mode';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { 
  Clock, 
  Check, 
  RotateCcw, 
  AlertTriangle, 
  Sparkles, 
  BookMarked, 
  Scale, 
  KeyRound,
  Eye,
  EyeOff
} from 'lucide-react';

export function HighYieldCram() {
  const { 
    state, 
    toggleCramHidden, 
    resetCramFilters 
  } = useStudyProgress();

  const [activeCategory, setActiveCategory] = useState<'definitions' | 'distinctions' | 'rules'>('definitions');
  const [showHiddenItems, setShowHiddenItems] = useState(false);

  // Filter lists based on hidden state
  const visibleDefs = CRAM_DEFINITIONS.filter(
    (d) => showHiddenItems || !state.cramHiddenDefs.includes(d.id)
  );
  const visibleDistinctions = CRAM_DISTINCTIONS.filter(
    (d) => showHiddenItems || !state.cramHiddenDistinctions.includes(d.id)
  );
  const visibleRules = CRAM_GOLDEN_RULES.filter(
    (r) => showHiddenItems || !state.cramHiddenRules.includes(r.id)
  );

  return (
    <div className="space-y-6">
      {/* Header and Category Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-border shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Clock className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              10-Minute High-Yield Cram Mode
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              High-frequency exam definitions, high-stakes distinctions, and golden matrix decision rules.
            </p>
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-subtle rounded-lg border border-border">
          <button
            onClick={() => setActiveCategory('definitions')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'definitions'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            Definitions ({state.cramHiddenDefs.length}/{CRAM_DEFINITIONS.length} Mastered)
          </button>
          <button
            onClick={() => setActiveCategory('distinctions')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'distinctions'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            Distinctions ({state.cramHiddenDistinctions.length}/{CRAM_DISTINCTIONS.length} Mastered)
          </button>
          <button
            onClick={() => setActiveCategory('rules')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'rules'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            Golden Rules ({state.cramHiddenRules.length}/{CRAM_GOLDEN_RULES.length} Mastered)
          </button>
        </div>
      </div>

      {/* Filter and Reset Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-border shadow-subtle">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHiddenItems(!showHiddenItems)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface-subtle hover:bg-stone-200/60 text-xs font-medium text-text-secondary transition"
          >
            {showHiddenItems ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showHiddenItems ? 'Hide Mastered Items' : 'Show All (Including Mastered)'}</span>
          </button>
        </div>

        <button
          onClick={resetCramFilters}
          className="flex items-center gap-1 text-xs text-text-muted hover:text-red-600 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Mastery Filters</span>
        </button>
      </div>

      {/* Content Feed */}
      {activeCategory === 'definitions' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleDefs.length === 0 ? (
            <div className="col-span-2 p-12 text-center bg-white rounded-xl border border-border">
              <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-text-primary">All 20 definitions mastered!</p>
              <p className="text-xs text-text-muted mt-1">
                Click &ldquo;Show All&rdquo; or &ldquo;Reset Mastery Filters&rdquo; to review again.
              </p>
            </div>
          ) : (
            visibleDefs.map((def) => {
              const isMastered = state.cramHiddenDefs.includes(def.id);
              return (
                <Card key={def.id} className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-border/80">
                      <div>
                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-wide block">
                          {def.subunit}
                        </span>
                        <h3 className="text-base font-bold text-text-primary">{def.term}</h3>
                      </div>
                      <button
                        onClick={() => toggleCramHidden('def', def.id)}
                        className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border transition cursor-pointer ${
                          isMastered
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-surface-subtle text-text-muted border-border hover:border-stone-400'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                        <span>{isMastered ? 'Mastered' : 'Got it (Hide)'}</span>
                      </button>
                    </div>

                    <MarkdownRenderer content={def.definition} className="text-xs text-text-secondary leading-relaxed mb-3" />

                    {/* Formula or Example if available */}
                    {def.formulaOrExample && (
                      <div className="p-2 rounded bg-surface-subtle border border-border/80 font-mono text-[11px] text-text-primary mb-3">
                        {def.formulaOrExample}
                      </div>
                    )}
                  </div>

                  {/* Key Exam Term Tokens */}
                  <div className="pt-2 border-t border-border/80">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wide block mb-1.5">
                      Examiner Key Tokens:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {def.keyExamTokens.map((token, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 text-[10px] font-medium border border-blue-200/70"
                        >
                          {token}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      )}

      {/* Top 5 High-Stakes Distinctions */}
      {activeCategory === 'distinctions' && (
        <div className="space-y-4">
          {visibleDistinctions.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-xl border border-border">
              <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-text-primary">All 5 high-stakes distinctions mastered!</p>
              <p className="text-xs text-text-muted mt-1">
                Click &ldquo;Show All&rdquo; or &ldquo;Reset Mastery Filters&rdquo; to review contrast statements and exam traps again.
              </p>
            </div>
          ) : (
            visibleDistinctions.map((dist) => {
              const isMastered = state.cramHiddenDistinctions.includes(dist.id);
              return (
                <Card key={dist.id} className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-text-muted uppercase tracking-wide font-mono">
                        {dist.id}
                      </span>
                      <h3 className="text-base font-bold text-text-primary">
                        {dist.conceptA} <span className="text-text-muted font-normal">vs.</span> {dist.conceptB}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-text-muted">
                        Criteria: <strong className="text-text-primary">{dist.comparisonCriteria}</strong>
                      </span>
                      <button
                        onClick={() => toggleCramHidden('dist', dist.id)}
                        className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border transition cursor-pointer ${
                          isMastered
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-surface-subtle text-text-muted border-border hover:border-stone-400'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                        <span>{isMastered ? 'Mastered' : 'Got it (Hide)'}</span>
                      </button>
                    </div>
                  </div>

                  <MarkdownRenderer content={dist.contrastStatement} className="p-3.5 rounded-lg bg-surface-subtle border border-border/80 text-xs sm:text-sm text-text-secondary leading-relaxed mb-3" />

                  {/* Exam Trap Warning Callout */}
                  <div className="p-3 rounded-lg bg-red-50/60 border border-red-200 text-xs text-red-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block mb-0.5">Common IB Exam Trap:</strong>
                      <MarkdownRenderer content={dist.examTrapWarning} inline />
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      )}

      {/* Golden Matrix & Toolkit Rules */}
      {activeCategory === 'rules' && (
        <div className="space-y-4">
          {visibleRules.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-xl border border-border">
              <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-text-primary">All matrix and toolkit decision rules mastered!</p>
              <p className="text-xs text-text-muted mt-1">
                Click &ldquo;Show All&rdquo; or &ldquo;Reset Mastery Filters&rdquo; to test your SWOT, Ansoff, STEEPLE, and BCG decision protocols.
              </p>
            </div>
          ) : (
            visibleRules.map((rule) => {
              const isMastered = state.cramHiddenRules.includes(rule.id);
              const badgeVariant =
                rule.category === 'SWOT'
                  ? 'ao3'
                  : rule.category === 'Ansoff'
                  ? 'ao1'
                  : rule.category === 'STEEPLE'
                  ? 'warning'
                  : rule.category === 'BCG'
                  ? 'success'
                  : 'neutral';

              return (
                <Card key={rule.id} className="p-5">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Badge variant={badgeVariant} size="sm">
                        {rule.category}
                      </Badge>
                      <h3 className="text-base font-bold text-text-primary">{rule.ruleTitle}</h3>
                    </div>

                    <button
                      onClick={() => toggleCramHidden('rule', rule.id)}
                      className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border transition cursor-pointer ${
                        isMastered
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : 'bg-surface-subtle text-text-muted border-border hover:border-stone-400'
                      }`}
                    >
                      <Check className="w-3 h-3" />
                      <span>{isMastered ? 'Mastered' : 'Got it (Hide)'}</span>
                    </button>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-lg bg-blue-50/40 border border-blue-200 text-blue-950">
                      <strong className="block mb-0.5 text-blue-900 uppercase tracking-wide text-[10px]">
                        Core Principle:
                      </strong>
                      <MarkdownRenderer content={rule.corePrinciple} className="text-blue-950 text-xs leading-relaxed" />
                    </div>

                    <div className="p-3 rounded-lg bg-surface-subtle border border-border/80 text-text-secondary">
                      <strong className="block mb-0.5 text-text-primary uppercase tracking-wide text-[10px]">
                        Strategic Action Protocol:
                      </strong>
                      <MarkdownRenderer content={rule.actionProtocol} className="text-text-secondary text-xs leading-relaxed" />
                    </div>

                    <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200 text-amber-900">
                      <strong className="block mb-0.5 text-amber-800 uppercase tracking-wide text-[10px]">
                        Exam Application Tip:
                      </strong>
                      <MarkdownRenderer content={rule.examApplicationTip} className="text-amber-900 text-xs leading-relaxed" />
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
