import { ServerAggregateBalanceSolutionHandlerResponse } from "@delvtech/gopher";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { gopher } from "src/ui/bridge/api";

export interface AggregationSolutionParams {
  account: string;
  destination: number;
  token: string;
  amount: string;
  threshold?: string;
  whitelistedSourceChains?: string;
}

export const useAggregationSolution = (
  params: AggregationSolutionParams,
): UseQueryResult<ServerAggregateBalanceSolutionHandlerResponse, unknown> => {
  const result = useQuery<ServerAggregateBalanceSolutionHandlerResponse>({
    queryKey: ["aggregationSolution", params],
    queryFn: async () => {
      const response = await gopher.solutions.aggregationList(params);
      if (!response.ok) {
        throw new Error("Failed to fetch aggregation solution");
      }
      return response.json();
    },
    enabled:
      !!params.account &&
      !!params.token &&
      !!params.amount &&
      !!params.destination,
  });

  return result;
};
