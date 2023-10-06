import { PoolConfig } from "src/pool/PoolConfig";

export const simplePoolConfig: PoolConfig = {
  baseToken: "0x",
  initialSharePrice: 0n,
  minimumShareReserves: 0n,
  minimumTransactionAmount: 0n,
  positionDuration: 0n,
  checkpointDuration: 0n,
  timeStretch: 0n,
  governance: "0x",
  feeCollector: "0x",
  fees: {
    curve: 0n,
    flat: 0n,
    governance: 0n,
  },
  oracleSize: 0n,
  updateGap: 0n,
};
