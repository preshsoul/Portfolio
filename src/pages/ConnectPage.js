import { useMemo, useState } from "react";
import T from "../lib/tokens";
import Badge from "../components/Badge";
import Label from "../components/Label";
import ScrollReveal from "../components/ScrollReveal";
import { SELECTED_ENGAGEMENTS } from "../data/siteContent";

const SOCIAL_LINKS = [
  { label: "Email", desc: "Research, strategic writing and collaboration inquiries", url: "mailto:preciousayomide147@gmail.com" },
  { label: "LinkedIn", desc: "Professional work and connections", url: "https://www.linkedin.com/in/precious-ajayi-soul" },
  { label: "Substack", desc: "Essays on people, culture and ideas", url: "https://thermopresh.substack.com" },
];

const initialForm = {
  name: "",
  organisation: "",
  project: "",
  decision: "",
  timeline: "",
  budget: "",
  links: "",
};

export default function ConnectPage() {
  const [form, setForm] = useState(initialForm);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry — ${form.project || "new project"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Organisation: ${form.organisation}`,
        `Project: ${form.project}`,
        `Decision to be made: ${form.decision}`,
        `Timeline: ${form.timeline}`,
        `Budget range: ${form.budget}`,
        `Relevant links/materials: ${form.links}`,
      ].join("\n")
    );
    return `mailto:preciousayomide147@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  return (
    <section style={{ padding: "120px 28px 88px", maxWidth: 1120, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Connect</Label>
        <h1
          style={{
            fontFamily: T.display,
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            color: T.text,
            marginBottom: 18,
            maxWidth: 820,
          }}
        >
          Tell me what decision, audience or body of work you are trying to move.
        </h1>
        <p
          style={{
            fontFamily: T.body,
            fontSize: 18,
            color: T.textMuted,
            lineHeight: 1.75,
            maxWidth: 760,
            marginBottom: 18,
          }}
        >
          I take on research, strategic writing, proposal, editorial-system and outreach work where the brief has real stakes and enough room for thought. Include the decision you are working toward, the material already available and the deadline. I usually reply within 12 hours.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
          {SELECTED_ENGAGEMENTS.slice(0, 6).map((item) => (
            <Badge key={item.title}>{item.title}</Badge>
          ))}
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 360px)",
          gap: 34,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        <ScrollReveal delay={80}>
          <form
            action={mailto}
            method="post"
            style={{
              display: "grid",
              gap: 16,
              padding: "clamp(24px, 4vw, 34px)",
              borderRadius: 24,
              background: T.card,
              border: `1px solid ${T.border}`,
            }}
          >
            <Field label="Name" value={form.name} onChange={update("name")} required />
            <Field label="Organisation" value={form.organisation} onChange={update("organisation")} />
            <Field label="Project" value={form.project} onChange={update("project")} required />
            <Field
              label="Decision to be made"
              value={form.decision}
              onChange={update("decision")}
              multiline
              required
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-pair">
              <Field label="Timeline" value={form.timeline} onChange={update("timeline")} />
              <Field label="Budget range" value={form.budget} onChange={update("budget")} />
            </div>
            <Field label="Relevant links or materials" value={form.links} onChange={update("links")} multiline />
            <button className="primary-cta" type="submit" style={{ justifySelf: "start", border: "none" }}>
              Open email draft
            </button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <aside style={{ display: "grid", gap: 12 }}>
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  textDecoration: "none",
                  padding: "22px",
                  background: T.cardAlt,
                  borderRadius: 18,
                  border: `1px solid ${T.border}`,
                }}
                className="lift-card"
              >
                <h2 style={{ fontFamily: T.display, fontSize: 24, color: T.text, marginBottom: 5 }}>
                  {item.label} &rarr;
                </h2>
                <p style={{ fontFamily: T.body, fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </a>
            ))}
          </aside>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, multiline = false, required = false }) {
  const id = label.toLowerCase().replaceAll(" ", "-");
  const shared = {
    id,
    value,
    onChange,
    required,
    className: "field-control",
    style: {
      width: "100%",
      fontFamily: T.body,
      fontSize: 15,
      padding: "13px 15px",
      borderRadius: 12,
      border: `1px solid ${T.border}`,
      background: T.white,
      color: T.text,
    },
  };

  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontFamily: T.mono,
          fontSize: 11,
          color: T.link,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 7,
        }}
      >
        {label}
        {required ? " *" : ""}
      </label>
      {multiline ? <textarea {...shared} rows={4} /> : <input {...shared} type="text" />}
    </div>
  );
}
