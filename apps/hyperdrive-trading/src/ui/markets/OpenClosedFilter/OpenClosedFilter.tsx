import { Link, useParams, useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { useAccount, useChainId } from "wagmi";

export function OpenClosedFilter(): ReactElement {
  const { openOrClosed = "open", position } = useSearch({
    from: MARKET_DETAILS_ROUTE,
  });
  const chainId = useChainId();
  const { address } = useParams({ from: MARKET_DETAILS_ROUTE });
  const { isConnected } = useAccount();

  return (
    <div
      className={classNames("daisy-tabs daisy-tabs-sm", {
        "daisy-tab-disabled cursor-not-allowed": !isConnected,
      })}
    >
      <Link
        className={classNames("daisy-tab text-md", {
          "opacity-80 hover:opacity-100": openOrClosed !== "open",
          "font-bold": openOrClosed === "open" && isConnected,
          "daisy-link-secondary daisy-tab-disabled cursor-not-allowed":
            !isConnected,
        })}
        params={{ address, chainId: chainId.toString() }}
        search={{ openOrClosed: "open", position }}
        to={MARKET_DETAILS_ROUTE}
        disabled={!isConnected}
      >
        Open
      </Link>

      <Link
        className={classNames("daisy-tab text-md", {
          "opacity-80 hover:opacity-100": openOrClosed !== "closed",
          "font-bold": openOrClosed === "closed" && isConnected,
          "daisy-link-secondary daisy-tab-disabled cursor-not-allowed":
            !isConnected,
        })}
        params={{ address, chainId: chainId.toString() }}
        search={{ openOrClosed: "closed", position }}
        to={MARKET_DETAILS_ROUTE}
        disabled={!isConnected}
      >
        Closed
      </Link>
    </div>
  );
}
