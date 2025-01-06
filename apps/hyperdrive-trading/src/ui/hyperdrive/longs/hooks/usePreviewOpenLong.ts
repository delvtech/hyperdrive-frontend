import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getBaseToken,
  getHyperdriveConfig,
  getToken,
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

  const depositAssets = getDepositAssets(
    getHyperdriveConfig({
      hyperdriveChainId: chainId,
      hyperdriveAddress,
      appConfig,
    })
  );

  const isZapToken = !depositAssets.some(
    (asset) => asset.address === tokenAddress
  );

  const { fiatPrice: zapTokenPrice } = useTokenFiatPrice({
    // This hook should only be enabled if the token is a zap token.
    // For testing purposes we are grabbing the token price from mainnet.
    chainId: 1,
    tokenAddress,
    enabled: isZapToken,
  });

  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    // For testing purposes on zaps we are grabbing the token price from mainnet.
    chainId: isZapToken ? 1 : baseToken.chainId,
    tokenAddress: baseToken.address,
    enabled: true,
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

          if (isZapToken) {
            const zapToken = getToken({
              appConfig,
              chainId: 1,
              tokenAddress,
            });
            const fiatValueOfZapAmount =
              zapTokenPrice && zapToken
                ? fixed(zapTokenPrice).mul(amountIn, zapToken.decimals)
                : 0n;

            // Get the fiat price of the base token.
            const zapAmountInBase =
              fiatValueOfZapAmount && baseTokenPrice
                ? fiatValueOfZapAmount.div(baseTokenPrice)
                : 0n;

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
