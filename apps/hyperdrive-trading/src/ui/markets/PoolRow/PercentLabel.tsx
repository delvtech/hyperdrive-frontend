import classNames from "classnames";
import { ReactElement } from "react";

export function PercentLabel({
  value,
  className,
}: {
  value: string;
  className?: string;
}): ReactElement {
  return (
    <div
      className={classNames(
        "font-dmMono text-h4 font-medium",
        "after:text-h5 after:content-['%']",
        className,
      )}
    >
      {value}
    </div>
  );
}
