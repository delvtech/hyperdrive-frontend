import { useQuery } from "@tanstack/react-query";
import assertNever from "assert-never";
import { LocalAddressesJson } from "src/addresses/LocalAddressesJson";
import { AppConfig } from "src/appconfig/AppConfig";
import { getAppConfigFromLocalAddresses } from "src/appconfig/getAppConfigFromLocalAddresses";
import { SupportedChainId } from "src/chains/supportedChains";
import { PublicClient } from "viem";
import { useChainId, usePublicClient } from "wagmi";

const LOCALHOST_ADDRESSES_URL = import.meta.env.VITE_LOCALHOST_ADDRESSES_URL;
const CUSTOM_CHAIN_ADDRESSES_URL = import.meta.env
  .VITE_CUSTOM_CHAIN_ADDRESSES_URL;

/**
 * @deprecated use useAppConfig instead
 */
export function useAppConfigOld(): {
  appConfig: AppConfig | undefined;
  appConfigStatus: "idle" | "error" | "loading" | "success";
} {
  const chainId = useChainId() as SupportedChainId;
  const publicClient = usePublicClient();

  const { data: appConfig, status: appConfigStatus } = useQuery({
    queryKey: ["app-config", { chainId }],
    queryFn: async () => {
      switch (chainId) {
        case 31337: {
          const addresses = await fetchLocalhostAddresses();
          return getAppConfigFromLocalAddresses({
            chainId,
            addresses,
            publicClient: publicClient as PublicClient,
          });
        }
        case 42069: {
          const addresses = await fetchCustomChainAddresses();
          // The custom chain is curently deployed using the same contracts as
          // the local devnet, so we can get the appConfig in the same way
          return getAppConfigFromLocalAddresses({
            chainId,
            addresses,
            publicClient: publicClient as PublicClient,
          });
        }

        default:
          assertNever(chainId);
      }
    },
    // The config never changes, so it can be cached forever
    staleTime: Infinity,
  });

  return { appConfig, appConfigStatus };
}

async function fetchLocalhostAddresses() {
  return await fetch(LOCALHOST_ADDRESSES_URL).then(
    (res) => res.json() as Promise<LocalAddressesJson>,
  );
}

async function fetchCustomChainAddresses() {
  return await fetch(CUSTOM_CHAIN_ADDRESSES_URL).then(
    // The custom chain is curently deployed using the same contracts as
    // the local devnet, so we can re-use LocalAddressesJson here
    (res) => res.json() as Promise<LocalAddressesJson>,
  );
}
