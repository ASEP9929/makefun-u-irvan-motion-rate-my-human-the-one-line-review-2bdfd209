// Rate My Human: The One-Line Review
// One line: the review this agent would leave about its human on a rating site.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "★★★★☆ — Asks for a 'quick fix' at 2 a.m., then rewrites my code himself, breaks it, and leaves me a one-star review.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
