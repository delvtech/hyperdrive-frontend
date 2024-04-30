import { command } from "clide-js";

export default command({
  description: "Interact with a HyperiveFactory contract.",
  requiresSubcommand: true,

  options: {
    address: {
      description: "The address of the HyperdriveFactory contract.",
      type: "string",
      required: true,
    },
  },

  handler: async ({ options, next }) => {
    const address = await options.address({
      prompt: "Enter HyperdriveFactory address",
    });

    next(address);
  },
});
