import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

/**
 * A div with `display: grid` pretending to be a table row :).
 * To customize column widths use the `grid-cols-[<col-widths>]` className.
 * @see https://tailwindcss.com/docs/grid-template-columns#using-custom-values
 */
export function GridTableHeader({
  className,
  children,
}: PropsWithChildren<{
  className?: string;
}>): ReactElement {
  return (
    <div
      className={classNames(
        "grid auto-cols-fr grid-flow-col rounded-t-md bg-base-100 font-bold leading-4 [&>*]:overflow-hidden [&>*]:text-ellipsis [&>*]:p-4 items-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
