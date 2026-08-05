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
            fontFamily: T.font,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
            color: T.text,
            marginBottom: 6,
          }}
        >
          Everything I've made,
        </h1>
        <p
          style={{
            fontFamily: T.font,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
            color: T.textMuted,
            marginBottom: 32,
          }}
        >
          organised by how I think.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={40}>
        <div
          style={{
            background: T.bgAlt,
            border: `1px solid ${T.border}`,
            borderRadius: 10,
            padding: "16px 20px",
            marginBottom: 28,
          }}
        >
          <p
            style={{
              fontFamily: T.sans,
              fontSize: 11,
              fontWeight: 600,
              color: T.textMuted,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            How to read the badges
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {PROOF_STATUS_LIST.map((s) => (
              <div key={s.key} style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <ProofBadge status={s.key} full />
                <span style={{ fontFamily: T.font, fontSize: 13, color: T.textMuted }}>{s.description}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {Object.entries(REGISTER_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                fontFamily: T.sans,
                fontSize: 13,
                padding: "7px 18px",
                borderRadius: 24,
                border: `1.5px solid ${filter === key ? T.accent : T.border}`,
                background: filter === key ? T.accent : "transparent",
                color: filter === key ? T.white : T.textMuted,
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
        <ScrollReveal key={w.slug} delay={i * 70}>
          <WorkCard work={w} />
        </ScrollReveal>
      ))}
    </section>
  );
}
