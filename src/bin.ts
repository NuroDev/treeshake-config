#!/usr/bin/env node

import { Command } from "commander";
import { readdirSync } from "fs";
import { join, parse } from "path";
import { writeFileSync } from "fs";

import { generateConfigs } from ".";

import type { CliOptions } from "./types";

(async () => {
  const program = new Command();

  program.option(
    "-c, --config <path>",
    "Path to the root config file",
    join(process.cwd(), "./config")
  );

  program.parse(process.argv);

  const options = program.opts() as CliOptions;

  if (!options.config) throw new Error("No or invalid config path provided");

  if (!checkExists(options.config))
    throw new Error(
      `No config file found. Please check the following file exists: ${options.config}`
    );

  const configs = await generateConfigs(options.config);

  if (!configs || configs.length <= 0) {
    console.error("No or invalid config modulex exported");
    process.exit(1);
  }

  const { dir: configDir } = parse(options.config);

  await Promise.all(
    configs.map(([fileName, contents]) =>
      writeFileSync(join(configDir, fileName), contents)
    )
  );
})();

/**
 * Check exists
 *
 * Validate that a file exists without a file extension
 *
 * @param {String} path - Path to the file to check exists
 */
function checkExists(path: string): boolean {
  const parsedPath = parse(path);

  const files = readdirSync(parsedPath.dir).map((file) => file.split(".")[0]);

  return files.some((file) => file === parsedPath.name);
}
