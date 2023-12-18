#!/usr/bin/env node
import { help, run } from "clide-js";
import { commandMenu } from "clide-plugin-command-menu";

run({
  plugins: [
    help,
    commandMenu({
      title: "Hyperdrive CLI",
      skip: (options) => !!options.help,
    }),
  ],
});
