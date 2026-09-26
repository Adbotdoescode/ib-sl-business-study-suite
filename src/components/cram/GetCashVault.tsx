'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  GET_CASH_ITEMS, 
  SMART_OBJECTIVES, 
  PEEL_FRAMEWORK 
} from '@/data/mnemonics';
import { GetCashItem } from '@/types/curriculum';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { triggerConfetti } from '@/lib/confetti';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { 
  Key, 
  CheckCircle2, 
  RotateCcw, 
  Zap, 
  Timer, 
  Sparkles, 
  Trophy, 
  Quote, 
  Target, 
  PenTool,
  Check
} from 'lucide-react';

export function GetCashVault() {
  const { state, toggleMnemonicMastered } = useStudyProgress();
  const [activeTab, setActiveTab] = useState<'flashcards' | 'speedmatch' | 'frameworks'>('flashcards');

  // Flashcard flip states: map letter to boolean (flipped or not)
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Speed Match Mini-Game State
  const [isPlayingMatch, setIsPlayingMatch] = useState(false);
  const [matchScore, setMatchScore] = useState(0);
  const matchScoreRef = useRef(0);
  const [matchTimeLeft, setMatchTimeLeft] = useState(30);
  const [matchGameOver, setMatchGameOver] = useState(false);
  const [currentMatchItem, setCurrentMatchItem] = useState<GetCashItem | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [matchFeedback, setMatchFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  const matchTimerRef = useRef<NodeJS.Timeout | null>(null);
  const matchTransitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleFlip = (letter: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [letter]: !prev[letter],
    }));
  };

  // Pause / cancel speed match if user changes tab
  useEffect(() => {
    if (activeTab !== 'speedmatch') {
      setIsPlayingMatch(false);
      if (matchTimerRef.current) clearInterval(matchTimerRef.current);
      if (matchTransitionTimeoutRef.current) clearTimeout(matchTransitionTimeoutRef.current);
    }
  }, [activeTab]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (matchTimerRef.current) clearInterval(matchTimerRef.current);
      if (matchTransitionTimeoutRef.current) clearTimeout(matchTransitionTimeoutRef.current);
    };
  }, []);

  // Start Speed Matching
  const startSpeedMatch = () => {
    if (matchTimerRef.current) clearInterval(matchTimerRef.current);
    if (matchTransitionTimeoutRef.current) clearTimeout(matchTransitionTimeoutRef.current);
    setIsPlayingMatch(true);
    setMatchScore(0);
    matchScoreRef.current = 0;
    setMatchTimeLeft(30);
    setMatchGameOver(false);
    setMatchFeedback(null);
    nextMatchQuestion();
  };

  const nextMatchQuestion = () => {
    const pool = currentMatchItem
      ? GET_CASH_ITEMS.filter((i) => i.letter !== currentMatchItem.letter)
      : GET_CASH_ITEMS;
    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    setCurrentMatchItem(randomItem);

    // Prepare 4 choices: correct letter + 3 random distractors
    const otherLetters = GET_CASH_ITEMS.filter((i) => i.letter !== randomItem.letter).map((i) => i.letter);
    const distractors = otherLetters.sort(() => Math.random() - 0.5).slice(0, 3);
    const choices = [randomItem.letter, ...distractors].sort(() => Math.random() - 0.5);
    setShuffledOptions(choices);
    setMatchFeedback(null);
  };

  const handleSelectMatch = (selectedLetter: string) => {
    if (!currentMatchItem || matchFeedback) return;

    if (matchTransitionTimeoutRef.current) clearTimeout(matchTransitionTimeoutRef.current);

    if (selectedLetter === currentMatchItem.letter) {
      const nextScore = matchScore + 1;
      setMatchScore(nextScore);
      matchScoreRef.current = nextScore;
      setMatchFeedback({ isCorrect: true, text: `Correct! ${currentMatchItem.letter} stands for ${currentMatchItem.factorTitle}` });
      matchTransitionTimeoutRef.current = setTimeout(() => {
        nextMatchQuestion();
      }, 700);
    } else {
      setMatchFeedback({ isCorrect: false, text: `Incorrect! It was ${currentMatchItem.letter} (${currentMatchItem.factorTitle})` });
      matchTransitionTimeoutRef.current = setTimeout(() => {
        nextMatchQuestion();
      }, 1000);
    }
  };

  // Speed Match Timer: decoupled from matchScore to avoid timer freeze
  useEffect(() => {
    if (!isPlayingMatch || matchGameOver) return;

    matchTimerRef.current = setInterval(() => {
      setMatchTimeLeft((prev) => {
        if (prev <= 1) {
          setIsPlayingMatch(false);
          setMatchGameOver(true);
          if (matchScoreRef.current >= 5) triggerConfetti();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (matchTimerRef.current) clearInterval(matchTimerRef.current);
    };
  }, [isPlayingMatch, matchGameOver]);

  return (
    <div className="space-y-6">
      {/* Header and Sub-Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-border shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Key className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              GET CASH Mnemonic Vault
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Master entrepreneur startup motives, 30s Speed Matcher, SMART targets, and the PEEL framework.
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-subtle rounded-lg border border-border">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
              activeTab === 'flashcards'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            1. GET CASH Flashcards
          </button>
          <button
            onClick={() => setActiveTab('speedmatch')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
              activeTab === 'speedmatch'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            2. 30s Speed Matcher
          </button>
          <button
            onClick={() => setActiveTab('frameworks')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
              activeTab === 'frameworks'
                ? 'bg-white text-blue-700 shadow-subtle'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            3. SMART & PEEL Frameworks
          </button>
        </div>
      </div>

      {/* Tab 1: GET CASH Flashcards */}
      {activeTab === 'flashcards' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-text-muted px-1">
            <span>Click any card to flip between definition and real-world exam context.</span>
            <span>{state.mnemonicsMastered.length} of 7 letters mastered</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GET_CASH_ITEMS.map((item) => {
              const isFlipped = !!flippedCards[item.letter];
              const isMastered = state.mnemonicsMastered.includes(item.letter);

              return (
                <div
                  key={item.letter}
                  onClick={() => toggleFlip(item.letter)}
                  className="min-h-[250px] cursor-pointer [perspective:1000px] select-none"
                >
                  <div
                    className={`relative w-full h-full rounded-xl border transition-transform duration-500 [transform-style:preserve-3d] shadow-subtle ${
                      isFlipped ? '[transform:rotateY(180deg)] border-blue-300' : 'border-border hover:border-stone-400'
                    }`}
                  >
                    {/* Front side: Letter & Definition */}
                    <div className="absolute inset-0 w-full h-full p-5 bg-white rounded-xl flex flex-col justify-between [backface-visibility:hidden]">
                      <div>
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-base flex items-center justify-center font-mono">
                              {item.letter}
                            </span>
                            <h3 className="text-base font-bold text-text-primary">{item.factorTitle}</h3>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMnemonicMastered(item.letter);
                            }}
                            className={`p-1 rounded-full border transition cursor-pointer ${
                              isMastered
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : 'bg-surface-subtle text-stone-400 border-border hover:text-emerald-700'
                            }`}
                            title="Mark mastered"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <MarkdownRenderer content={item.definition} className="text-xs text-text-secondary leading-relaxed mb-3" />

                        <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200/80 text-[11px] text-emerald-950">
                          <strong className="block mb-0.5 uppercase tracking-wide text-[10px] text-emerald-800">
                            Exam Key Phrasing:
                          </strong>
                          <MarkdownRenderer content={item.examPhrasing} className="text-[11px] text-emerald-950" />
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-text-muted">
                        <span>Startup Motive: G-E-T-C-A-S-H</span>
                        <span className="text-blue-600 font-medium">Click to flip &rarr;</span>
                      </div>
                    </div>

                    {/* Back side: Vignette & Speed Quote */}
                    <div className="absolute inset-0 w-full h-full p-5 bg-surface-subtle rounded-xl flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div>
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
                          <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                            Vignette & Quote ({item.factorTitle})
                          </span>
                          <span className="text-[10px] text-text-muted">Flip back</span>
                        </div>

                        <div className="space-y-3 text-xs">
                          <div className="p-2.5 rounded-lg bg-white border border-border">
                            <strong className="block mb-1 text-text-primary font-semibold text-[11px]">
                              Case Context Vignette:
                            </strong>
                            <MarkdownRenderer content={item.realWorldVignette} className="text-text-secondary leading-snug text-[11px]" />
                          </div>

                          <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200 text-amber-950 italic flex items-start gap-2 text-[11px]">
                            <Quote className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <p>&ldquo;{item.speedMatchQuote}&rdquo;</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-text-muted">
                        <span>Entrepreneur Quote</span>
                        <span className="text-blue-600 font-medium">&larr; Back to definition</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: 30-Second Speed Matcher */}
      {activeTab === 'speedmatch' && (
        <div className="max-w-2xl mx-auto space-y-6">
          {!isPlayingMatch && !matchGameOver && (
            <Card className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
                <Zap className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-text-primary">30-Second GET CASH Speed Matcher</h2>
              <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
                Read the entrepreneur quote stimulus and rapidly pick the corresponding GET CASH motive before the 30-second stopwatch expires!
              </p>
              <div className="pt-2">
                <Button variant="primary" size="lg" onClick={startSpeedMatch} icon={<Zap className="w-4 h-4" />}>
                  Start 30-Second Challenge
                </Button>
              </div>
            </Card>
          )}

          {isPlayingMatch && currentMatchItem && (
            <Card className="p-6 space-y-6">
              {/* HUD: Timer & Score */}
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-text-primary">
                  <Timer className={`w-4 h-4 ${matchTimeLeft <= 7 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`} />
                  <span>{matchTimeLeft}s remaining</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span className="text-xs text-text-muted">Score:</span>
                  <span className="text-base font-bold font-mono text-text-primary">{matchScore}</span>
                </div>
              </div>

              {/* Quote Stimulus Card */}
              <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200 text-center space-y-2">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block">
                  Identify Entrepreneur Motive:
                </span>
                <p className="text-base sm:text-lg font-medium text-amber-950 italic">
                  &ldquo;{currentMatchItem.speedMatchQuote}&rdquo;
                </p>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-2 gap-3">
                {shuffledOptions.map((letter) => {
                  const factor = GET_CASH_ITEMS.find((i) => i.letter === letter);
                  return (
                    <button
                      key={letter}
                      onClick={() => handleSelectMatch(letter)}
                      className="p-4 rounded-xl border border-border bg-white hover:border-blue-500 hover:bg-blue-50/30 text-left transition font-medium cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-stone-900 text-white font-bold text-xs flex items-center justify-center font-mono">
                          {letter}
                        </span>
                        <span className="text-sm font-bold text-text-primary">
                          {factor?.factorTitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback Alert */}
              {matchFeedback && (
                <div className={`p-3 rounded-lg text-xs font-semibold text-center ${
                  matchFeedback.isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-300' : 'bg-red-50 text-red-800 border border-red-300'
                }`}>
                  {matchFeedback.text}
                </div>
              )}
            </Card>
          )}

          {matchGameOver && (
            <Card className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
                <Trophy className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-text-primary">Time&rsquo;s Up!</h2>
              <div className="p-4 rounded-xl bg-surface-subtle border border-border max-w-xs mx-auto">
                <span className="text-xs text-text-muted uppercase font-bold block">Final Score</span>
                <span className="text-3xl font-bold font-mono text-text-primary">{matchScore} correct</span>
              </div>
              <div className="flex justify-center gap-3 pt-2">
                <Button variant="primary" onClick={startSpeedMatch} icon={<RotateCcw className="w-4 h-4" />}>
                  Play Again
                </Button>
              </div>
            </Card>
          )}
        </div>
      )}

      {/* Tab 3: Sibling Frameworks (SMART & PEEL) */}
      {activeTab === 'frameworks' && (
        <div className="space-y-8">
          {/* SMART Objectives */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <Target className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-text-primary">SMART Objectives Framework</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {SMART_OBJECTIVES.map((item) => (
                <Card key={item.letter} className="p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded bg-blue-600 text-white font-bold text-xs flex items-center justify-center font-mono">
                        {item.letter}
                      </span>
                      <h3 className="text-sm font-bold text-text-primary">{item.term}</h3>
                    </div>
                    <MarkdownRenderer content={item.definition} className="text-xs text-text-secondary leading-relaxed mb-3" />
                  </div>

                  <div className="space-y-2 pt-2 border-t border-border/80 text-[11px]">
                    <div className="p-2 rounded bg-emerald-50/60 border border-emerald-200 text-emerald-950">
                      <strong className="block text-emerald-800 text-[10px] uppercase font-bold">Good Example:</strong>
                      <MarkdownRenderer content={item.goodExample} className="text-emerald-950 text-[11px]" />
                    </div>
                    <div className="p-2 rounded bg-red-50/60 border border-red-200 text-red-950">
                      <strong className="block text-red-800 text-[10px] uppercase font-bold">Defective (Bad):</strong>
                      <MarkdownRenderer content={item.badExample} className="text-red-950 text-[11px]" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* PEEL Framework */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <PenTool className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-bold text-text-primary">PEEL Writing Framework for Applied Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {PEEL_FRAMEWORK.map((item) => (
                <Card key={item.token} className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-7 h-7 rounded text-white font-bold text-xs flex items-center justify-center font-mono"
                        style={{ backgroundColor: item.colorCode }}
                      >
                        {item.token}
                      </span>
                      <h3 className="text-sm font-bold text-text-primary">{item.name}</h3>
                    </div>
                    <MarkdownRenderer content={item.description} className="text-xs text-text-secondary leading-relaxed mb-4" />
                  </div>

                  <div className="pt-3 border-t border-border/80">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wide block mb-1.5">
                      Sentence Starters:
                    </span>
                    <ul className="space-y-1.5 text-[11px] text-text-secondary">
                      {item.sentenceStarters.map((starter, i) => (
                        <li key={i} className="leading-snug bg-surface-subtle p-1.5 rounded border border-border/80">
                          {starter}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
