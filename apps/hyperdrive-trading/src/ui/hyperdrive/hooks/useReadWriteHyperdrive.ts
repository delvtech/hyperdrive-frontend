import { ReadWriteHyperdrive } from "@hyperdrive/sdk";
import { ViemReadWriteHyperdrive } from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { querySdkCache } from "src/sdk/sdkCache";
import { useAppConfigOld } from "src/ui/appconfig/useAppConfigOld";
import { Address, useChainId, usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdrive(
  address: Address | undefined,
): ReadWriteHyperdrive | undefined {
  const { appConfig } = useAppConfigOld();

  const chainId = useChainId();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  return useMemo(() => {
    if (!appConfig || !walletClient || !address) {
      return undefined;
    }

    return new ViemReadWriteHyperdrive({
      address,
      publicClient,
      walletClient,
      cache: querySdkCache,
      id: chainId.toString(),
    });
  }, [address, appConfig, chainId, publicClient, walletClient]);
}
