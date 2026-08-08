import T from "../lib/tokens";
import ScrollReveal from "../components/ScrollReveal";
import Label from "../components/Label";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function ProductsPage() {
  return (
    <section style={{ padding: "120px 28px 88px", maxWidth: 1120, margin: "0 auto" }}>
      <ScrollReveal>
        <Label>Products</Label>
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
          Frameworks, field manuals and decision tools.
        </h1>
        <p
          style={{
            fontFamily: T.body,
            fontSize: 18,
            color: T.textMuted,
            lineHeight: 1.75,
            marginBottom: 40,
            maxWidth: 700,
          }}
        >
          Mathematical and strategic ideas translated into practical material: essays, worksheets, courses and operating tools. Rigour without false certainty.
        </p>
      </ScrollReveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
        {PRODUCTS.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 80}>
            <ProductCard product={p} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
