import { useSearch } from "@tanstack/react-router";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

export type OpenOrClosedTab = "open" | "closed";

export function useOpenOrClosedSearchParam(): OpenOrClosedTab {
  const { openOrClosed } = useSearch({ from: MARKET_DETAILS_ROUTE });
  const activeOpenOrClosedTab = openOrClosed || "open";
  return activeOpenOrClosedTab;
}
