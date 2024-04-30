import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

export interface StatProps {
  label: string;
  value: ReactNode;
  description?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}

export function Stat({
  label,
  value,
  description,
  tooltipPosition = "bottom",
}: StatProps): ReactElement {
  return (
    <div className="flex flex-col items-start whitespace-pre-wrap ease-in-out">
      <div className="mb-1 whitespace-nowrap text-h4 font-bold">{value}</div>
      {description ? (
        <p
          data-tip={description}
          className={classNames(
            `group daisy-tooltip cursor-help text-sm text-neutral-content before:max-w-48 before:p-2 before:text-start`,
            {
              "daisy-tooltip-top": tooltipPosition === "top",
              "daisy-tooltip-bottom": tooltipPosition === "bottom",
              "daisy-tooltip-left": tooltipPosition === "left",
              "daisy-tooltip-right": tooltipPosition === "right",
            },
          )}
        >
          {label}
          <InformationCircleIcon className="group-hover:text-gray-500 ml-1 inline-block w-4 text-neutral-content opacity-0 transition duration-150 ease-in-out group-hover:opacity-100" />
        </p>
      ) : (
        <p className="text-sm text-neutral-content">{label}</p>
      )}
    </div>
  );
}
