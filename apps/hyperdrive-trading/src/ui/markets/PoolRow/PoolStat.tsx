import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";

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
    <div className="flex w-28 flex-col items-start gap-1.5">
      <p
        data-tip={labelTooltip}
        className={
          "group daisy-tooltip cursor-help text-sm text-neutral-content before:z-40 before:max-w-56 before:p-2 before:text-start"
        }
      >
        {label}
      </p>
      <div
        className={classNames("font-dmMono text-h4 font-medium", {
          "gradient-text": variant === "gradient",
        })}
      >
        {displayValue}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
