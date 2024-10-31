import classNames from "classnames";
import { ReactElement } from "react";

export function PercentLabel({ value }: { value: string }): ReactElement {
  return (
    <div
      className={classNames(
        "font-dmMono text-h4 font-medium",
        "after:text-h5 after:content-['%']",
      )}
    >
      {value}
    </div>
  );
}
