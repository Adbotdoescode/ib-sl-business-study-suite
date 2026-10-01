'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { MCQQuestion, SyllabusSubunit } from '@/types/curriculum';
import { MCQ_QUESTIONS } from '@/data/question-bank';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { triggerConfetti, triggerCelebration } from '@/lib/confetti';
import { Button } from '@/components/ui/Button';
import { Badge, AoBadge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { 
  Zap, 
  Flame, 
  Heart, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trophy, 
  Play, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export type BlitzMode = '120' | '60' | 'endless';

export function RapidBlitz() {
  const { state, updateBlitzStats, recordMcqAttempt } = useStudyProgress();
  const searchParams = useSearchParams();

  // Mode and topic configuration
  const [mode, setMode] = useState<BlitzMode>('120');
  const [selectedSubunit, setSelectedSubunit] = useState<string>('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showModeModal, setShowModeModal] = useState(true);

  // Active game session state
  const [filteredQuestions, setFilteredQuestions] = useState<MCQQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreakThisRun, setBestStreakThisRun] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(120);
  
  // Feedback state for active question
  const [selectedKey, setSelectedKey] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [wasRapidBonus, setWasRapidBonus] = useState(false);
  const questionStartTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const endTimeRef = useRef<number>(0);
  const questionsAnsweredInRunRef = useRef<number>(0);
  const deathTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const endGameRef = useRef<() => void>(() => {});

  // Sync with searchParams if directed by Weakness Workout
  useEffect(() => {
    const targetSubunit = searchParams.get('subunit');
    if (targetSubunit) {
      setSelectedSubunit(targetSubunit);
    }
  }, [searchParams]);

  // Initialize questions according to topic filter
  const setupQuestions = useCallback(() => {
    let pool = [...MCQ_QUESTIONS];
    if (selectedSubunit !== 'all') {
      pool = pool.filter((q) => q.subunit === selectedSubunit);
    }
    // Shuffle pool using Fisher-Yates
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
  }, [selectedSubunit]);

  // End game logic
  const endGame = useCallback(() => {
    setIsPlaying(false);
    setIsGameOver(true);
    if (timerRef.current) clearInterval(timerRef.current);
    if (deathTimeoutRef.current) clearTimeout(deathTimeoutRef.current);
    updateBlitzStats(mode, score, bestStreakThisRun, questionsAnsweredInRunRef.current);
    if (score > 10) triggerCelebration();
  }, [mode, score, bestStreakThisRun, updateBlitzStats]);

  endGameRef.current = endGame;

  // Start new run
  const startGame = (chosenMode: BlitzMode) => {
    if (deathTimeoutRef.current) clearTimeout(deathTimeoutRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    setMode(chosenMode);
    const pool = setupQuestions();
    setFilteredQuestions(pool);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreakThisRun(0);
    setLives(3);
    setSelectedKey(null);
    setIsAnswered(false);
    setIsGameOver(false);
    setShowModeModal(false);
    setIsPlaying(true);
    questionsAnsweredInRunRef.current = 0;

    const initialTime = chosenMode === '120' ? 120 : chosenMode === '60' ? 60 : 0;
    setTimeLeft(initialTime);
    if (initialTime > 0) {
      endTimeRef.current = Date.now() + initialTime * 1000;
    }
    questionStartTimeRef.current = Date.now();
  };

  // Close mode selection modal cleanly and resume timer if actively in a run
  const handleCloseModal = () => {
    if (isPlaying && (mode === '120' || mode === '60')) {
      endTimeRef.current = Date.now() + timeLeft * 1000;
    }
    setShowModeModal(false);
  };

  // Timer loop decoupled from score/streak to prevent timer reset dilation
  useEffect(() => {
    if (!isPlaying || isGameOver || mode === 'endless' || showModeModal) return;

    timerRef.current = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        endGameRef.current();
      }
    }, 250);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isGameOver, mode, showModeModal]);

  // Handle answer selection
  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered || !isPlaying || showModeModal) return;

    const currentQ = filteredQuestions[currentIndex];
    if (!currentQ) return;

    setSelectedKey(key);
    setIsAnswered(true);
    questionsAnsweredInRunRef.current += 1;

    const isCorrect = key === currentQ.correctAnswer;
    const elapsedSeconds = (Date.now() - questionStartTimeRef.current) / 1000;
    const eligibleForBonus = mode === '120' && isCorrect && elapsedSeconds <= 3.0;
    setWasRapidBonus(eligibleForBonus);

    // Record in global context
    recordMcqAttempt(currentQ.id, key, isCorrect);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreakThisRun) setBestStreakThisRun(newStreak);

      // Multiplier bonus: 1x (base) + 1 for rapid bonus + streak combo
      const multiplier = newStreak >= 5 ? 2 : 1;
      const pointsEarned = (1 + (eligibleForBonus ? 1 : 0)) * multiplier;
      setScore((prev) => prev + pointsEarned);

      if (newStreak % 5 === 0) {
        triggerConfetti({ particleCount: 30, spread: 50 });
      }
    } else {
      setStreak(0);

      if (mode === '60') {
        // Sudden death: 1 mistake ends game
        deathTimeoutRef.current = setTimeout(() => endGameRef.current(), 1200);
      } else if (mode === 'endless') {
        const remainingLives = lives - 1;
        setLives(remainingLives);
        if (remainingLives <= 0) {
          deathTimeoutRef.current = setTimeout(() => endGameRef.current(), 1200);
        }
      }
    }
  };

  // Next question
  const handleNextQuestion = () => {
    if (deathTimeoutRef.current) clearTimeout(deathTimeoutRef.current);
    if (currentIndex + 1 >= filteredQuestions.length) {
      if (mode === 'endless') {
        // Completed all available questions in Endless mode!
        endGameRef.current();
        return;
      }
      setFilteredQuestions(setupQuestions());
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
    setSelectedKey(null);
    setIsAnswered(false);
    setWasRapidBonus(false);
    questionStartTimeRef.current = Date.now();
  };

  const handleSelectOptionRef = useRef(handleSelectOption);
  handleSelectOptionRef.current = handleSelectOption;
  const handleNextQuestionRef = useRef(handleNextQuestion);
  handleNextQuestionRef.current = handleNextQuestion;

  // Keyboard navigation accelerators (1, 2, 3, 4, A, B, C, D, Space, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying || isGameOver || showModeModal) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (!isAnswered) {
        if (e.key === '1' || e.key.toUpperCase() === 'A') handleSelectOptionRef.current('A');
        if (e.key === '2' || e.key.toUpperCase() === 'B') handleSelectOptionRef.current('B');
        if (e.key === '3' || e.key.toUpperCase() === 'C') handleSelectOptionRef.current('C');
        if (e.key === '4' || e.key.toUpperCase() === 'D') handleSelectOptionRef.current('D');
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNextQuestionRef.current();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isGameOver, isAnswered, showModeModal]);

  const currentQ = filteredQuestions[currentIndex];

  return (
    <div className="space-y-6">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-border shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
            <Zap className="w-5 h-5 fill-amber-500" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Rapid Blitz MCQ Sprint
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              High-velocity timed drills with instant 2-sentence syllabus explanations.
            </p>
          </div>
        </div>

        {/* Mode & Topic Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedSubunit}
            onChange={(e) => setSelectedSubunit(e.target.value)}
            disabled={isPlaying}
            className="text-xs bg-white border border-border rounded-lg px-2.5 py-1.5 font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Topics (Mixed)</option>
            <option value="1.1-what-is-a-business">1.1 What is a Business?</option>
            <option value="1.2-types-of-business-entities">1.2 Types of Entities</option>
            <option value="1.3-business-objectives">1.3 Objectives</option>
            <option value="1.4-stakeholders">1.4 Stakeholders</option>
            <option value="bmt-swot-analysis">SWOT Analysis</option>
            <option value="bmt-ansoff-matrix">Ansoff Matrix</option>
            <option value="bmt-steeple-analysis">STEEPLE Analysis</option>
            <option value="bmt-toolkit">BMT Toolkit Core</option>
          </select>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowModeModal(true)}
            icon={<RotateCcw className="w-3.5 h-3.5" />}
          >
            Change Mode
          </Button>
        </div>
      </div>

      {/* Standby / Mode Selection Screen when not playing and not game over */}
      {!isPlaying && !isGameOver && (
        <Card className="p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
              <Zap className="w-3.5 h-3.5 fill-amber-500" />
              Syllabus Speed Drill
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Select Rapid Blitz Mode
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1.5">
              Choose your drilling challenge below or configure your topic filter above to begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 120s Sprint Card */}
            <div
              onClick={() => startGame('120')}
              className="p-5 rounded-xl border border-border hover:border-blue-500 hover:bg-blue-50/20 transition-all flex flex-col justify-between cursor-pointer group bg-white shadow-subtle hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                    <Timer className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Best: {state.blitzStats.highScore120} pts
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-blue-700 transition">
                  120-Second Sprint
                </h3>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  Answer as many as possible in 2 minutes. Earn <strong className="text-text-primary">+1 rapid bonus</strong> for answers under 3 seconds!
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full group-hover:border-blue-500 group-hover:text-blue-700 pointer-events-none"
                icon={<Play className="w-3.5 h-3.5" />}
              >
                Start Sprint
              </Button>
            </div>

            {/* 60s Sudden Death Card */}
            <div
              onClick={() => startGame('60')}
              className="p-5 rounded-xl border border-border hover:border-red-500 hover:bg-red-50/20 transition-all flex flex-col justify-between cursor-pointer group bg-white shadow-subtle hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    Best: {state.blitzStats.highScore60} pts
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-red-700 transition">
                  60-Second Sudden Death
                </h3>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  High-stakes 1-minute drill. A single incorrect answer ends your run immediately.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full group-hover:border-red-500 group-hover:text-red-700 pointer-events-none"
                icon={<Play className="w-3.5 h-3.5" />}
              >
                Start Sudden Death
              </Button>
            </div>

            {/* Endless Mastery Card */}
            <div
              onClick={() => startGame('endless')}
              className="p-5 rounded-xl border border-border hover:border-emerald-500 hover:bg-emerald-50/20 transition-all flex flex-col justify-between cursor-pointer group bg-white shadow-subtle hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Untimed (3 Lives)
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-emerald-700 transition">
                  Endless Mastery Mode
                </h3>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  No countdown pressure. Thoroughly study all 30 syllabus questions with 3 heart lives.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full group-hover:border-emerald-500 group-hover:text-emerald-700 pointer-events-none"
                icon={<Play className="w-3.5 h-3.5" />}
              >
                Start Endless
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Active Game HUD */}
      {isPlaying && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-border shadow-subtle">
          {/* Mode / Timer / Lives */}
          <div className="flex items-center gap-2.5">
            {mode === 'endless' ? (
              <div className="flex items-center gap-1 text-red-600">
                {[...Array(3)].map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-4 h-4 ${i < lives ? 'fill-red-500 text-red-500' : 'text-stone-300'}`}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-sm">
                <Timer className={`w-4 h-4 ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`} />
                <span>{timeLeft}s</span>
              </div>
            )}
            <span className="text-[11px] text-text-muted uppercase font-bold">
              {mode === '120' ? '120s Sprint' : mode === '60' ? 'Sudden Death' : 'Endless'}
            </span>
          </div>

          {/* Current Score */}
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-xs text-text-muted">Score:</span>
            <span className="text-base font-bold font-mono text-text-primary">{score}</span>
          </div>

          {/* Streak Combo */}
          <div className="flex items-center gap-1.5">
            <Flame className={`w-4 h-4 ${streak >= 3 ? 'text-orange-500 fill-orange-500 animate-bounce' : 'text-text-muted'}`} />
            <span className="text-xs text-text-muted">Streak:</span>
            <span className="text-xs font-bold text-text-primary">
              {streak} {streak >= 5 && <span className="text-[10px] text-orange-600 font-extrabold">(2x Bonus!)</span>}
            </span>
          </div>

          {/* Question Index */}
          <div className="text-right">
            <span className="text-xs text-text-muted">
              Q <strong className="text-text-primary font-mono">{currentIndex + 1}</strong> of {filteredQuestions.length}
            </span>
          </div>
        </div>
      )}

      {/* Active Question Surface */}
      {isPlaying && currentQ && (
        <Card className="p-6">
          {/* Subunit & Topic Tag Header */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border/70">
            <div className="flex items-center gap-2">
              <Badge variant="neutral" size="sm">
                {currentQ.topicTag}
              </Badge>
              <AoBadge ao="AO1" />
            </div>
            <span className="text-[11px] text-text-muted font-mono">
              [Keys 1–4 or A–D]
            </span>
          </div>

          {/* Prompt */}
          <h2 className="text-base sm:text-lg font-semibold text-text-primary leading-snug mb-6">
            <MarkdownRenderer content={currentQ.question} inline />
          </h2>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt) => {
              const isSelected = selectedKey === opt.key;
              const isCorrect = opt.key === currentQ.correctAnswer;

              let optionStyle = 'border-border bg-white hover:border-stone-400 hover:bg-stone-50/50';
              if (isAnswered) {
                if (isCorrect) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500';
                } else if (isSelected) {
                  optionStyle = 'border-red-500 bg-red-50 text-red-950 ring-1 ring-red-500';
                } else {
                  optionStyle = 'border-border/60 opacity-60 bg-white';
                }
              }

              return (
                <button
                  key={opt.key}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(opt.key)}
                  className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-start gap-3 select-none cursor-pointer ${optionStyle}`}
                >
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                    isAnswered && isCorrect 
                      ? 'bg-emerald-600 text-white' 
                      : isAnswered && isSelected 
                      ? 'bg-red-600 text-white' 
                      : 'bg-surface-subtle text-text-primary border border-border'
                  }`}>
                    {opt.key}
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <MarkdownRenderer content={opt.text} inline />
                  </span>
                  {isAnswered && (
                    <span className="flex-shrink-0 mt-0.5">
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

          {/* Immediate 2-Sentence Pedagogical Rationale Card */}
          {isAnswered && (
            <div className="mt-6 pt-5 border-t border-border space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-surface-subtle border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">
                    Examiner Rationale & Distractor Breakdown
                  </h4>
                  {wasRapidBonus && (
                    <span className="ml-auto text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                      ⚡ +1 Speed Bonus (under 3s)!
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <div className="leading-relaxed">
                    <strong className="text-emerald-700">Correct ({currentQ.correctAnswer}): </strong>
                    <MarkdownRenderer content={currentQ.explanation.correctRationale} inline />
                  </div>
                  <div className="leading-relaxed">
                    <strong className="text-stone-700">Distractor Analysis: </strong>
                    <MarkdownRenderer content={currentQ.explanation.distractorAnalysis} inline />
                  </div>
                </div>
              </div>

              {/* Next Question / Continue Button */}
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  onClick={handleNextQuestion}
                  icon={<ChevronRight className="w-4 h-4" />}
                >
                  Continue [Enter]
                </Button>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Game Over Screen */}
      {isGameOver && (
        <Card className="p-8 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">Run Complete!</h2>
          <p className="text-xs text-text-secondary mt-1">
            {mode === '120' ? '120-Second Sprint' : mode === '60' ? 'Sudden Death Run' : 'Endless Mastery Mode'}
          </p>

          <div className="grid grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-surface-subtle border border-border">
            <div>
              <span className="text-[11px] text-text-muted uppercase font-bold block">Final Score</span>
              <span className="text-2xl font-bold font-mono text-text-primary">{score}</span>
            </div>
            <div>
              <span className="text-[11px] text-text-muted uppercase font-bold block">Best Streak</span>
              <span className="text-2xl font-bold font-mono text-orange-600">{bestStreakThisRun}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={() => setShowModeModal(true)}>
              Choose Different Mode
            </Button>
            <Button variant="primary" onClick={() => startGame(mode)} icon={<Play className="w-4 h-4" />}>
              Play Again
            </Button>
          </div>
        </Card>
      )}

      {/* Mode Picker Modal */}
      <Modal
        isOpen={showModeModal}
        onClose={handleCloseModal}
        title="Select Rapid Blitz Mode"
        description="Choose your drilling challenge to test your IB syllabus recall."
      >
        <div className="space-y-3 pt-2">
          {/* 120s Sprint */}
          <button
            onClick={() => startGame('120')}
            className="w-full text-left p-4 rounded-xl border border-border hover:border-blue-500 hover:bg-blue-50/30 transition group flex items-start gap-3.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
              <Timer className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="block text-sm font-bold text-text-primary group-hover:text-blue-700">
                  120-Second Sprint
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Best: {state.blitzStats.highScore120} pts
                </span>
              </div>
              <span className="block text-xs text-text-secondary mt-0.5">
                Answer as many as possible in 2 minutes. Earn <strong className="text-text-primary">+1 rapid bonus</strong> for answers under 3 seconds!
              </span>
            </div>
          </button>

          {/* 60s Sudden Death */}
          <button
            onClick={() => startGame('60')}
            className="w-full text-left p-4 rounded-xl border border-border hover:border-red-500 hover:bg-red-50/30 transition group flex items-start gap-3.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition">
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="block text-sm font-bold text-text-primary group-hover:text-red-700">
                  60-Second Sudden Death
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                  Best: {state.blitzStats.highScore60} pts
                </span>
              </div>
              <span className="block text-xs text-text-secondary mt-0.5">
                High-stakes 1-minute drill. A single incorrect answer ends your run immediately.
              </span>
            </div>
          </button>

          {/* Endless Mastery */}
          <button
            onClick={() => startGame('endless')}
            className="w-full text-left p-4 rounded-xl border border-border hover:border-emerald-500 hover:bg-emerald-50/30 transition group flex items-start gap-3.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition">
              <Heart className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="block text-sm font-bold text-text-primary group-hover:text-emerald-700">
                  Endless Mastery Mode
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Untimed (3 Lives)
                </span>
              </div>
              <span className="block text-xs text-text-secondary mt-0.5">
                No countdown pressure. Thoroughly study all 30 syllabus questions with 3 heart lives.
              </span>
            </div>
          </button>
        </div>
      </Modal>
    </div>
  );
}
