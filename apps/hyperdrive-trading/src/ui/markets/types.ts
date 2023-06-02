import { Hyperdrive } from "src/appconfig/types";
import { YieldSource } from "src/appconfig/yieldSources/yieldSources";

export interface MarketTableRowData {
  market: Hyperdrive;
  yieldSource: YieldSource;
  liquidity: string;
  longAPR: string;
  shortAPR: string;
  lpAPR: string;
}

export type MarketStatistics = Omit<MarketTableRowData, "market">;
