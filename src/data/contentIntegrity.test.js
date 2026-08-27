import fs from "fs";
import path from "path";
import { CASE_STUDIES } from "./caseStudies";
import { PROOF_ARTIFACTS } from "./proofArtifacts";
import { WRITINGS } from "./writings";

const caseStudySlugs = new Set(CASE_STUDIES.map((study) => study.slug));

describe("portfolio content integrity", () => {
  test("every owned writing link resolves to a writing article body", () => {
    const writingRoutes = new Set(WRITINGS.filter((item) => item.body).map((item) => `/writing/${item.slug}`));
    WRITINGS.filter((item) => item.bodyPath).forEach((item) => writingRoutes.add(`/writing/${item.slug}`));

    WRITINGS.filter((item) => item.url?.startsWith("/writing/")).forEach((item) => {
      expect(writingRoutes).toContain(item.url);
    });
  });

  test("every writing bodyPath file exists in public assets", () => {
    WRITINGS.filter((item) => item.bodyPath).forEach((item) => {
      expect(fs.existsSync(path.join(process.cwd(), "public", item.bodyPath.slice(1)))).toBe(true);
    });
  });

  test("every local writing backdrop image exists in public assets", () => {
    WRITINGS.filter((item) => item.backdropImage?.startsWith("/")).forEach((item) => {
      expect(fs.existsSync(path.join(process.cwd(), "public", item.backdropImage.slice(1)))).toBe(true);
    });
  });

  test("sitemap includes every owned writing article route", () => {
    const sitemap = fs.readFileSync(path.join(process.cwd(), "public", "sitemap.xml"), "utf8");

    WRITINGS.filter((item) => item.url?.startsWith("/writing/")).forEach((item) => {
      expect(sitemap).toContain(`https://thermopresh.vercel.app${item.url}`);
    });
  });

  test("every internal writing link resolves to a case study", () => {
    WRITINGS.filter((item) => item.url?.startsWith("/work/")).forEach((item) => {
      expect(caseStudySlugs).toContain(item.url.replace("/work/", ""));
    });
  });

  test("every proof artifact belongs to a published case-study route", () => {
    PROOF_ARTIFACTS.forEach((artifact) => {
      expect(caseStudySlugs).toContain(artifact.caseStudySlug);
    });
  });

  test("every assigned case-study image exists in the public assets", () => {
    CASE_STUDIES.filter((study) => study.image).forEach((study) => {
      expect(fs.existsSync(path.join(process.cwd(), "public", study.image.slice(1)))).toBe(true);
    });
  });

  test("every local case-study gallery image exists in the public assets", () => {
    CASE_STUDIES.flatMap((study) => study.gallery || [])
      .filter((image) => image.src?.startsWith("/"))
      .forEach((image) => {
        expect(fs.existsSync(path.join(process.cwd(), "public", image.src.slice(1)))).toBe(true);
      });
  });
});
