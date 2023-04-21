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
      // reloadDocument
      to={href}
      className={classNames(
        "grid auto-cols-fr grid-flow-col transition-all last:rounded-b-lg odd:bg-base-200 hover:bg-base-300 [&>*]:overflow-hidden [&>*]:text-ellipsis [&>*]:p-4",
        className,
      )}
    >
      {children}
    </Link>
  );
}
