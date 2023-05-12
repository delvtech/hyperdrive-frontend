import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface WellProps {
  interactive?: boolean;
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Well({
  disabled,
  interactive,
  children,
  block,
  onClick,
}: PropsWithChildren<WellProps>): ReactElement {
  const className = classNames(
    "rounded-lg bg-midnight ring-1 ring-dawnAccent p-4",
    {
      "w-full": block,
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
