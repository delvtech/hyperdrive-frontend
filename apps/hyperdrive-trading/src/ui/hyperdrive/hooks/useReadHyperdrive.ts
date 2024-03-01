import {
  ReadHyperdrive,
  createReadHyperdrive,
} from "@delvtech/hyperdrive-viem";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
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
      cache: sdkCache,
      namespace: chainId.toString(),
    });
  }, [address, chainId, publicClient]);
}
