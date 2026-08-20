import { useMemo, useState } from "react";
import { SELECTED_ENGAGEMENTS } from "../data/siteContent";

const INITIAL = { name: "", organisation: "", project: "", decision: "", timeline: "", budget: "", links: "" };
const LINKS = [["Email", "mailto:preciousayomide147@gmail.com"], ["LinkedIn", "https://www.linkedin.com/in/precious-ajayi-soul"], ["Substack", "https://thermopresh.substack.com"]];

export default function ConnectPage() {
  const [form, setForm] = useState(INITIAL);
  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));
  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry — ${form.project || "new project"}`);
    const body = encodeURIComponent(Object.entries(form).map(([key, value]) => `${key}: ${value}`).join("\n"));
    return `mailto:preciousayomide147@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);
  return (
    <section className="route-page route-page--connect">
      <header className="route-page-heading"><p>06 / Final frame</p><h1>Bring the<br />real problem.</h1><span>Tell me what decision, audience or body of work you are trying to move.</span></header>
      <div className="connect-tags">{SELECTED_ENGAGEMENTS.map((item, index) => <span key={item.title}>0{index + 1} / {item.title}</span>)}</div>
      <div className="connect-grid"><form action={mailto} method="post">{Object.entries({ name: "Name", organisation: "Organisation", project: "Project", decision: "Decision to be made", timeline: "Timeline", budget: "Budget range", links: "Relevant links or materials" }).map(([field, label]) => <Field key={field} field={field} label={label} value={form[field]} onChange={update(field)} multiline={["decision", "links"].includes(field)} required={["name", "project", "decision"].includes(field)} />)}<button className="primary-cta" type="submit">Open email draft ↗</button></form><aside><p>Or find me elsewhere.</p>{LINKS.map(([label, url]) => <a key={label} href={url} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noopener noreferrer" : undefined}>{label}<b>↗</b></a>)}</aside></div>
    </section>
  );
}

function Field({ field, label, value, onChange, multiline, required }) {
  const common = { id: field, value, onChange, required };
  return <label className="connect-field" htmlFor={field}><span>{label}{required ? " *" : ""}</span>{multiline ? <textarea {...common} rows={4} /> : <input {...common} type="text" />}</label>;
}
