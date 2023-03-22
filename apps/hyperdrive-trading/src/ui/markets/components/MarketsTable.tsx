/* eslint-disable react/jsx-key */

import { ReactElement } from "react";
import { YieldSourceLabel } from "src/ui/base/components/YieldSourceLabel";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { TokenLabel } from "src/ui/base/components/TokenLabel";

const fakeRowData = [
  [
    <span className="font-semibold">Maker DSR</span>,
    <YieldSourceLabel yieldSource="Maker" />,
    <TokenLabel className="font-semibold" token="DAI" />,
    "$100M",
    <span className="font-semibold">1.25%</span>,
    <span className="font-semibold">1.25%</span>,
    <span className="font-semibold">1.25%</span>,
  ],
  [
    <span className="font-semibold">Maker DSR</span>,
    <YieldSourceLabel yieldSource="Maker" />,
    <TokenLabel className="font-semibold" token="DAI" />,
    "$100M",
    <span className="font-semibold">1.25%</span>,
    <span className="font-semibold">1.25%</span>,
    <span className="font-semibold">1.25%</span>,
  ],
  [
    <span className="font-semibold">Maker DSR</span>,
    <YieldSourceLabel yieldSource="Maker" />,
    <TokenLabel className="font-semibold" token="DAI" />,
    "$100M",
    <span className="font-semibold">1.25%</span>,
    <span className="font-semibold">1.25%</span>,
    <span className="font-semibold">1.25%</span>,
  ],
  [
    <span className="font-semibold">Maker DSR</span>,
    <YieldSourceLabel yieldSource="Maker" />,
    <TokenLabel className="font-semibold" token="DAI" />,
    "$100M",
    <span className="font-semibold">1.25%</span>,
    <span className="font-semibold">1.25%</span>,
    <span className="font-semibold">1.25%</span>,
  ],
];

export function MarketsTable(): ReactElement {
  return (
    <div className="space-y-6 rounded bg-base-200 p-10">
      <h2 className="font-quantico text-3xl font-bold text-off-white">
        Markets
      </h2>

      <div className="flex flex-wrap items-center gap-6">
        {/* TODO: abstract to own component */}
        <input
          className="rounded border border-giga-blue-300 bg-transparent px-6 py-2 text-center font-quantico text-giga-blue-100 placeholder:text-giga-blue-300"
          placeholder="Search Markets"
        />

        {/* TODO: abstract to own component, both the button group and button */}
        <div className="flex flex-wrap gap-2">
          <button className="whitespace-nowrap border border-giga-blue-300 bg-transparent px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300">
            All Markets
          </button>

          <button className="whitespace-nowrap border border-giga-blue-300 bg-transparent px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300">
            Aave
          </button>

          <button className="whitespace-nowrap border border-giga-blue-300 bg-transparent px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300">
            Curve
          </button>

          <button className="whitespace-nowrap border border-giga-blue-300 bg-transparent px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300">
            Maker
          </button>

          <button className="whitespace-nowrap border border-giga-blue-300 bg-transparent px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300">
            Yearn
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="whitespace-nowrap border border-giga-blue-300 bg-transparent px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300">
            3 months
          </button>

          <button className="whitespace-nowrap border border-giga-blue-300 bg-transparent px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300">
            6 months
          </button>

          <button className="whitespace-nowrap border border-giga-blue-300 bg-transparent px-6 py-2 font-quantico text-hyper-green hover:bg-giga-blue-300">
            12 months
          </button>
        </div>
      </div>

      <SortableGridTable
        headingRowClassName="grid-cols-[repeat(7,minmax(0,1fr))] bg-transparent text-giga-blue-100 font-quantico text-md [&>*]:p-2"
        bodyRowClassName="grid-cols-[repeat(7,minmax(0,1fr))] bg-transparent text-off-white font-rubik [&>*]:p-2"
        cols={[
          "Name",
          "Yield Source",
          "Token",
          "Liquidity",
          "Long APR",
          "Short APR",
          "LP APR",
        ]}
        rows={fakeRowData}
      />
    </div>
  );
}
