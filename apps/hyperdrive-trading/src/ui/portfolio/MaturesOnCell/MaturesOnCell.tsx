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
    <div className="flex flex-col gap-1">
      <span className="ml-2">{termEndDate.toLocaleDateString()}</span>
      {isTermComplete ? (
        <div className={"daisy-badge daisy-badge-md inline-flex"}>
          <span>{"Term complete"}</span>
        </div>
      ) : (
        <div className={"daisy-badge daisy-badge-md inline-flex"}>
          <span>{daysLeft} days left</span>
        </div>
      )}
    </div>
  );
}
