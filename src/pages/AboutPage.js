import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
import Badge from "../components/Badge";
import { BUILDING } from "../data/building";

export default function AboutPage() {
  return (
    <section style={{ padding: "120px 28px 80px", maxWidth: 840, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>About</Label>
        <h1
          style={{
            fontFamily: T.font,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
            color: T.text,
            marginBottom: 32,
          }}
        >
          The long version.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div style={{ maxWidth: 620, marginBottom: 48 }}>
          <p style={{ fontFamily: T.font, fontSize: 18, color: T.text, lineHeight: 1.8, marginBottom: 18 }}>
            I've always been drawn to the kind of writing that makes people pause — not because it's loud, but
            because it hits somewhere quiet. That's what I try to create: moments of recognition. Moments where
            something finally clicks.
          </p>
          <p style={{ fontFamily: T.font, fontSize: 17, color: T.textMuted, lineHeight: 1.8, marginBottom: 18 }}>
            I studied Agricultural Administration at FUNAAB. That might seem disconnected from what I do now,
            but it isn't. Agriculture is systems. It's inputs, outputs, decay, and timing. It's understanding
            that you can do everything right and still lose a harvest to something you couldn't see.
          </p>
          <p style={{ fontFamily: T.font, fontSize: 17, color: T.textMuted, lineHeight: 1.8, marginBottom: 18 }}>
            Today I work at the intersection of mathematical thinking, research synthesis, and editorial
            operations. I translate hard principles — Markov chains, game theory, entropy — into frameworks
            practitioners can use, and I do the same with raw evidence: behavioural datasets, funder narratives,
            published analysis. The output isn't always an essay. Sometimes it's a proposal, an audit, or a
            framework that has to hold up after I've moved on.
          </p>
          <p style={{ fontFamily: T.font, fontSize: 17, color: T.textMuted, lineHeight: 1.8 }}>
            The thread connecting all of it is language. Language as the mechanism that turns data into
            structure, funder scepticism into approved proposals, and scattered evidence into something a
            reader can act on — constraining possibility while revealing structure that would otherwise remain
            invisible.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <div
          style={{
            background: T.bgAlt,
            borderRadius: 14,
            padding: "32px 28px",
            marginBottom: 32,
          }}
        >
          <p
            style={{
              fontFamily: T.sans,
              fontSize: 12,
              fontWeight: 600,
              color: T.accent,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            What I'm Building
          </p>
          {BUILDING.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
                paddingBottom: 14,
                marginBottom: 14,
                borderBottom: i < BUILDING.length - 1 ? `1px solid ${T.border}` : "none",
              }}
            >
              <div>
                <p style={{ fontFamily: T.font, fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 2 }}>
                  {item.name}
                </p>
                <p style={{ fontFamily: T.font, fontSize: 14, color: T.textMuted }}>{item.desc}</p>
              </div>
              <Badge
                color={item.status === "Active" || item.status === "Live" ? "#2D6A4F" : T.textMuted}
                bg={item.status === "Active" || item.status === "Live" ? "#D8F3DC" : T.border}
              >
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={240}>
        <button
          style={{
            fontFamily: T.sans,
            fontSize: 13,
            fontWeight: 500,
            color: T.accent,
            border: `1.5px solid ${T.accent}`,
            padding: "12px 24px",
            borderRadius: 8,
            background: "transparent",
            cursor: "pointer",
          }}
        >
          ↓ Download CV (PDF)
        </button>
      </ScrollReveal>
    </section>
  );
}
