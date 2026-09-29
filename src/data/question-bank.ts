import { MCQQuestion, TwoMarkQuestion } from '@/types/curriculum';

// ============================================================================
// 1. Multiple Choice Questions (MCQs) - 30 Questions Total
// ============================================================================

export const MCQ_QUESTIONS: MCQQuestion[] = [
  // --------------------------------------------------------------------------
  // Unit 1.1: What is a Business? (Q1–Q6)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-1.1-01',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Core Definition & Purpose',
    questionNumber: 1,
    question: 'What is the fundamental economic purpose of business activity?',
    options: [
      { key: 'A', text: 'To maximize tax revenue paid to national governments.' },
      { key: 'B', text: 'To combine inputs through a transformation process to produce goods and services that satisfy human needs and wants.' },
      { key: 'C', text: 'To convert non-renewable natural resources exclusively into consumer durable goods.' },
      { key: 'D', text: 'To eliminate market competition by creating monopolistic barriers to entry.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Businesses function as transformation systems combining inputs (factors of production: land, labor, capital, enterprise) into finished goods and services that fulfill human needs and wants.',
      distractorAnalysis: 'Tax revenue (A) is a government benefit/externality; businesses do not exclusively produce durable goods (C); eliminating competition (D) describes anti-competitive strategy, not the fundamental purpose of business activity.'
    }
  },
  {
    id: 'mcq-1.1-02',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Factors of Production',
    questionNumber: 2,
    question: 'Which factor of production encompasses the human skill, initiative, and financial risk-taking required to manage and coordinate resources in pursuit of business opportunities?',
    options: [
      { key: 'A', text: 'Land' },
      { key: 'B', text: 'Labor' },
      { key: 'C', text: 'Capital' },
      { key: 'D', text: 'Enterprise' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Enterprise (entrepreneurship) organizes land, labor, and capital while bearing financial risk to identify and monetize market opportunities.',
      distractorAnalysis: 'Land (A) comprises natural physical resources, Labor (B) is physical/mental workforce effort, and Capital (C) encompasses man-made assets like machinery and finance.'
    }
  },
  {
    id: 'mcq-1.1-03',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Product Classification',
    questionNumber: 3,
    question: 'How do capital goods differ fundamentally from consumer goods?',
    options: [
      { key: 'A', text: 'Capital goods are sold to final households for immediate consumption, whereas consumer goods are sold to corporations.' },
      { key: 'B', text: 'Capital goods are physical goods used by other businesses to produce further goods and services, whereas consumer goods satisfy individual end-user desires.' },
      { key: 'C', text: 'Capital goods are always intangible services, whereas consumer goods are tangible physical products.' },
      { key: 'D', text: 'Capital goods do not depreciate in financial value over time.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Capital goods (producer goods like industrial machinery or delivery vans) are purchased by commercial firms to produce other outputs, whereas consumer goods directly satisfy final consumer wants.',
      distractorAnalysis: 'Final households buy consumer goods, not capital goods (A); capital goods are tangible and do depreciate (C & D).'
    }
  },
  {
    id: 'mcq-1.1-04',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Sector Classification',
    questionNumber: 4,
    question: 'An economy experiences a long-term structural shift where national employment moves from agricultural farming and mineral extraction to electronic manufacturing and industrial assembly. Which sector transition does this represent?',
    options: [
      { key: 'A', text: 'Primary sector to Secondary sector' },
      { key: 'B', text: 'Secondary sector to Tertiary sector' },
      { key: 'C', text: 'Tertiary sector to Quaternary sector' },
      { key: 'D', text: 'Quaternary sector to Primary sector' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Agriculture and extraction define the primary sector, whereas electronic manufacturing and assembly define the secondary sector, marking classical industrialization.',
      distractorAnalysis: 'Shifting to retail/banking represents tertiary (B), knowledge/R&D represents quaternary (C), and D is an inverted regression rarely seen in modern industrialization.'
    }
  },
  {
    id: 'mcq-1.1-05',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Functional Interdependence',
    questionNumber: 5,
    question: 'Which business function is directly responsible for identifying consumer needs, determining competitive pricing, promoting brand awareness, and managing channels of product distribution?',
    options: [
      { key: 'A', text: 'Operations Management' },
      { key: 'B', text: 'Finance and Accounts' },
      { key: 'C', text: 'Human Resource Management' },
      { key: 'D', text: 'Marketing' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Marketing identifies, anticipates, and satisfies customer requirements profitably via the 4 Ps (Product, Price, Place, Promotion).',
      distractorAnalysis: 'Operations (A) handles input-to-output transformation, Finance (B) oversees budgeting and cash flow, and HRM (C) oversees workforce management.'
    }
  },
  {
    id: 'mcq-1.1-06',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Startup Challenges',
    questionNumber: 6,
    question: 'Why do approximately 20% to 25% of new business start-ups fail within their first year of trading?',
    options: [
      { key: 'A', text: 'Over-reliance on public stock exchange equity flotation.' },
      { key: 'B', text: 'Poor cash flow management and insufficient working capital to survive extended customer credit periods.' },
      { key: 'C', text: 'Being subjected to corporate income taxes before making any revenue.' },
      { key: 'D', text: 'An excess of skilled labor and high production capacity.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Startups routinely experience cash flow crises when customer credit delays cash inflows while fixed supplier, rent, and wage liabilities fall due immediately.',
      distractorAnalysis: 'Startups cannot execute public stock exchange flotations (A); corporate income tax is levied exclusively on net profits, not pre-revenue operations (C); excess capacity is rarely a startup problem (D).'
    }
  },

  // --------------------------------------------------------------------------
  // Unit 1.2: Types of Business Entities (Q7–Q13)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-1.2-01',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Sole Traders & Partnerships',
    questionNumber: 7,
    question: 'What is the legal consequence of operating as an unincorporated business entity, such as a sole trader or ordinary partnership?',
    options: [
      { key: 'A', text: 'The business has a legal personality completely distinct from its owners.' },
      { key: 'B', text: 'The owners possess limited liability restricted to their invested capital.' },
      { key: 'C', text: 'The owners have unlimited liability, meaning personal assets can be seized to settle business debts.' },
      { key: 'D', text: 'The business is mandated by law to publish audited financial statements publicly.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Unincorporated entities lack a separate legal personhood; the owners are the business, meaning creditors can legally seize private personal assets to settle unpaid debts.',
      distractorAnalysis: 'Separate legal identity (A) and limited liability (B) belong to incorporated companies; unincorporated entities enjoy financial privacy and do not publish accounts (D).'
    }
  },
  {
    id: 'mcq-1.2-02',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Partnerships',
    questionNumber: 8,
    question: 'Which document formally outlines the capital contribution, voting rights, profit-sharing ratios, and dispute resolution procedures among partners in a partnership?',
    options: [
      { key: 'A', text: 'Memorandum of Association' },
      { key: 'B', text: 'Articles of Association' },
      { key: 'C', text: 'Deed of Partnership' },
      { key: 'D', text: 'Certificate of Incorporation' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The Deed of Partnership is the formal contract regulating profit shares, capital contributions, responsibilities, and dissolution rules between partners.',
      distractorAnalysis: 'The Memorandum, Articles of Association, and Certificate of Incorporation (A, B, D) are legal documents specifically governing incorporated limited companies.'
    }
  },
  {
    id: 'mcq-1.2-03',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Ltd vs. PLC',
    questionNumber: 9,
    question: 'How does a privately held company (private limited company / Ltd) differ from a publicly held company (public limited company / PLC)?',
    options: [
      { key: 'A', text: 'A privately held company cannot offer its shares to the general public on an open stock exchange.' },
      { key: 'B', text: 'A privately held company is owned by the government, whereas a publicly held company is privately owned.' },
      { key: 'C', text: 'A privately held company\'s owners face unlimited liability.' },
      { key: 'D', text: 'A publicly held company cannot issue shares with voting rights.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Privately held companies (Ltd) sell equity privately with board approval and are prohibited from advertising or trading shares on a public stock exchange.',
      distractorAnalysis: 'Neither is state-owned (B); both enjoy limited liability (C); PLCs issue ordinary voting shares traded at AGMs (D).'
    }
  },
  {
    id: 'mcq-1.2-04',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Limited Liability',
    questionNumber: 10,
    question: 'What primary protection does the concept of limited liability provide to corporate shareholders?',
    options: [
      { key: 'A', text: 'It limits the maximum tax rate paid by the corporation to 10%.' },
      { key: 'B', text: 'It restricts a shareholder\'s potential financial loss to the exact amount of money invested in purchasing company shares.' },
      { key: 'C', text: 'It prevents the company from ever declaring bankruptcy.' },
      { key: 'D', text: 'It protects company directors from civil lawsuits involving employee negligence.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Limited liability legally ring-fences a shareholder\'s personal assets so that maximum financial loss is capped strictly at their share purchase capital.',
      distractorAnalysis: 'Limited liability does not alter statutory corporation tax rates (A), prevent corporate insolvency (C), or shield negligent directors from personal tort liability (D).'
    }
  },
  {
    id: 'mcq-1.2-05',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Social Enterprises: Cooperatives',
    questionNumber: 11,
    question: 'What is the core governance principle distinguishing a cooperative from a standard joint-stock limited company?',
    options: [
      { key: 'A', text: 'Voting rights in a cooperative are proportional to the number of shares owned (1 share = 1 vote).' },
      { key: 'B', text: 'Cooperatives operate strictly as non-profit charitable bodies exempt from commercial competition.' },
      { key: 'C', text: 'Cooperatives operate on democratic member control where each member has one vote regardless of capital contributed (1 member = 1 vote).' },
      { key: 'D', text: 'Cooperatives cannot hire salaried non-member employees.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Cooperatives are democratic member-owned social enterprises operating under "one member, one vote," preventing wealth-based domination.',
      distractorAnalysis: 'Standard companies use 1 share = 1 vote (A); cooperatives are for-profit social enterprises seeking commercial surplus for members (B); cooperatives frequently employ salaried staff (D).'
    }
  },
  {
    id: 'mcq-1.2-06',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Social Enterprises: NGOs',
    questionNumber: 12,
    question: 'Which characteristic uniquely identifies a Non-Governmental Organization (NGO)?',
    options: [
      { key: 'A', text: 'It is established, funded, and managed directly by central government ministries.' },
      { key: 'B', text: 'It operates within the private sector, pursues social or environmental objectives, and does not distribute profits to private shareholders.' },
      { key: 'C', text: 'It sells equity shares to retail investors on national stock exchanges to fund operations.' },
      { key: 'D', text: 'It operates exclusively within primary extraction industries.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'NGOs are private sector, not-for-profit social enterprises that reinvest 100% of operational surplus into their humanitarian, social, or ecological missions.',
      distractorAnalysis: 'NGOs are completely independent of state ministries (A), cannot issue public stock equity (C), and are not extraction entities (D).'
    }
  },
  {
    id: 'mcq-1.2-07',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Public Sector Companies',
    questionNumber: 13,
    question: 'Hong Kong Disneyland is jointly owned by the Hong Kong Special Administrative Region Government (52% majority stake) and The Walt Disney Company (48% stake). How is this entity categorized in IB Business Management?',
    options: [
      { key: 'A', text: 'A sole proprietorship' },
      { key: 'B', text: 'A public-private partnership (PPP) / Public sector company operated for commercial return' },
      { key: 'C', text: 'An unincorporated worker cooperative' },
      { key: 'D', text: 'A non-governmental charitable foundation' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Hong Kong Disneyland operates as a public sector company / PPP where the government holds majority equity alongside a commercial corporation for economic development and tourism return.',
      distractorAnalysis: 'It has corporate structure and thousands of staff (not A or C), and is an incorporated commercial profit-generating resort (not D).'
    }
  },

  // --------------------------------------------------------------------------
  // Unit 1.3: Business Objectives (Q14–Q20)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-1.3-01',
    subunit: '1.3-business-objectives',
    topicTag: 'Vision vs Mission',
    questionNumber: 14,
    question: 'Which statement accurately differentiates a vision statement from a mission statement?',
    options: [
      { key: 'A', text: 'A vision statement explains the daily operational tasks, whereas a mission statement outlines the historical origin of the founders.' },
      { key: 'B', text: 'A vision statement sets out an organization\'s long-term aspirational future ("where we want to be"), while a mission statement declares its current core purpose and identity ("what we do and why").' },
      { key: 'C', text: 'A vision statement contains quantitative financial targets, while a mission statement never changes.' },
      { key: 'D', text: 'Vision statements are required by law for incorporation, whereas mission statements are purely voluntary.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Vision is future-oriented and aspirational ("where we strive to go"), whereas mission is present-oriented and action-focused ("who we are and what we do today").',
      distractorAnalysis: 'Daily operations describe tactics (A); neither is a statutory legal document required for incorporation (D); quantitative financial metrics belong to SMART objectives (C).'
    }
  },
  {
    id: 'mcq-1.3-02',
    subunit: '1.3-business-objectives',
    topicTag: 'Hierarchy of Objectives',
    questionNumber: 15,
    question: 'In the hierarchy of objectives, how do strategic objectives differ from tactical objectives?',
    options: [
      { key: 'A', text: 'Strategic objectives are medium-to-long-term company-wide goals set by senior management, while tactical objectives are short-term operational targets set by middle/departmental managers.' },
      { key: 'B', text: 'Strategic objectives are short-term departmental targets, whereas tactical objectives govern long-term corporate vision.' },
      { key: 'C', text: 'Strategic objectives are unquantifiable, whereas tactical objectives are always ethical.' },
      { key: 'D', text: 'Tactical objectives cannot be revised once declared.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Strategic objectives are high-level, long-term corporate goals set by boards of directors, while tactical objectives are short-term operational targets set by department heads.',
      distractorAnalysis: 'Option B reverses the relationship; strategic objectives can and must be quantified under SMART (C); tactical targets are highly flexible and frequently adjusted (D).'
    }
  },
  {
    id: 'mcq-1.3-03',
    subunit: '1.3-business-objectives',
    topicTag: 'Core Objectives',
    questionNumber: 16,
    question: 'What does the term market share measure?',
    options: [
      { key: 'A', text: 'The total monetary profit generated by a firm divided by its capital employed.' },
      { key: 'B', text: 'The proportion of total sales revenue (or unit volume) within a specific industry held by a particular business.' },
      { key: 'C', text: 'The percentage of shares owned by institutional investors on the stock market.' },
      { key: 'D', text: 'The market value of a business divided by its total liabilities.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Market share expresses a business\'s sales revenue (or volume) as a percentage of aggregate industry sales: (Firm Sales / Total Market Sales) * 100%.',
      distractorAnalysis: 'Profit over capital employed is ROCE (A); stock owned by institutions is equity distribution (C); market value over liabilities is a solvency ratio (D).'
    }
  },
  {
    id: 'mcq-1.3-04',
    subunit: '1.3-business-objectives',
    topicTag: 'Ethical Objectives',
    questionNumber: 17,
    question: 'A company implements an Ethical Code of Practice. What is the direct operational purpose of this document?',
    options: [
      { key: 'A', text: 'To guarantee minimum legal compliance while avoiding tax payments.' },
      { key: 'B', text: 'To mandate that customer satisfaction overrides company solvency in every transaction.' },
      { key: 'C', text: 'To replace external commercial law with company-specific internal rules.' },
      { key: 'D', text: 'To provide employees and managers with clear behavioral guidelines reflecting organizational morals and acceptable practices.' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'An ethical code outlines explicit moral principles and professional standards that govern decision-making across workplace safety, diversity, and fair dealing.',
      distractorAnalysis: 'Dodging taxes is unethical and illegal (A); customer satisfaction cannot compromise basic financial solvency (B); internal corporate codes cannot supersede external statutory law (C).'
    }
  },
  {
    id: 'mcq-1.3-05',
    subunit: '1.3-business-objectives',
    topicTag: 'Business Objectives & Stakeholders',
    questionNumber: 18,
    question: 'Which of the following scenarios illustrates a classic internal stakeholder conflict arising from business objectives?',
    options: [
      { key: 'A', text: 'Suppliers demanding higher bulk orders while shipping companies lower freight rates.' },
      { key: 'B', text: 'Shareholders demanding maximum short-term dividend payouts while management seeks to retain profits to fund long-term R&D and improve worker remuneration.' },
      { key: 'C', text: 'Local community members and environmental groups both lobbying for reduced carbon emissions.' },
      { key: 'D', text: 'Customers demanding premium product quality while competing rivals leave the market.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Shareholders prioritize immediate dividend distributions and stock appreciation, conflicting directly with executive managers who prioritize retained capital for R&D and fair employee wages.',
      distractorAnalysis: 'Option A involves external suppliers/transporters; Option C shows aligned external stakeholders; Option D does not depict internal corporate resource competition.'
    }
  },
  {
    id: 'mcq-1.3-06',
    subunit: '1.3-business-objectives',
    topicTag: 'Human Resources Metrics',
    questionNumber: 19,
    question: 'What is the formula and definition of labour turnover?',
    options: [
      { key: 'A', text: 'Total revenue divided by total employees in a financial year.' },
      { key: 'B', text: 'The average number of overtime hours worked by factory personnel.' },
      { key: 'C', text: 'The percentage of an organization\'s workforce that leaves the business during a specified time period, usually one year.' },
      { key: 'D', text: 'The ratio of senior executives to frontline workers.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Labour turnover measures the proportion of personnel leaving during a year: (Number of Leavers / Average Staff Employed) * 100%.',
      distractorAnalysis: 'Revenue per worker measures labor productivity (A); overtime hours measure labor utilization (B); executive ratios measure management span of control (D).'
    }
  },
  {
    id: 'mcq-1.3-07',
    subunit: '1.3-business-objectives',
    topicTag: 'Corporate Social Responsibility',
    questionNumber: 20,
    question: 'Which of the following is a primary internal commercial benefit to a multinational corporation of adopting genuine Corporate Social Responsibility (CSR) policies?',
    options: [
      { key: 'A', text: 'Instant immunity from all national regulatory laws.' },
      { key: 'B', text: 'Enhanced corporate brand reputation, facilitating customer brand loyalty and attracting higher-calibre job applicants.' },
      { key: 'C', text: 'Elimination of all operational and compliance costs.' },
      { key: 'D', text: 'A guaranteed short-term reduction in production expenses.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Genuine CSR builds premium brand equity, secures customer goodwill, and attracts motivated, high-retention talent who value ethical employers.',
      distractorAnalysis: 'CSR does not grant regulatory immunity (A); it typically raises initial compliance and ethical sourcing costs rather than reducing them (C & D).'
    }
  },

  // --------------------------------------------------------------------------
  // Chapter 44: SWOT Analysis Toolkit (Q21–Q25)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-bmt-swot-01',
    subunit: 'bmt-swot-analysis',
    topicTag: 'SWOT Matrix Quadrants',
    questionNumber: 21,
    question: 'In a SWOT analysis, which elements represent internal factors that are directly under the operational control of the organization?',
    options: [
      { key: 'A', text: 'Strengths and Opportunities' },
      { key: 'B', text: 'Opportunities and Threats' },
      { key: 'C', text: 'Strengths and Weaknesses' },
      { key: 'D', text: 'Weaknesses and Threats' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Strengths (core assets, patents) and Weaknesses (deficiencies, high debt) are internal to the firm, whereas Opportunities and Threats stem from the macro-environment.',
      distractorAnalysis: 'Opportunities and Threats (B) are external macro-variables (STEEPLE); A and D blend internal and external quadrants.'
    }
  },
  {
    id: 'mcq-bmt-swot-02',
    subunit: 'bmt-swot-analysis',
    topicTag: 'Factor Classification',
    questionNumber: 22,
    question: 'A small London bakery faces rising wholesale flour prices due to poor global wheat harvests and severe supply chain delays. In the bakery\'s SWOT matrix, how should this factor be classified?',
    options: [
      { key: 'A', text: 'Weakness' },
      { key: 'B', text: 'Threat' },
      { key: 'C', text: 'Strength' },
      { key: 'D', text: 'Opportunity' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Global wheat shortages and climatic harvest shocks originate externally in the macro-environment and adversely affect the bakery\'s costs, classifying it as an external Threat.',
      distractorAnalysis: 'A Weakness (A) must be an internal controllable flaw (such as inefficient ovens); Strengths (C) and Opportunities (D) are positive factors.'
    }
  },
  {
    id: 'mcq-bmt-swot-03',
    subunit: 'bmt-swot-analysis',
    topicTag: 'SWOT Strategic Combinations',
    questionNumber: 23,
    question: 'When pairing SWOT quadrants to formulate corporate strategy, what does an SO (Maxi-Maxi) strategy entail?',
    options: [
      { key: 'A', text: 'Utilizing internal strengths to exploit external market opportunities.' },
      { key: 'B', text: 'Using external opportunities to rectify internal company weaknesses.' },
      { key: 'C', text: 'Minimizing internal weaknesses to defend against external environmental threats.' },
      { key: 'D', text: 'Leveraging internal strengths to neutralize external market threats.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'An SO (Maxi-Maxi) strategy deploys the firm\'s core internal strengths to capture emerging opportunities in the external market.',
      distractorAnalysis: 'Deploying strengths to capture opportunities is S-O (A). Overcoming weaknesses with opportunities is W-O Reorientation (B); minimizing weaknesses against threats is W-T Survival (C); leveraging strengths against threats is S-T Defensive (D).'
    }
  },
  {
    id: 'mcq-bmt-swot-04',
    subunit: 'bmt-swot-analysis',
    topicTag: 'Critical Evaluation',
    questionNumber: 24,
    question: 'Which of the following is a recognized methodological limitation of SWOT analysis?',
    options: [
      { key: 'A', text: 'It requires complex linear programming and expensive regression software to compute.' },
      { key: 'B', text: 'It focuses exclusively on macroeconomic variables and ignores internal departments.' },
      { key: 'C', text: 'It is qualitative, descriptive, and prone to subjective managerial bias without assigning numerical weightings or prioritizing issues.' },
      { key: 'D', text: 'It automatically generates operational implementation budgets.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'SWOT is a static, qualitative framework that does not calculate monetary values, assign probabilities, or rank issues by strategic urgency, making it vulnerable to subjective bias.',
      distractorAnalysis: 'SWOT requires zero complex software (A); it explicitly examines internal departments via Strengths and Weaknesses (B); it does not produce budgets (D).'
    }
  },
  {
    id: 'mcq-bmt-swot-05',
    subunit: 'bmt-swot-analysis',
    topicTag: 'Factor Classification',
    questionNumber: 25,
    question: 'Kidzplay Bouncy Castles operates a party rental business in London. If the firm possesses a brand-new, mobile-responsive e-commerce website but currently engages in minimal digital marketing, this lack of promotional visibility is classified as:',
    options: [
      { key: 'A', text: 'An external Threat' },
      { key: 'B', text: 'An internal Weakness' },
      { key: 'C', text: 'An external Opportunity' },
      { key: 'D', text: 'An internal Strength' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Marketing expenditure and promotional campaigns are internal management decisions within the firm\'s direct operational control, making promotional failure an internal Weakness.',
      distractorAnalysis: 'A Threat (A) arises from external competitors or legislation; Opportunities (C) and Strengths (D) represent favorable conditions.'
    }
  },

  // --------------------------------------------------------------------------
  // Chapter 45: Ansoff Matrix Toolkit (Q26–Q30)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-bmt-ansoff-01',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Ansoff Foundations',
    questionNumber: 26,
    question: 'What are the two foundational dimensions used in Igor Ansoff\'s Growth Matrix to categorize strategic growth options?',
    options: [
      { key: 'A', text: 'Price Level and Product Quality' },
      { key: 'B', text: 'Market Share and Industry Growth Rate' },
      { key: 'C', text: 'Products (Existing vs New) and Markets (Existing vs New)' },
      { key: 'D', text: 'Internal Strengths and External Weaknesses' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Ansoff\'s 2x2 matrix categorizes corporate growth pathways across Products (Existing vs New) and Markets (Existing vs New).',
      distractorAnalysis: 'Price/Quality defines Bowman\'s Strategy Clock (A); Market Share/Growth Rate defines the Boston Consulting Group (BCG) Matrix (B); Strengths/Weaknesses belongs to SWOT (D).'
    }
  },
  {
    id: 'mcq-bmt-ansoff-02',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Market Penetration',
    questionNumber: 27,
    question: 'A supermarket chain runs a promotional campaign offering loyalty card reward points and 2-for-1 bundle discounts on its existing brand-name cereal lines to existing neighborhood customers. Which Ansoff growth strategy is being executed?',
    options: [
      { key: 'A', text: 'Product Development' },
      { key: 'B', text: 'Market Development' },
      { key: 'C', text: 'Market Penetration' },
      { key: 'D', text: 'Diversification' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Selling existing products to existing markets using discounts and loyalty schemes to grow market share is the textbook definition of Market Penetration.',
      distractorAnalysis: 'Product Development requires a new product (A); Market Development requires a new geographic or demographic market (B); Diversification requires both to be new (D).'
    }
  },
  {
    id: 'mcq-bmt-ansoff-03',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Diversification vs Product Dev',
    questionNumber: 28,
    question: 'Toyota, an established automotive manufacturer, creates a completely new luxury marque called Lexus to target high-net-worth consumers seeking luxury vehicles, a segment Toyota previously did not serve. In Ansoff\'s matrix, this is primarily classified as:',
    options: [
      { key: 'A', text: 'Market Penetration' },
      { key: 'B', text: 'Diversification' },
      { key: 'C', text: 'Market Development' },
      { key: 'D', text: 'Product Development' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Developing a newly engineered luxury automobile (new product) for wealthy executive motorists previously unserved by mass-market Toyota (new market) represents Diversification (specifically related diversification).',
      distractorAnalysis: 'It cannot be Penetration (A) as neither product nor target customer was existing; it differs from pure Product Development (D) because mass-market economy buyers were not the target.'
    }
  },
  {
    id: 'mcq-bmt-ansoff-04',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Ansoff Risk Continuum',
    questionNumber: 29,
    question: 'Why is Diversification classified as the highest-risk strategy in the Ansoff Matrix?',
    options: [
      { key: 'A', text: 'It requires selling existing products at predatory pricing below cost.' },
      { key: 'B', text: 'It forces the business to enter an unfamiliar market with a product it has never previously manufactured, lacking both operational expertise and customer familiarity.' },
      { key: 'C', text: 'It violates international antitrust trade regulations.' },
      { key: 'D', text: 'It requires the business to convert from a limited company into an unincorporated partnership.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Diversification carries "double unfamiliarity"—the firm lacks engineering experience for the new product and possesses no established customer goodwill or distribution in the new market.',
      distractorAnalysis: 'Predatory pricing is an anti-competitive tactic in penetration (A); diversification is fully legal under trade law (C); business legal structure is unrelated to Ansoff vectors (D).'
    }
  },
  {
    id: 'mcq-bmt-ansoff-05',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Market Development',
    questionNumber: 30,
    question: 'During the COVID-19 pandemic, sportswear brand Adidas experienced retail store closures and responded by shifting its distribution from physical retail stores to expanding its direct-to-consumer e-commerce and mail-order platforms, targeting new global online shopper demographics with its athletic merchandise. This strategy is an example of:',
    options: [
      { key: 'A', text: 'Market Development' },
      { key: 'B', text: 'Product Development' },
      { key: 'C', text: 'Defensive Retrenchment' },
      { key: 'D', text: 'Backward Vertical Integration' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Selling existing athletic footwear and apparel into new customer segments via digital channels and direct-to-consumer e-commerce defines Market Development.',
      distractorAnalysis: 'Product Development requires a new physical product line (B); retrenchment entails downsizing (C); backward integration involves acquiring suppliers (D).'
    }
  },
{
  "id": "mcq-steeple-01",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "STEEPLE Core Purpose",
  "questionNumber": 31,
  "question": "What is the primary analytical objective of conducting a STEEPLE analysis?",
  "options": [
    {
      "key": "A",
      "text": "To audit the internal operational efficiencies and departmental cash flow balances of a business."
    },
    {
      "key": "B",
      "text": "To systematically scan and examine the external macro-environment to identify opportunities and threats beyond the firm's direct control."
    },
    {
      "key": "C",
      "text": "To categorize a firm's multi-product portfolio into cash-generating versus cash-draining business units."
    },
    {
      "key": "D",
      "text": "To calculate the probability-weighted expected monetary returns of mutually exclusive capital investments."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "STEEPLE analysis audits the seven broad external macro-environmental dimensions (Social, Tech, Economic, Environmental, Political, Legal, Ethical) to identify opportunities and threats that the firm cannot directly govern.",
    "distractorAnalysis": "Internal operational efficiency (A) belongs to SWOT internal analysis; product portfolio classification (C) describes the BCG Matrix; expected monetary return calculations (D) describes Decision Trees."
  }
},
{
  "id": "mcq-steeple-02",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Social Demographics",
  "questionNumber": 32,
  "question": "In many developed nations, an aging population combined with declining birth rates is creating a demographic shift. For a private residential care provider, this macro-environmental trend represents:",
  "options": [
    {
      "key": "A",
      "text": "An internal operational strength resulting from proprietary nursing competencies."
    },
    {
      "key": "B",
      "text": "An external Social opportunity that expands aggregate market demand for eldercare services."
    },
    {
      "key": "C",
      "text": "An external Political threat stemming from state healthcare legislative mandates."
    },
    {
      "key": "D",
      "text": "An internal organizational weakness due to higher employee turnover."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Demographic aging is an external Social trend in the macro-environment that increases aggregate customer demand and commercial viability for private care providers.",
    "distractorAnalysis": "An aging population is an external macro phenomenon, not an internal strength (A) or weakness (D); demographic population changes fall under Social rather than Political factors (C)."
  }
},
{
  "id": "mcq-steeple-03",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Economic & Exchange Rates",
  "questionNumber": 33,
  "question": "According to the SPICED economic rule, what is the anticipated commercial impact when a country's domestic currency experiences a substantial appreciation (strengthening)?",
  "options": [
    {
      "key": "A",
      "text": "Imported raw materials become cheaper, but domestically manufactured exports become dearer and less price-competitive abroad."
    },
    {
      "key": "B",
      "text": "Imported raw materials become more expensive, but export profit margins in overseas markets expand automatically."
    },
    {
      "key": "C",
      "text": "Both imports and exports become cheaper simultaneously, stimulating national trade surpluses."
    },
    {
      "key": "D",
      "text": "Domestic consumer inflation increases dramatically due to elevated import purchase tariffs."
    }
  ],
  "correctAnswer": "A",
  "explanation": {
    "correctRationale": "The SPICED rule states: Strong Pound (or domestic currency) makes Imports Cheaper and Exports Dearer, benefiting component importers while penalizing export sales volume.",
    "distractorAnalysis": "B reverses the currency effect; a stronger currency does not make exports cheaper (C); cheaper imports generally suppress rather than accelerate domestic inflation (D)."
  }
},
{
  "id": "mcq-steeple-04",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Legal vs Political",
  "questionNumber": 34,
  "question": "A national parliament passes statutory legislation mandating a 15% increase in the national minimum wage, accompanied by severe financial penalties for non-compliant employers. In a STEEPLE analysis, this development is classified as:",
  "options": [
    {
      "key": "A",
      "text": "A Political factor because politicians debated the bill in parliament."
    },
    {
      "key": "B",
      "text": "A Legal factor because it is an enacted, legally enforceable statute carrying criminal or civil penalties."
    },
    {
      "key": "C",
      "text": "An Ethical factor because paying higher wages reflects altruistic corporate generosity."
    },
    {
      "key": "D",
      "text": "An Environmental factor because workers operate in a physical factory environment."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Once legislation is formally enacted into enforceable law carrying statutory penalties, it operates as a Legal factor. Political factors encompass government policy direction, taxation debates, and political stability.",
    "distractorAnalysis": "Even though politicians vote on legislation, enacted laws are Legal (A); compliance with statutory mandates is legally required, not voluntary CSR/Ethical altruism (C); worker environments do not constitute ecological Environmental factors (D)."
  }
},
{
  "id": "mcq-steeple-05",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Technological Obsolescence",
  "questionNumber": 35,
  "question": "Rapid cycles of technological innovation and automated product obsolescence in consumer electronics (e.g. video game consoles and smartphones) primarily present which external threat to incumbent manufacturers?",
  "options": [
    {
      "key": "A",
      "text": "Rising trade tariffs imposed by foreign customs authorities."
    },
    {
      "key": "B",
      "text": "Shortened product life cycles requiring continuous, expensive R&D expenditures to avoid commercial irrelevance."
    },
    {
      "key": "C",
      "text": "Strict statutory employment laws prohibiting automated factory robotics."
    },
    {
      "key": "D",
      "text": "A mandatory transition to unlimited shareholder liability under commercial law."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Technological disruption compresses product life cycles, forcing hardware companies into continuous, capital-intensive R&D cycles to prevent legacy products from becoming obsolete.",
    "distractorAnalysis": "Tariffs (A) are Political/Legal trade barriers; labor laws (C) are Legal; shareholder liability (D) is a corporate governance rule unaffected by technological innovation."
  }
},
{
  "id": "mcq-steeple-06",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Ethical Sourcing & CSR",
  "questionNumber": 36,
  "question": "How does an Ethical factor in STEEPLE differ fundamentally from a Legal factor?",
  "options": [
    {
      "key": "A",
      "text": "Ethical factors represent mandatory statutory requirements, whereas Legal factors are voluntary guidelines."
    },
    {
      "key": "B",
      "text": "Ethical factors reflect voluntary moral standards and social responsibilities that exceed legal minimums, whereas Legal factors are enforceable statutory requirements."
    },
    {
      "key": "C",
      "text": "Ethical factors only apply to charitable non-governmental organizations, whereas Legal factors apply to public limited companies."
    },
    {
      "key": "D",
      "text": "Ethical factors are exclusively concerned with monetary profit maximization for equity shareholders."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Ethics concerns moral judgment and voluntary corporate social responsibility (CSR) beyond statutory minimums (e.g. fair trade pricing, carbon neutrality), whereas laws are state-enforced mandates.",
    "distractorAnalysis": "A reverses the definitions; ethical standards apply to all commercial firms, not just NGOs (C); profit maximization without regard to morals violates ethical principles (D)."
  }
},
{
  "id": "mcq-bmt-01",
  "subunit": "bmt-toolkit",
  "topicTag": "BCG Matrix Stars",
  "questionNumber": 37,
  "question": "In the Boston Consulting Group (BCG) Matrix, which quadrant characterizes a product holding a dominant market share in a rapidly growing industry?",
  "options": [
    {
      "key": "A",
      "text": "Cash Cow"
    },
    {
      "key": "B",
      "text": "Star"
    },
    {
      "key": "C",
      "text": "Question Mark (Problem Child)"
    },
    {
      "key": "D",
      "text": "Dog"
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Stars possess high relative market share in high-growth markets, generating high sales revenues but requiring heavy continuous investment to sustain dominance.",
    "distractorAnalysis": "Cash Cows (A) have high market share in low-growth markets; Question Marks (C) have low market share in high-growth markets; Dogs (D) have low share in low-growth markets."
  }
},
{
  "id": "mcq-bmt-02",
  "subunit": "bmt-toolkit",
  "topicTag": "BCG Cash Flow Dynamics",
  "questionNumber": 38,
  "question": "What is the primary cash flow role of a 'Cash Cow' product within a diversified corporate portfolio?",
  "options": [
    {
      "key": "A",
      "text": "To absorb massive capital reinvestment to aggressively expand existing manufacturing capacity."
    },
    {
      "key": "B",
      "text": "To generate substantial surplus cash flow that can be harvested to fund promising Question Marks and support Stars."
    },
    {
      "key": "C",
      "text": "To undergo immediate liquidation through a divestment strategy to cut ongoing operational losses."
    },
    {
      "key": "D",
      "text": "To operate at a continuous financial deficit in order to depress competitors' share prices."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Cash Cows are mature, highly profitable products with established infrastructure in stable markets, generating surplus liquidity used to finance growth products elsewhere in the portfolio.",
    "distractorAnalysis": "Cash Cows require low, not massive, capital reinvestment (A); liquidation/divestment (C) applies to Dogs; operating at a deliberate loss (D) describes predatory pricing, not cash cow strategy."
  }
},
{
  "id": "mcq-bmt-03",
  "subunit": "bmt-toolkit",
  "topicTag": "BCG Strategic Prescriptions",
  "questionNumber": 39,
  "question": "A multinational technology conglomerate owns an experimental smart-home division that holds a 4% market share in an industry expanding by 28% annually. Under the BCG Matrix, which strategic choice faces executive management?",
  "options": [
    {
      "key": "A",
      "text": "Harvest the division immediately to maximize short-term cash extraction."
    },
    {
      "key": "B",
      "text": "Pursue a Build strategy by investing cash-cow reserves to capture market share, or Divest if long-term leadership is unachievable."
    },
    {
      "key": "C",
      "text": "Hold current operations with zero marketing expenditure because the market is already mature."
    },
    {
      "key": "D",
      "text": "Convert the product into a sole proprietorship to shield corporate shareholders from liability."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "The product is a Question Mark (low share in high-growth market). Executives must either commit heavy capital to 'Build' it into a Star or 'Divest' before it drains corporate cash reserves.",
    "distractorAnalysis": "Harvesting (A) is the strategy for Cash Cows; Holding with zero investment (C) fails in high-growth competitive markets; converting to a sole proprietorship (D) is legally nonsensical for a conglomerate division."
  }
},
{
  "id": "mcq-bmt-04",
  "subunit": "bmt-toolkit",
  "topicTag": "Circular Business Models",
  "questionNumber": 40,
  "question": "Lighting manufacturer Philips provides illumination systems to Schiphol Airport under a model where Philips retains ownership of all lighting fixtures, handles all maintenance, and charges the airport based on light usage. This exemplifies which Circular Business Model?",
  "options": [
    {
      "key": "A",
      "text": "Linear Take-Make-Waste Extraction Model"
    },
    {
      "key": "B",
      "text": "Product-Service System (PSS) Model"
    },
    {
      "key": "C",
      "text": "Predatory Pricing Model"
    },
    {
      "key": "D",
      "text": "Unrelated Conglomerate Diversification Model"
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "In a Product-Service System (PSS) model, the business retains asset ownership and sells the functional service or utility of the product, incentivizing durable, energy-efficient engineering.",
    "distractorAnalysis": "Linear models (A) sell disposable hardware to customers who discard them; predatory pricing (C) is an illegal pricing strategy; diversification (D) is an Ansoff growth strategy."
  }
},
{
  "id": "mcq-bmt-05",
  "subunit": "bmt-toolkit",
  "topicTag": "Decision Tree Symbology",
  "questionNumber": 41,
  "question": "In a formal quantitative Decision Tree diagram, what do square nodes and circular nodes represent respectively?",
  "options": [
    {
      "key": "A",
      "text": "Squares represent Chance Nodes (external probabilities); Circles represent Decision Nodes (managerial choices)."
    },
    {
      "key": "B",
      "text": "Squares represent Decision Nodes (points of managerial control); Circles represent Chance Nodes (points of uncertainty with assigned probabilities)."
    },
    {
      "key": "C",
      "text": "Squares represent Gross Revenues; Circles represent Net Operating Losses."
    },
    {
      "key": "D",
      "text": "Squares represent Internal Strengths; Circles represent External Threats."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Decision Trees use standardized symbology: Squares designate Decision Nodes where management decides between options; Circles designate Chance Nodes where external outcomes occur with probabilistic distributions.",
    "distractorAnalysis": "A reverses the shapes; revenues and losses (C) are numerical payoffs on branch tips; strengths and threats (D) belong to SWOT matrices."
  }
},
{
  "id": "mcq-bmt-06",
  "subunit": "bmt-toolkit",
  "topicTag": "Decision Tree Net EMV",
  "questionNumber": 42,
  "question": "A retail firm is appraising an expansion project costing $200,000. Market research indicates a 60% probability of high demand yielding $500,000 payoff, and a 40% probability of low demand yielding $100,000 payoff. What is the Net Expected Monetary Value (Net EMV) of this decision?",
  "options": [
    {
      "key": "A",
      "text": "$340,000"
    },
    {
      "key": "B",
      "text": "$140,000"
    },
    {
      "key": "C",
      "text": "$300,000"
    },
    {
      "key": "D",
      "text": "$60,000"
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Gross EV = (0.60 * $500,000) + (0.40 * $100,000) = $300,000 + $40,000 = $340,000. Net EMV = Gross EV - Initial Capital Cost = $340,000 - $200,000 = $140,000.",
    "distractorAnalysis": "$340,000 (A) is the gross EV before deducting initial expenditure; $300,000 (C) is only the high demand expected value; $60,000 (D) results from calculation errors."
  }
}
];

// ============================================================================
// 2. 2-Mark Questions (AO1 Knowledge & Definition) - 32 Questions Total
// ============================================================================

export const TWO_MARK_QUESTIONS: TwoMarkQuestion[] = [
  // --------------------------------------------------------------------------
  // Unit 1.1: What is a Business? (7 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.1-01',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.1',
    question: 'What is a business?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'A business is a decision-making entity that combines inputs—namely the factors of production (land, labor, capital, and enterprise)—through a transformation process to produce finished goods or provide services that satisfy customer needs and wants.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies decision-making entity combining inputs / factors of production (land, labor, capital, enterprise)' },
      { mark: 1, criterion: 'Explains output satisfies customer needs and wants through goods or services' }
    ],
    examinerTips: 'Avoid colloquial definitions like "a place where you buy stuff". Mention the factors of production and the satisfaction of needs/wants for full marks.'
  },
  {
    id: 'q2m-1.1-02',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.2',
    question: 'How do goods and services differ from each other?',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'Goods are tangible physical products that can be touched, inspected, stored, and ownership transferred, whereas services are intangible activities, deeds, or benefits consumed simultaneously as they are delivered without physical ownership.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines goods as tangible physical products capable of being stored or inventoried' },
      { mark: 1, criterion: 'Defines services as intangible activities consumed simultaneously at delivery without physical ownership' }
    ],
    examinerTips: 'Always provide the contrasting feature for both terms (tangible vs intangible, can be stored vs perishable/consumed at point of delivery).'
  },
  {
    id: 'q2m-1.1-03',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.3',
    question: 'How do consumer needs and wants differ?',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'Needs are essential goods and services required for human physiological survival (e.g., food, clean water, shelter), whereas wants are non-essential human desires for goods and services that enhance living standards or provide luxury.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies needs as essential goods and services required for human physical survival' },
      { mark: 1, criterion: 'Identifies wants as discretionary non-essential human desires that enhance living standards' }
    ],
    examinerTips: 'Cite examples (e.g. basic water vs luxury soda) to clearly ground your conceptual contrast.'
  },
  {
    id: 'q2m-1.1-04',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.4',
    question: 'How do customers and consumers differ from each other?',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'A customer is the individual or entity that purchases and pays for a good or service, whereas a consumer is the end-user who actually utilizes, consumes, or benefits from the product.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines customer as the purchaser/buyer who pays for the product' },
      { mark: 1, criterion: 'Defines consumer as the end-user who consumes or utilizes the product' }
    ],
    examinerTips: 'A parent buying baby food is the customer; the infant is the consumer. Use this classic contrast to keep them straight.'
  },
  {
    id: 'q2m-1.1-05',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.5',
    question: 'What is meant by adding value?',
    marks: 2,
    commandTerm: 'What is meant by',
    assessmentObjective: 'AO1',
    modelAnswer: 'Adding value is the operational and marketing process of transforming inputs so that the selling price of the finished output exceeds the cost of bought-in raw materials and intermediate components consumed in production.',
    markBreakdown: [
      { mark: 1, criterion: 'Explains increasing the worth or utility of inputs during the transformation process' },
      { mark: 1, criterion: 'Explains selling price exceeds the cost of bought-in materials (Value Added = Selling Price - Cost of Inputs)' }
    ],
    examinerTips: 'Do not confuse added value with profit. Added value does not deduct operational overheads such as rent and labor; it is strictly Price minus Cost of bought-in materials.'
  },
  {
    id: 'q2m-1.1-06',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.6',
    question: 'What is meant by the chain of production?',
    marks: 2,
    commandTerm: 'What is meant by',
    assessmentObjective: 'AO1',
    modelAnswer: 'The chain of production refers to the sequential, interrelated stages of economic activity through which raw materials pass across economic sectors (primary extraction, secondary manufacturing, and tertiary/quaternary distribution) to reach the final consumer.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies sequential stages moving from raw material extraction to final product delivery' },
      { mark: 1, criterion: 'References progression across economic sectors (primary, secondary, tertiary, quaternary)' }
    ],
    examinerTips: 'Explicitly reference the movement across economic sectors to earn full credit.'
  },
  {
    id: 'q2m-1.1-07',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.7',
    question: 'State two common challenges faced by business start-ups.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: '1. Cash flow and working capital deficiencies: Inability to maintain sufficient liquidity to service rent, wages, and suppliers before customer sales receipts arrive.\n2. Lack of brand awareness and customer base: Difficulty attracting customers away from established competitors due to a lack of market presence.',
    markBreakdown: [
      { mark: 1, criterion: 'Valid first startup challenge clearly stated (e.g. liquidity / cash flow shortages)' },
      { mark: 1, criterion: 'Valid second distinct startup challenge clearly stated (e.g. unestablished customer base / high fixed costs)' }
    ],
    examinerTips: 'Keep the two points clearly distinct (e.g., one financial issue like working capital, one operational/market issue like brand awareness).'
  },

  // --------------------------------------------------------------------------
  // Unit 1.2: Types of Business Entities (8 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.2-01',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.1',
    question: 'Define the term sole trader.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A sole trader is an unincorporated commercial business owned, financed, and operated by a single individual who retains all net profits after tax and carries unlimited liability for all business debts.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies commercial business owned and operated by one individual' },
      { mark: 1, criterion: 'Specifies unincorporated legal status with unlimited liability for debts' }
    ],
    examinerTips: 'Merely saying "a one-man business" gets 1 mark. Unlimited liability and unincorporated status guarantee the second mark.'
  },
  {
    id: 'q2m-1.2-02',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.2',
    question: 'Define the term partnership in the context of business entities.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A partnership is an unincorporated commercial business structure owned and operated by two or more individuals (traditionally 2 to 20 partners) who pool capital, share management, distribute net profits, and bear joint and several unlimited liability.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies business owned and operated by two or more individuals pooling capital and sharing profits' },
      { mark: 1, criterion: 'Specifies unincorporated status with joint and several unlimited liability under a partnership agreement' }
    ],
    examinerTips: 'Mentioning joint unlimited liability or the Deed of Partnership shows thorough syllabus mastery.'
  },
  {
    id: 'q2m-1.2-03',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.3',
    question: 'Define the term privately held company.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A privately held company (private limited company / Ltd) is an incorporated business entity possessing limited liability and a separate legal personality, whose shares are held privately by family, friends, or private investors and cannot be traded on an open stock exchange.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies incorporated business entity possessing limited liability and separate legal personality' },
      { mark: 1, criterion: 'Explains equity shares are sold privately and cannot be advertised or traded on a public stock exchange' }
    ],
    examinerTips: 'Key discriminator: shares CANNOT be offered to the general public or traded on an open stock exchange.'
  },
  {
    id: 'q2m-1.2-04',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.4',
    question: 'Define the term shareholder.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A shareholder is an individual or institution that owns at least one equity share in an incorporated limited liability company, representing fractional ownership, voting rights at AGMs, and entitlement to declared dividends.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies individual or institution owning equity shares in an incorporated company' },
      { mark: 1, criterion: 'Notes rights to declared dividends and voting control at annual general meetings' }
    ],
    examinerTips: 'Remember that shareholders are the owners of the company, distinct from directors who manage it.'
  },
  {
    id: 'q2m-1.2-05',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.5',
    question: 'Define the term public sector company.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A public sector company (or state-owned enterprise) is a legally incorporated business entity that is wholly or majority-owned and controlled by the government, operating commercially to provide public services or infrastructure while generating state revenue.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies incorporated enterprise wholly or majority-owned and controlled by the state / government' },
      { mark: 1, criterion: 'Specifies commercial operation to deliver essential public services/infrastructure' }
    ],
    examinerTips: 'Do not confuse public sector companies (state-owned enterprises) with public limited companies (PLCs in the private sector).'
  },
  {
    id: 'q2m-1.2-06',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.6',
    question: 'State the meaning of limited liability.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'Limited liability is a legal protection applicable to incorporated companies where the financial liability of shareholders for business debts is strictly capped at the nominal amount of capital invested, ring-fencing personal assets from creditors.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies legal status capping shareholder financial loss strictly to the amount of capital invested' },
      { mark: 1, criterion: 'Explicitly notes personal assets and private wealth are protected from corporate creditors in liquidation' }
    ],
    examinerTips: 'Always clarify what is limited: the investor\'s liability for debt is limited to their invested capital, not the company\'s liability to pay.'
  },
  {
    id: 'q2m-1.2-07',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.7',
    question: 'What is a cooperative?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'A cooperative is a member-owned, for-profit social enterprise established to meet the common economic and social needs of its members, democratically governed under the principle of one member, one vote, with profits distributed as dividends.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies member-owned social enterprise established to meet common economic and social needs' },
      { mark: 1, criterion: 'Specifies democratic governance under the principle of "one member, one vote"' }
    ],
    examinerTips: '"One member, one vote" is the essential phrase examiners look for to award the full 2 marks.'
  },
  {
    id: 'q2m-1.2-08',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.8',
    question: 'What is a non-governmental organization (NGO)?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'A Non-Governmental Organization (NGO) is a private-sector, not-for-profit social enterprise operating independently of state control to pursue humanitarian, developmental, or environmental objectives, reinvesting all operational surpluses.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies private sector not-for-profit entity operating independently of government control' },
      { mark: 1, criterion: 'Notes purpose of advancing humanitarian, social, or environmental missions with surplus reinvestment' }
    ],
    examinerTips: 'Emphasize both "non-governmental" (independent of state) and "not-for-profit" (reinvests surplus).'
  },

  // --------------------------------------------------------------------------
  // Unit 1.3: Business Objectives (7 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.3-01',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.1',
    question: 'Define the term mission statement.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A mission statement is a formal declaration of an organization\'s fundamental purpose, core operational values, and ongoing activities, defining what the business does, whom it serves, and how it delivers value in the present.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines formal declaration of core organizational purpose and primary operational values' },
      { mark: 1, criterion: 'Emphasizes present operational focus (what the business does, whom it serves, and how)' }
    ],
    examinerTips: 'Mission is current/present focus ("what we do today"), while vision is future/aspirational focus ("where we want to be").'
  },
  {
    id: 'q2m-1.3-02',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.2',
    question: 'Define the term strategy.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A strategy is a broad, long-term plan of action formulated by senior management that coordinates resources and directs organizational activities toward achieving corporate objectives and sustainable competitive advantage.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies broad, long-term plan of action formulated by senior management' },
      { mark: 1, criterion: 'Notes coordination of resources to achieve corporate objectives and competitive advantage' }
    ],
    examinerTips: 'Differentiate strategy (long-term, senior leadership) from tactics (short-term, departmental level).'
  },
  {
    id: 'q2m-1.3-03',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.3',
    question: 'Define the term market share.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Market share is the percentage of total industry sales revenue (or unit volume) captured by a specific business entity over a specified period: Market Share = (Firm Sales / Total Industry Sales) * 100%.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies proportion of total industry sales revenue or volume captured by a specific firm' },
      { mark: 1, criterion: 'Expresses as a percentage or mathematical formula: (Firm Sales / Total Market Sales) * 100%' }
    ],
    examinerTips: 'Always state whether it is measured in value (revenue) or volume (units), and include the formula.'
  },
  {
    id: 'q2m-1.3-04',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.4',
    question: 'Define the term non-profit organization.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A non-profit organization (NPO) is a legally registered entity that operates for public, social, or charitable benefit rather than for commercial gain, strictly retaining and reinvesting all financial surplus into fulfilling its mission.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies organization established for social, educational, or charitable benefit rather than profit' },
      { mark: 1, criterion: 'Specifies 100% of financial surplus is retained and reinvested into the mission rather than paid as dividends' }
    ],
    examinerTips: 'State that NPOs can earn a surplus (profit), but that surplus cannot be distributed to private owners.'
  },
  {
    id: 'q2m-1.3-05',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.5',
    question: 'Define the term labour turnover.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Labour turnover is a human resource metric measuring the percentage of a firm\'s total workforce that voluntarily or involuntarily leaves the organization during a specified period (typically one year): (Number of Leavers / Average Staff) * 100%.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies proportion of workforce leaving the organization over a specified timeframe' },
      { mark: 1, criterion: 'States annual percentage formula: (Number of leavers / Average staff employed) * 100%' }
    ],
    examinerTips: 'Provide the formula: (Number of staff leaving / Average number of staff employed) * 100.'
  },
  {
    id: 'q2m-1.3-06',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.6',
    question: 'State two possible barriers to a business behaving in a corporate socially responsible way.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: '1. High financial compliance and procurement costs: Heavy outlays required to source ethically certified inputs and pay above-market living wages, which compress operating profit margins.\n2. Short-term shareholder pressure: Demands from external equity investors for immediate quarterly earnings, disincentivizing long-term ethical capital allocations.',
    markBreakdown: [
      { mark: 1, criterion: 'States first valid barrier (e.g. high compliance / ethical sourcing costs compressing margins)' },
      { mark: 1, criterion: 'States second valid distinct barrier (e.g. short-term shareholder pressure for immediate dividend maximization)' }
    ],
    examinerTips: 'Name two distinct barriers—cost/margin compression and shareholder return conflict are ideal.'
  },
  {
    id: 'q2m-1.3-07',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.7',
    question: 'Define Corporate Social Responsibility (CSR).',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Corporate Social Responsibility (CSR) is the continuing commitment by a business to conduct its operations ethically and sustainably, actively addressing the welfare of all internal and external stakeholders and the environment beyond statutory legal requirements.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies continuing ethical commitment to balance economic activity with stakeholder and environmental welfare' },
      { mark: 1, criterion: 'Explicitly emphasizes acting beyond statutory minimum legal requirements' }
    ],
    examinerTips: '"Beyond statutory legal compliance" is the hallmark phrase that guarantees the second mark.'
  },

  // --------------------------------------------------------------------------
  // Chapter 44: SWOT Analysis Toolkit (6 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.4-01',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.1',
    question: 'What is a SWOT analysis?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'A SWOT analysis is a strategic decision-making framework used to audit an organization\'s situational position by evaluating its internal competencies (Strengths) and deficiencies (Weaknesses) alongside external market opportunities (Opportunities) and environmental hazards (Threats).',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies strategic situational analysis tool evaluating internal S&W and external O&T' },
      { mark: 1, criterion: 'Explains strategic role in guiding managerial planning and decision-making' }
    ],
    examinerTips: 'Explicitly categorize Strengths/Weaknesses as INTERNAL and Opportunities/Threats as EXTERNAL.'
  },
  {
    id: 'q2m-1.4-02',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2a',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Limited competition in a niche market.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Opportunity (External Favourable).\nJustification: Limited rivalry in a specialized niche market is an external market condition that allows the firm to capture high market share and maintain pricing power without aggressive price wars.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an external Opportunity (or internal Strength if exclusive market dominance)' },
      { mark: 1, criterion: 'Provides valid contextual justification linking niche lack of rivalry to pricing power / market capture' }
    ],
    examinerTips: 'Always provide both the classification quadrant and a sentence of justification connecting it to the case context.'
  },
  {
    id: 'q2m-1.4-03',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2b',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Limited marketing on its new website.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Weakness (Internal Unfavourable).\nJustification: Marketing expenditure and web promotion are direct operational responsibilities of management; failing to promote its digital storefront restricts customer reach and sales conversion.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an internal Weakness' },
      { mark: 1, criterion: 'Provides valid justification explaining marketing budgets and promotional efforts are controllable internal operations' }
    ],
    examinerTips: 'Because promotional spending is completely within managerial control, it is unequivocally an internal Weakness.'
  },
  {
    id: 'q2m-1.4-04',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2c',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Issues of recruiting and retaining staff.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Weakness (Internal Unfavourable).\nJustification: Inability to recruit and retain dependable event staff is an internal human resource vulnerability that disrupts booking fulfillment and raises labor turnover costs.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an internal Weakness' },
      { mark: 1, criterion: 'Provides valid justification identifying human resource management and staff retention as an internal operational capability' }
    ],
    examinerTips: 'Staff retention and recruitment policies reflect internal HRM practices, making this an internal factor.'
  },
  {
    id: 'q2m-1.4-05',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2d',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Demand in the winter months is low.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Threat (External Unfavourable).\nJustification: Seasonality and unfavorable winter weather patterns in the UK are external climatic variables beyond the firm\'s control that depress customer demand for outdoor bouncy castle rentals.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an external Threat' },
      { mark: 1, criterion: 'Provides valid justification recognizing seasonal weather patterns as uncontrollable external macro-environmental factors' }
    ],
    examinerTips: 'Weather and seasonal climate patterns cannot be controlled by management, making winter drop-off an external Threat.'
  },
  {
    id: 'q2m-1.4-06',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2e',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Large profit margins could attract new competitors.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Threat (External Unfavourable).\nJustification: High profitability signals commercial attractiveness, creating an external threat that entrepreneurial competitors will enter the niche market, increasing rivalry and eroding margins.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an external Threat' },
      { mark: 1, criterion: 'Provides valid justification explaining that potential new entrants represent external competitive threats to market share and pricing' }
    ],
    examinerTips: 'While high profit itself is a strength, the threat of new entrants drawn by profits is an external Threat (Porter\'s Five Forces).'
  },

  // --------------------------------------------------------------------------
  // Chapter 45: Ansoff Matrix Toolkit (4 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.5-01',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: '1.5.1',
    question: 'Define the term market development.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Market development is a medium-risk growth strategy in the Ansoff Matrix whereby a business seeks to sell its existing products into new markets, such as entering new international geographic regions or targeting new demographic segments.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies selling existing products into new markets' },
      { mark: 1, criterion: 'Provides valid examples such as entering new geographic territories, new demographic segments, or new channels' }
    ],
    examinerTips: 'Product = Existing, Market = New. Mentioning geographic expansion or new demographics secures full marks.'
  },
  {
    id: 'q2m-1.5-02',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: '1.5.2',
    question: 'Define the term distribution channels.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A distribution channel is the intermediate pathway, network, or series of commercial entities (such as wholesalers, retailers, distributors, and e-commerce platforms) through which goods and services pass from the producer to the final end-consumer.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines pathway or network of intermediaries moving products from manufacturer/producer to final consumer' },
      { mark: 1, criterion: 'Names specific channel intermediaries (wholesalers, retailers, distributors, e-commerce platforms)' }
    ],
    examinerTips: 'List at least two intermediaries (e.g., wholesalers and retailers) to demonstrate concrete operational knowledge.'
  },
  {
    id: 'q2m-1.5-03',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: '1.5.3',
    question: 'Define market penetration.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Market penetration is a low-risk growth strategy in the Ansoff Matrix that focuses on increasing the sales volume and market share of existing products within existing markets, achieved through competitive pricing, loyalty programs, or intensive promotion.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies selling existing products to existing markets' },
      { mark: 1, criterion: 'Notes low risk profile and strategic focus on increasing sales volume or market share' }
    ],
    examinerTips: 'Product = Existing, Market = Existing. Note that this is the lowest-risk quadrant because products and customer habits are known.'
  },
  {
    id: 'q2m-1.5-04',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: '1.5.4',
    question: 'Define diversification.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Diversification is the highest-risk growth strategy in the Ansoff Matrix in which a business develops and markets entirely new products targeted at completely new markets outside its core operational domain, spreading business risk across varied industries.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies launching new products into new, unfamiliar markets' },
      { mark: 1, criterion: 'Emphasizes highest risk profile arising from dual unfamiliarity with product engineering and customer segment' }
    ],
    examinerTips: 'Product = New, Market = New. Highlighting the double-unfamiliarity risk profile guarantees top marks.'
  },
{
  "id": "q2m-steeple-01",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.1",
  "question": "Define the term STEEPLE analysis.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "STEEPLE analysis is an analytical situational management framework used by organizations to examine and evaluate opportunities and threats in the external macro-environment across social, technological, economic, environmental, political, legal, and ethical dimensions.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies STEEPLE as an external macro-environmental scanning or situational tool"
    },
    {
      "mark": 1,
      "criterion": "Identifies examining opportunities and threats across the seven dimensions (or lists key STEEPLE dimensions)"
    }
  ],
  "examinerTips": "Mentioning that STEEPLE focuses on external forces outside the direct control of the business guarantees the second mark."
},
{
  "id": "q2m-steeple-02",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.2",
  "question": "Define the term exchange rate.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "An exchange rate is the price or financial value of one national currency measured in terms of another currency in the foreign exchange market.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Defines exchange rate as the price, value, or purchasing power of one currency"
    },
    {
      "mark": 1,
      "criterion": "States comparison in terms of another foreign currency"
    }
  ],
  "examinerTips": "Keep it direct: 'The value of one currency expressed in terms of another currency.'"
},
{
  "id": "q2m-steeple-03",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.3",
  "question": "Distinguish between external opportunities and external threats.",
  "marks": 2,
  "commandTerm": "Distinguish",
  "assessmentObjective": "AO1",
  "modelAnswer": "External opportunities are favourable macro-environmental conditions or trends that an enterprise can exploit to increase sales, market share, or profit margins, whereas external threats are unfavourable external shifts or constraints that pose risks of financial loss, cost increases, or competitive decline.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Defines opportunities as favourable external developments providing commercial or profit advantages"
    },
    {
      "mark": 1,
      "criterion": "Defines threats as unfavourable external developments creating risks, costs, or commercial obstacles"
    }
  ],
  "examinerTips": "Use contrasting language: 'Opportunities provide potential commercial gains, whereas threats impose potential commercial harm or losses.'"
},
{
  "id": "q2m-steeple-04",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.4",
  "question": "Outline one way an aging population presents a commercial opportunity for businesses.",
  "marks": 2,
  "commandTerm": "Outline",
  "assessmentObjective": "AO1",
  "modelAnswer": "An aging population expands consumer demand for specialized goods and services tailored to senior demographics, creating commercial growth opportunities for healthcare providers, pharmaceutical firms, retirement housing developers, and asset wealth management services.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies increasing demand for senior-focused goods or services"
    },
    {
      "mark": 1,
      "criterion": "Provides relevant commercial examples (healthcare, pharmaceuticals, assisted living, retirement finance)"
    }
  ],
  "examinerTips": "Support the mechanism with a concrete commercial sector like healthcare, pharmaceuticals, or retirement housing."
},
{
  "id": "q2m-steeple-05",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.5",
  "question": "Define the term inflation.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "Inflation is a sustained, general increase in the average price level of goods and services throughout an entire economy over a period of time, resulting in a fall in the purchasing power of money.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies a sustained or general increase in the average price level"
    },
    {
      "mark": 1,
      "criterion": "Notes the consequence of declining purchasing power or value of money"
    }
  ],
  "examinerTips": "Do not just say 'prices go up'. Must state 'sustained increase in the general/average price level' to earn both marks."
},
{
  "id": "q2m-steeple-06",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.6",
  "question": "State two examples of consumer protection legislation that impact commercial businesses.",
  "marks": 2,
  "commandTerm": "State",
  "assessmentObjective": "AO1",
  "modelAnswer": "Examples of consumer protection legislation include laws governing product safety and quality standards (preventing hazardous or defective merchandise) and statutory fair advertising regulations (prohibiting misleading product claims or false promotional descriptions).",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "States product safety/standards laws or refund rights"
    },
    {
      "mark": 1,
      "criterion": "States truthful advertising/trade descriptions or anti-fraud laws"
    }
  ],
  "examinerTips": "Stating 'product safety laws' and 'truthful advertising regulations' directly secures full marks."
},
{
  "id": "q2m-bmt-01",
  "subunit": "bmt-toolkit",
  "questionNumber": "47.1",
  "question": "Define the Boston Consulting Group (BCG) matrix.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "The Boston Consulting Group (BCG) matrix is a situational and decision-making product portfolio management framework that assesses and categorizes a business's products into stars, cash cows, question marks, and dogs based on market growth rate and relative market share.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies the BCG Matrix as a portfolio management or situational tool"
    },
    {
      "mark": 1,
      "criterion": "Identifies the two evaluation axes: market growth rate and relative market share (or the four quadrants)"
    }
  ],
  "examinerTips": "Mentioning 'market growth' and 'market share' as the two core axes ensures full marks."
},
{
  "id": "q2m-bmt-02",
  "subunit": "bmt-toolkit",
  "questionNumber": "47.2",
  "question": "Distinguish between stars and cash cows in the BCG matrix.",
  "marks": 2,
  "commandTerm": "Distinguish",
  "assessmentObjective": "AO1",
  "modelAnswer": "In the BCG matrix, both stars and cash cows hold high relative market share; however, stars operate in high-growth markets requiring heavy continuous capital investment to defend leadership, whereas cash cows operate in mature, low-growth markets requiring minimal reinvestment and generating substantial surplus cash.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Distinguishes market growth rate (stars = high-growth, cash cows = low-growth/mature)"
    },
    {
      "mark": 1,
      "criterion": "Contrasts cash flow dynamics (stars absorb heavy investment, cash cows generate surplus net cash)"
    }
  ],
  "examinerTips": "Contrast both the market growth environment and the net cash flow generated."
},
{
  "id": "q2m-bmt-03",
  "subunit": "bmt-toolkit",
  "questionNumber": "49.1",
  "question": "Define the term expected monetary value (EMV) in a decision tree.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "Expected monetary value (EMV) is the probability-weighted average financial outcome of an uncertain decision option, calculated by multiplying the financial payoff of each probable outcome by its respective probability and summing the results.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies EMV as a probability-weighted average financial outcome"
    },
    {
      "mark": 1,
      "criterion": "Explains calculation as the sum of each outcome's payoff multiplied by its probability"
    }
  ],
  "examinerTips": "Writing the formula EV = Sum(Probability x Payoff) or stating 'probability-weighted average financial return' awards full marks."
},
{
  "id": "q2m-bmt-04",
  "subunit": "bmt-toolkit",
  "questionNumber": "51.1",
  "question": "Outline what is meant by a circular business model.",
  "marks": 2,
  "commandTerm": "Outline",
  "assessmentObjective": "AO1",
  "modelAnswer": "A circular business model is a sustainable commercial operating model designed to eliminate waste and resource depletion by closing resource loops, focusing on the reuse, repair, recycling, and prolonged operational lifecycle of materials and products rather than traditional linear disposal.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Explains closing loops or eliminating waste/pollution through reuse, recycling, or sharing"
    },
    {
      "mark": 1,
      "criterion": "Contrasts with traditional linear 'take-make-waste' consumption"
    }
  ],
  "examinerTips": "Mentioning 'closing loops' or 'decoupling economic activity from finite resource consumption' shows deep conceptual understanding."
}
];
