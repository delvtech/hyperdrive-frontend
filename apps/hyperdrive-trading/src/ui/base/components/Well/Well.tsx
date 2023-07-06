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
    "hover:cursor-pointer hover:glass": isInteractive,
    "bg-base-300/50 ring-neutral-content/20 ring-1": !variant,
    "bg-primary/5 ring-primary/20 ring-1": variant === "primary",
    "bg-secondary/5 ring-secondary/20 ring-1": variant === "secondary",
    "bg-accent/5 ring-accent/20 ring-1": variant === "accent",
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
