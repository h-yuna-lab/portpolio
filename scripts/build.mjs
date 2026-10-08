import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const destination = resolve(root, "dist");
if (destination !== join(root, "dist"))
  throw new Error("Unexpected build destination");
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const file of [
  "index.html",
  "styles.css",
  "script.js",
  "assets",
  ".nojekyll",
]) {
  await cp(join(root, file), join(destination, file), { recursive: true });
}
console.log("Built static site in dist/ (no runtime dependencies).");
