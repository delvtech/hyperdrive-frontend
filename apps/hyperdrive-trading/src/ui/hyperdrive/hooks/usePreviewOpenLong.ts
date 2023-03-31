import { BigNumber } from "@ethersproject/bignumber";
import { HyperdriveABI } from "@hyperdrive/core";
import { useQuery } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { Address, useContract, useSigner } from "wagmi";

interface UsePreviewOpenLongOptions {
  market: HyperdriveMarket;
  baseAmount: bigint | undefined;
  bondAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewOpenLongResult {
  status: "error" | "idle" | "loading" | "success";
  longAmountOut: bigint | undefined;
}

export function usePreviewOpenLong({
  market,
  baseAmount,
  bondAmountOut,
  destination,
  asUnderlying = true,
  enabled,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  // There is no callStatic wagmi hook, so we gotta call the contract directly,
  // see: https://github.com/wagmi-dev/wagmi/discussions/1571
  const { data: signer } = useSigner();

  const hyperdriveContract = useContract({
    abi: HyperdriveABI,
    address: market.address,
    // In order for callStatic to work, you need a signer still, and enough
    // allowance to compute the preview.
    signerOrProvider: signer,
  });

  const queryEnabled =
    !!baseAmount &&
    !!bondAmountOut &&
    !!destination &&
    !!hyperdriveContract &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-open-long",
      market.address,
      {
        baseAmount: baseAmount?.toString(),
        bondAmountOut: bondAmountOut?.toString(),
        destination: destination?.toString(),
      },
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const openLongResult = (await hyperdriveContract.callStatic.openLong(
            BigNumber.from(baseAmount * BigInt(1e18)),
            BigNumber.from(bondAmountOut),
            destination,
            asUnderlying,
          )) as unknown as BigNumber;
          return openLongResult.toBigInt();
        }
      : undefined,
  });
  return { longAmountOut: data, status };
}
