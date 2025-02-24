import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";

export function PrimaryStat({
  label,
  alignment = "left",
  value,
  valueUnit,
  subValue,
  tooltipContent,
  tooltipPosition = "top",
  valueContainerClassName,
  unitClassName,
  valueClassName,
  valueLoading = false,
}: {
  alignment?: "left" | "right";
  label: ReactNode;
  value: ReactNode;
  valueUnit?: ReactNode;
  subValue?: ReactNode;
  tooltipContent?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  valueContainerClassName?: string;
  unitClassName?: string;
  valueClassName?: string;
  valueLoading?: boolean;
}): JSX.Element {
  return (
    <div
      className={classNames(
        "flex min-w-0 flex-1 shrink-0 flex-col justify-between gap-1",
        { "items-end": alignment === "right" },
      )}
    >
      <div className="flex gap-1">
        <p className="max-w-40 text-sm text-neutral-content">{label}</p>
        {tooltipContent && (
          <Tooltip
            position={tooltipPosition}
            tooltip={tooltipContent}
            className="before:text-left"
          >
            <InformationCircleIcon className="size-4 text-neutral-content" />
          </Tooltip>
        )}
      </div>
      <div className={valueContainerClassName}>
        {valueLoading ? (
          <Skeleton width={100} className="h-8" />
        ) : (
          <div className="flex flex-wrap items-baseline">
            <div className={valueClassName}>{value}</div>
            {valueUnit ? (
              <div className={`ml-1 ${unitClassName}`}>{valueUnit}</div>
            ) : null}
          </div>
        )}
      </div>
      {subValue && (
        <div className="text-sm text-neutral-content">{subValue}</div>
      )}
    </div>
  );
}
