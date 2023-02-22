import { Address } from "wagmi";

export interface Token {
  name: string;
  symbol: string;
  logoUrl: string;
  address: Address;
  decimals: number;
}

export interface Market {
  baseToken: Token;
  address: Address;
}

export interface MarketData {
  address: Address;
  token: Token;
  yieldSource: string;
  fixedApr: number;
  variableApr: number;
  lpApr: number;
  tvl: number;
}

export type MarketAction = "LONG" | "SHORT" | "LP";
export type OrderType = "OPEN" | "CLOSE";
