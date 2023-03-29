import { ReactElement, ReactNode } from "react";
import classNames from "classnames";

export interface PreviewRowProps {
  label: ReactNode;
  value: ReactNode;
  /**
   * Is this row used to show totals?
   */
  totalRow?: boolean;
}

export function PreviewRow({
  label,
  value,
  totalRow,
}: PreviewRowProps): ReactElement {
  return (
    <div
      className={classNames("flex justify-between", {
        "font-bold": totalRow,
      })}
    >
      <span className="text-lightText">{label}</span>
      <span>{value}</span>
    </div>
  );
}
