import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface PillProps extends PropsWithChildren {
  variant?: PillVariant;
  className?: string;
}

type PillVariant = "Green" | "Red";

const PillVariantStyles: Record<PillVariant, string> = {
  Green: "text-success bg-hyper-blue-400",
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
        "flex items-center whitespace-nowrap rounded px-3 py-0.5 font-quantico font-bold",
        PillVariantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
