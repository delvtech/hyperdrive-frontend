import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredString } from "src/options/utils/requiredString";
import { createCommandModule } from "src/utils/createCommandModule";
import { Hex, createPublicClient, http } from "viem";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "info [OPTIONS]",
    aliases: ["pool-info", "poolInfo"],
    describe: "Get an account's token balance",

    builder: (yargs) => {
      return yargs.options({
        a: {
          alias: ["address"],
          describe: "The address of the ERC20Mintable contract",
          type: "string",
        },
        account: {
          describe: "The account to get the balance of",
          type: "string",
        },
        c: chainOption,
        r: rpcUrlOption,
      });
    },

    handler: async (args) => {
      const chain = await requiredChain(args.chain);
      const rpcUrl = await requiredRpcUrl(args.rpcUrl);

      const address = await requiredString(args.address, {
        name: "address",
        message: "Enter token address",
      });

      const account = await requiredString(args.account, {
        name: "account",
        message: "Enter account address",
      });

      const publicClient = createPublicClient({
        transport: http(rpcUrl),
        chain,
      });

      signale.success(
        await publicClient.readContract({
          abi: ERC20Mintable.abi,
          address: address as Hex,
          functionName: "balanceOf",
          args: [account as Hex],
        }),
      );
    },
  });
