import { useQuery } from "@tanstack/react-query";
import { goerliAppConfig } from "src/appconfig/chains/goerli";
import { SupportedChainId } from "src/appconfig/supportedChains";
import { AppConfig } from "src/appconfig/types";
import { useChainId } from "wagmi";

const LOCALHOST_ADDRESSES_URL = import.meta.env.VITE_LOCALHOST_ADDRESSES_URL;

export function useAppConfig(): {
  appConfig: AppConfig | undefined;
  appConfigStatus: "idle" | "error" | "loading" | "success";
} {
  const chainId = useChainId();
  const { data: appConfig, status: appConfigStatus } = useQuery({
    queryKey: ["app-config", { chainId }],
    queryFn: async () => {
      switch (chainId as SupportedChainId) {
        case 5:
          return goerliAppConfig;
        case 31337:
          return getLocalAppConfig();
      }
    },
    // The config never changes, so it can be cached forever
    staleTime: Infinity,
  });

  return { appConfig, appConfigStatus };
}

// TODO: Move this to src/appconfig/chains/local.ts
async function getLocalAppConfig(): Promise<AppConfig> {
  const addresses = await fetch(LOCALHOST_ADDRESSES_URL).then((res) =>
    res.json(),
  );
  console.log(addresses);
  return { chainId: 31337, markets: [] } as AppConfig;
}
