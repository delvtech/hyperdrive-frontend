import { CheckCircleIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { ReactElement } from "react";
import { getRemainingTimeLabel } from "src/ui/hyperdrive/getRemainingTimeLabel";
import { useBlock } from "wagmi";

export function StatusCell({ maturity }: { maturity: bigint }): ReactElement {
  const { data: currentBlock } = useBlock();
  const isTermComplete = maturity < (currentBlock?.timestamp || 0n);
  const maturityDateMS = maturity * 1000n;

  const remainingTime = getRemainingTimeLabel({
    maturitySeconds: Number(maturity),
  });

  return (
    <div
      className={classNames("flex items-center gap-2", {
        "rounded-md border-[1px] border-accent/20 bg-accent/20 px-1 py-[1px] text-accent":
          isTermComplete,
        "text-neutral-content": !isTermComplete,
      })}
    >
      {isTermComplete ? <CheckCircleIcon className="size-4" /> : null}
      {remainingTime}
    </div>
  );
}
