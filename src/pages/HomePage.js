import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
import Badge from "../components/Badge";
import WorkCard from "../components/WorkCard";
import WritingRow from "../components/WritingRow";
import { WORKS } from "../data/works";
import { WRITINGS } from "../data/writings";

const AREAS = [
  ["Mathematical Translation", "Probability theory → decision frameworks"],
  ["Research & Data Synthesis", "Behavioural datasets → structured analysis"],
  ["Editorial Strategy & Grants", "Funder scepticism → approved proposals"],
  ["Systems Thinking", "Structure in apparent chaos → working frameworks"],
];

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "110px 28px 80px",
          maxWidth: 840,
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(22px)",
          transition: "all 0.85s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <p
          style={{
            fontFamily: T.sans,
            fontSize: 12,
            fontWeight: 600,
            color: T.accent,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Precious Ajayi
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
          {["Research", "Editorial Strategy", "Operations"].map((a, i) => (
            <Badge key={i}>{a}</Badge>
          ))}
        </div>
        <h1
          style={{
            fontFamily: T.font,
            fontSize: "clamp(34px, 6vw, 58px)",
            fontWeight: 400,
            color: T.text,
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
            marginBottom: 26,
          }}
        >
          I turn evidence into
          <br />
          <span style={{ color: T.textMuted }}>things that work.</span>
        </h1>
        <p
          style={{
            fontFamily: T.font,
            fontSize: "clamp(17px, 2.2vw, 20px)",
            color: T.textMuted,
            lineHeight: 1.75,
            maxWidth: 560,
            marginBottom: 40,
          }}
        >
          I study how language and data move through systems — behavioural datasets, funder narratives,
          published analysis, belief systems. I turn what I find into publications, proposals, and frameworks
          that hold up under scrutiny. Sometimes that's a mathematical framework. Sometimes it's a 96-page
          analysis. Sometimes it's a strategy that changes how an organisation sees itself.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button
            onClick={() => go("/work")}
            style={{
              fontFamily: T.sans,
              fontSize: 13,
              fontWeight: 500,
              color: T.white,
              background: T.accent,
              padding: "13px 28px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            See my work
          </button>
          <a
            href="https://thermopresh.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: T.sans,
              fontSize: 13,
              fontWeight: 500,
              color: T.accent,
              border: `1.5px solid ${T.accent}`,
              padding: "12px 28px",
              borderRadius: 8,
              textDecoration: "none",
              background: "transparent",
            }}
          >
            Read my essays
          </a>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: "80px 28px", background: T.bgAlt }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <ScrollReveal>
            <Label>About</Label>
            <p
              style={{
                fontFamily: T.font,
                fontSize: "clamp(18px, 2.4vw, 22px)",
                color: T.text,
                lineHeight: 1.75,
                marginBottom: 18,
              }}
            >
              I've always been drawn to the kind of thinking that makes people pause — not because it's loud,
              but because it lands somewhere quiet.
            </p>
            <p
              style={{
                fontFamily: T.font,
                fontSize: "clamp(16px, 2vw, 18px)",
                color: T.textMuted,
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              My work sits at the intersection of mathematical thinking, research synthesis, and editorial
              operations. The thread connecting all of it is language — as the mechanism that turns raw data
              into structure, funder scepticism into approved proposals, and scattered evidence into something
              a reader can act on.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: 12,
              }}
            >
              {AREAS.map(([label, desc], i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 22px",
                    background: T.white,
                    borderRadius: 10,
                    border: `1px solid ${T.border}`,
                  }}
                >
                  <p style={{ fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 4 }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: T.font, fontSize: 13, color: T.textMuted, lineHeight: 1.5 }}>{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Work */}
      <section style={{ padding: "80px 28px", background: T.bg }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <ScrollReveal>
            <Label>Featured Work</Label>
            <h2
              style={{
                fontFamily: T.font,
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                color: T.text,
                marginBottom: 36,
              }}
            >
              One mind, many registers.
            </h2>
          </ScrollReveal>
          {WORKS.filter((w) => w.featured).map((w, i) => (
            <ScrollReveal key={w.slug} delay={i * 90}>
              <WorkCard work={w} />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={280}>
            <button
              onClick={() => go("/work")}
              style={{
                fontFamily: T.sans,
                fontSize: 13,
                fontWeight: 500,
                color: T.accent,
                background: "none",
                border: "none",
                cursor: "pointer",
                marginTop: 12,
              }}
            >
              View all work &rarr;
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Writing */}
      <section style={{ padding: "80px 28px", background: T.bgAlt }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <ScrollReveal>
            <Label>Writing</Label>
            <h2
              style={{
                fontFamily: T.font,
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                color: T.text,
                marginBottom: 6,
              }}
            >
              Ebbs and Flow
            </h2>
            <p
              style={{
                fontFamily: T.font,
                fontSize: 16,
                color: T.textMuted,
                marginBottom: 32,
                maxWidth: 460,
              }}
            >
              Personal essays on culture, identity, language, and what it means to think carefully in a noisy
              world.
            </p>
          </ScrollReveal>
          {WRITINGS.slice(0, 5).map((w, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <WritingRow item={w} />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={300}>
            <button
              onClick={() => go("/writing")}
              style={{
                fontFamily: T.sans,
                fontSize: 13,
                fontWeight: 500,
                color: T.accent,
                background: "none",
                border: "none",
                cursor: "pointer",
                marginTop: 20,
              }}
            >
              All essays &rarr;
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Connect CTA */}
      <section style={{ padding: "80px 28px", background: T.bg, textAlign: "center" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <ScrollReveal>
            <Label>Connect</Label>
            <h2
              style={{
                fontFamily: T.font,
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                color: T.text,
                marginBottom: 12,
              }}
            >
              Let's think together.
            </h2>
            <p
              style={{
                fontFamily: T.font,
                fontSize: 17,
                color: T.textMuted,
                maxWidth: 420,
                margin: "0 auto 32px",
              }}
            >
              I'm open to consulting, writing commissions, speaking, and conversations that go somewhere
              interesting.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => go("/connect")}
                style={{
                  fontFamily: T.sans,
                  fontSize: 13,
                  fontWeight: 500,
                  color: T.white,
                  background: T.accent,
                  padding: "13px 28px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Get in touch
              </button>
              <a
                href="https://www.linkedin.com/in/precious-ajayi-bb96b51b4/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: T.sans,
                  fontSize: 13,
                  fontWeight: 500,
                  color: T.accent,
                  border: `1.5px solid ${T.accent}`,
                  padding: "12px 28px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
