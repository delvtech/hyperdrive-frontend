import { Client, OptionsConfig, OptionsGetter } from "clide-js";
import { Chain, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "./chain.js";
import { rpcUrlOption } from "./rpc-url.js";
import { walletKeyOption } from "./wallet-key.js";

/**
 * An `OptionsConfig` object that includes the following options:
 * - `chain`: The chain to write to.
 * - `rpc`: The RPC URL of the chain.
 * - `wallet`: The private key of the wallet to use.
 */
export const writeOptions = {
  chain: chainOption,
  rpc: rpcUrlOption,
  wallet: walletKeyOption,
} as const satisfies OptionsConfig;

export interface WriteOptions {
  chain: Chain;
  rpcUrl: string;
  account: PrivateKeyAccount;
  walletKey: `0x${string}`;
}

export async function getWriteOptions(
  optionsGetter: OptionsGetter<typeof writeOptions>,
  client: Client,
): Promise<WriteOptions> {
  const chain = await getChain(optionsGetter.chain, client);

  const rpcUrl = await optionsGetter.rpc({
    prompt: "Enter RPC URL",
  });

  const walletKey = await optionsGetter.wallet({
    prompt: "Enter wallet key",
  });

  const account = privateKeyToAccount(walletKey as `0x${string}`);

  return {
    chain,
    rpcUrl,
    account,
    walletKey: walletKey as `0x${string}`,
  };
}
