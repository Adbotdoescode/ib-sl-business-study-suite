import { AnsoffCard, SWOTCard, SWOTStrategyPair, STEEPLECard, BCGCard, StakeholderCard } from '@/types/curriculum';

export const ANSOFF_CARDS: AnsoffCard[] = [
  {
    id: 'ans-01',
    company: "McDonald's",
    scenario: 'Offers 20% discount coupons on classic Big Macs via its mobile app to drive repeat weekday visits.',
    quadrant: 'market-penetration',
    productType: 'existing',
    marketType: 'existing',
    riskLevel: 'lowest',
    rationale: 'Familiar food sold to current diners to capture frequency and market share.'
  },
  {
    id: 'ans-02',
    company: 'Starbucks',
    scenario: 'Launches a digital loyalty rewards card giving free coffee refills to existing store customers.',
    quadrant: 'market-penetration',
    productType: 'existing',
    marketType: 'existing',
    riskLevel: 'lowest',
    rationale: 'Driving purchase frequency within established retail cafes using loyalty incentives.'
  },
  {
    id: 'ans-03',
    company: 'Cadbury',
    scenario: 'Introduces Crème Eggs, Flake, Crunchie, and Heroes to compete against rival chocolate brands.',
    quadrant: 'product-development',
    productType: 'new',
    marketType: 'existing',
    riskLevel: 'moderate',
    rationale: 'Newly engineered confectionery lines targeted at Cadbury established chocolate buyers.'
  },
  {
    id: 'ans-04',
    company: 'Apple Inc.',
    scenario: 'Designs and releases the Apple Watch to its established global base of iPhone users.',
    quadrant: 'product-development',
    productType: 'new',
    marketType: 'existing',
    riskLevel: 'moderate',
    rationale: 'New hardware wearable line cross-sold into existing iOS device customer ecosystem.'
  },
  {
    id: 'ans-05',
    company: "McDonald's",
    scenario: 'Develops plant-based McPlant burgers and McCafé artisan coffees for restaurant diners.',
    quadrant: 'product-development',
    productType: 'new',
    marketType: 'existing',
    riskLevel: 'moderate',
    rationale: 'Menu line extensions keeping existing restaurant customers engaged and spending more.'
  },
  {
    id: 'ans-06',
    company: 'Tesco',
    scenario: 'Expands into forecourt petrol stations and personal financial/banking services for shoppers.',
    quadrant: 'product-development',
    productType: 'new',
    marketType: 'existing',
    riskLevel: 'moderate',
    rationale: 'Adding new services to capture greater share of wallet from existing grocery shoppers.'
  },
  {
    id: 'ans-07',
    company: 'Tata Motors',
    scenario: 'Introduces premium luxury executive SUV models to its existing network of corporate fleet and automotive buyers.',
    quadrant: 'product-development',
    productType: 'new',
    marketType: 'existing',
    riskLevel: 'moderate',
    rationale: 'Supplies new high-end vehicle models directly to existing commercial fleet and retail buyer networks.'
  },
  {
    id: 'ans-08',
    company: 'Adidas',
    scenario: 'Shifts distribution from retail stores to direct-to-consumer e-commerce to reach online shoppers.',
    quadrant: 'market-development',
    productType: 'existing',
    marketType: 'new',
    riskLevel: 'moderate',
    rationale: 'Existing athletic footwear sold into new customer segments via digital channels.'
  },
  {
    id: 'ans-09',
    company: 'Nike',
    scenario: 'Repositions performance basketball and running shoes as everyday casual "athleisure" streetwear.',
    quadrant: 'market-development',
    productType: 'existing',
    marketType: 'new',
    riskLevel: 'moderate',
    rationale: 'Targeting a brand-new demographic of non-athletic lifestyle fashion buyers with existing sneakers.'
  },
  {
    id: 'ans-10',
    company: 'Starbucks',
    scenario: 'Sells ready-to-drink bottled Frappuccinos in convenience store chains across South Korea.',
    quadrant: 'market-development',
    productType: 'existing',
    marketType: 'new',
    riskLevel: 'moderate',
    rationale: 'Entering a new international geographic territory using third-party retail distribution channels.'
  },
  {
    id: 'ans-11',
    company: 'Nokia',
    scenario: 'Redirects large volumes of durable, basic mobile handsets to rapidly growing emerging markets in Nigeria.',
    quadrant: 'market-development',
    productType: 'existing',
    marketType: 'new',
    riskLevel: 'moderate',
    rationale: 'Offloading existing hardware models into new developing country geographic markets.'
  },
  {
    id: 'ans-12',
    company: 'Toyota',
    scenario: 'Creates the luxury marque Lexus to target high-net-worth consumers seeking luxury vehicles.',
    quadrant: 'diversification',
    productType: 'new',
    marketType: 'new',
    riskLevel: 'highest',
    subType: 'related',
    rationale: 'Related Diversification: New luxury vehicle platform aimed at wealthy executive demographic.'
  },
  {
    id: 'ans-13',
    company: "McDonald's",
    scenario: 'Introduces formal "McWedding" banquet hosting and event planning packages in Hong Kong.',
    quadrant: 'diversification',
    productType: 'new',
    marketType: 'new',
    riskLevel: 'highest',
    subType: 'unrelated',
    rationale: 'Unrelated Diversification: New event management service entered into matrimonial events market.'
  },
  {
    id: 'ans-14',
    company: 'Virgin Group',
    scenario: 'Airline and music brand founder Sir Richard Branson launches Virgin Galactic commercial spaceflight.',
    quadrant: 'diversification',
    productType: 'new',
    marketType: 'new',
    riskLevel: 'highest',
    subType: 'unrelated',
    rationale: 'Unrelated Diversification: Entering aerospace tourism with completely novel rocket technologies.'
  }
];

export const SWOT_CARDS: SWOTCard[] = [
  {
    id: 'swot-01',
    entityName: 'Dyson',
    scenario: 'Holds exclusive international patents on dual-cyclone airflow and digital electric motor technology.',
    quadrant: 'strength',
    origin: 'internal',
    nature: 'favourable',
    rationale: 'Proprietary intellectual property (USP) that rivals cannot legally copy.'
  },
  {
    id: 'swot-02',
    entityName: 'Apple Inc.',
    scenario: 'Holds over $60 billion in liquid cash reserves and retained corporate earnings.',
    quadrant: 'strength',
    origin: 'internal',
    nature: 'favourable',
    rationale: 'Robust financial liquidity allowing opportunistic investments without debt.'
  },
  {
    id: 'swot-03',
    entityName: 'EXP Takeaway',
    scenario: 'Operates at 100% capacity with 12 workers and cannot fulfill additional local delivery orders.',
    quadrant: 'weakness',
    origin: 'internal',
    nature: 'unfavourable',
    rationale: 'Capacity bottleneck capping sales growth and risking order delivery delays.'
  },
  {
    id: 'swot-04',
    entityName: 'Kidzplay Bouncy Castles',
    scenario: 'Launches a new mobile-responsive e-commerce website but runs minimal online advertising.',
    quadrant: 'weakness',
    origin: 'internal',
    nature: 'unfavourable',
    rationale: 'Deficient digital marketing and promotional execution within management control.'
  },
  {
    id: 'swot-05',
    entityName: 'London Florist',
    scenario: 'Single owner experiences extreme fatigue and has no deputy manager to cover sickness.',
    quadrant: 'weakness',
    origin: 'internal',
    nature: 'unfavourable',
    rationale: 'Severe human resource vulnerability and complete lack of business continuity.'
  },
  {
    id: 'swot-06',
    entityName: 'Kidzplay Bouncy Castles',
    scenario: 'Operates with very few direct competitors in a specialized local children entertainment market.',
    quadrant: 'opportunity',
    origin: 'external',
    nature: 'favourable',
    steepleDimension: 'Economic',
    rationale: 'Uncontested niche market allowing high margins and pricing power.'
  },
  {
    id: 'swot-07',
    entityName: 'Solar Solutions',
    scenario: 'National government introduces green energy subsidies and tax rebates for rooftop solar panels.',
    quadrant: 'opportunity',
    origin: 'external',
    nature: 'favourable',
    steepleDimension: 'Political',
    rationale: 'Government fiscal incentive stimulating consumer solar demand.'
  },
  {
    id: 'swot-08',
    entityName: 'Luxury Fashion House',
    scenario: 'Burgeoning middle class and rising disposable incomes across Southeast Asia and India.',
    quadrant: 'opportunity',
    origin: 'external',
    nature: 'favourable',
    steepleDimension: 'Social',
    rationale: 'Demographic and economic wealth expansion in emerging export markets.'
  },
  {
    id: 'swot-09',
    entityName: 'Commercial Airline',
    scenario: 'Global geopolitical conflicts drive crude oil prices and aviation jet fuel costs up by 45%.',
    quadrant: 'threat',
    origin: 'external',
    nature: 'unfavourable',
    steepleDimension: 'Economic',
    rationale: 'Uncontrollable macroeconomic commodity price shock squeezing margins.'
  },
  {
    id: 'swot-10',
    entityName: 'Kidzplay Bouncy Castles',
    scenario: 'Persistent sub-zero winter temperatures and heavy rainfall across the United Kingdom.',
    quadrant: 'threat',
    origin: 'external',
    nature: 'unfavourable',
    steepleDimension: 'Environmental',
    rationale: 'Uncontrollable seasonal climate conditions depressing outdoor demand.'
  },
  {
    id: 'swot-11',
    entityName: 'Traditional Commercial Bank',
    scenario: 'Fintech startups launch zero-fee mobile apps offering instant cross-border money transfers.',
    quadrant: 'threat',
    origin: 'external',
    nature: 'unfavourable',
    steepleDimension: 'Technological',
    rationale: 'Disruptive digital entrants eroding market share and fee revenue.'
  },
  {
    id: 'swot-12',
    entityName: 'High Street Department Store',
    scenario: 'National economy enters a prolonged stagflationary recession with falling consumer confidence.',
    quadrant: 'threat',
    origin: 'external',
    nature: 'unfavourable',
    steepleDimension: 'Economic',
    rationale: 'Macroeconomic downturn eroding household discretionary spending power.'
  }
];

export const SWOT_STRATEGY_PAIRS: SWOTStrategyPair[] = [
  {
    id: 'pair-so',
    strategyType: 'S-O Offensive',
    posture: 'Maxi-Maxi',
    internalFactor: "Apple's massive cash reserves ($60B+) and high customer brand loyalty.",
    externalFactor: 'Booming middle-class demand for personal wellness technology in India & Southeast Asia.',
    actionableStrategy: 'Deploy capital aggressively to build flagship retail stores in Mumbai and launch localized Apple Health subscription services to capture high-margin market share.',
    realWorldExample: 'Apple retail flagship expansion in India.'
  },
  {
    id: 'pair-wo',
    strategyType: 'W-O Reorientation',
    posture: 'Mini-Maxi',
    internalFactor: 'Traditional brick-and-mortar supermarket chain has an obsolete online ordering system.',
    externalFactor: 'Explosive consumer shift toward home-delivery groceries and quick commerce.',
    actionableStrategy: 'Form a joint venture or hire a specialized cloud logistics software vendor to overhaul web infrastructure, eliminating technical weakness to seize surging online demand.',
    realWorldExample: 'Ocado partnerships with traditional grocery chains.'
  },
  {
    id: 'pair-st',
    strategyType: 'S-T Defensive',
    posture: 'Maxi-Mini',
    internalFactor: 'Legacy automotive corporation has an established nationwide dealership and service network.',
    externalFactor: 'Low-cost overseas electric vehicle manufacturers entering the domestic market.',
    actionableStrategy: 'Leverage the certified dealer service network and offer extended 10-year warranties and zero-percent financing to insulate customer retention and deflect rival inroads.',
    realWorldExample: 'Toyota hybrid warranty and certified dealer defense.'
  },
  {
    id: 'pair-wt',
    strategyType: 'W-T Survival',
    posture: 'Mini-Mini',
    internalFactor: 'Highly indebted regional retail chain with high fixed rental costs on 100 suburban outlets.',
    externalFactor: 'Severe macroeconomic stagflation and aggressive competition from e-commerce discounters.',
    actionableStrategy: 'Immediate retrenchment: shut down 40 unprofitable store leases, lay off non-essential regional staff, and renegotiate terms with debt creditors to avoid bankruptcy.',
    realWorldExample: 'Store portfolio rationalization and corporate debt restructuring.'
  }
];

export const STEEPLE_CARDS: STEEPLECard[] = [
  {
    "id": "st-01",
    "businessName": "Senior Wellness Living Ltd",
    "scenario": "Rapid demographic aging in Germany and Japan leads to a 35% surge in citizens aged over 65 requiring specialized assisted living facilities.",
    "category": "social",
    "impactType": "opportunity",
    "rationale": "Demographic aging expands aggregate customer demand for eldercare and assisted residential services.",
    "strategicResponse": "Develop premium assisted living villages and expand private nursing services to capture demographic demand."
  },
  {
    "id": "st-02",
    "businessName": "FastBite Burgers",
    "scenario": "Widespread shift in consumer lifestyles and health consciousness causes a 25% drop in visits to traditional fast-food outlets selling high-sodium, ultra-processed meals.",
    "category": "social",
    "impactType": "threat",
    "rationale": "Cultural and lifestyle shifts toward health and wellness directly threaten high-calorie fast-food volume.",
    "strategicResponse": "Formulate and launch plant-based, organic, and low-sodium menu alternatives to retain health-conscious diners."
  },
  {
    "id": "st-03",
    "businessName": "Global Logistics Express",
    "scenario": "Breakthroughs in autonomous delivery drones and robotic automated sortation systems reduce order fulfillment labor costs by 45%.",
    "category": "technological",
    "impactType": "opportunity",
    "rationale": "Automation technology dramatically lowers unit labor costs and accelerates turnaround speed.",
    "strategicResponse": "Invest capital to automate central distribution hubs with robotic sorters and obtain commercial drone flight licenses."
  },
  {
    "id": "st-04",
    "businessName": "Legacy Electronics Corp",
    "scenario": "Rapid cycles of smartphone and tablet innovation render standalone handheld GPS navigation devices obsolete within three years.",
    "category": "technological",
    "impactType": "threat",
    "rationale": "Technological convergence and software smartphone apps completely replace single-purpose hardware.",
    "strategicResponse": "Pivot engineering competencies into embedded commercial fleet tracking software and automotive telematics."
  },
  {
    "id": "st-05",
    "businessName": "Gijs Denim Importers",
    "scenario": "The domestic Euro currency appreciates strongly against the US Dollar (from \u20ac1 = $1.05 to \u20ac1 = $1.35), making US-imported denim fabrics significantly cheaper.",
    "category": "economic",
    "impactType": "opportunity",
    "rationale": "Under the SPICED rule, a stronger domestic currency lowers the cost of imported raw materials and stock.",
    "strategicResponse": "Leverage favorable exchange rates to purchase bulk inventory at lower costs and expand gross profit margins."
  },
  {
    "id": "st-06",
    "businessName": "Aerospace Export Systems",
    "scenario": "National central bank raises commercial interest rates to 7.5% and the domestic currency strengthens by 20%, dampening foreign buyer demand for expensive exported aircraft parts.",
    "category": "economic",
    "impactType": "threat",
    "rationale": "High interest rates increase borrowing costs while an appreciated currency makes exports dearer and uncompetitive overseas.",
    "strategicResponse": "Hedge currency risks using forward exchange contracts and offer flexible vendor financing to foreign airlines."
  },
  {
    "id": "st-07",
    "businessName": "EcoCycle Packaging Ltd",
    "scenario": "Global environmental treaties and consumer boycotts prompt corporate bans on single-use polystyrene foam and non-recyclable plastic containers.",
    "category": "environmental",
    "impactType": "opportunity",
    "rationale": "Ecological sustainability awareness creates explosive market demand for compostable, biodegradable packaging.",
    "strategicResponse": "Scale production of seaweed-based and mushroom-mycelium protective packaging to capture commercial enterprise contracts."
  },
  {
    "id": "st-08",
    "businessName": "Alpine Ski Resorts",
    "scenario": "Persistent global warming causes winter temperatures to rise by 2.5\u00b0C, shortening the natural ski season by four weeks and increasing expensive artificial snowmaking costs.",
    "category": "environmental",
    "impactType": "threat",
    "rationale": "Climatic changes directly degrade the natural physical operating environment required for seasonal snow sports.",
    "strategicResponse": "Diversify resort operations into year-round mountain biking, alpine hiking, wellness spas, and conference tourism."
  },
  {
    "id": "st-09",
    "businessName": "SolarTech Infrastructure",
    "scenario": "Government passes a national renewable energy subsidy package granting a 30% corporate tax credit for commercial rooftop solar panel installations.",
    "category": "political",
    "impactType": "opportunity",
    "rationale": "Government fiscal policy and state incentives stimulate private sector capital spending on clean energy hardware.",
    "strategicResponse": "Form partnerships with industrial park landlords to install subsidized commercial solar micro-grids."
  },
  {
    "id": "st-10",
    "businessName": "Pacific Seafood Exporters",
    "scenario": "Geopolitical diplomatic tensions between two nations result in an immediate 40% retaliatory import tariff placed on seafood imports.",
    "category": "political",
    "impactType": "threat",
    "rationale": "Protectionist political tariffs imposed by foreign governments severely erode cross-border price competitiveness.",
    "strategicResponse": "Re-route export shipments to alternative Asian and European trading partners with existing free-trade pacts."
  },
  {
    "id": "st-11",
    "businessName": "BioGen Pharma",
    "scenario": "International patent office grants 20-year exclusive legal intellectual property protection for a revolutionary diabetes medication.",
    "category": "legal",
    "impactType": "opportunity",
    "rationale": "Statutory patent protection prevents rival manufacturers from manufacturing generic copies, creating a high-margin legal monopoly.",
    "strategicResponse": "Commercialize the therapeutic drug globally and negotiate high-margin distribution licensing pacts."
  },
  {
    "id": "st-12",
    "businessName": "RetailMax Supercenters",
    "scenario": "State labor regulatory agency fines the company $45 million and mandates strict statutory oversight after finding widespread violations of mandatory worker rest breaks.",
    "category": "legal",
    "impactType": "threat",
    "rationale": "Breaching statutory employment legislation results in punitive legal fines, mandatory compliance costs, and brand damage.",
    "strategicResponse": "Install automated biometric timekeeping systems to ensure full statutory rest break compliance and settle labor claims."
  },
  {
    "id": "st-13",
    "businessName": "FairHarbor Coffee Co.",
    "scenario": "Consumer advocacy groups reward coffee brands that demonstrate 100% direct-trade certification, paying agricultural coffee growers 40% above fair-trade minimums.",
    "category": "ethical",
    "impactType": "opportunity",
    "rationale": "Voluntary ethical sourcing that exceeds statutory standards commands premium retail pricing and deep customer trust.",
    "strategicResponse": "Publicize audited farm-level supplier compensation and publish transparent supply-chain impact reports."
  },
  {
    "id": "st-14",
    "businessName": "FastGlam Apparel",
    "scenario": "Undercover investigative journalists reveal that a major fast-fashion brand's subcontractor employed unauthorized child labor in an uncertified overseas textile mill.",
    "category": "ethical",
    "impactType": "threat",
    "rationale": "Severe ethical supply-chain breaches destroy brand equity, trigger influencer boycotts, and prompt institutional ESG divestment.",
    "strategicResponse": "Immediately terminate subcontractor contracts, establish independent third-party factory audits, and compensate affected families."
  }
];

export const BCG_CARDS: BCGCard[] = [
  {
    "id": "bcg-01",
    "productName": "Apple iPhone",
    "company": "Apple Inc.",
    "marketGrowth": "high",
    "marketShare": "high",
    "quadrant": "stars",
    "recommendedStrategy": "build",
    "rationale": "Dominant global revenue share in a fiercely competitive, growing high-end premium smartphone market.",
    "cashFlowDynamics": "Generates massive cash inflows, but absorbs high ongoing capital for R&D, camera innovation, and marketing."
  },
  {
    "id": "bcg-02",
    "productName": "Tesla Model Y",
    "company": "Tesla Inc.",
    "marketGrowth": "high",
    "marketShare": "high",
    "quadrant": "stars",
    "recommendedStrategy": "build",
    "rationale": "Top-selling electric vehicle globally in an automotive sector undergoing rapid transition toward electrification.",
    "cashFlowDynamics": "Generates strong operating revenues; requires continuous reinvestment into gigafactory expansion and autonomous driving AI."
  },
  {
    "id": "bcg-03",
    "productName": "Coca-Cola Original",
    "company": "The Coca-Cola Company",
    "marketGrowth": "low",
    "marketShare": "high",
    "quadrant": "cash-cows",
    "recommendedStrategy": "harvest",
    "rationale": "Market leader in mature, low-growth carbonated soft drinks market with entrenched global distribution.",
    "cashFlowDynamics": "Generates enormous surplus cash flow with minimal need for capital factory reinvestment; funds portfolio diversification."
  },
  {
    "id": "bcg-04",
    "productName": "Microsoft Windows OS",
    "company": "Microsoft Corporation",
    "marketGrowth": "low",
    "marketShare": "high",
    "quadrant": "cash-cows",
    "recommendedStrategy": "harvest",
    "rationale": "Controls over 70% of desktop operating systems in a mature, slow-growing personal computer hardware market.",
    "cashFlowDynamics": "High-margin licensing cash cow funding cloud infrastructure (Azure) and artificial intelligence (OpenAI partnerships)."
  },
  {
    "id": "bcg-05",
    "productName": "Google Pixel Smartphones",
    "company": "Alphabet Inc.",
    "marketGrowth": "high",
    "marketShare": "low",
    "quadrant": "question-marks",
    "recommendedStrategy": "build",
    "rationale": "Holds under 5% market share in a multi-billion-dollar high-growth smartphone ecosystem dominated by Apple and Samsung.",
    "cashFlowDynamics": "Heavy net cash consumer requiring continuous R&D and carrier subsidies from Alphabet's search advertising cash cow."
  },
  {
    "id": "bcg-06",
    "productName": "Apple Vision Pro",
    "company": "Apple Inc.",
    "marketGrowth": "high",
    "marketShare": "low",
    "quadrant": "question-marks",
    "recommendedStrategy": "build",
    "rationale": "Pioneering spatial computing hardware with low initial unit volume in a nascent, high-growth immersive tech category.",
    "cashFlowDynamics": "Absorbs massive R&D and supply chain development costs with uncertain long-term consumer adoption timelines."
  },
  {
    "id": "bcg-07",
    "productName": "Sony Blu-ray & DVD Players",
    "company": "Sony Group",
    "marketGrowth": "low",
    "marketShare": "low",
    "quadrant": "dogs",
    "recommendedStrategy": "divest",
    "rationale": "Physical optical disc hardware operating in a rapidly shrinking, low-growth market eclipsed by digital streaming.",
    "cashFlowDynamics": "Low or negative cash margins; ties up manufacturing floor space and dealer shelf allocation."
  },
  {
    "id": "bcg-08",
    "productName": "Classic Tab Clear Cola",
    "company": "The Coca-Cola Company",
    "marketGrowth": "low",
    "marketShare": "low",
    "quadrant": "dogs",
    "recommendedStrategy": "divest",
    "rationale": "Discontinued clear soda brand holding negligible share in a stagnant niche with zero growth potential.",
    "cashFlowDynamics": "Complete divestment frees distribution and bottling capacity for high-margin waters and energy drinks."
  },
  {
    "id": "bcg-09",
    "productName": "Sony PlayStation 5",
    "company": "Sony Interactive Entertainment",
    "marketGrowth": "high",
    "marketShare": "high",
    "quadrant": "stars",
    "recommendedStrategy": "build",
    "rationale": "Leading console hardware in a booming global video gaming and interactive entertainment industry.",
    "cashFlowDynamics": "Generates substantial software royalties and subscription cash; requires continuous silicon hardware subsidies."
  },
  {
    "id": "bcg-10",
    "productName": "Amazon Prime Video Service",
    "company": "Amazon.com Inc.",
    "marketGrowth": "high",
    "marketShare": "low",
    "quadrant": "question-marks",
    "recommendedStrategy": "build",
    "rationale": "Gaining ground but competing as an insurgent against Netflix and YouTube in high-growth streaming entertainment.",
    "cashFlowDynamics": "Requires billions in annual content production and sports broadcasting rights, funded by Amazon Web Services cash cows."
  }
];

export const STAKEHOLDER_CARDS: StakeholderCard[] = [
  {
    id: 'stk-01',
    stakeholderName: 'Casual Airport Convenience Shopper',
    organizationContext: 'Global Travel Retailer (Hudson / Dufry)',
    category: 'external',
    powerLevel: 'low',
    interestLevel: 'low',
    quadrant: 'quadrant-a',
    engagementStrategy: 'Minimum effort',
    rationale: 'Infrequent individual buyer purchasing low-involvement snacks in a transit hub with virtually zero individual bargaining power or active corporate interest.',
    conflictScenario: 'Has negligible influence over company strategy or pricing; monitor broad sales data without bespoke executive consultation.'
  },
  {
    id: 'stk-02',
    stakeholderName: 'Distant Suburban Residents (15 Miles Away)',
    organizationContext: 'Clean Electric Vehicle Assembly Plant',
    category: 'external',
    powerLevel: 'low',
    interestLevel: 'low',
    quadrant: 'quadrant-a',
    engagementStrategy: 'Minimum effort',
    rationale: 'Living far beyond the factory noise and traffic corridor with no direct economic or employment relationship to the zero-emission manufacturing site.',
    conflictScenario: 'Rarely mobilizes against corporate decisions; general public relations and periodic environmental sustainability reporting suffice.'
  },
  {
    id: 'stk-03',
    stakeholderName: 'Generic Office Stationery Supplier',
    organizationContext: 'Multinational Investment Bank',
    category: 'external',
    powerLevel: 'low',
    interestLevel: 'low',
    quadrant: 'quadrant-a',
    engagementStrategy: 'Minimum effort',
    rationale: 'Supplying commodity paper clips and printer paper where the bank has hundreds of interchangeable vendor substitutes and near-zero switching costs.',
    conflictScenario: 'Possesses minimal leverage to demand premium pricing; standard electronic procurement and automated invoice payments are sufficient.'
  },
  {
    id: 'stk-04',
    stakeholderName: 'Non-Unionized Assembly Line Workers',
    organizationContext: 'Automotive Electronics Factory',
    category: 'internal',
    powerLevel: 'low',
    interestLevel: 'high',
    quadrant: 'quadrant-b',
    engagementStrategy: 'Keep informed',
    rationale: 'Deeply invested in daily shift hours, wage rates, and automation rumors, but lack collective bargaining representation to unilaterally halt production lines.',
    conflictScenario: 'If ignored during automation restructuring, individual dissatisfaction can trigger high labor turnover, absenteeism, and potential unionization.'
  },
  {
    id: 'stk-05',
    stakeholderName: 'Adjacent Residential Neighborhood Committee',
    organizationContext: '24-Hour E-Commerce Logistics Mega-Hub',
    category: 'external',
    powerLevel: 'low',
    interestLevel: 'high',
    quadrant: 'quadrant-b',
    engagementStrategy: 'Keep informed',
    rationale: 'Directly impacted by nighttime diesel truck noise, traffic congestion, and light pollution, but lack statutory zoning authority.',
    conflictScenario: 'Failure to communicate can provoke residents to file joint environmental petitions or mobilize digital media campaigns to delay permits.'
  },
  {
    id: 'stk-06',
    stakeholderName: 'Small Retail Shareholder (Holding 15 Shares)',
    organizationContext: 'Global Pharmaceutical PLC',
    category: 'internal',
    powerLevel: 'low',
    interestLevel: 'high',
    quadrant: 'quadrant-b',
    engagementStrategy: 'Keep informed',
    rationale: 'Passionate about dividend yield and corporate ethics, but owns a microscopic fraction of equity with negligible voting weight at the AGM.',
    conflictScenario: 'Demands transparent annual financial reports, investor webinars, and ethical disclosures to maintain retail goodwill.'
  },
  {
    id: 'stk-07',
    stakeholderName: 'National Tax & Customs Authority (HMRC / IRS)',
    organizationContext: 'Multinational Software Enterprise',
    category: 'external',
    powerLevel: 'high',
    interestLevel: 'low',
    quadrant: 'quadrant-c',
    engagementStrategy: 'Keep satisfied',
    rationale: 'Possesses statutory legal power to freeze accounts or impose punitive fines for non-compliance, but remains passive if statutory corporate taxes are paid on time.',
    conflictScenario: 'Aggressive offshore tax avoidance schemes provoke sudden, severe tax audits and multi-billion-dollar back-tax penalties.'
  },
  {
    id: 'stk-08',
    stakeholderName: 'Government Occupational Safety Inspectorate',
    organizationContext: 'Heavy Industrial Steel Smelting Plant',
    category: 'external',
    powerLevel: 'high',
    interestLevel: 'low',
    quadrant: 'quadrant-c',
    engagementStrategy: 'Keep satisfied',
    rationale: 'Wields statutory authority to shut down manufacturing operations overnight, but does not micromanage daily smelting routines as long as safety codes are met.',
    conflictScenario: 'Workplace accidents or safety protocol breaches trigger immediate factory stop-work orders and criminal executive liability.'
  },
  {
    id: 'stk-09',
    stakeholderName: 'Major Commercial Mortgage Bank ($80M Facility)',
    organizationContext: 'Commercial Real Estate Development Firm',
    category: 'external',
    powerLevel: 'high',
    interestLevel: 'low',
    quadrant: 'quadrant-c',
    engagementStrategy: 'Keep satisfied',
    rationale: 'Holds legal mortgage liens over primary corporate assets and can call in loans if debt service coverage ratios breach covenants.',
    conflictScenario: 'Management must ensure timely interest coverage and quarterly financial compliance certificates to prevent debt acceleration.'
  },
  {
    id: 'stk-10',
    stakeholderName: 'Institutional Private Equity Fund (38% Equity Stake)',
    organizationContext: 'Rapidly Growing HealthTech Enterprise',
    category: 'internal',
    powerLevel: 'high',
    interestLevel: 'high',
    quadrant: 'quadrant-d',
    engagementStrategy: 'Key players (Maximum effort)',
    rationale: 'Controls two executive board seats and voting power to appoint or remove the CEO, with intense daily focus on profitability and IPO valuation.',
    conflictScenario: 'Any conflict over strategic acquisitions or executive remuneration can result in leadership dismissal or corporate proxy battles.'
  },
  {
    id: 'stk-11',
    stakeholderName: 'National Pilots & Flight Engineers Association',
    organizationContext: 'International Flag-Carrier Airline',
    category: 'internal',
    powerLevel: 'high',
    interestLevel: 'high',
    quadrant: 'quadrant-d',
    engagementStrategy: 'Key players (Maximum effort)',
    rationale: 'Represents 90% of specialized flight crew whose industrial strike action instantly grounds flights, costing hundreds of millions (e.g. British Airways 2019).',
    conflictScenario: 'Management must conduct continuous collective bargaining over pensions, rest periods, and remuneration to avoid catastrophic strike disruption.'
  },
  {
    id: 'stk-12',
    stakeholderName: 'Single-Source Custom AI Silicon Foundry (TSMC)',
    organizationContext: 'Next-Generation Smartphone Manufacturer',
    category: 'external',
    powerLevel: 'high',
    interestLevel: 'high',
    quadrant: 'quadrant-d',
    engagementStrategy: 'Key players (Maximum effort)',
    rationale: 'The sole global foundry capable of etching 3nm processors; holds immense pricing power, allocation control, and strategic supply leverage.',
    conflictScenario: 'Losing fabrication allocation halts the entire global smartphone launch; executive leadership must treat the supplier as a core strategic partner.'
  }
];
