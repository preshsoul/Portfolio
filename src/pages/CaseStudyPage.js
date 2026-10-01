import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Badge from "../components/Badge";
import PiggyVestFigure from "../components/PiggyVestFigure";
import ProofBadge from "../components/ProofBadge";
import ScrollReveal from "../components/ScrollReveal";
import { CASE_STUDIES, getCaseStudyBySlug } from "../data/caseStudies";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return <section className="case-study-page"><div className="case-study-shell"><h1>Case study not found.</h1><Link className="text-link" to="/work">Back to selected work</Link></div></section>;
  }

  const currentIndex = CASE_STUDIES.findIndex((item) => item.slug === study.slug);
  const previous = CASE_STUDIES[(currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
  const next = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];
  const isPiggyVest = study.slug === "piggyvest-decision-model";

  return (
    <article className="case-study-page">
      <div className="case-study-shell">
        <ScrollReveal>
          <Link className="text-link" to="/work"><ArrowLeft size={15} aria-hidden="true" /> Selected work</Link>
          <div className="case-study-kicker-row"><Badge>{study.year}</Badge><ProofBadge status={study.proof} full /><Badge>{study.status}</Badge></div>
          <p className="case-beat-label">01 / The tension</p>
          <h1>{study.title}</h1>
          <p className="case-study-summary">{study.situation}</p>
          {isPiggyVest ? (
            <figure className="case-hero-artifact case-model-hero">
              <div role="img" aria-label="Five-state working model moving from unaware through uncertain saver, active saver and confident manager to advocate">
                {["Unaware", "Uncertain saver", "Active saver", "Confident manager", "Advocate"].map((state, index) => <span key={state}><b>0{index + 1}</b>{state}</span>)}
              </div>
              <figcaption>Hero artifact / five-state analytical model</figcaption>
            </figure>
          ) : study.image && <figure className="case-hero-artifact"><img src={study.image} alt={study.imageAlt || `${study.title} project artifact`} width="1200" height="800" /><figcaption>Hero artifact / {study.context}</figcaption></figure>}
          {study.coreLine && <blockquote className="case-pull-observation">{study.coreLine}</blockquote>}
        </ScrollReveal>

        <section className="case-beat case-beat--available" aria-labelledby="available-heading">
          <div><p className="case-beat-label">02 / What was available</p><h2 id="available-heading">Evidence, constraints and source material.</h2></div>
          <dl>
            <div><dt>Context</dt><dd>{study.context}</dd></div>
            <div><dt>Role</dt><dd>{study.role}</dd></div>
            <div><dt>Evidence boundary</dt><dd>{study.evidence}</dd></div>
          </dl>
        </section>

        <section className="case-beat case-beat--move" aria-labelledby="move-heading">
          <div><p className="case-beat-label">03 / The move</p><h2 id="move-heading">The strategic choices that made the material usable.</h2></div>
          <ol>{study.workDone.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </section>

        <section className="case-beat case-beat--system" aria-labelledby="system-heading">
          <header><p className="case-beat-label">04 / The system</p><h2 id="system-heading">Working material, in context.</h2></header>
          {isPiggyVest ? <PiggyVestFigure /> : (
            <>
              {study.sections?.map((section) => <aside className="case-annotation" key={section.title}><span>{section.title}</span><p>{section.body}</p></aside>)}
              {study.gallery && <div className={`case-study-gallery ${study.galleryLayout ? `case-study-gallery--${study.galleryLayout}` : ""}`}>
                {study.gallery.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" width="900" height="640" /><figcaption>{image.caption}</figcaption></figure>)}
              </div>}
            </>
          )}
          <div className="case-deliverables"><span>Working material</span><ul>{study.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>{study.url && <a href={study.url} target="_blank" rel="noopener noreferrer">View public artifact <ArrowRight size={15} aria-hidden="true" /></a>}</div>
        </section>

        <section className="case-beat case-beat--outcome" aria-labelledby="outcome-heading">
          <div><p className="case-beat-label">05 / What changed</p><h2 id="outcome-heading">What changed—and what remains unproven.</h2></div>
          <div><p>{study.whatChanged}</p><aside><ProofBadge status={study.proof} full /><p>{study.evidence}</p></aside></div>
        </section>

        <nav className="project-continuation" aria-label="Previous and next projects">
          <Link to={`/work/${previous.slug}`}><span><ArrowLeft size={15} aria-hidden="true" /> Previous</span><b>{previous.shortTitle || previous.title}</b></Link>
          <Link to={`/work/${next.slug}`}><span>Follow this thread <ArrowRight size={15} aria-hidden="true" /></span><b>{next.shortTitle || next.title}</b></Link>
        </nav>
      </div>
    </article>
  );
}
