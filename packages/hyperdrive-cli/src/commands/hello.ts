import { command } from "clide-js";

export default command({
  description: "Say hello",
  handler: ({ context }) => {
    context.client.log(`Hello, universe! 🌌`);
  },
});
