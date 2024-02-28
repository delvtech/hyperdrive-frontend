import { HyperdriveFactory } from "@delvtech/hyperdrive-artifacts/HyperdriveFactory";
import { command } from "clide-js";
import signale from "signale";
import { createPublicClient, http } from "viem";
import { chainOption, getChain } from "../../reusable-options/chain.js";
import { rpcUrlOption } from "../../reusable-options/rpc-url.js";

export default command({
  description: "Get the linker factory from a HyperdriveFactory contract",

  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    a: {
      alias: ["address"],
      description: "The address of the HyperdriveFactory contract",
      type: "string",
    },
  },

  handler: async ({ options, next }) => {
    const chain = await getChain(options.chain);

    const rpcUrl = await options.rpc({
      prompt: "Enter RPC URL",
    });

    const address = await options.address({
      prompt: "Enter contract address",
    });

    const publicClient = createPublicClient({
      transport: http(rpcUrl),
      chain,
    });

    const result = await publicClient.readContract({
      abi: HyperdriveFactory.abi,
      address: address as `0x${string}`,
      functionName: "linkerFactory",
    });

    signale.success(result);
    next(result);
  },
});
