import Badge from "./Badge";

export default function ProductCard({ product }) {
  const available = product.status !== "coming_soon";
  const href = product.url || `mailto:preciousayomide147@gmail.com?subject=${encodeURIComponent(`${product.title} inquiry`)}`;
  const external = href.startsWith("http");
  return (
    <article className="product-object">
      <header><Badge>{product.tier}</Badge><span>{product.platform}</span>{product.price && <b>{product.price}</b>}</header>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      <a className={available ? "primary-cta" : "secondary-cta"} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{product.cta || (available ? "Open product" : "Join waitlist")} ↗</a>
    </article>
  );
}
