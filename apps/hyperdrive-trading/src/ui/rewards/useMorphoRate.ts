import { fixed, FixedPoint } from "@delvtech/fixed-point-wasm";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";

const marketPoolIds: Record<Address, string> = {
  // Key: Hyperdrive contract address for the market
  // Value: Corresponding Morpho pool ID
  // Market:Base 182d Morpho cbETH/USDC
  "0x2a1ca35Ded36C531F77c614b5AAA0d4F86edbB06":
    "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
};

export function useMorphoRate({
  chainId,
  hyperdriveAddress,
  enabled = true,
}: {
  chainId: number;
  hyperdriveAddress: Address;
  enabled?: boolean;
}): {
  morphoRate: FixedPoint | undefined;
} {
  const { data: rewardsData } = useQuery<
    {
      current_rates: {
        per_dollar_per_year: string;
        pool_ids: string[];
      }[];
    },
    Error
  >({
    queryKey: ["morphoRate", chainId, hyperdriveAddress],
    enabled,
    staleTime: Infinity,
    retry: 3,
    queryFn: async () => {
      const response = await fetch(
        `https://rewards.morpho.org/v1/programs/?chains=${chainId}&active=true&type=uniform-reward`,
      );
      const result = await response.json();
      return result.data[0];
    },
  });

  let morphoRate: FixedPoint | undefined = undefined;

  if (rewardsData) {
    const poolId = marketPoolIds[hyperdriveAddress];
    let matchingRate = rewardsData.current_rates.find((rate) =>
      rate.pool_ids.some((id) => id.toLowerCase().startsWith(poolId)),
    )?.per_dollar_per_year;

    // If there is no matching rate, just use the first one in the current_rates array
    if (!matchingRate) {
      matchingRate = rewardsData.current_rates[0]?.per_dollar_per_year;
    }

    // The morpho rate is formatted to 15 decimal places
    morphoRate = fixed(matchingRate ?? 0, 15);
  }

  return {
    morphoRate,
  };
}
