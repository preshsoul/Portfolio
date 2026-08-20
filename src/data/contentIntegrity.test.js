import fs from "fs";
import path from "path";
import { CASE_STUDIES } from "./caseStudies";
import { PROOF_ARTIFACTS } from "./proofArtifacts";
import { WRITINGS } from "./writings";

const caseStudySlugs = new Set(CASE_STUDIES.map((study) => study.slug));

describe("portfolio content integrity", () => {
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
});
