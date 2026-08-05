import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
    <section
      style={{
        padding: "clamp(100px, 14vh, 140px) max(16px, 5vw) clamp(64px, 10vw, 100px)",
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      {/* ═══════════════════════════════════════
          HEADER — photo + big statement
          ═══════════════════════════════════════ */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "clamp(28px, 5vw, 56px)",
          marginBottom: "clamp(56px, 9vw, 88px)",
          alignItems: "flex-start",
        }}
      >
        {/* Photo */}
        <ScrollReveal>
          <div
            style={{
              flex: "0 0 clamp(180px, 28vw, 240px)",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: 2,
                overflow: "hidden",
                border: `1px solid ${T.accentLight}88`,
                background: T.bgAlt,
              }}
            >
              <img
                src="/my-photo.jpg"
                alt="Precious Ajayi"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Statement */}
        <ScrollReveal delay={80}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                fontWeight: 600,
                color: T.accent,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              About
            </p>
            <h1
              style={{
                fontFamily: T.display,
                fontSize: "clamp(30px, 5.5vw, 52px)",
                fontWeight: 400,
                color: T.text,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Who even likes Writing, Strategy, Maths <span style={{ color: T.accent }}>&amp;</span>{" "}
              Marketing?
              <br />
              <span style={{ fontWeight: 600 }}>ME of course.</span>
            </h1>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "clamp(16px, 2vw, 19px)",
                color: T.textMuted,
                lineHeight: 1.7,
                maxWidth: 500,
              }}
            >
              I'm Precious Ajayi. Strategist, researcher, and writer based in Nigeria. I help
              organisations understand difficult problems, develop stronger positions, and turn
              research into decisions.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ═══════════════════════════════════════
          THE WORK — broken into rhythmic blocks
          ═══════════════════════════════════════ */}

      {/* Block 1: What I actually do */}
      <ScrollReveal>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            marginBottom: "clamp(48px, 8vw, 72px)",
            borderLeft: `3px solid ${T.accent}`,
            paddingLeft: "clamp(18px, 3vw, 28px)",
          }}
        >
          <p
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(10px, 1.2vw, 11px)",
              fontWeight: 600,
              color: T.accent,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            What I actually do
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.85,
              marginBottom: 18,
            }}
          >
            I currently work as Executive Assistant and Brand Manager to the Managing Director of
            Dutum Company Limited. Executive research, brand strategy, corporate writing, opportunity
            development, operational reviews, special projects. Infrastructure finance, project
            bankability, business proposals, executive thought leadership. Helping an organisation
            communicate its work more clearly.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.85,
            }}
          >
            But my work extends beyond any single industry. Construction, financial services, media,
            consulting, education, technology, the creative sector. In each case I'm brought into
            situations where there is useful information and plenty of activity — but the central
            argument, commercial direction, or execution plan is still unclear. I figure out what
            we're actually trying to achieve, what evidence supports our assumptions, where the
            approach is weak, and what should be prioritised.
          </p>
        </div>
      </ScrollReveal>

      {/* Block 2: The decision thing — pull quote style */}
      <ScrollReveal>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            marginBottom: "clamp(48px, 8vw, 72px)",
          }}
        >
          <p
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(10px, 1.2vw, 11px)",
              fontWeight: 600,
              color: T.accent,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Why I care about decisions
          </p>

          <p
            style={{
              fontFamily: T.display,
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 400,
              color: T.text,
              lineHeight: 1.5,
              fontStyle: "italic",
              marginBottom: 20,
            }}
          >
            A major part of my work is studying how people and organisations make decisions. The
            conditions that shape trust, adoption, financial behaviour, organisational performance,
            commercial action. If you don't understand how someone decides, you're just guessing at
            what will move them.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.85,
              marginBottom: 18,
            }}
          >
            This interest has shaped everything: research on savings behaviour, consumer
            decision-making, organisational agility, market positioning, infrastructure investment,
            new business models.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.85,
            }}
          >
            For a project based on more than 26,000 responses about saving behaviour, I developed a
            five-state Markov model to examine how people move from financial uncertainty to more
            confident financial management. Behavioural research, customer-state analysis, strategic
            frameworks, an interactive simulation. I've also developed research-led campaign
            strategies for financial brands, examined how smaller organisations can remain
            strategically agile in an AI-shaped business environment, and reviewed emerging ventures
            to determine whether their promises are commercially credible and operationally
            realistic.
          </p>
        </div>
      </ScrollReveal>

      {/* Block 3: Writing — with a stat line */}
      <ScrollReveal>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            marginBottom: "clamp(48px, 8vw, 72px)",
            background: T.bgAlt,
            padding: "clamp(24px, 4vw, 36px) clamp(22px, 3.5vw, 32px)",
          }}
        >
          <p
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(10px, 1.2vw, 11px)",
              fontWeight: 600,
              color: T.accent,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Writing is how I think
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.85,
              marginBottom: 24,
            }}
          >
            I use writing to clarify arguments, expose weak assumptions, connect evidence, and make
            complex subjects easier to understand. Strategic reports, business proposals, executive
            thought leadership, research papers, campaign narratives, essays, outreach, editorial
            review.
          </p>

          {/* Mini stat bar */}
          <div
            style={{
              display: "flex",
              gap: "clamp(20px, 5vw, 48px)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 600,
                  color: T.text,
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 4,
                }}
              >
                $30k+
              </span>
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: "clamp(10px, 1.2vw, 11px)",
                  color: T.textMuted,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Grant funding secured
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 600,
                  color: T.text,
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 4,
                }}
              >
                180+
              </span>
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: "clamp(10px, 1.2vw, 11px)",
                  color: T.textMuted,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Research &amp; strategy assets
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 600,
                  color: T.text,
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 4,
                }}
              >
                2
              </span>
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: "clamp(10px, 1.2vw, 11px)",
                  color: T.textMuted,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Published books
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Block 4: What I believe — centered, quiet */}
      <ScrollReveal>
        <div
          style={{
            maxWidth: 580,
            margin: "0 auto",
            marginBottom: "clamp(48px, 8vw, 72px)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "clamp(24px, 3vw, 36px)",
              height: 2,
              background: T.accent,
              margin: "0 auto 24px",
            }}
          />
          <p
            style={{
              fontFamily: T.display,
              fontSize: "clamp(19px, 2.6vw, 24px)",
              fontWeight: 400,
              color: T.text,
              lineHeight: 1.6,
              fontStyle: "italic",
              marginBottom: 16,
            }}
          >
            I am particularly careful about the difference between a strong idea and a
            well-supported one. More frameworks, louder claims, or longer reports do not necessarily
            produce better strategy. Good work explains what is happening, identifies what matters,
            and shows how the recommendation follows from the evidence.
          </p>
          <div
            style={{
              width: "clamp(24px, 3vw, 36px)",
              height: 2,
              background: T.accent,
              margin: "16px auto 0",
            }}
          />
        </div>
      </ScrollReveal>

      {/* Block 5: Who I work with */}
      <ScrollReveal>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            marginBottom: "clamp(48px, 8vw, 72px)",
          }}
        >
          <p
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(10px, 1.2vw, 11px)",
              fontWeight: 600,
              color: T.accent,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Who I work best with
          </p>
          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.85,
              marginBottom: 18,
            }}
          >
            Founders, executives, research teams, and organisations dealing with important questions
            that have not yet been properly defined. Investigating a market, clarifying an
            organisation's position, understanding customer behaviour, evaluating a proposal,
            developing a body of thought, or building the research foundation for a new initiative.
          </p>
          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.85,
            }}
          >
            My strongest areas are research synthesis, strategic writing, market and organisational
            analysis, positioning, consumer decision research, and the design of practical systems
            for turning ideas into coordinated work. I am especially interested in African markets,
            financial services, infrastructure, technology, media, and the institutions that shape
            economic and social behaviour.
          </p>
        </div>
      </ScrollReveal>

      {/* ── Credentials + CV + Contact cluster ── */}
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(14px, 2vw, 20px)",
        }}
      >
        {/* Credentials */}
        <ScrollReveal>
          <div
            style={{
              background: T.bgAlt,
              padding: "clamp(20px, 3vw, 28px) clamp(18px, 2.5vw, 24px)",
            }}
          >
            <p
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                fontWeight: 600,
                color: T.accent,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Credentials
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ fontFamily: T.body, fontSize: "clamp(13px, 1.4vw, 14px)", color: T.text, lineHeight: 1.6 }}>
                B.Ag. Agricultural Administration — FUNAAB
              </p>
              <p style={{ fontFamily: T.body, fontSize: "clamp(13px, 1.4vw, 14px)", color: T.text, lineHeight: 1.6 }}>
                ALX Africa Virtual Assistant Certification
              </p>
              <p style={{ fontFamily: T.body, fontSize: "clamp(13px, 1.4vw, 14px)", color: T.textMuted, lineHeight: 1.6 }}>
                Author of <em>The Shape of Choice</em> and <em>Markov Chains for Marketing Decisions</em>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CV + Contact */}
        <ScrollReveal delay={60}>
          <div
            style={{
              background: T.bgAlt,
              padding: "clamp(20px, 3vw, 28px) clamp(18px, 2.5vw, 24px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: T.mono,
                  fontSize: "clamp(10px, 1.2vw, 11px)",
                  fontWeight: 600,
                  color: T.accent,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                <a
                  href="mailto:preciousayomide147@gmail.com"
                  style={contactStyle}
                >
                  preciousayomide147@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/precious-ajayi-soul"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={contactStyle}
                >
                  LinkedIn
                </a>
                <a
                  href="https://thermopresh.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={contactStyle}
                >
                  Substack
                </a>
              </div>
            </div>

            <a
              href="/precious-ajayi-cv.pdf"
              download
              style={{
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.2vw, 11px)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: T.white,
                background: T.text,
                padding: "14px 24px",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
                alignSelf: "flex-start",
                minHeight: 48,
              }}
            >
              ↓ Download CV (PDF)
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const contactStyle = {
  fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "clamp(13px, 1.4vw, 14px)",
  color: "#1A365D",
  textDecoration: "none",
};
