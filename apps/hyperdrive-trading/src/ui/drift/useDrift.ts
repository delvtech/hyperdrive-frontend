import { createDrift, Drift, ReadWriteAdapter } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { useMemo } from "react";
import { driftCache } from "src/network/drift";
import {
  usePublicClient,
  UsePublicClientParameters,
  useWalletClient,
  UseWalletClientParameters,
} from "wagmi";

export function useDrift(
  params?: UsePublicClientParameters,
): Drift | undefined {
  const publicClient = usePublicClient(params);
  const { data: walletClient } = useWalletClient(params);

  return useMemo(
    () =>
      publicClient
        ? createDrift({
            adapter: viemAdapter({ publicClient, walletClient }),
            chainId: publicClient.chain.id,
            cache: driftCache,
          })
        : undefined,
    [publicClient, walletClient],
  );
}

export function useReadWriteDrift(
  params?: UseWalletClientParameters,
): Drift<ReadWriteAdapter> | undefined {
  const publicClient = usePublicClient(params);
  const { data: walletClient } = useWalletClient(params);
  return useMemo(
    () =>
      publicClient && walletClient
        ? createDrift({
            adapter: viemAdapter({ publicClient, walletClient }),
            chainId: publicClient.chain.id,
            cache: driftCache,
          })
        : undefined,
    [publicClient, walletClient],
  );
}
