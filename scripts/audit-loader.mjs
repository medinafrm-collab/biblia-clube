import { createRequire, Module } from "node:module";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const require = createRequire(import.meta.url);
const cache = new Map();

// Loads local, trusted data modules without changing the application toolchain.
export function loadTs(filename) {
  const absolute = path.resolve(filename);
  if (cache.has(absolute)) return cache.get(absolute).exports;
  const mod = new Module(absolute);
  cache.set(absolute, mod);
  mod.filename = absolute;
  mod.paths = Module._nodeModulePaths(path.dirname(absolute));
  mod.require = (id) => {
    if (!id.startsWith(".") && !id.startsWith("@/")) return require(id);
    const base = id.startsWith("@/") ? path.resolve("src", id.slice(2)) : path.resolve(path.dirname(absolute), id);
    if (base.endsWith(".json")) return JSON.parse(fs.readFileSync(base, "utf8"));
    return loadTs(base.endsWith(".ts") ? base : `${base}.ts`);
  };
  mod._compile(ts.transpileModule(fs.readFileSync(absolute, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText, absolute);
  return mod.exports;
}
