import { FeaturedMarkets } from "src/ui/markets/components/FeaturedMarkets";
import { ReactElement } from "react";
import classNames from "classnames";

interface YieldSourceLabelProps {
  yieldSource: string;
  className?: string;
}

export function YieldSourceLabel({
  yieldSource,
  className,
}: YieldSourceLabelProps): ReactElement {
  // TODO: autocomplete yield source string from config
  // TODO: get yield source image from config
  return (
    <span
      className={classNames("flex items-center gap-x-2 font-rubik", className)}
    >
      <img
        className="h-4"
        src="https://cryptologos.cc/logos/maker-mkr-logo.png?v=024"
      />
      {yieldSource}
    </span>
  );
}
