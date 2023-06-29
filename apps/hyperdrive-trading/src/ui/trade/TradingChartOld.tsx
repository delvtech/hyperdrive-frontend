import { ChartOptions, createChart, IChartApi } from "lightweight-charts";
import { ReactElement, useEffect, useRef, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { useHistoricalVolume } from "src/ui/hyperdrive/hooks/useHistoricalVolume";

interface TradingChartProps {
  market: Hyperdrive;
}

export function TradingChartOld({ market }: TradingChartProps): ReactElement {
  // used to prevent page crash from vite hot-reloading
  const [isChartRendered, setIsChartRendered] = useState(false);
  const { data: volumeData } = useHistoricalVolume(market);
  const chart = useRef<IChartApi | undefined>(undefined);

  // Add chart data when chart is mounted
  useEffect(() => {
    if (!isChartRendered && !!volumeData) {
      // set the ref to the chart object
      chart.current = createChart(
        document.getElementById("chart") as HTMLElement,
        chartOptions,
      );

      // create the area series chart
      const areaSeries = chart.current.addAreaSeries({
        lineColor: "#FF99FA",
        topColor: "#F4B1FF",
        bottomColor: "rgba(244, 177, 255, 0.2)",
      });
      areaSeries.setData(stubbedChartData);

      const volumeSeries = chart.current.addHistogramSeries({
        priceFormat: {
          type: "volume",
        },
        priceScaleId: "", // set as an overlay by setting a blank priceScaleId
      });
      volumeSeries.setData(volumeData);

      volumeSeries.priceScale().applyOptions({
        // set the positioning of the volume series
        scaleMargins: {
          top: 0.7, // highest point of the series will be 70% away from the top
          bottom: 0,
        },
      });

      // scale the x axis to fit the viewport
      chart.current.timeScale().fitContent();

      // set state to prevent a new chart from being rendered when hot-reloading
      setIsChartRendered(true);
    }
  }, [volumeData, isChartRendered]);

  // Resize timescale when chart is resized
  const resizeChartHandler = () => {
    if (chart.current) {
      chart.current.timeScale().fitContent();
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeChartHandler);
    return () => removeEventListener("resize", resizeChartHandler);
  }, []);

  return <div id="chart" className="h-full" />;
}

const stubbedChartData = [
  { time: "2023-03-31", value: 32.51 },
  { time: "2023-04-01", value: 31.11 },
  { time: "2023-04-02", value: 27.02 },
  { time: "2023-04-03", value: 27.32 },
  { time: "2023-04-04", value: 25.17 },
  { time: "2023-04-15", value: 28.89 },
  { time: "2023-04-16", value: 25.46 },
  { time: "2023-04-17", value: 23.92 },
  { time: "2023-04-18", value: 22.68 },
  { time: "2023-04-19", value: 22.67 },
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
