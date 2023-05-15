import { PoolABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

export function useSupplyCollateral(
  token: Address,
  amount: bigint,
  onBehalfOf: Address | undefined,
): {
  supply: (() => void) | undefined;
  status: "error" | "success" | "loading" | "idle";
} {
  const { config: supplyConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.pool,
    abi: PoolABI,
    functionName: "supply",
    enabled: !!onBehalfOf,
    args: [
      token,
      amount,
      onBehalfOf as Address, // safe to cast because enabled is set
      0, // an optional referral code, 0 for now
    ],
  });
  const { write: supply, status } = useContractWrite(supplyConfig);
  return { supply, status };
}
