// TODO: As of contracts version 0.7.0, this no longer exists
// import { ForwarderFactory } from "@hyperdrive/artifacts/ForwarderFactory";
import { command } from "clide-js";
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

    // TODO: As of contracts version 0.7.0, this no longer exists
    // const result = await publicClient.readContract({
    //   abi: ForwarderFactory.abi,
    //   address: address as `0x${string}`,
    //   functionName: "ERC20LINK_HASH",
    // });
    // signale.success(result);
    // next(result);
  },
});
