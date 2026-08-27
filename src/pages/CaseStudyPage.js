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
    <article className="case-study-page">
      <div className="case-study-shell">
        <ScrollReveal>
          <Link className="text-link" to="/work">
            &larr; Selected work
          </Link>
          <div className="case-study-kicker-row">
            <Badge>{study.year}</Badge>
            <ProofBadge status={study.proof} full />
            <Badge>{study.status}</Badge>
          </div>
          <h1>{study.title}</h1>
          <p className="case-study-summary">{study.summary}</p>
          {study.image && (
            <img
              className={`case-study-cover ${study.kind === "campaign" ? "case-study-hero" : ""}`}
              src={study.image}
              alt={study.imageAlt || "Project cover"}
            />
          )}
          {study.coreLine && <p className="case-study-core-line">{study.coreLine}</p>}
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <dl className="case-study-meta-grid">
            {[
              ["Context", study.context],
              ["Role", study.role],
              ["Proof boundary", study.evidence],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        <div className="case-study-grid">
          <div className="case-study-main">
            <ScrollReveal>
              <section className="case-study-panel">
                <p className="case-study-section-title">The real situation</p>
                <p>{study.situation}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <section className="case-study-panel">
                <p className="case-study-section-title">The work done</p>
                <ul>
                  {study.workDone.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {study.sections?.map((section, index) => (
              <ScrollReveal key={section.title} delay={110 + index * 40}>
                <section className="case-study-panel">
                  <p className="case-study-section-title">{section.title}</p>
                  <p>{section.body}</p>
                </section>
              </ScrollReveal>
            ))}

            {study.gallery && (
              <ScrollReveal delay={study.sections ? 240 : 120}>
                <section aria-label={`${study.title} campaign stills`} className="case-study-gallery">
                  {study.gallery.map((image) => (
                    <figure key={image.src}>
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <figcaption>{image.caption}</figcaption>
                    </figure>
                  ))}
                </section>
              </ScrollReveal>
            )}

            <ScrollReveal delay={120}>
              <section className="case-study-panel">
                <p className="case-study-section-title">What changed</p>
                <p>{study.whatChanged}</p>
              </section>
            </ScrollReveal>
          </div>

          <aside className="case-study-aside">
            <ScrollReveal delay={120}>
              <section className="case-study-deliverables">
                <p>Deliverables</p>
                <ul>
                  {study.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {study.url && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View public artifact &rarr;
                  </a>
                )}
              </section>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="case-study-tag-cloud">
                {study.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={190}>
              <section className="case-study-artifact-boundary">
                <p className="case-study-section-title">Artifact boundary</p>
                <ProofPanel artifacts={artifacts} compact />
              </section>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </article>
  );
}
