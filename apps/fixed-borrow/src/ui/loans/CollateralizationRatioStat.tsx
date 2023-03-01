import { ReactElement } from "react";
import { Stat } from "src/ui/base/Stat/Stat";

export function CollateralizationRatioStat(): ReactElement {
  return (
    <Stat
      title="Collat. Ratio"
      value="152%"
      description={
        <span className="font-bold text-warning">
          {
            // TODO: Show "Min ratio: 100%" w/out warning style for the
            // empty state
          }
          After: 182%
        </span>
      }
    />
  );
}
