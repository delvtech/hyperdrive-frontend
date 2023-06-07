import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { SupportedChainId } from "src/appconfig/chains/supportedChains";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { AppConfig } from "src/appconfig/types";
import { Address } from "viem";
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
          return getAppConfig(
            // TODO: This is a temporary "cross-walk" object to use until SC
            // team unifies the shape of the addresses.json file across the
            // different chains.
            {
              dsrHyperdrive: localAddresses.mockHyperdrive,
              mockHyperdriveMath: localAddresses.mockHyperdriveMath,
            },
            publicClient,
          );

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
    (res) => res.json() as Promise<LocalAddressesJson>,
  );
}

/**
 * TODO: This is a temporary interface to hold us over until the goerli
 * addresses.json file and the local one (see Docker image in infra repo) share
 * the same shape. Smart Contract team will implement this.
 */
interface LocalAddressesJson {
  baseToken: Address;
  mockHyperdrive: Address;
  mockHyperdriveMath: Address;
}
