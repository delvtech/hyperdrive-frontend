import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface WellProps {
  interactive?: boolean;
  elevation?: "flat" | "elevated";
  outlined?: boolean;
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Well({
  disabled,
  interactive,
  elevation = "elevated",
  outlined,
  children,
  block,
  onClick,
}: PropsWithChildren<WellProps>): ReactElement {
  const isInteractive = !disabled && (interactive || onClick);
  const className = classNames(
    "daisy-card p-5 bg-base-200 border",
    outlined ? "border-1 border-lime" : "border-1 border-gray-700",
    {
      "shadow-md": elevation === "elevated",
      "w-full": block,
      "hover:cursor-pointer hover:-translate-y-1 transition duration-300 hover:shadow-xl ease-in-out":
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
