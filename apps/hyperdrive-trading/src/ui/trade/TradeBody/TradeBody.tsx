import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { ClosedOrdersTable } from "src/ui/trade/ClosedOrdersTable/ClosedOrdersTable";
import { OpenOrdersTable } from "src/ui/trade/OpenOrdersTable/OpenOrdersTable";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}

export function TradeBody({ hyperdrive }: PositionsTableProps): ReactElement {
  return (
    <div className="flex flex-col gap-24 p-8">
      <div className="flex flex-col gap-2">
        <h6 className="font-semibold">What is the Dai Savings Rate?</h6>
        <span>
          The Dai Savings Rate (DSR) is a feature within the MakerDAO system
          that allows Dai stablecoin holders to earn interest on their holdings
          when they lock it into a DSR smart contract. The interest rate is
          variable, set by the MakerDAO community, and users can withdraw their
          Dai plus earned interest at any time, similar to a traditional savings
          account but operating on the blockchain.
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="font-semibold">Open Positions</h6>
        <OpenOrdersTable hyperdrive={hyperdrive} />
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="font-semibold">Closed Positions</h6>
        <ClosedOrdersTable hyperdrive={hyperdrive} />
      </div>
    </div>
  );
}
