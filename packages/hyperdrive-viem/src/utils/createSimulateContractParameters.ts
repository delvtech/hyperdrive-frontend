import { BlockTag, ContractWriteOptions } from "@hyperdrive/sdk";

/**
 * Get parameters for `simulateContract` from `ContractWriteOptions`
 */
export function createSimulateContractParameters(
  options?: ContractWriteOptions,
): SimulateContractParameters {
  const {
    accessList,
    blockNumber,
    blockTag,
    from,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
  } = options || {};

  const blockOptions = blockTag ? { blockTag } : { blockNumber };
  const gasPriceOptions =
    gasPrice !== undefined
      ? { gasPrice }
      : maxFeePerGas == undefined
      ? { maxFeePerGas }
      : { maxPriorityFeePerGas };

  return {
    accessList,
    account: from,
    ...blockOptions,
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
} & ({ blockTag?: BlockTag } | { blockNumber?: bigint }) &
  (
    | { gasPrice?: bigint }
    | { maxFeePerGas?: bigint }
    | { maxPriorityFeePerGas?: bigint }
  );
