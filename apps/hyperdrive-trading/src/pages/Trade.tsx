import { PropsWithChildren, ReactElement, useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { ChartOptions, createChart, IChartApi } from "lightweight-charts";
import { OpenOrdersTable } from "src/ui/orders/components/OpenOrdersTable";
import { PositionForm } from "src/ui/trading/components/PositionForm";

function PositionFormContainer({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="flex flex-col w-full md:max-w-md col-span-1 border-r border-b bg-base-100 border-hyper-blue-300 shrink-0 md:basis=[447px]">
      {children}
    </div>
  );
}

export function Trade(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as HyperdriveMarket;




  const [isChartRendered, setIsChartRendered] = useState(false);

  const chartOptions = {
    autoSize: true,
    layout: {
      textColor: "white",
      background: { type: "solid", color: "black" },
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

  const chart = useRef<IChartApi | undefined>(undefined);

  if (!market) {
    // TODO: handle this
    throw Error("could not find market from address.");
  }

  useEffect(() => {
    chart.current = createChart(
      document.getElementById("chart")!,
      chartOptions,
    );
  }, []);

  useEffect(() => {
    if (!!chart.current && !isChartRendered) {
      const areaSeries = chart.current.addAreaSeries({
        lineColor: "#2962FF",
        topColor: "#2962FF",
        bottomColor: "rgba(41, 98, 255, 0.28)",
      });
      areaSeries.setData([
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
      ]);
      chart.current.timeScale().fitContent();
    }
    setIsChartRendered(true);
  }, [chart]);

  // useEffect(() => {
  //   const chartContainer = document.getElementById("chart-container")!;

  //   if (!!chart.current) {
  //     new ResizeObserver((entries) => {
  //       if (entries.length === 0 || entries[0].target !== chartContainer) {
  //         return;
  //       }
  //       const newRect = entries[0].contentRect;
  //       console.log({
  //         height: newRect.height,
  //         width: newRect.width,
  //       });
  //       chart.current!.applyOptions({
  //         height: newRect.height,
  //         width: newRect.width,
  //       });
  //     }).observe(chartContainer);
  //   }
  // }, [chart]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const chartContainer = document.getElementById("chart-container")!;

      console.log(chartContainer.offsetWidth, chartContainer.offsetHeight);
      if (!!chart.current) {
        // console.log("resizing");
        // chart.current.applyOptions({
        //   height: chartContainer.offsetHeight,
        //   width: chartContainer.offsetWidth,
        // });
        chart.current.timeScale().fitContent();
      }
    });
  });

  return (
    <div className="grid grid-flow-row border-t border-hyper-blue-300 md:grid-cols-[447px_1fr] grid-rows-2">
      <PositionFormContainer>
        <PositionForm market={market} />
      </PositionFormContainer>

      <div className="flex flex-col w-full border-b border-hyper-blue-300">
        <div className="grid h-full grid-flow-row grid-rows-2">
          <div id="chart-container" className="overflow-hidden">
            <div id="chart" className="h-full grid-rows-1" />
          </div>
          <div>
            <OpenOrdersTable />
          </div>
        </div>
      </div>
    </div>
  );
}
