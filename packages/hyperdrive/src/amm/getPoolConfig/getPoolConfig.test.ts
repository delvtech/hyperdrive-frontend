import { expect, test } from "vitest";

import { publicClient } from "src/testing/utils";
import { getPoolConfig } from "src/amm/getPoolConfig/getPoolConfig";
import { ViemHyperdrive } from "src/contract/viem/ViemHyperdrive";

test("gets the poolConfig", async () => {
  const contract = new ViemHyperdrive({
    address: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
    publicClient,
  });

  const poolConfig = await getPoolConfig(contract);

  expect(poolConfig).toStrictEqual({
    baseToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    checkpointDuration: 3600n,
    feeCollector: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    fees: {
      curve: 100000000000000000n,
      flat: 500000000000000n,
      governance: 150000000000000000n,
    },
    governance: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    initialSharePrice: 1000000000000000000n,
    minimumShareReserves: 10000000000000000000n,
    oracleSize: 10n,
    positionDuration: 604800n,
    timeStretch: 44463125629060298n,
    updateGap: 3600n,
  });
});
