import { getPublicClient } from "@wagmi/core";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

type ClientObject = { [chainId: number]: { publicClient: PublicClient } };

/**
 * Initializes and returns public clients for specified chain IDs.
 *
 * @param {number[]} chainIds - An array of chain IDs to create public clients for.
 * @returns {ClientObject} An object where keys are chain IDs and values are objects
 *                         containing the corresponding public client.
 */
export function usePublicClients(chainIds: number[]): ClientObject {
  const clients: ClientObject = {};

  for (const chainId of chainIds) {
    const publicClient = getPublicClient(wagmiConfig as any, {
      chainId,
    }) as PublicClient;
    clients[chainId] = { publicClient };
  }

  return clients;
}
