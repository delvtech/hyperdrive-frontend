import { ReadHyperdrive, ReadStEthHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { getIsSteth } from "src/vaults/isSteth";
import { Address } from "viem";
import { useChainId, usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined,
): ReadHyperdrive | undefined {
  const chainId = useChainId();
  const publicClient = usePublicClient();

  const appConfig = useAppConfig();

  const hyperdriveConfig = address
    ? findHyperdriveConfig({
        hyperdriveAddress: address,
        hyperdrives: appConfig.hyperdrives,
      })
    : undefined;
  const sharesToken = hyperdriveConfig
    ? findYieldSourceToken({
        yieldSourceTokenAddress: hyperdriveConfig.sharesToken,
        tokens: appConfig.tokens,
      })
    : undefined;
  const isSteth = !!sharesToken && getIsSteth(sharesToken);

  return useMemo(() => {
    if (!address || !publicClient) {
      return undefined;
    }

    if (isSteth) {
      return new ReadStEthHyperdrive({
        address,
        publicClient,
        cache: sdkCache,
        namespace: chainId.toString(),
      });
    }

    return new ReadHyperdrive({
      address,
      publicClient,
      cache: sdkCache,
      namespace: chainId.toString(),
    });
  }, [address, chainId, publicClient, isSteth]);
}
