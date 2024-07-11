import { EntityTokenTransferQuote } from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/bridge/api";

// Extract the type of the response from the `aggregationList` method
type AggregationListQueryParams = Parameters<
  (typeof gopher)["solutions"]["aggregationList"]
>[0];

export function useAggregationSolution(params: AggregationListQueryParams): {
  solution: EntityTokenTransferQuote[] | undefined;
  status: QueryStatus;
} {
  const { data, status } = useQuery({
    queryKey: makeQueryKey("gopher", {
      route: "solutions/aggregationList",
      params,
    }),
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
}
