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
          "border-b-2 border-transparent p-2 text-h6 transition-all hover:text-white",
          {
            // Active
            "font-bold text-white": isActive,
            "border-b-lightButton": isActive && !variant,
            "border-b-sun": isActive && variant === "sun",
            "border-b-pinkSlip": isActive && variant === "pinkSlip",

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
