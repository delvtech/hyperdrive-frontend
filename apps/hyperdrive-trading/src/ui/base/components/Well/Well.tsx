import classNames from "classnames";
import type { PropsWithChildren, ReactElement } from "react";

interface WellProps {
  interactive?: boolean;
  elevation?: "flat" | "elevated";
  transparent?: boolean;
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Well({
  disabled,
  interactive,
  elevation = "elevated",
  transparent,
  children,
  block,
  onClick,
}: PropsWithChildren<WellProps>): ReactElement {
  const isInteractive = !disabled && (interactive || onClick);
  const className = classNames(
    "daisy-card border border-1 border-neutral-content/20 p-7",
    {
      "shadow-md": elevation === "elevated",
      "bg-base-200": !transparent,
      "w-full": block,
      "hover:-translate-y-0.5 transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-primary/5 hover:shadow-xl":
        isInteractive,
      "hover:cursor-pointer": onClick,
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
