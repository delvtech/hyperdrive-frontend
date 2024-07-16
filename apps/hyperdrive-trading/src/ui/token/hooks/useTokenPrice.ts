import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address } from "viem";
import { useChainId, useChains } from "wagmi";
// TODO: Turn this into a helper function that takes in a custom decimal value
const shiftDecimals = 10n ** BigInt(18);

export function useTokenPrices(
  addresses: Address[],
): UseQueryResult<Record<`0x${string}`, bigint>> {
  const chainId = useChainId();
  const chains = useChains();
  const chainName = "Ethereum";
  //   chains?.forEach((network) => {
  //     if (network.id === chainId) {
  //       chainName = network.name!;
  //     }
  //   });
  const coins = addresses.map((address) => `${chainName}:${address}`).join(",");
  const queryEnabled = !!coins;

  return useQuery({
    queryKey: makeQueryKey("tokenPrices", { coins }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const response = await fetch(
            `https://coins.llama.fi/prices/current/${coins}`,
          );
          const data = await response.json();
          const prices: Record<Address, bigint> = {};
          for (const [coin, info] of Object.entries(data.coins)) {
            const address = coin.split(":")[1];
            prices[address.toLowerCase() as Address] = BigInt(
              Math.round((info as any).price * Number(shiftDecimals)),
            );
          }
          return prices;
        }
      : undefined,
  });
}
