import { useState } from "react";
import EvidenceFigure from "./EvidenceFigure";

const DISTRIBUTION = [
  { label: "Unaware", value: 35, tone: "primary" },
  { label: "Uncertain saver", value: 28, tone: "secondary" },
  { label: "Active saver", value: 20, tone: "support" },
  { label: "Confident manager", value: 10, tone: "muted" },
  { label: "Advocate", value: 7, tone: "muted" },
];

const STATES = [
  ["Unaware", "Little active savings awareness; the model treats recognition as a distinct condition."],
  ["Uncertain saver", "Interest exists, but consistency remains exposed to pressure and competing claims."],
  ["Active saver", "Saving is present as behaviour, without assuming that it is yet resilient."],
  ["Confident manager", "The user can manage competing financial priorities with greater consistency."],
  ["Advocate", "The most established state in the working model; not a guaranteed final destination."],
];

export default function PiggyVestFigure() {
  const [activeState, setActiveState] = useState(0);

  return (
    <div className="piggyvest-figure-stack">
      <EvidenceFigure
        number="01"
        title="Where the survey population begins"
        observation="The largest starting group is not yet actively saving; uncertainty is the next-largest condition."
        source="Published PiggyVest savings-report responses; 26,000+ respondents."
        status="INTELLECTUAL"
        method="A cross-sectional distribution. It describes groups in the source material, not the path any one respondent took over time."
        summary="Thirty-five percent are grouped as unaware, 28% as uncertain savers, 20% as active savers, 10% as confident managers, and 7% as advocates."
      >
        <div className="direct-bar-chart">
          {DISTRIBUTION.map((item) => (
            <div className={`direct-bar direct-bar--${item.tone}`} key={item.label}>
              <span>{item.label}</span>
              <div><i style={{ width: `${item.value}%` }} /></div>
              <b>{item.value}%</b>
            </div>
          ))}
        </div>
      </EvidenceFigure>

      <section className="state-explorer" aria-labelledby="state-explorer-title">
        <div className="state-explorer__intro">
          <span>Working model / explore the states</span>
          <h3 id="state-explorer-title">A model for asking better questions, not pretending to predict a person.</h3>
          <p>Select a state to read how it functions in the analytical system.</p>
        </div>
        <div className="state-explorer__controls" role="group" aria-label="Financial state">
          {STATES.map(([label], index) => (
            <button key={label} type="button" aria-pressed={activeState === index} onClick={() => setActiveState(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{label}
            </button>
          ))}
        </div>
        <div className="state-explorer__reading" aria-live="polite">
          <span>Selected state</span>
          <h4>{STATES[activeState][0]}</h4>
          <p>{STATES[activeState][1]}</p>
          <small>Interpretive model · requires longitudinal validation before transition probabilities can be claimed.</small>
        </div>
      </section>
    </div>
  );
}
