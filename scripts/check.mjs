import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("../", import.meta.url));
const html = await readFile(resolve(root, "index.html"), "utf8");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "HTML IDs must be unique");
assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, "Use one page heading");
assert.match(html, /<html lang="ko">/);
assert.match(html, /name="viewport"/);
let localFiles = 0;
let anchors = 0;
let external = 0;
for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  const value = match[1];
  if (value.startsWith("https://")) {
    const url = new URL(value);
    assert.equal(url.protocol, "https:");
    external++;
  } else if (value.startsWith("#")) {
    assert.ok(ids.includes(value.slice(1)), `Missing anchor: ${value}`);
    anchors++;
  } else {
    assert.ok(
      value.startsWith("./"),
      `Assets must work under /portpolio/: ${value}`,
    );
    const path = resolve(root, value);
    assert.ok(
      path.startsWith(root.endsWith(sep) ? root : root + sep),
      "Asset outside site",
    );
    await access(path);
    localFiles++;
  }
}
for (const image of html.matchAll(/<img\b[^>]*>/g))
  assert.match(image[0], /\balt="[^"]*"/);
for (const link of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g))
  assert.match(link[0], /rel="noopener noreferrer"/);
for (const claim of html.matchAll(
  /<section class="work-item">([\s\S]*?)<\/section>/g,
)) {
  assert.match(
    claim[1],
    /github\.com\/.+?\/commit\/[a-f0-9]{40}/,
    "Each work item needs a commit",
  );
}
const syntax = spawnSync(
  process.execPath,
  ["--check", resolve(root, "script.js")],
  { encoding: "utf8" },
);
assert.equal(syntax.status, 0, syntax.stderr);
await access(resolve(root, "docs/evidence.md"));
console.log(
  `Checked ${localFiles} local assets, ${anchors} anchors, ${external} external URLs, and work-item evidence.`,
);
