/* eslint-disable react/jsx-key */

import { ReactElement } from "react";
import { Row, SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { OrderType, PositionType } from "src/ui/trading/types";

export function OpenOrdersTable(): ReactElement {
  return (
    <SortableGridTable
      headingRowClassName="grid-cols-6 text-hyper-blue-200 font-dm-sans text-md [&>*]:p-2"
      bodyRowClassName="grid-cols-6 text-hyper-blue-100 font-dm-sans [&>*]:p-2 items-center"
      cols={["Position", "Type", "Amount", "Value", "Expiry Date", ""]}
      rows={stubbedOrderData.map((order) => createOpenOrderRow(order))}
    />
  );
}

interface Order {
  position: PositionType;
  type: OrderType;
  amount: string;
  value: string;
  openDate: Date;
  expiryDate: Date;
}

function createOpenOrderRow(order: Order): Row {
  return {
    cells: [
      <span className="font-bold text-hyper-green">{order.position}</span>,
      <span className="font-bold">{order.type}</span>,
      <span>{order.amount}</span>,
      <span>{order.value}</span>,
      <span>{order.expiryDate.toLocaleDateString()}</span>,
      <span>
        <button className="px-2 py-1 text-sm font-bold uppercase bg-hyper-red font-quantico text-base-100">
          Close
        </button>
      </span>,
    ],
  };
}

const stubbedOrderData: Order[] = [
  {
    type: "Open",
    position: "Long",
    amount: "10000 DAI",
    value: "$10000",
    openDate: new Date(),
    expiryDate: new Date(),
  },
  {
    type: "Open",
    position: "Long",
    amount: "10000 DAI",
    value: "$10000",
    openDate: new Date(),
    expiryDate: new Date(),
  },
  {
    type: "Open",
    position: "Long",
    amount: "10000 DAI",
    value: "$10000",
    openDate: new Date(),
    expiryDate: new Date(),
  },
  {
    type: "Open",
    position: "Long",
    amount: "10000 DAI",
    value: "$10000",
    openDate: new Date(),
    expiryDate: new Date(),
  },
  {
    type: "Open",
    position: "Long",
    amount: "10000 DAI",
    value: "$10000",
    openDate: new Date(),
    expiryDate: new Date(),
  },
  {
    type: "Open",
    position: "Long",
    amount: "10000 DAI",
    value: "$10000",
    openDate: new Date(),
    expiryDate: new Date(),
  },
  {
    type: "Open",
    position: "Long",
    amount: "10000 DAI",
    value: "$10000",
    openDate: new Date(),
    expiryDate: new Date(),
  },
  {
    type: "Open",
    position: "Long",
    amount: "10000 DAI",
    value: "$10000",
    openDate: new Date(),
    expiryDate: new Date(),
  },
];
