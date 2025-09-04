import { ZERO_ADDRESS } from "@delvtech/drift";
import { PoolConfig } from "src/hyperdrive/types";

const SEVEN_DAYS = 604_800n;
const THIRTY_DAYS = 2_592_000n;

export const stubPoolConfig7Days: PoolConfig = {
  baseToken: ZERO_ADDRESS,
  vaultSharesToken: ZERO_ADDRESS,
  governance: ZERO_ADDRESS,
  feeCollector: ZERO_ADDRESS,
  sweepCollector: ZERO_ADDRESS,
  fees: {
    curve: 100000000000000000n,
    flat: 500000000000000n,
    governanceLP: 10000000000000000n,
    governanceZombie: 100000000000000000n,
  },
  initialVaultSharePrice: 1000000000000000000n,
  minimumShareReserves: 10000000000000000000n,
  minimumTransactionAmount: 1000000000000000n,
  timeStretch: 44463125629060298n,
  positionDuration: SEVEN_DAYS,
  checkpointDuration: 3600n,
  linkerCodeHash: "0x".padEnd(66, "0") as `0x${string}`,
  linkerFactory: ZERO_ADDRESS,
  circuitBreakerDelta: 0n,
  checkpointRewarder: ZERO_ADDRESS,
};

export const stubPoolConfig30Days: PoolConfig = {
  ...stubPoolConfig7Days,
  positionDuration: THIRTY_DAYS,
};
