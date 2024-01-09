import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive.js";
import { command } from "clide-js";
import signale from "signale";
import { createPublicClient, http } from "viem";
import { chainOption, getChain } from "../reusable-options/chain.js";
import { rpcUrlOption } from "../reusable-options/rpc-url.js";

export default command({
  description: "Get the PoolInfo for a Hyperdrive instance",

  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    address: {
      description: "The address of the hyperdrive contract",
      type: "string",
      required: true,
    },
  },

  handler: async ({ options, next }) => {
    const chain = await getChain(options.chain);

    const rpcUrl = await options.rpc({
      prompt: "Enter RPC URL",
    });

    const address = await options.address({
      prompt: "Enter Hyperdrive address",
    });

    const publicClient = createPublicClient({
      transport: http(rpcUrl),
      chain,
    });

    const result = await publicClient.readContract({
      abi: IHyperdrive.abi,
      address: address as `0x${string}`,
      functionName: "getPoolInfo",
    });

    signale.success(result);
    next(result);
  },
});
