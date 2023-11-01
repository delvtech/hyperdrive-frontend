import { ForwarderFactory } from "@hyperdrive/artifacts/dist/ForwarderFactory";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredString } from "src/options/utils/requiredString";
import { createCommandModule } from "src/utils/createCommandModule";
import { createPublicClient, http } from "viem";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "deploy [OPTIONS]",
    aliases: ["deployAndInitialize"],
    describe: "Fetch the ERC20LINK_HASH from a ForwarderFactory contract",

    builder: (yargs) => {
      return yargs.options({
        a: {
          alias: ["address"],
          describe: "The address of the ForwarderFactory contract",
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
        message: "Enter contract address",
      });

      const publicClient = createPublicClient({
        transport: http(rpcUrl),
        chain,
      });

      signale.success(
        await publicClient.readContract({
          abi: ForwarderFactory.abi,
          address: address as `0x${string}`,
          functionName: "ERC20LINK_HASH",
        }),
      );
    },
  });
