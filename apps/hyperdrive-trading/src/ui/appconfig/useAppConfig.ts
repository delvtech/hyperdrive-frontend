import { useQuery } from "@tanstack/react-query";
import { goerliHyperdriveConfig } from "src/appconfig/chains/goerli";
import { HyperdriveConfig } from "src/appconfig/HyperdriveConfig";
import {
  SupportedChainId,
  supportedChainIds,
} from "src/appconfig/supportedChains";
import { useChainId } from "wagmi";

const LOCALHOST_ADDRESSES_URL = import.meta.env.VITE_LOCALHOST_ADDRESSES_URL;
// const LOCALHOST_ADDRESSES_URL = '/localAddresses'

export function useAppConfig(): {
  appConfig: HyperdriveConfig | undefined;
  appConfigStatus: "idle" | "error" | "loading" | "success";
} {
  const chainId = useChainId();
  if (!supportedChainIds.includes(chainId as SupportedChainId)) {
    // This should never happen with a properly configured wagmi config
    throw new Error(
      `Cannot fetch hyperdrive config with chain id: ${chainId}.`,
    );
  }

  const { data: appConfig, status: appConfigStatus } = useQuery({
    queryKey: ["app-config", { chainId }],
    queryFn: async () => {
      switch (chainId as SupportedChainId) {
        case 5:
          return goerliHyperdriveConfig;
        case 31337:
          return getLocalAddresses();
      }
    },
  });

  return { appConfig, appConfigStatus };
}

async function getLocalAddresses(): Promise<HyperdriveConfig> {
  const addresses = await fetch(LOCALHOST_ADDRESSES_URL);
  console.log(addresses);
  return null as any;
}
