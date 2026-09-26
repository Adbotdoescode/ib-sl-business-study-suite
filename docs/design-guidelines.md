# Design Guidelines: IB SL Business Study Suite

## 1. Aesthetic Direction & Core Philosophy

The design system for the IB SL Business Study Suite is built on an **editorial, Swiss-inspired, clean light-mode philosophy** influenced by platforms like Linear, Stripe Press, and Notion. It prioritizes academic rigor, cognitive clarity, and immediate usability over superficial decoration.

### The "Anti-AI" Mandate
- **Strict Light Mode:** Default and exclusive light mode palette. High-contrast, warm, readable typography designed for sustained daytime studying.
- **No Generic AI Tropes:** Zero purple/cyan gradients, zero floating glowing orbs, zero blurred glassmorphism cards, zero fake 3D floating shapes.
- **No Emojis as UI Icons:** Use clean, consistent, monochrome SVG icons (Lucide/Heroicons) with uniform stroke width (`1.75px` or `2px`).
- **Tactile & Editorial:** Generous whitespace, refined micro-typography, crisp hairline borders, and subtle physical shadows that elevate key study elements without distraction.

---

## 2. Color Palette & Tokens

| Token | Hex Value | Role / Usage |
|---|---|---|
| `--color-canvas` | `#FBFBF9` | Primary page background (warm editorial off-white) |
| `--color-surface` | `#FFFFFF` | Study cards, question containers, modal surfaces |
| `--color-surface-subtle` | `#F5F5F2` | Secondary sidebars, inactive tabs, code/term callouts |
| `--color-border` | `#E5E7EB` | Hairline card and divider borders |
| `--color-border-subtle` | `#F0F0EC` | Internal item separators, table borders |
| `--color-text-primary` | `#111827` | Headings, questions, primary high-contrast text |
| `--color-text-secondary` | `#4B5563` | Body copy, explanations, case study stimulus text |
| `--color-text-muted` | `#6B7280` | Metadata, timestamps, mark allocations, keyboard hints |
| `--color-primary` | `#2563EB` | Active buttons, selected options, progress bars |
| `--color-primary-hover` | `#1D4ED8` | Hover state for primary action elements |
| `--color-success` | `#059669` | Correct MCQ options, AO1 mark criteria met |
| `--color-success-bg` | `#ECFDF5` | Success feedback banner background |
| `--color-warning` | `#D97706` | Hints, partial credit alerts, time warnings |
| `--color-warning-bg` | `#FFFBEB` | Warning banner background |
| `--color-danger` | `#DC2626` | Incorrect MCQ options, missing exam criteria |
| `--color-danger-bg` | `#FEF2F2` | Error feedback banner background |

### Matrix Quadrant Semantic Palette
For the interactive SWOT and Ansoff Matrix components:
- **Strengths / Market Penetration:** Subtle Emerald tint (`#ECFDF5` bg, `#065F46` text, `#A7F3D0` border)
- **Weaknesses / Product Development:** Subtle Sky/Blue tint (`#EFF6FF` bg, `#1E40AF` text, `#BFDBFE` border)
- **Opportunities / Market Development:** Subtle Amber tint (`#FFFBEB` bg, `#92400E` text, `#FDE68A` border)
- **Threats / Diversification:** Subtle Rose/Purple tint (`#FAF5FF` bg, `#6B21A8` text, `#E9D5FF` border)

---

## 3. Typography Hierarchy

The type system pairs clean, modern sans-serif fonts for operational precision with an optional editorial serif for study guide headers.

- **Primary UI & Reading Font:** Inter / Geist Sans (`font-sans`)
  - Headings: `font-semibold` or `font-bold` with tight letter tracking (`tracking-tight`, `-0.02em`).
  - Body: `15px` or `16px` (`text-[15px]` / `text-base`), line-height `1.6` (`leading-relaxed`), measure `65–75ch`.
- **Display / Guide Headers:** Newsreader / Georgia / Editorial Serif (`font-serif`, optional accent for module titles).
- **Tabular / Marks / Timers:** Tabular numeric lining (`font-mono font-medium tracking-normal tabular-nums`) for scores, stopwatch timers, and mark allocations `[4 marks]`.

### Type Scale
- **Display 1 (Module Title):** `text-3xl font-bold tracking-tight text-gray-900`
- **Heading 1 (Section / Question Header):** `text-2xl font-semibold tracking-tight text-gray-900`
- **Heading 2 (Card Title / Sub-topic):** `text-lg font-semibold text-gray-800`
- **Body Regular:** `text-base text-gray-700 leading-relaxed`
- **Body Small (Explanations & Feedback):** `text-sm text-gray-600 leading-normal`
- **Micro-labels (Badges & Marks):** `text-xs font-semibold tracking-wide uppercase`

---

## 4. Component Standards

### 4.1 Question Card
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E5E7EB`
- **Border Radius:** `12px` (`rounded-xl`)
- **Shadow:** `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)` (`shadow-sm`)
- **Padding:** `24px` (`p-6`) on desktop, `16px` (`p-4`) on mobile.
- **Header:** Flexbox with Subunit Badge (`1.2 Types of Entities`), Command Term Badge (`AO2 Explain`), and Mark Pill (`[4 marks]`).

### 4.2 Badges & Assessment Pills
- **Mark Pill:** `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200`
- **Command Term (AO1 Knowledge):** `bg-blue-50 text-blue-700 border-blue-200`
- **Command Term (AO2 Application):** `bg-amber-50 text-amber-700 border-amber-200`
- **Command Term (AO3 Analysis):** `bg-purple-50 text-purple-700 border-purple-200`

### 4.3 MCQ Option Selectors
- **Default State:** `border border-gray-200 bg-white hover:border-gray-400 hover:bg-gray-50/50 cursor-pointer rounded-lg p-4 transition-all duration-150`
- **Selected State (Pre-submit):** `border-blue-500 bg-blue-50/40 ring-1 ring-blue-500`
- **Correct State (Post-submit):** `border-emerald-500 bg-emerald-50/60 ring-1 ring-emerald-500 text-emerald-950`
- **Incorrect State (Post-submit):** `border-red-500 bg-red-50/60 ring-1 ring-red-500 text-red-950`

### 4.4 Buttons & Controls
- **Primary Action Button:** Solid Indigo/Blue (`bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition active:scale-[0.98] cursor-pointer`)
- **Secondary Action Button:** Outlined / Soft (`border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition active:scale-[0.98] cursor-pointer`)
- **Touch Target:** Minimum `44px x 44px` clickable area for all mobile interaction targets.

---

## 5. Interaction & Micro-Motion Rules

- **Timing:** Fast, crisp transitions (`150ms` to `200ms` `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Hover Micro-lift:** Subtle `translate-y-[-1px]` with slight shadow deepening for cards and primary buttons.
- **Feedback Immediate:** Instant visual state confirmation on click; no lagging spinners for local interactions.
- **Accessibility:** Respect `prefers-reduced-motion: reduce`. All interactive controls must feature visible keyboard focus outlines (`focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`).

---

## 6. Layout & Information Architecture

- **Max Content Width:** `max-w-6xl` (`1152px`) for main layout container, `max-w-3xl` (`768px`) for reading / study guide mode to maintain optimal character line length (`65-75ch`).
- **Sticky Progress Bar:** Top bar displaying test progress, score percentage, and active subunit during quiz sessions.
- **Split Screen / Drawer:** Side-by-side or sliding drawer on desktop for viewing the case study stimulus alongside the active 4-mark or 6-mark sub-questions.
