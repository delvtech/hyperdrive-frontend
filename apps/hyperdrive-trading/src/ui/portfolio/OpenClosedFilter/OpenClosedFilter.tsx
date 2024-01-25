import { Link, useParams, useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

type OpenOrClosedTab = "Open" | "Closed";
export function OpenClosedFilter(): ReactElement {
  const { openOrClosed, position } = useSearch({ from: MARKET_DETAILS_ROUTE });
  const { address } = useParams({ from: MARKET_DETAILS_ROUTE });

  const activeOpenOrClosedTab = (openOrClosed as OpenOrClosedTab) || "Open";

  return (
    <div className="daisy-tabs-boxed daisy-tabs daisy-tabs-sm">
      <button
        className={classNames("daisy-tab", {
          "daisy-tab-active font-medium": activeOpenOrClosedTab === "Open",
        })}
      >
        <Link
          params={{ address }}
          search={{ openOrClosed: "Open", position }}
          to={MARKET_DETAILS_ROUTE}
        >
          Open
        </Link>
      </button>
      <button
        className={classNames("daisy-tab", {
          "daisy-tab-active font-medium": activeOpenOrClosedTab === "Closed",
        })}
      >
        <Link
          params={{ address }}
          search={{ openOrClosed: "Closed", position }}
          to={MARKET_DETAILS_ROUTE}
        >
          Closed
        </Link>
      </button>
    </div>
  );
}
