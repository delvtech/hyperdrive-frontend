import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { ChartOptions, createChart, IChartApi } from "lightweight-charts";
import { ReactElement, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { Button } from "src/ui/base/components/Button";
import { Stat } from "src/ui/base/components/Stat";
import { MarketsTable } from "src/ui/markets/components/MarketsTable";
import { OpenOrdersTable } from "src/ui/orders/components/OpenOrdersTable";
import { ProtocolLabel } from "src/ui/protocol/components/ProtocolLabel";
import { PositionForm } from "src/ui/trading/components/PositionForm";

export function Trade(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as HyperdriveMarket;

  const [isChartRendered, setIsChartRendered] = useState(false);
  const chart = useRef<IChartApi | undefined>(undefined);

  // Add chart data when chart is mounted
  useEffect(() => {
    if (!isChartRendered) {
      // set the ref to the chart object
      chart.current = createChart(
        document.getElementById("chart")!,
        chartOptions,
      );

      // create the area series chart
      const areaSeries = chart.current.addAreaSeries({
        lineColor: "#FF99FA",
        topColor: "#F4B1FF",
        bottomColor: "rgba(244, 177, 255, 0.2)",
      });
      areaSeries.setData(stubbedChartData);

      // scale the x axis to fit the viewport
      chart.current.timeScale().fitContent();
    }

    // set state to prevent a new chart from being rendered when hot-reloading
    setIsChartRendered(true);
  }, []);

  const resizeChartHandler = () => {
    if (chart.current) {
      chart.current.timeScale().fitContent();
    }
  };

  // Resize timescale when chart is resized
  useEffect(() => {
    window.addEventListener("resize", resizeChartHandler);
    return () => removeEventListener("resize", resizeChartHandler);
  }, []);

  const [tradeModalOpen, setTradeModalOpen] = useState(false);
  const [marketsModalOpen, setMarketsModalOpen] = useState(false);

  return (
    <div className="overflow-hidden grid border-t border-hyper-blue-300 grid-rows-[157px_1fr] md:grid-rows-1 md:grid-cols-[365px_1fr] lg:grid-cols-[447px_1fr] h-[calc(100vh_-_64px)]">
      {/* Market information row - mobile only */}
      <div className="px-8 pb-4 pt-6 border-b md:hidden gap-4 border-hyper-blue-300 h-fit bg-base-100 flex flex-col">
        <div className="flex">
          <h4 className="mb-2 font-bold text-hyper-blue-100 font-dm-sans whitespace-nowrap mr-auto">
            {market.name}
          </h4>

          <button
            onClick={() => setTradeModalOpen(true)}
            className="flex hover:opacity-80 h-fit items-center px-4 py-2 font-bold rounded gap-x-1 text-base-100 font-dm-sans bg-gradient-to-r from-hyper-pink via-[#afd5ff] to-hyper-green"
          >
            <p>Trade</p>
          </button>
        </div>

        <div className="flex w-full gap-x-8">
          <Stat
            label="Protocol"
            value={<ProtocolLabel protocol={market.protocol} />}
          />
          <Stat label="Liquidity" value="$100M" />
          <Stat label="Volume" value="$4.4M" />
          <Stat label="APR" value="1.50%" />
        </div>
      </div>

      {/* Position form column */}
      <div className="md:flex flex-col w-full md:max-w-md border-r border-b bg-base-100 border-hyper-blue-300 shrink-0 md:basis=[447px] px-8 py-6 hidden">
        <PositionForm market={market} />
      </div>

      {/* Chart column */}
      <div className="flex flex-col overflow-hidden bg-base-100 h-full">
        <div className="items-center justify-start hidden px-8 py-4 border-b gap-x-20 md:flex border-hyper-blue-300">
          <h4
            onClick={() => {
              setMarketsModalOpen(true);
            }}
            className="font-bold text-hyper-blue-100 font-dm-sans whitespace-nowrap"
          >
            {market.name}
            <label htmlFor="my-modal-4" className="btn">
              open modal
            </label>
          </h4>

          <div className="flex gap-x-16">
            <Stat
              label="Protocol"
              value={<ProtocolLabel protocol={market.protocol} />}
            />
            <Stat className="hidden lg:block" label="Liquidity" value="$100M" />
            <Stat className="hidden xl:block" label="Long APR" value="1.50%" />
            <Stat className="hidden xl:block" label="Short APR" value="1.75%" />
            <Stat className="hidden xl:block" label="LP APR" value="1.60%" />
            <Stat
              className="hidden lg:block"
              label="Volume (24H)"
              value="$4.4M"
            />
          </div>
        </div>

        <div className="px-8 py-4 border-b border-hyper-blue-300">
          <div className="flex items-center gap-x-2">
            <h6 className="text-hyper-blue-100 font-dm-sans font-bold">
              Market Sentiment Indicator
            </h6>
            <InformationCircleIcon className="h-4 fill-hyper-blue-100" />
          </div>

          <div id="chart-container h-full">
            <div id="chart" className="h-[30vh] md:h-[40vh]" />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden py-4">
          <div className="flex flex-wrap gap-2 py-2 w-full px-8">
            <Button active={true} variant="Future" onClick={() => {}}>
              Open
            </Button>
            <Button disabled variant="Future" onClick={() => {}}>
              Closed
            </Button>
            <Button disabled variant="Future" onClick={() => {}}>
              Recent Trades
            </Button>
          </div>

          <div className="flex flex-col row-span-1 pt-4 px-4 text-hyper-blue-100 gap-y-4 h-[calc(100%_-_64px)] md:h-auto">
            <div className="overflow-scroll">
              <OpenOrdersTable market={market} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile only */}
      {tradeModalOpen && (
        <div className="absolute z-50 w-full px-8 pt-4 overflow-y-hidden overflow-scroll bg-base-100 md:hidden h-[calc(100vh_-_64px)]">
          <PositionForm
            market={market}
            handleClose={() => setTradeModalOpen(false)}
          />
        </div>
      )}

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <div className="rounded  max-h-[50vh]">
          <MarketsTable />
        </div>
      </label>

      {/* {marketsModalOpen && (
        <div className="absolute h-screen w-screen">
          <MarketsTable />
        </div>
      )} */}
    </div>
  );
}

const stubbedChartData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

const chartOptions = {
  autoSize: true,
  layout: {
    textColor: "white",
    background: { type: "solid", color: "#151427" },
  },
  grid: {
    vertLines: {
      visible: false,
    },
    horzLines: {
      visible: false,
    },
  },
} as ChartOptions;
