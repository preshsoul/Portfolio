import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
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

  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  const featured = WORKS.filter((w) => w.featured);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 28px 80px",
          maxWidth: 960,
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(22px)",
          transition: "all 0.85s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <p
          style={{
            fontFamily: T.mono,
            fontSize: 12,
            fontWeight: 500,
            color: T.accent,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Writer, Researcher &amp; Strategic Operator
        </p>

        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 400,
            color: T.text,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          I research how organisations actually work — their behavioural assumptions, editorial architectures,
          stakeholder maps — and build systems that make complex ideas reach the right people.
        </h1>

        <p
          style={{
            fontFamily: T.body,
            fontSize: "clamp(16px, 2vw, 18px)",
            color: T.textMuted,
            lineHeight: 1.75,
            maxWidth: 600,
            marginBottom: 40,
          }}
        >
          Two published books. Thirteen tailored grant proposals clearing $30,000. Executive operations for
          an infrastructure finance firm. Outreach systems producing verified replies from filmmakers,
          researchers and policy stakeholders.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <button
            onClick={() => go("/work")}
            style={{
              fontFamily: T.mono,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: T.white,
              background: T.text,
              padding: "14px 28px",
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
            }}
          >
            See the work
          </button>
          <button
            onClick={() => go("/research")}
            style={{
              fontFamily: T.mono,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: T.text,
              background: "transparent",
              border: `1.5px solid ${T.accent}`,
              padding: "13px 28px",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Read the research
          </button>
        </div>
      </section>

      {/* Featured Work */}
      <section style={{ padding: "80px 28px", background: T.bgAlt, borderTop: `1px solid ${T.accentLight}4D` }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
              <div>
                <Label>Selected Work</Label>
                <h2
                  style={{
                    fontFamily: T.display,
                    fontSize: "clamp(26px, 3.5vw, 36px)",
                    fontWeight: 500,
                    color: T.text,
                  }}
                >
                  Four projects that demonstrate range.
                </h2>
              </div>
              <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textMuted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Vol. I–IV
              </span>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
              gap: 20,
            }}
          >
            {featured.map((w, i) => (
              <ScrollReveal key={w.slug} delay={i * 80}>
                <div
                  onClick={() => go(`/work`)}
                  style={{
                    padding: "30px 28px",
                    background: T.white,
                    borderRadius: 6,
                    border: `1px solid ${T.accentLight}66`,
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${T.accentLight}66`; }}
                >
                  <div style={{ marginBottom: 12 }}>
                    <ProofBadge status={w.proof} />
                  </div>
                  <h3
                    style={{
                      fontFamily: T.display,
                      fontSize: 22,
                      fontWeight: 600,
                      color: T.text,
                      lineHeight: 1.3,
                      marginBottom: 10,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: T.body,
                      fontSize: 15,
                      color: T.textMuted,
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {w.description.length > 160 ? w.description.slice(0, 157) + "..." : w.description}
                  </p>
                  <span
                    style={{
                      fontFamily: T.mono,
                      fontSize: 11,
                      color: T.link,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: 16,
                      display: "inline-block",
                    }}
                  >
                    Examine case study &rarr;
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <button
              onClick={() => go("/work")}
              style={{
                fontFamily: T.mono,
                fontSize: 12,
                fontWeight: 500,
                color: T.link,
                background: "none",
                border: "none",
                cursor: "pointer",
                marginTop: 24,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              All projects &rarr;
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Capability-to-Evidence Map */}
      <section style={{ padding: "80px 28px", background: T.bg }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <ScrollReveal>
            <Label>Capability-to-Evidence Map</Label>
            <h2
              style={{
                fontFamily: T.display,
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontWeight: 500,
                color: T.text,
                marginBottom: 12,
              }}
            >
              Every claim points to something specific.
            </h2>
            <p
              style={{
                fontFamily: T.body,
                fontSize: 16,
                color: T.textMuted,
                marginBottom: 40,
                maxWidth: 540,
              }}
            >
              This is not a list of skills. It is an index of verified applications.
            </p>
          </ScrollReveal>

          <div style={{ borderTop: `1px solid ${T.accentLight}` }}>
            {CAPABILITIES.map((row, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div
                  style={{
                    display: "flex",
                    padding: "16px 0",
                    borderBottom: `1px solid ${T.accentLight}66`,
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ minWidth: 200, flex: "0 0 220px" }}>
                    <span
                      style={{
                        fontFamily: T.mono,
                        fontSize: 12,
                        fontWeight: 600,
                        color: T.text,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {row.capability}
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontFamily: T.body, fontSize: 15, color: T.textMuted }}>
                      {row.evidence}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section style={{ padding: "48px 28px 64px", background: T.bg }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
                alignItems: "baseline",
                borderTop: `1px solid ${T.accentLight}`,
                paddingTop: 32,
              }}
            >
              <span style={{ fontFamily: T.mono, fontSize: 11, fontWeight: 500, color: T.textMuted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Contact
              </span>
              <a
                href="mailto:ajayithewriter@gmail.com"
                style={{
                  fontFamily: T.body,
                  fontSize: 15,
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
                  fontSize: 15,
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
                  fontSize: 15,
                  color: T.link,
                  textDecoration: "none",
                }}
              >
                Substack
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
