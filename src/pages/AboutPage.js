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
      {/* ── Two-column top: photo + intro ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "clamp(24px, 5vw, 48px)",
          marginBottom: "clamp(40px, 6vw, 56px)",
        }}
      >
        {/* Photo — stacks on top for mobile, sticky sidebar on desktop */}
        <ScrollReveal>
          <div
            style={{
              flex: "0 0 clamp(200px, 30vw, 260px)",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: 4,
                overflow: "hidden",
                border: `1px solid ${T.accentLight}`,
                background: T.bgAlt,
              }}
            >
              <img
                src="/my-photo.jpg"
                alt="Precious Ajayi"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Bio intro */}
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
                marginBottom: 16,
              }}
            >
              About
            </p>
            <h1
              style={{
                fontFamily: T.display,
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 500,
                color: T.text,
                lineHeight: 1.2,
                marginBottom: "clamp(18px, 2.5vw, 24px)",
              }}
            >
              About Precious Ajayi
            </h1>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: T.text,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              I am Precious Ajayi, a strategist, researcher, and writer based in Nigeria. My work
              focuses on helping organisations understand difficult problems, develop stronger
              positions, and turn research into decisions that can be acted on.
            </p>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "clamp(15px, 1.6vw, 17px)",
                color: T.textMuted,
                lineHeight: 1.75,
              }}
            >
              I work best with founders, executives, research teams, and organisations dealing with
              important questions that have not yet been properly defined. My strongest areas are
              research synthesis, strategic writing, market and organisational analysis, positioning,
              consumer decision research, and the design of practical systems for turning ideas into
              coordinated work.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Full bio ── */}
      <ScrollReveal delay={120}>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I currently work as Executive Assistant and Brand Manager to the Managing Director of
            Dutum Company Limited. My responsibilities cover executive research, brand strategy,
            corporate writing, opportunity development, operational reviews, and special projects.
            This has involved researching infrastructure finance and project bankability, reviewing
            business proposals, developing executive thought leadership, improving internal processes,
            and helping the organisation communicate its work more clearly.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            My work extends beyond a single industry. I have worked across construction, financial
            services, media, consulting, education, technology, and the creative sector. In each case,
            I tend to be brought into situations where there is useful information and plenty of
            activity, but the central argument, commercial direction, or execution plan is still
            unclear.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I help organisations determine what they are actually trying to achieve, what evidence
            supports their assumptions, where their current approach is weak, and what should be
            prioritised. The outcome may be a research report, positioning strategy, campaign,
            decision framework, proposal, operating process, executive article, or opportunity
            pipeline.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            A major part of my work is studying how people and organisations make decisions. I am
            interested in the conditions that shape trust, adoption, financial behaviour,
            organisational performance, and commercial action. This interest has informed research on
            savings behaviour, consumer decision-making, organisational agility, market positioning,
            infrastructure investment, and the development of new business models.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            For a project based on more than 26,000 responses about saving behaviour, I developed a
            five-state Markov model to examine how people move from financial uncertainty to more
            confident financial management. The project combined behavioural research, customer-state
            analysis, strategic frameworks, and an interactive simulation. I have also developed
            research-led campaign strategies for financial brands, examined how smaller organisations
            can remain strategically agile in an AI-shaped business environment, and reviewed
            emerging ventures to determine whether their promises are commercially credible and
            operationally realistic.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            Writing is central to how I work. I use it to clarify arguments, expose weak assumptions,
            connect evidence, and make complex subjects easier to understand. My experience includes
            strategic reports, business proposals, executive thought leadership, research papers,
            campaign narratives, essays, outreach, and editorial review. I have contributed to grant
            applications that secured more than $30,000 in funding and have produced more than 180
            research, strategy, and content assets across different organisations and projects.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I am particularly careful about the difference between a strong idea and a well-supported
            one. I do not believe that more frameworks, louder claims, or longer reports necessarily
            produce better strategy. Good work should explain what is happening, identify what
            matters, and show how the recommendation follows from the evidence available.
          </p>

          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: T.textMuted,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I am especially interested in African markets, financial services, infrastructure,
            technology, media, and the institutions that shape economic and social behaviour.
          </p>
        </div>
      </ScrollReveal>

      {/* ── Credentials ── */}
      <ScrollReveal delay={160}>
        <div
          style={{
            maxWidth: 680,
            margin: "36px auto 0",
            background: T.bgAlt,
            borderRadius: 6,
            padding: "clamp(22px, 3vw, 28px) clamp(20px, 3vw, 30px)",
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
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <p style={{ fontFamily: T.body, fontSize: "clamp(14px, 1.5vw, 15px)", color: T.text }}>
              B.Ag. in Agricultural Administration — FUNAAB
            </p>
            <p style={{ fontFamily: T.body, fontSize: "clamp(14px, 1.5vw, 15px)", color: T.text }}>
              ALX Africa Virtual Assistant Certification
            </p>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "clamp(14px, 1.5vw, 15px)",
                color: T.textMuted,
              }}
            >
              Author — <em>The Shape of Choice: Engineering Decision Spaces</em> and{" "}
              <em>Markov Chains for Marketing Decisions</em>, both published through Selar.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Methods statement ── */}
      <ScrollReveal delay={190}>
        <div
          style={{
            maxWidth: 680,
            margin: "28px auto 0",
            borderLeft: `3px solid ${T.accent}`,
            paddingLeft: "clamp(14px, 2vw, 20px)",
          }}
        >
          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(15px, 1.6vw, 16px)",
              color: T.text,
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            My work operates on one principle: every claim should point to something that can be
            examined. The proof classifications, evidence grades, and limitations disclosures
            throughout this site exist because credibility is built by showing what you know and what
            you don't — not by hiding the gaps.
          </p>
        </div>
      </ScrollReveal>

      {/* ── CV Download ── */}
      <ScrollReveal delay={220}>
        <div
          style={{
            maxWidth: 680,
            margin: "28px auto 0",
          }}
        >
          <a
            href="/precious-ajayi-cv.pdf"
            download
            style={{
              fontFamily: T.mono,
              fontSize: "clamp(11px, 1.2vw, 12px)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: T.white,
              background: T.text,
              padding: "14px 28px",
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              minHeight: 48,
            }}
          >
            ↓ Download CV (PDF)
          </a>
        </div>
      </ScrollReveal>

      {/* ── Contact ── */}
      <ScrollReveal delay={250}>
        <div
          style={{
            maxWidth: 680,
            margin: "28px auto 0",
            background: T.bgAlt,
            borderRadius: 6,
            padding: "clamp(22px, 3vw, 28px) clamp(20px, 3vw, 30px)",
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
            Contact
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a
              href="mailto:ajayithewriter@gmail.com"
              style={{
                fontFamily: T.body,
                fontSize: "clamp(14px, 1.5vw, 15px)",
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
                fontSize: "clamp(14px, 1.5vw, 15px)",
                color: T.link,
                textDecoration: "none",
              }}
            >
              linkedin.com/in/precious-ajayi-soul
            </a>
            <a
              href="https://thermopresh.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: T.body,
                fontSize: "clamp(14px, 1.5vw, 15px)",
                color: T.link,
                textDecoration: "none",
              }}
            >
              thermopresh.substack.com
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
