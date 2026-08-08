import { Link, useParams } from "react-router-dom";
import T from "../lib/tokens";
import Badge from "../components/Badge";
import Label from "../components/Label";
import ProofBadge from "../components/ProofBadge";
import ProofPanel from "../components/ProofPanel";
import ScrollReveal from "../components/ScrollReveal";
import Tag from "../components/Tag";
import { getCaseStudyBySlug } from "../data/caseStudies";
import { getArtifactsForCaseStudy } from "../data/proofArtifacts";

const sectionTitle = {
  fontFamily: T.mono,
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: T.link,
  marginBottom: 12,
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);
  const artifacts = getArtifactsForCaseStudy(slug);

  if (!study) {
    return (
      <section style={{ padding: "120px 28px 80px", maxWidth: 760, margin: "0 auto" }}>
        <Label>Case study</Label>
        <h1 style={{ fontFamily: T.display, fontSize: 42, color: T.text, marginBottom: 14 }}>
          Case study not found.
        </h1>
        <Link className="text-link" to="/work">
          Back to selected work &rarr;
        </Link>
      </section>
    );
  }

  return (
    <article style={{ padding: "120px 28px 88px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <ScrollReveal>
          <Link className="text-link" to="/work">
            &larr; Selected work
          </Link>
          <div style={{ marginTop: 28, marginBottom: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Badge>{study.year}</Badge>
            <ProofBadge status={study.proof} full />
            <Badge>{study.status}</Badge>
          </div>
          <h1
            style={{
              fontFamily: T.display,
              fontSize: "clamp(42px, 7vw, 78px)",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              color: T.text,
              maxWidth: 920,
              marginBottom: 22,
              fontWeight: 600,
            }}
          >
            {study.title}
          </h1>
          <p
            style={{
              fontFamily: T.body,
              fontSize: "clamp(18px, 2.2vw, 22px)",
              color: T.textMuted,
              lineHeight: 1.65,
              maxWidth: 760,
            }}
          >
            {study.summary}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 12,
              margin: "46px 0",
            }}
          >
            {[
              ["Context", study.context],
              ["Role", study.role],
              ["Proof boundary", study.evidence],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  padding: 22,
                  borderRadius: 18,
                  background: T.cardAlt,
                  border: `1px solid ${T.border}`,
                }}
              >
                <dt style={{ fontFamily: T.mono, fontSize: 11, color: T.link, marginBottom: 8 }}>
                  {label}
                </dt>
                <dd style={{ fontFamily: T.body, fontSize: 14, color: T.textMuted, lineHeight: 1.65 }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 360px)",
            gap: 36,
            alignItems: "start",
          }}
          className="case-study-grid"
        >
          <div style={{ display: "grid", gap: 34 }}>
            <ScrollReveal>
              <section style={panelStyle}>
                <p style={sectionTitle}>The real situation</p>
                <p style={bodyStyle}>{study.situation}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <section style={panelStyle}>
                <p style={sectionTitle}>The work done</p>
                <ul style={listStyle}>
                  {study.workDone.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <section style={panelStyle}>
                <p style={sectionTitle}>What changed</p>
                <p style={bodyStyle}>{study.whatChanged}</p>
              </section>
            </ScrollReveal>
          </div>

          <aside style={{ position: "sticky", top: 88 }} className="case-study-aside">
            <ScrollReveal delay={120}>
              <section
                style={{
                  padding: 26,
                  borderRadius: 22,
                  background: T.text,
                  color: T.bg,
                }}
              >
                <p
                  style={{
                    fontFamily: T.mono,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                    opacity: 0.76,
                  }}
                >
                  Deliverables
                </p>
                <ul style={{ display: "grid", gap: 12, listStyle: "none" }}>
                  {study.deliverables.map((item) => (
                    <li key={item} style={{ fontFamily: T.body, fontSize: 14, lineHeight: 1.5 }}>
                      {item}
                    </li>
                  ))}
                </ul>
                {study.url && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: 22,
                      color: T.accentLight,
                      fontFamily: T.mono,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    View public artifact &rarr;
                  </a>
                )}
              </section>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
                {study.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={190}>
              <section style={{ marginTop: 18 }}>
                <p style={sectionTitle}>Artifact boundary</p>
                <ProofPanel artifacts={artifacts} compact />
              </section>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </article>
  );
}

const panelStyle = {
  padding: "clamp(26px, 4vw, 42px)",
  borderRadius: 24,
  border: `1px solid ${T.border}`,
  background: T.card,
};

const bodyStyle = {
  fontFamily: T.body,
  fontSize: 17,
  color: T.textMuted,
  lineHeight: 1.8,
};

const listStyle = {
  display: "grid",
  gap: 12,
  paddingLeft: 20,
  fontFamily: T.body,
  fontSize: 16,
  color: T.textMuted,
  lineHeight: 1.75,
};
