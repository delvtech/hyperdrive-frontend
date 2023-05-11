import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface WellProps {
  interactive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Well({
  disabled,
  interactive,
  children,
  onClick,
}: PropsWithChildren<WellProps>): ReactElement {
  const className = classNames(
    "rounded-lg bg-midnight p-4 ring-1 ring-dawnAccent h-full",
    {
      "hover:cursor-pointer hover:bg-inputBg":
        !disabled && (interactive || onClick),
    },
  );

  if (onClick) {
    return (
      <button className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return <div className={className}>{children}</div>;
}
