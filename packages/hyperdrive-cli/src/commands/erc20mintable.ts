import path from "node:path";
import { createCommandModule } from "src/utils/createCommandModule";
import {
  COMMAND_FILE_EXTENSIONS,
  selectCommandHandler,
} from "src/utils/selectCommandHandler";

const commandDir = "./erc20mintable";

export const { command, describe, builder, handler } = createCommandModule({
  command: "erc20mintable [contract]",
  aliases: ["ERC20Mintable"],
  describe: "Interact with a ERC20Mintable contract",

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
