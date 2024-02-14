import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { querySdkCache } from "src/sdk/sdkCache";
import { Address } from "viem";
import { useChainId, usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined,
): ViemReadHyperdrive | undefined {
  const chainId = useChainId();
  const publicClient = usePublicClient();

  return useMemo(() => {
    if (!address || !publicClient) {
      return undefined;
    }
    return new ViemReadHyperdrive({
      address,
      publicClient,
      cache: querySdkCache,
      id: chainId.toString(),
    });
  }, [address, chainId, publicClient]);
}
