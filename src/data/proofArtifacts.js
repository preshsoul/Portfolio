export const PROOF_ARTIFACTS = [
  {
    title: "PiggyVest decision-model map",
    type: "Model excerpt",
    caseStudySlug: "piggyvest-decision-model",
    proof: "INTELLECTUAL",
    summary:
      "A five-state interpretation of how published savings-behaviour data can become campaign logic and testable strategic hypotheses.",
    boundary: "Independent analysis of public material; not commissioned by PiggyVest.",
  },
  {
    title: "Limpiar proposal tracker",
    type: "Redacted workflow",
    caseStudySlug: "limpiar-grant-proposals",
    proof: "MEASURED",
    summary:
      "A compressed grant-production system covering funder fit, eligibility checks, narrative adaptation, deadlines and approval evidence.",
    boundary: "$30,000+ approved; excerpts should remain redacted where funder/client details are sensitive.",
  },
  {
    title: "Dutum editorial verification rhythm",
    type: "Operating system",
    caseStudySlug: "dutum-editorial-research-system",
    proof: "ACTIVE_PROFESSIONAL",
    summary:
      "A claims-verification and editorial-planning layer for infrastructure, bankability and executive thought-leadership work.",
    boundary: "Active professional work; only public or redacted artifacts should be shown.",
  },
  {
    title: "Elomiran editorial brief and source map",
    type: "Editorial research",
    caseStudySlug: "elomiran-editorial-development",
    proof: "LIVE",
    summary:
      "A structured research and briefing layer that keeps ghostwritten work accurate, voice-aware and ready for revision.",
    boundary: "Live ghostwriting work; client materials and unpublished drafts remain confidential.",
  },
  {
    title: "The Shape of Choice diagrams",
    type: "Published framework",
    caseStudySlug: "shape-of-choice",
    proof: "INTELLECTUAL",
    summary:
      "Decision-space diagrams and chapter architecture from the published book on constraints, state transitions and organisational choice.",
    boundary: "Published intellectual work available on Selar.",
  },
  {
    title: "Cowrywise editorial classification method",
    type: "Audit excerpt",
    caseStudySlug: "cowrywise-editorial-audit",
    proof: "INTELLECTUAL",
    summary:
      "A behavioural-content classification layer for reading a fintech editorial archive beyond topic labels.",
    boundary: "Independent analysis of public editorial material.",
  },
];

export const getArtifactsForCaseStudy = (slug) =>
  PROOF_ARTIFACTS.filter((artifact) => artifact.caseStudySlug === slug);
