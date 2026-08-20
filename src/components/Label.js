import T from "../lib/tokens";

export default function Label({ children }) {
  return (
    <p
      style={{
        fontFamily: T.mono,
        fontSize: 11,
        fontWeight: 600,
        color: T.accent,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  );
}
