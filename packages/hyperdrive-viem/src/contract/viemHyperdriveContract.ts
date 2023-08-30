import {
  WritableViemContract,
  WritableViemContractOptions,
} from "src/contract/base/WritableViemContract";
import {
  ReadableViemContract,
  ReadableViemContractOptions,
} from "src/contract/base/ReadableViemContract";
import {
  HyperdriveABI,
  ReadableHyperdriveContract,
  WritableHyperdriveContract,
} from "@hyperdrive/sdk";

export type ViemHyperdriveContract<
  TOptions extends
    | Omit<WritableViemContractOptions, "abi">
    | Omit<ReadableViemContractOptions, "abi">,
> = TOptions extends Omit<WritableViemContractOptions, "abi">
  ? WritableHyperdriveContract
  : ReadableHyperdriveContract;

/**
 * Get a new `ReadableHyperdriveContract` or `WritableHyperdriveContract`
 * instance depending on options.
 */
export function viemHyperdriveContract<
  TOptions extends
    | Omit<WritableViemContractOptions, "abi">
    | Omit<ReadableViemContractOptions, "abi">,
>(options: TOptions): ViemHyperdriveContract<TOptions> {
  if ("walletClient" in options) {
    return new WritableViemContract({
      abi: HyperdriveABI,
      ...options,
    });
  }

  return new ReadableViemContract({
    abi: HyperdriveABI,
    ...options,
  }) as ReadableHyperdriveContract as ViemHyperdriveContract<TOptions>;
}
