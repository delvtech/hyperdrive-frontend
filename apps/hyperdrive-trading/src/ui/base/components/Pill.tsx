import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface PillProps extends PropsWithChildren {
  variant?: PillVariant;
  className?: string;
}

type PillVariant = "Green" | "Red";

const PillVariantStyles: Record<PillVariant, string> = {
  Green: "text-hyper-green bg-hyper-blue-400",
  Red: "text-hyper-red bg-base-500",
};

export function Pill({
  children,
  className,
  variant = "Green",
}: PillProps): ReactElement {
  return (
    <span
      className={classNames(
        "whitespace-nowrap font-bold rounded flex items-center px-3 py-0.5 font-quantico",
        PillVariantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
