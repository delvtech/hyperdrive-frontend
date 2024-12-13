import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";

export interface PoolStatProps {
  label: string;
  labelTooltip?: string;
  value: ReactNode;
  isLoading?: boolean;
  isNew?: boolean;
  variant?: "default" | "gradient";
  action?: ReactNode;
}

export function PoolStat({
  label,
  labelTooltip,
  value,
  isNew = false,
  variant = "default",
  isLoading = false,
  action,
}: PoolStatProps): ReactElement {
  let displayValue;
  if (isLoading) {
    displayValue = <Skeleton width={70} />;
  } else if (isNew) {
    displayValue = "✨New✨";
  } else {
    displayValue = value;
  }

  return (
    <div className="flex shrink-0 flex-col items-center gap-1.5 sm:items-start">
      <Tooltip
        className={
          "group text-neutral-content before:z-40 before:max-w-56 before:text-start sm:text-sm"
        }
        tooltip={labelTooltip}
      >
        {label}
      </Tooltip>

      <div
        className={classNames("font-dmMono text-h4 font-medium", {
          "gradient-text": variant === "gradient",
        })}
      >
        {displayValue}
      </div>
      {action}
    </div>
  );
}
