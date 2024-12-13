import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactNode } from "react";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";

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
      className={classNames("flex w-full justify-between pb-2", {
        "text-md": size === "medium",
        "text-sm": size === "small",
      })}
    >
      {tooltipContent ? (
        <Tooltip
          position={tooltipPosition}
          className={classNames("group text-left text-neutral-content", {
            "before:w-64": tooltipSize === "small",
          })}
          tooltip={tooltipContent}
        >
          {label}
          <InformationCircleIcon className="ml-1.5 w-5 opacity-50 transition duration-150 ease-in-out group-hover:opacity-100 lg:inline-block" />
        </Tooltip>
      ) : (
        <div className="text-neutral-content">{label}</div>
      )}
      <div>{value}</div>
    </div>
  );
}
