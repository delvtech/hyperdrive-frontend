import path from "node:path";
import { createCommandModule } from "src/utils/createCommandModule";
import {
  COMMAND_FILE_EXTENSIONS,
  selectCommandHandler,
} from "src/utils/selectCommandHandler";

const commandDir = "./factory";

export const { command, describe, builder, handler } = createCommandModule({
  command: "factory [contract]",
  aliases: ["HyperdriveFactory"],
  describe: "Interact with a HyperdriveFactory contract",

  builder: (yargs) => {
    return yargs.commandDir(commandDir, {
      extensions: COMMAND_FILE_EXTENSIONS,
    });
  },

  handler: selectCommandHandler({
    commandsPath: path.resolve(__dirname, commandDir),
    message: "What would you like to do?",
  }),
});
