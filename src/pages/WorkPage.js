import { useState } from "react";
import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
import WorkCard from "../components/WorkCard";
import ProofBadge from "../components/ProofBadge";
import { WORKS, REGISTER_LABELS } from "../data/works";
import { PROOF_STATUS_LIST } from "../lib/proofStatus";

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? WORKS : WORKS.filter((w) => w.register === filter);

  return (
    <section style={{ padding: "120px 28px 80px", maxWidth: 840, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Work</Label>
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 500,
            color: T.text,
            marginBottom: 8,
          }}
        >
          Selected Work
        </h1>
        <p
          style={{
            fontFamily: T.body,
            fontSize: 17,
            color: T.textMuted,
            marginBottom: 36,
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          Research systems, editorial analysis, and high-context outreach for organisations working with
          complex ideas.
        </p>
      </ScrollReveal>

      {/* Proof classification legend */}
      <ScrollReveal delay={40}>
        <div
          style={{
            background: T.bgAlt,
            border: `1px solid ${T.accentLight}66`,
            borderRadius: 8,
            padding: "18px 22px",
            marginBottom: 32,
          }}
        >
          <p
            style={{
              fontFamily: T.mono,
              fontSize: 11,
              fontWeight: 600,
              color: T.textMuted,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            How to read the badges
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {PROOF_STATUS_LIST.map((s) => (
              <div key={s.key} style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <ProofBadge status={s.key} full />
                <span style={{ fontFamily: T.body, fontSize: 13, color: T.textMuted }}>{s.description}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Filter pills */}
      <ScrollReveal delay={80}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {Object.entries(REGISTER_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                fontFamily: T.mono,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "8px 18px",
                borderRadius: 4,
                border: `1.5px solid ${filter === key ? T.accent : T.accentLight}`,
                background: filter === key ? T.accentLight : "transparent",
                color: filter === key ? T.text : T.textMuted,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {items.map((w, i) => (
        <ScrollReveal key={w.slug} delay={i * 60}>
          <WorkCard work={w} />
        </ScrollReveal>
      ))}
    </section>
  );
}
