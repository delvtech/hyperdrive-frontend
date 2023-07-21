import { useQuery } from "@tanstack/react-query";
import assertNever from "assert-never";
import { SupportedChainId } from "src/appconfig/chains/supportedChains";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { AppConfig } from "src/appconfig/types";
import { Address } from "viem";
import { useChainId, usePublicClient } from "wagmi";

const LOCALHOST_ADDRESSES_URL = import.meta.env.VITE_LOCALHOST_ADDRESSES_URL;
const CUSTOM_CHAIN_ADDRESSES_URL = import.meta.env
  .VITE_CUSTOM_CHAIN_ADDRESSES_URL;

export function useAppConfig(): {
  appConfig: AppConfig | undefined;
  appConfigStatus: "idle" | "error" | "loading" | "success";
} {
  const chainId = useChainId() as SupportedChainId;
  const publicClient = usePublicClient();
  const { data: appConfig, status: appConfigStatus } = useQuery({
    queryKey: ["app-config", { chainId }],
    queryFn: async () => {
      switch (chainId) {
        case 31337:
          const localAddresses = await fetchLocalhostAddresses();
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

        case 42069:
          const addresses = await fetchCustomChainAddresses();
          return getAppConfig(
            // TODO: This is a temporary "cross-walk" object to use until SC
            // team unifies the shape of the addresses.json file across the
            // different chains.
            {
              dsrHyperdrive: addresses.mockHyperdrive,
              mockHyperdriveMath: addresses.mockHyperdriveMath,
            },
            publicClient,
          );

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
    (res) => res.json() as Promise<AddressesJson>,
  );
}

async function fetchCustomChainAddresses() {
  return await fetch(CUSTOM_CHAIN_ADDRESSES_URL).then(
    (res) => res.json() as Promise<AddressesJson>,
  );
}

/**
 * TODO: This is a temporary interface to hold us over until the goerli
 * addresses.json file and the local one (see Docker image in infra repo) share
 * the same shape. Smart Contract team will implement this.
 */
interface AddressesJson {
  baseToken: Address;
  mockHyperdrive: Address;
  mockHyperdriveMath: Address;
}
