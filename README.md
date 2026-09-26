# IB SL Business Management Study Suite

A production-grade, editorial light-mode Next.js study application and revision suite for IB SL Business Management, covering Units 1.1, 1.2, 1.3, SWOT Analysis, and the Ansoff Growth Matrix. Built with Next.js 15 (App Router), React 19, and Tailwind CSS.

---

## Key Features

1. **Matrix Master (Interactive Quadrant Sorter):**
   - Native HTML5 drag-and-drop on desktop with tap-to-place fallback for mobile touchscreens.
   - Dual modes: **Ansoff Growth Matrix** (14 real-world cards) and **SWOT Analysis** (12 cards + 4 strategic combination pairings: S-O, W-O, S-T, W-T).
   - Immediate feedback with correct placement and examiner rationale.

2. **Rapid Blitz MCQ Sprint:**
   - 3 challenge modes via mode picker: **120-Second Sprint** (with +1 rapid bonus for answers under 3 seconds), **60-Second Sudden Death** (1 mistake ends run), and **Endless Mastery** (3 heart lives, untimed).
   - Instant 2-sentence pedagogical rationale (correct explanation + distractor breakdown).
   - Keyboard accelerators (`1`, `2`, `3`, `4` or `A`, `B`, `C`, `D`).

3. **Entity Showdown & Matchmaker:**
   - 8-dimension comparative matrix for 5 business entities (Sole Trader, Partnership, Ltd, PLC, Social Enterprises).
   - Interactive Entity Matchmaker with 5 realistic startup case challenges and distractor explanations.

4. **Exam Practice & Written Rubrics:**
   - **2-Mark Bank:** 32 definitions with 2-point mark breakdown checklists and examiner advice.
   - **4-Mark Applied Questions:** 12 applied questions featuring **Split-Screen Editor** with real-time auto-saving, **Live Markdown Preview** toggle (`[Write] | [Preview]`), and **Study Model Exemplar** with color-coded PEEL tokens (Point, Explanation, Evidence, Link).
   - **6-Mark Analytical Questions:** 7 analytical questions with level markbands (Levels 1–3) and criterion rubrics.
   - **Production Markdown Rendering:** Universal `MarkdownRenderer` built on `react-markdown`, `remark-gfm`, and `rehype-raw` supporting GFM tables, ASCII box-drawing diagrams, dual inline/block modes, and editorial styling.

5. **10-Minute High-Yield Cram Mode:**
   - One-click filterable review of **Top 20 Definitions**, **Top 5 High-Stakes Exam Distinctions**, and **5 Golden Matrix Decision Rules**.
   - "Got it / Hide" toggles to isolate remaining uncertainties.

6. **GET CASH Mnemonic Vault:**
   - Flippable flashcards for startup motives (Growth, Earnings, Transference, Challenge, Autonomy, Security, Hobbies).
   - 30-Second Speed Matcher mini-game matching entrepreneur quotes to motives.
   - Sibling tabs for SMART Objectives and the PEEL Framework.

7. **Confidence & Mastery Heatmap:**
   - Color-coded mastery grid across all 5 subunits and assessment tiers.
   - One-click "Weakness Workout" targeting lowest-scoring topics.

8. **Comprehensive Academic Study Guides:**
   - Complete syllabus readers for all 5 units with collapsible sections, key takeaways, and exam tip callouts.

---

## Getting Started

### Prerequisites
- Node.js >= 18.18 (tested on Node v26.5.0)
- npm >= 9.0 (tested on npm 11.17.0)

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification
```bash
# Build production bundle
npm run build

# Start production server
npm start
```

### Static Analysis
```bash
npm run lint
```

---

## Project Structure

```
├── src/
│   ├── app/                                  # Next.js 15 App Router
│   │   ├── layout.tsx                        # Root layout with fonts, navigation, and context provider
│   │   ├── page.tsx                          # Dashboard with quick actions, heatmap, and module directory
│   │   ├── globals.css                       # Strict light mode styles and editorial typography
│   │   ├── blitz/page.tsx                    # Rapid Blitz MCQ Sprint
│   │   ├── matrix-master/page.tsx            # Matrix Master quadrant sorter
│   │   ├── entities/page.tsx                 # Entity Showdown and Matchmaker
│   │   ├── practice/page.tsx                 # Written exam practice hub
│   │   ├── practice/mcq/page.tsx             # Self-paced untimed MCQ question bank
│   │   ├── practice/written/page.tsx         # Written workspace with split-screen editor
│   │   ├── cram/page.tsx                     # 10-Minute High-Yield Cram Mode
│   │   ├── mnemonics/page.tsx                # GET CASH Mnemonic Vault and Speed Matcher
│   │   ├── study/page.tsx                    # Study Guides directory
│   │   └── study/[unitId]/page.tsx           # Dynamic study guide reader
│   ├── components/
│   │   ├── ui/                               # Editorial tactile buttons, badges, cards, modals, MarkdownRenderer
│   │   ├── layout/                           # Responsive navigation header
│   │   ├── drills/                           # MatrixMaster, RapidBlitz, EntityShowdown
│   │   ├── exam/                             # ExamPractice, SplitScreenExam, ExemplarHighlighter, PeelRubric
│   │   ├── cram/                             # HighYieldCram, GetCashVault
│   │   └── dashboard/                        # MasteryHeatmap, QuickActions
│   ├── context/
│   │   └── StudyProgressContext.tsx          # Hydration-safe localStorage state provider
│   ├── data/
│   │   ├── question-bank.ts                  # 30 MCQs + 32 2-mark questions
│   │   ├── model-answers.ts                  # 12 4-mark PEEL + 7 6-mark questions
│   │   ├── matrix-master.ts                  # 14 Ansoff cards + 12 SWOT cards + 4 strategy pairs
│   │   ├── entity-showdown.ts                # 8 dimensions comparative table + 5 matchmaker scenarios
│   │   ├── cram-mode.ts                      # 20 definitions + 5 distinctions + 5 golden rules
│   │   ├── mnemonics.ts                      # GET CASH, SMART, and PEEL datasets
│   │   └── study-content.ts                  # Full curriculum notes for 5 units
│   ├── lib/
│   │   ├── utils.ts                          # Styling utilities and formatters
│   │   └── confetti.ts                       # Safe client-side canvas-confetti trigger
│   └── types/
│       └── curriculum.ts                     # Comprehensive TypeScript interfaces
├── docs/                                     # Raw extracted notes and textbook questions
└── .implement-loop/                          # Multi-loop memory and phase logs
```

---

## Curriculum Coverage & Data Integrity

| Dataset Component | Count | Verification Status |
| :--- | :---: | :---: |
| Multiple Choice Questions (MCQs) | **30** | Verified (6 in 1.1, 7 in 1.2, 7 in 1.3, 5 in SWOT, 5 in Ansoff) |
| 2-Mark Short Answer (AO1) | **32** | Verified (with 2-point criteria breakdown and examiner tips) |
| 4-Mark Applied PEEL (AO2) | **12** | Verified (Point 1 & Point 2 PEEL + 4-point rubric checklist) |
| 6-Mark Analytical Questions (AO2/AO3) | **7** | Verified (Two perspectives, synthesis, and 3-level markbands) |
| Ansoff Scenario Cards | **14** | Verified (across all 4 quadrants + related/unrelated) |
| SWOT Scenario Cards | **12** | Verified (with STEEPLE tags) + 4 Strategy Pairs |
| Entity Showdown Matrix | **8** | Verified (8 dimensions across 5 business entities) |
| Entity Matchmaker Scenarios | **5** | Verified (mini-case vignettes with distractor rationales) |
| High-Yield Cram Definitions | **20** | Verified (with examiner token highlights) |
| High-Stakes Exam Distinctions | **5** | Verified (with exam trap warnings) |
| Golden Matrix Decision Rules | **5** | Verified (4 SWOT rules + Ansoff risk gradient) |
| GET CASH Mnemonic Factors | **7** | Verified (G, E, T, C, A, S, H with 7 speed quotes) |
| Sibling Frameworks | **2** | Verified (SMART 5 elements + PEEL 4 tokens) |
| Complete Study Units | **5** | Verified (39 sections and 99 high-yield defined terms) |
