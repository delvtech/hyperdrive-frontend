import { useSearch } from "@tanstack/react-router";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

export type OpenOrClosedTab = "Open" | "Closed";

export function useOpenOrClosedSearchParam(): OpenOrClosedTab {
  const { openOrClosed } = useSearch({ from: MARKET_DETAILS_ROUTE });
  const activeOpenOrClosedTab = (openOrClosed as OpenOrClosedTab) || "Open";
  return activeOpenOrClosedTab;
}
