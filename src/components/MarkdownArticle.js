import { useState } from "react";

function flushList(blocks, listBuffer) {
  if (!listBuffer.length) return;
  blocks.push({ type: "list", items: [...listBuffer] });
  listBuffer.length = 0;
}

function flushQuote(blocks, quoteBuffer) {
  if (!quoteBuffer.length) return;
  blocks.push({ type: "quote", lines: [...quoteBuffer] });
  quoteBuffer.length = 0;
}

function parseMarkdown(source = "") {
  const blocks = [];
  const listBuffer = [];
  const quoteBuffer = [];

  source
    .trim()
    .split(/\r?\n/)
    .forEach((rawLine) => {
      const line = rawLine.trim();

      if (!line) {
        flushList(blocks, listBuffer);
        flushQuote(blocks, quoteBuffer);
        return;
      }

      if (/^-{3,}$/.test(line)) {
        flushList(blocks, listBuffer);
        flushQuote(blocks, quoteBuffer);
        blocks.push({ type: "hr" });
        return;
      }

      const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imageMatch) {
        flushList(blocks, listBuffer);
        flushQuote(blocks, quoteBuffer);
        blocks.push({ type: "image", alt: imageMatch[1], src: imageMatch[2] });
        return;
      }

      if (line.startsWith("## ")) {
        flushList(blocks, listBuffer);
        flushQuote(blocks, quoteBuffer);
        blocks.push({ type: "h2", text: line.replace(/^##\s+/, "") });
        return;
      }

      if (line.startsWith("# ")) {
        flushList(blocks, listBuffer);
        flushQuote(blocks, quoteBuffer);
        blocks.push({ type: "h1", text: line.replace(/^#\s+/, "") });
        return;
      }

      if (line.startsWith("> ")) {
        quoteBuffer.push(line.replace(/^>\s+/, ""));
        return;
      }

      if (/^- /.test(line)) {
        flushQuote(blocks, quoteBuffer);
        listBuffer.push(line.replace(/^- /, ""));
        return;
      }

      flushList(blocks, listBuffer);
      flushQuote(blocks, quoteBuffer);
      blocks.push({ type: "p", text: line });
    });

  flushList(blocks, listBuffer);
  flushQuote(blocks, quoteBuffer);
  return blocks;
}

function renderInline(text) {
  const parts = text.split(/(!?\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|_[^_]+_|\*[^*]+\*)/g);

  return parts.filter(Boolean).map((part, index) => {
    const key = `${part}-${index}`;
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (linkMatch) {
      return (
        <a key={key} href={linkMatch[2]} target={linkMatch[2].startsWith("http") ? "_blank" : undefined} rel={linkMatch[2].startsWith("http") ? "noopener noreferrer" : undefined}>
          {linkMatch[1]}
        </a>
      );
    }

    if (/^`[^`]+`$/.test(part)) return <code key={key}>{part.slice(1, -1)}</code>;
    if (/^\*\*[^*]+\*\*$/.test(part)) return <strong key={key}>{part.slice(2, -2)}</strong>;
    if (/^_[^_]+_$/.test(part)) return <em key={key}>{part.slice(1, -1)}</em>;
    if (/^\*[^*]+\*$/.test(part)) return <em key={key}>{part.slice(1, -1)}</em>;

    return renderQuotedText(part, key);
  });
}

function renderQuotedText(text, keyPrefix) {
  return text.split(/("[^"]+")/g).filter(Boolean).map((part, index) => {
    if (/^"[^"]+"$/.test(part)) return <em key={`${keyPrefix}-quote-${index}`}>{part}</em>;
    return part;
  });
}

function matchesVisual(block, visual) {
  if (!visual.after) return false;
  const searchable = [block.text, ...(block.lines || []), ...(block.items || [])].filter(Boolean).join(" ");

  return searchable.includes(visual.after);
}

function renderVisual(visual) {
  if (visual.type === "video") {
    return <VideoVisual visual={visual} />;
  }

  if (visual.type === "diptych") {
    return (
      <figure className="article-visual article-visual--diptych">
        <div>
          {visual.images.map((image) => (
            <div key={image.label || image.src}>
              <img src={image.src} alt={image.alt || image.label || visual.caption || "Article visual"} loading="lazy" />
              {image.label && <span>{image.label}</span>}
            </div>
          ))}
        </div>
        {visual.caption && <figcaption>{renderInline(visual.caption)}</figcaption>}
      </figure>
    );
  }

  if (visual.type === "template") {
    return (
      <figure className="article-visual article-visual--template">
        <div>
          <span>Presentation file</span>
          <strong>{visual.title}</strong>
          <em>{visual.ghost}</em>
        </div>
        {visual.caption && <figcaption>{renderInline(visual.caption)}</figcaption>}
      </figure>
    );
  }

  if (visual.type === "chart") {
    const maxValue = Math.max(...visual.values.map((item) => item.value));

    return (
      <figure className="article-visual article-visual--chart">
        <div>
          {visual.values.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <b>{item.value}%</b>
              <i style={{ "--bar-width": `${(item.value / maxValue) * 100}%` }} />
            </div>
          ))}
        </div>
        {visual.caption && <figcaption>{renderInline(visual.caption)}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className={`article-visual ${visual.size === "compact" ? "article-visual--compact" : ""}`}>
      <img src={visual.src} alt={visual.alt || visual.caption || "Article visual"} loading="lazy" />
      {visual.caption && <figcaption>{renderInline(visual.caption)}</figcaption>}
    </figure>
  );
}

function VideoVisual({ visual }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`article-visual article-visual--video ${visual.scale === "wide" ? "article-visual--wide" : ""}`}>
      <div className="article-video-frame">
        {loaded ? (
          <iframe
            src={visual.embedUrl}
            title={visual.iframeTitle || visual.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            {visual.thumbnail && <img src={visual.thumbnail} alt={visual.alt || `${visual.title} video cover`} loading={visual.position === "hero" ? "eager" : "lazy"} />}
            <div>
              <span>Video source</span>
              <strong>{visual.title}</strong>
              <button type="button" onClick={() => setLoaded(true)}>Load video</button>
              <a href={visual.sourceUrl} target="_blank" rel="noopener noreferrer">Open on YouTube</a>
            </div>
          </>
        )}
      </div>
      {visual.caption && <figcaption>{renderInline(visual.caption)}</figcaption>}
    </figure>
  );
}

function renderBlock(block, key) {
  if (block.type === "h1") return <h2 key={key}>{renderInline(block.text)}</h2>;
  if (block.type === "h2") return <h3 key={key}>{renderInline(block.text)}</h3>;
  if (block.type === "quote") {
    const emphatic = block.lines.join(" ").includes("I'm the truth! These boys know!");

    return (
      <blockquote key={key} className={emphatic ? "article-quote--emphatic" : undefined}>
        {block.lines.map((line) => (
          <span key={line}>{renderInline(line)}</span>
        ))}
      </blockquote>
    );
  }
  if (block.type === "hr") return <hr key={key} />;
  if (block.type === "image") {
    return (
      <figure key={key}>
        <img src={block.src} alt={block.alt || "Article reference"} loading="lazy" />
        {block.alt && <figcaption>{block.alt}</figcaption>}
      </figure>
    );
  }
  if (block.type === "list") {
    return (
      <ul key={key}>
        {block.items.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>
    );
  }

  return <p key={key}>{renderInline(block.text)}</p>;
}

export function ArticleVisual({ visual }) {
  return renderVisual(visual);
}

export default function MarkdownArticle({ source, visuals = [] }) {
  const blocks = parseMarkdown(source);
  const inlineVisuals = visuals.filter((visual) => visual.position !== "hero");

  return (
    <div className="article-body">
      {blocks.flatMap((block, index) => {
        const key = `${block.type}-${index}`;
        const rendered = [renderBlock(block, key)];

        inlineVisuals.filter((visual) => matchesVisual(block, visual)).forEach((visual) => {
          rendered.push(<ArticleVisual key={visual.id} visual={visual} />);
        });

        return rendered;
      })}
    </div>
  );
}
