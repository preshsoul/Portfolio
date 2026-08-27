const SITE_URL = "https://thermopresh.vercel.app";

const ARTICLES = {
  "adidas-anthony-edwards-sports-marketing": {
    canonicalSlug: "adidas-anthony-edwards-sports-marketing",
    title: "The Neighbourhood and the Superstar",
    seoTitle: "The Neighbourhood and the Superstar: Adidas & Anthony Edwards",
    description:
      "How Adidas built a distinct marketing world around Anthony Edwards, from Peach World and strange NBA ads to friendship, football, nostalgia and the neighbourhood.",
    image: "https://img.youtube.com/vi/v6-FRL9Mpys/maxresdefault.jpg",
    imageAlt: "Anthony Edwards seated against a peach-toned Adidas No Lie campaign backdrop",
    author: "Precious Ajayi",
    publishedAt: "2026-08-26",
    updatedAt: "2026-08-26",
  },
  "the-neighbourhood-and-the-superstar": {
    canonicalSlug: "adidas-anthony-edwards-sports-marketing",
    title: "The Neighbourhood and the Superstar",
    seoTitle: "The Neighbourhood and the Superstar: Adidas & Anthony Edwards",
    description:
      "How Adidas built a distinct marketing world around Anthony Edwards, from Peach World and strange NBA ads to friendship, football, nostalgia and the neighbourhood.",
    image: "https://img.youtube.com/vi/v6-FRL9Mpys/maxresdefault.jpg",
    imageAlt: "Anthony Edwards seated against a peach-toned Adidas No Lie campaign backdrop",
    author: "Precious Ajayi",
    publishedAt: "2026-08-26",
    updatedAt: "2026-08-26",
  },
};

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildArticleHtml(article) {
  const canonicalUrl = `${SITE_URL}/writing/${article.canonicalSlug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [article.image],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author,
      url: `${SITE_URL}/about`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/pa-route-mark.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#123042">

    <title>${escapeHtml(article.seoTitle)}</title>
    <meta name="title" content="${escapeHtml(article.seoTitle)}">
    <meta name="description" content="${escapeHtml(article.description)}">
    <meta name="author" content="${escapeHtml(article.author)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonicalUrl}">

    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Precious Ajayi">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${escapeHtml(article.title)}">
    <meta property="og:description" content="${escapeHtml(article.description)}">
    <meta property="og:image" content="${article.image}">
    <meta property="og:image:secure_url" content="${article.image}">
    <meta property="og:image:alt" content="${escapeHtml(article.imageAlt)}">
    <meta property="og:image:width" content="1280">
    <meta property="og:image:height" content="720">
    <meta property="article:published_time" content="${article.publishedAt}">
    <meta property="article:modified_time" content="${article.updatedAt}">
    <meta property="article:author" content="${escapeHtml(article.author)}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${escapeHtml(article.title)}">
    <meta name="twitter:description" content="${escapeHtml(article.description)}">
    <meta name="twitter:image" content="${article.image}">
    <meta name="twitter:image:alt" content="${escapeHtml(article.imageAlt)}">

    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script>
      (function loadPortfolioApp() {
        fetch("/asset-manifest.json")
          .then(function (response) { return response.json(); })
          .then(function (manifest) {
            var files = manifest.files || {};
            if (files["main.css"]) {
              var style = document.createElement("link");
              style.rel = "stylesheet";
              style.href = files["main.css"];
              document.head.appendChild(style);
            }
            if (files["main.js"]) {
              var script = document.createElement("script");
              script.src = files["main.js"];
              script.defer = true;
              document.body.appendChild(script);
            }
          });
      })();
    </script>
  </body>
</html>`;
}

module.exports = function handler(request, response) {
  const slug = Array.isArray(request.query.slug) ? request.query.slug[0] : request.query.slug;
  const article = ARTICLES[slug];

  if (!article) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end("Article social card not found");
    return;
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  response.end(buildArticleHtml(article));
};
