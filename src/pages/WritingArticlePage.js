import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import MarkdownArticle, { ArticleVisual } from "../components/MarkdownArticle";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import Tag from "../components/Tag";
import { getRelatedWritings, getWritingBySlug, WRITING_CATEGORY_LABELS, WRITING_STATUS_LABELS } from "../data/writings";

const SITE_URL = "https://thermopresh.vercel.app";

export default function WritingArticlePage() {
  const { slug } = useParams();
  const article = getWritingBySlug(slug);
  const related = getRelatedWritings(article);
  const [remoteBody, setRemoteBody] = useState("");
  const [bodyError, setBodyError] = useState(false);
  const articleBody = article?.body || remoteBody;
  const articleContent = articleBody.replace(/^#\s+.+(\r?\n)+/, "");
  const heroVisuals = article?.visuals?.filter((visual) => visual.position === "hero") || [];
  const canonicalUrl = article ? `${SITE_URL}${article.url}` : `${SITE_URL}/writing`;
  const articleImage = article?.image?.startsWith("http") ? article.image : `${SITE_URL}${article?.image || "/images/og-image.png"}`;
  const seoMetadata = article
    ? {
        title: article.seoTitle || article.title,
        description: article.description || article.subtitle,
        url: canonicalUrl,
        robots: "index, follow",
        ogType: "article",
        ogTitle: article.title,
        twitterTitle: article.title,
        image: articleImage,
        imageAlt: article.imageAlt,
        imageWidth: 1280,
        imageHeight: 720,
      }
    : null;
  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description || article.subtitle,
        author: {
          "@type": "Person",
          name: article.author || "Precious Ajayi",
          url: `${SITE_URL}/about`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        image: [articleImage],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
      }
    : null;

  useEffect(() => {
    let cancelled = false;
    setRemoteBody("");
    setBodyError(false);

    if (!article?.bodyPath) return undefined;

    fetch(article.bodyPath)
      .then((response) => {
        if (!response.ok) throw new Error(`Could not load ${article.bodyPath}`);
        return response.text();
      })
      .then((text) => {
        if (!cancelled) setRemoteBody(text);
      })
      .catch(() => {
        if (!cancelled) setBodyError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [article?.bodyPath]);

  if (!article || (!article.body && !article.bodyPath)) {
    return (
      <section className="route-page route-page--writing">
        <div className="article-not-found">
          <p>Writing archive</p>
          <h1>Article not found.</h1>
          <Link className="text-link" to="/writing">
            Back to writing
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="writing-article">
      {seoMetadata && <Seo metadata={seoMetadata} schema={articleSchema} />}
      <ScrollReveal>
        <Link className="text-link" to="/writing">
          &larr; Writing
        </Link>
        <header className="writing-article-hero">
          <div className="writing-article-meta">
            <Badge>{WRITING_CATEGORY_LABELS[article.category] || article.category}</Badge>
            <Badge>{WRITING_STATUS_LABELS[article.status] || article.status}</Badge>
            {article.readingTime && <Badge>{article.readingTime}</Badge>}
          </div>
          <h1>{article.title}</h1>
          <p>{article.subtitle}</p>
          {article.author && (
            <Link className="writing-article-author" to="/about">
              By {article.author}
            </Link>
          )}
        </header>
      </ScrollReveal>

      {heroVisuals.map((visual) => (
        <ScrollReveal key={visual.id} delay={70}>
          <ArticleVisual visual={visual} />
        </ScrollReveal>
      ))}

      <div className="writing-article-layout">
        <ScrollReveal delay={80}>
          {articleBody ? (
            <MarkdownArticle source={articleContent} visuals={article.visuals} />
          ) : (
            <div className="article-body">
              <p>{bodyError ? "This article could not be loaded." : "Loading article..."}</p>
            </div>
          )}
        </ScrollReveal>

        <aside className="writing-article-aside">
          <ScrollReveal delay={120}>
            <section>
              <p>Metadata</p>
              <dl>
                <div>
                  <dt>Status</dt>
                  <dd>{WRITING_STATUS_LABELS[article.status] || article.status}</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>{article.format}</dd>
                </div>
                <div>
                  <dt>Date</dt>
                  <dd>{article.date}</dd>
                </div>
              </dl>
            </section>
          </ScrollReveal>

          {article.tags?.length > 0 && (
            <ScrollReveal delay={150}>
              <section>
                <p>Tags</p>
                <div className="writing-article-tags">
                  {article.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          )}

          {article.connections?.length > 0 && (
            <ScrollReveal delay={180}>
              <section>
                <p>Connections</p>
                <ul>
                  {article.connections.map((connection) => (
                    <li key={connection}>{connection}</li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          )}
        </aside>
      </div>

      {related.length > 0 && (
        <section className="writing-related">
          <p>Related trails</p>
          <div>
            {related.map((item) => (
              <RelatedWritingLink key={item.slug || item.title} item={item} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function RelatedWritingLink({ item }) {
  const content = (
    <>
      <span>{item.format || item.category}</span>
      <h2>{item.title}</h2>
      <b>{item.ctaLabel || "Read next"}</b>
    </>
  );

  if (item.url?.startsWith("/")) return <Link to={item.url}>{content}</Link>;
  return <a href={item.url} target="_blank" rel="noopener noreferrer">{content}</a>;
}
