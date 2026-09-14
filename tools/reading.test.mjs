import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

const source = readFileSync(
  new URL("../lib/reading.ts", import.meta.url),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;
const { calculateWpm, countWords, formatTime } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
);

test("reading speeds use exact seconds before rounding", () => {
  assert.equal(calculateWpm(500, 120), 250);
  assert.equal(calculateWpm(600, 150), 240);
  assert.equal(calculateWpm(1000, 300), 200);
  assert.equal(calculateWpm(500, 90), 333);
  assert.equal(calculateWpm(1, 120), 1);
});
test("invalid or incomplete inputs never produce an infinite or negative result", () => {
  for (const [words, seconds] of [
    [0, 1],
    [-1, 60],
    [500, 0],
    [500, -1],
    [1.5, 60],
    [NaN, 60],
    [500, NaN],
    [Infinity, 10],
    [10, Infinity],
  ]) {
    assert.equal(calculateWpm(words, seconds), null);
  }
});
test("word counting handles whitespace, punctuation, contractions and Latin scripts", () => {
  assert.equal(countWords(""), 0);
  assert.equal(countWords("  \n\t "), 0);
  assert.equal(countWords("Hello, world!"), 2);
  assert.equal(countWords("Well-lit pages — don't rush.\nRead again."), 6);
  assert.equal(countWords("Čitaj polako. Café déjà vu."), 5);
});
test("elapsed time formats complete minutes without rounding up", () => {
  assert.equal(formatTime(0), "0:00");
  assert.equal(formatTime(59.99), "0:59");
  assert.equal(formatTime(60), "1:00");
  assert.equal(formatTime(128.7), "2:08");
});
