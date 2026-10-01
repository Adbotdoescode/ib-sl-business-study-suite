'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { SyllabusSubunit } from '@/types/curriculum';

const STORAGE_KEY = 'ib_sl_study_suite_v1';

export interface McqAttempt {
  selectedKey: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  timestamp: number;
}

export interface BlitzStats {
  highScore120: number;
  highScore60: number;
  bestStreak: number;
  totalQuestionsAnswered: number;
}

export interface StudyProgressState {
  mcqAttempts: Record<string, McqAttempt>;
  twoMarkCompleted: Record<string, boolean>;
  writtenDrafts: Record<string, string>;
  rubricChecks: Record<string, boolean>; // key: `${questionId}_${criterionId}`
  questionScores: Record<string, number>; // key: questionId -> score
  blitzStats: BlitzStats;
  matrixMasterCompleted: {
    swot: boolean;
    ansoff: boolean;
    steeple?: boolean;
    bcg?: boolean;
    stakeholders?: boolean;
  };
  cramHiddenDefs: string[];
  cramHiddenDistinctions: string[];
  cramHiddenRules: string[];
  mnemonicsMastered: string[];
  matchmakerCompletedIds: string[];
}

const DEFAULT_STATE: StudyProgressState = {
  mcqAttempts: {},
  twoMarkCompleted: {},
  writtenDrafts: {},
  rubricChecks: {},
  questionScores: {},
  blitzStats: {
    highScore120: 0,
    highScore60: 0,
    bestStreak: 0,
    totalQuestionsAnswered: 0,
  },
  matrixMasterCompleted: {
    swot: false,
    ansoff: false,
  },
  cramHiddenDefs: [],
  cramHiddenDistinctions: [],
  cramHiddenRules: [],
  mnemonicsMastered: [],
  matchmakerCompletedIds: [],
};

interface StudyProgressContextType {
  state: StudyProgressState;
  isHydrated: boolean;
  recordMcqAttempt: (questionId: string, selectedKey: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => void;
  resetMcqAttempt: (questionId: string) => void;
  toggleTwoMarkCompleted: (questionId: string) => void;
  saveWrittenDraft: (questionId: string, text: string) => void;
  toggleRubricItem: (questionId: string, criterionId: string) => void;
  isRubricChecked: (questionId: string, criterionId: string) => boolean;
  saveQuestionScore: (questionId: string, score: number) => void;
  updateBlitzStats: (mode: '120' | '60' | 'endless', score: number, streak: number, questionsAnsweredCount?: number) => void;
  setMatrixMasterCompleted: (matrixType: 'swot' | 'ansoff' | 'steeple' | 'bcg' | 'stakeholders', completed: boolean) => void;
  toggleCramHidden: (category: 'def' | 'dist' | 'rule', id: string) => void;
  resetCramFilters: () => void;
  toggleMnemonicMastered: (letter: string) => void;
  recordMatchmakerCompleted: (scenarioId: string) => void;
  resetAllProgress: () => void;
}

const StudyProgressContext = createContext<StudyProgressContextType | null>(null);

export function StudyProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StudyProgressState>(DEFAULT_STATE);
  const [isHydrated, setIsHydrated] = useState(false);

  // Safe client-side hydration with defensive validation
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          const safeArray = (val: unknown): string[] => (Array.isArray(val) ? val : []);
          setState((prev) => ({
            ...prev,
            ...parsed,
            mcqAttempts: parsed.mcqAttempts && typeof parsed.mcqAttempts === 'object' ? parsed.mcqAttempts : {},
            twoMarkCompleted: parsed.twoMarkCompleted && typeof parsed.twoMarkCompleted === 'object' ? parsed.twoMarkCompleted : {},
            writtenDrafts: parsed.writtenDrafts && typeof parsed.writtenDrafts === 'object' ? parsed.writtenDrafts : {},
            rubricChecks: parsed.rubricChecks && typeof parsed.rubricChecks === 'object' ? parsed.rubricChecks : {},
            questionScores: parsed.questionScores && typeof parsed.questionScores === 'object' ? parsed.questionScores : {},
            blitzStats: {
              ...prev.blitzStats,
              ...(parsed.blitzStats || {}),
            },
            matrixMasterCompleted: {
              ...prev.matrixMasterCompleted,
              ...(parsed.matrixMasterCompleted || {}),
            },
            cramHiddenDefs: safeArray(parsed.cramHiddenDefs),
            cramHiddenDistinctions: safeArray(parsed.cramHiddenDistinctions),
            cramHiddenRules: safeArray(parsed.cramHiddenRules),
            mnemonicsMastered: safeArray(parsed.mnemonicsMastered),
            matchmakerCompletedIds: safeArray(parsed.matchmakerCompletedIds),
          }));
        }
      }
    } catch (e) {
      console.error('Failed to load study progress from localStorage:', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Sync to localStorage on state changes
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to persist study progress to localStorage:', e);
    }
  }, [state, isHydrated]);

  const recordMcqAttempt = useCallback((questionId: string, selectedKey: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => {
    setState((prev) => ({
      ...prev,
      mcqAttempts: {
        ...prev.mcqAttempts,
        [questionId]: {
          selectedKey,
          isCorrect,
          timestamp: Date.now(),
        },
      },
    }));
  }, []);

  const resetMcqAttempt = useCallback((questionId: string) => {
    setState((prev) => {
      const next = { ...prev.mcqAttempts };
      delete next[questionId];
      return {
        ...prev,
        mcqAttempts: next,
      };
    });
  }, []);

  const toggleTwoMarkCompleted = useCallback((questionId: string) => {
    setState((prev) => ({
      ...prev,
      twoMarkCompleted: {
        ...prev.twoMarkCompleted,
        [questionId]: !prev.twoMarkCompleted[questionId],
      },
    }));
  }, []);

  const saveWrittenDraft = useCallback((questionId: string, text: string) => {
    setState((prev) => ({
      ...prev,
      writtenDrafts: {
        ...prev.writtenDrafts,
        [questionId]: text,
      },
    }));
  }, []);

  const toggleRubricItem = useCallback((questionId: string, criterionId: string) => {
    const key = `${questionId}_${criterionId}`;
    setState((prev) => ({
      ...prev,
      rubricChecks: {
        ...prev.rubricChecks,
        [key]: !prev.rubricChecks[key],
      },
    }));
  }, []);

  const isRubricChecked = useCallback((questionId: string, criterionId: string): boolean => {
    const key = `${questionId}_${criterionId}`;
    return !!state.rubricChecks[key];
  }, [state.rubricChecks]);

  const saveQuestionScore = useCallback((questionId: string, score: number) => {
    setState((prev) => ({
      ...prev,
      questionScores: {
        ...prev.questionScores,
        [questionId]: score,
      },
    }));
  }, []);

  const updateBlitzStats = useCallback((
    mode: '120' | '60' | 'endless',
    score: number,
    streak: number,
    questionsAnsweredCount?: number
  ) => {
    setState((prev) => {
      const stats = { ...prev.blitzStats };
      if (mode === '120' && score > stats.highScore120) {
        stats.highScore120 = score;
      } else if (mode === '60' && score > stats.highScore60) {
        stats.highScore60 = score;
      }
      if (streak > stats.bestStreak) {
        stats.bestStreak = streak;
      }
      stats.totalQuestionsAnswered += questionsAnsweredCount ?? 1;
      return { ...prev, blitzStats: stats };
    });
  }, []);

  const setMatrixMasterCompleted = useCallback((matrixType: 'swot' | 'ansoff' | 'steeple' | 'bcg' | 'stakeholders', completed: boolean) => {
    setState((prev) => ({
      ...prev,
      matrixMasterCompleted: {
        ...prev.matrixMasterCompleted,
        [matrixType]: completed,
      },
    }));
  }, []);

  const toggleCramHidden = useCallback((category: 'def' | 'dist' | 'rule', id: string) => {
    setState((prev) => {
      if (category === 'def') {
        const exists = prev.cramHiddenDefs.includes(id);
        return {
          ...prev,
          cramHiddenDefs: exists
            ? prev.cramHiddenDefs.filter((x) => x !== id)
            : [...prev.cramHiddenDefs, id],
        };
      } else if (category === 'dist') {
        const exists = prev.cramHiddenDistinctions.includes(id);
        return {
          ...prev,
          cramHiddenDistinctions: exists
            ? prev.cramHiddenDistinctions.filter((x) => x !== id)
            : [...prev.cramHiddenDistinctions, id],
        };
      } else {
        const exists = prev.cramHiddenRules.includes(id);
        return {
          ...prev,
          cramHiddenRules: exists
            ? prev.cramHiddenRules.filter((x) => x !== id)
            : [...prev.cramHiddenRules, id],
        };
      }
    });
  }, []);

  const resetCramFilters = useCallback(() => {
    setState((prev) => ({
      ...prev,
      cramHiddenDefs: [],
      cramHiddenDistinctions: [],
      cramHiddenRules: [],
    }));
  }, []);

  const toggleMnemonicMastered = useCallback((letter: string) => {
    setState((prev) => {
      const exists = prev.mnemonicsMastered.includes(letter);
      return {
        ...prev,
        mnemonicsMastered: exists
          ? prev.mnemonicsMastered.filter((l) => l !== letter)
          : [...prev.mnemonicsMastered, letter],
      };
    });
  }, []);

  const recordMatchmakerCompleted = useCallback((scenarioId: string) => {
    setState((prev) => {
      if (prev.matchmakerCompletedIds.includes(scenarioId)) return prev;
      return {
        ...prev,
        matchmakerCompletedIds: [...prev.matchmakerCompletedIds, scenarioId],
      };
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    if (typeof window !== 'undefined' && window.confirm('Are you sure you want to reset all quiz and study progress? This cannot be undone.')) {
      setState(DEFAULT_STATE);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const contextValue = useMemo(() => ({
    state,
    isHydrated,
    recordMcqAttempt,
    resetMcqAttempt,
    toggleTwoMarkCompleted,
    saveWrittenDraft,
    toggleRubricItem,
    isRubricChecked,
    saveQuestionScore,
    updateBlitzStats,
    setMatrixMasterCompleted,
    toggleCramHidden,
    resetCramFilters,
    toggleMnemonicMastered,
    recordMatchmakerCompleted,
    resetAllProgress,
  }), [
    state,
    isHydrated,
    recordMcqAttempt,
    resetMcqAttempt,
    toggleTwoMarkCompleted,
    saveWrittenDraft,
    toggleRubricItem,
    isRubricChecked,
    saveQuestionScore,
    updateBlitzStats,
    setMatrixMasterCompleted,
    toggleCramHidden,
    resetCramFilters,
    toggleMnemonicMastered,
    recordMatchmakerCompleted,
    resetAllProgress,
  ]);

  return (
    <StudyProgressContext.Provider value={contextValue}>
      {children}
    </StudyProgressContext.Provider>
  );
}

export function useStudyProgress() {
  const context = useContext(StudyProgressContext);
  if (!context) {
    throw new Error('useStudyProgress must be used within a StudyProgressProvider');
  }
  return context;
}
