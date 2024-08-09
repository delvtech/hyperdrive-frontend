import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactNode } from "react";

export function PrimaryStat({
  label,
  value,
  valueUnit,
  subValue,
  tooltipContent,
  tooltipPosition = "top",
  valueClassName,
  unitClassName,
  containerClassName,
}: {
  label: string;
  value: ReactNode;
  valueUnit?: ReactNode;
  subValue?: ReactNode;
  tooltipContent?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  valueClassName?: string;
  unitClassName?: string;
  containerClassName?: string;
}): JSX.Element {
  return (
    <div className={classNames("flex flex-col gap-1", containerClassName)}>
      <div className="flex gap-1">
        <p className="text-sm text-neutral-content">{label}</p>
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
      <div className={valueClassName}>
        <div className="text-h3 font-bold">{value}</div>
        {valueUnit ? (
          <div className={`ml-1 ${unitClassName}`}>{valueUnit}</div>
        ) : null}
      </div>
      {subValue && <p className="text-xs text-neutral-content">{subValue}</p>}
    </div>
  );
}
