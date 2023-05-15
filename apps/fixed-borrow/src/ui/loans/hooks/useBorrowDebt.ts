import { PoolABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export function useBorrowDebt(
  debtToken: `0x${string}`,
  amount: bigint,
  onBehalfOf: `0x${string}` | undefined,
): {
  borrow: (() => void) | undefined;
  status: "error" | "success" | "loading" | "idle";
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
  const { write: borrow, status } = useContractWrite(borrowConfig);
  return { borrow, status };
}
