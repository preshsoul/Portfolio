import ProofBadge from "./ProofBadge";

export default function ArtifactCard({ artifact, compact = false }) {
  return (
    <article className={`artifact-card ${compact ? "artifact-card--compact" : ""}`}>
      <div className="artifact-card-meta">
        <ProofBadge status={artifact.proof} />
        <span>{artifact.type}</span>
      </div>
      <h3>{artifact.title}</h3>
      <p>{artifact.summary}</p>
      <small>Boundary / {artifact.boundary}</small>
    </article>
  );
}
