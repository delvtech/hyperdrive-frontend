import classNames from "classnames";
import { ReactNode } from "react";

export function PrimaryStat({
  label,
  value,
  valueUnit,
  subValue,
  valueStyle,
}: {
  label: string;
  value: ReactNode;
  valueUnit: string;
  subValue?: ReactNode;
  valueStyle?: string;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-neutral-content">{label}</p>
      <div className={classNames("flex flex-row items-end")}>
        <div className={classNames("flex items-end", valueStyle)}>
          <p className="text-h3 font-bold">{value}</p>
          <p className="ml-2">{valueUnit}</p>
        </div>
      </div>
      {subValue && <p className="text-neutral-content">{subValue}</p>}
    </div>
  );
}
