import rollup from "rollup";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default [
  // cjs
  rollup.defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/module-words.cjs.js",
        format: "commonjs",
        exports: "named",
      },
    ],
    plugins: [typescript()],
  }),
  // esm
  rollup.defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/module-words.esm.js",
        format: "esm",
      },
    ],
    plugins: [typescript()],
  }),
  // global
  rollup.defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/module-words.global.js",
        format: "iife",
        name: "moduleWords",
        exports: "named",
      },
    ],
    plugins: [typescript()],
  }),
  // global prod
  rollup.defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/module-words.global.prod.js",
        format: "iife",
        name: "moduleWords",
        exports: "named",
      },
    ],
    plugins: [typescript(), terser()],
  }),
];
