import { QueryKey } from "@tanstack/query-core";

/**
 * This is a factory function for generating query keys. By using this function,
 * we enforce a consistent namespacing across our queries and prevent a
 * potential collision with existing queries within the application.

 * Recommended use: All queries should leverage this function for query key
 * creation to maintain namespace integrity.
 */
export function makeQueryKey<T>(queryName: string, options: T): QueryKey {
  return ["@hyperdrive/core", queryName, options];
}
