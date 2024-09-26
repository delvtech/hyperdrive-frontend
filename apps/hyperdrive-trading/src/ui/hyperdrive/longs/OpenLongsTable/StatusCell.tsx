import { CheckCircleIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { ReactElement } from "react";
import { getRemainingTimeLabel } from "src/ui/hyperdrive/getRemainingTimeLabel";
import { useBlock } from "wagmi";

export function StatusCell({
  chainId,
  maturity,
  statusCellClassName,
}: {
  chainId: number;
  maturity: bigint;
  statusCellClassName?: string;
}): ReactElement {
  const { data: currentBlock } = useBlock({ chainId });
  const isTermComplete = maturity < (currentBlock?.timestamp || 0n);

  const remainingTime = getRemainingTimeLabel({
    maturitySeconds: Number(maturity),
    condensed: true,
  });

  return (
    <div
      className={classNames("flex w-28 items-center gap-2 font-inter", {
        "rounded-md border border-accent/20 bg-accent/20 px-[6px] py-[2px] text-accent":
          isTermComplete,
        [statusCellClassName || "text-neutral-content"]: !isTermComplete,
      })}
    >
      {isTermComplete ? <CheckCircleIcon className="size-4" /> : null}
      {remainingTime}
    </div>
  );
}
