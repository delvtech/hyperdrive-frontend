import {
  createDrift,
  Drift,
  ReadWriteAdapter,
  type Store,
} from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { useMemo } from "react";
import { driftStore } from "src/drift/getDrift";
import {
  usePublicClient,
  UsePublicClientParameters,
  useWalletClient,
  UseWalletClientParameters,
} from "wagmi";

export interface UseDriftViemOptions
  extends UsePublicClientParameters,
    UseWalletClientParameters {
  store?: Store;
}

export function useDrift(options?: UseDriftViemOptions): Drift | undefined {
  const publicClient = usePublicClient(options);
  const { data: walletClient } = useWalletClient(options);

  return useMemo(() => {
    if (!publicClient) {
      return undefined;
    }

    return createDrift({
      adapter: viemAdapter({ publicClient, walletClient }),
      store: options?.store || driftStore,
    });
  }, [publicClient, walletClient, options?.store]);
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
            store: driftStore,
          })
        : undefined,
    [publicClient, walletClient],
  );
}
