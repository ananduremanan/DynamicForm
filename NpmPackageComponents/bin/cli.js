#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const program = new Command();

program
  .name("npm-package")
  .description("Custom Npm Package")
  .version("1.0.0");

program
  .command("help")
  .description("Display the helper text")
  .action(() => {
    const helperText = fs.readFileSync(
      path.join(path.dirname(__filename), "../helper.md"),
      "utf-8"
    );
    console.log(helperText);
  });

program.parse(process.argv);
