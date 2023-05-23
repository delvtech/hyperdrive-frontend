import { PoolABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { useWaitForTransactionThenInvalidateCache } from "src/ui/network/useWaitForTransactionThenInvalidateCache/useWaitForTransactionThenInvalidateCache";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export function useRepayDebt({
  debtToken,
  amount,
  onBehalfOf,
}: {
  debtToken: Address;
  amount: bigint | undefined;
  onBehalfOf: Address | undefined;
}): {
  repay: (() => void) | undefined;
  isPendingWalletAction: boolean;
  isTxProcessing: boolean;
} {
  const queryEnabled = !!onBehalfOf && !!amount;
  const { config: repayConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.pool,
    abi: PoolABI,
    functionName: "repay",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          debtToken,
          amount,
          2n, // 1 for Stable rate, 2 for Variable rate, see: https://docs.aave.com/developers/core-contracts/pool#repay
          onBehalfOf as `0x${string}`, // safe to cast because enabled is set
        ]
      : undefined,
  });
  const {
    write: repay,
    isLoading: isPendingWalletAction,
    data, // contains the hash of the pending tx
  } = useContractWrite(repayConfig);

  const { status: txStatus } = useWaitForTransactionThenInvalidateCache({
    hash: data?.hash,
  });

  return {
    repay,
    isPendingWalletAction,
    isTxProcessing: txStatus === "loading",
  };
}
