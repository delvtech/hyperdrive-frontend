import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface Tab {
  id: string;
  onClick: () => void;
  label: string;
  content: ReactNode;
}
export function Tabs({
  tabs,
  activeTabId,
}: {
  tabs: Tab[];
  activeTabId: string;
}): ReactElement {
  return (
    <div role="tablist" className="daisy-tabs daisy-tabs-lifted daisy-tabs-lg">
      {tabs.map(({ id, onClick, label }) => (
        <input
          key={id}
          className={classNames(
            "daisy-tab font-chakraPetch",
            "!border-b-0", // override the bottom border since lifted tabs style doesn't need it, and it creates a stray line beneath the tab
            {
              "daisy-tab-active font-bold": activeTabId === id,
              "opacity-80 hover:opacity-100": activeTabId !== id,
            },
          )}
          aria-label={label}
          onChange={onClick}
          checked={activeTabId === id}
          type="radio"
          role="tab"
        />
      ))}
      <div
        role="tabpanel"
        className={classNames(
          "daisy-tab-content flex overflow-hidden rounded-b-box rounded-tr-box border-base-200 bg-base-100",
          {
            // The Longs tab is first, and the tabby bit is connected to the
            // tab content, so don't put a round border on it
            "rounded-tl-box": activeTabId !== tabs[0].id,
          },
        )}
      >
        {tabs.find(({ id }) => id === activeTabId)?.content}
      </div>
    </div>
  );
}
