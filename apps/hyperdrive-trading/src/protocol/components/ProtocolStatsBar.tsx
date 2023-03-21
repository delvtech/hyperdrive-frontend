import { ReactElement } from "react";

interface ProtocolStatsBarProps {}

export function ProtocolStatsBar({}: ProtocolStatsBarProps): ReactElement {
  return (
    <div className="grid grid-cols-2 items-center gap-x-24 gap-y-4 rounded bg-base-200 px-12 py-4 md:grid-cols-protocol-stats">
      <h2 className="col-span-2 font-quantico text-2xl text-off-white md:col-span-1">
        Protocol
      </h2>
      <Stat label="TVL" value="$150,000,000" />
      <Stat label="Volume (7D)" value="$1,000,000" />
      <Stat label="Fees (7D)" value="$10,000" />
    </div>
  );
}

interface StatProps {
  label: string;
  value: string;
}

function Stat({ label, value }: StatProps): ReactElement {
  return (
    <div>
      <p className="mb-1 whitespace-nowrap font-quantico text-lg text-giga-blue-200">
        {label}
      </p>
      <p className="whitespace-nowrap font-rubik text-lg font-semibold text-off-white">
        {value}
      </p>
    </div>
  );
}
