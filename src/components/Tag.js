import T from "../lib/tokens";

export default function Tag({ children }) {
  return (
    <span
      style={{
        fontFamily: T.sans,
        fontSize: 11,
        color: T.textMuted,
        border: `1px solid ${T.border}`,
        padding: "3px 10px",
        borderRadius: 20,
      }}
    >
      {children}
    </span>
  );
}
