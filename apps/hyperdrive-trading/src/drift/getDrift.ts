import { createDrift, LruStore, type Drift, type Store } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import {
  getPublicClient,
  getWalletClient,
  type GetPublicClientParameters,
  type GetWalletClientParameters,
} from "@wagmi/core";
import { wagmiConfig } from "src/network/wagmiClient";

export const driftStore = new LruStore({
  max: 500,
  ttl: 60_000, // 1 minute TTL to match the queryClient's staleTime
});

type WagmiConfig = typeof wagmiConfig;

export type GetDriftOptions = GetPublicClientParameters<WagmiConfig> &
  GetWalletClientParameters<WagmiConfig> & {
    store?: Store;
  };

export async function getDrift(options?: GetDriftOptions): Promise<Drift> {
  const publicClient = getPublicClient(wagmiConfig, options);
  const walletClient = await getWalletClient(wagmiConfig, options).catch(
    () => undefined,
  );
  return createDrift({
    adapter: publicClient
      ? viemAdapter({ publicClient, walletClient })
      : undefined,
    store: options?.store || driftStore,
  });
}
