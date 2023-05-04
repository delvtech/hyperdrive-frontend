import classNames from "classnames";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { Link, To } from "react-router-dom";

type TabVariant = "sun" | "pinkSlip";

interface Tab {
  label: ReactNode;
  variant?: TabVariant;
  href?: To;
}

interface TabsProps {
  tabs: Tab[];
  /**
   * The index of the tab in the `tabs` array.
   */
  activeTab: number;
  onChange?: (tabIndex: number, tab: Tab) => void;
}

export function Tabs({
  tabs,
  activeTab,
  onChange,
}: PropsWithChildren<TabsProps>): ReactElement {
  return (
    <ul className="flex gap-4 border-b border-inputBorder">
      {tabs.map((tab, i) => {
        const { label, variant, href } = tab;
        const isActive = activeTab === i;

        const className = classNames(
          "border-b-2 border-transparent px-2 pb-2 text-h6 hover:text-white -mb-0.5",
          {
            // Active
            "font-bold text-white": isActive,
            "border-b-lightButton": isActive && !variant,
            "bg-gradient-to-r from-sunBurst-start via-sunBurst-middle to-sunBurst-end bg-[length:100%_2px] bg-no-repeat bg-bottom":
              isActive && variant === "sun",
            "bg-gradient-to-r from-pinkSlipBurst-start via-pinkSlipBurst-middle to-pinkSlipBurst-end bg-[length:100%_2px] bg-no-repeat bg-bottom":
              isActive && variant === "pinkSlip",

            // Inactive
            "text-secondaryText": !isActive,
          },
        );
        return (
          <li key={i}>
            {href ? (
              <Link to={href} className={className}>
                {label}
              </Link>
            ) : (
              <button className={className} onClick={() => onChange?.(i, tab)}>
                {label}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
