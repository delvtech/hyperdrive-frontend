import { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export interface PreviewRowProps {
  label: ReactNode;
  previousValue?: ReactNode;
  value: ReactNode;
  /**
   * Is this row used to show totals?
   */
  totalRow?: boolean;
}

export function PreviewRow({
  label,
  value,
  previousValue,
  totalRow,
}: PreviewRowProps): ReactElement {
  return (
    <div
      className={classNames("flex justify-between", {
        "font-bold": totalRow,
      })}
    >
      <span className=" text-h6 text-secondaryText">{label}</span>
      {previousValue ? (
        <span className="inline-flex items-center gap-2">
          <span className="text-h6 text-[#9BA2C0]">{previousValue}</span>
          <span className="text-h6 font-semibold text-white">→</span>
          <span className="text-h6 text-white">{value}</span>
        </span>
      ) : (
        <span className=" text-h6 text-white">{value}</span>
      )}
    </div>
  );
}
