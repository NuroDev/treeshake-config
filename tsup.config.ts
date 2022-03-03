import type { Options } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export const tsup: Options = {
  clean: true,
  dts: true,
  entryPoints: ["src/index.ts", "src/bin.ts"],
  format: ["cjs", "esm"],
  minify: isProduction,
  sourcemap: false,
};
