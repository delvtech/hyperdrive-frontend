import { Link, useParams, useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { useAccount } from "wagmi";

type OpenOrClosedTab = "Open" | "Closed";
export function OpenClosedFilter(): ReactElement {
  const { openOrClosed, position } = useSearch({ from: MARKET_DETAILS_ROUTE });
  const { address } = useParams({ from: MARKET_DETAILS_ROUTE });
  const { isConnected } = useAccount();
  const activeOpenOrClosedTab = (openOrClosed as OpenOrClosedTab) || "Open";

  return (
    <div
      className={classNames("daisy-tabs daisy-tabs-sm", {
        "daisy-tab-disabled cursor-not-allowed": !isConnected,
      })}
    >
      <Link
        className={classNames("daisy-tab ", {
          "opacity-80 hover:opacity-100": activeOpenOrClosedTab !== "Open",
          "font-bold": activeOpenOrClosedTab === "Open" && isConnected,
          "daisy-link-secondary daisy-tab-disabled cursor-not-allowed":
            !isConnected,
        })}
        params={{ address }}
        search={{ openOrClosed: "Open", position }}
        to={MARKET_DETAILS_ROUTE}
        disabled={!isConnected}
      >
        Open
      </Link>

      <Link
        className={classNames("hover:text-white daisy-tab", {
          "opacity-80 hover:opacity-100": activeOpenOrClosedTab !== "Closed",
          "font-bold ": activeOpenOrClosedTab === "Closed" && isConnected,
          "daisy-link-secondary daisy-tab-disabled cursor-not-allowed":
            !isConnected,
        })}
        params={{ address }}
        search={{ openOrClosed: "Closed", position }}
        to={MARKET_DETAILS_ROUTE}
        disabled={!isConnected}
      >
        Closed
      </Link>
    </div>
  );
}
