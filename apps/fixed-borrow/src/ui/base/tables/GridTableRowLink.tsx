import classNames from "classnames";
import { Link, To } from "react-router-dom";
import { PropsWithChildren, ReactElement } from "react";

/**
 * A div with `display: grid` pretending to be a table row :).
 * To customize column widths use the `grid-cols-[<col-widths>]` className.
 * @see https://tailwindcss.com/docs/grid-template-columns#using-custom-values
 */
export function GridTableRowLink({
  href,
  className,
  children,
}: PropsWithChildren<{
  href: To;
  className?: string;
}>): ReactElement {
  return (
    <Link
      to={href}
      className={classNames(
        "odd:bg-base-100 hover:bg-base-300 grid auto-cols-fr grid-flow-col transition-all last:rounded-b-lg [&>*]:overflow-hidden [&>*]:text-ellipsis [&>*]:p-4",
        className,
      )}
    >
      {children}
    </Link>
  );
}
