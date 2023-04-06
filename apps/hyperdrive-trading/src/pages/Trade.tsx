import { ChartOptions, createChart, IChartApi } from "lightweight-charts";
import {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLoaderData } from "react-router-dom";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { Button } from "src/ui/base/components/Button";
import { Stat } from "src/ui/base/components/Stat";
import { OpenOrdersTable } from "src/ui/orders/components/OpenOrdersTable";
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
    window.addEventListener("resize-chart", resizeChartHandler);
    return removeEventListener("resize-chart", resizeChartHandler);
  }, []);

  return (
    <div className="grid grid-flow-row border-t border-hyper-blue-300 md:grid-cols-[447px_1fr] lg:h-[calc(100vh_-_64px)]">
      {/* Market information row - mobile only */}
      <div className="px-8 pt-6 pb-2 border-b md:hidden gap-x-8 border-hyper-blue-300">
        <h4 className="font-bold text-hyper-blue-100 font-dm-sans whitespace-nowrap">
          {market.name}
        </h4>

        <div className="flex flex-wrap justify-between w-full gap-2">
          <Stat label="Protocol" value="Maker" />
          <Stat label="Liquidity" value="$100M" />
          <Stat label="Volume" value="$4.4M" />
          <Stat label="Long APR" value="1.50%" />
          <Stat label="Short APR" value="1.75%" />
          <Stat label="LP APR" value="1.60%" />
        </div>
      </div>

      {/* Position form column */}
      <PositionFormContainer>
        <PositionForm market={market} />
      </PositionFormContainer>

      {/* Chart column */}
      <div className="flex flex-col overflow-hidden bg-base-100">
        <div className="items-center justify-start hidden px-8 py-4 border-b gap-x-20 border-hyper-blue-300 md:flex">
          <h4 className="font-bold text-hyper-blue-100 font-dm-sans whitespace-nowrap">
            {market.name}
          </h4>

          <div className="flex gap-x-16">
            <Stat label="Protocol" value="Maker" />
            <Stat className="hidden lg:block" label="Liquidity" value="$100M" />
            <Stat className="hidden xl:block" label="Long APR" value="1.50%" />
            <Stat className="hidden xl:block" label="Short APR" value="1.75%" />
            <Stat className="hidden xl:block" label="LP APR" value="1.60%" />
            <Stat
              className="hidden md:block"
              label="Volume (24H)"
              value="$4.4M"
            />
          </div>
        </div>

        <div className="grid grid-rows-2 md:grid-rows-3 max-h-[800px] md:max-h-full">
          <div
            id="chart-container"
            className="row-span-1 px-8 overflow-hidden border-b md:row-span-2 border-hyper-blue-300"
          >
            <div id="chart" className="h-full" />
          </div>

          <div className="flex flex-col row-span-1 px-8 pt-4 text-hyper-blue-100 gap-y-4">
            <div className="flex gap-2">
              <Button active={true} variant="Future" onClick={() => {}}>
                Open Positions
              </Button>
              <Button variant="Future" onClick={() => {}}>
                Closed Positions
              </Button>
              <Button variant="Future" onClick={() => {}}>
                Recent Trades
              </Button>
            </div>

            <div className="overflow-scroll">
              <OpenOrdersTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PositionFormContainer({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="flex flex-col w-full md:max-w-md col-span-1 border-r border-b bg-base-100 border-hyper-blue-300 shrink-0 md:basis=[447px] px-8 py-6">
      {children}
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
