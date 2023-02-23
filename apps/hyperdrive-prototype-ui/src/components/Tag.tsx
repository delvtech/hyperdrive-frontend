import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

interface TagProps extends PropsWithChildren {
  className?: string;
  text: string;
}

export function Tag({ text, className, children }: TagProps): ReactElement {
  return (
    <div
      className={classNames("flex items-center px-2 py-1 bg-white", className)}
    >
      {children}
      <span className="font-bold text-black">{text}</span>
    </div>
  );
}
