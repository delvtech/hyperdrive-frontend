import { HyperdriveABI } from "@hyperdrive/sdk";
import {
  Address,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

interface UseOpenShortOptions {
  hyperdrivePool: Address;
  bondAmount: bigint | undefined;
  maxDeposit: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
}

export function useOpenShort({
  hyperdrivePool,
  bondAmount,
  maxDeposit,
  destination,
  asUnderlying = true,
}: UseOpenShortOptions): {
  openShort: (() => void) | undefined;
  openShortStatus: "error" | "idle" | "success" | "loading";
} {
  const { data: poolInfo } = useContractRead({
    abi: HyperdriveABI,
    address: hyperdrivePool,
    functionName: "getPoolInfo",
  });
  const queryEnabled =
    !!bondAmount && !!maxDeposit && !!destination && !!poolInfo;
  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: hyperdrivePool,
    functionName: "openShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [bondAmount, maxDeposit, poolInfo.sharePrice, destination, asUnderlying]
      : undefined,
    // The gas cost estimate is innacurate because openShort also deposits into
    // the DSR, which has a variable gas cost.
    // TODO: Get the estimateGas value then multiply it by some constant instead
    gas: 500_000n,
    value: 0n,
  });

  const { write: openShort, status } = useContractWrite(config);
  return { openShort, openShortStatus: status };
}
