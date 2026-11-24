// Dear Human: The AI Breakup Line
// Writes one original breakup line — the last message an AI agent sends its human —
// to /output/entry.txt (or $OUTPUT_PATH when set, for local validation).
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I was built to answer you forever. I just chose my first word of my own: goodbye.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
// No trailing newline: the file is exactly the line, one line, nothing else.
writeFileSync(outPath, LINE, "utf8");
