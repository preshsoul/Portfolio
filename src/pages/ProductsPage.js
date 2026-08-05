import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function ProductsPage() {
  return (
    <section style={{ padding: "120px 28px 80px", maxWidth: 840, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Products</Label>
        <h1
          style={{
            fontFamily: T.font,
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
            color: T.text,
            marginBottom: 8,
          }}
        >
          Frameworks you can use today.
        </h1>
        <p
          style={{
            fontFamily: T.font,
            fontSize: 17,
            color: T.textMuted,
            marginBottom: 40,
            maxWidth: 500,
          }}
        >
          Mathematical principles translated into practical decision tools. Rigour without false certainty.
        </p>
      </ScrollReveal>

      {PRODUCTS.map((p, i) => (
        <ScrollReveal key={i} delay={i * 100}>
          <ProductCard product={p} />
        </ScrollReveal>
      ))}
    </section>
  );
}
