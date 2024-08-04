import classNames from "classnames";
import type { ReactElement, ReactNode } from "react";

interface CellWithTooltipProps {
  label: ReactNode;
  tooltip: string;
}

export function TextWithTooltip({
  label,
  tooltip,
}: CellWithTooltipProps): ReactElement {
  return (
    <div
      data-tip={tooltip}
      // Future note: use before: to style the text inside the tooltip
      className={classNames(
        "daisy-tooltip flex items-center transition duration-150 ease-in-out before:whitespace-normal",
      )}
    >
      <p className="text-sm text-neutral-content">{label}</p>
    </div>
  );
}
