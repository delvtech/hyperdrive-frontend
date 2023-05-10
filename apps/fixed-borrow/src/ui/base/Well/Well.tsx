import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface WellProps {
  interactive?: boolean;
  onClick?: () => void;
}

export function Well({
  interactive,
  children,
  onClick,
}: PropsWithChildren<WellProps>): ReactElement {
  const className = classNames(
    "rounded-lg bg-midnight p-4 ring-1 ring-dawnAccent",
    { "hover:cursor-pointer hover:bg-inputBg": interactive || onClick },
  );

  if (onClick) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return <div className={className}>{children}</div>;
}
