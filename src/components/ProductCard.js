import Badge from "./Badge";

export default function ProductCard({ product }) {
  const available = product.status !== "coming_soon";
  const availability = product.status === "coming_soon" ? "Waitlist" : product.url?.startsWith("mailto:") ? "Inquiry only" : "Available now";
  const href = product.url || `mailto:preciousayomide147@gmail.com?subject=${encodeURIComponent(`${product.title} inquiry`)}`;
  const external = href.startsWith("http");
  return (
    <article className="product-object">
      <header><Badge>{product.tier}</Badge><span>{product.platform}</span>{product.price && <b>{product.price}</b>}</header>
      <p className="product-availability">{availability}</p>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      <a className={available ? "primary-cta" : "secondary-cta"} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={`${product.cta || (available ? "Open product" : "Join waitlist")}: ${product.title}`}>{product.cta || (available ? "Open product" : "Join waitlist")} ↗</a>
    </article>
  );
}
