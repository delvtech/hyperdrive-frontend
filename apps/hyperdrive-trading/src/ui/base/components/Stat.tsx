import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

export interface StatProps {
  label: ReactNode;
  value: ReactNode;
  description?: string;
  size?: "xsmall" | "small" | "large";
  horizontal?: boolean;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}

export function Stat({
  label,
  value,
  size = "large",
  description,
  horizontal,
  tooltipPosition = "bottom",
}: StatProps): ReactElement {
  return (
    <div
      className={classNames(
        "flex w-full items-center whitespace-pre-wrap ease-in-out",
        {
          "flex-col": !horizontal,
          "flex-row-reverse": horizontal,
          "gap-2": horizontal && label,
          "gap-0.5": size === "xsmall",
        },
      )}
    >
      <div
        className={classNames("whitespace-nowrap font-bold", {
          "mb-1 text-h5 lg:text-h4": size === "large",
          "text-sm": size === "small",
          "text-xs": size === "xsmall",
        })}
      >
        {value}
      </div>
      {description ? (
        <p
          data-tip={description}
          className={classNames(
            `group daisy-tooltip cursor-help text-sm text-neutral-content before:z-40 before:max-w-56 before:p-2 before:text-start`,
            {
              "text-sm": ["large", "small"].includes(size),
              "text-2xs": size === "xsmall",
              "daisy-tooltip-top": tooltipPosition === "top",
              "daisy-tooltip-bottom": tooltipPosition === "bottom",
              "daisy-tooltip-left": tooltipPosition === "left",
              "daisy-tooltip-right": tooltipPosition === "right",
            },
          )}
        >
          {label}
          <InformationCircleIcon className="ml-1 hidden w-4 text-neutral-content opacity-0 transition duration-150 ease-in-out group-hover:text-gray-500 group-hover:opacity-100 lg:inline-block" />
        </p>
      ) : (
        <div className="text-sm text-neutral-content">{label}</div>
      )}
    </div>
  );
}
