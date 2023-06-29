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
  variant = "primary",
  onClick,
}: PropsWithChildren<WellProps>): ReactElement {
  const isInteractive = !disabled && (interactive || onClick);
  const className = classNames("rounded-lg p-4", {
    "w-full": block,
    "hover:cursor-pointer hover:ring-opacity-50": isInteractive,

    "bg-success/5 ring-success": variant === "primary",
    "hover:bg-success/10 hover:ring-1": isInteractive && variant === "primary",

    "bg-hyper-orange/5 ring-hyper-orange": variant === "secondary",
    "hover:bg-hyper-orange/10 hover:ring-1":
      isInteractive && variant === "secondary",

    "bg-hyper-pink/5 ring-hyper-pink": variant === "accent",
    "hover:bg-hyper-pink/10 hover:ring-1":
      isInteractive && variant === "accent",
  });

  if (onClick || interactive) {
    return (
      <button className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return <div className={className}>{children}</div>;
}
