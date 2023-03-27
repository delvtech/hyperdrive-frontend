import { ReactElement } from "react";
import { Stat } from "src/ui/base/components/Stat";

interface ProtocolStatsBarProps {}

export function ProtocolStatsBar({}: ProtocolStatsBarProps): ReactElement {
  return (
    <div className="grid items-center justify-start grid-flow-row px-12 py-8 rounded gap-y-8 gap-x-28 bg-base-200 md:grid-flow-col md:py-4">
      <h2 className="text-3xl font-bold font-quantico text-off-white">
        Protocol
      </h2>

      <div className="grid grid-cols-2 items-center justify-start gap-x-16 gap-y-4 md:grid-cols-[repeat(4,minmax(70px,110px))]">
        <Stat label="TVL" value="$150,000,000" />
        <Stat label="Volume (7D)" value="$1,000,000" />
        <Stat label="Fees (7D)" value="$10,000" />
      </div>
    </div>
  );
}
