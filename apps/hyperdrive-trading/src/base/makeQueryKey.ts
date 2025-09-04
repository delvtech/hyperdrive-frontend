import { stringifyKey } from "@delvtech/drift";
import { QueryKey } from "@tanstack/query-core";
/**
 * This is a factory function for generating application-level query keys. By
 * using this function, we enforce a consistent namespacing across our app's
 * queries and prevent a potential collision with other queries from other
 * libraries, like the SDK.

 * Recommended use: All app queries should leverage this function for query key
 * creation to maintain namespace integrity.
 */
/**
 *
 * @deprecated use `makeQueryKey2` instead
 */
export function makeQueryKey<T>(queryName: string, options: T): QueryKey {
  return ["app", queryName, options];
}

// Intentionally empty, as we want individual queryKeys.ts files to merge
// declarations into this type
export interface QueryKeys {}

export function makeQueryKey2<
  QueryNamespace extends keyof QueryKeys,
  QueryId extends keyof QueryKeys[QueryNamespace],
>({
  namespace,
  queryId,
  params,
}: {
  namespace: QueryNamespace;
  queryId: QueryId;
  params: QueryKeys[QueryNamespace][QueryId];
}): QueryKey {
  return [
    ...makeNamespaceQueryKey({ namespace, queryId }),
    stringifyKey(params as any),
  ];
}

/**
 * Returns the query key for a given namespace and optional queryId, used for
 * partial matching in tanstack query.
 *
 * Example:
 * // matches all token queries
 * const queryKey = makeNamespaceQueryKey({ namespace: "tokens" });
 *
 * // matches all tokenFiatPrice queries
 * const queryKey = makeNamespaceQueryKey({ namespace: "tokens", queryId: "tokenFiatPrice" });
 */
export function makeNamespaceQueryKey<
  QueryNamespace extends keyof QueryKeys,
  QueryId extends keyof QueryKeys[QueryNamespace],
>({
  namespace,
  queryId,
}: {
  namespace: QueryNamespace;
  queryId?: QueryId;
}): QueryKey {
  if (!queryId) {
    return ["app", namespace];
  }
  return ["app", namespace, queryId];
}
