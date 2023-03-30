import { ReactElement, PropsWithChildren } from "react";
import classNames from "classnames";

interface ButtonProps {
  onClick: (...args: any) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  block?: boolean;
  variant?: "dark" | "sun" | "pinkSlip";
}

export function Button({
  onClick,
  disabled,
  size = "md",
  block,
  variant,
  children,
}: PropsWithChildren<ButtonProps>): ReactElement {
  return (
    <button
      className={classNames(
        "flex items-center justify-center gap-1 rounded-[6px] font-bold transition-all",
        {
          "w-full": block,
          "cursor-not-allowed opacity-50": disabled,

          // Size
          "h-8 rounded-[6px] px-2 py-1 text-sm leading-sm": size === "sm",
          "h-8 rounded-[6px] px-3 py-1 ": size === "md",
          "h-12 rounded-lg px-5 py-3 text-lg leading-lg": size === "lg",

          // No Variant
          ...{
            "border border-transparent bg-lightButton text-white ": !variant,
            "hover:bg-lightButton-hover": !variant && !disabled,
          },

          // Sun Variant
          ...{
            "bg-gradient-to-br from-sunBurst-start to-sunBurst-end text-midnight ":
              variant === "sun",
            "hover:from-sunBurst-start-hover hover:to-sunBurst-end-hover":
              variant === "sun" && !disabled,
          },

          // PinkSlip Variant
          ...{
            "bg-gradient-to-br from-pinkSlipBurst-start to-pinkSlipBurst-end text-midnight ":
              variant === "pinkSlip",
            "hover:from-pinkSlipBurst-start-hover hover:to-pinkSlipBurst-end-hover":
              variant === "pinkSlip" && !disabled,
          },

          // Dark Variant
          ...{
            "bg-darkButton text-white active:bg-darkButton-hover":
              variant === "dark",
            "hover:bg-darkButton-hover ": variant === "dark" && !disabled,
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
