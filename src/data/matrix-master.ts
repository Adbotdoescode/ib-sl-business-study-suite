import { AnsoffCard, SWOTCard, SWOTStrategyPair } from '@/types/curriculum';

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
