import { Hyperdrive } from "src/appconfig/types";

export interface MarketTableRowData {
  market: Hyperdrive;
  liquidity: string;
  longAPR: string;
  shortAPR: string;
  lpAPR: string;
}

export type MarketStatistics = Omit<MarketTableRowData, "market">;
