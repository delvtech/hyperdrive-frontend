import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface WellProps {
  interactive?: boolean;
}

export function Well({
  interactive,
  children,
}: PropsWithChildren<WellProps>): ReactElement {
  return (
    <div
      className={classNames(
        "rounded-lg bg-midnight p-4 ring-1 ring-dawnAccent",
        { "hover:cursor-pointer hover:bg-inputBg": interactive },
      )}
    >
      {children}
    </div>
  );
}
