import { ReactElement } from "react";
import { Pill } from "src/ui/base/components/Pill";

export function PositionOverviewWell(): ReactElement {
  return (
    <div className="flex flex-col p-4 border rounded bg-base-300 gap-y-4 border-hyper-blue-300">
      <div className="flex items-center">
        <h3 className="mr-4 text-2xl font-semibold">Maker DSR Long</h3>
        <Pill className="h-6">6 months</Pill>
      </div>

      <div className="flex flex-col tracking-wide gap-y-1">
        <div className="flex">
          <p className="mr-auto">Cost Basis</p>
          <p className="font-semibold tracking-wide">120000 DAI</p>
        </div>
        <div className="flex">
          <p className="mr-auto">Matures</p>
          <p className="font-semibold tracking-wide">July 23rd, 2023</p>
        </div>
        <div className="flex">
          <p className="mr-auto">Fixed APR</p>
          <p className="font-semibold tracking-wide">1.50%</p>
        </div>
        <div className="flex">
          <p className="mr-auto">Claimable at Maturity</p>
          <p className="font-semibold tracking-wide">120500 DAI</p>
        </div>
      </div>
    </div>
  );
}
