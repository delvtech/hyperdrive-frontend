import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface WellProps {
  interactive?: boolean;
  variant?: "primary" | "secondary" | "accent";
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Well({
  disabled,
  interactive,
  children,
  block,
  variant,
  onClick,
}: PropsWithChildren<WellProps>): ReactElement {
  const isInteractive = !disabled && (interactive || onClick);
  const className = classNames(
    "daisy-card p-4 daisy-card-bordered shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-base-200/50",
    {
      "w-full": block,
      "hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out":
        isInteractive,
    },
  );

  if (onClick || interactive) {
    return (
      <button className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return <div className={className}>{children}</div>;
}
