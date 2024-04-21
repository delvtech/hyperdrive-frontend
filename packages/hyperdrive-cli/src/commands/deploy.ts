import { command } from "clide-js";
import { Chain, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "../reusable-options/chain.js";
import { rpcUrlOption } from "../reusable-options/rpc-url.js";
import { walletKeyOption } from "../reusable-options/wallet-key.js";

export default command({
  description: "Deploy a contract or combination of contracts",
  requiresSubcommand: true,
  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    wallet: walletKeyOption,
  },
  handler: async ({ options, context, next }) => {
    const chain = await getChain(options.chain, context.client);

    const rpcUrl = await options.rpc({
      prompt: "Enter RPC URL",
    });

    const walletKey = await options.wallet({
      prompt: "Enter wallet key",
    });

    const account = privateKeyToAccount(walletKey as `0x${string}`);

    const deployOptions: DeployOptions = {
      chain,
      rpcUrl,
      account,
      walletKey: walletKey as `0x${string}`,
    };

    return next(deployOptions);
  },
});

export interface DeployOptions {
  chain: Chain;
  rpcUrl: string;
  account: PrivateKeyAccount;
  walletKey: `0x${string}`;
}
