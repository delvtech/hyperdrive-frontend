import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { Link, useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

export function PositionPicker({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { position: activePosition = "longs" } = useSearch({
    from: MARKET_DETAILS_ROUTE,
  });
  return (
    <div className="flex gap-4">
      {/* TODO: Implement the term picker button */}
      <button className="daisy-btn daisy-btn-sm h-9 gap-2 rounded-full text-xs text-white">
        {formatTermLength2(
          Number(hyperdrive.poolConfig.positionDuration * 1000n),
        )}
      </button>
      <Link
        className={classNames(
          "daisy-btn daisy-btn-md h-9 min-h-9 rounded-full text-md",
          {
            "daisy-btn-ghost font-normal text-inactive-tab":
              activePosition !== "longs",
            "text-white": activePosition === "longs",
          },
        )}
        to={MARKET_DETAILS_ROUTE}
        params={{
          chainId: hyperdrive.chainId.toString(),
          address: hyperdrive.address,
        }}
        search={{ position: "longs" }}
      >
        Long
      </Link>
      <Link
        className={classNames(
          "daisy-btn daisy-btn-md h-9 min-h-9 rounded-full text-md",
          {
            "daisy-btn-ghost font-normal text-inactive-tab":
              activePosition !== "shorts",
            "text-white": activePosition === "shorts",
          },
        )}
        to={MARKET_DETAILS_ROUTE}
        params={{
          chainId: hyperdrive.chainId.toString(),
          address: hyperdrive.address,
        }}
        search={{ position: "shorts" }}
      >
        Short
      </Link>
      <Link
        className={classNames(
          "daisy-btn daisy-btn-md h-9 min-h-9 rounded-full text-md",
          {
            "daisy-btn-ghost font-normal text-inactive-tab":
              activePosition !== "lp",
            "text-white": activePosition === "lp",
          },
        )}
        to={MARKET_DETAILS_ROUTE}
        params={{
          chainId: hyperdrive.chainId.toString(),
          address: hyperdrive.address,
        }}
        search={{ position: "lp" }}
      >
        Supply
      </Link>
    </div>
  );
}
