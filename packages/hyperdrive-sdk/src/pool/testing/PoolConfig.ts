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
    governanceLP: 0n,
    governanceZombie: 0n,
  },
  linkerCodeHash: "0x".padEnd(66, "0") as `0x${string}`,
  linkerFactory: ZERO_ADDRESS,
};

export const mockPoolConfig: PoolConfig = {
  baseToken: ZERO_ADDRESS,
  governance: ZERO_ADDRESS,
  feeCollector: ZERO_ADDRESS,
  fees: {
    curve: 100000000000000000n,
    flat: 500000000000000n,
    governanceLP: 10000000000000000n,
    governanceZombie: 100000000000000000n,
  },
  initialSharePrice: 1000000000000000000n,
  minimumShareReserves: 10000000000000000000n,
  minimumTransactionAmount: 1000000000000000n,
  timeStretch: 44463125629060298n,
  positionDuration: 604800n,
  checkpointDuration: 3600n,
  linkerCodeHash: "0x".padEnd(66, "0") as `0x${string}`,
  linkerFactory: ZERO_ADDRESS,
};
