import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface PillProps extends PropsWithChildren {
  variant?: PillVariant;
  className?: string;
}

type PillVariant = "Green" | "Red";

const PillVariantStyles: Record<PillVariant, string> = {
  Green: "text-success bg-base-100",
  Red: "text-error bg-base-100",
};

export function Pill({
  children,
  className,
  variant = "Green",
}: PillProps): ReactElement {
  return (
    <span
      className={classNames(
        "flex items-center whitespace-nowrap rounded px-3 py-0.5 font-bold",
        PillVariantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
