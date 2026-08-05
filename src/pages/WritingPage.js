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
            fontFamily: T.display,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 500,
            color: T.text,
            marginBottom: 8,
          }}
        >
          Writing
        </h1>
        <p
          style={{
            fontFamily: T.body,
            fontSize: 17,
            color: T.textMuted,
            marginBottom: 40,
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          Analytical research, editorial essays, and institutional writing. Writing is central to how I work —
          it clarifies arguments, exposes weak assumptions, and makes complex subjects easier to understand.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={40}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {Object.entries(WRITING_CATEGORY_LABELS).map(([key, label]) => (
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
            fontFamily: T.mono,
            fontSize: 12,
            fontWeight: 500,
            color: T.link,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: `1px solid ${T.link}`,
            paddingBottom: 4,
          }}
        >
          Read more on Substack &rarr;
        </a>
      </ScrollReveal>
    </section>
  );
}
