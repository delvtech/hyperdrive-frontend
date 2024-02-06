import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { zeroAddress } from "viem";
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
  asBase?: boolean;
}

export function useOpenShort({
  hyperdrivePool,
  bondAmount,
  maxDeposit,
  destination,
  asBase = true,
}: UseOpenShortOptions): {
  openShort: (() => void) | undefined;
  openShortStatus: "error" | "idle" | "success" | "loading";
} {
  const { data: poolInfo } = useContractRead({
    abi: IHyperdrive.abi,
    address: hyperdrivePool,
    functionName: "getPoolInfo",
  });
  const queryEnabled =
    !!bondAmount && !!maxDeposit && !!destination && !!poolInfo;
  const { config } = usePrepareContractWrite({
    abi: IHyperdrive.abi,
    address: hyperdrivePool,
    functionName: "openShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          bondAmount,
          maxDeposit,
          poolInfo.vaultSharePrice,
          { destination, asBase, extraData: zeroAddress },
        ]
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
