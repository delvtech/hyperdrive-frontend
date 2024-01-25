import { useNavigate } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { Route } from "src/routes/market.$address";

type OpenOrClosedTab = "Open" | "Closed";
export function OpenClosedFilter(): ReactElement {
  const { openOrClosed } = Route.useSearch();
  const { address } = Route.useParams();
  const navigate = useNavigate({ from: Route.fullPath });
  const activeOpenOrClosedTab = (openOrClosed as OpenOrClosedTab) || "Open";

  return (
    <div className="daisy-tabs-boxed daisy-tabs daisy-tabs-sm">
      <button
        onClick={() =>
          navigate({
            params: { address },
            search: () => ({ openOrClosed: "Open" }),
          })
        }
        className={classNames("daisy-tab", {
          "daisy-tab-active font-medium": activeOpenOrClosedTab === "Open",
        })}
      >
        Open
      </button>
      <button
        onClick={() =>
          navigate({
            params: { address },
            search: () => ({ openOrClosed: "Closed" }),
          })
        }
        className={classNames("daisy-tab", {
          "daisy-tab-active font-medium": activeOpenOrClosedTab === "Closed",
        })}
      >
        Closed
      </button>
    </div>
  );
}
