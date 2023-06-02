import classNames from "classnames";
import { ReactElement } from "react";
import { YieldSource } from "src/appconfig/yieldSources/yieldSources";

interface YieldSourceLabelProps {
  yieldSource: YieldSource | undefined;
  className?: string;
}

export function YieldSourceLabel({
  yieldSource,
  className,
}: YieldSourceLabelProps): ReactElement {
  return (
    <span
      className={classNames(
        className,
        "flex items-center gap-x-2 font-dm-sans",
      )}
    >
      <img className="h-4" src={yieldSource?.iconUrl} />
      {yieldSource?.protocol}
    </span>
  );
}
