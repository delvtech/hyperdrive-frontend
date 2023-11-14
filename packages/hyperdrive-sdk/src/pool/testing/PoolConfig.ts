import { PoolConfig } from "src/pool/PoolConfig";
import { ZERO_ADDRESS } from "./constants";

export const simplePoolConfig: PoolConfig = {
  baseToken: ZERO_ADDRESS,
  initialSharePrice: 0n,
  minimumShareReserves: 0n,
  minimumTransactionAmount: 0n,
  positionDuration: 0n,
  checkpointDuration: 0n,
  timeStretch: 0n,
  governance: ZERO_ADDRESS,
  feeCollector: ZERO_ADDRESS,
  fees: {
    curve: 0n,
    flat: 0n,
    governance: 0n,
  },
  linkerCodeHash: "0x".padEnd(66, "0") as `0x${string}`,
  linkerFactory: ZERO_ADDRESS,
  precisionThreshold: 0n,
};

export const mockPoolConfig: PoolConfig = {
  baseToken: ZERO_ADDRESS,
  governance: ZERO_ADDRESS,
  feeCollector: ZERO_ADDRESS,
  fees: {
    curve: 100000000000000000n,
    flat: 500000000000000n,
    governance: 150000000000000000n,
  },
  initialSharePrice: 1000000000000000000n,
  minimumShareReserves: 1000000000000000n,
  minimumTransactionAmount: 1000000000000n,
  timeStretch: 31124187940342208n,
  positionDuration: 31536000n,
  checkpointDuration: 86400n,
  linkerCodeHash: "0x".padEnd(66, "0") as `0x${string}`,
  linkerFactory: ZERO_ADDRESS,
  precisionThreshold: 100000000000000000n,
};
