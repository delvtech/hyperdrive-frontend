import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { querySdkCache } from "src/sdk/sdkCache";
import { Address, useChainId, usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined,
): ViemReadHyperdrive | undefined {
  const chainId = useChainId();
  const publicClient = usePublicClient();

  return useMemo(() => {
    if (!address) {
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
