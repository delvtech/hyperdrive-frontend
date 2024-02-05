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
      className={classNames("daisy-tabs-boxed daisy-tabs daisy-tabs-sm", {
        "cursor-not-allowed": !isConnected,
      })}
    >
      <button
        className={classNames("daisy-tab", {
          "daisy-tab-active font-medium": activeOpenOrClosedTab === "Open",
        })}
        disabled={!isConnected}
      >
        <Link
          params={{ address }}
          search={{ openOrClosed: "Open", position }}
          to={MARKET_DETAILS_ROUTE}
          disabled={!isConnected}
        >
          Open
        </Link>
      </button>
      <button
        className={classNames("daisy-tab", {
          "daisy-tab-active font-medium": activeOpenOrClosedTab === "Closed",
        })}
        disabled={!isConnected}
      >
        <Link
          params={{ address }}
          search={{ openOrClosed: "Closed", position }}
          to={MARKET_DETAILS_ROUTE}
          disabled={!isConnected}
        >
          Closed
        </Link>
      </button>
    </div>
  );
}
