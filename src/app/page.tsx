'use client';

import React from 'react';
import Link from 'next/link';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { MasteryHeatmap } from '@/components/dashboard/MasteryHeatmap';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle,
  FileCheck,
  Target
} from 'lucide-react';

const SYLLABUS_MODULES = [
  {
    id: '1.1-what-is-a-business',
    code: 'Unit 1.1',
    title: 'What is a Business?',
    summary: 'Inputs, transformation process, goods vs services, economic sectors, chain of production, and GET CASH startup motives.',
    mcqs: 6,
    shortAnswer: 7,
  },
  {
    id: '1.2-types-of-business-entities',
    code: 'Unit 1.2',
    title: 'Types of Business Entities',
    summary: 'Sole traders, ordinary partnerships, Ltd, PLC, cooperatives, NGOs, limited liability, and entity choice factors.',
    mcqs: 7,
    shortAnswer: 8,
  },
  {
    id: '1.3-business-objectives',
    code: 'Unit 1.3',
    title: 'Business Objectives',
    summary: 'Vision and mission statements, SMART objectives hierarchy, ethical code of practice, CSR, and stakeholder conflicts.',
    mcqs: 7,
    shortAnswer: 7,
  },
  {
    id: '1.4-stakeholders',
    code: 'Unit 1.4',
    title: 'Stakeholders',
    summary: 'Internal vs external stakeholders, stakeholder conflict, mutual benefits synergy, and Mendelow power-interest matrix.',
    mcqs: 6,
    shortAnswer: 6,
  },
  {
    id: 'bmt-swot-analysis',
    code: 'BMT: SWOT',
    title: 'SWOT Analysis',
    summary: 'Internal strengths and weaknesses, external opportunities and threats, STEEPLE scan, and SO/WO/ST/WT strategy pairing.',
    mcqs: 5,
    shortAnswer: 6,
  },
  {
    id: 'bmt-ansoff-matrix',
    code: 'BMT: Ansoff',
    title: 'Ansoff Growth Matrix',
    summary: 'Market Penetration, Product Development, Market Development, Diversification (related vs unrelated), and risk gradients.',
    mcqs: 5,
    shortAnswer: 4,
  },
  {
    id: 'bmt-steeple-analysis',
    code: 'BMT: STEEPLE',
    title: 'STEEPLE Analysis',
    summary: 'External macro-environmental audit across Social, Technological, Economic, Environmental, Political, Legal, and Ethical dimensions.',
    mcqs: 6,
    shortAnswer: 6,
  },
  {
    id: 'bmt-toolkit',
    code: 'BMT: Master',
    title: 'BM Toolkit Master Guide',
    summary: 'Master the 8 SL tools: BCG Matrix portfolio cash balancing, Circular Business Models, and quantitative Decision Trees.',
    mcqs: 6,
    shortAnswer: 4,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Editorial Hero Banner */}
      <div className="bg-white rounded-2xl border border-border shadow-subtle p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>IB SL Business Management Exam Suite</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
            Master Units 1.1–1.4, SWOT, Ansoff & the Full BM Toolkit for 100% Exam Readiness.
          </h1>

          <p className="text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
            Engineered around the Paul Hoang 5th Edition curriculum and visual student notes. Features rapid timed drills, 5-way matrix sorters, split-screen PEEL writing rubrics, and the 8-tool Business Management Toolkit hub.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-border/80 text-xs text-text-muted">
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <CheckCircle className="w-4 h-4 text-emerald-600" /> 48 Multiple Choice Questions
            </span>
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <FileCheck className="w-4 h-4 text-blue-600" /> 48 2-Mark Knowledge Questions
            </span>
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <Target className="w-4 h-4 text-amber-600" /> 28 Applied 4- & 6-Mark PEEL Rubrics
            </span>
          </div>
        </div>
      </div>

      {/* Quick Launch Cards */}
      <QuickActions />

      {/* Confidence & Mastery Heatmap */}
      <MasteryHeatmap />

      {/* Syllabus Modules Directory */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-text-primary tracking-tight">
              Syllabus Study Modules
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Read comprehensive curriculum notes and review high-yield terminology before testing.
            </p>
          </div>
          <Link href="/study" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SYLLABUS_MODULES.map((mod) => (
            <Link key={mod.id} href={`/study/${mod.id}`} className="group">
              <Card hoverEffect className="p-5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {mod.code}
                    </span>
                    <span className="text-[11px] text-text-muted">
                      {mod.mcqs} MCQs &bull; {mod.shortAnswer} 2-Mark
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-text-primary group-hover:text-blue-600 transition mb-1">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {mod.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between text-xs text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform">
                  <span>Open Study Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
