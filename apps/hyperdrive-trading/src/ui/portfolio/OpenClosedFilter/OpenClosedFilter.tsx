import { Link } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { Route } from "src/routes/market.$address";

type OpenOrClosedTab = "Open" | "Closed";
export function OpenClosedFilter(): ReactElement {
  const { openOrClosed, position } = Route.useSearch();
  const { address } = Route.useParams();

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
          to={Route.fullPath}
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
          to={Route.fullPath}
        >
          Closed
        </Link>
      </button>
    </div>
  );
}
