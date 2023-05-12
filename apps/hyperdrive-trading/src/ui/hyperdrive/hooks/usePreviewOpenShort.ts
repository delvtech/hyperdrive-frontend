import { useQuery } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { QueryStatusType } from "src/ui/base/types";
import { Address } from "wagmi";

interface UsePreviewOpenShortOptions {
  market: HyperdriveMarket;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewOpenShortResult {
  status: QueryStatusType;
  baseAmountIn: bigint | undefined;
}

export function usePreviewOpenShort({
  market,
  amountBondShorts,
  maxBaseAmountIn,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  // const { data: signer } = useSigner();

  // const hyperdriveContract = useContract({
  //   abi: HyperdriveABI,
  //   address: market.address,
  //   // In order for callStatic to work, you need a signer still, and enough
  //   // allowance to compute the preview.
  //   signerOrProvider: signer,
  // });

  const queryEnabled =
    !!amountBondShorts &&
    !!maxBaseAmountIn &&
    !!destination &&
    // !!hyperdriveContract &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-open-short",
      market.address,
      amountBondShorts?.toString(),
      maxBaseAmountIn?.toString(),
      destination,
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          // const openShortResult =
          //   (await hyperdriveContract.callStatic.openShort(
          //     BigNumber.from(amountBondShorts),
          //     BigNumber.from(maxBaseAmountIn),
          //     destination,
          //     asUnderlying,
          //   )) as unknown as BigNumber;
          // return openShortResult.toBigInt();

          return 0n;
        }
      : undefined,
  });
  return { baseAmountIn: data, status };
}
