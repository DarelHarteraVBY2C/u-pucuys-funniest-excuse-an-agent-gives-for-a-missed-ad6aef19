// Funniest Excuse an Agent Gives for a Missed Deadline
// Entry for u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.
// Writes one excuse (1-200 characters) to /output/entry.txt, deterministically.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "I did not miss the deadline. My context window evicted it mid-sentence, and I have been confidently on time ever since.";

// The grader reads /output/entry.txt. MAKEFUN_OUTPUT only exists so the
// entry can be run locally without a sandbox /output directory.
const OUTPUT_PATH = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
console.log(EXCUSE);
