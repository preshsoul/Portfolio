import { useState } from "react";
import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
import WritingRow from "../components/WritingRow";
import { WRITINGS, WRITING_CATEGORY_LABELS } from "../data/writings";

export default function WritingPage() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? WRITINGS : WRITINGS.filter((w) => w.category === filter);

  return (
    <section style={{ padding: "120px 28px 80px", maxWidth: 840, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Writing</Label>
        <h1
          style={{
            fontFamily: T.font,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
            color: T.text,
            marginBottom: 6,
          }}
        >
          Ebbs and Flow
        </h1>
        <p
          style={{
            fontFamily: T.font,
            fontSize: 17,
            color: T.textMuted,
            marginBottom: 40,
            maxWidth: 480,
          }}
        >
          Personal essays on culture, identity, language, and what it means to think carefully in a noisy
          world.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={40}>
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {Object.entries(WRITING_CATEGORY_LABELS).map(([key, label]) => (
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
        <ScrollReveal key={i} delay={i * 50}>
          <WritingRow item={w} />
        </ScrollReveal>
      ))}

      <ScrollReveal delay={400}>
        <a
          href="https://thermopresh.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 28,
            fontFamily: T.sans,
            fontSize: 13,
            fontWeight: 500,
            color: T.accent,
            textDecoration: "none",
            borderBottom: `1px solid ${T.accent}`,
            paddingBottom: 2,
          }}
        >
          Read all on Substack &rarr;
        </a>
      </ScrollReveal>
    </section>
  );
}
