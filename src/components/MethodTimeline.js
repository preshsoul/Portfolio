import T from "../lib/tokens";

export default function MethodTimeline({ steps }) {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {steps.map((step, index) => (
        <article
          key={step.title}
          style={{
            display: "grid",
            gridTemplateColumns: "44px 1fr",
            gap: 16,
            padding: "18px 0",
            borderBottom: index === steps.length - 1 ? "none" : `1px solid ${T.border}`,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              background: T.text,
              color: T.bg,
              display: "grid",
              placeItems: "center",
              fontFamily: T.mono,
              fontSize: 12,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 style={{ fontFamily: T.display, fontSize: 22, color: T.text, marginBottom: 4 }}>
              {step.title}
            </h3>
            <p style={{ fontFamily: T.body, fontSize: 15, color: T.textMuted, lineHeight: 1.7 }}>
              {step.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
