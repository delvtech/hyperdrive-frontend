import classNames from "classnames";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useBlock } from "wagmi";

export function MaturesOnCell({
  maturity,
}: {
  maturity: bigint;
}): ReactElement {
  const { data: currentBlock } = useBlock();
  const isTermComplete = maturity < (currentBlock?.timestamp || 0n);
  const maturityDateMS = maturity * 1000n;
  const daysLeft = convertMillisecondsToDays(
    Number(maturityDateMS - (currentBlock?.timestamp || 0n) * 1000n),
  );

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
        {isTermComplete ? "Term complete" : `${daysLeft} days left`}
      </div>
    </div>
  );
}
