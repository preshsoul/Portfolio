import T from "../lib/tokens";
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
      {!compact && (
        <article
          style={{
            padding: "clamp(22px, 3vw, 28px)",
            borderRadius: 22,
            border: `1px dashed ${T.accent}`,
            background: T.card,
            display: "grid",
            alignContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: T.display,
              fontSize: "clamp(24px, 3vw, 32px)",
              lineHeight: 1.12,
              color: T.text,
              marginBottom: 10,
            }}
          >
            More proof should be artifact-led, not adjective-led.
          </p>
          <p style={{ fontFamily: T.body, fontSize: 14, color: T.textMuted, lineHeight: 1.75 }}>
            The site now separates outcomes, working systems and intellectual work so each claim has a visible evidence boundary.
          </p>
        </article>
      )}
    </div>
  );
}
