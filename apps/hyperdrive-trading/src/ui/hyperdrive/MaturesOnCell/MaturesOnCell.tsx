import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatDate } from "src/ui/base/formatting/formatDate";

export function MaturesOnCell({
  maturity,
  hyperdrive,
}: {
  maturity: bigint;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const maturityDateMS = maturity * 1000n;
  return (
    <div className="flex flex-col">
      <span>{formatDate(Number(maturityDateMS))}</span>
      <div className={classNames("text-neutral-content")}>
        {convertMillisecondsToDays(
          Number(hyperdrive.poolConfig.positionDuration * 1000n),
        )}
        {"-"}
        Day
      </div>
    </div>
  );
}
