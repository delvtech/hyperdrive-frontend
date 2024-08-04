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
    "daisy-card p-7 border border-1 border-neutral-content/20",
    {
      "shadow-md": elevation === "elevated",
      "bg-base-200": !transparent,
      "w-full": block,
      "hover:-translate-y-0.5 hover:scale-[1.01] transition duration-300 hover:shadow-xl ease-in-out hover:shadow-primary/5":
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
