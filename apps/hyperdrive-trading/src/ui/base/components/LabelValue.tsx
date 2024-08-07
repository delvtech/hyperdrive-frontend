import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactNode } from "react";

export function LabelValue({
  size = "medium",
  label: label,
  value: value,
  tooltipContent,
  tooltipPosition,
  tooltipSize,
}: {
  size?: "small" | "medium";
  tooltipContent?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  /**
   * Small = 256px
   *
   * Default = 320px
   */
  tooltipSize?: "small" | "default";
  label: ReactNode;
  value: ReactNode;
}): JSX.Element {
  return (
    <div
      className={classNames("flex w-full justify-between pb-2 ", {
        "text-md": size === "medium",
        "text-sm": size === "small",
      })}
    >
      <div
        className={classNames(
          "flex items-center text-neutral-content before:bg-base-100",
          {
            "group daisy-tooltip cursor-help": tooltipContent,
            "daisy-tooltip-top": tooltipPosition === "top",
            "daisy-tooltip-bottom": tooltipPosition === "bottom",
            "daisy-tooltip-left": tooltipPosition === "left",
            "daisy-tooltip-right": tooltipPosition === "right",
            "before:w-64": tooltipSize === "small",
          },
        )}
        data-tip={tooltipContent}
      >
        {label}
        {tooltipContent ? (
          <InformationCircleIcon className="ml-1.5 w-5 opacity-50 transition duration-150 ease-in-out group-hover:opacity-100 lg:inline-block" />
        ) : null}
      </div>
      <div>{value}</div>
    </div>
  );
}
