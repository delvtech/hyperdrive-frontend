// HACK: Suppress ganache warning about bigint
// https://github.com/trufflesuite/ganache/issues/1080#issuecomment-906550239
const originalConsoleWarn = console.warn;
console.warn = () => {};

import hre from "hardhat";
import { createCommandModule } from "src/utils/createCommandModule";
import { parseUnits } from "viem";

console.warn = originalConsoleWarn;

export const { command, describe, builder, handler } = createCommandModule({
  command: "server [OPTIONS]",
  describe: "Start a local ethereum node",

  builder: (argv) => {
    return argv.options({
      p: {
        alias: ["port"],
        describe: "The port to listen on",
        type: "number",
        default: 8545,
      },
      // h: {
      //   alias: ["host"],
      //   describe: "The hostname to listen on",
      //   type: "string",
      //   default: "127.0.0.1",
      // },
      b: {
        alias: ["balance"],
        describe: "The ETH balance to assign to each account",
        type: "number",
        default: 1000,
      },
      t: {
        alias: ["block-time"],
        describe: "The blockTime in seconds for automatic mining",
        type: "number",
      },
      c: {
        alias: ["chain-id"],
        describe: "The id to use for the local blockchain",
        type: "number",
        default: 31337,
      },
    });
  },

  handler: async (args) => {
    hre.config.networks.hardhat = {
      ...hre.config.networks.hardhat,
      chainId: args.chainId,

      // TODO: Figure out how to set host
      // host: args.host,

      allowUnlimitedContractSize: true,
      accounts: {
        ...hre.config.networks.hardhat.accounts,
        accountsBalance: parseUnits(
          (args.balance || 1_000).toString(),
          18,
        ).toString(),
      },
      mining: args.blockTime
        ? {
            ...hre.config.networks.hardhat.mining,
            auto: false,
            interval: args.blockTime * 1_000,
          }
        : hre.config.networks.hardhat.mining,
    };

    hre.run("node", {
      port: args.port,
    });
  },
});
