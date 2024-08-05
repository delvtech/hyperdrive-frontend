import type { FetchStatus, QueryStatus } from "@tanstack/react-query";
export type QueryStatusWithIdle = QueryStatus | "idle";

export function getStatus(
  status: QueryStatus,
  fetchStatus: FetchStatus,
): QueryStatus | "idle" {
  let queryStatus: QueryStatusWithIdle = status;

  // In cases where a query is disabled, it will still going into a loading
  // status. However, the fetch status will be idle.
  if (fetchStatus === "idle" && status === "loading") {
    queryStatus = "idle";
  }

  return queryStatus;
}
