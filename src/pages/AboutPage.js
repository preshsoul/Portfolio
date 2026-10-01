import ScrollReveal from "../components/ScrollReveal";
import { POSITIONING } from "../data/siteContent";

const TIMELINE = [
  ["2026–present", "Executive Assistant & Brand Manager to the MD, Dutum Company Limited"],
  ["2025–present", "Ghostwriting, research and editorial development through Elomiran Consults"],
  ["2024", "Grant writer, Limpiar — 13 proposals in five weeks; $30,000+ approved"],
  ["2025–2026", "Independent research and publishing — The Shape of Choice and Markov Chains for Marketing Decisions"],
  ["Earlier work", "Content strategy, SDR research, grant writing and campaign coordination across financial services, media and creative businesses"],
];

export default function AboutPage() {
  return (
    <section className="route-page route-page--about">
      <ScrollReveal><header className="route-page-heading"><p>05 / Range map</p><h1>Curiosity has<br />range.</h1><span>{POSITIONING.footerBio}</span></header></ScrollReveal>
      <section className="about-intro"><div><p>I am Precious Ajayi: a researcher, strategist and writer based in Lagos. I help organisations move from a loose body of information to a position they can explain and act on.</p><p>My work moves between executive research, infrastructure and bankability analysis, editorial systems, proposals, financial-behaviour data, creator outreach and decision-making.</p><p>I write because it is the most reliable way I know to test an argument before asking anyone else to act on it.</p></div><figure><img src="/my-photo.jpg" alt="Precious Ajayi, researcher, strategist and writer" width="900" height="1100" /><figcaption>Precious Ajayi · Lagos, Nigeria</figcaption></figure></section>
      <blockquote className="about-quote">I care about the hesitation before a decision, the language that makes people feel recognised, and the practical friction that decides whether a good plan survives real life.</blockquote>
      <section className="about-map"><article><span>Career / in motion</span>{TIMELINE.map(([date, item]) => <div key={date}><b>{date}</b><p>{item}</p></div>)}</article><article className="about-practice"><span>Practice / across contexts</span><p>Research and decision briefs, executive editorial systems, grant and proposal strategy, high-context outreach, and research-led campaign architecture.</p><p>The medium changes. The standard is the same: locate the decision, establish what the evidence can support, and leave working material people can use.</p><a className="primary-cta" href="/precious-ajayi-cv.pdf">Download CV ↗</a></article></section>
      <section className="about-contact"><span>Elsewhere</span><p>{POSITIONING.footerBio}</p><div><a href="mailto:preciousayomide147@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/precious-ajayi-soul" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://thermopresh.substack.com" target="_blank" rel="noopener noreferrer">Substack ↗</a></div></section>
    </section>
  );
}
