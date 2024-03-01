import {
  ReadWriteHyperdrive,
  createReadWriteHyperdrive,
} from "@delvtech/hyperdrive-viem";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { Address } from "viem";
import { useChainId, usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdrive(
  address: Address | undefined,
): ReadWriteHyperdrive | undefined {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  return useMemo(() => {
    if (!walletClient || !address || !publicClient || !walletClient) {
      return undefined;
    }

    return createReadWriteHyperdrive({
      address,
      publicClient,
      walletClient,
      cache: sdkCache,
      namespace: chainId.toString(),
    });
  }, [address, chainId, publicClient, walletClient]);
}
