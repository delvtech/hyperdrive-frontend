import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getBaseToken,
  getToken,
} from "@delvtech/hyperdrive-appconfig";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { parseUnits } from "src/base/parseUnits";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { getTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";
interface UsePreviewOpenLongOptions {
  chainId: number;
  hyperdriveAddress: Address;
  amountIn: bigint | undefined;
  tokenAddress: Address;
  asBase: boolean;
}

interface UsePreviewOpenLongResult {
  status: QueryStatusWithIdle;
  bondsReceived: bigint | undefined;
  maturityTime: bigint | undefined;
  spotPriceAfterOpen: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
}

export function usePreviewOpenLong({
  hyperdriveAddress,
  chainId,
  amountIn,
  tokenAddress,
  asBase,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const baseToken = getBaseToken({
    appConfig,
    hyperdriveAddress,
    hyperdriveChainId: chainId,
  });

  const sharesToken = getToken({
    appConfig,
    tokenAddress,
    chainId,
  });

  const queryEnabled = amountIn !== undefined && !!readHyperdrive;
  const { data: blockNumber } = useBlockNumber({
    watch: false,
    chainId: chainId,
    query: { enabled: queryEnabled },
  });
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
      chainId,
      hyperdrive: hyperdriveAddress,
      amountIn: amountIn?.toString(),
      asBase,
      blockNumber: blockNumber?.toString(),
      tokenAddress,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          let finalAmountIn = amountIn;
          const isZapToken = ![
            baseToken.address,
            sharesToken?.address,
          ].includes(tokenAddress);
          const zapTokenPrice = await getTokenFiatPrice({
            chainId,
            tokenAddress,
          });
          const baseTokenPrice = await getTokenFiatPrice({
            chainId,
            tokenAddress: baseToken.address,
          });
          if (isZapToken && zapTokenPrice && baseTokenPrice) {
            const zapTokenInDai = fixed(amountIn).div(zapTokenPrice);
            const amountOutMinimum = adjustAmountByPercentage({
              amount: zapTokenInDai.bigint,
              percentage: parseUnits("0.5", 18),
              decimals: 18,
              direction: "down",
            });

            // Use this amount in the previewOpenLong amountIn
            finalAmountIn = (amountOutMinimum * BigInt(1e18)) / baseTokenPrice;
          }
          return readHyperdrive.previewOpenLong({
            amountIn: asBase
              ? finalAmountIn
              : await prepareSharesIn({
                  chainId,
                  appConfig,
                  readHyperdrive,
                  sharesAmount: finalAmountIn,
                }),
            asBase,
          });
        }
      : undefined,
  });

  return {
    bondsReceived: data?.bondProceeds,
    maturityTime: data?.maturityTime,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    curveFee: data?.curveFee,
    status: getStatus(status, fetchStatus),
  };
}
