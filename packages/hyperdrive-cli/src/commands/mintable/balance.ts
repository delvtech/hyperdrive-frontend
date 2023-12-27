import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable.js";
import { command } from "clide-js";
import signale from "signale";
import { createPublicClient, formatUnits, http } from "viem";
import { chainOption, getChain } from "../../reusable-options/chain.js";
import { rpcUrlOption } from "../../reusable-options/rpc-url.js";

export default command({
  description: "Get an account's ERC20Mintable balance",

  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    address: {
      description: "The address of the ERC20Mintable contract",
      type: "string",
      required: true,
    },
    account: {
      description: "The address of the account",
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
      prompt: "Enter ERC20Mintable address",
    });

    const account = await options.account({
      prompt: "Enter account address",
    });

    const publicClient = createPublicClient({
      transport: http(rpcUrl),
      chain,
    });

    const decimals = await publicClient.readContract({
      abi: ERC20Mintable.abi,
      address: address as `0x${string}`,
      functionName: "decimals",
    });

    const result = await publicClient.readContract({
      abi: ERC20Mintable.abi,
      address: address as `0x${string}`,
      functionName: "balanceOf",
      args: [account as `0x${string}`],
    });

    const formattedResult = formatUnits(result, decimals);
    signale.success(formattedResult);

    next(result);
  },
});
