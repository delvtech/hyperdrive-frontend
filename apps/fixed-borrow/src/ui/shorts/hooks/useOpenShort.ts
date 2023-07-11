import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";
import { HyperdriveABI } from "@hyperdrive/core";

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
  const queryEnabled = !!bondAmount && !!maxDeposit && !!destination;
  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: hyperdrivePool,
    functionName: "openShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [bondAmount, maxDeposit, destination, asUnderlying]
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
