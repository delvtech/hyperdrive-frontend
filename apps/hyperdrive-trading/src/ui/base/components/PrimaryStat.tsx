import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

export function PrimaryStat({
  label,
  value,
  valueUnit,
  subValue,
  tooltipContent,
  valueClassName,
}: {
  label: string;
  value: ReactNode;
  valueUnit: ReactNode;
  subValue?: ReactNode;
  tooltipContent?: string;
  valueClassName?: string;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <p className="text-sm text-neutral-content">{label}</p>
        {tooltipContent && (
          <div
            className="daisy-tooltip daisy-tooltip-top before:border"
            data-tip={tooltipContent}
          >
            <InformationCircleIcon className="size-4 text-neutral-content" />
          </div>
        )}
      </div>
      <div className={valueClassName}>
        <p className="text-h3 font-bold">{value}</p>
        <p>{valueUnit}</p>
      </div>
      {subValue && <p className="text-xs text-neutral-content">{subValue}</p>}
    </div>
  );
}
