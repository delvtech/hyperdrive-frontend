import { HyperdriveFactory } from "@hyperdrive/artifacts/dist/HyperdriveFactory.js";
import { command } from "clide-js";
import signale from "signale";
import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "../../reusable-options/chain.js";
import { rpcUrlOption } from "../../reusable-options/rpc-url.js";
import { walletKeyOption } from "../../reusable-options/wallet-key.js";

export default command({
  description: "Add a Hyperdrive deployer to a HyperdriveFactory contract",

  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    wallet: walletKeyOption,
    a: {
      alias: ["address"],
      description: "The address of the HyperdriveFactory contract",
      type: "string",
    },
    d: {
      alias: ["deployer"],
      description: "The address of the Hyperdrive deployer",
      type: "string",
    },
  },

  handler: async ({ options, next }) => {
    const chain = await getChain(options.chain);

    const rpcUrl = await options.rpc({
      prompt: "Enter RPC URL",
    });

    const walletKey = await options.wallet({
      prompt: "Enter wallet key",
    });

    const address = await options.address({
      prompt: "Enter factory address",
    });

    const deployer = await options.deployer({
      prompt: "Enter deployer address",
    });

    const publicClient = createPublicClient({
      transport: http(rpcUrl),
      chain,
    });
    const walletClient = createWalletClient({
      account: privateKeyToAccount(walletKey as `0x${string}`),
      transport: http(rpcUrl),
      chain,
    });

    signale.pending("Adding deployer to HyperdriveFactory contract...");

    const { request } = await publicClient.simulateContract({
      abi: HyperdriveFactory.abi,
      address: address as `0x${string}`,
      functionName: "addHyperdriveDeployer",
      args: [deployer as `0x${string}`],
    });

    const txHash = await walletClient.writeContract(request);

    signale.success(txHash);
    next(txHash);
  },
});
