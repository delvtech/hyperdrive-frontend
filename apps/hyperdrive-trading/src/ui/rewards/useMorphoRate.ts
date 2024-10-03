import { fixed, FixedPoint } from "@delvtech/fixed-point-wasm";
import { useQuery } from "@tanstack/react-query";

// Define TypeScript interfaces for better type safety
interface RateObject {
  per_dollar_per_year: string;
  pool_ids: string[];
}

interface ProgramData {
  current_rates: RateObject[];
  // ... other properties if needed
}

interface ApiResponse {
  data: ProgramData[];
  // ... other properties if needed
}

const MORPHO_RATE_URL =
  "https://rewards.morpho.org/v1/programs/?chains=8453&active=true&type=market-reward";

// 182d Morpho cbETH/USDC Pool ID
const poolId =
  "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c";

interface UseMorphoRateResult {
  morphoRate: ProgramData | undefined;
  isLoading: boolean;
  perDollarPerYear: FixedPoint | undefined;
}

export function useMorphoRate({
  enabled,
}: {
  enabled: boolean;
}): UseMorphoRateResult {
  const { data, isLoading } = useQuery<ApiResponse, Error>({
    queryKey: ["morphoRate"],
    enabled,
    staleTime: Infinity,
    retry: 3, // Adjust retry attempts as needed
    queryFn: async () => {
      const response = await fetch(MORPHO_RATE_URL);

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      return response.json();
    },
  });

  // Initialize perDollarPerYear as undefined
  let perDollarPerYear: string | undefined = undefined;

  if (data) {
    const currentRates = data.data[0]?.current_rates;
    if (currentRates && Array.isArray(currentRates)) {
      // Normalize poolId for case-insensitive comparison
      const normalizedPoolId = poolId.toLowerCase();

      // Find the first rate object where any pool_id starts with the poolId
      const matchingRate = currentRates.find((rate) =>
        rate.pool_ids.some((id) =>
          id.toLowerCase().startsWith(normalizedPoolId),
        ),
      );

      if (matchingRate) {
        perDollarPerYear = matchingRate.per_dollar_per_year;
      } else {
        console.warn(`Pool ID ${poolId} not found in current_rates`);
      }
    } else {
      console.warn("Invalid or empty current_rates data structure");
    }
  }

  return {
    morphoRate: data?.data[0],
    isLoading,
    perDollarPerYear: perDollarPerYear
      ? fixed(perDollarPerYear, 15)
      : undefined,
  };
}
