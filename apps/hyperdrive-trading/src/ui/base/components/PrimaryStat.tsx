import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";

export function PrimaryStat({
  label,
  value,
  valueUnit,
  subValue,
  tooltipContent,
  tooltipPosition = "top",
  valueContainerClassName,
  unitClassName,
  valueLoading = false,
}: {
  label: string;
  value: ReactNode;
  valueUnit?: ReactNode;
  subValue?: ReactNode;
  tooltipContent?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  valueContainerClassName?: string;
  unitClassName?: string;
  valueLoading?: boolean;
}): JSX.Element {
  return (
    <div className="flex min-w-0 flex-1 shrink-0 flex-col justify-between gap-1">
      <div className="flex gap-1">
        <p className="max-w-40 text-sm text-neutral-content">{label}</p>
        {tooltipContent && (
          <div
            className={classNames(
              "daisy-tooltip daisy-tooltip-top before:border",
              {
                "daisy-tooltip-top": tooltipPosition === "top",
                "daisy-tooltip-bottom": tooltipPosition === "bottom",
                "daisy-tooltip-left": tooltipPosition === "left",
                "daisy-tooltip-right": tooltipPosition === "right",
              },
            )}
            data-tip={tooltipContent}
          >
            <InformationCircleIcon className="size-4 text-neutral-content" />
          </div>
        )}
      </div>
      <div className={valueContainerClassName}>
        {valueLoading ? (
          <Skeleton width={100} className="h-8" />
        ) : (
          <>
            {value}
            {valueUnit ? (
              <div className={`ml-1 ${unitClassName}`}>{valueUnit}</div>
            ) : null}
          </>
        )}
      </div>
      {subValue && (
        <div className="text-sm text-neutral-content">{subValue}</div>
      )}
    </div>
  );
}
