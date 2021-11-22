import { snakeCase } from "lodash";

/**
 * is browser
 * @returns boolean
 */
function isBrowser() {
  return typeof window === "object";
}

/**
 * get window object words
 * @returns string[]
 */
function _getWindowWords(module: string): string[] {
  const words = new Set<string>();
  words.add(module);
  try {
    if (
      isBrowser() &&
      module in window &&
      typeof (window as any)[module] === "object"
    ) {
      const props = Object.keys((window as any)[module]);

      props.forEach((prop: string) => {
        words.add(prop);
        snakeCase(prop)
          .split("_")
          .forEach((w) => words.add(w));
      });
    }
  } catch (e) {
    e;
  }
  return Array.from(words);
}

/**
 * get built in module, third-party module or custom module words
 * @param {string} module name
 * @returns string[]
 */
function _getWords(module: string): string[] {
  if (isBrowser()) return _getWindowWords(module);
  const words = new Set<string>();
  words.add(module);
  try {
    const _m = require(module);
    const props = Object.keys(_m);
    props.forEach((prop: string) => {
      words.add(prop);
      snakeCase(prop)
        .split("_")
        .forEach((w) => words.add(w));
    });
  } catch (e) {
    e;
  }
  return Array.from(words);
}

/**
 * get built in module, third-party module or custom module words by modules
 * @param  {...string} modules
 * @returns string[]
 */
function getWords(...modules: string[]) {
  if (modules.length === 1) return _getWords(modules[0]);
  return modules.reduce(
    (pre: string[], cur) => [...pre, ..._getWords(cur)],
    []
  );
}

/**
 * get window or node.js 17.0 all built in modules API words
 * @returns string[]
 */
function getGlobalWords() {
  if (isBrowser()) return _getWindowWords("window");
  // node 17.1.0 modules
  const builtModules = [
    "assert",
    "async_hooks",
    "asynchronous_contenxt_tracking",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "crypto",
    "dgram",
    "diagnostics_channel",
    "dns",
    "domain",
    "fs",
    "http",
    "http/2",
    "https",
    "inspector",
    "module",
    "os",
    "path",
    "performance_measurement_apis",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "string_decoder",
    "timers",
    "tls_",
    "ssl",
    "trace_events",
    "tty",
    "url",
    "util",
    "vm",
    "web_crypto_api",
    "web_streams_api",
    "webassembly_system_interface_",
    "wasi",
    "worker_threads",
    "zlib",
  ];
  return getWords(...builtModules);
}

export { getWords, getGlobalWords };
export default { getWords, getGlobalWords };
