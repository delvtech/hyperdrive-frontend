import {
  ReadWriteHyperdrive,
  createReadWriteHyperdrive,
} from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { querySdkCache } from "src/sdk/sdkCache";
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
      cache: querySdkCache,
      namespace: chainId.toString(),
    });
  }, [address, chainId, publicClient, walletClient]);
}
