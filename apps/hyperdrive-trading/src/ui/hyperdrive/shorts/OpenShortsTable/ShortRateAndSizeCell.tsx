import {
  appConfig,
  findBaseToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { OpenShort } from "@delvtech/hyperdrive-js";
import classNames from "classnames";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useBlock } from "wagmi";

export function ShortRateAndSizeCell({
  hyperdrive,
  short,
}: {
  hyperdrive: HyperdriveConfig;
  short: OpenShort;
}): ReactElement {
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { data: maturityBlock } = useBlock({
    blockNumber: short.maturity,
    chainId: hyperdrive.chainId,
  });

  // NOTE: Maturity block will be undefined if the term in incomplete,
  // defaulting to latest.
  const { fixedApr } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    block: maturityBlock?.number,
  });

  const rateDifference = (fixedApr?.apr || 0n) - short.fixedRatePaid;
  const isPositiveChangeInValue = rateDifference > 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-md">
        <p>{`${formatRate({ rate: short.fixedRatePaid })} APR`}</p>
        <div
          data-tip={
            "The difference between the fixed rate you shorted and the current fixed rate."
          }
          className={classNames(
            "daisy-tooltip daisy-tooltip-left flex text-xs before:border before:font-inter",
            {
              "rounded-md border border-success/20 bg-success/20 px-1 text-success":
                isPositiveChangeInValue,
              "rounded-md border border-error/20 bg-error/20 px-1 text-error":
                !isPositiveChangeInValue,
            },
          )}
        >
          <span>{isPositiveChangeInValue ? "+" : ""}</span>
          {formatRate({ rate: rateDifference })}
        </div>
      </div>
      <p className="text-neutral-content">{`${formatBalance({
        balance: short.bondAmount,
        decimals: hyperdrive.decimals,
        places: baseToken.places,
      })} hy${baseToken.symbol}`}</p>
    </div>
  );
}
