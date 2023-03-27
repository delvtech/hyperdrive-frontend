import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface PillProps extends PropsWithChildren {
  className?: string;
}

export function Pill({ children, className }: PillProps): ReactElement {
  return (
    <span
      className={classNames(
        "whitespace-nowrap rounded-xl bg-giga-blue-300 flex items-center px-3 py-0.5 font-quantico text-sm text-hyper-green",
        className,
      )}
    >
      {children}
    </span>
  );
}
