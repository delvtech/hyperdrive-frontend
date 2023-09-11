import { HyperdriveABI } from "@hyperdrive/sdk";
import { ViemReadableContract } from "src/contract/ViemReadableContract";
import { ViemWritableContract } from "src/contract/ViemWritableContract";
import { Address, PublicClient, WalletClient } from "viem";

interface CreateHyperdriveContractOptions {
  address: Address;
  publicClient: PublicClient;
  walletClient?: WalletClient;
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
}: TOptions): ViemHyperdriveContract<TOptions> {
  if (walletClient) {
    return new ViemWritableContract({
      abi: HyperdriveABI,
      address,
      publicClient,
      walletClient,
    }) as ViemHyperdriveContract<TOptions>;
  }

  return new ViemReadableContract({
    abi: HyperdriveABI,
    address,
    publicClient,
  }) as ViemHyperdriveContract<TOptions>;
}

export type ViemHyperdriveContract<
  TOptions extends CreateHyperdriveContractOptions,
> = TOptions["walletClient"] extends WalletClient
  ? ViemWritableContract<typeof HyperdriveABI>
  : ViemReadableContract<typeof HyperdriveABI>;
