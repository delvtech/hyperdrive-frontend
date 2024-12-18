import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getBaseToken,
  getHyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { getDepositAssets } from "src/hyperdrive/getDepositAssets";
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

          const depositAssets = getDepositAssets(
            getHyperdriveConfig({
              hyperdriveChainId: chainId,
              hyperdriveAddress,
              appConfig,
            }),
          );

          // TODO: Determine the best way to access the shares token on this pool. TokenAddress points to the zap token, but we need to get the shares token.
          const isZapToken = !depositAssets.some(
            (asset) => asset.address === tokenAddress,
          );

          if (isZapToken) {
            // Get the fiat price of the zap token. ~$4000 for something like WETH, $1 for DAI.
            const zapTokenPrice = await getTokenFiatPrice({
              chainId: 1,
              tokenAddress,
            });
            const fiatValueOfZapAmount = fixed(zapTokenPrice).mul(
              fixed(amountIn, 6),
            );
            console.log("fiatValueOfZapAmount", fiatValueOfZapAmount.format());

            // Get the fiat price of the base token.
            const baseTokenFiatPrice = await getTokenFiatPrice({
              chainId: 1,
              tokenAddress: baseToken.address,
            });
            const zapAmountInBase =
              fiatValueOfZapAmount.div(baseTokenFiatPrice);
            const slipageAmount = parseFixed("0.005");
            finalAmountIn = parseFixed("1")
              .sub(slipageAmount)
              .mul(zapAmountInBase).bigint;

            // const slippageAmount = 0.0005 // aka 0.5%
            // const amountOutMinimum = (1 - slippageAmount) * zapAmountInBase

            // // Convert the prices to fixed point numbers.
            // const zapPrice = fixed(zapTokenPrice);
            // const basePrice = fixed(baseTokenPrice);
            // // Calculate the ratio of the prices.
            // const ratio = zapPrice.div(basePrice);
            // // Decide if they're roughly the same (say ±1%) because this will impact how we calculate the amount of base to convert to. For example, if we are in a DAI pool and choose USDC as the zap token, we can just use the amountIn as the final amount. But we need a different calculation if the base token is DAI and the zap token is WETH.
            // if (ratio.lt(parseFixed("1.01")) && ratio.gt(parseFixed("0.99"))) {
            //   console.log(
            //     "Stablecoins are roughly the same, using original amount",
            //   );
            //   finalAmountIn = amountIn;
            // } else {
            //   // Convert the amountIn to the base token amount. Example: 1 WETH * $4000 / $1 = $4000.
            //   const amountInBaseToken = fixed(amountIn)
            //     .mul(basePrice)
            //     .div(fixed(1e18)).bigint;
            //   // Apply the slippage. In this case its 0.5% down.
            //   finalAmountIn = adjustAmountByPercentage({
            //     amount: amountInBaseToken,
            //     percentage: parseUnits("0.5", 18),
            //     decimals: 18,
            //     direction: "down",
            //   });
            // }
          }

          console.log("finalAmountIn", finalAmountIn, asBase);
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
