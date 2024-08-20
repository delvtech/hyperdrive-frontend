import { OpenShort } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function ShortRateAndSizeCell({
  hyperdrive,
  short,
}: {
  hyperdrive: HyperdriveConfig;
  short: OpenShort;
}): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  const { vaultRate } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });

  // TODO: Use the fixed point library here once it's able to hanlde negative numbers.
  const rateDifference = short.fixedRatePaid - (vaultRate?.vaultRate || 0n);

  const isPositiveChangeInValue = rateDifference > 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-md">
        <p>{`${formatRate(short.fixedRatePaid)} APR`}</p>
        <div
          data-tip={"Profit/Loss since open, after closing fees."}
          className={classNames(
            "daisy-tooltip daisy-tooltip-left flex text-xs before:border before:font-inter",
            {
              "rounded-md border border-success/20 bg-success/20 px-1 text-success":
                isPositiveChangeInValue,
              "rounded-md border border-error/20 bg-error/20 px-1 text-error":
                !isPositiveChangeInValue && rateDifference !== -0n,
            },
          )}
        >
          <span>{isPositiveChangeInValue ? "+" : ""}</span>
          {rateDifference
            ? `${rateDifference === -0n ? "0" : formatRate(rateDifference)}`
            : undefined}
        </div>
      </div>
      <p className="text-neutral-content">{`${formatBalance({
        balance: short.bondAmount,
        decimals: hyperdrive.decimals,
        places: baseToken?.places,
      })} hy${baseToken?.symbol}`}</p>
    </div>
  );
}
