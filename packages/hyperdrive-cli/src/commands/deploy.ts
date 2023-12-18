import { command } from "clide-js";
import { Chain, Hex, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "../reusable-options/chain.js";
import { rpcUrlOption } from "../reusable-options/rpc-url.js";
import { walletKeyOption } from "../reusable-options/wallet-key.js";

export default command({
  description: "Deploy a contract or combination of contracts",
  requiresSubcommand: true,

  options: {
    chain: chainOption,
    ["rpc-url"]: rpcUrlOption,
    ["wallet-key"]: walletKeyOption,
  },

  handler: async ({ options, next }) => {
    const chain = await getChain(options.chain);

    const rpcUrl = await options.rpcUrl({
      prompt: "Enter RPC URL",
    });

    const walletKey = await options.walletKey({
      prompt: "Enter wallet key",
    });

    const account = privateKeyToAccount(walletKey as Hex);

    const payload: DeployOptions = {
      chain,
      rpcUrl,
      account,
    };
    next(payload);
  },
});

export interface DeployOptions {
  chain: Chain;
  rpcUrl: string;
  account: PrivateKeyAccount;
}
