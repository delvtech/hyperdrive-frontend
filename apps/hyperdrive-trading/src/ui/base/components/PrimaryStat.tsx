import type { ReactNode } from "react";

export function PrimaryStat({
  label,
  value,
  valueUnit,
  subValue,
  valueClassName,
}: {
  label: string;
  value: ReactNode;
  valueUnit: string;
  subValue?: ReactNode;
  valueClassName?: string;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-neutral-content text-sm">{label}</p>
      <div className={valueClassName}>
        <p className="font-bold text-h3">{value}</p>
        <p>{valueUnit}</p>
      </div>
      {subValue && <p className="text-neutral-content text-sm">{subValue}</p>}
    </div>
  );
}
