import { CheckBadgeIcon } from "@heroicons/react/16/solid";
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
        "rounded-md bg-accent/20 px-2 py-1 text-accent": isTermComplete,
        "text-neutral-content": !isTermComplete,
      })}
    >
      {isTermComplete ? <CheckBadgeIcon className="size-4" /> : null}
      {remainingTime}
    </div>
  );
}
