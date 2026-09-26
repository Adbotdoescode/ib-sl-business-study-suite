import {
  FourMarkQuestion,
  SixMarkQuestion
} from '@/types/curriculum';

// ============================================================================
// 1. FOUR-MARK QUESTIONS (AO2 PEEL)
// ============================================================================

export const FOUR_MARK_QUESTIONS: FourMarkQuestion[] = [
  {
    id: 'q4m-01',
    subunit: '1.1-what-is-a-business',
    questionNumber: 'Question 1.1a',
    question: 'Distinguish between revenue and costs.',
    caseStimulus:
      'Education is big business. Schools can earn revenue from numerous sources, such as tuition fees (for fee-paying schools), grants from the government and fund-raising events. They might also lease out their facilities (such as classrooms, sports facilities, drama studios and swimming pools) during the evenings, weekends and school holidays.\n\nSchools use these revenues to finance their costs, such as staff salaries, utility bills and the maintenance of the buildings. In addition to school fees, parents might also have to pay for items such as school uniform, textbooks, stationery, sports equipment and food.',
    contextTitle: 'School Revenue and Operating Costs',
    marks: 4,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Revenue Definition & School Application',
        point: 'Revenue represents the total gross cash inflows and monetary proceeds generated from an organization\'s core operations and trading activities over a specified period.',
        evidence: 'In the school context, revenue is accrued from tuition fees paid by fee-paying parents, statutory government grants, fund-raising events, and commercial leasing of sports facilities or swimming pools during evenings and holidays.',
        explanation: 'These receipts represent incoming monetary value before any expenses, depreciation, or operating overheads are deducted.',
        link: 'Generating diversified revenue streams is crucial for the school to establish an operating budget capable of funding its educational programs.'
      },
      point2: {
        title: 'Costs Definition & Contrast with School Context',
        point: 'In contrast, costs represent the financial expenditures and resource outflows that an organization must disburse to deliver its services.',
        evidence: 'For the school, costs encompass fixed and variable operating expenditures, specifically teaching and administrative staff salaries, classroom utility bills, building maintenance, and facility overheads.',
        explanation: 'Unlike revenue, which expands financial reserves, costs deplete capital; an operational surplus occurs only when total revenue exceeds cumulative operating costs (Surplus = Total Revenue - Total Costs).',
        link: 'Rigorous cost containment on utilities and maintenance protects the school\'s ongoing financial solvency.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-01-c1',
        criterion: 'Clear definition and explanation of revenue as gross operational cash inflows',
        mark: 1
      },
      {
        id: 'q4m-01-c2',
        criterion: 'Revenue directly applied to school context (tuition fees, grants, facility leasing)',
        mark: 1
      },
      {
        id: 'q4m-01-c3',
        criterion: 'Clear definition and explanation of costs as operational expenditures and resource outflows',
        mark: 1
      },
      {
        id: 'q4m-01-c4',
        criterion: 'Costs directly applied to school context (staff salaries, utility bills, maintenance)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-02',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Question 2.1a',
    question: 'Distinguish between the aims of public and private sector organizations.',
    caseStimulus: 'Education, housing and healthcare services can be provided by both private sector businesses and the public sector.',
    contextTitle: 'Public vs Private Sector Service Provision',
    marks: 4,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Public Sector Primary Aims & Service Orientation',
        point: 'Public sector organizations are state-owned bodies whose overarching aim is social welfare maximization, equity, and universal accessibility rather than financial profitability.',
        evidence: 'In state schooling, public healthcare, and social housing, services are provided universally to all citizens regardless of income, funded primarily through general taxation.',
        explanation: 'Because their mandate is supplying merit goods and essential infrastructure that free markets would under-provide, public sector bodies prioritize societal well-being and service reliability over commercial margins.',
        link: 'Institutional success is measured by social welfare indicators (e.g., patient wait times, literacy rates, housing availability) rather than net bottom-line earnings.'
      },
      point2: {
        title: 'Private Sector Primary Aims & Commercial Return',
        point: 'In contrast, private sector commercial enterprises are privately owned entities whose principal aim is profit maximization and maximizing shareholder returns.',
        evidence: 'Private hospitals, independent fee-charging schools, and commercial property developers charge market-driven prices to generate a financial return on invested equity capital.',
        explanation: 'Commercial firms survive only if customer revenues exceed operating expenditures; hence, they allocate resources based on consumer purchasing power, operational efficiency, and profit margins.',
        link: 'Failure to generate profit threatens the private enterprise with insolvency, making profitability and market competitiveness non-negotiable strategic priorities.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-02-c1',
        criterion: 'Identifies and explains public sector primary aim as social welfare and universal access',
        mark: 1
      },
      {
        id: 'q4m-02-c2',
        criterion: 'Public sector aim applied to healthcare, state education, or social housing context',
        mark: 1
      },
      {
        id: 'q4m-02-c3',
        criterion: 'Identifies and explains private sector primary aim as profit maximization and shareholder wealth',
        mark: 1
      },
      {
        id: 'q4m-02-c4',
        criterion: 'Private sector aim applied to fee-charging hospitals, private schools, or commercial property context',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-03',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Question 2.3b',
    question: 'Explain two advantages of running EXP as a partnership.',
    caseStimulus:
      'EXP is a small Chinese restaurant with take-away service located in London. It was established in 2016 by partners Keith and Tonina Hoang. EXP is run as a partnership with each partner having 50% of the stake in the business. They have a workforce of 12 people, including chefs, counter staff and delivery crew. EXP relies heavily on local customers but faces competition from nearby pizza outlets and Indian and Italian restaurants.\n\nEXP\'s popularity has grown with a loyal customer base. Keith and Tonina had to discontinue with the distribution of take-away menus in the local area as EXP is already operating near full capacity. Keith and Tonina thought it best to maintain the quality of their food and the punctuality of their home deliveries to maintain the reputation that they have established.',
    contextTitle: 'EXP Chinese Takeaway Partnership',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Workload Sharing & Functional Specialization',
        point: 'A major advantage of operating EXP as a partnership is executive workload sharing and functional management specialization between the two partners.',
        evidence: 'Operating a busy 12-person restaurant running at "near full capacity" involves managing chefs, counter staff, and delivery crew punctuality while maintaining food quality.',
        explanation: 'Having a 50/50 partnership allows Keith and Tonina to divide daily responsibilities—one partner managing culinary kitchen operations and quality assurance while the other oversees delivery logistics, front-of-house service, and finances.',
        link: 'This division of labor reduces operational burnout and ensures EXP maintains the punctuality and food quality essential to its brand reputation.'
      },
      point2: {
        title: 'Pooled Capital & Shared Financial Risk',
        point: 'A second advantage is access to larger initial capital and shared financial risk compared to a sole trader structure.',
        evidence: 'Establishing and expanding a London restaurant in 2016 required substantial upfront capital for commercial kitchen fit-outs, dining furniture, delivery vehicles, and wage reserves for 12 employees.',
        explanation: 'By combining the personal savings and borrowing capacities of both Keith and Tonina, EXP secured necessary startup funding without taking on extortionate debt, while sharing the financial burden of business liabilities equally (50% stake each).',
        link: 'This shared financial foundation strengthened EXP\'s balance sheet, allowing it to compete effectively against surrounding pizza, Indian, and Italian restaurant rivals.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-03-c1',
        criterion: 'Explains executive workload sharing and functional management specialization',
        mark: 1
      },
      {
        id: 'q4m-03-c2',
        criterion: 'Specialization applied to EXP context (12 staff, kitchen quality vs delivery logistics, full capacity)',
        mark: 1
      },
      {
        id: 'q4m-03-c3',
        criterion: 'Explains pooled financial capital and shared liability/risk compared to a sole trader',
        mark: 1
      },
      {
        id: 'q4m-03-c4',
        criterion: 'Capital/risk applied to EXP context (London setup costs, 50/50 equity, Italian/Indian competition)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-04',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.1b',
    question: 'Explain the role of vision and mission statements in business organizations.',
    caseStimulus:
      'Examples of organizational vision and mission statements include:\n- To be the most successful premium manufacturer in the industry – BMW\n- The company exists to benefit and refresh everyone it touches – Coca-Cola\n- To organise the world\'s information and make it universally accessible and useful – Google\n- Creating the finest ice cream – Häagen-Dazs\n- Inspire and develop the builders of tomorrow – Lego\n- To help people and businesses throughout the world realise their full potential – Microsoft\n- A just world without poverty – Oxfam\n- To make people happy – Walt Disney Company',
    contextTitle: 'Corporate Vision & Mission Statements',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Strategic Direction & Operational Alignment',
        point: 'Vision and mission statements establish clear strategic direction, aligning all departmental activities and employees toward unified corporate goals.',
        evidence: 'Google\'s mission "To organise the world\'s information and make it universally accessible and useful" and BMW\'s vision to be the "most successful premium manufacturer" provide an unambiguous operating compass.',
        explanation: 'When functional teams formulate operational strategies—such as software engineering algorithms at Google or vehicle platform styling at BMW—these statements filter out misaligned initiatives, concentrating capital on core competencies.',
        link: 'This strategic alignment prevents fragmented decision-making across global subsidiaries, ensuring corporate coherence.'
      },
      point2: {
        title: 'Stakeholder Motivation & Corporate Culture',
        point: 'Secondly, these statements serve as vital motivational tools that build corporate culture, unify employee pride, and communicate ethical purpose to external stakeholders.',
        evidence: 'Lego\'s ambition to "Inspire and develop the builders of tomorrow" and Oxfam\'s vision of "A just world without poverty" emotionally engage employees and benefactors beyond transactional exchanges.',
        explanation: 'A compelling vision provides employees with an intrinsic sense of purpose, driving engagement and job retention, while signaling shared ethical values to consumers and donors.',
        link: 'Consequently, strong mission statements elevate brand loyalty and employee productivity, driving sustainable organizational success.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-04-c1',
        criterion: 'Explains the role of establishing strategic direction and corporate alignment',
        mark: 1
      },
      {
        id: 'q4m-04-c2',
        criterion: 'Strategic direction applied to stimulus examples (Google information accessibility / BMW premium manufacturing)',
        mark: 1
      },
      {
        id: 'q4m-04-c3',
        criterion: 'Explains the role of motivating stakeholders and fostering unified corporate culture',
        mark: 1
      },
      {
        id: 'q4m-04-c4',
        criterion: 'Motivation applied to stimulus examples (Lego builders of tomorrow / Oxfam poverty-free world)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-05',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.2b',
    question: 'Explain why it is important for Lenovo to specify its organizational objectives.',
    caseStimulus:
      'Chinese multinational technology company Lenovo acquired the personal computers division of IBM in 2005. Lenovo\'s goal was to establish itself outside of the Asian market by owning IBM\'s globally recognized brands such as ThinkPad laptops. Lenovo is committed to four key values: Customer service, Trust and integrity, Teamwork across cultures, Innovation and entrepreneurial spirit.\n\nLenovo strives to increase its market presence by sponsoring key sporting events and teams, such as McLaren, the British Formula One Team, the Williams Formula One team, the NBA, and the 2008 Beijing Olympic Games. In 2012, Lenovo became the official sponsor of the NFL, its largest sponsorship in America. Its strategy has helped the company to gain market share around the world.',
    contextTitle: 'Lenovo Global Expansion & Objectives',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Guiding Cross-Border Post-Merger Integration',
        point: 'Specifying organizational objectives is critical to guide complex cross-border strategies and align disparate international divisions following major acquisitions.',
        evidence: 'After acquiring IBM\'s PC division in 2005, Lenovo set the explicit strategic objective to "establish itself outside of the Asian market" using the ThinkPad brand.',
        explanation: 'A well-defined strategic objective enabled senior executives to channel capital and marketing efforts into Western territories, bridging Chinese corporate leadership with American operations under shared corporate values like "teamwork across cultures."',
        link: 'Without this clear objective, Lenovo risked post-merger culture clash, operational paralysis, and failing to monetize IBM\'s brand assets.'
      },
      point2: {
        title: 'Benchmarking Marketing ROI & Accountability',
        point: 'Explicit objectives provide measurable performance benchmarks that allow management to monitor, assess, and justify major financial marketing expenditures.',
        evidence: 'Lenovo committed massive financial capital to high-profile sports marketing (McLaren F1, NBA, Beijing Olympics, and NFL in America) to achieve its stated goal of "gaining market share around the world."',
        explanation: 'Clear objectives enable marketing directors to evaluate return on investment (ROI): managers can track whether brand awareness metrics and global PC market share increased in regions where NFL and F1 sponsorships aired.',
        link: 'This measurement function ensures financial accountability and justifies ongoing multi-million-dollar marketing outlays to company shareholders.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-05-c1',
        criterion: 'Explains strategic guidance and alignment during international post-merger integration',
        mark: 1
      },
      {
        id: 'q4m-05-c2',
        criterion: 'Integration applied to Lenovo acquiring IBM PC division and expanding outside Asia',
        mark: 1
      },
      {
        id: 'q4m-05-c3',
        criterion: 'Explains performance benchmarking, ROI monitoring, and marketing expenditure control',
        mark: 1
      },
      {
        id: 'q4m-05-c4',
        criterion: 'Control applied to Lenovo sports sponsorships (NFL, NBA, F1) and global market share targets',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-06',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.3b',
    question: 'In the context of the case studies, explain the meaning of ethical business behaviour.',
    caseStimulus:
      'Ronald McDonald House Charities (RMHC) is a non-profit organization, created by McDonald\'s. The charity\'s mission statement is to "directly improve the health and well-being of children". Operating in 64 countries and regions, RMHC has helped to make a difference to millions of seriously ill children and their families.\n\nBurger King, the world\'s second largest fast-food chain and the largest rival of McDonald\'s, has used humanely sourced meats and eggs since 2007. This means Burger King gives priority and better deals to suppliers that provide cage-free chickens and free-range pigs. Burger King operates two national charitable organizations: the Have It Your Way Foundation and the McLamore Foundation.',
    contextTitle: 'Ethical Practices: RMHC and Burger King',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Voluntary Moral Standards Exceeding Statutory Law',
        point: 'Ethical business behaviour refers to organizational actions, decisions, and practices guided by moral principles, fairness, and welfare that go well beyond statutory legal minimums.',
        evidence: 'Burger King actively implemented policies using "humanely sourced meats and eggs since 2007," giving priority and better deals to suppliers providing "cage-free chickens and free-range pigs."',
        explanation: 'While conventional battery cage farming was legally permissible, Burger King adopted moral accountability for animal welfare, accepting higher supply chain procurement costs to uphold humane ethical standards.',
        link: 'This demonstrates ethical behavior because the company prioritizes animal welfare and moral principles over unconstrained cost minimization.'
      },
      point2: {
        title: 'Philanthropic Responsibility toward Community Stakeholders',
        point: 'Ethical behavior also entails active corporate social responsibility (CSR) where commercial enterprises dedicate resources to improve the welfare of wider societal stakeholders.',
        evidence: 'McDonald\'s established and supports Ronald McDonald House Charities (RMHC), operating in 64 countries to "directly improve the health and well-being of children" by accommodating families of seriously ill children.',
        explanation: 'Rather than focusing solely on commercial fast-food sales, McDonald\'s directs financial and organizational resources into philanthropic housing infrastructure for families during medical crises.',
        link: 'Upholding such philanthropic commitments builds public trust, elevates corporate reputation, and fulfills moral obligations to society.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-06-c1',
        criterion: 'Explains voluntary moral standards and practices that exceed legal compliance',
        mark: 1
      },
      {
        id: 'q4m-06-c2',
        criterion: 'Applied to Burger King sourcing cage-free eggs and free-range pork despite higher costs',
        mark: 1
      },
      {
        id: 'q4m-06-c3',
        criterion: 'Explains philanthropic stakeholder responsibility and corporate social responsibility (CSR)',
        mark: 1
      },
      {
        id: 'q4m-06-c4',
        criterion: 'Applied to McDonald\'s RMHC providing housing for families of seriously ill children in 64 countries',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-07',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.3c',
    question: 'Distinguish between vision and mission statements in the context of RMHC and Burger King.',
    caseStimulus:
      'Ronald McDonald House Charities (RMHC) is a non-profit organization, created by McDonald\'s. The charity\'s mission statement is to "directly improve the health and well-being of children". Operating in 64 countries and regions, RMHC has helped to make a difference to millions of seriously ill children and their families.\n\nBurger King operates two national charitable organizations: the Have It Your Way Foundation (which focuses on hunger alleviation, disease prevention and community education) and the McLamore Foundation (providing scholarships to students since 2000).',
    contextTitle: 'Vision vs Mission: RMHC & Burger King',
    marks: 4,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Mission Statement Definition & Operational Focus',
        point: 'A mission statement articulates an organization\'s current core operational purpose, target beneficiaries, and day-to-day actionable values.',
        evidence: 'RMHC\'s explicit mission statement is to "directly improve the health and well-being of children" across 64 operating countries and regions.',
        explanation: 'This provides immediate operational guidance on where current funds and staffing must be allocated—specifically building accommodation, providing amenities, and supporting families of hospitalized children in the present.',
        link: 'The mission statement outlines the tangible operational baseline by which daily charitable performance is executed and managed.'
      },
      point2: {
        title: 'Vision Statement Contrast & Aspirational Horizon',
        point: 'In contrast, a vision statement is long-term and aspirational, outlining the ultimate future state or inspiring dream the organization strives to achieve.',
        evidence: 'While Burger King\'s Have It Your Way Foundation tackles current hunger alleviation and scholarships, its overarching vision would be an inspiring future state—such as "a world free from childhood hunger and educational inequality."',
        explanation: 'Unlike the grounded mission statement ("what we do today"), the vision statement is inspirational ("where we aspire to be tomorrow"), motivating stakeholders toward long-term systemic change.',
        link: 'While the mission describes the practical vehicle, the vision depicts the ultimate destination.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-07-c1',
        criterion: 'Defines mission statement as present operational purpose, target scope, and values',
        mark: 1
      },
      {
        id: 'q4m-07-c2',
        criterion: 'Mission applied to RMHC\'s daily commitment to improve children\'s health in 64 countries',
        mark: 1
      },
      {
        id: 'q4m-07-c3',
        criterion: 'Defines vision statement as long-term aspirational future state and organizational dream',
        mark: 1
      },
      {
        id: 'q4m-07-c4',
        criterion: 'Vision applied to Burger King Foundations\' ultimate aspiration of eradicating hunger and educational poverty',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-08',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.1a',
    question: 'Apply the Ansoff matrix to Cadbury launching new confectionery products to compete with rivals.',
    caseStimulus: 'Cadbury, the chocolate manufacturer, launches new products under the names of Crème Eggs, Flake, Crunchie and Heroes to compete with existing rival brands.',
    contextTitle: 'Cadbury Product Range Extensions',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Quadrant Classification & Product Novelty',
        point: 'In the Ansoff Matrix, Cadbury\'s strategy is classified as Product Development.',
        evidence: 'Cadbury is introducing newly created confectionery lines ("Crème Eggs, Flake, Crunchie, and Heroes") targeted at its existing market of chocolate and sweet consumers to compete against rival brands.',
        explanation: 'Because Cadbury already commands established brand equity and distribution channels in supermarkets, it leverages its existing customer base while innovating new physical recipes, textures, and product formats.',
        link: 'This strategy allows Cadbury to revitalize consumer interest and defend its shelf space against confectionery rivals.'
      },
      point2: {
        title: 'Risk Profile & Operational Mechanism',
        point: 'Product development carries a moderate level of risk due to product unfamiliarity balanced by market familiarity.',
        evidence: 'Developing distinct chocolate bars and assorted boxes (Heroes) requires substantial research and development (R&D) outlays, recipe trials, packaging redesign, and promotional launch campaigns.',
        explanation: 'However, because the target chocolate market is already deeply understood and consumer loyalty to the master Cadbury brand is high, the commercial risk of consumer rejection is significantly mitigated compared to entering an unknown market.',
        link: 'Consequently, Cadbury captures incremental sales revenue from existing chocolate shoppers while containing market entry risks.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-08-c1',
        criterion: 'Correctly classifies the strategy into the Product Development quadrant of the Ansoff Matrix',
        mark: 1
      },
      {
        id: 'q4m-08-c2',
        criterion: 'Directly links new products (Crème Eggs, Flake, Crunchie, Heroes) to the existing chocolate consumer market',
        mark: 1
      },
      {
        id: 'q4m-08-c3',
        criterion: 'Explains the operational mechanism of leveraging existing retail distribution and brand equity',
        mark: 1
      },
      {
        id: 'q4m-08-c4',
        criterion: 'Analyzes the moderate risk profile (R&D expenditures balanced by existing market familiarity)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-09',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.1b',
    question: 'Apply the Ansoff matrix to Toyota launching a new line of upmarket cars under the Lexus brand.',
    caseStimulus: 'Toyota, the world\'s largest car manufacturer, launches a new line of upmarket cars under the Lexus brand to cater for wealthier customers.',
    contextTitle: 'Toyota Launch of Lexus Luxury Marque',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Quadrant Classification & Strategic Repositioning',
        point: 'In the Ansoff Matrix, Toyota\'s strategy is classified as Diversification (specifically related diversification).',
        evidence: 'Toyota engineered an entirely new line of upmarket luxury vehicles (the new product line under the "Lexus" marque) specifically to cater to wealthier consumers (a brand-new customer demographic segment distinct from mass-market Toyota buyers).',
        explanation: 'Toyota recognized that its core brand identity was synonymous with affordable, reliable family cars, which could not appeal to luxury buyers; thus, it required both a new product platform and a distinct brand identity.',
        link: 'Creating the separate Lexus marque allowed Toyota to penetrate executive automotive segments previously unserved by the firm.'
      },
      point2: {
        title: 'High Risk Profile & Capital Commitment',
        point: 'Diversification represents the highest-risk quadrant in the Ansoff Matrix due to dual unfamiliarity.',
        evidence: 'Toyota had to compete directly against entrenched European luxury incumbents such as Mercedes-Benz and BMW, building dedicated premium dealerships and bespoke customer service standards.',
        explanation: 'Developing luxury vehicle engineering from scratch while establishing trust among affluent buyers who had never purchased from Toyota created immense capital exposure and brand execution risks.',
        link: 'While highly risky, successful execution enabled Toyota to capture high gross margins and insulate the parent corporation from mass-market price wars.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-09-c1',
        criterion: 'Correctly classifies strategy as Diversification (or related diversification)',
        mark: 1
      },
      {
        id: 'q4m-09-c2',
        criterion: 'Directly links new product line (Lexus luxury cars) to new market segment (wealthier executive buyers)',
        mark: 1
      },
      {
        id: 'q4m-09-c3',
        criterion: 'Explains strategic necessity of creating a separate brand identity to overcome economy brand perceptions',
        mark: 1
      },
      {
        id: 'q4m-09-c4',
        criterion: 'Analyzes high risk profile (competing against established European luxury rivals with dual unfamiliarity)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-10',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.1c',
    question: 'Apply the Ansoff matrix to Tesco providing petrol and financial services to its customers.',
    caseStimulus: 'Tesco, one of the world\'s largest supermarket chains, expands by providing petrol and financial services to its customers.',
    contextTitle: 'Tesco Forecourt Fuel and Financial Services',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Quadrant Classification & Service Innovation',
        point: 'In the Ansoff Matrix, Tesco\'s expansion strategy is classified as Product Development.',
        evidence: 'Tesco introduced entirely new service offerings—forecourt petrol filling stations and personal banking/credit services (new products/services)—tailored specifically to its vast existing supermarket shopper base.',
        explanation: 'Rather than seeking new geographic or demographic customer groups, Tesco leveraged the existing footfall of millions of weekly grocery shoppers to cross-sell non-grocery convenience and financial products.',
        link: 'This allowed Tesco to capture a higher share of wallet from existing consumers during routine grocery visits.'
      },
      point2: {
        title: 'Operational Synergy & Moderate Risk Profile',
        point: 'This product development strategy entails moderate risk, balancing operational complexity with customer loyalty advantages.',
        evidence: 'Operating forecourt petrol pumps and banking services required new regulatory compliance and specialized supply chains, integrated with Tesco\'s Clubcard loyalty rewards program.',
        explanation: 'While entering banking and fuel retailing involved substantial capital setup and compliance risk, customer trust in the Tesco brand and loyalty point incentives minimized customer acquisition costs.',
        link: 'Consequently, Tesco maximized customer retention and revenue per customer without bearing the hazards of entering an unfamiliar market.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-10-c1',
        criterion: 'Correctly classifies strategy into the Product Development quadrant of the Ansoff Matrix',
        mark: 1
      },
      {
        id: 'q4m-10-c2',
        criterion: 'Directly links new service offerings (petrol forecourts, banking services) to existing supermarket customer base',
        mark: 1
      },
      {
        id: 'q4m-10-c3',
        criterion: 'Explains operational mechanism of cross-selling and leveraging Clubcard loyalty infrastructure',
        mark: 1
      },
      {
        id: 'q4m-10-c4',
        criterion: 'Analyzes moderate risk profile (regulatory and capital demands offset by established consumer trust)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-11',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.1d',
    question: 'Apply the Ansoff matrix to McDonald\'s introducing wedding services under the McWedding brand name.',
    caseStimulus: 'McDonald\'s introduces wedding services under the McWedding brand name.',
    contextTitle: 'McDonald\'s McWedding Banquet Services',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Quadrant Classification & Radical Market Shift',
        point: 'In the Ansoff Matrix, McDonald\'s introduction of McWedding services is classified as Diversification (specifically unrelated / conglomerate diversification).',
        evidence: 'McDonald\'s launched formal event management and wedding reception hosting (an entirely new service) into the celebratory matrimonial events sector (an entirely new market segment far removed from fast-food dining).',
        explanation: 'McDonald\'s departed completely from its core competence of rapid, standardized fast-food burger preparation to offer bespoke celebration ceremonies, balloon decorations, and wedding favors.',
        link: 'This strategy moves the corporation into an unproven commercial arena with zero operational overlap with its primary restaurant business.'
      },
      point2: {
        title: 'Extreme Risk Profile & Brand Dilution Hazard',
        point: 'Unrelated diversification carries the highest risk of commercial failure in the Ansoff framework.',
        evidence: 'McDonald\'s had no prior expertise in high-end hospitality or matrimonial event planning, targeting couples seeking unconventional, budget-conscious wedding celebrations.',
        explanation: 'Because the firm faced dual unfamiliarity—untested service delivery and an unfamiliar celebratory customer mindset—it faced the grave risk of brand dilution if consumers perceived fast-food dining as cheapening a once-in-a-lifetime marital milestone.',
        link: 'Therefore, while generating novelty PR, the initiative carried substantial reputational and commercial vulnerability.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-11-c1',
        criterion: 'Correctly classifies strategy as Diversification (specifically unrelated / conglomerate diversification)',
        mark: 1
      },
      {
        id: 'q4m-11-c2',
        criterion: 'Directly links new service (wedding reception hosting) to new market segment (matrimonial couples)',
        mark: 1
      },
      {
        id: 'q4m-11-c3',
        criterion: 'Explains operational challenge of departing from standardized fast food into bespoke event management',
        mark: 1
      },
      {
        id: 'q4m-11-c4',
        criterion: 'Analyzes extreme risk profile and brand dilution hazard from conflicting brand perceptions',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-12',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.2c',
    question: 'Explain one advantage and one disadvantage of Adidas\'s market development strategy.',
    caseStimulus:
      'According to its corporate website, Adidas strives "to be the best sports brand in the world." This mission statement is supported by the company\'s growth strategy of market development across the world... The COVID-19 pandemic caused sales revenues at Adidas to fall by 16% in 2020 to €19.84bn ($22.44bn). This caused the company to change its growth strategy to develop new distribution channels, with a shift from selling its goods in retail outlets to using e-commerce and mail order. The company\'s growth strategy includes plans to double its e-commerce business to €9bn ($10.2bn) by 2025.',
    contextTitle: 'Adidas E-Commerce Channel Pivot',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Advantage: Direct Customer Access & Higher Profit Margins',
        point: 'A primary advantage of Adidas\'s market development strategy via direct-to-consumer e-commerce is expanding global reach and capturing higher gross profit margins.',
        evidence: 'Shifting from physical third-party retail stores to proprietary e-commerce platforms targeting €9bn ($10.2bn) by 2025 allows Adidas to bypass retail intermediaries.',
        explanation: 'Selling directly to consumers over the Internet eliminates the wholesale margin discounts demanded by independent sports department stores. Additionally, e-commerce reaches online shoppers 24/7 globally, bypassing lockdowns and geographic physical barriers.',
        link: 'This drives higher net profit margins and builds strategic operational resilience against physical retail store disruptions.'
      },
      point2: {
        title: 'Disadvantage: High Fulfillment Capital & Return Logistics',
        point: 'A significant disadvantage is the substantial capital expenditure, logistics complexity, and customer return costs associated with digital direct fulfillment.',
        evidence: 'Doubling e-commerce sales to €9bn necessitates massive capital investments in automated warehouse distribution centers, digital cybersecurity, and reverse-logistics infrastructure.',
        explanation: 'Unlike bulk shipping to retail outlets, e-commerce requires picking, packaging, and shipping individual shoeboxes to residential addresses, leading to elevated shipping costs and high product return rates (often exceeding 30% in footwear and apparel).',
        link: 'These elevated fulfillment and customer return expenses can squeeze operating margins and expose Adidas to supply chain bottlenecks.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-12-c1',
        criterion: 'Explains advantage of market development via e-commerce (bypassing intermediaries, higher margins, 24/7 reach)',
        mark: 1
      },
      {
        id: 'q4m-12-c2',
        criterion: 'Advantage applied to Adidas context (€9bn online sales target, store closures, pandemic resilience)',
        mark: 1
      },
      {
        id: 'q4m-12-c3',
        criterion: 'Explains disadvantage of digital channel expansion (logistics capital outlays, high return rates)',
        mark: 1
      },
      {
        id: 'q4m-12-c4',
        criterion: 'Disadvantage applied to Adidas context (automated distribution centers, online apparel return costs)',
        mark: 1
      }
    ]
  }
];

// ============================================================================
// 2. SIX-MARK QUESTIONS (AO2/AO3 ANALYSIS & EVALUATION)
// ============================================================================

export const SIX_MARK_QUESTIONS: SixMarkQuestion[] = [
  {
    id: 'q6m-01',
    subunit: '1.1-what-is-a-business',
    questionNumber: 'Question 1.1b',
    question: 'Examine how business functions operate in an organization such as a school.',
    caseStimulus:
      'Education is big business. Schools can earn revenue from numerous sources, such as tuition fees (for fee-paying schools), grants from the government and fund-raising events. They might also lease out their facilities (such as classrooms, sports facilities, drama studios and swimming pools) during the evenings, weekends and school holidays.\n\nSchools use these revenues to finance their costs, such as staff salaries, utility bills and the maintenance of the buildings. In addition to school fees, parents might also have to pay for items such as school uniform, textbooks, stationery, sports equipment and food.',
    contextTitle: 'Functional Interdependence in School Operations',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Simple listing of the four business functions (HRM, Finance, Operations, Marketing) without direct school context or operational detail.'
      },
      {
        range: '3-4',
        descriptor: 'Explains how 2 or 3 business functions operate in a school with some application, but lacks discussion of departmental interdependence or trade-offs.'
      },
      {
        range: '5-6',
        descriptor: 'Thorough examination of all four business functions applied specifically to the school context, highlighting deep functional interdependence and conflicting operational priorities.'
      }
    ],
    perspective1: {
      title: 'Operations Management and Human Resource Management (HRM)',
      points: [
        {
          subPoint: 'Curriculum Delivery & Classroom Scheduling (Operations)',
          elaboration: 'In a school, Operations Management forms the core service delivery system, responsible for scheduling timetables, delivering curriculum lessons, managing sports facilities and science laboratories, and maintaining campus health and safety.'
        },
        {
          subPoint: 'Faculty Recruitment & Staff Cost Dependency (HRM)',
          elaboration: 'Because education is an intensely labor-dependent service, operations relies fundamentally on Human Resource Management (HRM) to recruit, vet, train, and retain accredited teachers. As the case notes, the school\'s primary operating cost is "staff salaries"; if HRM fails to retain teachers, operational quality collapses, resulting in overcrowded classrooms.'
        }
      ]
    },
    perspective2: {
      title: 'Finance & Accounts and Marketing Interdependence',
      points: [
        {
          subPoint: 'Budgetary Control & Expense Financing (Finance)',
          elaboration: 'Finance and Accounts manages the school\'s financial resources—budgeting tuition fee collections, securing government grants, administering facility leasing, and controlling operating disbursements like "utility bills and building maintenance."'
        },
        {
          subPoint: 'Enrollment Promotion & Commercial Leasing (Marketing)',
          elaboration: 'Finance cannot generate revenue in isolation; it depends directly on Marketing to promote academic reputation, host open-house days, and advertise rentable facilities ("drama studios and swimming pools") during evenings and holidays. Without effective marketing, enrollment falls, creating cash deficits that force budget cuts on facilities and faculty.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, business functions in a school do not operate in functional silos; they are intensely interdependent. A decision made by the Finance department to curtail building maintenance or freeze salary bands directly hampers HRM\'s ability to retain accredited teachers and degrades Operations\' educational quality. Conversely, effective operational teaching and sporting achievements equip Marketing with compelling success stories to drive future enrollment. Therefore, institutional success relies entirely on cross-functional alignment, where financial constraints are harmonized with educational delivery.',
    rubricChecklist: [
      {
        id: 'q6m-01-c1',
        criterion: 'Accurate identification and explanation of core business functions (HRM, Finance, Operations, Marketing)',
        marks: 1
      },
      {
        id: 'q6m-01-c2',
        criterion: 'Detailed examination of Operations and HRM applied to school context (teaching delivery, staff salaries)',
        marks: 1
      },
      {
        id: 'q6m-01-c3',
        criterion: 'Detailed examination of Finance and Marketing applied to school context (tuition fees, facility leasing)',
        marks: 1
      },
      {
        id: 'q6m-01-c4',
        criterion: 'Balanced analysis demonstrating functional interdependence and trade-offs between departments',
        marks: 1
      },
      {
        id: 'q6m-01-c5',
        criterion: 'Explicit integration of case stimulus evidence throughout both perspectives',
        marks: 1
      },
      {
        id: 'q6m-01-c6',
        criterion: 'Coherent evaluative synthesis evaluating how cross-functional coordination determines institutional viability',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-02',
    subunit: '1.1-what-is-a-business',
    questionNumber: 'Question 1.2a & b',
    question:
      'Identify countries A, B, and C (France, Bangladesh, Philippines) and comparatively examine their economic sector employment distribution.',
    caseStimulus:
      'Study the data below and answer the questions that follow. A, B and C represent three countries: France, Bangladesh and the Philippines (although not necessarily in that order).\n\n| Sector | Country A (%) | Country B (%) | Country C (%) |\n| :--- | :---: | :---: | :---: |\n| Agriculture | 33 | 4 | 45 |\n| Manufacturing | 15 | 24 | 30 |\n| Services | 52 | 72 | 25 |\n\n(a) Identify the countries A, B and C. [3 marks]\n(b) With reference to the data above, explain your answer to Question 1.2 (a). [6 marks]',
    contextTitle: 'Sector Employment Distribution in France, Bangladesh & Philippines',
    marks: 9,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Identifies general sector trends without quoting specific data percentages or linking them directly to national stages of economic development.'
      },
      {
        range: '3-4',
        descriptor: 'Explains the allocation of one or two countries using data percentages, but lacks comparative depth across primary, secondary, and tertiary sectors.'
      },
      {
        range: '5-6',
        descriptor: 'Rigorous, data-backed comparative examination justifying all three country identifications based on economic development patterns, deindustrialization, industrialization, and tertiary sector dominance.'
      }
    ],
    perspective1: {
      title: 'Economically Developed Post-Industrial Nation (Country B - France)',
      points: [
        {
          subPoint: 'Tertiary Dominance & Agricultural Mechanization',
          elaboration: 'Country B is conclusively France, representing an economically advanced, post-industrial developed nation. Economically developed countries exhibit a massive concentration of national labor in the tertiary (service) sector (72%), alongside minimal employment in primary agriculture (4%) due to extensive technological mechanization in farming.'
        },
        {
          subPoint: 'Automated Secondary Manufacturing Base',
          elaboration: 'France maintains a 24% manufacturing base, characteristic of high-technology, capital-intensive secondary industries. As national GDP per capita rises, consumer demand shifts from basic physical commodities toward intangible health, financial, leisure, and professional services, fully corroborating France\'s 72% tertiary profile.'
        }
      ]
    },
    perspective2: {
      title: 'Developing and Transitioning Economies (Country C - Bangladesh & Country A - Philippines)',
      points: [
        {
          subPoint: 'Agrarian Base & Garment Assembly Hub (Country C - Bangladesh)',
          elaboration: 'Country C represents Bangladesh, an emerging economy in the earlier phases of industrialization. It exhibits the highest agricultural employment at 45%, showing that nearly half the populace relies on primary farming. Notably, its manufacturing sector stands at 30%, which is significantly higher than Country A (15%) and Country B (24%), aligning directly with Bangladesh\'s global role as a prime labor-intensive textile and garment assembly hub.'
        },
        {
          subPoint: 'Transitional Economy & BPO Service Boom (Country A - Philippines)',
          elaboration: 'Country A corresponds to the Philippines, a middle-income developing nation. It displays a transitional structure: 33% in agriculture (reflecting ongoing rural farming) and 15% in manufacturing. Crucially, 52% of employment is situated in services, driven by the nation\'s global dominance in business process outsourcing (BPO), call centers, and telecommunications serving Western multinationals.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In summary, the progression from Country C (Bangladesh: 45% primary, 30% secondary, 25% tertiary) to Country A (Philippines: 33% primary, 15% secondary, 52% tertiary) and Country B (France: 4% primary, 24% secondary, 72% tertiary) illustrates the structural economic transformation of labor along the chain of production. As an economy industrializes, labor migrates from agricultural extraction to secondary factory production; as national wealth and capital accumulation mature, deindustrialization occurs, and employment shifts predominantly to high-value tertiary and quaternary services.',
    rubricChecklist: [
      {
        id: 'q6m-02-c1',
        criterion: 'Correct identification of all three countries: A = Philippines, B = France, C = Bangladesh (Part a)',
        marks: 3
      },
      {
        id: 'q6m-02-c2',
        criterion: 'Accurate comparative analysis of Country B (France) citing 72% tertiary and 4% primary data',
        marks: 1
      },
      {
        id: 'q6m-02-c3',
        criterion: 'Accurate comparative analysis of Country C (Bangladesh) citing 45% agriculture and 30% manufacturing hub',
        marks: 1
      },
      {
        id: 'q6m-02-c4',
        criterion: 'Accurate comparative analysis of Country A (Philippines) citing transitional 33% primary and 52% BPO services',
        marks: 1
      },
      {
        id: 'q6m-02-c5',
        criterion: 'Detailed explanation of industrialization, mechanization, and deindustrialization drivers',
        marks: 1
      },
      {
        id: 'q6m-02-c6',
        criterion: 'Evaluative synthesis explaining the structural macroeconomic transformation of labor across sectors',
        marks: 2
      }
    ]
  },
  {
    id: 'q6m-03',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Question 2.1b',
    question: 'Examine how housing provided by a housing cooperative might differ from that provided by a private sector business.',
    caseStimulus: 'Education, housing and healthcare services can be provided by both private sector businesses and the public sector.',
    contextTitle: 'Cooperative Housing vs Commercial Private Developers',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Basic definitions of a cooperative and a private business with generalized remarks about rent prices.'
      },
      {
        range: '3-4',
        descriptor: 'Explains differences in aims, ownership, or pricing, but remains largely one-sided or fails to examine potential limitations of the cooperative model.'
      },
      {
        range: '5-6',
        descriptor: 'Balanced, nuanced examination analyzing differences in organizational objectives, governance, pricing structures, and maintenance quality, while weighing capital constraints of cooperatives against profit motives of private developers.'
      }
    ],
    perspective1: {
      title: 'Housing Cooperative: Social Mission, Cost-Based Rents & Democratic Empowerment',
      points: [
        {
          subPoint: 'Member Ownership & Democratic Governance',
          elaboration: 'A housing cooperative is a member-owned, for-profit social enterprise governed by the democratic principle of "one member, one vote." Resident members have equal voting rights over community rules, repair schedules, and rent adjustments, ensuring that decisions reflect tenant interests rather than outside investor returns.'
        },
        {
          subPoint: 'Cost-Based Pricing & Tenure Security',
          elaboration: 'Because the co-op\'s primary objective is affordable, stable shelter rather than maximizing shareholder dividends, rents are pegged directly to actual operational and maintenance costs rather than speculative market rates, shielding tenants from arbitrary evictions and predatory rent increases.'
        }
      ]
    },
    perspective2: {
      title: 'Private Sector Business: Commercial Capital Scaling vs. Profit Maximization',
      points: [
        {
          subPoint: 'Capital Mobilization & Luxury Amenities',
          elaboration: 'Private commercial property developers possess access to massive commercial loans and equity capital, enabling them to build large-scale housing complexes rapidly, implement cutting-edge smart building technologies, and offer premium amenities (concierges, fitness centers, secure parking) that cooperatives rarely afford.'
        },
        {
          subPoint: 'Profit Motive, Market Rents & Eviction Hazards',
          elaboration: 'However, private developers treat tenants as commercial customers; rent is set at whatever the market will bear. Failure to pay leads to immediate legal eviction, and maintenance can be deferred if landlords cut costs to protect net profit margins. Conversely, housing cooperatives suffer from capital constraints, slow volunteer committee governance, and long waiting lists.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, the fundamental difference centers on social utility versus commercial profitability. Housing cooperatives provide high tenure security, democratic empowerment, and below-market rental stability, making them superior for long-term community affordability. However, private sector housing delivers greater responsiveness to aggregate housing demand, faster construction scaling, and higher luxury specifications, albeit at the expense of tenant affordability and security of tenure.',
    rubricChecklist: [
      {
        id: 'q6m-03-c1',
        criterion: 'Demonstrates clear knowledge of cooperative entity structure and democratic governance ("one member, one vote")',
        marks: 1
      },
      {
        id: 'q6m-03-c2',
        criterion: 'Analyzes cooperative benefits: cost-based rental rates, tenure security, and community cohesion',
        marks: 1
      },
      {
        id: 'q6m-03-c3',
        criterion: 'Analyzes private commercial developer capabilities: capital access, fast scaling, and luxury specifications',
        marks: 1
      },
      {
        id: 'q6m-03-c4',
        criterion: 'Analyzes private sector drawbacks: profit maximization, market-driven rents, and eviction risk',
        marks: 1
      },
      {
        id: 'q6m-03-c5',
        criterion: 'Evaluates operational limitations of cooperatives: capital raising bottlenecks and committee delays',
        marks: 1
      },
      {
        id: 'q6m-03-c6',
        criterion: 'Concludes with balanced synthesis contrasting social affordability with commercial efficiency',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-04',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Question 2.2b',
    question: 'Examine the costs and benefits to Cam Tran operating her business as a sole trader.',
    caseStimulus:
      'Cam Tran is a sole trader who operates a small florist shop called Flowers by Cam in Montpellier, France. She arranges and delivers flowers to local hospitals, hotels and schools in the local area. At times, she receives large orders for weddings and funerals. She is also busy as a single mother of two school-aged children.',
    contextTitle: 'Flowers by Cam: Sole Trader Structure',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Lists generic advantages and disadvantages of sole traders (keeps profit, unlimited liability) with no mention of Cam\'s floral business or family circumstances.'
      },
      {
        range: '3-4',
        descriptor: 'Analyzes costs and benefits applied to the florist context, but lacks balance or fails to weigh her dual role as a business owner and single mother.'
      },
      {
        range: '5-6',
        descriptor: 'Comprehensive, balanced examination directly contrasting strategic autonomy and profit retention with unlimited liability, operational overload, and lack of continuity, tightly integrated with case facts.'
      }
    ],
    perspective1: {
      title: 'Strategic & Personal Benefits to Cam Tran',
      points: [
        {
          subPoint: 'Autonomy & Schedule Flexibility for Family',
          elaboration: 'Operating as a sole trader grants Cam complete operational autonomy over flower sourcing, pricing, and working hours without needing partner consent. This schedule flexibility is invaluable for managing her domestic commitments as a single mother of two school-aged children.'
        },
        {
          subPoint: '100% Profit Retention & Direct Client Relationships',
          elaboration: 'Cam retains 100% of all after-tax profits, providing strong financial motivation to capitalize on lucrative seasonal order spikes like weddings and funerals. Furthermore, delivering personally to local hospitals, hotels, and schools fosters close, loyal commercial relationships while maintaining full financial privacy.'
        }
      ]
    },
    perspective2: {
      title: 'Operational Vulnerabilities & Financial Costs',
      points: [
        {
          subPoint: 'Unlimited Liability Hazard',
          elaboration: 'Because Flowers by Cam is unincorporated, there is no legal distinction between Cam and her business. If a commercial contract defaults or debts accumulate, Cam carries unlimited liability, putting her personal savings and family home at risk of seizure by creditors.'
        },
        {
          subPoint: 'Operational Overload & Zero Continuity',
          elaboration: 'Cam must single-handedly juggle floral design, perishable stock management, physical deliveries, marketing, and accounting. During large wedding and funeral spikes, the workload becomes crushing. Crucially, as a sole operator, if Cam falls ill, the business has zero continuity and stops trading immediately, jeopardizing household income.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, the sole trader structure suits Cam Tran\'s current small-scale local operating model by granting her the scheduling agility required to raise two school-aged children while capturing all financial profits. However, as wedding order volumes grow and commercial contracts expand, managing perishable inventory, physical deliveries, and unlimited liability single-handedly becomes unsustainable. In the medium term, Cam should convert the business into a private limited company (Ltd) or hire assistants to shield her personal assets and secure operational continuity.',
    rubricChecklist: [
      {
        id: 'q6m-04-c1',
        criterion: 'Demonstrates sound knowledge of sole trader legal structure and unlimited liability',
        marks: 1
      },
      {
        id: 'q6m-04-c2',
        criterion: 'Analyzes strategic benefits applied to Cam (scheduling flexibility for 2 children, 100% profit retention)',
        marks: 1
      },
      {
        id: 'q6m-04-c3',
        criterion: 'Analyzes customer relationship benefits (direct deliveries to local hospitals, hotels, schools)',
        marks: 1
      },
      {
        id: 'q6m-04-c4',
        criterion: 'Analyzes operational vulnerabilities (excessive workload during wedding spikes, perishable floral inventory)',
        marks: 1
      },
      {
        id: 'q6m-04-c5',
        criterion: 'Analyzes critical risks: unlimited liability threatening personal home and lack of business continuity if ill',
        marks: 1
      },
      {
        id: 'q6m-04-c6',
        criterion: 'Coherent evaluative conclusion weighing short-term flexibility against medium-term Ltd incorporation',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-05',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.2c',
    question: 'Examine the barriers that might prevent Lenovo meeting its objectives.',
    caseStimulus:
      'Chinese multinational technology company Lenovo acquired the personal computers division of IBM in 2005. Lenovo\'s goal was to establish itself outside of the Asian market by owning IBM\'s globally recognized brands such as ThinkPad laptops. Lenovo is committed to four key values: Customer service, Trust and integrity, Teamwork across cultures, Innovation and entrepreneurial spirit.\n\nLenovo strives to increase its market presence by sponsoring key sporting events and teams, such as McLaren, the British Formula One Team, the Williams Formula One racing team, the National Basketball Association (NBA) and the 2008 Beijing Olympic Games. In 2012, Lenovo became the official sponsor of the National Football League (NFL), its largest sponsorship in America. Its strategy has helped the company to gain market share around the world.',
    contextTitle: 'Lenovo Global Objectives & Strategic Barriers',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Descriptive list of barriers (competition, lack of money) without application to Lenovo\'s PC business or global sponsorships.'
      },
      {
        range: '3-4',
        descriptor: 'Explains two barriers applied to Lenovo (high sponsorship costs and cultural integration), but lacks analytical depth or counterbalancing considerations.'
      },
      {
        range: '5-6',
        descriptor: 'Sophisticated examination of multiple internal and external barriers confronting Lenovo (cultural integration, aggressive PC rivalry, escalating sponsorship overhead, technological substitution), evaluating their relative severity against mitigations.'
      }
    ],
    perspective1: {
      title: 'Internal Barriers: Post-Merger Cultural Integration & Fixed Marketing Overhead',
      points: [
        {
          subPoint: 'Cross-Cultural Friction & Governance Differences',
          elaboration: 'Acquiring IBM\'s PC division required fusing two radically different corporate cultures—a state-rooted, hierarchical Chinese technology firm and an individualistic legacy American multinational. Despite championing "teamwork across cultures," friction in leadership styles, decision protocols, and communication channels can slow product innovation and operational responsiveness.'
        },
        {
          subPoint: 'Heavy Fixed Sponsorship Commitments vs. ROI',
          elaboration: 'Lenovo committed massive financial capital to high-profile sports marketing (McLaren F1, Williams F1, NBA, Beijing Olympics, and the NFL). Sponsoring the NFL represented its single largest marketing outlay in the US. If consumer conversion softens or enterprise clients look past sports marketing, these heavy fixed marketing commitments deplete cash reserves needed for technical R&D.'
        }
      ]
    },
    perspective2: {
      title: 'External Barriers: Hyper-Competition, Technological Disruption & Geopolitics',
      points: [
        {
          subPoint: 'Aggressive PC Rivalry & Margin Erosion',
          elaboration: 'Lenovo operates in a saturated global PC industry against formidable rivals like Dell, HP, Apple, and Asus. Intense price competition on commodity laptops compresses gross profit margins, eroding Lenovo\'s pricing power and constraining retained profits.'
        },
        {
          subPoint: 'Hardware Substitution, Chip Bottlenecks & Geopolitics',
          elaboration: 'Consumer demand is continuously substituting traditional PC laptops with tablets, smartphones, and cloud devices. Furthermore, global semiconductor chip shortages, supply chain disruptions, and US-China geopolitical tensions regarding technology standards threaten Lenovo\'s lucrative enterprise hardware contracts in Western governmental and corporate markets.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, while Lenovo\'s sports sponsorship strategy has successfully built global brand awareness, external market saturation and geopolitical friction pose existential threats to its market share objectives. The critical barrier is not merely marketing visibility, but internal product innovation. To ensure sustainable long-term success, Lenovo must embody its core value of "innovation and entrepreneurial spirit" by diversifying beyond commodity laptop hardware into high-margin cloud infrastructure, enterprise servers, and AI solutions, ensuring it is not out-innovated by rivals.',
    rubricChecklist: [
      {
        id: 'q6m-05-c1',
        criterion: 'Identifies internal organizational barriers (post-merger cross-cultural integration between IBM and Lenovo)',
        marks: 1
      },
      {
        id: 'q6m-05-c2',
        criterion: 'Analyzes internal financial barriers (heavy fixed marketing expenditures across NFL, NBA, and F1)',
        marks: 1
      },
      {
        id: 'q6m-05-c3',
        criterion: 'Identifies external competitive barriers (aggressive pricing and rivalry from Dell, HP, Apple)',
        marks: 1
      },
      {
        id: 'q6m-05-c4',
        criterion: 'Analyzes external technological and macro barriers (device substitution, chip shortages, geopolitics)',
        marks: 1
      },
      {
        id: 'q6m-05-c5',
        criterion: 'Integrates specific case facts and core company values ("teamwork across cultures", "innovation")',
        marks: 1
      },
      {
        id: 'q6m-05-c6',
        criterion: 'Coherent evaluative synthesis weighing marketing visibility against long-term R&D diversification',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-06',
    subunit: 'bmt-swot-analysis',
    questionNumber: 'Question 44.1',
    question: 'Examine the usefulness and limitations of SWOT analysis as a strategic planning tool for a growing business.',
    caseStimulus:
      'SWOT analysis is widely used by commercial businesses for strategic planning due to its visual simplicity. However, business theorists and critics argue that it is overly simplistic, static, and prone to subjective managerial bias.',
    contextTitle: 'SWOT Analysis: Diagnostic Utility & Methodological Flaws',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Defines the four quadrants of SWOT with generic comments on business planning.'
      },
      {
        range: '3-4',
        descriptor: 'Explains benefits and drawbacks of SWOT analysis, but remains largely theoretical without concrete business context or strategic synthesis.'
      },
      {
        range: '5-6',
        descriptor: 'Rigorous, balanced examination evaluating both the practical planning utility and methodological limitations of SWOT analysis, demonstrating why it must be integrated with tools like STEEPLE and Ansoff.'
      }
    ],
    perspective1: {
      title: 'Planning Utility: Holistic Synthesis & Strategy Formulation',
      points: [
        {
          subPoint: 'Comprehensive Internal and External Environmental Audit',
          elaboration: 'SWOT analysis provides significant diagnostic utility by forcing managers to look simultaneously inward at operational competencies (Strengths like proprietary patents, strong brand equity, liquid reserves) and deficiencies (Weaknesses like liquidity shortages, outdated machinery), while scanning the external macro-environment for Opportunities and Threats.'
        },
        {
          subPoint: 'Cross-Functional Strategy Formulation (Maxi-Maxi Pairs)',
          elaboration: 'By cross-referencing quadrants (such as pairing internal Strengths with external Opportunities to craft Maxi-Maxi SO offensive strategies), managers systematically design growth moves that exploit core capabilities. Its 2x2 visual clarity encourages collaborative strategic dialogue across marketing, finance, and operations directors without requiring complex statistical modeling.'
        }
      ]
    },
    perspective2: {
      title: 'Methodological Limitations: Subjectivity, Static Snapshot & Zero Weighting',
      points: [
        {
          subPoint: 'Subjective Managerial Bias & Over-Optimism',
          elaboration: 'SWOT is predominantly qualitative and vulnerable to cognitive confirmation bias. Managers frequently overstate internal strengths to protect departmental prestige while downplaying or concealing critical internal weaknesses, leading to flawed strategic conclusions.'
        },
        {
          subPoint: 'Static Cross-Sectional Snapshot & Lack of Quantification',
          elaboration: 'A standard SWOT matrix represents a static snapshot in time that quickly becomes obsolete in volatile markets characterized by rapid tech innovation, fluctuating exchange rates, and competitor moves. Crucially, it assigns zero numerical probabilities or monetary weights to listed factors, leaving leaders unable to determine whether a major opportunity outweighs an existential threat.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, SWOT analysis is an exceptional diagnostic starting framework for initial brainstorming and environmental scanning, but it is deeply insufficient if relied upon in isolation. To make rigorous, capital-intensive investment decisions, executive leaders must pair SWOT with macro-scanning frameworks like STEEPLE analysis (to substantiate external opportunities and threats), alongside quantitative tools like Decision Trees and the Ansoff Matrix to objectively calculate strategic risks and financial returns.',
    rubricChecklist: [
      {
        id: 'q6m-06-c1',
        criterion: 'Demonstrates accurate knowledge of SWOT quadrants and internal vs external boundaries',
        marks: 1
      },
      {
        id: 'q6m-06-c2',
        criterion: 'Analyzes planning utility: holistic environmental audit and visual executive simplicity',
        marks: 1
      },
      {
        id: 'q6m-06-c3',
        criterion: 'Analyzes strategic formulation utility: pairing quadrants (e.g. S-O offensive strategies)',
        marks: 1
      },
      {
        id: 'q6m-06-c4',
        criterion: 'Analyzes methodological limitation: executive subjectivity and confirmation bias',
        marks: 1
      },
      {
        id: 'q6m-06-c5',
        criterion: 'Analyzes structural limitation: static temporal snapshot and lack of quantitative financial weighting',
        marks: 1
      },
      {
        id: 'q6m-06-c6',
        criterion: 'Evaluative synthesis concluding that SWOT must be integrated with STEEPLE and quantitative tools',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-07',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.3',
    question: 'Examine the strategic risks and rewards of an Ansoff diversification strategy compared to market penetration.',
    caseStimulus:
      'The Ansoff Matrix categorizes corporate growth pathways across products and markets. Market penetration represents the lowest-risk quadrant, focusing on existing markets and existing products. In contrast, diversification represents the highest-risk quadrant, requiring completely new products targeted at completely new markets.',
    contextTitle: 'Ansoff Matrix: Market Penetration vs Diversification',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Simple identification that market penetration is safe and diversification is risky.'
      },
      {
        range: '3-4',
        descriptor: 'Explains risks and rewards of both quadrants with moderate depth, but lacks balanced analytical comparison.'
      },
      {
        range: '5-6',
        descriptor: 'Detailed, balanced examination contrasting operational safety and saturation limits of market penetration against transformative rewards and catastrophic failure risks of diversification, concluding with a nuanced strategic synthesis.'
      }
    ],
    perspective1: {
      title: 'Market Penetration: Operational Certainty vs. Saturation Limits',
      points: [
        {
          subPoint: 'Low Risk & Brand Exploitation (Rewards)',
          elaboration: 'Market penetration (selling existing products to existing markets) is the lowest-risk growth strategy in Ansoff\'s framework. The business capitalizes on its established brand reputation, operational manufacturing competencies, and existing customer loyalty. By utilizing aggressive marketing, price discounts, or loyalty schemes, the firm captures market share from rivals without incurring high R&D or factory retooling expenses.'
        },
        {
          subPoint: 'Market Saturation & Retaliatory Price Wars (Risks)',
          elaboration: 'However, market penetration is severely constrained by market saturation ceilings. If the existing industry reaches maturity, aggressive discounting triggers destructive price wars that erode profit margins. Furthermore, placing all corporate capital into a single mature product category exposes the business to existential risk if consumer tastes suddenly shift.'
        }
      ]
    },
    perspective2: {
      title: 'Diversification: Strategic Portfolio Resilience vs. Double Unfamiliarity',
      points: [
        {
          subPoint: 'Escaping Declining Industries & Risk Spreading (Rewards)',
          elaboration: 'In sharp contrast, Diversification (new products in new markets) enables companies to escape saturated or declining core industries. Successful diversification unlocks lucrative new revenue streams and spreads systemic business risk across uncorrelated industries (such as a conglomerate operating in both transport and entertainment).'
        },
        {
          subPoint: 'The Double Unfamiliarity Hazard & Capital Destruction (Risks)',
          elaboration: 'However, diversification carries extreme commercial risk due to "double unfamiliarity"—the firm lacks technical manufacturing experience for the new product and has zero customer insight or brand credibility in the new market segment. Lacking established distribution channels, capital outlays for R&D, market entry, and promotional launch are enormous, resulting in historically high commercial failure rates.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, the strategic choice between market penetration and diversification hinges upon the firm\'s market lifecycle stage and free cash flow reserves. In growing or stable core markets, market penetration is the prudent, capital-efficient choice to consolidate industry dominance. Diversification should only be pursued by well-capitalized corporations facing terminal saturation in their core operations, and should ideally be executed via joint ventures or corporate acquisitions rather than greenfield organic development to mitigate operational unfamiliarity.',
    rubricChecklist: [
      {
        id: 'q6m-07-c1',
        criterion: 'Demonstrates clear knowledge of Ansoff dimensions (Products vs Markets) and the risk continuum',
        marks: 1
      },
      {
        id: 'q6m-07-c2',
        criterion: 'Analyzes market penetration rewards: operational certainty, brand leveraging, economies of scale',
        marks: 1
      },
      {
        id: 'q6m-07-c3',
        criterion: 'Analyzes market penetration risks: market saturation ceiling and retaliatory price wars',
        marks: 1
      },
      {
        id: 'q6m-07-c4',
        criterion: 'Analyzes diversification rewards: escaping dying sectors, creating new revenue, risk spreading',
        marks: 1
      },
      {
        id: 'q6m-07-c5',
        criterion: 'Analyzes diversification risks: "double unfamiliarity", high failure rates, massive capital destruction',
        marks: 1
      },
      {
        id: 'q6m-07-c6',
        criterion: 'Coherent evaluative synthesis weighing market maturity, corporate capital reserves, and acquisition entry',
        marks: 1
      }
    ]
  }
];
