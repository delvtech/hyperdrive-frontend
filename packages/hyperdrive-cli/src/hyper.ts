import { help, run } from "clide-js";
import { commandMenu } from "clide-plugin-command-menu";
import "dotenv/config";
import signale from "signale";

run({
  plugins: [
    help({
      maxWidth: 80,
    }),
    commandMenu({
      title: "Hyperdrive CLI",
      titleColors: ["#15FFAB", "#14D3F9"],
      skip: (options) => !!options.help,
    }),
  ],
}).catch((error) => {
  signale.error(error);
});
