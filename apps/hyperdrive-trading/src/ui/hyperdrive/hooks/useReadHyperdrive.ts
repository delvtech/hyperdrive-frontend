import { ReadHyperdrive, createReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { querySdkCache } from "src/sdk/sdkCache";
import { Address } from "viem";
import { useChainId, usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined,
): ReadHyperdrive | undefined {
  const chainId = useChainId();
  const publicClient = usePublicClient();

  return useMemo(() => {
    if (!address || !publicClient) {
      return undefined;
    }
    return createReadHyperdrive({
      address,
      publicClient,
      cache: querySdkCache,
      namespace: chainId.toString(),
    });
  }, [address, chainId, publicClient]);
}
