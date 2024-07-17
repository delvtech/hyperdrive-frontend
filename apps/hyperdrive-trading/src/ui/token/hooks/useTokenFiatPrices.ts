import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { SHIFT_DECIMALS } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address } from "viem";
import { useChainId, useChains } from "wagmi";

/**
 * Fetches the fiat prices of ERC20 tokens.
 * This hook is specifically for ERC20 tokens and should not be used with other token standards.
 * @param addresses - An array of ERC20 token addresses.
 * @returns A useQuery result containing a record of token addresses and their corresponding fiat prices.
 */
export function useTokenFiatPrices(
  addresses: Address[],
): UseQueryResult<Record<Address, bigint>> {
  const chainId = useChainId();
  const chains = useChains();
  // If on testnet, look up the mainnet price.
  const chainName =
    chains?.find((network) => network.id === chainId)?.name ?? "";
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
            const [, address] = coin.split(":");
            prices[address.toLowerCase() as Address] = BigInt(
              (info as any).price * Number(SHIFT_DECIMALS),
            );
          }
          return prices;
        }
      : undefined,
  });
}
