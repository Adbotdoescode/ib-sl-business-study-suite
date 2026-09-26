import { DefinitionItem, DistinctionItem, GoldenMatrixRule } from '@/types/curriculum';

export const CRAM_DEFINITIONS: DefinitionItem[] = [
  {
    id: 'def-01',
    term: 'Business',
    subunit: '1.1-what-is-a-business',
    definition: 'A decision-making entity that combines inputs (factors of production: land, labor, capital, enterprise) through a transformation process to produce finished goods or provide services that satisfy customer needs and wants.',
    keyExamTokens: ['decision-making entity', 'factors of production', 'transformation process', 'satisfy needs and wants']
  },
  {
    id: 'def-02',
    term: 'Factors of Production',
    subunit: '1.1-what-is-a-business',
    definition: 'The four fundamental economic resources required for business activity: Land (natural resources), Labor (human physical/mental effort), Capital (man-made physical assets & finance), and Enterprise (entrepreneurial risk-taking & coordination).',
    keyExamTokens: ['Land', 'Labor', 'Capital', 'Enterprise', 'risk-taking coordination']
  },
  {
    id: 'def-03',
    term: 'Adding Value',
    subunit: '1.1-what-is-a-business',
    definition: 'The operational and marketing process of transforming inputs such that the selling price of the finished output exceeds the cost of bought-in materials and intermediate components (Value Added = Selling Price - Cost of Bought-in Materials).',
    keyExamTokens: ['selling price exceeds bought-in costs', 'transformation process', 'Value Added formula'],
    formulaOrExample: 'Value Added = Selling Price - Cost of Bought-in Materials'
  },
  {
    id: 'def-04',
    term: 'Consumer Goods',
    subunit: '1.1-what-is-a-business',
    definition: 'Physical products purchased and consumed by private households for direct personal gratification, sub-classified into Consumer Durables (long-lasting items like cars and furniture) and Non-Durables (fast-consuming items like food and beverages).',
    keyExamTokens: ['sold to households', 'personal consumption', 'consumer durables vs non-durables']
  },
  {
    id: 'def-05',
    term: 'Capital Goods (Producer Goods)',
    subunit: '1.1-what-is-a-business',
    definition: 'Tangible, man-made physical equipment, machinery, commercial vehicles, and factories purchased by businesses to produce other goods or provide services rather than for household consumption.',
    keyExamTokens: ['producer goods', 'purchased by businesses', 'used to produce other goods/services']
  },
  {
    id: 'def-06',
    term: 'Chain of Production',
    subunit: '1.1-what-is-a-business',
    definition: 'The sequential, interrelated stages of economic activity through which raw materials pass across economic sectors (primary extraction, secondary manufacturing, and tertiary/quaternary distribution) to reach the final end-consumer.',
    keyExamTokens: ['sequential stages', 'primary, secondary, tertiary', 'raw material to consumer']
  },
  {
    id: 'def-07',
    term: 'Entrepreneur',
    subunit: '1.1-what-is-a-business',
    definition: 'An innovative individual who conceives a business idea, invests personal capital, coordinates factors of production, and bears full commercial risk in pursuit of operational profit or social impact.',
    keyExamTokens: ['innovative individual', 'coordinates factors of production', 'bears commercial risk', 'profit motive']
  },
  {
    id: 'def-08',
    term: 'Sole Trader',
    subunit: '1.2-types-of-business-entities',
    definition: 'An unincorporated commercial business owned, managed, and financed by a single individual who retains 100% of all net profits after tax and carries personal unlimited liability for all business debts and contractual obligations.',
    keyExamTokens: ['unincorporated', 'single individual owner', '100% profit retention', 'unlimited liability']
  },
  {
    id: 'def-09',
    term: 'Partnership',
    subunit: '1.2-types-of-business-entities',
    definition: 'An unincorporated commercial business owned by two or more individuals (typically 2 to 20) who pool capital, share administrative responsibilities, distribute net profits, and bear joint and several unlimited liability under a Deed of Partnership.',
    keyExamTokens: ['unincorporated', '2 to 20 partners', 'pooled capital', 'joint and several unlimited liability', 'Deed of Partnership']
  },
  {
    id: 'def-10',
    term: 'Limited Liability',
    subunit: '1.2-types-of-business-entities',
    definition: 'A legal restriction that caps a shareholder’s potential financial loss strictly at the nominal capital invested in purchasing company shares, shielding their private personal wealth and homes from corporate creditors upon liquidation.',
    keyExamTokens: ['loss capped at invested capital', 'shields personal assets', 'incorporated companies']
  },
  {
    id: 'def-11',
    term: 'Privately Held Company (Ltd)',
    subunit: '1.2-types-of-business-entities',
    definition: 'An incorporated business entity with limited liability whose shares are owned privately by founders, family members, or private equity investors and cannot be advertised or traded on a public stock exchange.',
    keyExamTokens: ['incorporated', 'limited liability', 'private share ownership', 'no public stock exchange trading']
  },
  {
    id: 'def-12',
    term: 'Publicly Held Company (PLC)',
    subunit: '1.2-types-of-business-entities',
    definition: 'An incorporated commercial enterprise with limited liability that has floated its shares onto an open stock exchange via an Initial Public Offering (IPO), allowing shares to be freely traded by the general retail public and institutional funds.',
    keyExamTokens: ['incorporated', 'floated on stock exchange', 'IPO', 'freely traded public shares', 'statutory disclosure']
  },
  {
    id: 'def-13',
    term: 'Cooperative',
    subunit: '1.2-types-of-business-entities',
    definition: 'A member-owned, for-profit social enterprise established to serve the shared economic and social interests of its members, democratically governed under the principle of "one member, one vote," with surplus distributed as dividends or rebates.',
    keyExamTokens: ['member-owned social enterprise', 'one member, one vote', 'democratic governance', 'surplus distribution']
  },
  {
    id: 'def-14',
    term: 'Non-Governmental Organization (NGO)',
    subunit: '1.2-types-of-business-entities',
    definition: 'A private sector, not-for-profit social enterprise operating independently of state control to advance humanitarian, developmental, or ecological missions, legally mandated to reinvest 100% of operational surplus back into its charitable purpose.',
    keyExamTokens: ['private sector non-profit', 'independent of state control', 'humanitarian/ecological mission', '100% surplus reinvestment']
  },
  {
    id: 'def-15',
    term: 'Mission Statement',
    subunit: '1.3-business-objectives',
    definition: 'A concise formal declaration articulating an organization’s core operational purpose, customer focus, and daily actionable values, defining what the business does and whom it serves in the present.',
    keyExamTokens: ['core operational purpose', 'present identity', 'what we do and whom we serve']
  },
  {
    id: 'def-16',
    term: 'Vision Statement',
    subunit: '1.3-business-objectives',
    definition: 'A long-term, aspirational declaration outlining an organization’s ultimate future goals and desired legacy, serving as an inspirational guide for where the company strives to be in the distant future.',
    keyExamTokens: ['long-term aspirational future', 'where we want to go', 'inspirational legacy']
  },
  {
    id: 'def-17',
    term: 'Strategic Objectives',
    subunit: '1.3-business-objectives',
    definition: 'Medium-to-long-term corporate goals formulated by senior executives and boards of directors that guide entire organizations toward fulfilling mission statements, requiring significant resource commitments and being difficult to reverse.',
    keyExamTokens: ['medium-to-long term', 'company-wide', 'formulated by senior management', 'large resource commitment']
  },
  {
    id: 'def-18',
    term: 'Tactical Objectives',
    subunit: '1.3-business-objectives',
    definition: 'Short-term, specific operational targets set by middle and departmental managers to execute overarching strategic plans on a day-to-day or monthly basis, characterized by high flexibility and adaptability.',
    keyExamTokens: ['short-term operational targets', 'departmental level', 'middle managers', 'flexible execution']
  },
  {
    id: 'def-19',
    term: 'Corporate Social Responsibility (CSR)',
    subunit: '1.3-business-objectives',
    definition: 'The voluntary commitment by an organization to conduct business operations ethically, sustainably, and accountably, actively promoting stakeholder welfare and ecological preservation beyond statutory minimum legal requirements.',
    keyExamTokens: ['voluntary ethical commitment', 'stakeholder welfare & environment', 'beyond legal compliance']
  },
  {
    id: 'def-20',
    term: 'Ansoff Matrix',
    subunit: 'bmt-ansoff-matrix',
    definition: 'A strategic analytical 2x2 framework categorizing corporate growth pathways across Products (Existing vs New) and Markets (Existing vs New) into Market Penetration, Product Development, Market Development, and Diversification.',
    keyExamTokens: ['2x2 growth matrix', 'Products vs Markets', '4 growth strategies', 'risk escalation continuum']
  }
];

export const CRAM_DISTINCTIONS: DistinctionItem[] = [
  {
    id: 'dist-01',
    conceptA: 'Sole Trader',
    conceptB: 'Partnership',
    comparisonCriteria: 'Ownership, Governance & Liability Exposure',
    contrastStatement: 'A sole trader has exactly one owner with complete unilateral decision autonomy and 100% profit capture; a partnership pools capital from 2 to 20 partners under a Deed of Partnership, but exposes every partner to joint and several unlimited liability where any partner’s commercial mistake binds the entire firm.',
    examTrapWarning: 'Never state that partnerships have limited liability! Standard partnerships carry full, joint, and several unlimited liability.'
  },
  {
    id: 'dist-02',
    conceptA: 'Private Limited Company (Ltd)',
    conceptB: 'Public Limited Company (PLC)',
    comparisonCriteria: 'Share Flotation, Capital Scale & Financial Secrecy',
    contrastStatement: 'An Ltd sells shares privately to selected investors with board approval and cannot trade on open stock exchanges, keeping accounts semi-private; a PLC floats shares publicly via an IPO on a recognized stock exchange, raising vast public capital but suffering loss of financial privacy and vulnerability to hostile takeovers.',
    examTrapWarning: 'Both entities are incorporated and possess limited liability! PLCs are NOT government-owned; they belong to private/institutional retail shareholders.'
  },
  {
    id: 'dist-03',
    conceptA: 'Mission Statement',
    conceptB: 'Vision Statement',
    comparisonCriteria: 'Temporal Horizon, Tone & Operational Role',
    contrastStatement: 'A mission statement is anchored in present reality ("what we do and whom we serve today") with an action-oriented operational tone; a vision statement is anchored in an aspirational future ("where we strive to go tomorrow") with an inspirational, motivational tone.',
    examTrapWarning: 'Do not confuse mission with tactical targets; mission declares core institutional purpose, not numerical sales numbers.'
  },
  {
    id: 'dist-04',
    conceptA: 'Strategic Objectives',
    conceptB: 'Tactical Objectives',
    comparisonCriteria: 'Time Horizon, Seniority Level & Operational Flexibility',
    contrastStatement: 'Strategic objectives are medium-to-long-term (3 to 5 years), enterprise-wide targets set by the Board of Directors that require substantial capital and are costly to reverse; tactical objectives are short-term (days/months), departmental milestones set by line managers that can be adapted rapidly.',
    examTrapWarning: 'Immediate business survival during an unexpected macroeconomic crisis (e.g. pandemic lockdown) is a TACTICAL operational target, not a strategic vision!'
  },
  {
    id: 'dist-05',
    conceptA: 'Market Development',
    conceptB: 'Product Development',
    comparisonCriteria: 'Product Novelty vs Market Novelty in Ansoff Matrix',
    contrastStatement: 'Market Development takes an existing, proven product into entirely new markets (such as international geographical expansion or new demographic segments); Product Development innovates completely new products to sell to the firm’s existing, established customer base.',
    examTrapWarning: 'If a brand sells its existing footwear through an overseas e-commerce store, that is Market Development (new channel/geography), NOT Product Development!'
  }
];

export const CRAM_GOLDEN_RULES: GoldenMatrixRule[] = [
  {
    id: 'rule-01',
    ruleTitle: 'SWOT Rule 1: Offensive Maxi-Maxi (S + O)',
    category: 'SWOT',
    corePrinciple: 'Leverage internal core strengths directly to exploit high-growth external market opportunities.',
    actionProtocol: 'Aggressive capital allocation, rapid capacity expansion, and offensive marketing campaigns into unserved market niches.',
    examApplicationTip: 'Look for cases where high cash reserves or strong brand equity coincide with booming demographic trends or fiscal subsidies.'
  },
  {
    id: 'rule-02',
    ruleTitle: 'SWOT Rule 2: Defensive Maxi-Mini (S + T)',
    category: 'SWOT',
    corePrinciple: 'Deploy robust internal competencies to neutralize or shield the business against hostile external environmental threats.',
    actionProtocol: 'Leverage proprietary patents, certified dealership networks, and customer loyalty schemes to withstand price wars and macro headwinds.',
    examApplicationTip: 'Use when established incumbents face low-cost foreign entrants; emphasize non-price competition and warranty moats.'
  },
  {
    id: 'rule-03',
    ruleTitle: 'SWOT Rule 3: Reorientation Mini-Maxi (W + O)',
    category: 'SWOT',
    corePrinciple: 'Address and eliminate an acute internal operational weakness to seize an emerging external market opportunity.',
    actionProtocol: 'Execute joint ventures, licensing agreements, or technology upgrades to resolve internal deficiencies before entering the market.',
    examApplicationTip: 'Classic scenario: A traditional retailer with obsolete IT entering online home delivery by partnering with a specialized software vendor.'
  },
  {
    id: 'rule-04',
    ruleTitle: 'SWOT Rule 4: Survival Mini-Mini (W + T)',
    category: 'SWOT',
    corePrinciple: 'Emergency defensive maneuvers in crisis when severe internal vulnerabilities collide with hostile external threats.',
    actionProtocol: 'Immediate retrenchment: shut loss-making store locations, freeze hiring, renegotiate creditor debt covenants, and shed non-core assets.',
    examApplicationTip: 'Apply in cases where high corporate indebtedness meets stagflation or aggressive competitor disruption.'
  },
  {
    id: 'rule-05',
    ruleTitle: 'Ansoff Gradient Rule: Risk Escalates with Unfamiliarity',
    category: 'Ansoff',
    corePrinciple: 'Strategic risk in Ansoff correlates directly with the degree of operational unfamiliarity in products and markets.',
    actionProtocol: 'Market Penetration (lowest risk: existing product + existing market) -> Product/Market Dev (moderate risk: 1 unknown variable) -> Diversification (highest risk: dual unfamiliarity).',
    examApplicationTip: 'Always justify Diversification as highest risk because the firm lacks both engineering expertise and customer distribution familiarity.'
  }
];
