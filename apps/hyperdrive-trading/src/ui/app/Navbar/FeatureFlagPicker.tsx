import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { NEW_MARKET_LAYOUT_FEATURE_FLAG } from "src/ui/markets/featureFlags";
import { LP_CARDS_FEATURE_FLAG } from "src/ui/portfolio/featureFlags";
export function FeatureFlagPicker(): ReactElement {
  return (
    <div className="daisy-dropdown-end daisy-dropdown">
      <label tabIndex={0} className="daisy-btn-ghost rounded-btn daisy-btn">
        <Cog6ToothIcon className="h-4" /> Devtools
      </label>
      <ul
        tabIndex={0}
        className="daisy-dropdown-content daisy-menu rounded-box z-[1] mt-4 w-52 bg-base-100 p-2 shadow"
      >
        <li className="daisy-menu-title">Feature flags</li>
        <FeatureFlagMenuItem flagName={LP_CARDS_FEATURE_FLAG}>
          New LP cards
        </FeatureFlagMenuItem>
        <FeatureFlagMenuItem flagName={NEW_MARKET_LAYOUT_FEATURE_FLAG}>
          New market details
        </FeatureFlagMenuItem>
      </ul>
    </div>
  );
}
function FeatureFlagMenuItem({
  flagName,
  children,
}: {
  flagName: string;
  children: string;
}) {
  const { isFlagEnabled, enableFlag, disableFlag } = useFeatureFlag(flagName);
  return (
    <li>
      <button onClick={isFlagEnabled ? disableFlag : enableFlag}>
        {children}
        {isFlagEnabled ? (
          <div className="daisy-badge daisy-badge-primary daisy-badge-sm">
            On
          </div>
        ) : (
          <div className="daisy-badge daisy-badge-ghost daisy-badge-sm">
            Off
          </div>
        )}
      </button>
    </li>
  );
}
