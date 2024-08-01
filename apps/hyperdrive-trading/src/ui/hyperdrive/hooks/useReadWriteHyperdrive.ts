import {
  ReadWriteHyperdrive,
  ReadWriteStEthHyperdrive,
} from "@delvtech/hyperdrive-viem";
import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { getIsSteth } from "src/vaults/isSteth";
import { Address } from "viem";
import { useChainId, usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdrive(
  address: Address | undefined,
): ReadWriteHyperdrive | undefined {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

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
    if (
      !walletClient ||
      !address ||
      !publicClient ||
      !walletClient ||
      !sharesToken
    ) {
      return undefined;
    }

    const isSteth = getIsSteth(sharesToken);
    if (isSteth) {
      return new ReadWriteStEthHyperdrive({
        address,
        publicClient,
        cache: sdkCache,
        namespace: chainId.toString(),
      });
    }

    return new ReadWriteHyperdrive({
      address,
      publicClient,
      walletClient,
      cache: sdkCache,
      namespace: chainId.toString(),
    });
  }, [address, chainId, publicClient, sharesToken, walletClient]);
}
