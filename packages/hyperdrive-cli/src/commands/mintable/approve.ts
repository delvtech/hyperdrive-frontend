import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable.js";
import { command } from "clide-js";
import signale from "signale";
import { createPublicClient, createWalletClient, http, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "../../reusable-options/chain.js";
import { rpcUrlOption } from "../../reusable-options/rpc-url.js";
import { walletKeyOption } from "../../reusable-options/wallet-key.js";

export default command({
  description:
    "Sets amount as the allowance of spender over the caller's tokens.",

  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    wallet: walletKeyOption,
    address: {
      description: "The address of the ERC20Mintable contract",
      type: "string",
      required: true,
    },
    spender: {
      description: "The address of the spender",
      type: "string",
      required: true,
    },
    amount: {
      description: "The amount of tokens to approve",
      type: "string",
      required: true,
    },
  },

  handler: async ({ options, next }) => {
    const chain = await getChain(options.chain);

    const rpcUrl = await options.rpc({
      prompt: "Enter RPC URL",
    });

    const wallerKey = await options.wallet({
      prompt: "Enter wallet key",
    });

    const address = await options.address({
      prompt: "Enter ERC20Mintable address",
    });

    const spender = await options.spender({
      prompt: "Enter spender address",
    });

    const amount = await options.amount({
      prompt: "Enter amount to approve",
    });

    const account = privateKeyToAccount(wallerKey as `0x${string}`);

    const publicClient = createPublicClient({
      transport: http(rpcUrl),
      chain,
    });

    const decimals = await publicClient.readContract({
      abi: ERC20Mintable.abi,
      address: address as `0x${string}`,
      functionName: "decimals",
    });

    const { request } = await publicClient.simulateContract({
      abi: ERC20Mintable.abi,
      address: address as `0x${string}`,
      functionName: "approve",
      args: [spender as `0x${string}`, parseUnits(amount, decimals)],
    });

    const walletClient = createWalletClient({
      account,
      transport: http(rpcUrl),
      chain,
    });

    const txHash = await walletClient.writeContract(request);

    signale.success(txHash);
    next(txHash);
  },
});
