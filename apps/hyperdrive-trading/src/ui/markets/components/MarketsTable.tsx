/* eslint-disable react/jsx-key */

import { ReactElement, useState } from "react";
import { YieldSourceLabel } from "src/ui/base/components/YieldSourceLabel";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { TokenLabel } from "src/ui/base/components/TokenLabel";
import Button from "src/ui/base/components/Button";
import { getHyperdriveConfig } from "src/config/utils/getHyperdriveConfig";
import { useChainId } from "wagmi";
import { SupportedChainId } from "src/config/hyperdrive.config";

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
  const chainId = useChainId();
  const config = getHyperdriveConfig(chainId as SupportedChainId);

  const protocols = config.protocols;
  const termLengths = config.supportedTermLengths;

  const [, setSelectedProtocolFilter] = useState<string | "All">("All");

  const [, setSelectedTermLength] = useState<
    (typeof termLengths)[number] | "All"
  >("All");

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
          <Button onClick={() => setSelectedProtocolFilter("All")}>
            All Markets
          </Button>

          {protocols.map((protocol) => (
            <Button
              key={`protocol-${protocol}`}
              onClick={() => setSelectedProtocolFilter(protocol)}
            >
              {protocol}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {termLengths.map((termLength) => (
          <Button
            key={`termLengths-${termLength}-months`}
            onClick={() => setSelectedTermLength(termLength)}
          >
            {termLength} months
          </Button>
        ))}
      </div>

      <SortableGridTable
        headingRowClassName="grid-cols-7 bg-transparent text-giga-blue-100 font-quantico text-md [&>*]:p-2"
        bodyRowClassName="grid-cols-7 bg-transparent text-off-white font-rubik [&>*]:p-2"
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
