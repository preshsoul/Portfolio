import { useState } from "react";
import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
import WritingRow from "../components/WritingRow";
import { WRITINGS, WRITING_CATEGORY_LABELS } from "../data/writings";

export default function WritingPage() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? WRITINGS : WRITINGS.filter((w) => w.category === filter);
  const featured = WRITINGS.filter((w) => w.featured).slice(0, 6);

  return (
    <section style={{ padding: "120px 28px 88px", maxWidth: 1120, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Writing</Label>
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(42px, 7vw, 74px)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            fontWeight: 620,
            color: T.text,
            marginBottom: 18,
          }}
        >
          Writing that keeps research, institutions and human life in the same frame.
        </h1>
        <p
          style={{
            fontFamily: T.body,
            fontSize: 18,
            color: T.textMuted,
            marginBottom: 40,
            maxWidth: 680,
            lineHeight: 1.75,
          }}
        >
          Analytical research, institutional writing and essays on people and culture. The human pieces stay here because observation, emotional range and language control are part of the professional work too.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={30}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(260px, 0.85fr)",
            gap: 16,
            marginBottom: 44,
          }}
          className="writing-feature-grid"
        >
          {featured.map((item, index) => (
            <a
              key={item.title}
              href={item.url}
              target={item.url?.startsWith("http") ? "_blank" : undefined}
              rel={item.url?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="lift-card"
              style={{
                textDecoration: "none",
                minHeight: index === 0 ? 310 : 148,
                gridColumn: index === 0 ? "span 1" : undefined,
                gridRow: index === 0 ? "span 2" : undefined,
                padding: index === 0 ? "clamp(28px, 5vw, 42px)" : 24,
                borderRadius: 24,
                background: index === 0 ? T.text : T.cardAlt,
                color: index === 0 ? T.bg : T.text,
                border: `1px solid ${index === 0 ? T.text : T.border}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 24,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: T.mono,
                    fontSize: 11,
                    color: index === 0 ? T.accentLight : T.link,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Featured / {item.category}
                </p>
                <h2
                  style={{
                    fontFamily: T.display,
                    fontSize: index === 0 ? "clamp(36px, 5vw, 58px)" : 25,
                    lineHeight: index === 0 ? 0.98 : 1.08,
                    letterSpacing: index === 0 ? "-0.04em" : "-0.02em",
                    color: index === 0 ? T.bg : T.text,
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontFamily: T.body,
                    fontSize: index === 0 ? 16 : 14,
                    lineHeight: 1.7,
                    color: index === 0 ? "rgba(250, 248, 245, 0.78)" : T.textMuted,
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: 12,
                  color: index === 0 ? T.accentLight : T.link,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Read piece &rarr;
              </span>
            </a>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={40}>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 26,
            flexWrap: "wrap",
            paddingTop: 14,
            borderTop: `1px solid ${T.border}`,
          }}
        >
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
                borderRadius: 999,
                border: `1.5px solid ${filter === key ? T.text : T.accentLight}`,
                background: filter === key ? T.text : "transparent",
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
          Open the full Substack archive &rarr;
        </a>
      </ScrollReveal>
    </section>
  );
}
