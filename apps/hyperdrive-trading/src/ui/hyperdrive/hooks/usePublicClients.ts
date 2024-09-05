import { AppConfig } from "@hyperdrive/appconfig";
import { getPublicClient } from "@wagmi/core";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

type ClientObject = { [chainId: number]: { publicClient: PublicClient } };

/**
 * Initializes and returns public clients for specified chain IDs.
 *
 * @param {AppConfig} appConfig
 * @returns {ClientObject} An object where keys are chain IDs and values are objects containing the corresponding public client.
 */
export function usePublicClients(chains: number[]): ClientObject {
  const clients: ClientObject = {};

  for (const chainId of chains) {
    const publicClient = getPublicClient(wagmiConfig as any, {
      chainId,
    }) as PublicClient;
    clients[chainId] = { publicClient };
  }

  return clients;
}
