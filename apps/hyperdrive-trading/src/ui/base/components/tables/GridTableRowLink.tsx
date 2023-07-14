import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";
import { Link } from "react-router-dom";

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
  href: string;
  className?: string;
}>): ReactElement {
  return (
    <Link
      to={href}
      className={classNames(
        "grid auto-cols-fr grid-flow-col text-sm transition-all last:rounded-b-lg odd:bg-base-100 hover:bg-base-300 md:text-h6 [&>*]:text-ellipsis [&>*]:p-4",
        className,
      )}
    >
      {children}
    </Link>
  );
}
