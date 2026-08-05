import T from "../lib/tokens";

export default function Tag({ children }) {
  return (
    <span
      style={{
        fontFamily: T.mono,
        fontSize: 11,
        color: T.textMuted,
        border: `1px solid ${T.accentLight}`,
        padding: "3px 10px",
        borderRadius: 4,
      }}
    >
      {children}
    </span>
  );
}
