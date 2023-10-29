import signale from "signale";
import { createCommandModule } from "src/utils/createCommandModule";

export const { command, describe, handler } = createCommandModule({
  command: "hello",
  describe: "Say hello",

  handler: () => {
    signale.success(`Hello, universe! 🌌`);
  },
});
