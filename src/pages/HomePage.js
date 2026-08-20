import { Link } from "react-router-dom";
import CaseStudyCard from "../components/CaseStudyCard";
import EngagementGrid from "../components/EngagementGrid";
import Label from "../components/Label";
import MethodTimeline from "../components/MethodTimeline";
import MetricStrip from "../components/MetricStrip";
import ProofPanel from "../components/ProofPanel";
import ScrollReveal from "../components/ScrollReveal";
import { CASE_STUDIES } from "../data/caseStudies";
import { PROOF_ARTIFACTS } from "../data/proofArtifacts";
import { METHOD_STEPS, POSITIONING, PROOF_METRICS, SELECTED_ENGAGEMENTS } from "../data/siteContent";

const featuredStudies = CASE_STUDIES.filter((study) =>
  ["piggyvest-decision-model", "limpiar-grant-proposals", "dutum-editorial-research-system", "elomiran-creator-outreach"].includes(
    study.slug
  )
);

const ROUTES = [
  ["01", "Work", "/work"],
  ["02", "Research", "/research"],
  ["03", "Writing", "/writing"],
  ["04", "Products", "/products"],
];

export default function HomePage() {
  return (
    <>
      <section className="home-opening">
        <div className="opening-index" aria-hidden="true">PA / 2026 / 00</div>
        <ScrollReveal>
          <p className="opening-kicker">{POSITIONING.title}</p>
          <h1>
            <span>Work that</span>
            <span className="opening-accent">holds up.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={90}>
          <div className="opening-bottom">
            <p>{POSITIONING.heroSubheading}</p>
            <div className="route-list" aria-label="Explore the portfolio">
              {ROUTES.map(([number, label, to]) => (
                <Link key={to} to={to}>
                  <span>{number}</span>{label}<b aria-hidden="true">↗</b>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="home-statement page-band page-band--concrete">
        <ScrollReveal>
          <p className="section-number">01 / ENTRY NOTE</p>
          <div className="statement-layout">
            <h2>{POSITIONING.identity}</h2>
            <p>{POSITIONING.undercurrent}</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="home-evidence page-band page-band--yellow">
        <ScrollReveal>
          <div className="band-heading">
            <Label>Evidence run</Label>
            <p>Measured outcomes, reported outcomes, publishing and live implementation—kept visibly distinct.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={70}>
          <MetricStrip metrics={PROOF_METRICS} />
        </ScrollReveal>
      </section>

      <section className="home-work page-band page-band--petrol">
        <ScrollReveal>
          <div className="band-heading band-heading--light">
            <Label>Selected work</Label>
            <h2>Situations where the thinking had to become useful.</h2>
          </div>
        </ScrollReveal>
        <div className="home-case-grid">
          {featuredStudies.map((study, index) => (
            <ScrollReveal key={study.slug} delay={index * 60}>
              <CaseStudyCard study={study} compact index={index + 1} />
            </ScrollReveal>
          ))}
        </div>
        <Link className="route-link route-link--light" to="/work">All selected work <span>↗</span></Link>
      </section>

      <section className="home-artifacts page-band page-band--green">
        <ScrollReveal>
          <div className="band-heading">
            <Label>Working material</Label>
            <h2>The artifacts are part of the argument.</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={70}>
          <ProofPanel artifacts={PROOF_ARTIFACTS.slice(0, 3)} />
        </ScrollReveal>
      </section>

      <section className="home-method page-band page-band--rust">
        <div className="method-layout">
          <ScrollReveal>
            <div className="band-heading band-heading--light">
              <Label>Route</Label>
              <h2>From too much material to a move someone can make.</h2>
              <p>The form changes—brief, proposal, editorial system, outreach programme—but the standard stays intact.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={70}>
            <MethodTimeline steps={METHOD_STEPS} />
          </ScrollReveal>
        </div>
      </section>

      <section className="home-engagements page-band page-band--concrete">
        <ScrollReveal>
          <div className="band-heading">
            <Label>What I can carry</Label>
            <h2>Bring the problem, the pressure and the material.</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={70}>
          <EngagementGrid items={SELECTED_ENGAGEMENTS} />
        </ScrollReveal>
      </section>
    </>
  );
}
