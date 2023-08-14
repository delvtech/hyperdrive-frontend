import {
  QueryClient,
  QueryKey,
  QueryObserverOptions,
} from "@tanstack/query-core";
import { getCurrentFixedAPRQuery } from "src/amm/getFixedAPR";

type QueryFactory<
  TArgs extends { queryClient?: QueryClient },
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = (
  args: TArgs,
) => QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>;

export function bindQueryClient<
  TArgs extends { queryClient?: QueryClient },
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryFactory: QueryFactory<
    TArgs,
    TError,
    TData,
    TQueryData,
    TQueryKey
  >,
  queryClient: QueryClient,
): any {
  return (...args: Parameters<typeof queryFactory>) =>
    queryClient.fetchQuery(queryFactory(args[0]));
}

bindQueryClient(getCurrentFixedAPRQuery, new QueryClient());
