'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { 
  Compass, 
  Grid, 
  Globe2, 
  PieChart, 
  Recycle, 
  GitFork, 
  FileText, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  HelpCircle,
  Lightbulb,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface BMTToolSummary {
  id: string;
  toolNumber: number;
  name: string;
  chapter: string;
  classification: 'Situational' | 'Decision-Making' | 'Planning';
  icon: React.ElementType;
  color: string;
  purpose: string;
  whenToUse: string;
  keyOutputs: string[];
  drillLink?: string;
  studyLink: string;
}

const BMT_TOOLS: BMTToolSummary[] = [
  {
    id: 'swot',
    toolNumber: 1,
    name: 'SWOT Analysis',
    chapter: 'Chapter 44',
    classification: 'Situational',
    icon: Grid,
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    purpose: 'Audits internal tangible/intangible strengths and weaknesses alongside external opportunities and threats.',
    whenToUse: 'Use during initial strategic planning to establish situational awareness before committing capital.',
    keyOutputs: ['2x2 SWOT Matrix', 'TOWS Strategic Pairs (Maxi-Maxi, Mini-Mini)'],
    drillLink: '/matrix-master',
    studyLink: '/study/bmt-swot-analysis',
  },
  {
    id: 'ansoff',
    toolNumber: 2,
    name: "Ansoff's Growth Matrix",
    chapter: 'Chapter 45',
    classification: 'Decision-Making',
    icon: Compass,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    purpose: 'Categorizes corporate growth strategies into Market Penetration, Product Development, Market Development, and Diversification.',
    whenToUse: 'Use when the board is evaluating whether to develop new products or expand into unfamiliar markets.',
    keyOutputs: ['4 Quadrant Growth Matrix', 'Risk Gradient Analysis'],
    drillLink: '/matrix-master',
    studyLink: '/study/bmt-ansoff-matrix',
  },
  {
    id: 'steeple',
    toolNumber: 3,
    name: 'STEEPLE Analysis',
    chapter: 'Chapter 46',
    classification: 'Situational',
    icon: Globe2,
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    purpose: 'Comprehensive audit of external macro-environmental forces across Social, Technological, Economic, Environmental, Political, Legal, and Ethical dimensions.',
    whenToUse: 'Use before entering foreign markets or when analyzing external macro shocks (inflation, regulation, AI disruption).',
    keyOutputs: ['7-Dimension Macro Audit', 'Populates SWOT Opportunities & Threats', 'Weighted STEEPLE Priority Scores'],
    drillLink: '/matrix-master',
    studyLink: '/study/bmt-steeple-analysis',
  },
  {
    id: 'bcg',
    toolNumber: 4,
    name: 'Boston Consulting Group (BCG) Matrix',
    chapter: 'Chapter 47',
    classification: 'Decision-Making',
    icon: PieChart,
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    purpose: 'Analyzes a firm\'s multi-product portfolio based on market growth rate and relative market share to optimize cash flow.',
    whenToUse: 'Use when deciding how to allocate capital between cash-generating mature brands and cash-consuming growth products.',
    keyOutputs: ['Stars, Cash Cows, Question Marks, Dogs', 'Build, Harvest, Hold, Divest Strategic Actions'],
    drillLink: '/matrix-master',
    studyLink: '/study/bmt-toolkit',
  },
  {
    id: 'business-plan',
    toolNumber: 5,
    name: 'Business Plan',
    chapter: 'Chapter 48',
    classification: 'Planning',
    icon: FileText,
    color: 'bg-stone-50 text-stone-700 border-stone-200',
    purpose: 'Official guiding document detailing strategic mission, marketing plan, financial forecasts, and operational roadmap.',
    whenToUse: 'Use when launching a new business startup or applying for commercial bank loans and equity funding.',
    keyOutputs: ['Executive Summary', 'Cash Flow Forecasts', 'HR & Operational Roadmap'],
    studyLink: '/study/bmt-toolkit',
  },
  {
    id: 'decision-trees',
    toolNumber: 6,
    name: 'Decision Trees',
    chapter: 'Chapter 49',
    classification: 'Decision-Making',
    icon: GitFork,
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    purpose: 'Quantitative diagrammatic model calculating Expected Monetary Value (EMV) and Net Payoff under conditions of risk.',
    whenToUse: 'Use when choosing between mutually exclusive capital investment projects with known historical probabilities.',
    keyOutputs: ['Decision Nodes & Chance Nodes', 'Net Expected Monetary Value (Net EMV)'],
    studyLink: '/study/bmt-toolkit',
  },
  {
    id: 'descriptive-stats',
    toolNumber: 7,
    name: 'Descriptive Statistics',
    chapter: 'Chapter 50',
    classification: 'Situational',
    icon: BarChart3,
    color: 'bg-teal-50 text-teal-700 border-teal-200',
    purpose: 'Quantitative analysis summarizing raw business datasets using central tendency (mean, median, mode) and dispersion.',
    whenToUse: 'Use when interpreting market research survey findings, quality control defects, or employee salary structures.',
    keyOutputs: ['Mean, Median, Mode', 'Interquartile Range & Standard Deviation'],
    studyLink: '/study/bmt-toolkit',
  },
  {
    id: 'circular-models',
    toolNumber: 8,
    name: 'Circular Business Models (CBMs)',
    chapter: 'Chapter 51',
    classification: 'Decision-Making',
    icon: Recycle,
    color: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    purpose: 'Restorative commercial frameworks replacing linear \'take-make-waste\' production with closed resource loops.',
    whenToUse: 'Use when redesigning supply chains to cut carbon emissions, comply with landfill laws, or offer Product-Service Systems.',
    keyOutputs: ['Circular Supply & Resource Recovery', 'Product Life Extension & Sharing Models', 'Product-Service System (PSS)'],
    studyLink: '/study/bmt-toolkit',
  },
];

interface DiagnosticCase {
  id: string;
  scenario: string;
  correctTool: string;
  reason: string;
  options: string[];
}

const DIAGNOSTIC_CASES: DiagnosticCase[] = [
  {
    id: 'diag-01',
    scenario: 'A multi-brand beverage conglomerate has a mature cola generating high cash surpluses, but its new energy tea is burning cash in a fast-growing market. Which tool should executives use to manage this portfolio?',
    correctTool: 'Boston Consulting Group (BCG) Matrix',
    reason: 'The BCG Matrix explicitly evaluates product portfolio balance across market growth and relative market share, showing how mature Cash Cows fund Question Marks.',
    options: ['Boston Consulting Group (BCG) Matrix', 'STEEPLE Analysis', 'Decision Trees', 'Ansoff Matrix']
  },
  {
    id: 'diag-02',
    scenario: 'A European retailer is facing a 20% national minimum wage hike, new GDPR privacy compliance laws, and demographic population aging. Which tool systematically audits these external shifts?',
    correctTool: 'STEEPLE Analysis',
    reason: 'STEEPLE scans the 7 external macro-environmental dimensions (Legal minimum wage, Technological privacy, Social demographics) that lie beyond direct corporate control.',
    options: ['STEEPLE Analysis', 'Circular Business Models', 'SWOT Analysis', 'Business Plan']
  },
  {
    id: 'diag-03',
    scenario: 'A sportswear corporation must decide between spending $30M to automate a distribution hub (70% high demand probability) versus $15M to expand retail outlets. Which quantitative tool calculates the optimal choice?',
    correctTool: 'Decision Trees',
    reason: 'Decision Trees calculate the probability-weighted Expected Monetary Value (EMV) and deduct initial investment costs to identify the mathematically highest net financial payoff.',
    options: ['Decision Trees', 'STEEPLE Analysis', 'Descriptive Statistics', 'SWOT Analysis']
  },
  {
    id: 'diag-04',
    scenario: 'A commercial lighting manufacturer wants to stop selling disposable light bulbs to airports and instead lease illumination services while retaining ownership of the fixtures. Which model describes this strategy?',
    correctTool: 'Circular Business Models (CBMs)',
    reason: 'This represents a Product-Service System (PSS), one of the five core Circular Business Models where customers buy the function or utility rather than physical hardware.',
    options: ['Circular Business Models (CBMs)', 'Ansoff Matrix', 'BCG Matrix', 'Business Plan']
  }
];

export function ToolkitHub() {
  const [filter, setFilter] = useState<'all' | 'Situational' | 'Decision-Making' | 'Planning'>('all');
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const filteredTools = filter === 'all' 
    ? BMT_TOOLS 
    : BMT_TOOLS.filter((t) => t.classification === filter);

  const currentCase = DIAGNOSTIC_CASES[selectedCaseIdx];

  const handleSelectAnswer = (ans: string) => {
    if (isAnswered) return;
    setSelectedAnswer(ans);
    setIsAnswered(true);
  };

  const handleNextCase = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setSelectedCaseIdx((prev) => (prev + 1) % DIAGNOSTIC_CASES.length);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Editorial Header Banner */}
      <div className="bg-white rounded-2xl border border-border shadow-subtle p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>IB Business Management Toolkit (BMT) Command Center</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
            The Complete Business Management Toolkit
          </h1>

          <p className="text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
            Master all eight core Standard Level (SL) analytical tools embedded across the IB syllabus. From external macro-environmental auditing with STEEPLE and portfolio cash balancing with the BCG Matrix to quantitative Decision Trees and Circular Business Models.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-border/80 text-xs text-text-muted">
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 8 Standard Level (SL) Tools
            </span>
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <Layers className="w-4 h-4 text-blue-600" /> Situational, Decision & Planning Models
            </span>
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <Globe2 className="w-4 h-4 text-purple-600" /> Cross-Tool Synthesis Frameworks
            </span>
          </div>
        </div>
      </div>

      {/* Synthesis Cycle Overview Banner */}
      <Card className="p-6 bg-gradient-to-r from-blue-50/40 via-white to-purple-50/40 border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              The Strategic Decision-Making Cycle
            </span>
            <h2 className="text-base sm:text-lg font-bold text-text-primary">
              How the 8 BMT Tools Connect in IB Examinations
            </h2>
            <p className="text-xs text-text-secondary max-w-2xl leading-relaxed">
              Top-scoring IB students never use tools in silos. STEEPLE scans the external environment to populate SWOT Opportunities & Threats; the BCG Matrix audits existing cash flows to see if Cash Cows can fund Ansoff growth strategies; and Decision Trees calculate probability-weighted expected payoffs.
            </p>
          </div>
          <Link href="/matrix-master">
            <Button variant="primary" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Open Matrix Master Studio
            </Button>
          </Link>
        </div>
      </Card>

      {/* Interactive Tool Diagnostic Matchmaker */}
      <Card className="p-6 border-border shadow-subtle">
        <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary">
                BMT Diagnostic Matchmaker: Which Tool Should You Use?
              </h3>
              <p className="text-[11px] text-text-secondary">
                Case Scenario {selectedCaseIdx + 1} of {DIAGNOSTIC_CASES.length}
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-text-muted">
            [Tool Selection Drill]
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-text-primary leading-relaxed bg-surface-subtle p-4 rounded-xl border border-border">
            {currentCase.scenario}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentCase.options.map((opt) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === currentCase.correctTool;

              let style = 'border-border bg-white hover:border-blue-400 hover:bg-blue-50/20';
              if (isAnswered) {
                if (isCorrect) style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                else if (isSelected) style = 'border-red-500 bg-red-50 text-red-950';
                else style = 'border-border/60 opacity-60';
              }

              return (
                <button
                  key={opt}
                  disabled={isAnswered}
                  onClick={() => handleSelectAnswer(opt)}
                  className={`p-3.5 rounded-xl border text-left text-xs font-medium transition cursor-pointer flex items-center justify-between ${style}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs space-y-2 animate-in fade-in duration-150">
              <div className="flex items-center gap-1.5 font-bold text-blue-900">
                <CheckCircle2 className="w-4 h-4 text-blue-700" />
                <span>Examiner Rationale: {currentCase.correctTool}</span>
              </div>
              <p className="text-blue-950 leading-relaxed">
                {currentCase.reason}
              </p>
              <div className="pt-2 flex justify-end">
                <Button variant="primary" size="sm" onClick={handleNextCase} icon={<ChevronRight className="w-3.5 h-3.5" />}>
                  Next Diagnostic Case
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Directory of the 8 SL Tools with Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-text-primary tracking-tight">
              The 8 SL Toolkit Directory
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Explore comprehensive study guides and interactive drills for each tool.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-subtle rounded-xl border border-border self-start sm:self-auto">
            {(['all', 'Situational', 'Decision-Making', 'Planning'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-blue-700 shadow-subtle'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {cat === 'all' ? 'All 8 Tools' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} hoverEffect className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${tool.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold font-mono text-text-muted uppercase">
                          Tool {tool.toolNumber} • {tool.chapter}
                        </span>
                        <h3 className="text-base font-bold text-text-primary">
                          {tool.name}
                        </h3>
                      </div>
                    </div>
                    <Badge variant={tool.classification === 'Situational' ? 'ao1' : tool.classification === 'Decision-Making' ? 'ao3' : 'neutral'}>
                      {tool.classification}
                    </Badge>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {tool.purpose}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-border/80 text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase block">When to Use</span>
                      <p className="text-[11px] text-text-primary font-medium mt-0.5">{tool.whenToUse}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase block">Key Outputs</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {tool.keyOutputs.map((out) => (
                          <span key={out} className="text-[10px] px-2 py-0.5 rounded bg-surface-subtle border border-border text-text-secondary font-medium">
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-border flex items-center gap-2">
                  <Link href={tool.studyLink} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full" icon={<ExternalLink className="w-3 h-3" />}>
                      Study Guide
                    </Button>
                  </Link>
                  {tool.drillLink && (
                    <Link href={tool.drillLink} className="flex-1">
                      <Button variant="primary" size="sm" className="w-full" icon={<Compass className="w-3 h-3" />}>
                        Matrix Drill
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
