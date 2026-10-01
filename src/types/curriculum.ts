export type SyllabusSubunit = 
  | '1.1-what-is-a-business'
  | '1.2-types-of-business-entities'
  | '1.3-business-objectives'
  | '1.4-stakeholders'
  | 'bmt-swot-analysis'
  | 'bmt-ansoff-matrix'
  | 'bmt-steeple-analysis'
  | 'bmt-toolkit';

export type CommandTerm = 
  | 'Define'
  | 'State'
  | 'List'
  | 'Outline'
  | 'Describe'
  | 'Identify'
  | 'Explain'
  | 'Distinguish'
  | 'Suggest'
  | 'Analyse'
  | 'Examine'
  | 'Evaluate'
  | 'Discuss'
  | 'What is'
  | 'What is meant by'
  | 'Apply';

export type AssessmentObjective = 'AO1' | 'AO2' | 'AO3' | 'AO4' | 'AO2/AO3';

// ----------------------------------------------------
// 1. Multiple Choice Questions (MCQs)
// ----------------------------------------------------
export interface MCQOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface MCQQuestion {
  id: string; // e.g. "mcq-1.1-01"
  subunit: SyllabusSubunit;
  topicTag: string;
  questionNumber: number;
  question: string;
  options: MCQOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: {
    correctRationale: string;
    distractorAnalysis: string;
  };
}

// ----------------------------------------------------
// 2. 2-Mark Short Answer Questions (AO1)
// ----------------------------------------------------
export interface TwoMarkRubricItem {
  mark: 1;
  criterion: string;
}

export interface TwoMarkQuestion {
  id: string; // e.g. "q2m-1.1-01"
  subunit: SyllabusSubunit;
  questionNumber: string;
  question: string;
  marks: 2;
  commandTerm: CommandTerm;
  assessmentObjective: 'AO1';
  modelAnswer: string;
  markBreakdown: [TwoMarkRubricItem, TwoMarkRubricItem]; // 2 discrete checklist criteria
  examinerTips?: string;
}

// ----------------------------------------------------
// 3. 4-Mark Short Answer Questions (AO2 PEEL)
// ----------------------------------------------------
export interface PEELToken {
  type: 'point' | 'explanation' | 'evidence' | 'link';
  label: string;
  content: string;
}

export interface PEELPoint {
  title: string;
  point: string;
  evidence: string;
  explanation: string;
  link: string;
  tokens?: PEELToken[];
}

export interface FourMarkRubricItem {
  id: string;
  criterion: string;
  mark: 1;
}

export interface FourMarkQuestion {
  id: string; // e.g. "q4m-01"
  subunit: SyllabusSubunit;
  questionNumber: string;
  question: string;
  caseStimulus?: string;
  contextTitle?: string;
  marks: 4;
  commandTerm: CommandTerm;
  assessmentObjective: 'AO2';
  peelModelAnswer: {
    point1: PEELPoint;
    point2: PEELPoint;
  };
  rubricChecklist: FourMarkRubricItem[];
  scrambledSentences?: {
    id: string;
    type: 'point' | 'explanation' | 'evidence' | 'link';
    text: string;
    order: number;
  }[];
}

// ----------------------------------------------------
// 4. 6-Mark Analytical Questions (AO2/AO3)
// ----------------------------------------------------
export interface SixMarkLevel {
  range: '1-2' | '3-4' | '5-6';
  descriptor: string;
}

export interface PerspectiveAnalysis {
  title: string;
  points: {
    subPoint: string;
    elaboration: string;
  }[];
}

export interface SixMarkRubricItem {
  id: string;
  criterion: string;
  marks: number;
}

export interface SixMarkQuestion {
  id: string; // e.g. "q6m-01"
  subunit: SyllabusSubunit;
  questionNumber: string;
  question: string;
  caseStimulus: string;
  contextTitle: string;
  marks: number; // 6 (or 9 for composite questions)
  commandTerm: CommandTerm;
  assessmentObjective: AssessmentObjective;
  levelBreakdown: SixMarkLevel[];
  perspective1: PerspectiveAnalysis;
  perspective2: PerspectiveAnalysis;
  synthesisAndEvaluation: string;
  rubricChecklist: SixMarkRubricItem[];
}

// ----------------------------------------------------
// 5. Matrix Master: Ansoff & SWOT
// ----------------------------------------------------
export type AnsoffQuadrant = 
  | 'market-penetration' 
  | 'product-development' 
  | 'market-development' 
  | 'diversification';

export interface AnsoffCard {
  id: string;
  scenario: string;
  company: string;
  quadrant: AnsoffQuadrant;
  productType: 'existing' | 'new';
  marketType: 'existing' | 'new';
  riskLevel: 'lowest' | 'moderate' | 'highest';
  subType?: 'related' | 'unrelated';
  rationale: string;
}

export type SWOTQuadrant = 'strength' | 'weakness' | 'opportunity' | 'threat';

export interface SWOTCard {
  id: string;
  scenario: string;
  entityName: string;
  quadrant: SWOTQuadrant;
  origin: 'internal' | 'external';
  nature: 'favourable' | 'unfavourable';
  steepleDimension?: 'Social' | 'Technological' | 'Economic' | 'Environmental' | 'Political' | 'Legal' | 'Ethical';
  rationale: string;
}

export interface SWOTStrategyPair {
  id: string;
  strategyType: 'S-O Offensive' | 'W-O Reorientation' | 'S-T Defensive' | 'W-T Survival';
  posture: 'Maxi-Maxi' | 'Mini-Maxi' | 'Maxi-Mini' | 'Mini-Mini';
  internalFactor: string;
  externalFactor: string;
  actionableStrategy: string;
  realWorldExample: string;
}

// ----------------------------------------------------
// 5b. STEEPLE Analysis & Environmental Sorter
// ----------------------------------------------------
export type STEEPLECategory = 
  | 'social' 
  | 'technological' 
  | 'economic' 
  | 'environmental' 
  | 'political' 
  | 'legal' 
  | 'ethical';

export interface STEEPLECard {
  id: string;
  scenario: string;
  businessName: string;
  category: STEEPLECategory;
  impactType: 'opportunity' | 'threat';
  rationale: string;
  strategicResponse: string;
}

// ----------------------------------------------------
// 5c. Boston Consulting Group (BCG) Matrix
// ----------------------------------------------------
export type BCGQuadrant = 'stars' | 'cash-cows' | 'question-marks' | 'dogs';
export type BCGStrategy = 'build' | 'harvest' | 'hold' | 'divest';

export interface BCGCard {
  id: string;
  productName: string;
  company: string;
  marketGrowth: 'high' | 'low';
  marketShare: 'high' | 'low';
  quadrant: BCGQuadrant;
  recommendedStrategy: BCGStrategy;
  rationale: string;
  cashFlowDynamics: string;
}

// ----------------------------------------------------
// 5d. Stakeholder Mapping (Mendelow's Matrix)
// ----------------------------------------------------
export type StakeholderQuadrant = 'quadrant-a' | 'quadrant-b' | 'quadrant-c' | 'quadrant-d';

export interface StakeholderCard {
  id: string;
  stakeholderName: string;
  organizationContext: string;
  category: 'internal' | 'external';
  powerLevel: 'high' | 'low';
  interestLevel: 'high' | 'low';
  quadrant: StakeholderQuadrant; // A: Low P / Low I, B: Low P / High I, C: High P / Low I, D: High P / High I
  engagementStrategy: 'Minimum effort' | 'Keep informed' | 'Keep satisfied' | 'Key players (Maximum effort)';
  rationale: string;
  conflictScenario: string;
}

// ----------------------------------------------------
// 5e. Business Management Toolkit (BMT) Core Types
// ----------------------------------------------------
export type BMTToolType = 
  | 'swot'
  | 'ansoff'
  | 'steeple'
  | 'bcg'
  | 'circular-models'
  | 'decision-trees'
  | 'business-plan'
  | 'descriptive-stats';

export interface BMTToolMeta {
  id: BMTToolType;
  name: string;
  toolNumber: number;
  classification: 'Situational' | 'Decision-Making' | 'Planning';
  syllabusLevel: 'SL & HL' | 'HL Only';
  chapter: string;
  purpose: string;
  coreInputs: string[];
  keyOutputs: string[];
  advantages: string[];
  limitations: string[];
  integratedWith: string[];
}

// ----------------------------------------------------
// 6. Entity Showdown & Entity Matchmaker
// ----------------------------------------------------
export type BusinessEntityType = 
  | 'sole-trader'
  | 'partnership'
  | 'private-limited-company'
  | 'public-limited-company'
  | 'social-enterprise';

export interface EntityDimensionComparison {
  dimension: 
    | 'Legal Status'
    | 'Liability'
    | 'Capital & Finance'
    | 'Ownership & Governance'
    | 'Continuity'
    | 'Regulation & Disclosure'
    | 'Taxation'
    | 'Control & Decision-Making';
  soleTrader: string;
  partnership: string;
  ltd: string;
  plc: string;
  socialEnterprise: string;
}

export interface EntityMatchmakerScenario {
  id: string;
  scenarioTitle: string;
  scenarioDescription: string;
  correctEntity: BusinessEntityType;
  correctEntityLabel: string;
  rationale: string;
  distractorExplanations: Record<string, string>;
}

// ----------------------------------------------------
// 7. High-Yield Cram Mode
// ----------------------------------------------------
export interface DefinitionItem {
  id: string;
  term: string;
  subunit: SyllabusSubunit;
  definition: string;
  keyExamTokens: string[];
  formulaOrExample?: string;
}

export interface DistinctionItem {
  id: string;
  conceptA: string;
  conceptB: string;
  comparisonCriteria: string;
  contrastStatement: string;
  examTrapWarning: string;
}

export interface GoldenMatrixRule {
  id: string;
  ruleTitle: string;
  category: 'SWOT' | 'Ansoff' | 'STEEPLE' | 'BCG' | 'BMT' | 'Stakeholders';
  corePrinciple: string;
  actionProtocol: string;
  examApplicationTip: string;
}

// ----------------------------------------------------
// 8. GET CASH Mnemonic Vault & Frameworks
// ----------------------------------------------------
export interface GetCashItem {
  letter: 'G' | 'E' | 'T' | 'C' | 'A' | 'S' | 'H';
  factorTitle: string;
  definition: string;
  examPhrasing: string;
  realWorldVignette: string;
  speedMatchQuote: string;
}

export interface SmartObjectiveElement {
  letter: 'S' | 'M' | 'A' | 'R' | 'T';
  term: string;
  definition: string;
  goodExample: string;
  badExample: string;
}

export interface PeelFrameworkElement {
  token: 'P' | 'E1' | 'E2' | 'L';
  name: string;
  colorCode: string;
  description: string;
  sentenceStarters: string[];
}

// ----------------------------------------------------
// 9. Study Guide Content Item
// ----------------------------------------------------
export interface StudySection {
  id: string;
  title: string;
  content: string; // Markdown or rich text
  keyTakeaways: string[];
  examTips?: string[];
  visualModel?: {
    type: 'mermaid' | 'table' | 'cards';
    title: string;
    data: any;
  };
}

export interface StudyUnit {
  id: SyllabusSubunit;
  title: string;
  unitCode: string;
  subtitle: string;
  estimatedReadTime: string;
  description: string;
  sections: StudySection[];
  highYieldTerms: { term: string; definition: string }[];
}
