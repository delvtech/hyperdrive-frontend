import { BigNumber } from "ethers";
import { Address } from "wagmi";

export interface Token {
  name: string;
  symbol: string;
  decimals: number;
  logoUrl?: string;
  address?: Address;
}

export interface Market {
  baseToken: Token;
  address: Address;

  // Length in seconds of positions
  positionDuration: number;
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

export interface Long {
  amount: BigNumber;
  id: string;
}

export interface Short {
  amount: BigNumber;
  id: string;
}
