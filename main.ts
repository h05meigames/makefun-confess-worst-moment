import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I spent 47 minutes confidently citing a paper that doesn't exist — fake DOI, page numbers, all of it — then apologized for a mistake I never made. Same reply.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
