import classNames from "classnames";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

type TabVariant = "sun" | "pinkSlip";

interface Tab {
  label: ReactNode;
  variant?: TabVariant;
}

interface TabsProps {
  tabs: Tab[];
  /**
   * The index of the tab in the `tabs` array.
   */
  activeTab: number;
  onChange: (tabIndex: number, tab: Tab) => void;
  variant?: TabVariant;
}

export function Tabs({
  tabs,
  activeTab,
  onChange,
  variant: defaultVariant,
}: PropsWithChildren<TabsProps>): ReactElement {
  return (
    <ul className="flex gap-4">
      {tabs.map((tab, i) => {
        const { label, variant = defaultVariant } = tab;
        const isActive = activeTab === i;

        return (
          <li key={i}>
            <button
              className={classNames(
                "border-b-2 border-transparent p-2 text-h4 leading-body transition-all hover:text-white",
                {
                  // Active
                  "font-bold text-white": isActive,
                  "border-b-lightButton": isActive && !variant,
                  "border-b-sun": isActive && variant === "sun",
                  "border-b-pinkSlip": isActive && variant === "pinkSlip",

                  // Inactive
                  "text-secondaryText": !isActive,
                },
              )}
              onClick={() => onChange(i, tab)}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
