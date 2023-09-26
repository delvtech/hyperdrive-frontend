import { ReadWriteHyperdrive } from "@hyperdrive/sdk";
import { ViemReadWriteHyperdrive } from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address, useChainId, usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdrive(
  address: Address | undefined,
): ReadWriteHyperdrive | undefined {
  const { appConfig } = useAppConfig();

  const chainId = useChainId();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  return useMemo(() => {
    if (!appConfig || !walletClient || !address) {
      return undefined;
    }

    return new ViemReadWriteHyperdrive({
      address,
      mathAddress: appConfig.hyperdriveMath,
      publicClient,
      walletClient,
      cache: sdkCache,
      id: chainId.toString(),
    });
  }, [address, appConfig, chainId, publicClient, walletClient]);
}
