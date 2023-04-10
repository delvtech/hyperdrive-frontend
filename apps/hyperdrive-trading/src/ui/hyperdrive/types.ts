export type PositionType = "Long" | "Short" | "LP";
export type OrderType = "Open" | "Close";

export interface MultiToken {
  id: bigint;
  amount: bigint;
}

export interface Position extends MultiToken {
  type: PositionType;
  currencyValue: string;
  expiryDate: Date;
}
