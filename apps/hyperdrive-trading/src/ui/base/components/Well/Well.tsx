import classNames from "classnames";
import {
  ComponentProps,
  ElementType,
  PropsWithChildren,
  ReactElement,
} from "react";

interface WellProps<T extends ElementType = "div"> {
  /**
   *   The `as` prop allows you to specify the HTML element to render.  Use this
   *   when you need to customize the underlying element for specific use cases,
   *   such as avoiding invalid DOM nesting (e.g., wrapping a button inside
   *   another button).  Avoid using `as` for basic styling purposes; its
   *   primary role is to adjust the rendered element to fit the correct
   *   semantic or structural context. Defaults to `div` when not interactive,
   *   `button` when interactive (has an onClick prop).
   */
  as?: T;
  interactive?: boolean;
  elevation?: "flat" | "elevated";
  transparent?: boolean;
  block?: boolean;
  disabled?: boolean;
  onClick?: ComponentProps<"button">["onClick"];
}

export function Well<T extends ElementType = "div">({
  as,
  disabled,
  interactive,
  elevation = "elevated",
  transparent,
  children,
  block,
  className,
  onClick,
  ...rest
}: PropsWithChildren<WellProps<T>> &
  Omit<ComponentProps<T>, keyof WellProps<T>>): ReactElement {
  const Component = as || (onClick ? "button" : "div");
  const isInteractive = !disabled && (interactive || onClick);
  const innerClassName = classNames(
    "daisy-card p-4 lg:p-8 border border-1 border-base-200",
    {
      "shadow-md": elevation === "elevated",
      "bg-gray-800": !transparent,
      "w-full": block,
      "hover:cursor-pointer": onClick,
    },
    className,
  );

  if (isInteractive) {
    return (
      <Component
        className={classNames(
          "group relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl p-[1.5px] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/5",
        )}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        <div className="absolute inset-0 size-full rounded-full group-hover:-translate-y-0.5 group-hover:scale-[1.01] group-hover:animate-rotate group-hover:bg-[conic-gradient(#11cc89_20deg,transparent_120deg)]"></div>
        <div
          className={classNames(
            "relative z-20 flex w-full rounded-[0.60rem] bg-base-100 p-2",
            innerClassName,
          )}
        >
          {children}
        </div>
      </Component>
    );
  }

  return (
    <Component
      className={innerClassName}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
}
