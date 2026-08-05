// Proof classifications from the redesign brief. Every project carries one visible badge.
// The distinction between "I did this and here's what happened" and "I built this and
// it's still running" is what separates a credible portfolio from a marketing exercise.
export const PROOF_STATUS = {
  MEASURED: {
    key: "MEASURED",
    label: "Completed & Measured",
    short: "Completed & Measured",
    description: "Finished work with verifiable quantitative outcomes.",
    color: "#0A1628",
    bg: "#E8D5A8",
  },
  INTELLECTUAL: {
    key: "INTELLECTUAL",
    label: "Completed Intellectual Work",
    short: "Completed Intellectual Work",
    description: "Finished and published analytical or research output.",
    color: "#1A365D",
    bg: "#DCE4F5",
  },
  LIVE: {
    key: "LIVE",
    label: "Live Implementation",
    short: "Live Implementation",
    description: "Active work with results pending or accumulating.",
    color: "#4A5568",
    bg: "#E4E2DF",
  },
  ACTIVE_PROFESSIONAL: {
    key: "ACTIVE_PROFESSIONAL",
    label: "Active Professional Work",
    short: "Active Professional Work",
    description: "Ongoing employment-context responsibilities.",
    color: "#4A5568",
    bg: "#E4E2DF",
  },
  REPORTED: {
    key: "REPORTED",
    label: "Completed & Reported",
    short: "Completed & Reported",
    description: "Finished work with a result reported by the client or partner, not independently verified.",
    color: "#4A5568",
    bg: "#F0EDE8",
  },
};

export const PROOF_STATUS_LIST = Object.values(PROOF_STATUS);
