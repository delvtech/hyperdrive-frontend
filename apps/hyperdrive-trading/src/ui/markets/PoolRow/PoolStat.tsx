import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/ui/base/components/Popover/Popover";

export interface PoolStatProps {
  label: string;
  overlay?: ReactNode;
  value: ReactNode;
  isLoading?: boolean;
  isNew?: boolean;
  variant?: "default" | "gradient";
}

export function PoolStat({
  label,
  value,
  overlay,
  isNew = false,
  variant = "default",
  isLoading = false,
}: PoolStatProps): ReactElement {
  let displayValue;
  if (isLoading) {
    displayValue = <Skeleton width={70} />;
  } else if (isNew) {
    displayValue = "✨New✨";
  } else {
    displayValue = value;
  }

  const poolStat = (
    <div className="flex w-full shrink-0 flex-col items-center gap-1.5 sm:items-start">
      <div className={"text-neutral-content"}>{label}</div>
      <div
        className={classNames("font-dmMono text-h4 font-medium", {
          "gradient-text": variant === "gradient",
        })}
      >
        {displayValue}
      </div>
    </div>
  );

  if (overlay) {
    return (
      <Popover>
        <PopoverTrigger className="flex w-full items-center whitespace-nowrap">
          {poolStat}
        </PopoverTrigger>
        <PopoverContent className="z-20 h-fit w-72 rounded-[0.6rem] bg-base-200 px-3 py-2 shadow-2xl">
          {overlay}
        </PopoverContent>
      </Popover>
    );
  }

  return poolStat;
}
