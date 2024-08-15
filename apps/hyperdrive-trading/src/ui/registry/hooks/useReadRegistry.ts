import { ReadRegistry } from "@delvtech/hyperdrive-viem";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";

export function useReadRegistry(chainId: number): ReadRegistry | undefined {
  const { registries } = useAppConfig();
  const publicClient = usePublicClient();
  return useMemo(
    () =>
      publicClient
        ? new ReadRegistry({
            address: registries[chainId],
            publicClient,
            cache: sdkCache,
          })
        : undefined,
    [publicClient, registries, chainId],
  );
}
