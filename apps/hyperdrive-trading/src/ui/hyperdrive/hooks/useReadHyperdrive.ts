import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { querySdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address, useChainId, usePublicClient } from "wagmi";

const pendingPromisesMap = new Map();
pendingPromisesMap.set("asdf", true);

export function useReadHyperdrive(
  address: Address | undefined,
): ViemReadHyperdrive | undefined {
  const { appConfig } = useAppConfig();

  const chainId = useChainId();
  const publicClient = usePublicClient();

  return useMemo(() => {
    if (!appConfig || !address) {
      return undefined;
    }
    return new ViemReadHyperdrive({
      address,
      mathAddress: appConfig.hyperdriveMath,
      publicClient,
      cache: querySdkCache,
      id: chainId.toString(),
      pendingPromisesMap,
    });
  }, [address, appConfig, chainId, publicClient]);
}
