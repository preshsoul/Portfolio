import { Link } from "react-router-dom";
import T from "../lib/tokens";
import CaseStudyCard from "../components/CaseStudyCard";
import EngagementGrid from "../components/EngagementGrid";
import Label from "../components/Label";
import MethodTimeline from "../components/MethodTimeline";
import MetricStrip from "../components/MetricStrip";
import ScrollReveal from "../components/ScrollReveal";
import { CASE_STUDIES } from "../data/caseStudies";
import { METHOD_STEPS, POSITIONING, PROOF_METRICS, SELECTED_ENGAGEMENTS } from "../data/siteContent";

const featuredStudies = CASE_STUDIES.filter((study) =>
  ["piggyvest-decision-model", "limpiar-grant-proposals", "dutum-editorial-research-system", "elomiran-creator-outreach"].includes(
    study.slug
  )
);

export default function HomePage() {
  return (
    <>
      <section style={{ padding: "132px 28px 86px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(280px, 0.85fr)",
            gap: 42,
            alignItems: "end",
          }}
          className="hero-grid"
        >
          <ScrollReveal>
            <p
              style={{
                fontFamily: T.mono,
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: T.link,
                marginBottom: 18,
              }}
            >
              {POSITIONING.title}
            </p>
            <h1
              style={{
                fontFamily: T.display,
                fontSize: "clamp(48px, 8vw, 104px)",
                lineHeight: 0.92,
                letterSpacing: "-0.055em",
                color: T.text,
                maxWidth: 920,
                marginBottom: 24,
                fontWeight: 650,
              }}
            >
              {POSITIONING.heroHeadline}
            </h1>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.7,
                color: T.textMuted,
                maxWidth: 760,
                marginBottom: 30,
              }}
            >
              {POSITIONING.heroSubheading}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="primary-cta" to="/work">
                View selected work
              </Link>
              <Link className="secondary-cta" to="/research">
                Read books and essays
              </Link>
              <Link className="secondary-cta" to="/connect">
                Start a conversation
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <aside
              style={{
                padding: "clamp(26px, 4vw, 36px)",
                borderRadius: 28,
                background: T.text,
                color: T.bg,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "rgba(232, 213, 168, 0.18)",
                  top: -88,
                  right: -80,
                }}
              />
              <p
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(27px, 4vw, 42px)",
                  lineHeight: 1.1,
                  marginBottom: 22,
                  position: "relative",
                }}
              >
                {POSITIONING.identity}
              </p>
              <p
                style={{
                  fontFamily: T.body,
                  fontSize: 15,
                  lineHeight: 1.75,
                  opacity: 0.82,
                  position: "relative",
                }}
              >
                {POSITIONING.undercurrent}
              </p>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section style={sectionStyle}>
        <ScrollReveal>
          <Label>Proof strip</Label>
          <h2 style={headingStyle}>Claims with qualifications.</h2>
          <p style={introStyle}>
            The portfolio separates measured outcomes, reported outcomes, published intellectual work and live implementation.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <MetricStrip metrics={PROOF_METRICS} />
        </ScrollReveal>
      </section>

      <section style={sectionStyle}>
        <ScrollReveal>
          <Label>Selected work</Label>
          <h2 style={headingStyle}>Five situations where the work had to become usable.</h2>
          <p style={introStyle}>
            Each case study shows the real situation, the tension inside it, the work done, the evidence or artifact boundary and what changed.
          </p>
        </ScrollReveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
            marginTop: 30,
          }}
        >
          {featuredStudies.map((study, index) => (
            <ScrollReveal key={study.slug} delay={index * 60}>
              <CaseStudyCard study={study} compact />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={280}>
          <Link className="text-link" to="/work" style={{ marginTop: 24, display: "inline-block" }}>
            See all selected work &rarr;
          </Link>
        </ScrollReveal>
      </section>

      <section style={sectionStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.8fr) minmax(300px, 1fr)",
            gap: 42,
            alignItems: "start",
          }}
          className="two-column"
        >
          <ScrollReveal>
            <Label>Method</Label>
            <h2 style={headingStyle}>The work sits between research and execution.</h2>
            <p style={introStyle}>
              The form changes—brief, proposal, editorial system, outreach programme—but the standard remains the same: the claim must be traceable to evidence.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <MethodTimeline steps={METHOD_STEPS} />
          </ScrollReveal>
        </div>
      </section>

      <section style={sectionStyle}>
        <ScrollReveal>
          <Label>Selected engagements</Label>
          <h2 style={headingStyle}>The kind of work this portfolio is built to attract.</h2>
          <p style={introStyle}>
            Tell me what decision, audience or body of work you are trying to move.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <EngagementGrid items={SELECTED_ENGAGEMENTS} />
        </ScrollReveal>
      </section>
    </>
  );
}

const sectionStyle = {
  padding: "76px 28px",
  maxWidth: 1120,
  margin: "0 auto",
};

const headingStyle = {
  fontFamily: T.display,
  fontSize: "clamp(34px, 5vw, 58px)",
  lineHeight: 1,
  letterSpacing: "-0.035em",
  color: T.text,
  maxWidth: 760,
  marginBottom: 16,
  fontWeight: 620,
};

const introStyle = {
  fontFamily: T.body,
  fontSize: 17,
  color: T.textMuted,
  lineHeight: 1.75,
  maxWidth: 720,
  marginBottom: 28,
};
