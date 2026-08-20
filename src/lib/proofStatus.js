// Proof classifications from the redesign brief. Every project carries one visible badge.
// The distinction between "I did this and here's what happened" and "I built this and
// it's still running" is what separates a credible portfolio from a marketing exercise.
export const PROOF_STATUS = {
  MEASURED: {
    key: "MEASURED",
    label: "Completed & Measured",
    short: "Completed & Measured",
    description: "Finished work with verifiable quantitative outcomes.",
    color: "#242321",
    bg: "#F0B323",
  },
  INTELLECTUAL: {
    key: "INTELLECTUAL",
    label: "Completed Intellectual Work",
    short: "Completed Intellectual Work",
    description: "Finished and published analytical or research output.",
    color: "#F7F0E5",
    bg: "#123042",
  },
  LIVE: {
    key: "LIVE",
    label: "Live Implementation",
    short: "Live Implementation",
    description: "Active work with results pending or accumulating.",
    color: "#242321",
    bg: "#4E8776",
  },
  ACTIVE_PROFESSIONAL: {
    key: "ACTIVE_PROFESSIONAL",
    label: "Active Professional Work",
    short: "Active Professional Work",
    description: "Ongoing employment-context responsibilities.",
    color: "#242321",
    bg: "#4E8776",
  },
  REPORTED: {
    key: "REPORTED",
    label: "Completed & Reported",
    short: "Completed & Reported",
    description: "Finished work with a result reported by the client or partner, not independently verified.",
    color: "#242321",
    bg: "#E8DFD0",
  },
};

export const PROOF_STATUS_LIST = Object.values(PROOF_STATUS);
