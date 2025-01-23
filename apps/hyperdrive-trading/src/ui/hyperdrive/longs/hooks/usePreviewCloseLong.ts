import { fixed } from "@delvtech/fixed-point-wasm";
import {
  getBaseToken,
  getHyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { getDepositAssets } from "src/hyperdrive/getDepositAssets";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { Address } from "viem";

interface UsePreviewCloseLongOptions {
  chainId: number;
  hyperdriveAddress: Address | undefined;
  /**
   * Time in seconds, as the contracts require
   */
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  tokenOutAddress: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseLongResult {
  amountOut: bigint | undefined;
  flatPlusCurveFee: bigint | undefined;
  previewCloseLongStatus: QueryStatusWithIdle;
  previewCloseLongError: Error;
}

export function usePreviewCloseLong({
  hyperdriveAddress,
  chainId,
  tokenOutAddress,
  maturityTime,
  bondAmountIn,
  asBase = true,
  enabled = true,
}: UsePreviewCloseLongOptions): UsePreviewCloseLongResult {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const appConfig = useAppConfigForConnectedChain();

  const queryEnabled =
    !!hyperdriveAddress &&
    !!maturityTime &&
    !!bondAmountIn &&
    !!readHyperdrive &&
    !!tokenOutAddress &&
    enabled;

  const baseToken = getBaseToken({
    hyperdriveChainId: chainId,
    hyperdriveAddress: hyperdriveAddress!,
    appConfig,
  });

  const hyperdriveConfig = getHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdriveAddress: hyperdriveAddress!,
    appConfig,
  });

  const depositAssets = getDepositAssets(hyperdriveConfig);
  const isZapping = !depositAssets.some(
    (asset) => asset.address === tokenOutAddress
  );

  // If we're zapping, we'll need to convert the zap token to fiat and then into
  // base so we can correctly preview the tx using the sdk. To do this, we need
  // the fiat price of both the zap and base token
  const { fiatPrice: zapTokenPrice } = useTokenFiatPrice({
    tokenAddress: tokenOutAddress,
    chainId,
    enabled: isZapping,
  });

  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    tokenAddress: baseToken.address,
    chainId,
    enabled: isZapping,
  });

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: makeQueryKey("previewCloseLong", {
      chainId,
      hyperdriveAddress,
      maturityTime: maturityTime?.toString(),
      bondAmountIn: bondAmountIn?.toString(),
      asBase,
      tokenAddress: tokenOutAddress,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          if (isZapping) {
            const resultInBase = await readHyperdrive.previewCloseLong({
              maturityTime,
              bondAmountIn,
              asBase: true, // Safe to hardcode to true because previewCloseLong uses the Rust SDK, which doesn't perform checks on if the pool has a base or shares token
            });

            // Step 1: Calculate fiat value of the base amount
            const fiatValueOfAmountOut = baseTokenPrice
              ? fixed(baseTokenPrice).mul(
                  resultInBase.amountOut,
                  hyperdriveConfig.decimals
                )
              : 0n;

            // Step 2: Convert that fiat value into the ZAP token amount
            const zapAmountOut = zapTokenPrice
              ? fixed(fiatValueOfAmountOut).div(
                  zapTokenPrice,
                  hyperdriveConfig.decimals
                )
              : 0n;

            return {
              ...resultInBase,
              amountOut: zapAmountOut ? zapAmountOut.bigint : 0n,
            };
          }

          const result = await readHyperdrive.previewCloseLong({
            maturityTime,
            bondAmountIn,
            asBase: isZapping,
          });
          if (!asBase) {
            return {
              ...result,
              amountOut: await prepareSharesOut({
                appConfig,
                chainId,
                sharesAmount: result.amountOut,
                readHyperdrive,
              }),
            };
          }

          return result;
        }
      : undefined,
  });

  return {
    amountOut: data?.amountOut,
    flatPlusCurveFee: data?.flatPlusCurveFee,
    previewCloseLongStatus: getStatus(status, fetchStatus),
    previewCloseLongError: error as Error,
  };
}
