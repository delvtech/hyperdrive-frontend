import { PoolABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export function useSupplyCollateral(
  token: `0x${string}`,
  amount: BigNumber,
  onBehalfOf: `0x${string}` | undefined,
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
      onBehalfOf as `0x${string}`, // safe to cast because enabled is set
      0, // an optional referral code, 0 for now
    ],
  });
  const { write: supply, status } = useContractWrite(supplyConfig);
  return { supply, status };
}
