#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { generateMarkdownFile } from "./src/main.js";

const argv = yargs(hideBin(process.argv))
  .option("course", {
    alias: "c",
    description: "path to JSON file including course data",
  })
  .option("notes", {
    alias: "n",
    description: "path to JSON file including notes data",
  })
  .option("link", {
    alias: "l",
    describe: "link to the main course page",
  })
  .option("output", {
    alias: "o",
    describe: "path to output file",
    default: "output.md",
  })
  .demandOption(["course", "notes", "link"])
  .parse();

if (argv.course && argv.notes && argv.link) {
  generateMarkdownFile({
    course: argv.course,
    notes: argv.notes,
    link: argv.link,
    output: argv.output,
  });
}
