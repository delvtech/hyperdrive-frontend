import { PoolABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export function useBorrowDebt(
  token: `0x${string}`,
  amount: BigNumber,
  onBehalfOf: `0x${string}` | undefined,
): {
  borrow: (() => void) | undefined;
  status: "error" | "success" | "loading" | "idle";
} {
  const { config: borrowConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.pool,
    abi: PoolABI,
    functionName: "borrow",
    enabled: !!onBehalfOf && amount.gt(0),
    args: [
      token,
      amount,
      BigNumber.from(2), // 1 for Stable rate, 2 for Variable rate, see: https://docs.aave.com/developers/core-contracts/pool#borrow
      0, // an optional referral code, 0 for now
      onBehalfOf as `0x${string}`, // safe to cast because enabled is set
    ],
  });
  const { write: borrow, status } = useContractWrite(borrowConfig);
  return { borrow, status };
}
