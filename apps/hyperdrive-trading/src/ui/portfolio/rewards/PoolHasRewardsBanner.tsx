import { Link } from "@tanstack/react-router";
import { ReactElement, ReactNode } from "react";
import { PORTFOLIO_ROUTE } from "src/ui/portfolio/routes";

export function PoolHasRewardsBanner({
  message = "You are earning rewards in this pool.",
}: {
  message?: ReactNode;
}): ReactElement {
  return (
    <div className="flex items-center justify-between rounded-full bg-hypervue-pink/10 p-2 pl-8">
      <span className="text-hypervue-pink">{message}</span>
      <Link
        to={PORTFOLIO_ROUTE}
        className="daisy-btn daisy-btn-ghost daisy-btn-sm rounded-full"
        search={(prev) => ({ ...prev, position: "rewards" })}
      >
        View rewards
      </Link>
    </div>
  );
}
