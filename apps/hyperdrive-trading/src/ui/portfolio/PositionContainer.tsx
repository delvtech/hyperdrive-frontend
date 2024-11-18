import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

export function PositionContainer({
  className,
  children,
}: PropsWithChildren<{ className?: string }>): ReactElement {
  return (
    <div className={classNames("flex w-[1036px] flex-col gap-10", className)}>
      {children}
    </div>
  );
}
