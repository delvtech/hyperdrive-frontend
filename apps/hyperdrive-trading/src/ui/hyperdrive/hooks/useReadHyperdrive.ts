import {
  ReadHyperdrive,
  ReadMetaMorphoHyperdrive,
  ReadStEthHyperdrive,
} from "@delvtech/hyperdrive-viem";
import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { getIsMetaMorpho } from "src/vaults/isMetaMorpho";
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

  return useMemo(() => {
    if (!address || !publicClient || !sharesToken) {
      return undefined;
    }

    const isSteth = getIsSteth(sharesToken);
    if (isSteth) {
      return new ReadStEthHyperdrive({
        address,
        publicClient,
        cache: sdkCache,
        namespace: chainId.toString(),
      });
    }

    const isMetaMorpho = getIsMetaMorpho(sharesToken);
    if (isMetaMorpho) {
      return new ReadMetaMorphoHyperdrive({
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
  }, [address, publicClient, sharesToken, chainId]);
}
