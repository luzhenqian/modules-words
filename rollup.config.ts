import rollup from "rollup";
import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const basePlugins = [
  typescript(),
  commonjs(),
  nodeResolve(),
  optimizeLodashImports(),
];

export default [
  // cjs
  rollup.defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/modules-words.cjs.js",
        format: "commonjs",
        exports: "named",
      },
    ],
    // external: ["lodash/snakeCase"],
    plugins: [...basePlugins],
  }),
  // esm
  rollup.defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/modules-words.esm.js",
        format: "esm",
      },
    ],
    // external: ["lodash/snakeCase"],
    plugins: [...basePlugins],
  }),
  // global
  rollup.defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/modules-words.global.js",
        format: "iife",
        name: "modulesWords",
        exports: "named",
      },
    ],
    // external: ["lodash/snakeCase"],
    plugins: [...basePlugins],
  }),
  // global prod
  rollup.defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/modules-words.global.prod.js",
        format: "iife",
        name: "modulesWords",
        exports: "named",
      },
    ],
    // external: ["lodash/snakeCase"],
    plugins: [...basePlugins, terser()],
  }),
];
