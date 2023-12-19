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

  // Top level options applied to all commands
  options: {
    y: {
      alias: ["yes"],
      description: "Accept all default option values",
      type: "boolean",
      default: false,
    },
  },

  // Apply default values to options after parsing if -y or --yes are passed
  afterParse: async ({ parsedOptions, context }) => {
    if (parsedOptions.yes) {
      for (const [key, config] of Object.entries(context.options)) {
        const isMissingValue = parsedOptions[key] === undefined;
        const hasDefault = config.default !== undefined;

        if (isMissingValue && hasDefault) {
          (parsedOptions[key] as any) = config.default;
        }
      }
    }
  },
});
