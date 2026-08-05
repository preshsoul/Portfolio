import { useState } from "react";
import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
import Badge from "../components/Badge";

const SOCIAL_LINKS = [
  { label: "Substack", desc: "Personal essays & cultural writing", url: "https://thermopresh.substack.com" },
  { label: "LinkedIn", desc: "Professional work & connections", url: "https://www.linkedin.com/in/precious-ajayi-bb96b51b4/" },
  { label: "Email", desc: "Collaborations & inquiries", url: "mailto:hello@preciousajayi.com" },
];

export default function ConnectPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "consulting", message: "" });

  return (
    <section style={{ padding: "120px 28px 80px", maxWidth: 840, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Connect</Label>
        <h1
          style={{
            fontFamily: T.font,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
            color: T.text,
            marginBottom: 8,
          }}
        >
          Let's think together.
        </h1>
        <p style={{ fontFamily: T.font, fontSize: 17, color: T.textMuted, marginBottom: 10, maxWidth: 460 }}>
          I'm open to consulting, writing commissions, speaking, and conversations that go somewhere
          interesting.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div
          style={{
            display: "inline-flex",
            gap: 8,
            flexWrap: "wrap",
            padding: "12px 18px",
            background: T.bgAlt,
            borderRadius: 10,
            marginBottom: 36,
          }}
        >
          <span style={{ fontFamily: T.sans, fontSize: 12, fontWeight: 500, color: T.text }}>
            Currently open to:
          </span>
          {["Consulting", "Writing", "Speaking", "Collaboration"].map((a, i) => (
            <Badge key={i}>{a}</Badge>
          ))}
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        <ScrollReveal delay={120}>
          {sent ? (
            <div
              style={{
                padding: "40px",
                background: T.bgAlt,
                borderRadius: 14,
                textAlign: "center",
              }}
            >
              <p style={{ fontFamily: T.font, fontSize: 20, color: T.text, marginBottom: 6 }}>
                Message sent.
              </p>
              <p style={{ fontFamily: T.font, fontSize: 15, color: T.textMuted }}>
                I'll get back to you soon.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { placeholder: "Your name", field: "name", type: "text" },
                { placeholder: "Email address", field: "email", type: "email" },
              ].map(({ placeholder, field, type }) => (
                <input
                  key={field}
                  type={type}
                  placeholder={placeholder}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  style={{
                    fontFamily: T.font,
                    fontSize: 15,
                    padding: "13px 16px",
                    borderRadius: 8,
                    border: `1px solid ${T.border}`,
                    background: T.white,
                    color: T.text,
                    outline: "none",
                  }}
                />
              ))}
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                style={{
                  fontFamily: T.font,
                  fontSize: 15,
                  padding: "13px 16px",
                  borderRadius: 8,
                  border: `1px solid ${T.border}`,
                  background: T.white,
                  color: T.text,
                  outline: "none",
                }}
              >
                <option value="consulting">Consulting inquiry</option>
                <option value="writing">Writing commission</option>
                <option value="speaking">Speaking engagement</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Something else</option>
              </select>
              <textarea
                placeholder="Tell me what you're thinking about..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  fontFamily: T.font,
                  fontSize: 15,
                  padding: "13px 16px",
                  borderRadius: 8,
                  border: `1px solid ${T.border}`,
                  background: T.white,
                  color: T.text,
                  outline: "none",
                  resize: "vertical",
                }}
              />
              <button
                onClick={() => setSent(true)}
                style={{
                  fontFamily: T.sans,
                  fontSize: 13,
                  fontWeight: 500,
                  color: T.white,
                  background: T.accent,
                  padding: "13px 28px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                }}
              >
                Send message
              </button>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SOCIAL_LINKS.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  padding: "20px 22px",
                  background: T.card,
                  borderRadius: 12,
                  border: `1px solid ${T.border}`,
                }}
              >
                <p style={{ fontFamily: T.sans, fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 3 }}>
                  {s.label} ↗
                </p>
                <p style={{ fontFamily: T.font, fontSize: 13, color: T.textMuted }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
