import { HyperdriveABI, SimpleCache } from "@hyperdrive/sdk";
import { ViemCachedReadableContract } from "src/contract/ViemCachedReadableContract";
import { ViemCachedWritableContract } from "src/contract/ViemCachedWritableContract";
import { Address, PublicClient, WalletClient } from "viem";

interface CreateHyperdriveContractOptions {
  address: Address;
  publicClient: PublicClient;
  walletClient?: WalletClient;
  cache?: SimpleCache;
}

/**
 * Get a new `Contract` instance using Viem.
 */
export function createHyperdriveContract<
  TOptions extends CreateHyperdriveContractOptions,
>({
  address,
  publicClient,
  walletClient,
  cache,
}: TOptions): ViemHyperdriveContract<TOptions> {
  if (walletClient) {
    return new ViemCachedWritableContract({
      abi: HyperdriveABI,
      address,
      publicClient,
      walletClient,
      cache,
    });
  }

  return new ViemCachedReadableContract({
    abi: HyperdriveABI,
    address,
    publicClient,
    cache,
  }) as ViemHyperdriveContract<TOptions>;
}

export type ViemHyperdriveContract<
  TOptions extends CreateHyperdriveContractOptions,
> = TOptions["walletClient"] extends WalletClient
  ? ViemCachedWritableContract<typeof HyperdriveABI>
  : ViemCachedReadableContract<typeof HyperdriveABI>;
