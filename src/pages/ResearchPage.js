import T from "../lib/tokens";
import Badge from "../components/Badge";
import Label from "../components/Label";
import ScrollReveal from "../components/ScrollReveal";

const RESEARCH_ITEMS = [
  {
    title: "The Shape of Choice",
    status: "Published",
    framing: "Applied research book on constraints and decision spaces.",
    body: "A 96-page, ten-chapter book examining constrained choice, state transitions, topology, fixed points, information capacity and organisational decision-making.",
    url: "https://selar.com/b34jr22286",
    image: "/tsoc-cover.jpeg",
    alt: "The Shape of Choice book cover — deep navy background with gold and off-white typography",
  },
  {
    title: "Markov Chains for Marketing Decisions",
    status: "Published",
    framing: "Framework for analysing customer movement, language and adoption.",
    body: "A state-based framework for understanding why customer journeys stall and what replaces the funnel when behaviour is treated as movement across conditions.",
    url: "https://selar.com/markov-market",
    image: "/markov-cover.png",
    alt: "Markov Chains for Marketing Decisions book cover by Precious Ajayi",
  },
  {
    title: "PiggyVest decision model",
    status: "Completed independent work",
    framing: "Financial-behaviour analysis using state transitions.",
    body: "Independent analysis of a published savings report covering 26,000+ respondents, translated into a five-state decision model and campaign architecture.",
    internalUrl: "/work/piggyvest-decision-model",
  },
  {
    title: "PL-5: Predictive Literacy",
    status: "Ongoing",
    framing: "A developing essay programme applying mathematical ideas to organisational and market decisions.",
    body: "The programme explores how concepts such as percolation, catastrophe, optimal transport, Shannon channel capacity and Lyapunov stability can clarify strategic judgement. It should be read as a developing body of work, not a completed research library.",
  },
  {
    title: "AI, diversity and organisational agility",
    status: "Working paper",
    framing: "Research on small teams navigating AI without collapsing strategic judgement.",
    body: "A working paper on how organisations preserve judgement, difference and execution quality while adopting AI-shaped workflows.",
  },
  {
    title: "The Zeitgeist Frontier Map",
    status: "Private / available on request",
    framing: "Stakeholder, source and distribution architecture for African scientific, industrial and policy frontiers.",
    body: "A private research architecture for mapping people, sources, institutions and distribution pathways around emerging frontiers.",
  },
];

export default function ResearchPage() {
  return (
    <section style={{ padding: "120px 28px 88px", maxWidth: 1120, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Research</Label>
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            color: T.text,
            marginBottom: 18,
            maxWidth: 820,
          }}
        >
          Published work, completed models and research still in development.
        </h1>
        <p
          style={{
            fontFamily: T.body,
            fontSize: 18,
            color: T.textMuted,
            lineHeight: 1.75,
            maxWidth: 720,
            marginBottom: 42,
          }}
        >
          The research page separates what is published, what is completed independent analysis and what remains a working programme.
        </p>
      </ScrollReveal>

      <div style={{ display: "grid", gap: 18 }}>
        {RESEARCH_ITEMS.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 55}>
            <article
              style={{
                display: "grid",
                gridTemplateColumns: item.image ? "180px 1fr" : "1fr",
                gap: 24,
                padding: "clamp(24px, 4vw, 34px)",
                borderRadius: 24,
                border: `1px solid ${T.border}`,
                background: T.card,
                alignItems: "start",
              }}
              className="research-card"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    border: `1px solid ${T.border}`,
                    background: T.cardAlt,
                  }}
                />
              )}
              <div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                  <Badge>{item.status}</Badge>
                </div>
                <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 4vw, 42px)", color: T.text, marginBottom: 8 }}>
                  {item.title}
                </h2>
                <p style={{ fontFamily: T.body, fontSize: 16, color: T.text, lineHeight: 1.65, marginBottom: 10 }}>
                  {item.framing}
                </p>
                <p style={{ fontFamily: T.body, fontSize: 15, color: T.textMuted, lineHeight: 1.75, maxWidth: 740 }}>
                  {item.body}
                </p>
                {(item.url || item.internalUrl) && (
                  <a
                    className="text-link"
                    href={item.url || item.internalUrl}
                    target={item.url ? "_blank" : undefined}
                    rel={item.url ? "noopener noreferrer" : undefined}
                    style={{ marginTop: 18, display: "inline-block" }}
                  >
                    {item.url ? "View public work" : "Read case study"} &rarr;
                  </a>
                )}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
