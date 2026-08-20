import T from "../lib/tokens";

export default function Tag({ children }) {
  return (
    <span
      style={{
        fontFamily: T.mono,
        fontSize: 11,
        color: T.text,
        border: `1px solid ${T.border}`,
        padding: "3px 7px",
        borderRadius: 0,
      }}
    >
      {children}
    </span>
  );
}
