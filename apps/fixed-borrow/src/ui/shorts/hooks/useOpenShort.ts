import { BigNumber } from "ethers";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";
import { HyperdriveABI } from "@hyperdrive/core";

interface UseOpenShortOptions {
  hyperdrivePool: Address;
  bondAmount: BigNumber | undefined;
  maxDeposit: BigNumber | undefined;
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
  });

  const { write: openShort, status } = useContractWrite(config);
  return { openShort, openShortStatus: status };
}
