import classNames from "classnames";
import { ReactNode } from "react";

export function PrimaryStat({
  label,
  value,
  valueUnit,
  subValue,
  valueClassName,
  alignment,
}: {
  label: string;
  value: ReactNode;
  valueUnit: string;
  subValue?: ReactNode;
  valueClassName?: string;
  alignment?: "left" | "right";
}): JSX.Element {
  return (
    <div
      className={classNames("flex flex-col gap-1", {
        "text-left": alignment === "left",
        "text-right": alignment === "right",
      })}
    >
      <p className="text-sm text-neutral-content">{label}</p>
      <div className={valueClassName}>
        <p className="text-h3 font-bold">{value}</p>
        <p className="ml-1">{valueUnit}</p>
      </div>
      {subValue && <p className="text-sm text-neutral-content">{subValue}</p>}
    </div>
  );
}
