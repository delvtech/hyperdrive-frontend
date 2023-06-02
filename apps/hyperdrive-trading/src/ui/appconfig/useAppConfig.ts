import { useQuery } from "@tanstack/react-query";
import { goerliAppConfig } from "src/appconfig/chains/goerli";
import { getLocalAppConfig } from "src/appconfig/chains/local";
import { SupportedChainId } from "src/appconfig/supportedChains";
import { AppConfig } from "src/appconfig/types";
import { useChainId, usePublicClient } from "wagmi";

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
          return goerliAppConfig;
        case 31337:
          return getLocalAppConfig(publicClient);
      }
    },
    // The config never changes, so it can be cached forever
    staleTime: Infinity,
  });

  return { appConfig, appConfigStatus };
}
