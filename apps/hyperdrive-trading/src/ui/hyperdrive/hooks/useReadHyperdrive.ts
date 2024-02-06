import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { querySdkCache } from "src/sdk/sdkCache";
import { useAppConfigOld } from "src/ui/appconfig/useAppConfigOld";
import { Address, useChainId, usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined,
): ViemReadHyperdrive | undefined {
  const { appConfig } = useAppConfigOld();

  const chainId = useChainId();
  const publicClient = usePublicClient();

  return useMemo(() => {
    if (!appConfig || !address) {
      return undefined;
    }
    return new ViemReadHyperdrive({
      address,
      publicClient,
      cache: querySdkCache,
      id: chainId.toString(),
    });
  }, [address, appConfig, chainId, publicClient]);
}
