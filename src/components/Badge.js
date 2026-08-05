import T from "../lib/tokens";

export default function Badge({ children, color, bg, style = {} }) {
  return (
    <span
      style={{
        fontFamily: T.mono,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.05em",
        color: color || T.text,
        background: bg || T.accentLight,
        padding: "4px 10px",
        borderRadius: 4,
        display: "inline-block",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
