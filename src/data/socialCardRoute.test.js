const handler = require("../../api/og/writing.js");

function runHandler(slug) {
  const response = {
    statusCode: 0,
    headers: {},
    body: "",
    setHeader(name, value) {
      this.headers[name] = value;
    },
    end(body) {
      this.body = body;
    },
  };

  handler({ query: { slug } }, response);
  return response;
}

describe("writing social card route", () => {
  test("returns crawler-readable article Open Graph and Twitter metadata", () => {
    const response = runHandler("adidas-anthony-edwards-sports-marketing");

    expect(response.statusCode).toBe(200);
    expect(response.headers["Content-Type"]).toBe("text/html; charset=utf-8");
    expect(response.body).toContain('<meta property="og:type" content="article">');
    expect(response.body).toContain('<meta property="og:title" content="The Neighbourhood and the Superstar">');
    expect(response.body).toContain('<meta name="twitter:card" content="summary_large_image">');
    expect(response.body).toContain("https://img.youtube.com/vi/v6-FRL9Mpys/maxresdefault.jpg");
    expect(response.body).toContain(
      '<link rel="canonical" href="https://thermopresh.vercel.app/writing/adidas-anthony-edwards-sports-marketing">'
    );
  });

  test("keeps the old article slug shareable with the final canonical URL", () => {
    const response = runHandler("the-neighbourhood-and-the-superstar");

    expect(response.statusCode).toBe(200);
    expect(response.body).toContain('<meta property="og:title" content="The Neighbourhood and the Superstar">');
    expect(response.body).toContain(
      '<meta property="og:url" content="https://thermopresh.vercel.app/writing/adidas-anthony-edwards-sports-marketing">'
    );
  });
});
