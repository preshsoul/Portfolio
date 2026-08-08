import T from "../lib/tokens";
import Label from "../components/Label";
import ScrollReveal from "../components/ScrollReveal";
import { METHOD_STEPS, POSITIONING } from "../data/siteContent";

const TIMELINE = [
  ["2026–present", "Executive Assistant & Brand Manager to the MD, Dutum Company Limited"],
  ["2025–present", "Research, editorial and outreach work through Elómiran Consult"],
  ["2025", "Grant writer, Limpiar — 13 proposals in five weeks; $30,000+ approved"],
  ["2025–2026", "Independent research and publishing — The Shape of Choice and Markov Chains for Marketing Decisions"],
  ["Earlier work", "Content strategy, SDR research, grant writing and campaign coordination across financial services, media and creative businesses"],
];

const CREDENTIALS = [
  "B.Ag. Agricultural Administration, FUNAAB — Second Class Upper",
  "ALX Virtual Assistant Certification",
  "Author, The Shape of Choice and Markov Chains for Marketing Decisions",
];

export default function AboutPage() {
  return (
    <section style={{ padding: "120px 28px 88px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) 260px",
              gap: 42,
              alignItems: "start",
            }}
            className="about-grid"
          >
            <div>
              <Label>About</Label>
              <h1
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(42px, 7vw, 78px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.045em",
                  color: T.text,
                  marginBottom: 24,
                  maxWidth: 760,
                }}
              >
                I work where research, writing and operations meet.
              </h1>
              <div style={{ display: "grid", gap: 18, maxWidth: 740 }}>
                <p style={leadStyle}>
                  I am Precious Ajayi, a researcher, strategist and writer based in Lagos, Nigeria. My work helps organisations move from a loose body of information to a position they can explain and act on.
                </p>
                <p style={bodyStyle}>
                  At Dutum Company Limited, I support the Managing Director across executive research, infrastructure and bankability analysis, corporate editorial systems, proposals and operating reviews. Outside that role, I have built grant proposals, analysed financial-behaviour data, designed creator-outreach systems and published books on decision-making.
                </p>
                <p style={bodyStyle}>
                  I am interested in how people, organisations and markets make decisions under pressure: what they trust, what they delay, what they cannot yet see, and what a better system would require. I write because it is the most reliable way I know to test an argument before asking anyone else to act on it.
                </p>
              </div>
            </div>
            <img
              src="/my-photo.jpg"
              alt="Precious Ajayi"
              style={{
                width: "100%",
                borderRadius: 28,
                border: `1px solid ${T.border}`,
                background: T.cardAlt,
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <blockquote
            style={{
              margin: "56px 0",
              padding: "clamp(28px, 5vw, 48px)",
              borderRadius: 28,
              background: T.text,
              color: T.bg,
              fontFamily: T.display,
              fontSize: "clamp(28px, 4vw, 46px)",
              lineHeight: 1.12,
            }}
          >
            I care about the part of work that tends to disappear in a slide deck: the hesitation before a decision, the language that makes people feel recognised, and the practical frictions that decide whether a good plan survives contact with real life.
          </blockquote>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(300px, 1fr)",
            gap: 46,
            alignItems: "start",
          }}
          className="two-column"
        >
          <ScrollReveal>
            <section style={panelStyle}>
              <h2 style={sectionHeading}>Career timeline</h2>
              <div style={{ display: "grid", gap: 18 }}>
                {TIMELINE.map(([date, text]) => (
                  <div
                    key={date}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "120px 1fr",
                      gap: 16,
                      borderBottom: `1px solid ${T.border}`,
                      paddingBottom: 16,
                    }}
                    className="timeline-row"
                  >
                    <p style={{ fontFamily: T.mono, fontSize: 12, color: T.link }}>{date}</p>
                    <p style={{ fontFamily: T.body, fontSize: 15, color: T.textMuted, lineHeight: 1.65 }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <div style={{ display: "grid", gap: 18 }}>
            <ScrollReveal delay={80}>
              <section style={panelStyle}>
                <h2 style={sectionHeading}>What I actually do</h2>
                <ul style={listStyle}>
                  {METHOD_STEPS.map((step) => (
                    <li key={step.title}>
                      <strong>{step.title}</strong> {step.body}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <section style={panelStyle}>
                <h2 style={sectionHeading}>Credentials</h2>
                <ul style={listStyle}>
                  {CREDENTIALS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="primary-cta" href="/precious-ajayi-cv.pdf" style={{ marginTop: 18 }}>
                  Download CV
                </a>
              </section>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={180}>
          <section style={{ ...panelStyle, marginTop: 22 }}>
            <h2 style={sectionHeading}>Contact</h2>
            <p style={{ ...bodyStyle, marginBottom: 18 }}>{POSITIONING.footerBio}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="secondary-cta" href="mailto:preciousayomide147@gmail.com">
                Email
              </a>
              <a className="secondary-cta" href="https://www.linkedin.com/in/precious-ajayi-soul" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="secondary-cta" href="https://thermopresh.substack.com" target="_blank" rel="noopener noreferrer">
                Substack
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </section>
  );
}

const leadStyle = {
  fontFamily: T.body,
  fontSize: 20,
  color: T.text,
  lineHeight: 1.75,
};

const bodyStyle = {
  fontFamily: T.body,
  fontSize: 16,
  color: T.textMuted,
  lineHeight: 1.8,
};

const panelStyle = {
  padding: "clamp(26px, 4vw, 36px)",
  borderRadius: 24,
  border: `1px solid ${T.border}`,
  background: T.card,
};

const sectionHeading = {
  fontFamily: T.display,
  fontSize: "clamp(28px, 4vw, 38px)",
  color: T.text,
  marginBottom: 18,
};

const listStyle = {
  display: "grid",
  gap: 12,
  paddingLeft: 20,
  fontFamily: T.body,
  fontSize: 15,
  color: T.textMuted,
  lineHeight: 1.75,
};
