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

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { setTimeout(() => setVisible(true), 60); }, []);

  const go = (path) => { navigate(path); window.scrollTo(0, 0); };
  const featured = WORKS.filter((w) => w.featured);

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(96px, 15vh, 160px) max(16px, 5vw) clamp(56px, 8vw, 96px)",
          maxWidth: 860,
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Name + role inline */}
        <p
          style={{
            fontFamily: T.display,
            fontSize: "clamp(22px, 3.2vw, 30px)",
            fontWeight: 600,
            color: T.text,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            marginBottom: "clamp(28px, 5vw, 44px)",
          }}
        >
          Precious Ajayi{" "}
          <span style={{ fontWeight: 400, color: T.textMuted }}>
            — writer, researcher &amp; strategic&nbsp;operator
          </span>
        </p>

        {/* Thesis */}
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(34px, 6.5vw, 64px)",
            fontWeight: 400,
            color: T.text,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(28px, 5vw, 40px)",
            maxWidth: 780,
          }}
        >
          I research how organisations actually work — their behavioural assumptions,
          editorial architectures, stakeholder maps — and build systems that make complex
          ideas reach the right&nbsp;people.
        </h1>

        {/* Supporting line — single sentence, tight */}
        <p
          style={{
            fontFamily: T.body,
            fontSize: "clamp(16px, 2vw, 18px)",
            color: T.textMuted,
            lineHeight: 1.65,
            maxWidth: 520,
            marginBottom: "clamp(36px, 6vw, 52px)",
          }}
        >
          Two published books. Thirteen tailored grant proposals clearing $30,000. Executive
          operations for an infrastructure finance firm. Outreach systems producing verified
          replies from filmmakers, researchers and policy&nbsp;stakeholders.
        </p>

        {/* CTAs — airy spacing */}
        <div
          style={{
            display: "flex",
            gap: "clamp(10px, 1.6vw, 16px)",
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
              border: "none",
              padding: "15px 30px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              minHeight: 50,
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
              cursor: "pointer",
              whiteSpace: "nowrap",
              minHeight: 50,
            }}
          >
            Read the research
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SELECTED WORK
          ═══════════════════════════════════════════ */}
      <section
        style={{
          padding: "clamp(72px, 11vw, 120px) max(16px, 5vw)",
          background: T.bgAlt,
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "clamp(32px, 6vw, 52px)",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <h2
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(26px, 4.5vw, 38px)",
                  fontWeight: 500,
                  color: T.text,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                }}
              >
                Selected work.
                <br />
                <span style={{ color: T.textMuted, fontWeight: 400 }}>
                  Four projects that demonstrate&nbsp;range.
                </span>
              </h2>
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: "clamp(10px, 1.2vw, 11px)",
                  color: T.textMuted,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                Vol. I – IV
              </span>
            </div>
          </ScrollReveal>

          {/* Cards — 2-col grid, generous gaps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 430px), 1fr))",
              gap: "clamp(16px, 2vw, 24px)",
            }}
          >
            {featured.map((w, i) => (
              <ScrollReveal key={w.slug} delay={i * 70}>
                <article
                  onClick={() => go("/work")}
                  style={{
                    padding: "clamp(24px, 3.5vw, 36px) clamp(22px, 3vw, 30px)",
                    background: T.bg,
                    border: `1px solid transparent`,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                    minHeight: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = T.accentLight;
                    e.currentTarget.style.boxShadow = `0 1px 0 ${T.accent}, 0 4px 16px ${T.accentLight}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Top: proof badge + arrow */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "clamp(16px, 2vw, 20px)",
                    }}
                  >
                    <ProofBadge status={w.proof} />
                    <span
                      style={{
                        fontFamily: T.mono,
                        fontSize: "clamp(10px, 1.1vw, 11px)",
                        color: T.accent,
                        letterSpacing: "0.06em",
                        opacity: 0,
                        transition: "opacity 0.25s",
                      }}
                      className="card-arrow"
                    >
                      &rarr;
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: T.display,
                      fontSize: "clamp(20px, 2.6vw, 26px)",
                      fontWeight: 600,
                      color: T.text,
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                      marginBottom: 12,
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
                      marginBottom: 20,
                    }}
                  >
                    {w.description.length > 200
                      ? w.description.slice(0, 197) + "..."
                      : w.description}
                  </p>

                  {/* Read link */}
                  <span
                    style={{
                      fontFamily: T.mono,
                      fontSize: "clamp(10px, 1.2vw, 11px)",
                      fontWeight: 500,
                      color: T.link,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Examine case study &rarr;
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={280}>
            <button
              onClick={() => go("/work")}
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                fontWeight: 500,
                color: T.link,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                marginTop: "clamp(22px, 3vw, 32px)",
                padding: "8px 0",
              }}
            >
              All projects &rarr;
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CAPABILITY MAP
          ═══════════════════════════════════════════ */}
      <section
        style={{
          padding: "clamp(72px, 11vw, 120px) max(16px, 5vw)",
          background: T.bg,
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                fontWeight: 600,
                color: T.accent,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
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
                letterSpacing: "-0.01em",
                marginBottom: 10,
              }}
            >
              Every claim points to something&nbsp;specific.
            </h2>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "clamp(15px, 1.6vw, 16px)",
                color: T.textMuted,
                lineHeight: 1.6,
                marginBottom: "clamp(36px, 5vw, 48px)",
              }}
            >
              Not a list of skills. An index of verified&nbsp;applications.
            </p>
          </ScrollReveal>

          {/* Clean index layout */}
          <div>
            {CAPABILITIES.map((row, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "clamp(14px, 2vw, 20px) 0",
                    borderBottom: `1px solid ${T.accentLight}55`,
                    gap: "clamp(10px, 2vw, 24px)",
                  }}
                >
                  <div style={{ flex: "0 0 clamp(170px, 24vw, 230px)" }}>
                    <span
                      style={{
                        fontFamily: T.mono,
                        fontSize: "clamp(10px, 1.2vw, 11px)",
                        fontWeight: 600,
                        color: T.text,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        lineHeight: 1.5,
                      }}
                    >
                      {row.capability}
                    </span>
                  </div>
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

      {/* ═══════════════════════════════════════════
          CONTACT
          ═══════════════════════════════════════════ */}
      <section
        style={{
          padding: `0 max(16px, 5vw) clamp(56px, 9vw, 80px)`,
          maxWidth: 780,
          margin: "0 auto",
        }}
      >
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              gap: "clamp(16px, 3vw, 36px)",
              flexWrap: "wrap",
              alignItems: "baseline",
              borderTop: `1px solid ${T.accentLight}`,
              paddingTop: "clamp(28px, 4vw, 40px)",
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
                flexShrink: 0,
              }}
            >
              Contact
            </span>
            <a
              href="mailto:preciousayomide147@gmail.com"
              style={contactLink}
            >
              preciousayomide147@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/precious-ajayi-soul"
              target="_blank"
              rel="noopener noreferrer"
              style={contactLink}
            >
              LinkedIn
            </a>
            <a
              href="https://thermopresh.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={contactLink}
            >
              Substack
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Card hover arrow reveal */}
      <style>{`
        article:hover .card-arrow { opacity: 1 !important; }
      `}</style>
    </>
  );
}

const contactLink = {
  fontFamily: T.body,
  fontSize: "clamp(14px, 1.6vw, 15px)",
  color: T.link,
  textDecoration: "none",
};
