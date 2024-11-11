import { Drift, ReadWriteAdapter } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { useMemo } from "react";
import { getDriftOptions } from "src/drift/getDrift";
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
        ? new Drift(
            viemAdapter({ publicClient, walletClient }),
            getDriftOptions({ chainId: publicClient.chain.id }),
          )
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
        ? new Drift(
            viemAdapter({ publicClient, walletClient }),
            getDriftOptions({ chainId: publicClient.chain.id }),
          )
        : undefined,
    [publicClient, walletClient],
  );
}
