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
    <div className="flex w-full flex-col items-center whitespace-pre-wrap ease-in-out">
      <div className="mb-1 whitespace-nowrap text-h5 font-bold lg:text-h4">
        {value}
      </div>
      {description ? (
        <p
          data-tip={description}
          className={classNames(
            `group daisy-tooltip flex w-full cursor-help justify-center text-center text-sm text-neutral-content before:z-50 before:max-w-56 before:p-2 before:text-start lg:text-center`,
            {
              "daisy-tooltip-top": tooltipPosition === "top",
              "daisy-tooltip-bottom": tooltipPosition === "bottom",
              "daisy-tooltip-left": tooltipPosition === "left",
              "daisy-tooltip-right": tooltipPosition === "right",
            },
          )}
        >
          {label}
          <InformationCircleIcon className="group-hover:text-gray-500 ml-1 hidden w-4 text-neutral-content opacity-0 transition duration-150 ease-in-out group-hover:opacity-100 lg:inline-block" />
        </p>
      ) : (
        <p className="text-sm text-neutral-content">{label}</p>
      )}
    </div>
  );
}
