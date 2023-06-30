import classNames from "classnames";
import { ReactElement } from "react";
import { YieldSource } from "src/appconfig/yieldSources/yieldSources";

interface YieldSourceLabelProps {
  yieldSource: YieldSource | undefined;
}

export function YieldSourceLabel({
  yieldSource,
}: YieldSourceLabelProps): ReactElement {
  return (
    <span className={classNames("flex items-center gap-x-2")}>
      <img className="h-4" src={yieldSource?.iconUrl} />
      <span className="font-lato text-h6 font-normal text-neutral-content">
        {yieldSource?.protocol}
      </span>
    </span>
  );
}
