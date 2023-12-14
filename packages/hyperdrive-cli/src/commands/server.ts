import { command } from "clide-js";
import hre from "hardhat";
import { parseUnits } from "viem";

export default command({
  description: "Start a local ethereum node",

  options: {
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
      default: 1_000,
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
  },

  handler: async ({ options }) => {
    const { balance, blockTime, chainId, port } = await options.values;

    hre.config.networks.hardhat = {
      ...hre.config.networks.hardhat,
      chainId,

      // TODO: Figure out how to set host
      // host: args.host,

      allowUnlimitedContractSize: true,
      accounts: {
        ...hre.config.networks.hardhat.accounts,
        accountsBalance: String(parseUnits(String(balance), 18)),
      },
      mining:
        blockTime !== undefined
          ? {
              ...hre.config.networks.hardhat.mining,
              auto: false,
              interval: blockTime * 1_000,
            }
          : hre.config.networks.hardhat.mining,
    };

    hre.run("node", {
      port,
    });
  },
});
