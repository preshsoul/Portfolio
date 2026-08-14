import ArtifactCard from "./ArtifactCard";

export default function ProofPanel({ artifacts, compact = false }) {
  if (!artifacts.length) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: compact ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
        gap: compact ? 12 : 14,
      }}
    >
      {artifacts.map((artifact) => (
        <ArtifactCard key={artifact.title} artifact={artifact} compact={compact} />
      ))}
    </div>
  );
}
