import { useEffect } from "react";

const DEFAULT_SEO = {
  title: "Precious Ajayi - Research, Strategy & Editorial Operations",
  description:
    "Precious Ajayi builds research, strategic arguments and editorial systems for organisations working across infrastructure, finance, media and emerging markets.",
  url: "https://thermopresh.vercel.app/",
  image: "https://thermopresh.vercel.app/images/og-image.png",
};

function upsertMeta(selector, attrs) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function upsertArticleSchema(schema) {
  let element = document.head.querySelector("#article-json-ld");

  if (!element) {
    element = document.createElement("script");
    element.id = "article-json-ld";
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(schema);
}

function removeArticleSchema() {
  document.head.querySelector("#article-json-ld")?.remove();
}

function applyMetadata(metadata) {
  document.title = metadata.title;

  upsertMeta('meta[name="title"]', { name: "title", content: metadata.title });
  upsertMeta('meta[name="description"]', { name: "description", content: metadata.description });
  upsertMeta('meta[name="robots"]', { name: "robots", content: metadata.robots || "index, follow" });

  upsertMeta('meta[property="og:type"]', { property: "og:type", content: metadata.ogType || "website" });
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: metadata.url });
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: metadata.ogTitle || metadata.title });
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: metadata.description,
  });
  upsertMeta('meta[property="og:image"]', { property: "og:image", content: metadata.image });
  if (metadata.imageAlt) upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: metadata.imageAlt });
  if (metadata.imageWidth) upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: String(metadata.imageWidth) });
  if (metadata.imageHeight) upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: String(metadata.imageHeight) });

  upsertMeta('meta[property="twitter:card"]', { property: "twitter:card", content: "summary_large_image" });
  upsertMeta('meta[property="twitter:url"]', { property: "twitter:url", content: metadata.url });
  upsertMeta('meta[property="twitter:title"]', {
    property: "twitter:title",
    content: metadata.twitterTitle || metadata.ogTitle || metadata.title,
  });
  upsertMeta('meta[property="twitter:description"]', {
    property: "twitter:description",
    content: metadata.description,
  });
  upsertMeta('meta[property="twitter:image"]', { property: "twitter:image", content: metadata.image });
  if (metadata.imageAlt) upsertMeta('meta[property="twitter:image:alt"]', { property: "twitter:image:alt", content: metadata.imageAlt });

  upsertCanonical(metadata.url);
}

export default function Seo({ metadata, schema }) {
  useEffect(() => {
    applyMetadata(metadata);
    if (schema) upsertArticleSchema(schema);

    return () => {
      applyMetadata(DEFAULT_SEO);
      removeArticleSchema();
      document.head.querySelector('link[rel="canonical"]')?.remove();
    };
  }, [metadata, schema]);

  return null;
}
