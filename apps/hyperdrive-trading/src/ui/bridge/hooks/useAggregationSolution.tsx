import { EntityTokenTransferQuote } from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
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
): {
  solution: EntityTokenTransferQuote[] | undefined;
  status: QueryStatus;
} => {
  const { data, status } = useQuery({
    queryKey: ["aggregationSolution", params],
    queryFn: async () => {
      const response = await gopher.solutions.aggregationList(params);
      if (!response.ok) {
        throw new Error("Failed to fetch aggregation solution");
      }
      return response;
    },
    enabled:
      !!params.account &&
      !!params.token &&
      !!params.amount &&
      !!params.destination,
  });

  return { solution: data?.data?.data, status };
};
