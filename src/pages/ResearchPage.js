import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";

const FRAMEWORKS = [
  "Percolation Theory",
  "Catastrophe Theory",
  "Optimal Transport",
  "Braess Paradox",
  "Kolmogorov Complexity",
  "Friendship Paradox",
  "Optimal Stopping",
  "Renewal Theory",
  "Lyapunov Stability",
  "No-Free-Lunch Theorem",
  "Shannon Channel Capacity",
  "Gale-Shapley Stable Matching",
  "Zipf's Law",
  "Amdahl's Law",
];

export default function ResearchPage() {
  return (
    <section style={{ padding: "120px 28px 80px", maxWidth: 840, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Research</Label>
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 500,
            color: T.text,
            marginBottom: 8,
          }}
        >
          Research Library
        </h1>
        <p
          style={{
            fontFamily: T.body,
            fontSize: 17,
            color: T.textMuted,
            marginBottom: 48,
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          Published books and a research programme translating mathematical principles into decision
          frameworks for marketing and organisational strategy.
        </p>
      </ScrollReveal>

      {/* Published Books */}
      <ScrollReveal delay={60}>
        <h2
          style={{
            fontFamily: T.mono,
            fontSize: 11,
            fontWeight: 600,
            color: T.accent,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Published Books
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: 24,
          marginBottom: 64,
        }}
      >
        {/* Book 1: TSOC */}
        <ScrollReveal delay={80}>
          <div
            style={{
              padding: "28px",
              background: T.bgAlt,
              borderRadius: 8,
              border: `1px solid ${T.accentLight}66`,
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: 4,
                marginBottom: 20,
                overflow: "hidden",
                border: `1px solid ${T.accentLight}`,
              }}
            >
              <img
                src="/tsoc-cover.jpeg"
                alt="The Shape of Choice book cover — deep navy background with gold and off-white typography"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <h3
              style={{
                fontFamily: T.display,
                fontSize: 22,
                fontWeight: 600,
                color: T.text,
                marginBottom: 10,
                lineHeight: 1.3,
              }}
            >
              The Shape of Choice: Engineering Decision Spaces
            </h3>
            <p
              style={{
                fontFamily: T.body,
                fontSize: 14,
                color: T.textMuted,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              96 pages, ten chapters. LaTeX-typeset. Independently published. A synthesis of constrained
              choice, Markov processes, topology, fixed points, information capacity, dominance, impossibility
              and binding constraints.
            </p>
            <a
              href="https://selar.com/b34jr22286"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: T.mono,
                fontSize: 11,
                fontWeight: 500,
                color: T.link,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Purchase on Selar &rarr;
            </a>
          </div>
        </ScrollReveal>

        {/* Book 2: Markov Chains */}
        <ScrollReveal delay={120}>
          <div
            style={{
              padding: "28px",
              background: T.bgAlt,
              borderRadius: 8,
              border: `1px solid ${T.accentLight}66`,
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: 4,
                marginBottom: 20,
                overflow: "hidden",
                border: `1px solid ${T.accentLight}`,
              }}
            >
              <img
                src="/markov-cover.png"
                alt="Markov Chains for Marketing Decisions book cover by Precious Ajayi"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <h3
              style={{
                fontFamily: T.display,
                fontSize: 22,
                fontWeight: 600,
                color: T.text,
                marginBottom: 10,
                lineHeight: 1.3,
              }}
            >
              Markov Chains for Marketing Decisions
            </h3>
            <p
              style={{
                fontFamily: T.body,
                fontSize: 14,
                color: T.textMuted,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              A state-based framework combining probability theory with Wittgenstein's philosophy of language
              to explain why customer journeys fail and what replaces them. Published and sold through Selar.
            </p>
            <a
              href="https://selar.com/markov-market"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: T.mono,
                fontSize: 11,
                fontWeight: 500,
                color: T.link,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Purchase on Selar &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* PL-5 Essay Series */}
      <ScrollReveal delay={160}>
        <h2
          style={{
            fontFamily: T.mono,
            fontSize: 11,
            fontWeight: 600,
            color: T.accent,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          PL-5 Essay Series
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={180}>
        <div
          style={{
            background: T.bgAlt,
            borderRadius: 8,
            border: `1px solid ${T.accentLight}66`,
            padding: "28px 30px",
            marginBottom: 24,
          }}
        >
          <p
            style={{
              fontFamily: T.body,
              fontSize: 16,
              color: T.text,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            A visible research architecture — five essays grounding predictive literacy in mathematics. Each
            essay takes a mathematical principle and applies it to marketing and organisational decision-making.
            The flagship Markov essay serves as the published proof of concept.
          </p>
          <p
            style={{
              fontFamily: T.body,
              fontSize: 15,
              color: T.textMuted,
              lineHeight: 1.7,
            }}
          >
            The programme demonstrates how principles drawn from operations research, topology, information
            theory, and dynamical systems are reused across different institutional problems. The framework
            names below represent the intellectual territory covered by the series.
          </p>
        </div>
      </ScrollReveal>

      {/* Framework catalogue */}
      <ScrollReveal delay={220}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 16px",
            fontFamily: T.display,
            fontSize: 16,
            color: T.textMuted,
            lineHeight: 2,
          }}
        >
          {FRAMEWORKS.map((name, i) => (
            <span key={i}>
              {name}
              {i < FRAMEWORKS.length - 1 && (
                <span style={{ color: T.accent, marginLeft: 12 }}>·</span>
              )}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
