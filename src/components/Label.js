import T from "../lib/tokens";

export default function Label({ children }) {
  return (
    <p
      style={{
        fontFamily: T.sans,
        fontSize: 11,
        fontWeight: 600,
        color: T.accent,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: 18,
      }}
    >
      {children}
    </p>
  );
}
