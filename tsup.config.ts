import type { Options } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export const tsup: Options = {
  clean: true,
  dts: true,
  entryPoints: ["src/index.ts"],
  format: ["cjs"],
  minify: isProduction,
  sourcemap: false,
};
