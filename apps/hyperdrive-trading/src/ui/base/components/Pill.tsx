import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface PillProps extends PropsWithChildren {
  className?: string;
}

export function Pill({ children, className }: PillProps): ReactElement {
  return (
    <span
      className={classNames(
        "whitespace-nowrap font-bold rounded bg-hyper-blue-400 flex items-center px-3 py-0.5 font-quantico text-sm text-hyper-green",
        className,
      )}
    >
      {children}
    </span>
  );
}
