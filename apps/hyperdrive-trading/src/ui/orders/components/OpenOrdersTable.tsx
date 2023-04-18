/* eslint-disable react/jsx-key */

import classNames from "classnames";
import { ReactElement } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";
import { Row, SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { usePositions } from "src/ui/hyperdrive/hooks/usePositions";
import { Position } from "src/ui/hyperdrive/types";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  market: HyperdriveMarket;
}

export function OpenOrdersTable({
  market,
}: OpenOrdersTableProps): ReactElement {
  const { address } = useAccount();
  const { data: positionsData } = usePositions(address, market);

  const longPositions = positionsData ? [...positionsData.openLongs] : [];
  const shortPositions = positionsData ? [...positionsData.openShorts] : [];
  const allPositions = [...longPositions, ...shortPositions];

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-4 text-hyper-blue-200 font-dm-sans text-md [&>*]:p-2"
      bodyRowClassName="grid-cols-4 text-hyper-blue-100 font-dm-sans [&>*]:p-2 items-center"
      cols={["Position", "Amount", "Value", "Expiry Date"]}
      rows={allPositions.map((position) => {
        return createOpenOrderRow(position, market.baseToken.decimals);
      })}
    />
  );
}

function createOpenOrderRow(position: Position, positionDecimals: number): Row {
  return {
    cells: [
      <span
        className={classNames("font-bold", {
          "text-hyper-green": position.type === "Long",
          "text-hyper-red": position.type === "Short",
        })}
      >
        {position.type}
      </span>,
      <span>
        {formatBalance(formatBigInt(position.amount, positionDecimals))}
      </span>,
      <span>{position.currencyValue}</span>,
      <span>{position.expiryDate.toLocaleDateString()}</span>,
    ],
  };
}
