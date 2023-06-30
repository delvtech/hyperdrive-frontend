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

    "bg-primary/5 ring-primary": variant === "primary",
    "hover:bg-primary/10 hover:ring-1": isInteractive && variant === "primary",

    "bg-secondary/5 ring-secondary": variant === "secondary",
    "hover:bg-secondary/10 hover:ring-1":
      isInteractive && variant === "secondary",

    "bg-accent/5 ring-accent": variant === "accent",
    "hover:bg-accent/10 hover:ring-1": isInteractive && variant === "accent",
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
