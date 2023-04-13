import { BigNumber } from "@ethersproject/bignumber";
import { HyperdriveABI } from "@hyperdrive/core";
import { useQuery } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { WagmiHookStatusType } from "src/ui/base/types";
import { Address, useContract, useSigner } from "wagmi";

interface UsePreviewCloseLongOptions {
  market: HyperdriveMarket;
  tokenID: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseLongResult {
  previewCloseLongStatus: WagmiHookStatusType;
  baseAmountOut: bigint | undefined;
}

export function usePreviewCloseLong({
  market,
  tokenID,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewCloseLongOptions): UsePreviewCloseLongResult {
  const { data: signer } = useSigner();

  const hyperdriveContract = useContract({
    abi: HyperdriveABI,
    address: market.address,
    signerOrProvider: signer,
  });

  const queryEnabled =
    !!bondAmountIn &&
    !!minBaseAmountOut &&
    !!destination &&
    !!hyperdriveContract &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-close-long",
      market.address,
      bondAmountIn?.toString(),
      minBaseAmountOut?.toString(),
      destination?.toString(),
      ,
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const openLongResult = (await hyperdriveContract.callStatic.closeLong(
            BigNumber.from(tokenID),
            BigNumber.from(bondAmountIn),
            BigNumber.from(minBaseAmountOut),
            destination,
            asUnderlying,
          )) as unknown as BigNumber;
          return openLongResult.toBigInt();
        }
      : undefined,
  });

  return { baseAmountOut: data, previewCloseLongStatus: status };
}
