import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export const jest = {
  preset: "ts-jest",
  setupFiles: ["dotenv/config"],
  testEnvironment: "node",
};

export const tsup = defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/bin.ts"],
  format: ["cjs", "esm"],
  minify: isProduction,
  sourcemap: false,
});
