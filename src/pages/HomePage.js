import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import GatheringSituation from "../components/GatheringSituation";
import HeroMaterialField from "../components/HeroMaterialField";
import QuickAnswers from "../components/QuickAnswers";
import ScrollReveal from "../components/ScrollReveal";
import ThinkingField from "../components/ThinkingField";
import { CASE_STUDIES } from "../data/caseStudies";

const getStudy = (slug) => CASE_STUDIES.find((study) => study.slug === slug);

const selectedSituations = [
  {
    study: getStudy("limpiar-grant-proposals"), title: "Limpiar",
    headline: "Thirteen tailored grant proposals in five weeks.",
    body: "Different funders needed different arguments. The work was to protect specificity under deadline pressure rather than submit the same organisational story thirteen times.",
    artifact: "Funder research, fit decisions and proposal criteria; $30,000+ in approvals contributed to.",
    fragments: ["13 proposals", "5 weeks", "funder research", "fit", "criteria", "$30,000+ approvals contributed to"],
  },
  {
    study: getStudy("all-at-once"), title: "All At Once",
    headline: "One balance. Many futures.",
    body: "A salary balance can already belong to rent, family, education, health, pleasure and an unfinished future. The campaign system makes that collision visible, then creates a route into planning.",
    artifact: "Behavioural research, positioning, copy and a fourteen-slide design-stage campaign system.",
    fragments: ["salary", "rent", "family", "education", "health", "future"],
    image: "/images/all-at-once/hero.webp",
    imageAlt: "All At Once campaign visual showing a salary balance surrounded by competing demands",
  },
  {
    study: getStudy("elomiran-consult-delivery"), title: "Elómiran Consult",
    headline: "Make the work inspectable from diagnosis to delivery.",
    body: "Different objectives, owners and definitions of success needed one visible operating sequence that could hold strategy, writing and client work together.",
    artifact: "A live sequence across website, search, copy, outreach, approval and delivery.",
    fragments: ["website", "search", "copy", "outreach", "client", "approval", "delivery"],
    image: "/images/elomiran-consult/foundation-case-reach.png",
    imageAlt: "Elómiran Consult working deck showing foundation, case and reach",
  },
];

const evidence = [
  ["13", "Tailored grant proposals", "MEASURED"],
  ["$30,000+", "Funding approvals contributed to", "MEASURED"],
  ["26,000+", "Savings responses analysed", "INDEPENDENT RESEARCH"],
  ["731 / 73", "Cowrywise posts mapped / closely read", "INDEPENDENT RESEARCH"],
  ["2", "Independently published books", "PUBLISHED"],
];

const usefulFor = [
  ["Writing & Editorial", ["editorial development", "thought leadership", "long-form writing", "messaging", "complex material that needs a clearer form"]],
  ["Research & Strategy", ["strategic briefs", "market / stakeholder research", "opportunity mapping", "evidence review", "campaign / product reasoning"]],
  ["Communication & Campaigns", ["campaign thinking", "communication systems", "high-context outreach", "public-facing ideas", "translating strategy into material people actually encounter"]],
];

export default function HomePage() {
  return (
    <>
      <section className="home-opening" aria-labelledby="home-title">
        <div className="opening-index">PA / Lagos / 2026</div>
        <HeroMaterialField />
        <div className="home-opening__declaration">
          <p className="opening-kicker">Writing · Research · Strategy</p>
          <h1 id="home-title">Work that<br /><span>matters to you.</span></h1>
        </div>
        <div className="opening-bottom opening-bottom--gentle">
          <div><p>I work across writing, research and strategy, helping turn difficult material, loose ideas and real problems into things people can understand, use and care about.</p></div>
          <a className="hero-action" href="#selected-situations">See selected situations <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="selected-situations" className="page-band home-situations">
        <header className="gentle-section-heading">
          <p>01 / Selected situations</p>
          <h2>Different material. Different forms of useful.</h2>
          <span>Delivery under pressure, financial behaviour, and a live operating system.</span>
        </header>
        <div className="gathering-situation-list">
          {selectedSituations.map((item) => <GatheringSituation key={item.study.slug} {...item} />)}
        </div>
        <div className="situation-proof-handoff" aria-hidden="true"><span>Measured</span><i /><span>Design-stage</span><i /><span>Active professional</span></div>
        <Link className="route-link" to="/work">Browse the complete work index <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>

      <section id="evidence" className="page-band home-proof-ledger">
        <header className="gentle-section-heading gentle-section-heading--compact">
          <p>02 / Evidence</p><h2>A small proof ledger</h2>
        </header>
        <div className="proof-ledger">
          {evidence.map(([value, label, status], index) => (
            <ScrollReveal key={`${value}-${label}`} delay={index * 55}>
              <article><p>{value}</p><h3>{label}</h3><span className={`evidence-state evidence-state--${status.toLowerCase().replace(" ", "-")}`}>{status}</span></article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="how-i-think" className="page-band home-thinking">
        <header className="home-section-identity home-section-identity--thinking">
          <h2><span>03 /</span> How I think</h2>
          <p>Loose material becomes useful when its limits and possible form become visible.</p>
        </header>
        <ThinkingField />
      </section>

      <section id="question" className="page-band home-observation home-question-note">
        <header className="home-section-identity home-section-identity--question"><h2><span>04 /</span> A question I am thinking about</h2></header>
        <div className="question-note__body">
          <div className="question-note__reflection">
            <p className="question-note__lede">Lately I keep returning to <strong>what survives the person who built it</strong>.</p>
            <p>It appears in strange places.</p>
            <p>A construction company trying to outlive its founder. Institutions whose processes contain more memory than their people realise. Old cities sitting on infrastructure everyone notices only when it stops working. Writers trying to make an idea survive the circumstances in which it was first thought.</p>
          </div>
          <div className="question-note__desk">
            <p>Some other things occupying the desk:</p>
            <div>
              <article><h3>Simone Weil and attention.</h3><p>Whether attention is a discipline before it is a talent.</p></article>
              <article><h3>Sport and image-making.</h3><p>How a single photograph, sentence or match can become the version of an athlete people remember.</p></article>
              <article><h3>Institutional language.</h3><p>The point at which professional language clarifies responsibility, and the point at which it begins hiding it.</p></article>
              <article><h3>Nigeria&apos;s ordinary systems.</h3><p>The unofficial arrangements that keep formal systems functioning, right up until they don&apos;t.</p></article>
            </div>
          </div>
          <div className="question-note__continue"><p>I write around some of these questions.</p><Link to="/writing">Enter the writing archive <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section id="useful-for" className="page-band home-services">
        <header className="gentle-section-heading gentle-section-heading--compact"><p>05 / Useful for</p><h2>Where could this person be useful to me?</h2></header>
        <div className="useful-for-grid">
          {usefulFor.map(([title, items], index) => <ScrollReveal key={title} delay={index * 70}><article><h3>{title}</h3><p>Useful for:</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article></ScrollReveal>)}
        </div>
      </section>

      <section id="quick-answers" className="page-band home-quick-answers">
        <header className="gentle-section-heading gentle-section-heading--compact"><p>06 / Quick answers</p><h2>The practical questions.</h2></header>
        <QuickAnswers />
      </section>
    </>
  );
}
