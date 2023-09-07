import { ContractWriteOptions } from "@hyperdrive/sdk";

/**
 * Get parameters for `simulateContract` from `ContractWriteOptions`
 */
export function convertWriteOptionsToSimulateOptions(
  options?: ContractWriteOptions,
): SimulateContractParameters {
  const {
    accessList,
    from,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
  } = options || {};

  const gasPriceOptions =
    gasPrice !== undefined
      ? { gasPrice }
      : { maxFeePerGas, maxPriorityFeePerGas };

  return {
    accessList,
    account: from,
    gas,
    ...gasPriceOptions,
    nonce: nonce !== undefined ? Number(nonce) : undefined,
  } as any;
}

type SimulateContractParameters = {
  accessList?: ContractWriteOptions["accessList"];
  account?: `0x${string}`;
  gas?: bigint;
  nonce?: number;
} & (
  | { gasPrice?: bigint }
  | { maxFeePerGas?: bigint }
  | { maxPriorityFeePerGas?: bigint }
);
