import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useCurrentBlock } from "src/ui/network/useCurrentBlock";

export function MaturesOnCell({
  maturity,
}: {
  maturity: bigint;
}): ReactElement {
  const { currentBlock } = useCurrentBlock();
  const isTermComplete = maturity < (currentBlock?.timestamp || 0n);
  const maturityDateMS = maturity * 1000n;
  const termEndDate = new Date(Number(maturityDateMS));
  const daysLeft = convertMillisecondsToDays(
    Number(maturityDateMS - (currentBlock?.timestamp || 0n) * 1000n),
  );

  return (
    <div className="daisy-stat flex flex-row p-0 lg:flex-col">
      <span className="daisy-stat-value text-xs lg:text-md">
        {termEndDate.toLocaleDateString()}
      </span>
      {isTermComplete ? (
        <div className={" daisy-stat-desc inline-flex w-32 text-xs"}>
          Term complete
        </div>
      ) : (
        <div className={"daisy-stat-desc inline-flex text-xs lg:mt-1"}>
          <span>{daysLeft} days left</span>
        </div>
      )}
    </div>
  );
}
