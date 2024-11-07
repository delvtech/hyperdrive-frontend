import { createLruSimpleCache, Drift, DriftOptions } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { getPublicClient, GetPublicClientParameters } from "@wagmi/core";
import { wagmiConfig } from "src/network/wagmiClient";

// 1 minute TTL to match the queryClient's staleTime
export const sdkCache = createLruSimpleCache({ max: 500, ttl: 60_000 });

export function getDriftOptions({
  chainId,
}: {
  chainId?: number;
} = {}): DriftOptions {
  return {
    cache: sdkCache,
    cacheNamespace: chainId,
  };
}

export function getDrift(params?: GetPublicClientParameters): Drift {
  const publicClient = getPublicClient(wagmiConfig as any, params) as any;
  return new Drift(viemAdapter({ publicClient }), getDriftOptions(params));
}
