// Every item carries a `proof` key from src/lib/proofStatus.js so a reader always
// knows what kind of evidence they're looking at.
export const WORKS = [
  // --- Flagship case studies ---
  {
    slug: "piggyvest",
    title: "From 26,000 Savings Responses to a Behavioural Decision System",
    client: "PiggyVest (independent analysis)",
    description:
      "Analysed a Savings Report covering more than 26,000 respondents across 12 states and six geopolitical zones. Reframed financial behaviour as movement between states rather than a linear marketing funnel. Developed a five-state belief-transition architecture, eight constraint archetypes, and a four-arm experimental plan.",
    register: "CASE_STUDY",
    proof: "INTELLECTUAL",
    tags: ["Behavioural Data", "Fintech", "Research Synthesis", "Markov Models"],
    year: 2025,
    stat: "26,000+ respondents",
    featured: true,
    status: "PUBLISHED",
  },
  {
    slug: "tsoc",
    title: "The Shape of Choice: Engineering Decision Spaces",
    description:
      "A 96-page, ten-chapter applied-analysis book. Independently published and typeset in LaTeX. A synthesis of constrained choice, Markov processes, topology, fixed points, information capacity, dominance, impossibility and binding constraints.",
    register: "CASE_STUDY",
    proof: "INTELLECTUAL",
    tags: ["Applied Analysis", "Published Book", "Choice Architecture"],
    year: 2025,
    stat: "96 pages",
    featured: true,
    status: "PUBLISHED",
  },
  {
    slug: "outreach",
    title: "Building a Research-Led Creator Outreach System",
    description:
      "Designed and partially executed a multi-market creator acquisition pipeline for a short-film subscription platform. Covers creator discovery, rights and fit verification, personalised messaging, follow-up scheduling, and reply classification.",
    register: "CASE_STUDY",
    proof: "LIVE",
    tags: ["Outreach Systems", "CRM Design", "Pipeline Architecture"],
    year: 2026,
    stat: "Multi-market pipeline",
    featured: true,
    status: "PENDING_AUDIT",
  },
  {
    slug: "limpiar",
    title: "Thirteen Tailored Grant Proposals in Five Weeks",
    description:
      "Thirteen tailored grant proposals in a five-week production period. More than $30,000 in approvals. Work included funder/opportunity research, eligibility screening, narrative adaptation, deadline management, and proposal tracking.",
    register: "CASE_STUDY",
    proof: "MEASURED",
    tags: ["Grant Writing", "Proposal Strategy", "Funder Research"],
    year: 2025,
    stat: "$30,000+ approved",
    featured: true,
    status: "PUBLISHED",
  },

  // --- Supporting case studies ---
  {
    slug: "cowrywise",
    title: "Reverse-Engineering Three Years of Editorial and Behavioural Strategy",
    client: "Cowrywise (independent strategic research)",
    description:
      "Independent analysis of a fintech platform's content corpus across three years. Classification by topic, audience, behavioural function and product relationship. Editorial gaps identified. Constraint analysis and campaign concepts derived from research.",
    register: "CASE_STUDY",
    proof: "INTELLECTUAL",
    tags: ["Behavioural Audit", "Fintech", "Editorial Review"],
    year: 2025,
    status: "PUBLISHED",
  },
  {
    slug: "dutum",
    title: "Building an Executive Editorial and Operating System for an Infrastructure Company",
    description:
      "EA and Brand Manager role encompassing multi-sheet content calendar, LinkedIn and website editorial tracks, performance-comparison reports, research-led infrastructure and bankability content, manuscript editing and executive ghostwriting, speaking-opportunity pipelines, and claims verification before publication.",
    register: "OPERATIONS",
    proof: "ACTIVE_PROFESSIONAL",
    tags: ["Executive Operations", "Editorial Systems", "Infrastructure"],
    year: 2026,
    status: "ACTIVE",
  },
  {
    slug: "aroba",
    title: "Content Coordination During a Product and Film Launch",
    description:
      "Content-team coordination during a combined product and film launch. Reported 200% Instagram traffic growth during the launch period.",
    proofNote: "Reported by client; original analytics not independently verified.",
    register: "CASE_STUDY",
    proof: "REPORTED",
    tags: ["Launch Strategy", "Social Growth", "Content Coordination"],
    year: 2025,
    status: "PUBLISHED",
  },

  // --- Live implementation ---
  {
    slug: "all-at-once",
    title: "Moving a Behavioural Strategy into Campaign Production",
    description:
      "Research and strategic foundation completed. Campaign architecture completed. Designer brief delivered. Design collaboration initiated. First asset delivered. Four-arm test plan designed.",
    register: "OPERATIONS",
    proof: "LIVE",
    tags: ["Campaign Architecture", "Behavioural Strategy", "In Progress"],
    year: 2026,
    status: "PENDING_AUDIT",
  },

  // --- Frameworks & intellectual work ---
  {
    slug: "markov",
    title: "Markov Chains for Marketing Decisions",
    description:
      "A state-based framework combining probability theory with Wittgenstein's philosophy of language to explain why customer journeys fail and what replaces them. Published through Selar.",
    register: "FRAMEWORK",
    proof: "INTELLECTUAL",
    tags: ["Markov Chains", "Wittgenstein", "Brand Strategy"],
    year: 2026,
    stat: "Published book",
    featured: false,
    status: "PUBLISHED",
  },
  {
    slug: "pl5",
    title: "PL-5 Essay Series: Predictive Literacy",
    description:
      "A research programme of five essays grounding predictive literacy in mathematics: Percolation Theory, Catastrophe Theory, Optimal Transport, Shannon Channel Capacity, and Lyapunov Stability — applied to marketing and organisational decision-making.",
    register: "FRAMEWORK",
    proof: "INTELLECTUAL",
    tags: ["Predictive Literacy", "Systems Thinking", "Decision Science"],
    year: 2026,
    stat: "5 essays",
    status: "PUBLISHED",
  },

  // --- Essays ---
  {
    slug: "love",
    title: "Have You Ever Seen A Man In Love?",
    description:
      "An essay on love, vulnerability, and the performance of tenderness — written for people who've felt it but couldn't name it.",
    register: "ESSAY",
    tags: ["Personal Essay", "Love", "Culture"],
    year: 2025,
    stat: "800+ likes",
    status: "PUBLISHED",
  },
  {
    slug: "politicians",
    title: "The Politicians and the Masses",
    description:
      "The hen-and-egg riddle applied to Nigerian governance — corrupt leaders from corrupt systems, and vice versa.",
    register: "ESSAY",
    tags: ["Political Commentary", "Nigeria", "Systems"],
    year: 2025,
    status: "PUBLISHED",
  },
  {
    slug: "geometry",
    title: "Geometry of Beliefs",
    description:
      "On the distance between who we are and who we believe ourselves to be — measured not in kilometres, but in fear.",
    register: "ESSAY",
    tags: ["Philosophy", "Identity", "Faith"],
    year: 2024,
    status: "PUBLISHED",
  },
];

export const REGISTER_LABELS = {
  All: "All",
  CASE_STUDY: "Case Studies",
  OPERATIONS: "Operations",
  FRAMEWORK: "Frameworks",
  ESSAY: "Essays",
};
