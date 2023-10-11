import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface StatProps {
  label: string;
  value: ReactNode;
  description?: string;
  className?: string;
}

export function Stat({
  label,
  value,
  description,
  className,
}: StatProps): ReactElement {
  return (
    <div className={className}>
      <p
        data-tip={description}
        // Future note: use before: to style the text inside the tooltip
        className={classNames(
          "daisy-label-text daisy-tooltip mb-1 underline-offset-4",
          description
            ? "cursor-help border-b border-dashed border-current"
            : "",
        )}
      >
        {label}
      </p>
      <div className="whitespace-nowrap text-h6">{value}</div>
    </div>
  );
}
