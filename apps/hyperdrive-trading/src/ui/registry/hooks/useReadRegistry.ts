import { ReadRegistry } from "@delvtech/hyperdrive-viem";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";

export function useReadRegistry(): ReadRegistry | undefined {
  const { registryAddress } = useAppConfig();
  const publicClient = usePublicClient();
  return useMemo(
    () =>
      publicClient
        ? new ReadRegistry({
            address: registryAddress,
            publicClient,
            cache: sdkCache,
          })
        : undefined,
    [registryAddress, publicClient],
  );
}
