import { useSearchParams } from "react-router-dom";

export type OpenOrClosedTab = "Open" | "Closed";

export function useOpenOrClosedSearchParam(): OpenOrClosedTab {
  const [searchParams] = useSearchParams();
  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";
  return activeOpenOrClosedTab;
}
