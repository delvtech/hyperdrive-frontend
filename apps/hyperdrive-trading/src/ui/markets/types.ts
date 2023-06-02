import { HyperdriveMarket } from "src/appconfig/HyperdriveConfig";

export interface MarketTableRowData {
  market: HyperdriveMarket;
  liquidity: string;
  longAPR: string;
  shortAPR: string;
  lpAPR: string;
}

export type MarketStatistics = Omit<MarketTableRowData, "market">;
