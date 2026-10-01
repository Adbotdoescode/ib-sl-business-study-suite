'use client';

import React, { useState } from 'react';
import { 
  AnsoffCard, 
  SWOTCard, 
  STEEPLECard,
  BCGCard,
  StakeholderCard,
  AnsoffQuadrant, 
  SWOTQuadrant,
  STEEPLECategory,
  BCGQuadrant,
  StakeholderQuadrant
} from '@/types/curriculum';
import { 
  ANSOFF_CARDS, 
  SWOT_CARDS, 
  SWOT_STRATEGY_PAIRS,
  STEEPLE_CARDS,
  BCG_CARDS,
  STAKEHOLDER_CARDS 
} from '@/data/matrix-master';
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
  Compass,
  Globe2,
  PieChart,
  Users
} from 'lucide-react';

export type MatrixType = 'ansoff' | 'swot' | 'steeple' | 'bcg' | 'stakeholders';

function getCardText(card: AnsoffCard | SWOTCard | STEEPLECard | BCGCard | StakeholderCard): string {
  if ('scenario' in card) return card.scenario;
  if ('productName' in card) return card.productName + ' (' + card.company + '): ' + card.rationale;
  if ('organizationContext' in card) return '**' + card.organizationContext + '**: ' + card.rationale;
  return '';
}

export function MatrixMaster() {
  const { state, setMatrixMasterCompleted } = useStudyProgress();
  const [matrixType, setMatrixType] = useState<MatrixType>('ansoff');
  const [activeTab, setActiveTab] = useState<'grid' | 'strategies'>('grid');

  // Placement state: maps card ID to quadrant or category
  const [ansoffPlacements, setAnsoffPlacements] = useState<Record<string, AnsoffQuadrant>>({});
  const [swotPlacements, setSwotPlacements] = useState<Record<string, SWOTQuadrant>>({});
  const [steeplePlacements, setSteeplePlacements] = useState<Record<string, STEEPLECategory>>({});
  const [bcgPlacements, setBcgPlacements] = useState<Record<string, BCGQuadrant>>({});
  const [stakeholderPlacements, setStakeholderPlacements] = useState<Record<string, StakeholderQuadrant>>({});
  
  // Selection state for mobile tap-to-place
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  // Verification state: whether answers have been checked
  const [isChecked, setIsChecked] = useState(false);

  // Shuffled cards state to prevent grouping by answer in the tray
  const [shuffledCards, setShuffledCards] = useState<(AnsoffCard | SWOTCard | STEEPLECard | BCGCard | StakeholderCard)[]>([]);

  const shufflePool = (type: MatrixType) => {
    let raw: (AnsoffCard | SWOTCard | STEEPLECard | BCGCard | StakeholderCard)[] = [];
    if (type === 'ansoff') raw = [...ANSOFF_CARDS];
    else if (type === 'swot') raw = [...SWOT_CARDS];
    else if (type === 'steeple') raw = [...STEEPLE_CARDS];
    else if (type === 'bcg') raw = [...BCG_CARDS];
    else raw = [...STAKEHOLDER_CARDS];

    for (let i = raw.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [raw[i], raw[j]] = [raw[j], raw[i]];
    }
    setShuffledCards(raw);
  };

  const currentCards = shuffledCards.length > 0 
    ? shuffledCards 
    : (matrixType === 'ansoff' 
        ? ANSOFF_CARDS 
        : matrixType === 'swot' 
        ? SWOT_CARDS 
        : matrixType === 'steeple' 
        ? STEEPLE_CARDS 
        : matrixType === 'bcg'
        ? BCG_CARDS
        : STAKEHOLDER_CARDS);

  const getPlacement = (id: string): string | undefined => {
    if (matrixType === 'ansoff') return ansoffPlacements[id];
    if (matrixType === 'swot') return swotPlacements[id];
    if (matrixType === 'steeple') return steeplePlacements[id];
    if (matrixType === 'bcg') return bcgPlacements[id];
    return stakeholderPlacements[id];
  };

  const unassignedCards = currentCards.filter((c) => !getPlacement(c.id));

  // Handle Drag Start
  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    e.dataTransfer.setData('text/plain', cardId);
    e.dataTransfer.effectAllowed = 'move';
    setSelectedCardId(cardId);
  };

  // Handle Drag Over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  // Handle Drop onto a quadrant / category
  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain') || selectedCardId;
    if (cardId) {
      placeCard(cardId, targetId);
    }
  };

  // Direct card placement (for drag or tap)
  const placeCard = (cardId: string, targetId: string) => {
    if (matrixType === 'ansoff') {
      setAnsoffPlacements((prev) => ({
        ...prev,
        [cardId]: targetId as AnsoffQuadrant,
      }));
    } else if (matrixType === 'swot') {
      setSwotPlacements((prev) => ({
        ...prev,
        [cardId]: targetId as SWOTQuadrant,
      }));
    } else if (matrixType === 'steeple') {
      setSteeplePlacements((prev) => ({
        ...prev,
        [cardId]: targetId as STEEPLECategory,
      }));
    } else if (matrixType === 'bcg') {
      setBcgPlacements((prev) => ({
        ...prev,
        [cardId]: targetId as BCGQuadrant,
      }));
    } else {
      setStakeholderPlacements((prev) => ({
        ...prev,
        [cardId]: targetId as StakeholderQuadrant,
      }));
    }
    setSelectedCardId(null);
    setIsChecked(false);
  };

  // Remove card from matrix back to tray
  const removeCard = (cardId: string) => {
    if (matrixType === 'ansoff') {
      setAnsoffPlacements((prev) => {
        const next = { ...prev };
        delete next[cardId];
        return next;
      });
    } else if (matrixType === 'swot') {
      setSwotPlacements((prev) => {
        const next = { ...prev };
        delete next[cardId];
        return next;
      });
    } else if (matrixType === 'steeple') {
      setSteeplePlacements((prev) => {
        const next = { ...prev };
        delete next[cardId];
        return next;
      });
    } else if (matrixType === 'bcg') {
      setBcgPlacements((prev) => {
        const next = { ...prev };
        delete next[cardId];
        return next;
      });
    } else {
      setStakeholderPlacements((prev) => {
        const next = { ...prev };
        delete next[cardId];
        return next;
      });
    }
    setIsChecked(false);
  };

  // Reset drill
  const handleReset = () => {
    if (matrixType === 'ansoff') setAnsoffPlacements({});
    else if (matrixType === 'swot') setSwotPlacements({});
    else if (matrixType === 'steeple') setSteeplePlacements({});
    else if (matrixType === 'bcg') setBcgPlacements({});
    else setStakeholderPlacements({});
    setSelectedCardId(null);
    setIsChecked(false);
    shufflePool(matrixType);
  };

  // Check answers and calculate score
  const handleCheckAnswers = () => {
    setIsChecked(true);
    let correct = 0;
    let total = 0;

    if (matrixType === 'ansoff') {
      total = ANSOFF_CARDS.length;
      correct = ANSOFF_CARDS.filter((c) => ansoffPlacements[c.id] === c.quadrant).length;
    } else if (matrixType === 'swot') {
      total = SWOT_CARDS.length;
      correct = SWOT_CARDS.filter((c) => swotPlacements[c.id] === c.quadrant).length;
    } else if (matrixType === 'steeple') {
      total = STEEPLE_CARDS.length;
      correct = STEEPLE_CARDS.filter((c) => steeplePlacements[c.id] === c.category).length;
    } else if (matrixType === 'bcg') {
      total = BCG_CARDS.length;
      correct = BCG_CARDS.filter((c) => bcgPlacements[c.id] === c.quadrant).length;
    } else {
      total = STAKEHOLDER_CARDS.length;
      correct = STAKEHOLDER_CARDS.filter((c) => stakeholderPlacements[c.id] === c.quadrant).length;
    }

    if (correct === total && total > 0) {
      triggerConfetti();
      setMatrixMasterCompleted(matrixType, true);
    }
  };

  const totalCards = matrixType === 'ansoff' 
    ? ANSOFF_CARDS.length 
    : matrixType === 'swot' 
    ? SWOT_CARDS.length 
    : matrixType === 'steeple' 
    ? STEEPLE_CARDS.length 
    : matrixType === 'bcg'
    ? BCG_CARDS.length
    : STAKEHOLDER_CARDS.length;

  const placedCount = matrixType === 'ansoff'
    ? Object.keys(ansoffPlacements).length
    : matrixType === 'swot'
    ? Object.keys(swotPlacements).length
    : matrixType === 'steeple'
    ? Object.keys(steeplePlacements).length
    : matrixType === 'bcg'
    ? Object.keys(bcgPlacements).length
    : Object.keys(stakeholderPlacements).length;

  const correctCount = matrixType === 'ansoff'
    ? ANSOFF_CARDS.filter((c) => ansoffPlacements[c.id] === c.quadrant).length
    : matrixType === 'swot'
    ? SWOT_CARDS.filter((c) => swotPlacements[c.id] === c.quadrant).length
    : matrixType === 'steeple'
    ? STEEPLE_CARDS.filter((c) => steeplePlacements[c.id] === c.category).length
    : matrixType === 'bcg'
    ? BCG_CARDS.filter((c) => bcgPlacements[c.id] === c.quadrant).length
    : STAKEHOLDER_CARDS.filter((c) => stakeholderPlacements[c.id] === c.quadrant).length;

  return (
    <div className="space-y-6">
      {/* Top Header Bar & Mode Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-border shadow-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700">
              <Compass className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              BMT Matrix Master Studio
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary">
            Drag and drop or tap to classify scenarios into Ansoff, SWOT, STEEPLE, and BCG matrix quadrants.
          </p>
        </div>

        {/* Matrix Type Toggle */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-subtle rounded-xl border border-border self-start sm:self-auto">
          <button
            onClick={() => {
              setMatrixType('ansoff');
              setActiveTab('grid');
              setSelectedCardId(null);
              setIsChecked(false);
              shufflePool('ansoff');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
              matrixType === 'ansoff'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <span>Ansoff Matrix (14)</span>
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
              shufflePool('swot');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
              matrixType === 'swot'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <span>SWOT (12)</span>
            {state.matrixMasterCompleted.swot && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" title="Completed" />
            )}
          </button>

          <button
            onClick={() => {
              setMatrixType('steeple');
              setActiveTab('grid');
              setSelectedCardId(null);
              setIsChecked(false);
              shufflePool('steeple');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
              matrixType === 'steeple'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>STEEPLE (14)</span>
            {state.matrixMasterCompleted.steeple && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" title="Completed" />
            )}
          </button>

          <button
            onClick={() => {
              setMatrixType('bcg');
              setActiveTab('grid');
              setSelectedCardId(null);
              setIsChecked(false);
              shufflePool('bcg');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
              matrixType === 'bcg'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <PieChart className="w-3.5 h-3.5" />
            <span>BCG Matrix (10)</span>
            {state.matrixMasterCompleted.bcg && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" title="Completed" />
            )}
          </button>

          <button
            onClick={() => {
              setMatrixType('stakeholders');
              setActiveTab('grid');
              setSelectedCardId(null);
              setIsChecked(false);
              shufflePool('stakeholders');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
              matrixType === 'stakeholders'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Stakeholders (12)</span>
            {state.matrixMasterCompleted.stakeholders && (
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
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              activeTab === 'grid'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-text-secondary hover:text-text-primary border border-border'
            }`}
          >
            Quadrant Sorter
          </button>
          <button
            onClick={() => setActiveTab('strategies')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'strategies'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-text-secondary hover:text-text-primary border border-border'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>TOWS Strategic Combinations</span>
          </button>
        </div>
      )}

      {/* Main Interactive Grid Workspace */}
      {activeTab === 'grid' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Matrix Grid Surface */}
          <div className="lg:col-span-2 space-y-4">
            {matrixType === 'ansoff' && (
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
            )}

            {matrixType === 'swot' && (
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

            {matrixType === 'steeple' && (
              <SteepleGrid
                placements={steeplePlacements}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onRemoveCard={removeCard}
                onDragStart={handleDragStart}
                isChecked={isChecked}
                selectedCardId={selectedCardId}
                onCategoryClick={(cat) => {
                  if (selectedCardId) placeCard(selectedCardId, cat);
                }}
                onSelectCard={(id) => setSelectedCardId(selectedCardId === id ? null : id)}
              />
            )}

            {matrixType === 'bcg' && (
              <BcgGrid
                placements={bcgPlacements}
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

            {matrixType === 'stakeholders' && (
              <StakeholderGrid
                placements={stakeholderPlacements}
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
                  Verify Placements
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Unassigned Cards Tray */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-primary uppercase tracking-wide">
                Scenario Bank ({unassignedCards.length} remaining)
              </span>
              <span className="text-[11px] text-text-muted">
                {selectedCardId ? 'Tap a zone to drop' : 'Drag card or tap to select'}
              </span>
            </div>

            <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
              {unassignedCards.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-xl border border-dashed border-border text-text-muted">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2 opacity-80" />
                  <p className="text-xs font-semibold text-text-primary">All scenarios placed!</p>
                  <p className="text-[11px] text-text-secondary mt-1">Click &ldquo;Verify Placements&rdquo; to test your accuracy.</p>
                </div>
              ) : (
                unassignedCards.map((card) => {
                  const isSelected = selectedCardId === card.id;
                  const companyName = 'company' in card 
                    ? card.company 
                    : 'businessName' in card 
                    ? card.businessName 
                    : 'stakeholderName' in card 
                    ? card.stakeholderName 
                    : 'entityName' in card 
                    ? (card as { entityName: string }).entityName 
                    : (card as { id: string }).id;

                  return (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, card.id)}
                      onClick={() => setSelectedCardId(isSelected ? null : card.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-grab active:cursor-grabbing transition-all select-none bg-white shadow-subtle ${
                        isSelected
                          ? 'border-blue-500 ring-2 ring-blue-500/20 bg-blue-50/20'
                          : 'border-border hover:border-stone-400 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-text-primary">
                          {companyName}
                        </span>
                        {'impactType' in card && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            card.impactType === 'opportunity' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                          }`}>
                            {card.impactType.toUpperCase()}
                          </span>
                        )}
                        {'riskLevel' in card && (
                          <span className="text-[10px] font-mono text-text-muted uppercase">
                            {card.riskLevel} risk
                          </span>
                        )}
                        {'marketGrowth' in card && (
                          <span className="text-[10px] font-mono text-text-muted">
                            Growth: {card.marketGrowth}
                          </span>
                        )}
                        {'powerLevel' in card && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                            card.category === 'internal' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}>
                            {card.category.toUpperCase()}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        <MarkdownRenderer content={getCardText(card)} inline />
                      </p>
                      {isSelected && (
                        <div className="mt-2 pt-2 border-t border-blue-200 text-[11px] text-blue-700 font-semibold flex items-center justify-between">
                          <span>Card selected</span>
                          <span>Tap zone to place &rarr;</span>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      ) : (
        /* SWOT Strategic Combinations Tab */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SWOT_STRATEGY_PAIRS.map((pair) => (
            <Card key={pair.id} className="p-5">
              <div className="flex items-center justify-between mb-3">
                <Badge variant={pair.posture === 'Maxi-Maxi' ? 'success' : pair.posture === 'Mini-Mini' ? 'danger' : 'neutral'}>
                  {pair.posture}
                </Badge>
                <span className="text-xs font-bold text-text-secondary font-mono">{pair.strategyType}</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-surface-subtle border border-border">
                  <span className="text-[10px] font-bold uppercase text-text-muted block">Internal Factor</span>
                  <p className="text-text-primary font-medium mt-0.5">{pair.internalFactor}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-subtle border border-border">
                  <span className="text-[10px] font-bold uppercase text-text-muted block">External Factor</span>
                  <p className="text-text-primary font-medium mt-0.5">{pair.externalFactor}</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-200">
                  <span className="text-[10px] font-bold uppercase text-blue-800 block">Strategic Action</span>
                  <p className="text-blue-950 font-semibold mt-0.5 leading-relaxed">{pair.actionableStrategy}</p>
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
// 1. Ansoff 2x2 Interactive Grid Component
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
  isChecked,
  selectedCardId,
  onQuadrantClick,
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
            className={`min-h-[220px] p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${q.color} ${
              isTarget ? 'border-dashed border-blue-400 bg-blue-50/30 cursor-pointer' : 'border-border'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-bold text-text-primary tracking-tight">{q.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${q.badge}`}>
                  {assignedCards.length}
                </span>
              </div>
              <p className="text-[11px] text-text-muted mb-3">{q.risk}</p>

              <div className="space-y-2">
                {assignedCards.map((card) => {
                  const isCorrect = isChecked && card.quadrant === q.id;
                  const isWrong = isChecked && card.quadrant !== q.id;

                  return (
                    <div
                      key={card.id}
                      className={`p-2.5 rounded-xl border text-xs bg-white shadow-subtle flex flex-col gap-1 ${
                        isCorrect
                          ? 'border-emerald-500 bg-emerald-50/30'
                          : isWrong
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-text-primary">{card.company}</span>
                        <div className="flex items-center gap-1.5">
                          {isChecked && (
                            isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveCard(card.id);
                            }}
                            className="text-text-muted hover:text-red-600 text-xs px-1 cursor-pointer"
                            title="Remove card"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        <MarkdownRenderer content={card.scenario} inline />
                      </p>
                      {isChecked && isWrong && (
                        <p className="text-[10px] text-red-700 font-medium pt-1 border-t border-red-200">
                          Should be: <strong>{card.quadrant.replace('-', ' ')}</strong>. {card.rationale}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {assignedCards.length === 0 && (
              <div className="text-center py-8 text-xs text-text-muted border border-dashed border-border/80 rounded-xl">
                Drop matching scenarios here
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ----------------------------------------------------
// 2. SWOT 2x2 Interactive Grid Component
// ----------------------------------------------------
interface SwotGridProps {
  placements: Record<string, SWOTQuadrant>;
  onDrop: (e: React.DragEvent, quadrant: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onRemoveCard: (id: string) => void;
  isChecked: boolean;
  selectedCardId: string | null;
  onQuadrantClick: (quadrant: string) => void;
  onSelectCard?: (id: string) => void;
  onDragStart?: (e: React.DragEvent, id: string) => void;
}

function SwotGrid({
  placements,
  onDrop,
  onDragOver,
  onRemoveCard,
  isChecked,
  selectedCardId,
  onQuadrantClick,
}: SwotGridProps) {
  const quadrants: { id: SWOTQuadrant; title: string; subtitle: string; badge: string; color: string }[] = [
    {
      id: 'strength',
      title: 'Strengths (Internal)',
      subtitle: 'Internal tangible/intangible advantages and capabilities',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      color: 'border-emerald-300 bg-emerald-50/20',
    },
    {
      id: 'weakness',
      title: 'Weaknesses (Internal)',
      subtitle: 'Internal deficiencies, liquidity constraints, and vulnerabilities',
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      color: 'border-rose-300 bg-rose-50/20',
    },
    {
      id: 'opportunity',
      title: 'Opportunities (External)',
      subtitle: 'External macro trends enabling commercial expansion',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      color: 'border-blue-300 bg-blue-50/20',
    },
    {
      id: 'threat',
      title: 'Threats (External)',
      subtitle: 'External macro shifts creating risks of loss or failure',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      color: 'border-amber-300 bg-amber-50/20',
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
            className={`min-h-[220px] p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${q.color} ${
              isTarget ? 'border-dashed border-blue-400 bg-blue-50/30 cursor-pointer' : 'border-border'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-bold text-text-primary tracking-tight">{q.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${q.badge}`}>
                  {assignedCards.length}
                </span>
              </div>
              <p className="text-[11px] text-text-muted mb-3">{q.subtitle}</p>

              <div className="space-y-2">
                {assignedCards.map((card) => {
                  const isCorrect = isChecked && card.quadrant === q.id;
                  const isWrong = isChecked && card.quadrant !== q.id;

                  return (
                    <div
                      key={card.id}
                      className={`p-2.5 rounded-xl border text-xs bg-white shadow-subtle flex flex-col gap-1 ${
                        isCorrect
                          ? 'border-emerald-500 bg-emerald-50/30'
                          : isWrong
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-text-primary">{card.entityName}</span>
                        <div className="flex items-center gap-1.5">
                          {isChecked && (
                            isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveCard(card.id);
                            }}
                            className="text-text-muted hover:text-red-600 text-xs px-1 cursor-pointer"
                            title="Remove card"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        <MarkdownRenderer content={card.scenario} inline />
                      </p>
                      {isChecked && isWrong && (
                        <p className="text-[10px] text-red-700 font-medium pt-1 border-t border-red-200">
                          Should be: <strong>{card.quadrant.toUpperCase()}</strong> ({card.origin}/{card.nature}). {card.rationale}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {assignedCards.length === 0 && (
              <div className="text-center py-8 text-xs text-text-muted border border-dashed border-border/80 rounded-xl">
                Drop matching scenarios here
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ----------------------------------------------------
// 3. STEEPLE 7-Dimension Interactive Sorter Component
// ----------------------------------------------------
interface SteepleGridProps {
  placements: Record<string, STEEPLECategory>;
  onDrop: (e: React.DragEvent, category: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onRemoveCard: (id: string) => void;
  isChecked: boolean;
  selectedCardId: string | null;
  onCategoryClick: (category: string) => void;
  onSelectCard?: (id: string) => void;
  onDragStart?: (e: React.DragEvent, id: string) => void;
}

function SteepleGrid({
  placements,
  onDrop,
  onDragOver,
  onRemoveCard,
  isChecked,
  selectedCardId,
  onCategoryClick,
}: SteepleGridProps) {
  const categories: { id: STEEPLECategory; letter: string; title: string; subtitle: string; color: string }[] = [
    {
      id: 'social',
      letter: 'S',
      title: 'Social',
      subtitle: 'Demographics, cultural shifts, aging, lifestyles',
      color: 'border-pink-300 bg-pink-50/20',
    },
    {
      id: 'technological',
      letter: 'T',
      title: 'Technological',
      subtitle: 'Automation, AI, e-commerce, obsolescence',
      color: 'border-blue-300 bg-blue-50/20',
    },
    {
      id: 'economic',
      letter: 'E',
      title: 'Economic',
      subtitle: 'Inflation, exchange rates (SPICED), interest rates',
      color: 'border-emerald-300 bg-emerald-50/20',
    },
    {
      id: 'environmental',
      letter: 'E',
      title: 'Environmental',
      subtitle: 'Climate change, resource scarcity, sustainability',
      color: 'border-teal-300 bg-teal-50/20',
    },
    {
      id: 'political',
      letter: 'P',
      title: 'Political',
      subtitle: 'Government stability, trade tariffs, fiscal tax policy',
      color: 'border-amber-300 bg-amber-50/20',
    },
    {
      id: 'legal',
      letter: 'L',
      title: 'Legal',
      subtitle: 'Minimum wage laws, consumer protection, health & safety',
      color: 'border-indigo-300 bg-indigo-50/20',
    },
    {
      id: 'ethical',
      letter: 'E',
      title: 'Ethical',
      subtitle: 'Voluntary CSR, fair-trade sourcing, worker welfare',
      color: 'border-purple-300 bg-purple-50/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {categories.map((cat) => {
        const assignedCards = STEEPLE_CARDS.filter((c) => placements[c.id] === cat.id);
        const isTarget = !!selectedCardId;

        return (
          <div
            key={cat.id}
            onDrop={(e) => onDrop(e, cat.id)}
            onDragOver={onDragOver}
            onClick={() => onCategoryClick(cat.id)}
            className={`min-h-[180px] p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between ${cat.color} ${
              isTarget ? 'border-dashed border-blue-400 bg-blue-50/30 cursor-pointer' : 'border-border'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-stone-900 text-white font-mono text-[11px] font-bold flex items-center justify-center">
                    {cat.letter}
                  </span>
                  <h3 className="text-xs font-bold text-text-primary">{cat.title}</h3>
                </div>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-white border border-border">
                  {assignedCards.length}
                </span>
              </div>
              <p className="text-[10px] text-text-muted mb-2 leading-tight">{cat.subtitle}</p>

              <div className="space-y-1.5">
                {assignedCards.map((card) => {
                  const isCorrect = isChecked && card.category === cat.id;
                  const isWrong = isChecked && card.category !== cat.id;

                  return (
                    <div
                      key={card.id}
                      className={`p-2 rounded-lg border text-[11px] bg-white shadow-subtle flex flex-col gap-1 ${
                        isCorrect
                          ? 'border-emerald-500 bg-emerald-50/30'
                          : isWrong
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-text-primary text-[11px]">{card.businessName}</span>
                        <div className="flex items-center gap-1">
                          <span className={`text-[9px] font-bold px-1 rounded ${
                            card.impactType === 'opportunity' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {card.impactType === 'opportunity' ? 'OPP' : 'THREAT'}
                          </span>
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
                            className="text-text-muted hover:text-red-600 text-xs px-1 cursor-pointer"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-text-secondary leading-snug">
                        <MarkdownRenderer content={card.scenario} inline />
                      </p>
                      {isChecked && isWrong && (
                        <p className="text-[9px] text-red-700 font-medium pt-1 border-t border-red-200">
                          Should be: <strong>{card.category.toUpperCase()}</strong>. {card.rationale}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {assignedCards.length === 0 && (
              <div className="text-center py-4 text-[10px] text-text-muted border border-dashed border-border/80 rounded-lg">
                Drop {cat.title} cards
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ----------------------------------------------------
// 4. BCG 2x2 Interactive Matrix Component
// ----------------------------------------------------
interface BcgGridProps {
  placements: Record<string, BCGQuadrant>;
  onDrop: (e: React.DragEvent, quadrant: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onRemoveCard: (id: string) => void;
  isChecked: boolean;
  selectedCardId: string | null;
  onQuadrantClick: (quadrant: string) => void;
  onSelectCard?: (id: string) => void;
  onDragStart?: (e: React.DragEvent, id: string) => void;
}

function BcgGrid({
  placements,
  onDrop,
  onDragOver,
  onRemoveCard,
  isChecked,
  selectedCardId,
  onQuadrantClick,
}: BcgGridProps) {
  const quadrants: { id: BCGQuadrant; title: string; subtitle: string; strategy: string; badge: string; color: string }[] = [
    {
      id: 'stars',
      title: 'Stars (★)',
      subtitle: 'High Market Share / High Market Growth',
      strategy: 'Strategy: BUILD (Reinvest to defend dominance)',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      color: 'border-amber-300 bg-amber-50/20',
    },
    {
      id: 'question-marks',
      title: 'Question Marks (❓)',
      subtitle: 'Low Market Share / High Market Growth',
      strategy: 'Strategy: BUILD (Fund with cash cows) or DIVEST',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      color: 'border-blue-300 bg-blue-50/20',
    },
    {
      id: 'cash-cows',
      title: 'Cash Cows (🐄)',
      subtitle: 'High Market Share / Low Market Growth',
      strategy: 'Strategy: HARVEST (Milk surplus cash to fund stars/QM)',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      color: 'border-emerald-300 bg-emerald-50/20',
    },
    {
      id: 'dogs',
      title: 'Dogs (🐕)',
      subtitle: 'Low Market Share / Low Market Growth',
      strategy: 'Strategy: DIVEST (Sell off) or HOLD niche',
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      color: 'border-rose-300 bg-rose-50/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {quadrants.map((q) => {
        const assignedCards = BCG_CARDS.filter((c) => placements[c.id] === q.id);
        const isTarget = !!selectedCardId;

        return (
          <div
            key={q.id}
            onDrop={(e) => onDrop(e, q.id)}
            onDragOver={onDragOver}
            onClick={() => onQuadrantClick(q.id)}
            className={`min-h-[220px] p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${q.color} ${
              isTarget ? 'border-dashed border-blue-400 bg-blue-50/30 cursor-pointer' : 'border-border'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-bold text-text-primary tracking-tight">{q.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${q.badge}`}>
                  {assignedCards.length}
                </span>
              </div>
              <p className="text-[11px] text-text-muted">{q.subtitle}</p>
              <p className="text-[10px] font-semibold text-text-secondary mb-3">{q.strategy}</p>

              <div className="space-y-2">
                {assignedCards.map((card) => {
                  const isCorrect = isChecked && card.quadrant === q.id;
                  const isWrong = isChecked && card.quadrant !== q.id;

                  return (
                    <div
                      key={card.id}
                      className={`p-2.5 rounded-xl border text-xs bg-white shadow-subtle flex flex-col gap-1 ${
                        isCorrect
                          ? 'border-emerald-500 bg-emerald-50/30'
                          : isWrong
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-text-primary">{card.productName}</span>
                        <div className="flex items-center gap-1.5">
                          {isChecked && (
                            isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveCard(card.id);
                            }}
                            className="text-text-muted hover:text-red-600 text-xs px-1 cursor-pointer"
                            title="Remove card"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                      <span className="text-[10px] text-text-muted font-mono">{card.company}</span>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        {card.rationale}
                      </p>
                      <p className="text-[10px] text-blue-900 bg-blue-50/50 p-1 rounded font-medium">
                        Cash: {card.cashFlowDynamics}
                      </p>
                      {isChecked && isWrong && (
                        <p className="text-[10px] text-red-700 font-medium pt-1 border-t border-red-200">
                          Should be: <strong>{card.quadrant.toUpperCase()}</strong>. Recommended: {card.recommendedStrategy.toUpperCase()}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {assignedCards.length === 0 && (
              <div className="text-center py-8 text-xs text-text-muted border border-dashed border-border/80 rounded-xl">
                Drop products matching {q.title}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ----------------------------------------------------
// 5. Mendelow's Stakeholder Matrix Component
// ----------------------------------------------------
interface StakeholderGridProps {
  placements: Record<string, StakeholderQuadrant>;
  onDrop: (e: React.DragEvent, quadrant: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onRemoveCard: (id: string) => void;
  isChecked: boolean;
  selectedCardId: string | null;
  onQuadrantClick: (quadrant: string) => void;
  onSelectCard?: (id: string) => void;
  onDragStart?: (e: React.DragEvent, id: string) => void;
}

function StakeholderGrid({
  placements,
  onDrop,
  onDragOver,
  onRemoveCard,
  isChecked,
  selectedCardId,
  onQuadrantClick,
}: StakeholderGridProps) {
  const quadrants: { 
    id: StakeholderQuadrant; 
    title: string; 
    subtitle: string; 
    strategy: string; 
    powerInterest: string;
    badge: string; 
    color: string 
  }[] = [
    {
      id: 'quadrant-a',
      title: 'Quadrant A: Minimal Effort',
      subtitle: 'Low Power / Low Interest',
      powerInterest: 'Power: LOW | Interest: LOW',
      strategy: 'Strategy: Minimum Effort — passive monitoring; standard public updates',
      badge: 'bg-stone-100 text-stone-700 border-stone-300',
      color: 'border-stone-300 bg-stone-50/40',
    },
    {
      id: 'quadrant-b',
      title: 'Quadrant B: Keep Informed',
      subtitle: 'Low Power / High Interest',
      powerInterest: 'Power: LOW | Interest: HIGH',
      strategy: 'Strategy: Keep Informed — consultations, newsletters; avoid grievance escalation',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      color: 'border-blue-300 bg-blue-50/20',
    },
    {
      id: 'quadrant-c',
      title: 'Quadrant C: Keep Satisfied',
      subtitle: 'High Power / Low Interest',
      powerInterest: 'Power: HIGH | Interest: LOW',
      strategy: 'Strategy: Keep Satisfied — regulatory compliance, debt service; do not provoke',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      color: 'border-amber-300 bg-amber-50/20',
    },
    {
      id: 'quadrant-d',
      title: 'Quadrant D: Key Players',
      subtitle: 'High Power / High Interest',
      powerInterest: 'Power: HIGH | Interest: HIGH',
      strategy: 'Strategy: Maximum Effort — continuous partnership, board consultation, direct synergy',
      badge: 'bg-purple-50 text-purple-800 border-purple-200',
      color: 'border-purple-300 bg-purple-50/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {quadrants.map((q) => {
        const assignedCards = STAKEHOLDER_CARDS.filter((c) => placements[c.id] === q.id);
        const isTarget = !!selectedCardId;

        return (
          <div
            key={q.id}
            onDrop={(e) => onDrop(e, q.id)}
            onDragOver={onDragOver}
            onClick={() => onQuadrantClick(q.id)}
            className={`min-h-[220px] p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${q.color} ${
              isTarget ? 'border-dashed border-blue-400 bg-blue-50/30 cursor-pointer' : 'border-border'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-bold text-text-primary tracking-tight">{q.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${q.badge}`}>
                  {assignedCards.length}
                </span>
              </div>
              <p className="text-[11px] text-text-muted font-medium">{q.subtitle}</p>
              <p className="text-[10px] font-semibold text-text-secondary mb-3">{q.strategy}</p>

              <div className="space-y-2">
                {assignedCards.map((card) => {
                  const isCorrect = isChecked && card.quadrant === q.id;
                  const isWrong = isChecked && card.quadrant !== q.id;

                  return (
                    <div
                      key={card.id}
                      className={`p-2.5 rounded-xl border text-xs bg-white shadow-subtle flex flex-col gap-1.5 ${
                        isCorrect
                          ? 'border-emerald-500 bg-emerald-50/30'
                          : isWrong
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-text-primary">{card.stakeholderName}</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                            card.category === 'internal'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}>
                            {card.category.toUpperCase()}
                          </span>
                          {isChecked && (
                            isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveCard(card.id);
                            }}
                            className="text-text-muted hover:text-red-600 text-xs px-1 cursor-pointer"
                            title="Remove card"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                      <span className="text-[10px] text-text-muted font-medium">{card.organizationContext}</span>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        {card.rationale}
                      </p>
                      <p className="text-[10px] text-purple-900 bg-purple-50/60 p-1 rounded font-medium">
                        Conflict risk: {card.conflictScenario}
                      </p>
                      {isChecked && isWrong && (
                        <p className="text-[10px] text-red-700 font-medium pt-1 border-t border-red-200">
                          Should be: <strong>{q.title.split(':')[0]} ({card.engagementStrategy})</strong>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {assignedCards.length === 0 && (
              <div className="text-center py-8 text-xs text-text-muted border border-dashed border-border/80 rounded-xl">
                Drop stakeholders belonging to {q.subtitle}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

