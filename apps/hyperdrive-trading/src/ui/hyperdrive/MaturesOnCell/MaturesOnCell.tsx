import classNames from "classnames";
import { ReactElement } from "react";
import { calculateTimeLeft } from "src/base/calculateTimeLeft";
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
  const { days, hours, minutes } = calculateTimeLeft(
    Number(currentBlock?.timestamp || 0),
    Number(maturity),
  );

  const remainingTime = getRemainingTimeLabel(
    isTermComplete,
    days,
    hours,
    minutes,
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
        {remainingTime}
      </div>
    </div>
  );
}

function getRemainingTimeLabel(
  isTermComplete: boolean,
  days: number,
  hours: number,
  minutes: number,
): string {
  if (isTermComplete) {
    return "Term complete";
  }

  if (days > 0) {
    return `${days} days left`;
  }

  if (hours > 0) {
    return `${hours} hours, ${minutes} minutes left`;
  }

  if (minutes > 0) {
    return `${minutes} minutes left`;
  }

  return "-";
}
