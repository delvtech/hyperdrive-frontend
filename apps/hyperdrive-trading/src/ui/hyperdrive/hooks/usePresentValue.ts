import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AppConfig,
  getBaseToken,
  getHyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { ZERO_ADDRESS } from "src/base/constants";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { queryClient } from "src/network/queryClient";
import { wagmiConfig } from "src/network/wagmiClient";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { makeTokenFiatPriceQuery } from "src/ui/token/hooks/useTokenFiatPrice";
import { Address, PublicClient } from "viem";

export function usePresentValue({
  chainId,
  hyperdriveAddress,
}: {
  chainId: number;
  hyperdriveAddress: Address;
}): {
  presentValue:
    | {
        base: bigint;
        fiat: bigint | undefined;
      }
    | undefined;
  presentValueStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const appConfig = useAppConfigForConnectedChain();
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "hyperdrive",
      queryId: "presentValue",
      params: { chainId, hyperdriveAddress },
    }),
    queryFn: queryEnabled
      ? async () => {
          const publicClient = getPublicClient(wagmiConfig as any, {
            chainId,
          }) as PublicClient;

          return getPresentValue({
            appConfig,
            hyperdriveAddress,
            chainId,
            publicClient,
            readHyperdrive,
          });
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    presentValue: data,
    presentValueStatus: status,
  };
}

export function getPresentValue({
  appConfig,
  hyperdriveAddress,
  chainId,
  publicClient,
  readHyperdrive,
}: {
  appConfig: AppConfig;
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  chainId: number;
  readHyperdrive: ReadHyperdrive;
}): Promise<{ base: bigint; fiat: bigint | undefined }> {
  const hyperdriveConfig = getHyperdriveConfig({
    appConfig,
    hyperdriveAddress,
    hyperdriveChainId: chainId,
  });
  const baseToken = getBaseToken({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });
  const isFiatSupported =
    !isTestnetChain(chainId) && baseToken.address !== ZERO_ADDRESS;
  const fiatPricePromise = isFiatSupported
    ? queryClient
        .fetchQuery(
          makeTokenFiatPriceQuery({
            appConfig,
            chainId: baseToken.chainId,
            tokenAddress: baseToken.address,
          }),
        )
        .catch(() => undefined)
    : Promise.resolve(undefined);

  return Promise.all([readHyperdrive.getPresentValue(), fiatPricePromise]).then(
    ([presentValue, fiatPrice]) => {
      const presentValueFiat = fiatPrice
        ? fixed(presentValue, hyperdriveConfig.decimals).mul(fiatPrice).bigint
        : undefined;

      return {
        base: presentValue,
        fiat: presentValueFiat,
      };
    },
  );
}
