import classNames from "classnames";
import { MouseEventHandler, PropsWithChildren, ReactElement } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  active?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  active,
  className,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      className={classNames(
        {
          "bg-giga-blue-300": active,
          "bg-transparent": !active,
        },
        "whitespace-nowrap border border-giga-blue-300 px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
