import T from "../lib/tokens";

export default function WritingRow({ item }) {
  return (
    <a
      href={item.url || "https://thermopresh.substack.com"}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        padding: "18px 0",
        borderBottom: `1px solid ${T.accentLight}66`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        transition: "background 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${T.bgAlt}66`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: T.display,
            fontSize: 17,
            fontWeight: 500,
            color: T.text,
            marginBottom: 2,
          }}
        >
          {item.title}
        </h3>
        {item.subtitle && (
          <p
            style={{
              fontFamily: T.body,
              fontSize: 14,
              color: T.textMuted,
              fontStyle: "italic",
            }}
          >
            {item.subtitle}
          </p>
        )}
        {item.category && (
          <span
            style={{
              fontFamily: T.mono,
              fontSize: 10,
              color: T.accent,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {item.category}
          </span>
        )}
      </div>
      <span
        style={{
          fontFamily: T.mono,
          fontSize: 12,
          color: T.textMuted,
          whiteSpace: "nowrap",
        }}
      >
        {item.date}
      </span>
    </a>
  );
}
