/* eslint-disable react/jsx-key */

import { ReactElement } from "react";
import { useConfig } from "src/config/hooks/useConfig";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import Button from "src/ui/base/components/Button";
import { Row, SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { ProtocolLabel } from "src/ui/protocol/components/ProtocolLabel";
import { TokenLabel } from "src/ui/token/components/TokenLabel";

export function OpenOrdersTable(): ReactElement {
  const config = useConfig();

  const asasad = "";

  return (
    <div className="flex flex-col pt-4 text-hyper-blue-100 gap-y-4">
      {/* <h2 className="font-akira">Open Positions</h2> */}

      <div className="">
        <div className="flex justify-center">
          <Button active={true} className="w-48" onClick={() => {}}>
            Open Positions
          </Button>
          <Button className="w-48" onClick={() => {}}>
            Closed Positions
          </Button>
          <Button className="w-48" onClick={() => {}}>
            Recent Trades
          </Button>
          {/* <Button disabled className="w-full" onClick={() => {}}>
            LP
          </Button> */}
        </div>
      </div>
      <SortableGridTable
        headingRowClassName="grid-cols-[2fr_1fr_1fr_1fr_1fr] bg-base-100 text-hyper-blue-200 font-dm-sans text-md [&>*]:p-5 bg-opacity-100"
        bodyRowClassName="grid-cols-[2fr_1fr_1fr_1fr_1fr] bg-transparent text-hyper-blue-100 font-dm-sans [&>*]:p-5"
        cols={[
          {
            cell: "Name",
            sortKey: "name",
          },
          "Type",
          "Amount",
          "Open Date",
          "Expiry Date",
        ]}
        rows={config.markets.map((marketRowData) =>
          createOpenOrderRow(marketRowData),
        )}
      />
    </div>
  );
}

function createOpenOrderRow(market: HyperdriveMarket): Row {
  return {
    href: `/trade/${market.address}`,
    cells: [
      <span className="font-bold">{market.name}</span>,
      <ProtocolLabel
        className="font-bold font-dm-sans"
        protocol={market.protocol}
      />,
      <TokenLabel className="font-bold font-dm-sans" token="DAI" />,
      <span className="font-medium font-dm-sans" data-tip="hello">
        $100M
      </span>,
      <span className="font-medium font-dm-sans">1.25%</span>,
    ],
  };
}
