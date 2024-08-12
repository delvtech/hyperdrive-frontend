import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

export interface Tab<TabId extends string> {
  id: TabId;
  onClick: () => void;
  label: string;
  content: ReactNode;
}
export function TabsTwo<TabId extends string>({
  tabs,
  activeTabId,
}: {
  tabs: Tab<TabId>[];
  activeTabId: TabId;
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
          "daisy-tab-content flex max-w-full overflow-x-auto rounded-b-box rounded-tr-box border-neutral-content/20 bg-base-100",
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
