import type { QueryKey } from "@tanstack/query-core";
/**
 * This is a factory function for generating application-level query keys. By
 * using this function, we enforce a consistent namespacing across our app's
 * queries and prevent a potential collision with other queries from other
 * libraries, like the SDK.

 * Recommended use: All app queries should leverage this function for query key
 * creation to maintain namespace integrity.
 */
export function makeQueryKey<T>(queryName: string, options: T): QueryKey {
  return ["app", queryName, options];
}
