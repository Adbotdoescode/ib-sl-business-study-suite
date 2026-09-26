import { EntityDimensionComparison, EntityMatchmakerScenario } from '@/types/curriculum';

export const ENTITY_COMPARISONS: EntityDimensionComparison[] = [
  {
    dimension: 'Legal Status',
    soleTrader: 'Unincorporated: Owner and business are the identical legal person.',
    partnership: 'Unincorporated: Partners are jointly the business; lacks separate identity.',
    ltd: 'Incorporated: Distinct legal entity separate from shareholder owners.',
    plc: 'Incorporated: Distinct legal person created through Certificate of Incorporation.',
    socialEnterprise: 'Varies: Co-ops incorporated; NGOs often registered charities or trusts.'
  },
  {
    dimension: 'Liability',
    soleTrader: 'Unlimited Liability: Personal wealth, home, and savings at risk for debts.',
    partnership: 'Joint & Several Unlimited: All partners personally liable for firm debts.',
    ltd: 'Limited Liability: Loss strictly capped at value of shares purchased.',
    plc: "Limited Liability: Shareholders' personal assets legally ring-fenced from debts.",
    socialEnterprise: "Typically Limited: Co-op members' liability capped at member share value."
  },
  {
    dimension: 'Capital & Finance',
    soleTrader: 'Constrained to personal savings and small commercial bank overdrafts.',
    partnership: 'Pooled capital from 2–20 partners; larger borrowing capacity than sole trader.',
    ltd: 'Private share issues to family, founders, VC; cannot solicit public.',
    plc: 'Massive capital potential via public share flotation (IPO) on Stock Exchange.',
    socialEnterprise: 'Member share deposits (co-ops) or philanthropic grants and donations (NGOs).'
  },
  {
    dimension: 'Ownership & Governance',
    soleTrader: '1 individual owner with total unilateral control.',
    partnership: '2 to 20 partners governed by legally binding Deed of Partnership.',
    ltd: 'Owned by private shareholders; governed by elected Board of Directors (BOD).',
    plc: 'Owned by thousands of public/institutional shareholders; formal public AGMs.',
    socialEnterprise: 'Co-op: Owned by members (1 member, 1 vote). NGO: Governed by board of trustees.'
  },
  {
    dimension: 'Continuity',
    soleTrader: 'Zero Continuity: Enterprise technically dissolves upon owner death or incapacity.',
    partnership: 'Lacks Continuity: Legal partnership dissolves if a partner leaves, dies, or bankrupts.',
    ltd: 'Perpetual Succession: Entity survives indefinitely despite shareholder turnover.',
    plc: 'Perpetual Succession: Shares trade freely without affecting corporate legal existence.',
    socialEnterprise: 'Perpetual Succession: Survives changes in membership or volunteer executive boards.'
  },
  {
    dimension: 'Regulation & Disclosure',
    soleTrader: 'Minimal compliance; accounts remain 100% confidential and private.',
    partnership: 'Minimal compliance; accounts confidential; Deed of Partnership filed privately.',
    ltd: 'Annual accounts filed with Registrar; partial privacy preserved from public.',
    plc: 'Severe statutory disclosure: must publish full audited P&L, Balance Sheet, and CEO pay.',
    socialEnterprise: 'Co-op: Audited accounts to members. NGO: Strict public reporting to Charity Commission.'
  },
  {
    dimension: 'Taxation',
    soleTrader: "Profits taxed directly as owner's Personal Income Tax.",
    partnership: "Net profits distributed to partners and taxed as Personal Income Tax.",
    ltd: 'Company pays Corporation Tax on net profits before dividends.',
    plc: 'Company pays Corporation Tax; shareholders pay dividend income tax.',
    socialEnterprise: 'Co-ops pay Corporation Tax with dividend deductions; registered NGOs are Tax-Exempt.'
  },
  {
    dimension: 'Control & Decision-Making',
    soleTrader: 'Instant, agile decisions; complete personal independence.',
    partnership: 'Shared decision-making; high risk of interpersonal conflict or paralysis.',
    ltd: 'High founder/board control; share sales require explicit BOD approval.',
    plc: 'Divorce of Ownership from Control: Vulnerable to hostile takeover on stock market.',
    socialEnterprise: 'Democratic member control (co-op) or mission-driven consensus (NGO).'
  }
];

export const MATCHMAKER_SCENARIOS: EntityMatchmakerScenario[] = [
  {
    id: 'scen-01',
    scenarioTitle: 'HealthTech AI Diagnostic Startup',
    scenarioDescription: 'Three biomedical engineers have developed a remote AI diagnostic tool. They require $1.5M in seed capital from private venture investors, insist on protecting their personal homes and life savings, but adamantly refuse to let outside institutional stock traders take majority board control or launch hostile takeovers.',
    correctEntity: 'private-limited-company',
    correctEntityLabel: 'Private Limited Company (Ltd)',
    rationale: 'Incorporation grants limited liability protecting personal assets, while private equity sales prevent hostile public stock takeovers and require board consent.',
    distractorExplanations: {
      'sole-trader': 'Cannot have three co-founders and carries unlimited liability with severe capital ceilings.',
      'partnership': 'Leaves founders exposed to joint and several unlimited liability, risking personal homes if sued for diagnostic errors.',
      'public-limited-company': 'Exposes the company to hostile takeovers on open stock exchanges and incurs high IPO underwriting fees.',
      'social-enterprise': 'Designed for societal mission or mutual member rebates, not commercial private venture capital returns.'
    }
  },
  {
    id: 'scen-02',
    scenarioTitle: 'Artisan Boutique Florist',
    scenarioDescription: 'A floral designer wants to launch a local boutique floral business. She has $5,000 in personal savings, needs total freedom over her daily working hours to care for school-aged children, wants 100% of all after-tax profits, and refuses to disclose her earnings publicly.',
    correctEntity: 'sole-trader',
    correctEntityLabel: 'Sole Trader',
    rationale: 'Zero legal registration friction, 100% profit retention, complete personal scheduling autonomy, and absolute financial secrecy.',
    distractorExplanations: {
      'partnership': 'Requires sharing managerial control and profits with others, eliminating unilateral freedom.',
      'private-limited-company': 'Involves incorporation fees, annual accounting filings, and legal separation unnecessary for a $5,000 artisan startup.',
      'public-limited-company': 'PLCs are multi-million dollar corporations floated on stock exchanges; completely unsuitable for a single local florist.',
      'social-enterprise': 'Cooperatives require collective democratic governance, not unilateral individual profit capture.'
    }
  },
  {
    id: 'scen-03',
    scenarioTitle: 'Elite Boutique Accounting Practice',
    scenarioDescription: 'Three senior chartered accountants want to join forces. They will pool existing corporate client rosters, share commercial office lease expenses, contribute equal capital, divide profits according to a tailored legal agreement, and keep client accounts confidential without public disclosure.',
    correctEntity: 'partnership',
    correctEntityLabel: 'Partnership (with Deed of Partnership)',
    rationale: 'Combines capital and client networks without corporate public disclosure; governance and profit sharing are governed privately by the Deed of Partnership.',
    distractorExplanations: {
      'sole-trader': 'A sole trader by legal definition can have only one single owner.',
      'private-limited-company': 'While an Ltd provides limited liability, incorporation incurs filing costs, public register disclosures, and administrative overhead unnecessary for three equal chartered partners.',
      'public-limited-company': 'Mandates public auditing and statutory disclosures that compromise client privacy and add excessive regulatory cost.',
      'social-enterprise': 'Professional chartered accountancy practices are commercial for-profit firms, not charitable trusts or non-profits.'
    }
  },
  {
    id: 'scen-04',
    scenarioTitle: 'Offshore Deep-Water Wind Farm',
    scenarioDescription: 'A consortium of clean-energy executives is building a $600M deep-water offshore wind installation. They must raise hundreds of millions in equity capital from pension funds and retail investors, offer freely tradeable shares, and ensure the company can survive across multi-decade lifecycles.',
    correctEntity: 'public-limited-company',
    correctEntityLabel: 'Public Limited Company (PLC)',
    rationale: 'Only a public stock exchange flotation (IPO) can raise hundreds of millions in public equity capital; perpetual succession ensures multi-decade continuity.',
    distractorExplanations: {
      'sole-trader': 'Individual personal savings cannot finance a $600M capital mega-project.',
      'partnership': 'Capped at 20 partners and lacks perpetual succession; cannot float public shares.',
      'private-limited-company': 'Statutorily prohibited from advertising or selling equity shares to the general public or institutional pension markets.',
      'social-enterprise': 'Social enterprises are organized around community or social welfare mandates and cannot issue commercial public equity shares to raise $600M.'
    }
  },
  {
    id: 'scen-05',
    scenarioTitle: 'Smallholder Coffee Farmers Cooperative',
    scenarioDescription: 'Two hundred smallholder coffee farmers in Colombia want to band together to purchase industrial processing equipment, negotiate higher bulk crop prices against multinational corporations, grant each farmer equal voting power regardless of acreage, and return surplus profits back to farmers.',
    correctEntity: 'social-enterprise',
    correctEntityLabel: 'Producer Cooperative (Social Enterprise)',
    rationale: 'Operates under democratic member control ("one member, one vote"), pools equipment to achieve economies of scale, and returns trading surplus as rebates to member farmers.',
    distractorExplanations: {
      'sole-trader': 'Cannot unify 200 independent farming families.',
      'partnership': 'Partnership laws typically cap partners at 20 and expose each member to joint unlimited liability.',
      'private-limited-company': 'In an Ltd, voting power is proportional to share capital, which would allow wealthy large landowners to dominate smallholders.',
      'public-limited-company': 'Public investors seek dividend yields rather than fair crop purchase prices for local rural farmers.'
    }
  }
];
