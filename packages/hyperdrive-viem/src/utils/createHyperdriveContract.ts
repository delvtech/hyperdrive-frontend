import { HyperdriveABI, SimpleCache } from "@hyperdrive/sdk";
import { ViemCachedReadableContract } from "src/contract/ViemCachedReadableContract";
import { ViemCachedWritableContract } from "src/contract/ViemCachedWritableContract";
import { ViemReadableContract } from "src/contract/ViemReadableContract";
import { ViemWritableContract } from "src/contract/ViemWritableContract";
import { Address, PublicClient, WalletClient } from "viem";

interface CreateHyperdriveContractOptions {
  address: Address;
  publicClient: PublicClient;
  walletClient?: WalletClient;
  /**
   * Set to `false` to disable caching.
   */
  cache?: SimpleCache | boolean;
}

/**
 * Get a new `ReadableHyperdriveContract` or `WritableHyperdriveContract`
 * instance depending on options.
 */
export function createHyperdriveContract<
  TOptions extends CreateHyperdriveContractOptions,
>({
  address,
  publicClient,
  walletClient,
  cache,
}: TOptions): ViemHyperdriveContract<TOptions> {
  let contract: ViemReadableContract | ViemWritableContract =
    new ViemReadableContract({
      abi: HyperdriveABI,
      address,
      publicClient,
    });

  if (walletClient) {
    contract = contract.withWallet(walletClient);
  }

  if (cache) {
    return contract.withCache(
      // true means use the default value for cache, so we need to explicitly
      // set it to undefined if we want to use the default cache.
      cache === true ? undefined : cache,
    ) as ViemHyperdriveContract<TOptions>;
  }

  return contract as ViemHyperdriveContract<TOptions>;
}

export type ViemHyperdriveContract<
  TOptions extends CreateHyperdriveContractOptions,
> = TOptions["walletClient"] extends WalletClient
  ? TOptions["cache"] extends false
    ? ViemWritableContract<typeof HyperdriveABI>
    : ViemCachedWritableContract<typeof HyperdriveABI>
  : TOptions["cache"] extends false
  ? ViemReadableContract<typeof HyperdriveABI>
  : ViemCachedReadableContract<typeof HyperdriveABI>;
