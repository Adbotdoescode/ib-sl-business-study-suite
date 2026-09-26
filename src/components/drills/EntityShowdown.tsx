'use client';

import React, { useState } from 'react';
import { 
  ENTITY_COMPARISONS, 
  MATCHMAKER_SCENARIOS 
} from '@/data/entity-showdown';
import { BusinessEntityType } from '@/types/curriculum';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { triggerConfetti } from '@/lib/confetti';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { 
  Scale, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Sparkles,
  Building2,
  Users,
  Briefcase,
  Building,
  HeartHandshake,
  RotateCcw,
  Trophy,
  Filter
} from 'lucide-react';

const ENTITY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  soleTrader: Briefcase,
  partnership: Users,
  ltd: Building2,
  plc: Building,
  socialEnterprise: HeartHandshake,
};

export function EntityShowdown() {
  const { state, recordMatchmakerCompleted } = useStudyProgress();
  const [activeTab, setActiveTab] = useState<'matrix' | 'matchmaker'>('matrix');
  const [selectedDimension, setSelectedDimension] = useState<string>('all');

  // Matchmaker state
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedEntity, setSelectedEntity] = useState<BusinessEntityType | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentScenario = MATCHMAKER_SCENARIOS[activeScenarioIndex];

  const handleSelectEntity = (entity: BusinessEntityType) => {
    if (isAnswered) return;
    setSelectedEntity(entity);
    setIsAnswered(true);

    if (entity === currentScenario.correctEntity) {
      triggerConfetti({ particleCount: 40 });
      recordMatchmakerCompleted(currentScenario.id);
    }
  };

  const handleNextScenario = () => {
    setSelectedEntity(null);
    setIsAnswered(false);
    if (activeScenarioIndex + 1 < MATCHMAKER_SCENARIOS.length) {
      setActiveScenarioIndex((prev) => prev + 1);
    } else {
      setActiveScenarioIndex(0);
    }
  };

  const handleSelectScenario = (index: number) => {
    setActiveScenarioIndex(index);
    setSelectedEntity(null);
    setIsAnswered(false);
  };

  const visibleComparisons = selectedDimension === 'all'
    ? ENTITY_COMPARISONS
    : ENTITY_COMPARISONS.filter((r) => r.dimension === selectedDimension);

  const allScenariosCompleted = MATCHMAKER_SCENARIOS.every((s) => state.matchmakerCompletedIds.includes(s.id));

  return (
    <div className="space-y-6">
      {/* Header and Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-border shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Scale className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Entity Showdown & Matchmaker
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Side-by-side comparison across 8 dimensions and 5 realistic startup case challenges.
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-subtle rounded-lg border border-border">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
              activeTab === 'matrix'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            1. Comparative Matrix (8 Dimensions)
          </button>
          <button
            onClick={() => setActiveTab('matchmaker')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              activeTab === 'matchmaker'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <span>2. Entity Matchmaker ({state.matchmakerCompletedIds.length}/{MATCHMAKER_SCENARIOS.length})</span>
            {allScenariosCompleted && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" title="All Solved" />
            )}
          </button>
        </div>
      </div>

      {activeTab === 'matrix' ? (
        /* 8-Dimension Comparative Matrix */
        <div className="space-y-4">
          {/* Dimension Selector Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-3 rounded-xl border border-border shadow-subtle">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-text-muted mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Dimension Filter:</span>
            </div>
            <button
              onClick={() => setSelectedDimension('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedDimension === 'all'
                  ? 'bg-stone-900 text-white shadow-subtle'
                  : 'bg-surface-subtle text-text-secondary hover:text-text-primary'
              }`}
            >
              All 8 Dimensions
            </button>
            {ENTITY_COMPARISONS.map((r) => (
              <button
                key={r.dimension}
                onClick={() => setSelectedDimension(r.dimension)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                  selectedDimension === r.dimension
                    ? 'bg-blue-600 text-white shadow-subtle'
                    : 'bg-surface-subtle text-text-secondary hover:text-text-primary'
                }`}
              >
                {r.dimension}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-border shadow-subtle overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-surface-subtle border-b border-border">
                  <th className="py-3 px-4 text-xs font-bold text-text-muted uppercase tracking-wider w-40 sticky left-0 bg-surface-subtle z-10">
                    Dimension
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-text-primary">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-stone-600" />
                      <span>Sole Trader</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-text-primary">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-stone-600" />
                      <span>Partnership</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-blue-900 bg-blue-50/50">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-blue-700" />
                      <span>Private Ltd (Ltd)</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-purple-900 bg-purple-50/50">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-purple-700" />
                      <span>Public Ltd (PLC)</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-emerald-900 bg-emerald-50/50">
                    <div className="flex items-center gap-1.5">
                      <HeartHandshake className="w-4 h-4 text-emerald-700" />
                      <span>Social Enterprise</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs leading-relaxed">
                {visibleComparisons.map((row) => (
                  <tr key={row.dimension} className="hover:bg-stone-50/60 transition">
                    <td className="py-3.5 px-4 font-semibold text-text-primary bg-white sticky left-0 z-10 border-r border-border/60">
                      {row.dimension}
                    </td>
                    <td className="py-3.5 px-4 text-text-secondary">
                      <MarkdownRenderer content={row.soleTrader} inline />
                    </td>
                    <td className="py-3.5 px-4 text-text-secondary">
                      <MarkdownRenderer content={row.partnership} inline />
                    </td>
                    <td className="py-3.5 px-4 text-blue-950 font-medium bg-blue-50/20">
                      <MarkdownRenderer content={row.ltd} inline />
                    </td>
                    <td className="py-3.5 px-4 text-purple-950 font-medium bg-purple-50/20">
                      <MarkdownRenderer content={row.plc} inline />
                    </td>
                    <td className="py-3.5 px-4 text-emerald-950 font-medium bg-emerald-50/20">
                      <MarkdownRenderer content={row.socialEnterprise} inline />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Entity Matchmaker Challenge */
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Scenario Step Navigation Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-xl border border-border shadow-subtle justify-center">
            {MATCHMAKER_SCENARIOS.map((scen, idx) => {
              const isCurrent = idx === activeScenarioIndex;
              const isSolved = state.matchmakerCompletedIds.includes(scen.id);

              return (
                <button
                  key={scen.id}
                  onClick={() => handleSelectScenario(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-subtle'
                      : isSolved
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-surface-subtle text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span>Scenario {idx + 1}</span>
                  {isSolved && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </button>
              );
            })}
          </div>

          <Card className="p-6">
            {/* Scenario Header */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-border/80 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-text-muted uppercase">
                  Scenario {activeScenarioIndex + 1} of {MATCHMAKER_SCENARIOS.length}
                </span>
                {state.matchmakerCompletedIds.includes(currentScenario.id) && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> Solved
                  </span>
                )}
              </div>
              <span className="text-xs text-text-muted">
                Target: Recommend optimal entity structure
              </span>
            </div>

            {/* Stimulus Case Vignette */}
            <h2 className="text-base sm:text-lg font-bold text-text-primary mb-2">
              {currentScenario.scenarioTitle}
            </h2>
            <MarkdownRenderer
              content={currentScenario.scenarioDescription}
              className="p-4 rounded-xl bg-surface-subtle border border-border/80 text-sm text-text-secondary leading-relaxed mb-6"
            />

            {/* Entity Selection Buttons */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block mb-2">
                Select Optimal Business Entity:
              </span>

              {(
                [
                  'sole-trader',
                  'partnership',
                  'private-limited-company',
                  'public-limited-company',
                  'social-enterprise',
                ] as BusinessEntityType[]
              ).map((entityKey) => {
                const isSelected = selectedEntity === entityKey;
                const isCorrect = entityKey === currentScenario.correctEntity;

                let buttonStyle = 'border-border bg-white hover:border-stone-400 hover:bg-stone-50';
                if (isAnswered) {
                  if (isCorrect) {
                    buttonStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500';
                  } else if (isSelected) {
                    buttonStyle = 'border-red-500 bg-red-50 text-red-950 ring-1 ring-red-500';
                  } else {
                    buttonStyle = 'border-border/60 opacity-60 bg-white';
                  }
                }

                const labels: Record<BusinessEntityType, string> = {
                  'sole-trader': 'Sole Trader',
                  'partnership': 'Partnership (with Deed)',
                  'private-limited-company': 'Private Limited Company (Ltd)',
                  'public-limited-company': 'Public Limited Company (PLC)',
                  'social-enterprise': 'Social Enterprise (Cooperative / NGO)',
                };

                return (
                  <button
                    key={entityKey}
                    disabled={isAnswered}
                    onClick={() => handleSelectEntity(entityKey)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition flex items-center justify-between cursor-pointer ${buttonStyle}`}
                  >
                    <span>{labels[entityKey]}</span>
                    {isAnswered && (
                      <span>
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-red-600" />
                        ) : null}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Rationale Card */}
            {isAnswered && (
              <div className="mt-6 pt-5 border-t border-border space-y-4 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-surface-subtle border border-border space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">
                      Examiner Justification & Distractor Breakdown
                    </h4>
                  </div>

                  <div className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-emerald-700">Why {currentScenario.correctEntityLabel} is Correct: </strong>
                    <MarkdownRenderer content={currentScenario.rationale} inline />
                  </div>

                  <div className="border-t border-border pt-2 space-y-1.5">
                    <span className="text-[11px] font-bold text-text-muted uppercase block">
                      Why Alternative Entities Fail:
                    </span>
                    {Object.entries(currentScenario.distractorExplanations).map(([ent, exp]) => (
                      <div key={ent} className="text-[11px] text-text-secondary leading-normal">
                        &bull; <strong className="text-text-primary capitalize">{ent.replace(/-/g, ' ')}: </strong>
                        <MarkdownRenderer content={exp} inline />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="primary"
                    onClick={handleNextScenario}
                    icon={<ChevronRight className="w-4 h-4" />}
                  >
                    {activeScenarioIndex + 1 < MATCHMAKER_SCENARIOS.length ? 'Next Case Scenario' : 'Review Scenario 1'}
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
