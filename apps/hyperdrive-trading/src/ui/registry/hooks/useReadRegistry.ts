import { ReadRegistry } from "@delvtech/hyperdrive-viem";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { usePublicClient } from "wagmi";

export function useReadRegistry(chainId: number): ReadRegistry | undefined {
  const { registries } = useAppConfigForConnectedChain();
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
