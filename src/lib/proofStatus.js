// Proof classification for work items. Every case study or piece of work should
// carry one of these so a reader always knows what kind of evidence they're looking at:
// a measured outcome, a finished piece of thinking, a running system, or a proposal.
export const PROOF_STATUS = {
  MEASURED: {
    key: "MEASURED",
    label: "Completed & Measured",
    short: "Measured",
    description: "Finished work with an independently verifiable, quantified result.",
    color: "#2D6A4F",
    bg: "#D8F3DC",
  },
  REPORTED: {
    key: "REPORTED",
    label: "Completed & Reported",
    short: "Reported",
    description: "Finished work with a result reported by the client or partner, not independently verified.",
    color: "#8A5A00",
    bg: "#FCEFC7",
  },
  INTELLECTUAL: {
    key: "INTELLECTUAL",
    label: "Completed Intellectual Work",
    short: "Intellectual Work",
    description: "A finished analysis, framework, or publication — proof of thinking, not of a market outcome.",
    color: "#3B5BA5",
    bg: "#DCE4F5",
  },
  LIVE: {
    key: "LIVE",
    label: "Live Implementation",
    short: "Live — Pending Audit",
    description: "An active, running system or engagement. Real but not yet fully measured or audited.",
    color: "#9A5B13",
    bg: "#F3E0C7",
  },
  PROPOSED: {
    key: "PROPOSED",
    label: "Proposed or Experimental",
    short: "Proposed",
    description: "Designed but not yet deployed, or an early-stage experiment without results to report.",
    color: "#78716C",
    bg: "#E7E0D5",
  },
};

export const PROOF_STATUS_LIST = Object.values(PROOF_STATUS);
