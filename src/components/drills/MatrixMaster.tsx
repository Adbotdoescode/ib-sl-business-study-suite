'use client';

import React, { useState } from 'react';
import { 
  AnsoffCard, 
  SWOTCard, 
  AnsoffQuadrant, 
  SWOTQuadrant 
} from '@/types/curriculum';
import { ANSOFF_CARDS, SWOT_CARDS, SWOT_STRATEGY_PAIRS } from '@/data/matrix-master';
import { triggerConfetti } from '@/lib/confetti';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Lightbulb, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  Layers,
  Compass
} from 'lucide-react';

export function MatrixMaster() {
  const { state, setMatrixMasterCompleted } = useStudyProgress();
  const [matrixType, setMatrixType] = useState<'ansoff' | 'swot'>('ansoff');
  const [activeTab, setActiveTab] = useState<'grid' | 'strategies'>('grid');

  // Placement state: maps card ID to quadrant
  const [ansoffPlacements, setAnsoffPlacements] = useState<Record<string, AnsoffQuadrant>>({});
  const [swotPlacements, setSwotPlacements] = useState<Record<string, SWOTQuadrant>>({});
  
  // Selection state for mobile tap-to-place
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  // Verification state: whether answers have been checked
  const [isChecked, setIsChecked] = useState(false);

  // Shuffled cards state to prevent grouping by answer in the tray
  const [shuffledCards, setShuffledCards] = useState<(AnsoffCard | SWOTCard)[]>([]);

  const shufflePool = (type: 'ansoff' | 'swot') => {
    const raw = type === 'ansoff' ? [...ANSOFF_CARDS] : [...SWOT_CARDS];
    for (let i = raw.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [raw[i], raw[j]] = [raw[j], raw[i]];
    }
    return raw;
  };

  React.useEffect(() => {
    setShuffledCards(shufflePool(matrixType));
  }, [matrixType]);

  // Active items based on matrixType
  const currentCards = shuffledCards.length > 0 ? shuffledCards : (matrixType === 'ansoff' ? ANSOFF_CARDS : SWOT_CARDS);
  const currentPlacements = matrixType === 'ansoff' ? ansoffPlacements : swotPlacements;

  // Unplaced cards
  const unplacedCards = currentCards.filter((c) => !currentPlacements[c.id]);

  // Handle Drag Start
  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    e.dataTransfer.setData('text/plain', cardId);
  };

  // Handle Drag Over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Handle Drop into Quadrant
  const handleDrop = (e: React.DragEvent, quadrant: string) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain');
    if (!cardId) return;
    placeCard(cardId, quadrant);
  };

  // Place card (used by drag-and-drop and tap-to-select)
  const placeCard = (cardId: string, quadrant: string) => {
    if (matrixType === 'ansoff') {
      setAnsoffPlacements((prev) => ({
        ...prev,
        [cardId]: quadrant as AnsoffQuadrant,
      }));
    } else {
      setSwotPlacements((prev) => ({
        ...prev,
        [cardId]: quadrant as SWOTQuadrant,
      }));
    }
    setSelectedCardId(null);
    setIsChecked(false);
  };

  // Remove card back to unplaced tray
  const removeCard = (cardId: string) => {
    if (matrixType === 'ansoff') {
      setAnsoffPlacements((prev) => {
        const next = { ...prev };
        delete next[cardId];
        return next;
      });
    } else {
      setSwotPlacements((prev) => {
        const next = { ...prev };
        delete next[cardId];
        return next;
      });
    }
    setIsChecked(false);
  };

  // Check answers
  const handleCheckAnswers = () => {
    setIsChecked(true);
    let correctCount = 0;
    currentCards.forEach((c) => {
      if (currentPlacements[c.id] === c.quadrant) {
        correctCount++;
      }
    });

    if (correctCount === currentCards.length) {
      triggerConfetti();
      setMatrixMasterCompleted(matrixType, true);
    }
  };

  // Reset grid
  const handleReset = () => {
    if (matrixType === 'ansoff') {
      setAnsoffPlacements({});
    } else {
      setSwotPlacements({});
    }
    setSelectedCardId(null);
    setIsChecked(false);
    setShuffledCards(shufflePool(matrixType));
  };

  // Scoring
  const totalCards = currentCards.length;
  const placedCount = Object.keys(currentPlacements).length;
  const correctCount = currentCards.filter((c) => currentPlacements[c.id] === c.quadrant).length;

  return (
    <div className="space-y-6">
      {/* Header and Matrix Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-border shadow-subtle">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700">
              <Compass className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Matrix Master
            </h1>
          </div>
          <p className="text-sm text-text-secondary mt-1">
            Sort real-world corporate scenarios into their strategic quadrants. Tap or drag cards into position.
          </p>
        </div>

        {/* Matrix Type Toggle */}
        <div className="flex items-center gap-2 p-1 bg-surface-subtle rounded-lg border border-border self-start sm:self-auto">
          <button
            onClick={() => {
              setMatrixType('ansoff');
              setActiveTab('grid');
              setSelectedCardId(null);
              setIsChecked(false);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              matrixType === 'ansoff'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <span>Ansoff Matrix (14 Cards)</span>
            {state.matrixMasterCompleted.ansoff && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" title="Completed" />
            )}
          </button>
          <button
            onClick={() => {
              setMatrixType('swot');
              setActiveTab('grid');
              setSelectedCardId(null);
              setIsChecked(false);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              matrixType === 'swot'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <span>SWOT Analysis (12 Cards)</span>
            {state.matrixMasterCompleted.swot && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" title="Completed" />
            )}
          </button>
        </div>
      </div>

      {/* SWOT Strategy Pairs Secondary Tab (if SWOT selected) */}
      {matrixType === 'swot' && (
        <div className="flex gap-2 border-b border-border pb-2">
          <button
            onClick={() => setActiveTab('grid')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'grid'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-text-secondary hover:text-text-primary border border-border'
            }`}
          >
            1. Drag & Drop Quadrant Sorter
          </button>
          <button
            onClick={() => setActiveTab('strategies')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'strategies'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-text-secondary hover:text-text-primary border border-border'
            }`}
          >
            2. Strategic Combinations (SO, WO, ST, WT)
          </button>
        </div>
      )}

      {/* Main Grid View */}
      {activeTab === 'grid' || matrixType === 'ansoff' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: 2x2 Matrix Grid */}
          <div className="lg:col-span-2 space-y-4">
            {matrixType === 'ansoff' ? (
              <AnsoffGrid
                placements={ansoffPlacements}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onRemoveCard={removeCard}
                onDragStart={handleDragStart}
                isChecked={isChecked}
                selectedCardId={selectedCardId}
                onQuadrantClick={(quadrant) => {
                  if (selectedCardId) placeCard(selectedCardId, quadrant);
                }}
                onSelectCard={(id) => setSelectedCardId(selectedCardId === id ? null : id)}
              />
            ) : (
              <SwotGrid
                placements={swotPlacements}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onRemoveCard={removeCard}
                onDragStart={handleDragStart}
                isChecked={isChecked}
                selectedCardId={selectedCardId}
                onQuadrantClick={(quadrant) => {
                  if (selectedCardId) placeCard(selectedCardId, quadrant);
                }}
                onSelectCard={(id) => setSelectedCardId(selectedCardId === id ? null : id)}
              />
            )}

            {/* Verification Bar & Action Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xl border border-border shadow-subtle">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-text-muted">
                  Placed: <strong className="text-text-primary font-mono">{placedCount}/{totalCards}</strong>
                </span>
                {isChecked && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Accuracy: {correctCount}/{totalCards} ({Math.round((correctCount / totalCards) * 100)}%)
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  icon={<RotateCcw className="w-3.5 h-3.5" />}
                >
                  Reset
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleCheckAnswers}
                  disabled={placedCount === 0}
                  icon={<Sparkles className="w-3.5 h-3.5" />}
                >
                  Check Answers
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Unassigned Cards Tray with drop return support */}
          <div className="space-y-4">
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData('text/plain');
                if (id) removeCard(id);
              }}
              className="bg-white rounded-xl border border-border shadow-subtle p-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-text-muted" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    Unassigned Cards ({unplacedCards.length})
                  </h3>
                </div>
                <span className="text-[11px] text-text-muted">
                  {selectedCardId ? 'Tap a quadrant to place' : 'Drag or tap to select'}
                </span>
              </div>

              <div className="mt-3 space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
                {unplacedCards.length === 0 ? (
                  <div className="p-8 text-center bg-surface-subtle rounded-lg border border-dashed border-border">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="text-xs font-medium text-text-primary">All cards placed!</p>
                    <p className="text-[11px] text-text-muted mt-0.5">Click &ldquo;Check Answers&rdquo; to test accuracy.</p>
                  </div>
                ) : (
                  unplacedCards.map((card) => {
                    const isSelected = selectedCardId === card.id;
                    return (
                      <div
                        key={card.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, card.id)}
                        onClick={() => setSelectedCardId(isSelected ? null : card.id)}
                        className={`p-3 rounded-lg border text-left cursor-pointer transition-all select-none ${
                          isSelected
                            ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/20 shadow-sm'
                            : 'bg-white border-border hover:border-stone-400 hover:shadow-subtle'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-text-primary">
                            {'company' in card ? card.company : card.entityName}
                          </span>
                          <span className="text-[10px] text-text-muted px-1.5 py-0.5 rounded bg-surface-subtle font-mono">
                            {card.id}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary leading-snug line-clamp-3">
                          <MarkdownRenderer content={card.scenario} inline />
                        </p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SWOT Strategic Combinations Tab */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SWOT_STRATEGY_PAIRS.map((pair) => (
            <Card key={pair.id} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                  {pair.strategyType}
                </span>
                <span className="text-xs font-semibold text-text-muted">
                  Posture: <strong className="text-text-primary">{pair.posture}</strong>
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-surface-subtle border border-border/80 text-xs">
                  <span className="font-semibold text-text-primary block mb-1">Internal Factor:</span>
                  <MarkdownRenderer content={pair.internalFactor} className="text-xs text-text-secondary" />
                </div>
                <div className="p-3 rounded-lg bg-surface-subtle border border-border/80 text-xs">
                  <span className="font-semibold text-text-primary block mb-1">External Factor:</span>
                  <MarkdownRenderer content={pair.externalFactor} className="text-xs text-text-secondary" />
                </div>
                <div className="p-3.5 rounded-lg bg-blue-50/60 border border-blue-200 text-xs">
                  <span className="font-semibold text-blue-900 block mb-1">Actionable Corporate Strategy:</span>
                  <MarkdownRenderer content={pair.actionableStrategy} className="text-xs text-blue-950 font-medium" />
                </div>
                <div className="pt-2 text-[11px] text-text-muted flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>Real-World Benchmark: <strong>{pair.realWorldExample}</strong></span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// Ansoff 2x2 Interactive Grid Component
// ----------------------------------------------------
interface AnsoffGridProps {
  placements: Record<string, AnsoffQuadrant>;
  onDrop: (e: React.DragEvent, quadrant: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onRemoveCard: (id: string) => void;
  onDragStart?: (e: React.DragEvent, id: string) => void;
  isChecked: boolean;
  selectedCardId: string | null;
  onQuadrantClick: (quadrant: string) => void;
  onSelectCard?: (id: string) => void;
}

function AnsoffGrid({
  placements,
  onDrop,
  onDragOver,
  onRemoveCard,
  onDragStart,
  isChecked,
  selectedCardId,
  onQuadrantClick,
  onSelectCard,
}: AnsoffGridProps) {
  const quadrants: { id: AnsoffQuadrant; title: string; risk: string; badge: string; color: string }[] = [
    {
      id: 'market-penetration',
      title: 'Market Penetration',
      risk: 'Lowest Risk (Existing Product / Existing Market)',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      color: 'border-emerald-300 bg-emerald-50/20',
    },
    {
      id: 'product-development',
      title: 'Product Development',
      risk: 'Moderate Risk (New Product / Existing Market)',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      color: 'border-blue-300 bg-blue-50/20',
    },
    {
      id: 'market-development',
      title: 'Market Development',
      risk: 'Moderate Risk (Existing Product / New Market)',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      color: 'border-amber-300 bg-amber-50/20',
    },
    {
      id: 'diversification',
      title: 'Diversification',
      risk: 'Highest Risk (New Product / New Market)',
      badge: 'bg-purple-50 text-purple-800 border-purple-200',
      color: 'border-purple-300 bg-purple-50/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {quadrants.map((q) => {
        const assignedCards = ANSOFF_CARDS.filter((c) => placements[c.id] === q.id);
        const isTarget = !!selectedCardId;

        return (
          <div
            key={q.id}
            onDrop={(e) => onDrop(e, q.id)}
            onDragOver={onDragOver}
            onClick={() => onQuadrantClick(q.id)}
            className={`min-h-[260px] p-4 rounded-xl border-2 transition-all flex flex-col justify-between ${
              q.color
            } ${isTarget ? 'hover:border-blue-500 hover:ring-2 hover:ring-blue-500/30 cursor-pointer' : ''}`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-sm font-bold text-text-primary tracking-tight">{q.title}</h4>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${q.badge}`}>
                  {assignedCards.length}
                </span>
              </div>
              <p className="text-[11px] text-text-muted mb-3">{q.risk}</p>

              {/* Cards in this Quadrant */}
              <div className="space-y-2">
                {assignedCards.map((card) => {
                  const isCorrect = card.quadrant === q.id;
                  const isSelected = selectedCardId === card.id;
                  return (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => {
                        e.stopPropagation();
                        onDragStart?.(e, card.id);
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCard?.(card.id);
                      }}
                      className={`p-2.5 rounded-lg bg-white border text-left transition cursor-pointer select-none ${
                        isSelected ? 'ring-2 ring-blue-500 shadow-sm' : ''
                      } ${
                        isChecked
                          ? isCorrect
                            ? 'border-emerald-500 bg-emerald-50/40 text-emerald-950'
                            : 'border-red-400 bg-red-50/40 text-red-950'
                          : 'border-border shadow-subtle hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold">{card.company}</span>
                        <div className="flex items-center gap-1">
                          {isChecked && (
                            isCorrect ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5 text-red-600" />
                            )
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveCard(card.id);
                            }}
                            className="text-text-muted hover:text-red-600 p-1 rounded hover:bg-red-50 text-xs ml-1 flex items-center justify-center min-w-[28px] min-h-[28px]"
                            title="Remove card"
                            aria-label={`Remove ${card.company}`}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      <p className="text-[11px] text-text-secondary leading-snug line-clamp-2">
                        <MarkdownRenderer content={card.scenario} inline />
                      </p>
                      {isChecked && !isCorrect && (
                        <p className="text-[10px] text-red-700 mt-1.5 font-medium border-t border-red-200 pt-1">
                          Correct: {quadrants.find((item) => item.id === card.quadrant)?.title || card.quadrant} &bull; <MarkdownRenderer content={card.rationale} inline />
                        </p>
                      )}
                      {isChecked && isCorrect && (
                        <p className="text-[10px] text-emerald-800 mt-1.5 font-medium border-t border-emerald-200 pt-1">
                          Rationale: <MarkdownRenderer content={card.rationale} inline />
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {assignedCards.length === 0 && (
              <div className="py-8 text-center text-xs text-text-muted/70 border border-dashed border-border/70 rounded-lg">
                Drop {q.title} scenarios here
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ----------------------------------------------------
// SWOT 2x2 Interactive Grid Component
// ----------------------------------------------------
interface SwotGridProps {
  placements: Record<string, SWOTQuadrant>;
  onDrop: (e: React.DragEvent, quadrant: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onRemoveCard: (id: string) => void;
  onDragStart?: (e: React.DragEvent, id: string) => void;
  isChecked: boolean;
  selectedCardId: string | null;
  onQuadrantClick: (quadrant: string) => void;
  onSelectCard?: (id: string) => void;
}

function SwotGrid({
  placements,
  onDrop,
  onDragOver,
  onRemoveCard,
  onDragStart,
  isChecked,
  selectedCardId,
  onQuadrantClick,
  onSelectCard,
}: SwotGridProps) {
  const quadrants: { id: SWOTQuadrant; title: string; subtitle: string; badge: string; color: string }[] = [
    {
      id: 'strength',
      title: 'Strengths (S)',
      subtitle: 'Internal & Favourable (Core competencies, patents, assets)',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      color: 'border-emerald-300 bg-emerald-50/20',
    },
    {
      id: 'weakness',
      title: 'Weaknesses (W)',
      subtitle: 'Internal & Unfavourable (Deficiencies, capacity bottlenecks)',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      color: 'border-blue-300 bg-blue-50/20',
    },
    {
      id: 'opportunity',
      title: 'Opportunities (O)',
      subtitle: 'External & Favourable (STEEPLE openings, market growth)',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      color: 'border-amber-300 bg-amber-50/20',
    },
    {
      id: 'threat',
      title: 'Threats (T)',
      subtitle: 'External & Unfavourable (Competitor moves, macro shocks)',
      badge: 'bg-purple-50 text-purple-800 border-purple-200',
      color: 'border-purple-300 bg-purple-50/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {quadrants.map((q) => {
        const assignedCards = SWOT_CARDS.filter((c) => placements[c.id] === q.id);
        const isTarget = !!selectedCardId;

        return (
          <div
            key={q.id}
            onDrop={(e) => onDrop(e, q.id)}
            onDragOver={onDragOver}
            onClick={() => onQuadrantClick(q.id)}
            className={`min-h-[260px] p-4 rounded-xl border-2 transition-all flex flex-col justify-between ${
              q.color
            } ${isTarget ? 'hover:border-blue-500 hover:ring-2 hover:ring-blue-500/30 cursor-pointer' : ''}`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-sm font-bold text-text-primary tracking-tight">{q.title}</h4>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${q.badge}`}>
                  {assignedCards.length}
                </span>
              </div>
              <p className="text-[11px] text-text-muted mb-3">{q.subtitle}</p>

              {/* Cards in this Quadrant */}
              <div className="space-y-2">
                {assignedCards.map((card) => {
                  const isCorrect = card.quadrant === q.id;
                  const isSelected = selectedCardId === card.id;
                  return (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => {
                        e.stopPropagation();
                        onDragStart?.(e, card.id);
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCard?.(card.id);
                      }}
                      className={`p-2.5 rounded-lg bg-white border text-left transition cursor-pointer select-none ${
                        isSelected ? 'ring-2 ring-blue-500 shadow-sm' : ''
                      } ${
                        isChecked
                          ? isCorrect
                            ? 'border-emerald-500 bg-emerald-50/40 text-emerald-950'
                            : 'border-red-400 bg-red-50/40 text-red-950'
                          : 'border-border shadow-subtle hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold">{card.entityName}</span>
                        <div className="flex items-center gap-1">
                          {isChecked && (
                            isCorrect ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5 text-red-600" />
                            )
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveCard(card.id);
                            }}
                            className="text-text-muted hover:text-red-600 p-1 rounded hover:bg-red-50 text-xs ml-1 flex items-center justify-center min-w-[28px] min-h-[28px]"
                            title="Remove card"
                            aria-label={`Remove ${card.entityName}`}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      <p className="text-[11px] text-text-secondary leading-snug line-clamp-2">
                        <MarkdownRenderer content={card.scenario} inline />
                      </p>
                      {isChecked && !isCorrect && (
                        <p className="text-[10px] text-red-700 mt-1.5 font-medium border-t border-red-200 pt-1">
                          Correct: {card.quadrant.toUpperCase()} &bull; <MarkdownRenderer content={card.rationale} inline />
                        </p>
                      )}
                      {isChecked && isCorrect && (
                        <p className="text-[10px] text-emerald-800 mt-1.5 font-medium border-t border-emerald-200 pt-1">
                          Rationale: <MarkdownRenderer content={card.rationale} inline />
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {assignedCards.length === 0 && (
              <div className="py-8 text-center text-xs text-text-muted/70 border border-dashed border-border/70 rounded-lg">
                Drop {q.title} scenarios here
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
