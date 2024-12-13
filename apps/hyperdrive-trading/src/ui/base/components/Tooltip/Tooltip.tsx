import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface CellWithTooltipProps extends PropsWithChildren {
  className?: string;
  tooltip?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({
  children,
  className,
  tooltip,
  position = "top",
}: CellWithTooltipProps): ReactElement {
  if (!tooltip) {
    return <div className={className}>{children}</div>;
  }
  return (
    <div
      data-tip={tooltip}
      // Future note: use before: to style the text inside the tooltip
      className={classNames(
        "daisy-tooltip flex cursor-help items-center transition duration-150 ease-in-out before:whitespace-normal before:border before:border-gray-900 before:bg-gray-700 before:px-3 before:py-2 before:shadow-2xl",
        {
          "daisy-tooltip-top": position === "top",
          "daisy-tooltip-bottom": position === "bottom",
          "daisy-tooltip-left": position === "left",
          "daisy-tooltip-right": position === "right",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
