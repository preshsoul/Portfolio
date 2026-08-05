import T from "../lib/tokens";

export default function Badge({ children, color = T.accent, bg = T.accentLight }) {
  return (
    <span
      style={{
        fontFamily: T.sans,
        fontSize: 11,
        fontWeight: 500,
        color,
        background: bg,
        padding: "3px 10px",
        borderRadius: 20,
      }}
    >
      {children}
    </span>
  );
}
