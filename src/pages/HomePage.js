import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import ProofBadge from "../components/ProofBadge";
import { WORKS } from "../data/works";

const CAPABILITIES = [
  { capability: "Research synthesis", evidence: "PiggyVest model, TSOC, Cowrywise audit" },
  { capability: "Personalised outreach", evidence: "Filmmaker outreach system" },
  { capability: "CRM and workflow design", evidence: "Filmmaker pipeline, Dutum operations" },
  { capability: "Long-form editorial writing", evidence: "TSOC, Substack essays" },
  { capability: "Concise correspondence", evidence: "Selected outreach emails with replies" },
  { capability: "Campaign translation", evidence: "Behavioural campaign architecture" },
  { capability: "Deadline-driven production", evidence: "Thirteen grant proposals in five weeks" },
  { capability: "Executive coordination", evidence: "Infrastructure firm EA/Brand Manager role" },
  { capability: "Audience growth", evidence: "Product/film-launch content coordination (reported)" },
];

const SECTION = {
  padding: "clamp(64px, 10vw, 120px) max(16px, 5vw)",
  maxWidth: 960,
  margin: "0 auto",
};

const HERO_PADDING = {
  padding: "clamp(100px, 16vh, 160px) max(16px, 5vw) clamp(48px, 8vw, 80px)",
};

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  const featured = WORKS.filter((w) => w.featured);

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          ...HERO_PADDING,
          maxWidth: 960,
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: T.mono,
            fontSize: "clamp(10px, 1.3vw, 12px)",
            fontWeight: 500,
            color: T.accent,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "clamp(20px, 3vw, 32px)",
          }}
        >
          Writer, Researcher &amp; Strategic Operator
        </p>

        {/* Name */}
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(34px, 6.5vw, 64px)",
            fontWeight: 400,
            color: T.text,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(20px, 3vw, 28px)",
            maxWidth: 800,
          }}
        >
          I research how organisations actually work — their behavioural assumptions, editorial
          architectures, stakeholder maps — and build systems that make complex ideas reach the right
          people.
        </h1>

        {/* Deck */}
        <p
          style={{
            fontFamily: T.body,
            fontSize: "clamp(16px, 2vw, 19px)",
            color: T.textMuted,
            lineHeight: 1.7,
            maxWidth: 560,
            marginBottom: "clamp(32px, 5vw, 44px)",
          }}
        >
          Two published books. Thirteen tailored grant proposals clearing $30,000. Executive
          operations for an infrastructure finance firm. Outreach systems producing verified replies
          from filmmakers, researchers and policy stakeholders.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "clamp(10px, 1.6vw, 14px)",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => go("/work")}
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(11px, 1.3vw, 12px)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: T.white,
              background: T.text,
              padding: "14px 28px",
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              minHeight: 48,
            }}
          >
            See the work
          </button>
          <button
            onClick={() => go("/research")}
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(11px, 1.3vw, 12px)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: T.text,
              background: "transparent",
              border: `1.5px solid ${T.accent}`,
              padding: "14px 28px",
              borderRadius: 4,
              cursor: "pointer",
              whiteSpace: "nowrap",
              minHeight: 48,
            }}
          >
            Read the research
          </button>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section
        style={{
          padding: SECTION.padding,
          background: T.bgAlt,
          borderTop: `1px solid ${T.accentLight}66`,
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "clamp(28px, 5vw, 40px)",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: T.mono,
                    fontSize: "clamp(10px, 1.2vw, 11px)",
                    fontWeight: 600,
                    color: T.accent,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Selected Work
                </p>
                <h2
                  style={{
                    fontFamily: T.display,
                    fontSize: "clamp(24px, 4vw, 36px)",
                    fontWeight: 500,
                    color: T.text,
                    lineHeight: 1.2,
                  }}
                >
                  Four projects that demonstrate range.
                </h2>
              </div>
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: "clamp(10px, 1.2vw, 11px)",
                  color: T.textMuted,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                Vol. I – IV
              </span>
            </div>
          </ScrollReveal>

          {/* Cards: 2-col desktop, 1-col mobile */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
              gap: "clamp(14px, 2vw, 20px)",
            }}
          >
            {featured.map((w, i) => (
              <ScrollReveal key={w.slug} delay={i * 80}>
                <article
                  onClick={() => go("/work")}
                  style={{
                    padding: "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 28px)",
                    background: T.white,
                    border: `1px solid ${T.accentLight}66`,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    minHeight: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = T.accent;
                    e.currentTarget.style.boxShadow = `0 2px 12px ${T.accentLight}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${T.accentLight}66`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Proof badge */}
                  <div style={{ marginBottom: 14 }}>
                    <ProofBadge status={w.proof} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: T.display,
                      fontSize: "clamp(19px, 2.4vw, 24px)",
                      fontWeight: 600,
                      color: T.text,
                      lineHeight: 1.3,
                      marginBottom: 10,
                    }}
                  >
                    {w.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: T.body,
                      fontSize: "clamp(14px, 1.6vw, 15px)",
                      color: T.textMuted,
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {w.description.length > 180
                      ? w.description.slice(0, 177) + "..."
                      : w.description}
                  </p>

                  {/* CTA */}
                  <span
                    style={{
                      fontFamily: T.mono,
                      fontSize: "clamp(10px, 1.2vw, 11px)",
                      color: T.link,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: 18,
                    }}
                  >
                    Examine case study &rarr;
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* All projects link */}
          <ScrollReveal delay={300}>
            <button
              onClick={() => go("/work")}
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 12px)",
                fontWeight: 500,
                color: T.link,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                marginTop: "clamp(20px, 3vw, 28px)",
                padding: 0,
              }}
            >
              All projects &rarr;
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Capability-to-Evidence Map ── */}
      <section
        style={{
          padding: SECTION.padding,
          background: T.bg,
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                fontWeight: 600,
                color: T.accent,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Capability-to-Evidence Map
            </p>
            <h2
              style={{
                fontFamily: T.display,
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 500,
                color: T.text,
                lineHeight: 1.2,
                marginBottom: 10,
              }}
            >
              Every claim points to something specific.
            </h2>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "clamp(14px, 1.6vw, 16px)",
                color: T.textMuted,
                lineHeight: 1.6,
                marginBottom: "clamp(28px, 4vw, 40px)",
                maxWidth: 500,
              }}
            >
              This is not a list of skills. It is an index of verified applications.
            </p>
          </ScrollReveal>

          {/* Table */}
          <div style={{ borderTop: `1px solid ${T.accentLight}` }}>
            {CAPABILITIES.map((row, i) => (
              <ScrollReveal key={i} delay={i * 35}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "clamp(12px, 1.6vw, 16px) 0",
                    borderBottom: `1px solid ${T.accentLight}55`,
                    gap: "clamp(8px, 1.2vw, 16px)",
                  }}
                >
                  {/* Label — stacks on top for very narrow screens */}
                  <div
                    style={{
                      flex: "0 0 clamp(180px, 26vw, 240px)",
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: T.mono,
                        fontSize: "clamp(10px, 1.2vw, 12px)",
                        fontWeight: 600,
                        color: T.text,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        lineHeight: 1.4,
                      }}
                    >
                      {row.capability}
                    </span>
                  </div>
                  {/* Evidence */}
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <span
                      style={{
                        fontFamily: T.body,
                        fontSize: "clamp(14px, 1.6vw, 15px)",
                        color: T.textMuted,
                        lineHeight: 1.6,
                      }}
                    >
                      {row.evidence}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Strip ── */}
      <section
        style={{
          padding: `0 max(16px, 5vw) clamp(48px, 8vw, 72px)`,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              gap: "clamp(14px, 2.5vw, 32px)",
              flexWrap: "wrap",
              alignItems: "baseline",
              borderTop: `1px solid ${T.accentLight}`,
              paddingTop: "clamp(24px, 3vw, 32px)",
            }}
          >
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                fontWeight: 500,
                color: T.textMuted,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </span>
            <a
              href="mailto:ajayithewriter@gmail.com"
              style={{
                fontFamily: T.body,
                fontSize: "clamp(14px, 1.6vw, 15px)",
                color: T.link,
                textDecoration: "none",
              }}
            >
              ajayithewriter@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/precious-ajayi-soul"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: T.body,
                fontSize: "clamp(14px, 1.6vw, 15px)",
                color: T.link,
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://thermopresh.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: T.body,
                fontSize: "clamp(14px, 1.6vw, 15px)",
                color: T.link,
                textDecoration: "none",
              }}
            >
              Substack
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
