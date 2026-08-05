import T from "../lib/tokens";
import Badge from "./Badge";

export default function ProductCard({ product }) {
  const tierColors =
    product.tier === "free"
      ? ["#2D6A4F", "#D8F3DC"]
      : product.tier === "paid"
      ? [T.accent, T.accentLight]
      : ["#92400E", "#FDE68A"];

  const available = product.status !== "coming_soon";

  return (
    <div
      style={{
        padding: "30px",
        background: T.card,
        borderRadius: 14,
        border: `1px solid ${T.border}`,
        marginBottom: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <Badge color={tierColors[0]} bg={tierColors[1]}>
            {product.tier === "free" ? "Free" : product.tier === "paid" ? "Paid" : "Premium"}
          </Badge>
          <span style={{ fontFamily: T.sans, fontSize: 11, color: T.textMuted }}>{product.platform}</span>
        </div>
        {product.price && (
          <span style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 700, color: T.text }}>{product.price}</span>
        )}
      </div>
      <h3 style={{ fontFamily: T.font, fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 8 }}>
        {product.title}
      </h3>
      <p style={{ fontFamily: T.font, fontSize: 15, color: T.textMuted, lineHeight: 1.7, marginBottom: 16 }}>
        {product.description}
      </p>
      <div style={{ marginBottom: 18 }}>
        {product.features.map((f, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5 }}>
            <span style={{ color: T.accent, fontSize: 14 }}>✓</span>
            <span style={{ fontFamily: T.font, fontSize: 14, color: T.textMuted }}>{f}</span>
          </div>
        ))}
      </div>
      <button
        style={{
          fontFamily: T.sans,
          fontSize: 13,
          fontWeight: 500,
          color: available ? T.white : T.textMuted,
          background: available ? T.accent : T.border,
          padding: "11px 24px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
        }}
      >
        {available ? (product.tier === "free" ? "Get it free →" : "Purchase →") : "Join waitlist →"}
      </button>
    </div>
  );
}
