import { fixed, FixedPoint } from "@delvtech/fixed-point-wasm";
import { useQuery } from "@tanstack/react-query";
import { base } from "viem/chains";

interface RateObject {
  per_dollar_per_year: string;
  pool_ids: string[];
}

interface ProgramData {
  current_rates: RateObject[];
}

interface ApiResponse {
  data: ProgramData[];
}

// 182d Morpho cbETH/USDC Pool ID
const basePoolId =
  "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c";

const mainnetPoolId =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

interface UseMorphoRateResult {
  isLoading: boolean;
  morphoRate: FixedPoint | undefined; // Formatted supply rate
}

export function useMorphoRate({
  chainId,
}: {
  chainId: number;
}): UseMorphoRateResult {
  const { data, isLoading } = useQuery<ApiResponse, Error>({
    queryKey: ["morphoRate", chainId],
    staleTime: Infinity,
    retry: 3,
    queryFn: async () => {
      const response = await fetch(
        `https://rewards.morpho.org/v1/programs/?chains=${chainId}&active=true&type=uniform-reward`,
      );

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      return response.json();
    },
  });

  let morphoRate: FixedPoint | undefined = undefined;

  if (data && data.data.length > 0) {
    const program = data.data[0];
    const currentRates = program.current_rates;

    const poolId =
      chainId === base.id
        ? basePoolId.toLowerCase()
        : mainnetPoolId.toLowerCase();

    let matchingRate = currentRates.find((rate) =>
      rate.pool_ids.some((id) => id.toLowerCase().startsWith(poolId)),
    )?.per_dollar_per_year;

    // If there is no matching rate, just use the first one in the current_rates array
    if (!matchingRate) {
      matchingRate = currentRates[0].per_dollar_per_year;
    }

    console.log("matchingRate", matchingRate, chainId);

    morphoRate = fixed(matchingRate ?? 0, 15);
  } else {
    console.warn("Invalid or empty data structure");
  }

  return {
    morphoRate,
    isLoading,
  };
}
