export default function WritingRow({ item }) {
  const content = (
    <>
      <div>
        <p>{item.category}{item.featured ? " / Featured" : ""}</p>
        <h3>{item.title}</h3>
        {item.subtitle && <span>{item.subtitle}</span>}
      </div>
      <b>{item.url ? "Read ↗" : item.date}</b>
    </>
  );

  if (!item.url) return <article className="writing-row">{content}</article>;
  return <a className="writing-row" href={item.url} target={item.url.startsWith("http") ? "_blank" : undefined} rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}>{content}</a>;
}
