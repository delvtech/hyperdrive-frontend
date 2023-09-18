import { HyperdriveABI, SimpleCache } from "@hyperdrive/sdk";
import { ViemCachedReadContract } from "src/contract/ViemCachedReadContract";
import { ViemCachedReadWriteContract } from "src/contract/ViemCachedReadWriteContract";
import { Address, PublicClient, WalletClient } from "viem";

export interface CreateHyperdriveContractOptions {
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
    return new ViemCachedReadWriteContract({
      abi: HyperdriveABI,
      address,
      publicClient,
      walletClient,
      cache,
    });
  }

  return new ViemCachedReadContract({
    abi: HyperdriveABI,
    address,
    publicClient,
    cache,
  }) as ViemHyperdriveContract<TOptions>;
}

export type ViemHyperdriveContract<
  TOptions extends CreateHyperdriveContractOptions,
> = TOptions["walletClient"] extends WalletClient
  ? ViemCachedReadWriteContract<typeof HyperdriveABI>
  : ViemCachedReadContract<typeof HyperdriveABI>;
