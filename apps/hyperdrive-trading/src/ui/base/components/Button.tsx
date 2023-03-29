import classNames from "classnames";
import { MouseEventHandler, PropsWithChildren, ReactElement } from "react";

interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariant;
  className?: string;
  active?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

type ButtonVariant = "Trade" | "Default";

const ButtonVariantStyles: Record<ButtonVariant, string> = {
  Trade: "text-xl font-bold bg-hyper-green text-base-300 font-quantico",
  Default:
    "whitespace-nowrap border border-hyper-blue-400 px-4 py-2 font-quantico text-hyper-green hover:bg-hyper-blue-300",
};

export default function Button({
  children,
  active,
  variant = "Default",
  className,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      className={classNames(ButtonVariantStyles[variant], className, {
        "bg-hyper-blue-400 font-bold": active,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
