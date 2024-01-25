import { Route } from "src/ui/routes/market.$address";

export type OpenOrClosedTab = "Open" | "Closed";

export function useOpenOrClosedSearchParam(): OpenOrClosedTab {
  const { openOrClosed } = Route.useSearch();
  const activeOpenOrClosedTab = (openOrClosed as OpenOrClosedTab) || "Open";
  return activeOpenOrClosedTab;
}
