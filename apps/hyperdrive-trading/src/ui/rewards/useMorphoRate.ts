import { fixed, FixedPoint } from "@delvtech/fixed-point-wasm";
import { useQuery } from "@tanstack/react-query";
import { base } from "viem/chains";

// 182d Morpho cbETH/USDC Pool ID
const basePoolId =
  "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c";

// TODO: Get this from the Morpho API
const mainnetPoolId = "";

interface UseMorphoRateResult {
  isLoading: boolean;
  morphoRate: FixedPoint | undefined;
}

export function useMorphoRate({
  chainId,
}: {
  chainId: number;
}): UseMorphoRateResult {
  const { data: rewardsData, isLoading } = useQuery<
    {
      current_rates: {
        per_dollar_per_year: string;
        pool_ids: string[];
      }[];
    },
    Error
  >({
    queryKey: ["morphoRate", chainId],
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
    const currentRates = rewardsData.current_rates;
    const poolId = chainId === base.id ? basePoolId : mainnetPoolId;

    let matchingRate = currentRates.find((rate) =>
      rate.pool_ids.some((id) => id.toLowerCase().startsWith(poolId)),
    )?.per_dollar_per_year;

    // If there is no matching rate, just use the first one in the current_rates array
    if (!matchingRate) {
      matchingRate = currentRates[0].per_dollar_per_year;
    }

    // The morpho rate is formatted to 15 decimal places
    morphoRate = fixed(matchingRate ?? 0, 15);
  }

  return {
    morphoRate,
    isLoading,
  };
}
