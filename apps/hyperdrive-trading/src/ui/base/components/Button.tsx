import classNames from "classnames";
import { MouseEventHandler, PropsWithChildren, ReactElement } from "react";

interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariant;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

type ButtonVariant = "Trade" | "Default" | "Approve" | "Short";

const ButtonVariantStyles: Record<ButtonVariant, string> = {
  Trade:
    "text-xl font-bold bg-hyper-green text-base-300 font-quantico hover:bg-opacity-60 rounded-sm disabled:bg-opacity-50",
  Short:
    "text-xl font-bold bg-hyper-red text-base-300 font-quantico hover:bg-opacity-60 rounded-sm disabled:bg-opacity-50",
  Approve:
    "text-xl font-bold bg-hyper-orange text-base-300 font-quantico hover:bg-opacity-60 rounded-sm disabled:bg-opacity-50",
  Default:
    "whitespace-nowrap border border-hyper-blue-400 px-4 py-2 font-quantico text-hyper-blue-100 hover:bg-hyper-blue-400 hover:bg-opacity-50 bg-base-200 disabled:bg-base-400 disabled:text-opacity-50",
};

export default function Button({
  children,
  active,
  variant = "Default",
  disabled,
  className,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      className={classNames(ButtonVariantStyles[variant], className, {
        "bg-hyper-blue-400 font-bold": active,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
