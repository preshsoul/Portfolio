import { useMemo, useState } from "react";
import { SELECTED_ENGAGEMENTS } from "../data/siteContent";

const INITIAL = { name: "", organisation: "", project: "", decision: "", timeline: "", budget: "", links: "" };
const LINKS = [["Email", "mailto:preciousayomide147@gmail.com"], ["LinkedIn", "https://www.linkedin.com/in/precious-ajayi-soul"], ["Substack", "https://thermopresh.substack.com"]];

export default function ConnectPage() {
  const [form, setForm] = useState(INITIAL);
  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));
  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry — ${form.project || "new project"}`);
    const body = encodeURIComponent(Object.entries(form).filter(([, value]) => value).map(([key, value]) => `${key}: ${value}`).join("\n"));
    return `mailto:preciousayomide147@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <section className="route-page route-page--connect">
      <header className="route-page-heading"><p>06 / An open door</p><h1>Bring the<br />real problem.</h1><span>Start with the decision. The rest can arrive when it is useful.</span></header>
      <div className="connect-tags" role="list" aria-label="Typical project types">{SELECTED_ENGAGEMENTS.slice(0, 3).map((item, index) => <span role="listitem" key={item.title}>0{index + 1} / {item.title}</span>)}</div>
      <div className="connect-grid">
        <form action={mailto} method="post">
          <fieldset><legend>First, the useful essentials</legend><Field field="name" label="Your name" value={form.name} onChange={update("name")} required autoComplete="name" /><Field field="project" label="The project, in a line" value={form.project} onChange={update("project")} required /><Field field="decision" label="What decision needs to be made?" value={form.decision} onChange={update("decision")} multiline required /></fieldset>
          <details className="connect-more"><summary>Add timing, budget or materials <span>Optional</span></summary><div><Field field="organisation" label="Organisation" value={form.organisation} onChange={update("organisation")} autoComplete="organization" /><Field field="timeline" label="Timeline" value={form.timeline} onChange={update("timeline")} /><Field field="budget" label="Budget range" value={form.budget} onChange={update("budget")} /><Field field="links" label="Relevant links or materials" value={form.links} onChange={update("links")} multiline /></div></details>
          <p className="connect-privacy">This opens an email draft on your device. Nothing is submitted or stored by this site.</p>
          <button className="primary-cta" type="submit">Open email draft ↗</button>
        </form>
        <aside><p>A short note is enough to begin.</p>{LINKS.map(([label, url]) => <a key={label} href={url} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noopener noreferrer" : undefined}>{label}<b>↗</b></a>)}</aside>
      </div>
    </section>
  );
}

function Field({ field, label, value, onChange, multiline, required, autoComplete }) {
  const common = { id: field, name: field, value, onChange, required, autoComplete };
  return <label className="connect-field" htmlFor={field}><span>{label}{required ? " *" : ""}</span>{multiline ? <textarea {...common} rows={4} /> : <input {...common} type="text" />}</label>;
}
