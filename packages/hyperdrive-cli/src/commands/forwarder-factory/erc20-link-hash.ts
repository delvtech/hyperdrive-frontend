import { ForwarderFactory } from "@hyperdrive/artifacts/dist/ForwarderFactory.js";
import { command } from "clide-js";
import signale from "signale";
import { createPublicClient, http } from "viem";
import { chainOption, getChain } from "../../reusable-options/chain.js";
import { rpcUrlOption } from "../../reusable-options/rpc-url.js";

export default command({
  description: "Get the ERC20LINK_HASH from a ForwarderFactory contract",

  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    a: {
      alias: ["address"],
      description: "The address of the ForwarderFactory contract",
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
      abi: ForwarderFactory.abi,
      address: address as `0x${string}`,
      functionName: "ERC20LINK_HASH",
    });

    signale.success(result);
    next(result);
  },
});
