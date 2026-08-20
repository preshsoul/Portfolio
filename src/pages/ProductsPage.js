import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";
import { BUILDING } from "../data/building";
import { PRODUCTS } from "../data/products";

export default function ProductsPage() {
  return (
    <section className="route-page route-page--products">
      <ScrollReveal><header className="route-page-heading"><p>04 / Working objects</p><h1>Tools with a<br />point of view.</h1><span>Frameworks, field manuals and decision tools built to leave the abstract behind.</span></header></ScrollReveal>
      <div className="product-grid">{PRODUCTS.map((product, index) => <ScrollReveal key={product.title} delay={index * 60}><ProductCard product={product} /></ScrollReveal>)}</div>
      <section className="building-index">
        <p>In motion / next objects</p>
        <div>{BUILDING.map((item, index) => <article key={item.name}><span>0{index + 1} / {item.status}</span><h2>{item.name}</h2><small>{item.desc}</small></article>)}</div>
      </section>
    </section>
  );
}
