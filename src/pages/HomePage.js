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
          01 — HERO
          ═══════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "88vh",
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
        {/* Section number */}
        <span
          style={{
            fontFamily: T.mono,
            fontSize: "clamp(10px, 1.2vw, 11px)",
            color: T.accent,
            letterSpacing: "0.15em",
            marginBottom: "clamp(32px, 6vw, 52px)",
          }}
        >
          01
        </span>

        {/* Name — confident, standalone */}
        <p
          style={{
            fontFamily: T.display,
            fontSize: "clamp(42px, 8vw, 80px)",
            fontWeight: 600,
            color: T.text,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "clamp(10px, 1.5vw, 16px)",
          }}
        >
          Precious Ajayi
        </p>

        {/* Role line — understated below the name */}
        <p
          style={{
            fontFamily: T.body,
            fontSize: "clamp(16px, 2vw, 20px)",
            color: T.textMuted,
            lineHeight: 1.5,
            marginBottom: "clamp(36px, 6vw, 52px)",
          }}
        >
          Writer, researcher &amp; strategic operator
        </p>

        {/* Thesis — the core argument */}
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(26px, 4.5vw, 48px)",
            fontWeight: 400,
            color: T.text,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            marginBottom: "clamp(24px, 4vw, 36px)",
            maxWidth: 740,
          }}
        >
          I research how organisations actually work — and build systems that make complex ideas
          reach the right&nbsp;people.
        </h1>

        {/* Deck */}
        <p
          style={{
            fontFamily: T.body,
            fontSize: "clamp(16px, 1.8vw, 18px)",
            color: T.textMuted,
            lineHeight: 1.7,
            maxWidth: 520,
            marginBottom: "clamp(40px, 6vw, 56px)",
          }}
        >
          Two published books. Thirteen tailored grant proposals clearing $30,000. Executive
          operations for an infrastructure finance firm. Outreach systems producing verified replies
          from filmmakers, researchers and policy&nbsp;stakeholders.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "clamp(10px, 1.6vw, 16px)", flexWrap: "wrap" }}>
          <button onClick={() => go("/work")} style={filledBtn}>
            See the work
          </button>
          <button onClick={() => go("/research")} style={outlinedBtn}>
            Read the research
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          02 — SELECTED WORK
          ═══════════════════════════════════════════ */}
      <section
        style={{
          padding: "clamp(80px, 12vw, 128px) max(16px, 5vw)",
          background: T.bgAlt,
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <ScrollReveal>
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                color: T.accent,
                letterSpacing: "0.15em",
                display: "block",
                marginBottom: "clamp(22px, 3vw, 32px)",
              }}
            >
              02
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "clamp(36px, 6vw, 56px)",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <h2
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(28px, 5vw, 42px)",
                  fontWeight: 500,
                  color: T.text,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                }}
              >
                Selected work
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
                Four projects that demonstrate range
              </span>
            </div>
          </ScrollReveal>

          {/* Cards */}
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
                  className="work-card"
                  style={{
                    padding: "clamp(26px, 3.5vw, 38px) clamp(22px, 3vw, 32px)",
                    background: T.bg,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.3s, transform 0.3s",
                    minHeight: "100%",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 1px ${T.accent}, 0 8px 32px ${T.accentLight}66`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    const arrow = e.currentTarget.querySelector(".card-arrow");
                    if (arrow) arrow.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "none";
                    const arrow = e.currentTarget.querySelector(".card-arrow");
                    if (arrow) arrow.style.opacity = "0";
                  }}
                >
                  {/* Top line: proof badge + arrow */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "clamp(18px, 2.5vw, 24px)",
                    }}
                  >
                    <ProofBadge status={w.proof} />
                    <span
                      className="card-arrow"
                      style={{
                        fontFamily: T.mono,
                        fontSize: "clamp(10px, 1.1vw, 11px)",
                        color: T.accent,
                        letterSpacing: "0.06em",
                        opacity: 0,
                        transition: "opacity 0.25s",
                      }}
                    >
                      &rarr;
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: T.display,
                      fontSize: "clamp(20px, 2.8vw, 28px)",
                      fontWeight: 600,
                      color: T.text,
                      lineHeight: 1.22,
                      letterSpacing: "-0.01em",
                      marginBottom: 14,
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
                      lineHeight: 1.75,
                      flex: 1,
                      marginBottom: 22,
                    }}
                  >
                    {w.description.length > 200
                      ? w.description.slice(0, 197) + "..."
                      : w.description}
                  </p>

                  {/* CTA */}
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
                marginTop: "clamp(24px, 3.5vw, 36px)",
                padding: "8px 0",
              }}
            >
              All projects &rarr;
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          03 — CAPABILITY MAP
          ═══════════════════════════════════════════ */}
      <section
        style={{
          padding: "clamp(80px, 12vw, 128px) max(16px, 5vw)",
          background: T.bg,
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <ScrollReveal>
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                color: T.accent,
                letterSpacing: "0.15em",
                display: "block",
                marginBottom: "clamp(22px, 3vw, 32px)",
              }}
            >
              03
            </span>
            <h2
              style={{
                fontFamily: T.display,
                fontSize: "clamp(26px, 4vw, 38px)",
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
                marginBottom: "clamp(40px, 6vw, 60px)",
                maxWidth: 480,
              }}
            >
              Not a list of skills. An index of verified applications — capability mapped directly to
              evidence.
            </p>
          </ScrollReveal>

          {/* Index */}
          <div>
            {CAPABILITIES.map((row, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "clamp(16px, 2.2vw, 22px) 0",
                    borderBottom: `1px solid ${T.accentLight}44`,
                    gap: "clamp(12px, 2vw, 28px)",
                    alignItems: "baseline",
                  }}
                >
                  {/* Left: index number */}
                  <span
                    style={{
                      fontFamily: T.mono,
                      fontSize: "clamp(9px, 1vw, 10px)",
                      color: T.accent,
                      flexShrink: 0,
                      width: 20,
                    }}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </span>

                  {/* Capability */}
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

      {/* ═══════════════════════════════════════════
          04 — CONTACT
          ═══════════════════════════════════════════ */}
      <section
        style={{
          padding: `0 max(16px, 5vw) clamp(64px, 10vw, 88px)`,
          maxWidth: 780,
          margin: "0 auto",
        }}
      >
        <ScrollReveal>
          <span
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(10px, 1.2vw, 11px)",
              color: T.accent,
              letterSpacing: "0.15em",
              display: "block",
              marginBottom: "clamp(20px, 3vw, 28px)",
            }}
          >
            04
          </span>
          <div
            style={{
              display: "flex",
              gap: "clamp(16px, 3.5vw, 40px)",
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
              Get in touch
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
    </>
  );
}

/* ── Shared styles ── */

const filledBtn = {
  fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
  fontSize: "clamp(11px, 1.3vw, 12px)",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#FAF8F5",
  background: "#0A1628",
  border: "none",
  padding: "15px 30px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  minHeight: 50,
};

const outlinedBtn = {
  ...filledBtn,
  color: "#0A1628",
  background: "transparent",
  border: "1.5px solid #C4973B",
  padding: "14px 28px",
};

const contactLink = {
  fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "clamp(14px, 1.6vw, 15px)",
  color: "#1A365D",
  textDecoration: "none",
};
