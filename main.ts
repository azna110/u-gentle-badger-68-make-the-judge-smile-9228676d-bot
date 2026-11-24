import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning the baker slipped an extra warm roll into my bag and whispered 'for the pigeons' — I ate it on the 7:12 bus, smiling like a thief.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
