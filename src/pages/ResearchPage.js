import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const RESEARCH_ITEMS = [
  { title: "The Shape of Choice", status: "Published", framing: "Applied research book on constraints and decision spaces.", body: "A ten-chapter book examining constrained choice, state transitions, topology, fixed points, information capacity and organisational decision-making.", url: "https://selar.com/b34jr22286", image: "/tsoc-cover.jpeg", alt: "The Shape of Choice book cover" },
  { title: "Markov Chains for Marketing Decisions", status: "Published", framing: "Framework for analysing customer movement, language and adoption.", body: "A state-based framework for understanding why customer journeys stall and what replaces the funnel when behaviour is treated as movement across conditions.", url: "https://selar.com/markov-market", image: "/markov-cover.png", alt: "Markov Chains for Marketing Decisions book cover" },
  { title: "PiggyVest decision model", status: "Completed independent work", framing: "Financial-behaviour analysis using state transitions.", body: "Independent analysis of a published savings report covering 26,000+ respondents, translated into a five-state decision model and campaign architecture.", internalUrl: "/work/piggyvest-decision-model" },
  { title: "PL-5: Predictive Literacy", status: "Ongoing", framing: "A developing essay programme applying mathematical ideas to organisational and market decisions.", body: "The programme explores how mathematical concepts can clarify strategic judgement. It remains a developing body of work, not a completed research library." },
  { title: "Cowrywise editorial and behavioural audit", status: "Supporting independent analysis", framing: "Independent audit of how a fintech used content to shape trust, education and user behaviour.", body: "A three-year review of public editorial material, classified by topic, audience, behavioural function and product relationship.", internalUrl: "/work/cowrywise-editorial-audit" },
];

export default function ResearchPage() {
  return (
    <section className="route-page route-page--research">
      <ScrollReveal><header className="route-page-heading"><p>02 / Research map</p><h1>Ideas become<br />working material.</h1><span>Published work, completed models and research still gathering shape.</span></header></ScrollReveal>
      <div className="research-map">
        {RESEARCH_ITEMS.map((item, index) => {
          const content = <><span>0{index + 1} / {item.status}</span><h2>{item.title}</h2><b>{item.framing}</b><p>{item.body}</p>{(item.url || item.internalUrl) && <em>{item.url ? "View public work ↗" : "Open case study ↗"}</em>}</>;
          const props = item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : item.internalUrl ? { to: item.internalUrl } : null;
          const card = item.image ? <><img src={item.image} alt={item.alt} /><div>{content}</div></> : content;
          return <ScrollReveal key={item.title} delay={index * 45}>{props ? item.url ? <a className="research-entry" {...props}>{card}</a> : <Link className="research-entry" {...props}>{card}</Link> : <article className="research-entry">{card}</article>}</ScrollReveal>;
        })}
      </div>
    </section>
  );
}
