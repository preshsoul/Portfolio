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
  const href =
    product.url ||
    `mailto:preciousayomide147@gmail.com?subject=${encodeURIComponent(`${product.title} inquiry`)}`;
  const isExternal = href.startsWith("http");

  return (
    <article
      className="lift-card product-card"
      style={{
        padding: "clamp(24px, 4vw, 32px)",
        background: T.card,
        borderRadius: 22,
        border: `1px solid ${T.border}`,
        position: "relative",
        overflow: "hidden",
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
          <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textMuted }}>{product.platform}</span>
        </div>
        {product.price && (
          <span style={{ fontFamily: T.mono, fontSize: 13, fontWeight: 700, color: T.text }}>{product.price}</span>
        )}
      </div>
      <h3 style={{ fontFamily: T.display, fontSize: "clamp(26px, 4vw, 38px)", lineHeight: 1.05, color: T.text, marginBottom: 10 }}>
        {product.title}
      </h3>
      <p style={{ fontFamily: T.body, fontSize: 15, color: T.textMuted, lineHeight: 1.75, marginBottom: 18 }}>
        {product.description}
      </p>
      <div style={{ display: "grid", gap: 8, marginBottom: 22 }}>
        {product.features.map((f, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span
              aria-hidden="true"
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: T.accentLight,
                color: T.text,
                display: "grid",
                placeItems: "center",
                fontFamily: T.mono,
                fontSize: 10,
                flex: "0 0 auto",
                marginTop: 2,
              }}
            >
              ✓
            </span>
            <span style={{ fontFamily: T.body, fontSize: 14, color: T.textMuted, lineHeight: 1.55 }}>{f}</span>
          </div>
        ))}
      </div>
      <a
        className={available ? "primary-cta" : "secondary-cta"}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        style={{
          width: "fit-content",
        }}
      >
        {product.cta || (available ? "Open product" : "Join waitlist")} &rarr;
      </a>
    </article>
  );
}
