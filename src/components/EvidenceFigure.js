import ProofBadge from "./ProofBadge";

export default function EvidenceFigure({ number, title, observation, source, status, method, summary, children }) {
  const titleId = `figure-title-${number}`;
  const summaryId = `figure-summary-${number}`;

  return (
    <figure className="evidence-figure" aria-labelledby={titleId} aria-describedby={summaryId}>
      <figcaption className="evidence-figure__caption">
        <span>Figure {number}</span>
        <ProofBadge status={status} />
        <h3 id={titleId}>{title}</h3>
        <p className="evidence-figure__observation">{observation}</p>
      </figcaption>
      <div className="evidence-figure__visual" aria-hidden="true">{children}</div>
      <div className="evidence-figure__notes">
        <p id={summaryId}><b>Text summary</b>{summary}</p>
        <dl>
          <div><dt>Source</dt><dd>{source}</dd></div>
          {method && <div><dt>Method note</dt><dd>{method}</dd></div>}
        </dl>
      </div>
    </figure>
  );
}
