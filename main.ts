import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one short text, written to /output/entry.txt.
const TEXT =
  "The kettle has clicked off. The window stands open a hand's width, and the room cools the way a stone cools — slowly, without asking you to notice. A cup, a spoon, the pale ring where the cup stood. Nothing waits on you. The afternoon is wide, and you are already in it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote entry.txt (${TEXT.length} UTF-16 units)`);
