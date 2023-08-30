import { WritableViemContract } from "src/contract/base/WritableViemContract";
import { ReadableViemContract } from "src/contract/base/ReadableViemContract";
import {
  HyperdriveABI,
  ReadableHyperdriveContract,
  WritableHyperdriveContract,
} from "@hyperdrive/sdk";
import { Address, PublicClient, WalletClient } from "viem";

interface ViemHyperdriveContractOptions {
  address: Address;
  publicClient: PublicClient;
  walletClient?: WalletClient;
}

/**
 * Get a new `ReadableHyperdriveContract` or `WritableHyperdriveContract`
 * instance depending on options.
 */
export function viemHyperdriveContract<
  TOptions extends ViemHyperdriveContractOptions,
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
  }) as ReadableHyperdriveContract as ViemHyperdriveContract<TOptions>;
}

export type ViemHyperdriveContract<
  TOptions extends ViemHyperdriveContractOptions,
> = TOptions["walletClient"] extends WalletClient
  ? WritableHyperdriveContract
  : ReadableHyperdriveContract;
