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
  const className = classNames("rounded-lg p-4", {
    "w-full": block,
    "hover:cursor-pointer hover:ring-opacity-50": isInteractive,

    "bg-base-300/50": !variant,
    "hover:ring-neutral-content hover:ring-1": isInteractive && !variant,

    "bg-primary/5 ring-primary/20 ring-1": variant === "primary",
    "hover:bg-primary/10 hover:ring-primary/50":
      isInteractive && variant === "primary",

    "bg-secondary/5 ring-secondary/20 ring-1": variant === "secondary",
    "hover:bg-secondary/10 hover:ring-secondary/50":
      isInteractive && variant === "secondary",

    "bg-accent/5 ring-accent/20 ring-1": variant === "accent",
    "hover:bg-accent/10 hover:ring-accent/50":
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
