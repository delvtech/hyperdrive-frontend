import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { getRemainingTimeLabel } from "src/ui/hyperdrive/getRemainingTimeLabel";
import { useBlock } from "wagmi";

export function MaturesOnCell({
  maturity,
}: {
  maturity: bigint;
}): ReactElement {
  const { data: currentBlock } = useBlock();
  const isTermComplete = maturity < (currentBlock?.timestamp || 0n);
  const maturityDateMS = maturity * 1000n;

  const remainingTime = getRemainingTimeLabel({
    maturitySeconds: Number(maturity),
  });

  return (
    <div className="daisy-stat flex flex-row p-0 xl:flex-col">
      <span className="daisy-stat-value text-xs font-normal lg:text-md">
        {formatDate(Number(maturityDateMS))}
      </span>
      <div
        className={classNames("daisy-stat-desc inline-flex text-xs lg:mt-1", {
          "text-success": isTermComplete,
        })}
      >
        {remainingTime}
      </div>
    </div>
  );
}
export function MaturesOnCellTwo({
  maturity,
  hyperdrive,
}: {
  maturity: bigint;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { data: currentBlock } = useBlock();
  const isTermComplete = maturity < (currentBlock?.timestamp || 0n);
  const maturityDateMS = maturity * 1000n;

  const remainingTime = getRemainingTimeLabel({
    maturitySeconds: Number(maturity),
  });

  return (
    <div className="daisy-stat flex flex-row p-0 font-dmMono xl:flex-col">
      <span className="daisy-stat-value text-xs font-normal lg:text-md">
        {formatDate(Number(maturityDateMS))}
      </span>
      <div
        className={classNames(
          "daisy-stat-desc inline-flex font-dmMono text-xs text-neutral-content lg:mt-1",
        )}
      >
        {convertMillisecondsToDays(
          Number(hyperdrive.poolConfig.positionDuration * 1000n),
        )}
        {"-"}
        Day
      </div>
    </div>
  );
}
