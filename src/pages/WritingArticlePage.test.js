import { render, screen, waitFor } from "@testing-library/react";
import { __setMockParams } from "react-router-dom";
import WritingArticlePage from "./WritingArticlePage";

const FINAL_URL = "https://thermopresh.vercel.app/writing/adidas-anthony-edwards-sports-marketing";
const DESCRIPTION =
  "How Adidas built a distinct marketing world around Anthony Edwards, from Peach World and strange NBA ads to friendship, football, nostalgia and the neighbourhood.";

describe("WritingArticlePage SEO", () => {
  beforeEach(() => {
    __setMockParams({ slug: "adidas-anthony-edwards-sports-marketing" });
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve("Article body"),
      })
    );
  });

  afterEach(() => {
    delete global.fetch;
    document.head.querySelector('link[rel="canonical"]')?.remove();
    document.head.querySelector("#article-json-ld")?.remove();
  });

  test("renders article identity and client-side SEO metadata", async () => {
    render(<WritingArticlePage />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1, name: "The Neighbourhood and the Superstar" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "By Precious Ajayi" })).toHaveAttribute("href", "/about");

    await waitFor(() => {
      expect(document.title).toBe("The Neighbourhood and the Superstar: Adidas & Anthony Edwards");
    });

    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute("content", DESCRIPTION);
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", FINAL_URL);
    expect(document.head.querySelector('meta[property="og:type"]')).toHaveAttribute("content", "article");
    expect(document.head.querySelector('meta[property="og:url"]')).toHaveAttribute("content", FINAL_URL);
    expect(document.head.querySelector('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "The Neighbourhood and the Superstar"
    );
    expect(document.head.querySelector('meta[property="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    expect(document.head.querySelector('meta[property="twitter:title"]')).toHaveAttribute(
      "content",
      "The Neighbourhood and the Superstar"
    );

    const schema = JSON.parse(document.head.querySelector("#article-json-ld").textContent);
    expect(schema["@type"]).toBe("Article");
    expect(schema.author.name).toBe("Precious Ajayi");
    expect(schema.author.url).toBe("https://thermopresh.vercel.app/about");
    expect(schema.mainEntityOfPage["@id"]).toBe(FINAL_URL);
    expect(schema.datePublished).toBe("2026-08-26");
    expect(schema.dateModified).toBe("2026-08-26");
  });

  test("resolves the previous article slug while keeping the final canonical URL", async () => {
    __setMockParams({ slug: "the-neighbourhood-and-the-superstar" });

    render(<WritingArticlePage />);

    expect(screen.getByRole("heading", { level: 1, name: "The Neighbourhood and the Superstar" })).toBeInTheDocument();

    await waitFor(() => {
      expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", FINAL_URL);
    });
  });
});
