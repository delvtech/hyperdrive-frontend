import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface WellProps {
  interactive?: boolean;
  elevation?: "flat" | "elevated";
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string; // Add this line
}

export function Well({
  disabled,
  interactive,
  elevation = "elevated",
  children,
  block,
  onClick,
  className, // Include the new prop
}: PropsWithChildren<WellProps>): ReactElement {
  const isInteractive = !disabled && (interactive || onClick);
  const wellClassName = classNames(
    "daisy-card p-4 bg-base-200 border border-1",
    className, // Use the new prop here
    {
      "shadow-md": elevation === "elevated",
      "w-full": block,
      "hover:cursor-pointer hover:-translate-y-1 transition duration-300 hover:shadow-xl ease-in-out":
        isInteractive,
    },
  );

  if (onClick || interactive) {
    return (
      <button className={wellClassName} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return <div className={wellClassName}>{children}</div>;
}
