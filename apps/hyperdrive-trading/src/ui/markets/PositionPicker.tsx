import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link, useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { useAccount } from "wagmi";

export function PositionPicker({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const { position: activePosition = "long" } = useSearch({
    from: MARKET_DETAILS_ROUTE,
  });

  // TODO: Implement the term picker based on hyperdrives in appConfig of the
  // same kind but different position durations
  const allTerms = [hyperdrive];

  // Plausible event props
  const prevPositionType = activePosition;
  const chainId = hyperdrive.chainId;
  const poolAddress = hyperdrive.address;

  return (
    <div className="flex gap-4">
      {/* TODO: Implement the term picker button */}
      <button
        className={classNames(
          "daisy-btn daisy-btn-sm h-9 gap-2 rounded-full bg-base-200 text-xs text-white hover:bg-base-200",
          { "no-animation cursor-default": allTerms.length === 1 },
        )}
      >
        {formatTermLength2(
          Number(hyperdrive.poolConfig.positionDuration * 1000n),
        )}
      </button>

      {/* Position buttons */}
      <Link
        className={classNames(
          "daisy-btn daisy-btn-md h-9 min-h-9 rounded-full text-md",
          {
            "daisy-btn-ghost font-normal text-inactive-tab":
              activePosition !== "long",
            "text-white": activePosition === "long",
          },
        )}
        to={MARKET_DETAILS_ROUTE}
        params={{
          chainId: hyperdrive.chainId.toString(),
          address: hyperdrive.address,
        }}
        search={{ position: "long" }}
        onClick={() => {
          window.plausible("positionTypeChange", {
            props: {
              positionType: "long",
              prevPositionType,
              chainId,
              poolAddress,
              connectedWallet: account,
            },
          });
        }}
      >
        Fixed
      </Link>
      <Link
        className={classNames(
          "daisy-btn daisy-btn-md h-9 min-h-9 rounded-full text-md",
          {
            "daisy-btn-ghost font-normal text-inactive-tab":
              activePosition !== "short",
            "text-white": activePosition === "short",
          },
        )}
        to={MARKET_DETAILS_ROUTE}
        params={{
          chainId: hyperdrive.chainId.toString(),
          address: hyperdrive.address,
        }}
        search={{ position: "short" }}
        onClick={() => {
          window.plausible("positionTypeChange", {
            props: {
              positionType: "short",
              prevPositionType,
              chainId,
              poolAddress,
              connectedWallet: account,
            },
          });
        }}
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
        onClick={() => {
          window.plausible("positionTypeChange", {
            props: {
              positionType: "lp",
              prevPositionType,
              chainId,
              poolAddress,
              connectedWallet: account,
            },
          });
        }}
      >
        Supply
      </Link>
    </div>
  );
}
