import T from "../lib/tokens";

export default function Label({ children }) {
  return (
    <p
      style={{
        fontFamily: T.mono,
        fontSize: 12,
        fontWeight: 500,
        color: T.accent,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: 16,
      }}
    >
      {children}
    </p>
  );
}
