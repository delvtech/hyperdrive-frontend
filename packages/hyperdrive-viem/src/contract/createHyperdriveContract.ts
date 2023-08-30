import { WritableViemContract } from "src/contract/base/WritableViemContract";
import { ReadableViemContract } from "src/contract/base/ReadableViemContract";
import { HyperdriveABI } from "@hyperdrive/sdk";
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
    return new WritableViemContract({
      abi: HyperdriveABI,
      address,
      publicClient,
      walletClient,
    });
  }

  return new ReadableViemContract({
    abi: HyperdriveABI,
    address,
    publicClient,
  }) as ViemHyperdriveContract<TOptions>;
}

export type ViemHyperdriveContract<
  TOptions extends CreateHyperdriveContractOptions,
> = TOptions["walletClient"] extends WalletClient
  ? WritableViemContract<typeof HyperdriveABI>
  : ReadableViemContract<typeof HyperdriveABI>;
