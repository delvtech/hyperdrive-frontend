import { PoolABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

export function useBorrowDebt({
  debtToken,
  amount,
  onBehalfOf,
}: {
  debtToken: `0x${string}`;
  amount: bigint;
  onBehalfOf: `0x${string}` | undefined;
}): {
  borrow: (() => void) | undefined;
  isPendingWalletAction: boolean;
  isTxProcessing: boolean;
} {
  const { config: borrowConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.pool,
    abi: PoolABI,
    functionName: "borrow",
    enabled: !!onBehalfOf && amount > 0,
    args: [
      debtToken,
      amount,
      2n, // 1 for Stable rate, 2 for Variable rate, see: https://docs.aave.com/developers/core-contracts/pool#borrow
      0, // an optional referral code, 0 for now
      onBehalfOf as `0x${string}`, // safe to cast because enabled is set
    ],
  });
  const {
    write: borrow,
    isLoading: isPendingWalletAction,
    data, // contains the hash of the pending tx
  } = useContractWrite(borrowConfig);
  const { status: txStatus } = useWaitForTransaction({
    hash: data?.hash,
  });

  return {
    borrow,
    isPendingWalletAction,
    isTxProcessing: txStatus === "loading",
  };
}
