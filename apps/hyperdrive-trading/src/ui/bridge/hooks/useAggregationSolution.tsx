import { EntityTokenTransferQuote } from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/bridge/api";

// Extract the type of the response from the `aggregationList` method
type AggregationListQueryParams = Parameters<
  (typeof gopher)["solutions"]["aggregationList"]
>[0];
type OptionalAggregationListQueryParams = {
  [P in keyof AggregationListQueryParams]?: AggregationListQueryParams[P];
};

export function useAggregationSolution(
  params: OptionalAggregationListQueryParams,
): {
  solution: EntityTokenTransferQuote[] | undefined;
  status: QueryStatus;
} {
  const enabled =
    !!params.account &&
    !!params.token &&
    !!params.amount &&
    !!params.destination;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("gopher", {
      route: "solutions/aggregationList",
      params,
    }),
    queryFn: enabled
      ? async () => {
          const response = await gopher.solutions.aggregationList(
            // cast is OK because we've already checked all the required params are present in 'enabled'.
            params as AggregationListQueryParams,
          );
          if (!response.ok) {
            throw new Error("Failed to fetch aggregation solution");
          }
          return response;
        }
      : undefined,
    enabled,
  });

  return { solution: data?.data?.data, status };
}
