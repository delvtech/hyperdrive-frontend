import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address } from "viem";
import { useChainId, useChains } from "wagmi";

const SHIFT_DECIMALS = 10n ** BigInt(18);
// TODO Add docblock to only use ERC20 tokens here
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
