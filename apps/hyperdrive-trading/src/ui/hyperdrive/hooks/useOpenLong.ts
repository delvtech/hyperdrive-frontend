import { HyperdriveABI } from "@hyperdrive/core";
import { BigNumber } from "ethers";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useSigner,
} from "wagmi";

interface UseOpenLongOptions {
  market: HyperdriveMarket;
  baseAmount: bigint | undefined;
  bondAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseOpenLongResult {
  openLong: (() => void) | undefined;
  openLongStatus: "error" | "idle" | "success" | "loading";
}

export function useOpenLong({
  market,
  baseAmount,
  bondAmountOut,
  destination,
  asUnderlying = true,
  enabled,
}: UseOpenLongOptions): UseOpenLongResult {
  // There is no callStatic wagmi hook, so we gotta call the contract directly,
  // see: https://github.com/wagmi-dev/wagmi/discussions/1571
  const { data: signer } = useSigner();

  const queryEnabled =
    !!baseAmount && !!bondAmountOut && !!destination && enabled;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "openLong",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          BigNumber.from(baseAmount),
          BigNumber.from(bondAmountOut),
          destination,
          asUnderlying,
        ]
      : undefined,
    // TODO better gas optimization
    overrides: { gasLimit: BigNumber.from(500_000) },
  });

  const { write: openLong, status } = useContractWrite(config);
  return { openLong, openLongStatus: status };
}
