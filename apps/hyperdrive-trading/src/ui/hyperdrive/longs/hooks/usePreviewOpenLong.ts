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
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
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

  const zapTokenPrice = useTokenFiatPrice({
    chainId: 1,
    tokenAddress,
  });

  const baseTokenPrice = useTokenFiatPrice({
    chainId: 1,
    tokenAddress: baseToken.address,
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

            // TODO: Use the correct token decimals, this only works for USDC
            const fiatValueOfZapAmount = fixed(
              zapTokenPrice.fiatPrice ?? 0n,
            ).mul(amountIn, 6);

            // Get the fiat price of the base token.
            const baseTokenFiatPrice = baseTokenPrice.fiatPrice ?? 0n;

            // zap amount converted to base
            const zapAmountInBase =
              fiatValueOfZapAmount.div(baseTokenFiatPrice);

            // apply slippage to the base amount
            // (1 - slippageAmount) * baseAmount
            const slipageAmount = parseFixed("0.005");
            finalAmountIn = parseFixed("1")
              .sub(slipageAmount)
              .mul(zapAmountInBase).bigint;
          }

          const finalAsBase = asBase || isZapToken;
          return readHyperdrive.previewOpenLong({
            amountIn: finalAsBase
              ? finalAmountIn
              : await prepareSharesIn({
                  chainId,
                  appConfig,
                  readHyperdrive,
                  sharesAmount: finalAmountIn,
                }),
            asBase: finalAsBase,
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
