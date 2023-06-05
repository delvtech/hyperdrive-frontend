import { AddressesJson, HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { SupportedChainId } from "src/appconfig/chains/supportedChains";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { AppConfig } from "src/appconfig/types";
import { useChainId, usePublicClient } from "wagmi";

const LOCALHOST_ADDRESSES_URL = import.meta.env.VITE_LOCALHOST_ADDRESSES_URL;
export function useAppConfig(): {
  appConfig: AppConfig | undefined;
  appConfigStatus: "idle" | "error" | "loading" | "success";
} {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const { data: appConfig, status: appConfigStatus } = useQuery({
    queryKey: ["app-config", { chainId }],
    queryFn: async () => {
      switch (chainId as SupportedChainId) {
        case 5:
          return getAppConfig(HyperdriveGoerliAddresses, publicClient);

        case 31337:
          const localAddresses = await fetchLocalAddresses();
          return getAppConfig(localAddresses, publicClient);

        default:
          throw new Error(
            `No app config found for the currently connected chain: ${chainId}`,
          );
      }
    },
    // The config never changes, so it can be cached forever
    staleTime: Infinity,
  });

  return { appConfig, appConfigStatus };
}

async function fetchLocalAddresses() {
  return await fetch(LOCALHOST_ADDRESSES_URL).then(
    (res) => res.json() as Promise<AddressesJson>,
  );
}
