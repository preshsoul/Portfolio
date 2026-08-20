import { useState } from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import ProofBadge from "../components/ProofBadge";
import ScrollReveal from "../components/ScrollReveal";
import { CASE_STUDIES } from "../data/caseStudies";
import { PROOF_STATUS_LIST } from "../lib/proofStatus";

const FILTERS = {
  All: "All work",
  MEASURED: "Measured",
  INTELLECTUAL: "Published",
  ACTIVE_PROFESSIONAL: "Professional",
  LIVE: "Live",
};

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const studies = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((study) => study.proof === filter);

  return (
    <section className="route-page route-page--work">
      <ScrollReveal>
        <header className="route-page-heading">
          <p>01 / Work index</p>
          <h1>See the move,<br />not just the result.</h1>
          <span>Research systems, proposals, editorial operations and independent analysis—with the proof boundary always visible.</span>
        </header>
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <div className="route-filter" aria-label="Filter work">
          {Object.entries(FILTERS).map(([key, label]) => (
            <button key={key} type="button" onClick={() => setFilter(key)} className={filter === key ? "active" : ""}>{label}</button>
          ))}
        </div>
      </ScrollReveal>
      <div className="work-index">
        {studies.map((study, index) => (
          <ScrollReveal key={study.slug} delay={index * 45}><CaseStudyCard study={study} index={index + 1} /></ScrollReveal>
        ))}
      </div>
      <section className="proof-key">
        <p>Proof conditions / how to read this work</p>
        <div>
          {PROOF_STATUS_LIST.map((status) => (
            <article key={status.key}><ProofBadge status={status.key} full /><span>{status.description}</span></article>
          ))}
        </div>
      </section>
    </section>
  );
}
