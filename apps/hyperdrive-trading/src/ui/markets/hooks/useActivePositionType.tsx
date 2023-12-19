import { useSearchParams } from "react-router-dom";

type PositionType = "Longs" | "Shorts" | "LP";

export function useActivePositionType(): PositionType {
  const [searchParams] = useSearchParams();
  const activePositionType =
    (searchParams.get("position") as PositionType) || "Long";
  return activePositionType;
}
