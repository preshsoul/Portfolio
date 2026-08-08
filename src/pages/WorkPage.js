import { useState } from "react";
import T from "../lib/tokens";
import CaseStudyCard from "../components/CaseStudyCard";
import Label from "../components/Label";
import ProofBadge from "../components/ProofBadge";
import ScrollReveal from "../components/ScrollReveal";
import { CASE_STUDIES } from "../data/caseStudies";
import { PROOF_STATUS_LIST } from "../lib/proofStatus";

const FILTERS = {
  All: "All",
  MEASURED: "Measured",
  INTELLECTUAL: "Published / Intellectual",
  ACTIVE_PROFESSIONAL: "Active professional",
  LIVE: "Live implementation",
};

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const studies = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((study) => study.proof === filter);

  return (
    <section style={{ padding: "120px 28px 88px", maxWidth: 1120, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Selected work</Label>
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            color: T.text,
            marginBottom: 18,
            maxWidth: 840,
          }}
        >
          Work that shows the situation, the decision and the evidence.
        </h1>
        <p
          style={{
            fontFamily: T.body,
            fontSize: 18,
            color: T.textMuted,
            lineHeight: 1.75,
            maxWidth: 720,
            marginBottom: 30,
          }}
        >
          Research systems, proposal work, executive editorial operations and independent analysis. Each item carries a proof boundary so the claim does not outrun the evidence.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {Object.entries(FILTERS).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              style={{
                fontFamily: T.mono,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "10px 16px",
                borderRadius: 999,
                border: `1.5px solid ${filter === key ? T.text : T.border}`,
                background: filter === key ? T.text : T.bgAlt,
                color: filter === key ? T.bg : T.textMuted,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
          gap: 18,
        }}
      >
        {studies.map((study, index) => (
          <ScrollReveal key={study.slug} delay={index * 55}>
            <CaseStudyCard study={study} compact />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={160}>
        <section
          style={{
            marginTop: 56,
            padding: "30px",
            background: T.cardAlt,
            borderRadius: 22,
            border: `1px solid ${T.border}`,
          }}
        >
          <h2 style={{ fontFamily: T.display, fontSize: 30, color: T.text, marginBottom: 18 }}>
            How to read the badges
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {PROOF_STATUS_LIST.map((status) => (
              <div
                key={status.key}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(170px, 240px) 1fr",
                  gap: 16,
                  alignItems: "start",
                }}
                className="badge-row"
              >
                <ProofBadge status={status.key} full />
                <p style={{ fontFamily: T.body, fontSize: 14, color: T.textMuted, lineHeight: 1.65 }}>
                  {status.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </section>
  );
}
