import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

type ButtonVariant = "Future" | "Work" | "Crimson" | "Emerald";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  block?: boolean;
  variant?: ButtonVariant;
  className?: string;
}

export function Button({
  onClick,
  disabled = false,
  active = false,
  size = "md",
  block,
  variant,
  children,
  className,
}: PropsWithChildren<ButtonProps>): ReactElement {
  return (
    <button
      className={classNames(
        className,
        "flex items-center justify-center gap-1 whitespace-nowrap rounded-[6px] font-bold transition-all",
        {
          "w-full": block,
          "cursor-not-allowed opacity-50": disabled,
          "hover:bg-opacity-60": !disabled,

          // Size
          "h-8 rounded-sm px-2 py-1 text-sm leading-sm": size === "sm",
          "h-8 rounded-sm px-4 py-2": size === "md",
          "h-12 rounded-sm px-4 py-2 text-lg leading-lg": size === "lg",

          // No Variant
          ...{
            "border border-transparent  text-white ": !variant,
          },

          // Future Variant
          ...{
            "border border-hyper-blue-300 bg-base-300 font-quantico text-hyper-blue-100":
              variant === "Future",
            "hover:bg-hyper-blue-400": variant === "Future" && !disabled,
            "border-hyper-pink hover:bg-base-300":
              variant === "Future" && active,
          },

          // Work Variant
          ...{
            "bg-hyper-orange font-quantico text-base-300": variant === "Work",
          },

          // Crimson Variant
          ...{
            "bg-hyper-red font-quantico text-base-300": variant === "Crimson",
          },

          // Emerald Variant
          ...{
            "bg-hyper-green font-quantico text-base-300": variant === "Emerald",
          },
        },
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
